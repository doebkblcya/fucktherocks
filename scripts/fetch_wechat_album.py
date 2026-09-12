#!/usr/bin/env python3
"""Archive a public WeChat album into docs/materials/raw.

The archive intentionally keeps article-body HTML and source metadata, while
discarding the repeated WeChat page shell (scripts, tracking code, navigation).
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup


USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0 Safari/537.36"
)
ALBUM_ENDPOINT = "https://mp.weixin.qq.com/mp/appmsgalbum"
DEFAULT_OUTPUT = Path("docs/materials/raw/cong-ling-kaishi-shuo-yaogun")


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def request_bytes(url: str, *, json_request: bool = False, attempts: int = 4) -> bytes:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Referer": "https://mp.weixin.qq.com/",
    }
    if json_request:
        headers.update(
            {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "X-Requested-With": "XMLHttpRequest",
            }
        )

    last_error: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            with urlopen(Request(url, headers=headers), timeout=30) as response:
                return response.read()
        except (HTTPError, URLError, TimeoutError) as error:
            last_error = error
            if attempt < attempts:
                time.sleep(attempt * 2)
    raise RuntimeError(f"request failed after {attempts} attempts: {url}") from last_error


def album_page(biz: str, album_id: str, cursor: tuple[str, str] | None) -> dict:
    params = {
        "action": "getalbum",
        "__biz": biz,
        "album_id": album_id,
        "count": "10",
        "f": "json",
    }
    if cursor:
        params["begin_msgid"], params["begin_itemidx"] = cursor
    payload = request_bytes(
        f"{ALBUM_ENDPOINT}?{urlencode(params)}", json_request=True
    )
    data = json.loads(payload)
    if int(data.get("base_resp", {}).get("ret", -1)) != 0:
        raise RuntimeError(f"album API error: {data.get('base_resp')}")
    return data["getalbum_resp"]


def fetch_catalog(biz: str, album_id: str) -> list[dict]:
    articles: list[dict] = []
    seen: set[tuple[str, str]] = set()
    cursor: tuple[str, str] | None = None

    while True:
        response = album_page(biz, album_id, cursor)
        page = response.get("article_list") or []
        if isinstance(page, dict):
            page = [page]
        if not page:
            break

        added = 0
        for article in page:
            key = (str(article["msgid"]), str(article["itemidx"]))
            if key in seen:
                continue
            seen.add(key)
            articles.append(article)
            added += 1

        next_cursor = (str(page[-1]["msgid"]), str(page[-1]["itemidx"]))
        if not int(response.get("continue_flag", 0)):
            break
        if added == 0 or next_cursor == cursor:
            raise RuntimeError(f"album pagination stopped advancing at {next_cursor}")
        cursor = next_cursor
        time.sleep(0.35)

    return articles


def canonical_article_url(url: str) -> str:
    return html.unescape(url).replace("http://mp.weixin.qq.com/", "https://mp.weixin.qq.com/")


def article_document(article: dict, body_html: str) -> str:
    title = html.escape(article["title"])
    source_url = html.escape(canonical_article_url(article["url"]), quote=True)
    published = datetime.fromtimestamp(
        int(article["create_time"]), tz=timezone.utc
    ).isoformat(timespec="seconds")
    return (
        "<!doctype html>\n"
        '<html lang="zh-CN">\n<head>\n'
        '<meta charset="utf-8">\n'
        f"<title>{title}</title>\n"
        f'<meta name="source-url" content="{source_url}">\n'
        f'<meta name="published-at" content="{published}">\n'
        "</head>\n<body>\n"
        f"{body_html}\n"
        "</body>\n</html>\n"
    )


def extract_article(raw_page: bytes, article: dict) -> tuple[str, int]:
    soup = BeautifulSoup(raw_page, "html.parser")
    body = soup.find(id="js_content")
    if body is None:
        page_text = raw_page.decode("utf-8", errors="replace")
        if "环境异常" in page_text or "访问过于频繁" in page_text:
            raise RuntimeError("WeChat returned a verification/rate-limit page")
        raise RuntimeError("article body #js_content was not found")

    # WeChat lazy-loads images from data-src. Keep the original attribute and
    # add src so the archived HTML is also directly viewable in a browser.
    for image in body.find_all("img"):
        if image.get("data-src") and not image.get("src"):
            image["src"] = image["data-src"]

    document = article_document(article, str(body))
    text_length = len(body.get_text("\n", strip=True))
    return document, text_length


def fetch_article(article: dict, attempts: int = 4) -> tuple[str, int]:
    """Fetch and validate an article, retrying transient HTTP-200 block pages."""
    last_error: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            raw_page = request_bytes(canonical_article_url(article["url"]))
            return extract_article(raw_page, article)
        except RuntimeError as error:
            last_error = error
            if attempt < attempts:
                time.sleep(attempt * 2)
    raise RuntimeError(f"article extraction failed after {attempts} attempts") from last_error


def safe_write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".part")
    temporary.write_text(content, encoding="utf-8")
    temporary.replace(path)


def safe_write_json(path: Path, content: dict) -> None:
    safe_write_text(path, json.dumps(content, ensure_ascii=False, indent=2) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--biz", required=True)
    parser.add_argument("--album-id", required=True)
    parser.add_argument("--title", required=True)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--delay", type=float, default=1.0)
    parser.add_argument("--catalog-only", action="store_true")
    args = parser.parse_args()

    output: Path = args.output
    articles_dir = output / "articles"
    manifest_path = output / "manifest.json"
    articles_dir.mkdir(parents=True, exist_ok=True)

    print("Fetching album catalog...", flush=True)
    catalog = fetch_catalog(args.biz, args.album_id)
    print(f"Catalog contains {len(catalog)} articles.", flush=True)

    manifest_articles = []
    previous = {}
    if manifest_path.exists():
        previous_data = json.loads(manifest_path.read_text(encoding="utf-8"))
        previous = {
            (str(item["msgid"]), str(item["itemidx"])): item
            for item in previous_data.get("articles", [])
        }

    for position, article in enumerate(catalog, start=1):
        msgid = str(article["msgid"])
        itemidx = str(article["itemidx"])
        relative_path = f"articles/{position:04d}-{msgid}-{itemidx}.html"
        record = {
            "position": position,
            "msgid": msgid,
            "itemidx": itemidx,
            "title": article["title"],
            "published_at": datetime.fromtimestamp(
                int(article["create_time"]), tz=timezone.utc
            ).isoformat(timespec="seconds"),
            "source_url": canonical_article_url(article["url"]),
            "cover_url": article.get("cover_img_1_1", ""),
            "local_path": relative_path,
            "status": "pending",
        }
        old = previous.get((msgid, itemidx), {})
        old_path = output / old.get("local_path", "") if old.get("local_path") else None
        new_path = output / relative_path
        if old.get("status") == "ok" and old_path and old_path.exists():
            if old_path != new_path:
                new_path.parent.mkdir(parents=True, exist_ok=True)
                old_path.replace(new_path)
            record.update(
                {
                    "status": "ok",
                    "bytes": new_path.stat().st_size,
                    "sha256": hashlib.sha256(new_path.read_bytes()).hexdigest(),
                    "text_length": old.get("text_length"),
                }
            )
        manifest_articles.append(record)

    manifest = {
        "schema_version": 1,
        "title": args.title,
        "source_type": "wechat_album",
        "source_url": (
            f"{ALBUM_ENDPOINT}?"
            + urlencode(
                {"__biz": args.biz, "action": "getalbum", "album_id": args.album_id}
            )
        ),
        "biz": args.biz,
        "album_id": args.album_id,
        "catalog_fetched_at": utc_now(),
        "article_count": len(manifest_articles),
        "articles": manifest_articles,
    }
    safe_write_json(manifest_path, manifest)
    if args.catalog_only:
        return 0

    for record, article in zip(manifest_articles, catalog):
        path = output / record["local_path"]
        if record["status"] == "ok" and path.exists():
            print(f"[{record['position']:04d}/{len(catalog):04d}] cached  {record['title']}", flush=True)
            continue

        print(f"[{record['position']:04d}/{len(catalog):04d}] fetch   {record['title']}", flush=True)
        try:
            document, text_length = fetch_article(article)
            safe_write_text(path, document)
            record.update(
                {
                    "status": "ok",
                    "bytes": path.stat().st_size,
                    "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
                    "text_length": text_length,
                    "fetched_at": utc_now(),
                }
            )
        except Exception as error:  # Continue so one bad article does not lose the batch.
            record.update({"status": "error", "error": str(error)})
            print(f"  ERROR: {error}", file=sys.stderr, flush=True)
        safe_write_json(manifest_path, manifest)
        time.sleep(max(args.delay, 0))

    ok_count = sum(item["status"] == "ok" for item in manifest_articles)
    error_count = sum(item["status"] == "error" for item in manifest_articles)
    print(f"Done: {ok_count} archived, {error_count} errors.", flush=True)
    return 0 if error_count == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
