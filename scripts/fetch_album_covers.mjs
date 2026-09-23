import { access, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const projectRoot = new URL('../', import.meta.url);
const albums = JSON.parse(await readFile(new URL('../src/data/home-albums.json', import.meta.url), 'utf8'));
const outputDir = new URL('../public/covers/', import.meta.url);
const userAgent = 'FuckTheRocks/0.1 (https://github.com/doebkblcya/fucktherocks)';

await mkdir(outputDir, { recursive: true });

const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
let manifest = [];
try {
  manifest = JSON.parse(await readFile(new URL('manifest.json', outputDir), 'utf8'));
} catch {
  manifest = [];
}

async function fetchCover(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(url, { headers: { 'User-Agent': userAgent } });
    if (response.ok && response.headers.get('content-type')?.startsWith('image/')) {
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length > 1_000_000) throw new Error(`Unexpectedly large cover: ${url}`);
      return { bytes, sourceImage: response.url };
    }
    if (response.status !== 500 && response.status !== 503) break;
    await pause((attempt + 1) * 1000);
  }
  return null;
}

for (const album of albums) {
  if (manifest.some((entry) => entry.id === album.id)) {
    try {
      await access(new URL(`${album.id}.jpg`, outputDir));
      process.stdout.write(`skip ${album.title}\n`);
      continue;
    } catch {
      manifest = manifest.filter((entry) => entry.id !== album.id);
    }
  }

  let selected = album.musicbrainzId ? { id: album.musicbrainzId } : null;
  if (!selected) {
    const searchQueries = [
      `releasegroup:"${album.title}" AND artist:"${album.artist}" AND primarytype:album AND date:${album.year}`,
      `releasegroup:"${album.title}" AND artist:"${album.artist}"`,
    ];
    for (const expression of searchQueries) {
      const query = new URL('https://musicbrainz.org/ws/2/release-group/');
      query.searchParams.set('query', expression);
      query.searchParams.set('fmt', 'json');
      query.searchParams.set('limit', '25');
      const searchResponse = await fetch(query, { headers: { 'User-Agent': userAgent } });
      if (!searchResponse.ok) throw new Error(`MusicBrainz ${searchResponse.status}: ${album.title}`);
      const search = await searchResponse.json();
      const candidates = (search['release-groups'] ?? []).filter((candidate) => {
        const titleMatches = normalize(candidate.title) === normalize(album.title);
        const artistMatches = (candidate['artist-credit'] ?? []).some(
          (part) => normalize(part.artist?.name ?? part.name ?? '') === normalize(album.artist),
        );
        const year = Number(candidate['first-release-date']?.slice(0, 4));
        return titleMatches && artistMatches && Math.abs(year - album.year) <= 2;
      });
      selected = candidates.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];
      if (selected) break;
      await pause(1150);
    }
  }
  if (!selected) throw new Error(`No matching MusicBrainz release group: ${album.title}`);

  let coverUrl = album.coverRelease
    ? `https://coverartarchive.org/release/${album.coverRelease}/front-500`
    : `https://coverartarchive.org/release-group/${selected.id}/front-500`;

  let cover = await fetchCover(coverUrl);
  if (!cover) {
    const releasesUrl = new URL('https://musicbrainz.org/ws/2/release/');
    releasesUrl.searchParams.set('release-group', selected.id);
    releasesUrl.searchParams.set('fmt', 'json');
    releasesUrl.searchParams.set('limit', '50');
    await pause(1150);
    const releasesResponse = await fetch(releasesUrl, { headers: { 'User-Agent': userAgent } });
    if (!releasesResponse.ok) throw new Error(`MusicBrainz releases ${releasesResponse.status}: ${album.title}`);
    const releases = await releasesResponse.json();
    const candidates = (releases.releases ?? [])
      .filter((release) => release.status === 'Official')
      .sort((a, b) => {
        const yearA = Number(a.date?.slice(0, 4)) || 9999;
        const yearB = Number(b.date?.slice(0, 4)) || 9999;
        const scoreA = Math.abs(yearA - album.year) + (['US', 'GB'].includes(a.country) ? 0 : 2);
        const scoreB = Math.abs(yearB - album.year) + (['US', 'GB'].includes(b.country) ? 0 : 2);
        return scoreA - scoreB;
      });

    for (const release of candidates.slice(0, 12)) {
      const candidateUrl = `https://coverartarchive.org/release/${release.id}/front-500`;
      cover = await fetchCover(candidateUrl);
      if (cover) {
        coverUrl = candidateUrl;
        break;
      }
    }
  }
  if (!cover) throw new Error(`Cover unavailable for all checked releases: ${album.title}`);

  const file = `${album.id}.jpg`;
  await writeFile(new URL(file, outputDir), cover.bytes);

  manifest.push({
    id: album.id,
    title: album.title,
    artist: album.artist,
    year: album.year,
    file: `/covers/${file}`,
    musicbrainzReleaseGroup: `https://musicbrainz.org/release-group/${selected.id}`,
    coverSource: coverUrl,
    sourceImage: cover.sourceImage,
    bytes: cover.bytes.length,
    rightsStatus: 'Not verified for public site publication',
  });

  await writeFile(new URL('manifest.json', outputDir), `${JSON.stringify(manifest, null, 2)}\n`);
  process.stdout.write(`${album.year} ${album.artist} — ${album.title}: ${Math.round(cover.bytes.length / 1024)} KB\n`);
  await pause(1150);
}

await writeFile(new URL('manifest.json', outputDir), `${JSON.stringify(manifest, null, 2)}\n`);
process.stdout.write(`Saved ${manifest.length} covers to ${join(projectRoot.pathname, 'public/covers')}\n`);
