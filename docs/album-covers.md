# 首页专辑封面：第一轮选择

这 30 张是用于检验时间顺序、球面手感和画面密度的编辑样本，不是“最佳专辑”榜单。排序以首次发行年份为准；同年的顺序是构图选择。

| 年份 | 专辑 · 艺人 | 在首页承担的线索 |
| --- | --- | --- |
| 1956 | *Elvis Presley* · Elvis Presley | 早期 Rock ’n’ Roll 的大众形象 |
| 1965 | *Highway 61 Revisited* · Bob Dylan | Folk Rock 与电声化转向 |
| 1966 | *Revolver* · The Beatles | 录音室实验与 Psychedelia |
| 1967 | *The Velvet Underground & Nico* · The Velvet Underground | 地下场景与 Art Rock |
| 1967 | *Are You Experienced* · The Jimi Hendrix Experience | 迷幻吉他与舞台表演 |
| 1969 | *Led Zeppelin* · Led Zeppelin | Hard Rock 的早期形象 |
| 1969 | *In the Court of the Crimson King* · King Crimson | Progressive Rock 的戏剧性视觉 |
| 1970 | *Paranoid* · Black Sabbath | Heavy Metal 的早期视觉锚点 |
| 1972 | *Ziggy Stardust* · David Bowie | Glam Rock 与人物形象 |
| 1973 | *The Dark Side of the Moon* · Pink Floyd | Progressive Rock 与封面图形 |
| 1975 | *Horses* · Patti Smith | Punk 前史与诗性表达 |
| 1976 | *Ramones* · Ramones | Punk 的极简乐队肖像 |
| 1977 | *Marquee Moon* · Television | 纽约场景与吉他实验 |
| 1979 | *Unknown Pleasures* · Joy Division | Post-Punk 的黑白图形 |
| 1979 | *London Calling* · The Clash | Punk 与更广泛音乐资源的连接 |
| 1980 | *Back in Black* · AC/DC | Hard Rock 的单色封面 |
| 1981 | *Damaged* · Black Flag | Hardcore Punk 与地下发行 |
| 1986 | *Master of Puppets* · Metallica | Thrash Metal |
| 1988 | *Daydream Nation* · Sonic Youth | Noise Rock 与独立场景 |
| 1989 | *Doolittle* · Pixies | Alternative Rock 的结构与动态 |
| 1991 | *Loveless* · My Bloody Valentine | Shoegaze 的模糊影像 |
| 1991 | *Nevermind* · Nirvana | Grunge 与主流突破 |
| 1992 | *Dirt* · Alice in Chains | Grunge 与 Metal 的交叠 |
| 1994 | *The Downward Spiral* · Nine Inch Nails | Industrial Rock 的暗色视觉 |
| 1997 | *OK Computer* · Radiohead | 1990 年代后期的另类摇滚 |
| 2001 | *Is This It* · The Strokes | 车库摇滚复兴；目前抓取的是英版封面 |
| 2001 | *White Blood Cells* · The White Stripes | 车库摇滚复兴与双色封面 |
| 2004 | *American Idiot* · Green Day | Pop Punk 的主流化 |
| 2010 | *The Suburbs* · Arcade Fire | Indie Rock 与年代记忆 |
| 2014 | *To Be Kind* · Swans | 实验摇滚的后期延伸 |

原图缩略版已自动抓取到项目的 `public/covers/`，随静态构建一起部署到 Cloudflare Pages；页面运行时不依赖第三方图片服务器或 R2。图片文件纳入 Git，`pnpm covers` 仅用于补抓缺失文件。每张封面的 MusicBrainz 条目、Cover Art Archive 图片地址和本地路径均记录在 `public/covers/manifest.json`。检索与下载流程见 `scripts/fetch_album_covers.mjs`。

这些图片可供本地设计评审；**公开可访问不等于已获公开展示授权**。所有条目的权利状态仍标为未核实，正式发布前应逐一确认适用授权或取得许可，无法确认时替换为有权使用的素材。

首页的一句话介绍存放在 `src/data/home-albums.json` 的 `intro` 字段，与上表的编辑线索逐张对应；它只解释当前聚焦专辑，不作为完整唱片评论或独立详情页。

来源接口：[MusicBrainz release groups](https://musicbrainz.org/doc/MusicBrainz_API)，[Cover Art Archive API](https://musicbrainz.org/doc/Cover_Art_Archive/API)。
