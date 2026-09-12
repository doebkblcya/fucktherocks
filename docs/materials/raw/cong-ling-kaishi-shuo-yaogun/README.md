# 《从零开始说摇滚》原始资料

来源：微信公众号“Soundlibrary声音图书馆”的同名合集。

本目录只做原始归档，暂不进行历史分期、流派分类、事实校订或文字改写。

- `manifest.json`：合集目录、原文地址、发布日期、封面地址及抓取状态；
- `articles/`：逐篇保存的正文 HTML；
- 图片和音频不下载到仓库，HTML 中保留原始资源地址；
- 微信页面公共外壳、脚本与追踪代码不归档。

重新抓取命令：

```bash
python3 scripts/fetch_wechat_album.py \
  --biz 'MzAxNDQ2Nzc2NQ==' \
  --album-id '1378906581068513282' \
  --title '从零开始说摇滚'
```
