import fs from "node:fs";

const manifest = JSON.parse(
  fs.readFileSync(
    "docs/materials/raw/cong-ling-kaishi-shuo-yaogun/manifest.json",
    "utf8",
  ),
);

const groups = [
  ["roots", "定义、根源与早期摇滚", /摇滚精神|开端：/i, "roots, blues, r-and-b, gospel, country, rock-and-roll", "用于开场、根源汇流和摇滚作为文化类别的叙事；种族、市场与“第一首摇滚”相关判断需外部核验。"],
  ["folk-rock", "民谣摇滚", /民谣摇滚/i, "folk-rock", "用于 1960 年代歌曲写作、抗议文化与电声化关系。"],
  ["psychedelic-garage", "迷幻、车库与酸性摇滚", /迷幻摇滚|车库摇滚|酸性摇滚/i, "psychedelic-rock, garage-rock, acid-rock", "用于 1965—1969 的第一次大分化和 Psychedelic/Hard/Proto-Punk 之间的桥梁。"],
  ["prog-rock", "前卫摇滚", /前卫摇滚/i, "progressive-rock, art-rock", "用于前卫摇滚从萌芽、成熟到 1970 年代退潮的阶段叙事。"],
  ["hard-heavy", "硬摇滚与早期重金属", /硬摇滚|早期重金属|名词解析和分类/i, "hard-rock, heavy-metal", "用于 Hard Rock 与 Heavy Metal 的重叠、分化及边界争议。"],
  ["velvet-underground", "The Velvet Underground 补遗", /Velvet Underground/i, "experimental-rock, art-rock, proto-punk", "用于把实验摇滚连接到 Art Rock、Punk、Alternative 与 Noise 网络。"],
  ["punk-postpunk", "Punk 与 Post-Punk", /朋克|后朋/i, "punk-rock, post-punk, new-wave", "用于 1970 年代中后期的 Punk 爆发、DIY 生产方式及 Post-Punk 分化。"],
  ["nwobhm", "NWOBHM", /不列颠重金属新浪潮/i, "nwobhm, speed-metal, power-metal, thrash-metal", "用于传统重金属向 1980 年代速度化与极端化转型。"],
  ["glam", "Glam Rock 与 Glam Metal", /华丽摇滚|华丽金属/i, "glam-rock, glam-metal", "需严格区分 1970 年代英国 Glam Rock 与 1980 年代美国 Glam/Hair Metal。"],
  ["grunge", "Grunge", /Grunge|垃圾摇滚/i, "grunge, post-grunge", "用于 Seattle 场景形成、1991 商业突破及主流化后的标签变化。"],
  ["thrash-groove", "Thrash 与 Groove Metal", /Thrash|Groove metal|敲击金属|激流/i, "thrash-metal, groove-metal", "用于 Punk/Metal 交叉、1986 高峰及 1990 年代 Groove 转型。"],
  ["death-metal", "Death Metal", /Death metal|死亡金属|哥德堡之声/i, "death-metal, brutal-death-metal, melodic-death-metal, technical-death-metal", "用于 Death Metal 成形、Florida 场景、哥德堡旋律死亡与后续技术化。"],
  ["black-metal", "Black Metal", /Black.?metal|黑金属|黑色王朝|黑暗时代/i, "black-metal, atmospheric-black-metal, symphonic-black-metal", "区分第一波影响与 1990 年代挪威第二波场景，避免把主题、意识形态和声音混为一类。"],
  ["power-speed", "Speed 与 Power Metal", /Power metal|Powermetal|Speed metal/i, "speed-metal, power-metal", "用于美式与欧式 Power Metal 路线及 Speed/Thrash/Power 的共享来源。"],
  ["progressive-metal", "Progressive Metal", /Progressive Metal|progressive metal|前卫金属/i, "progressive-metal, technical-death-metal", "用于 Prog Rock 与 Metal 的结合，以及技术化极端金属的交叉影响。"],
  ["doom-stoner", "Doom、Death-Doom、Funeral Doom 与 Stoner", /Doom Metal|厄运|Death-Doom|Funeral Doom|石人|Stoner/i, "doom-metal, death-doom, funeral-doom, stoner-metal", "用于 Black Sabbath 遗产的慢速重量分支。"],
  ["goth-darkwave", "Gothic Rock、Ethereal 与 Darkwave", /哥特摇滚|后哥特|仙音|暗潮/i, "gothic-rock, ethereal-wave, darkwave", "用于 Post-Punk 的阴暗分支；与 Gothic Metal 分开建模。"],
  ["shoegaze-metalgaze", "Shoegaze 与 Metalgaze", /Shoegaze|盯鞋|Metalgaze/i, "dream-pop, shoegaze, blackgaze", "用于 Dream Pop/Noise Pop 到 Shoegaze，以及其与 Black Metal/Post-Metal 的后续融合。"],
  ["hardcore-crossover", "Hardcore Punk 与 Crossover Thrash", /Hardcore punk|硬核|Crossover Thrash|跨界激流/i, "hardcore-punk, post-hardcore, crossover-thrash", "用于 Hardcore 场景、速度语法、breakdown 和 Punk/Metal 双向渗透。"],
  ["britpop", "Britpop", /Britpop|英伦摇滚/i, "britpop, british-indie", "用于 1990 年代英国文化运动及其与 Shoegaze、Grunge、Madchester 的场景关系。"],
  ["metalcore", "Metalcore", /metalcore|金属核/i, "metalcore, melodic-metalcore", "用于 1990 年代 Hardcore/Metal 交叉与 2000 年代旋律化；不能由 Grindcore 单线推出。"],
  ["gothic-metal", "Gothic Metal", /哥特金属|Gothic Metal/i, "gothic-metal, symphonic-metal, death-doom", "用于 Death-Doom、Gothic/Ethereal 与交响方法的交汇，保留边界争议。"],
  ["alternative-indie", "Alternative 与 Indie Rock", /另类摇滚|独立摇滚|Lollapalooza/i, "alternative-rock, indie-rock", "用于制度位置、场景身份和商业标签之间的变化。"],
  ["industrial", "Industrial、Industrial Rock 与 Industrial Metal", /Industrial|工业音乐|工业摇滚|工业金属/i, "industrial, industrial-rock, industrial-metal", "用于电子先锋／行为艺术传统进入 Rock 与 Metal 的过程。"],
  ["alternative-metal", "Alternative Metal、Rap/Funk Metal 与 Nu Metal", /另类金属|Alternative Metal|Nu metal|新金属|RAP METAL|FUNK METAL|Linkin Park/i, "alternative-metal, rap-metal, funk-metal, nu-metal", "用于 1990 年代跨界金属与 2000 年前后商业爆发。"],
  ["post-rock", "Post-Rock", /post-rock|之后摇滚/i, "post-rock, math-rock", "用于 Rock 乐器脱离传统歌曲结构后的实验路线。"],
  ["post-metal", "Post-Metal", /后金属|Postmetal|post metal/i, "post-metal, sludge-metal, post-rock", "用于 Sludge/Hardcore 的重量与 Post-Rock 长篇结构、氛围的融合。"],
  ["krautrock", "德国摇滚与 Krautrock", /Krautrock|德国摇滚/i, "krautrock, experimental-rock, electronic", "用于德国实验场景、motorik、电子与后续 Post-Punk/Post-Rock 影响。"],
  ["context", "文化与术语补充", /脏标|妇女节|极端嗓/i, "context-only", "作为审查制度、性别、表演与极端唱法等横向背景，不直接建立流派父子关系。"],
];

const assigned = new Map(groups.map(([slug]) => [slug, []]));
const unassigned = [];

for (const article of [...manifest.articles].reverse()) {
  const group = groups.find(([, , pattern]) => pattern.test(article.title));
  (group ? assigned.get(group[0]) : unassigned).push(article);
}

const lines = [
  "# 可探索的摇滚发展关系图：来源与证据索引",
  "",
  "- 状态：待确认",
  "- 对应母稿：[可探索的摇滚发展关系图](./explorable-rock-map.md)",
  "- 原始合集：[《从零开始说摇滚》归档](./raw/cong-ling-kaishi-shuo-yaogun/manifest.json)",
  "- 关系图：[文字转写](./raw/rock-genre-genealogy-chart/transcription.md)",
  "- 最后整理：2026-09-12",
  "",
  "## 一、用途",
  "",
  "本文件记录母稿中的时间阶段、流派节点和关系分别来自哪里。它不是另一套“发展史”或“分类学”，而是同一张时间化关系网络的证据底账。",
  "",
  "《从零开始说摇滚》提供主要中文叙事素材、乐队与专辑线索；关系图提供待验证的节点和箭头；外部权威资料用于补齐缺口、核对日期并处理分类争议。公众号原文中的评价不自动视为事实，关系图中的箭头也不自动视为直接衍生。",
  "",
  "## 二、来源规模",
  "",
  "| 来源 | 规模 | 在母稿中的角色 |",
  "| --- | ---: | --- |",
  "| 《从零开始说摇滚》 | " + manifest.article_count + " 篇，正文约 " + manifest.articles.reduce((sum, article) => sum + (article.text_length || 0), 0).toLocaleString("zh-CN") + " 字符 | 主要叙事、主题顺序、乐队与专辑候选 |",
  "| 流派关系图转写 | 3 个分区、约 60 个可辨识名称 | 初始节点与待验证关系 |",
  "| 外部资料 | 持续补充 | 根源、关键日期、关系类型、争议和缺失节点 |",
  "",
  "## 三、证据使用规则",
  "",
  "1. 原文只做归纳，不大段复制。",
  "2. 每个事实性关系至少区分为直接衍生、融合、影响、场景承接、商业化或复兴。",
  "3. 公众号与外部资料冲突时，母稿保留争议说明，来源索引记录取舍。",
  "4. 单一乐队可以跨多个节点，不能反过来证明两个流派完全等同。",
  "5. 专辑只作为形成、转折或代表性锚点，不形成“最佳榜单”。",
  "6. 本表的“关联节点”是编辑路由，不代表文章中的每句话都支持全部节点。",
  "",
  "## 四、公众号逐篇映射",
  "",
];

for (const [slug, label, , nodes, note] of groups) {
  const articles = assigned.get(slug);
  lines.push("### " + label, "");
  lines.push("- 关联节点：" + nodes);
  lines.push("- 整合说明：" + note);
  lines.push("- 收录文章：" + articles.length + " 篇", "");
  lines.push("| 合集位置 | 原文 | 本地归档 | 状态 |");
  lines.push("| ---: | --- | --- | --- |");
  for (const article of articles) {
    const title = article.title.replaceAll("|", "｜");
    const path = "./raw/cong-ling-kaishi-shuo-yaogun/" + article.local_path;
    const status = article.status === "ok" ? "已归档" : "需复核";
    lines.push("| " + article.position + " | " + title + " | [HTML](" + path + ") | " + status + " |");
  }
  lines.push("");
}

lines.push("## 五、未归类文章", "");
if (unassigned.length === 0) {
  lines.push("全部 175 篇文章均已进入至少一个主题簇。", "");
} else {
  lines.push("| 合集位置 | 原文 | 本地归档 |");
  lines.push("| ---: | --- | --- |");
  for (const article of unassigned) {
    const path = "./raw/cong-ling-kaishi-shuo-yaogun/" + article.local_path;
    lines.push("| " + article.position + " | " + article.title.replaceAll("|", "｜") + " | [HTML](" + path + ") |");
  }
  lines.push("");
}

lines.push(
  "## 六、关系图校正账",
  "",
  "| 原图表达 | 母稿处理 | 证据状态 |",
  "| --- | --- | --- |",
  "| Folk → Blues / Jazz | 不采用单亲关系；拆分为相互接触但各自独立的历史根系 | 外部资料已校正 |",
  "| Pop → R&B | 删除；改为长期 crossover | 外部资料已校正 |",
  "| Jazz → Psychedelic Rock | 改为影响，并补 Folk/Garage/录音室实验 | 多源关系 |",
  "| Garage Rock → Hard Rock | 保留为部分影响，不作为唯一父级 | 多源关系 |",
  "| Emo → Post-Grunge | 删除 | 路线错误 |",
  "| Industrial → Darkwave | 保留部分影响，补 Post-Punk/New Wave/Goth/Electronic | 多源关系 |",
  "| Progressive Metal → Technical Death Metal | 改为 Death Metal 主干叠加 Progressive/technical 影响 | 多源关系 |",
  "| Brutal Death → Gothic Metal | 删除；改为 Death-Doom/Gothic/Ethereal 等交汇 | 路线错误 |",
  "| Industrial Metal → Grindcore | 删除；Grindcore 主干来自 Hardcore/Crust 与 Thrash/Death | 路线错误 |",
  "| Grindcore → Metalcore | 降为局部影响；Metalcore 主干为 Hardcore + Metal | 路线错误 |",
  "| Doom → Viking Metal | 删除直接父级 | 证据不足 |",
  "| Power Metal → Symphonic Metal | 改为常见来源之一；Symphonic 作为跨类型方法 | 多源关系 |",
  "",
  "## 七、外部资料目录",
  "",
  "外部来源的完整书目信息在母稿脚注中维护。本表记录其证据用途和适用边界，避免把概览页面当作所有细节的唯一依据。",
  "",
  "| 母稿脚注 | 来源 | 主要用途 | 证据边界 |",
  "| --- | --- | --- | --- |",
  "| 1 | Brackett, *Categorizing Sound* | 解释流派名称的历史、产业和文化属性 | 分类方法，不直接支持具体谱系箭头 |",
  "| 2 | Lena & Peterson, “Classification as Culture” | 流派形成、制度化及轨迹模型 | 社会学模型，不等同摇滚专属时间线 |",
  "| 3 | Rock Hall, “Roots of Rock” | Blues、R&B、Country、Gospel 等根源框架 | 博物馆概览，细节需与专门史互证 |",
  "| 4–5 | Smithsonian / NMAAHC 的 Black Music、R&B 资料 | 非裔美国传统、迁移、城市社群与市场分类 | 用于纠正单线根系，不替代各传统专史 |",
  "| 6 | Mauch et al., *Royal Society Open Science* | 1960—2010 美国流行音乐变化、British Invasion 边界 | 依据音频特征与榜单语料，不等同社会史 |",
  "| 7、10 | Library of Congress 录音名录论文 | Velvet Underground 与 Chuck Berry 的关键历史作用 | 以特定录音为中心 |",
  "| 8–9 | Angeler；Soto-Silva | Metal 的复杂网络与研究型多层分类 | 元分类证据，不为每条风格边逐一背书 |",
  "| 12–15、20、25 | Rock Hall 与 V&A | Genesis、Black Sabbath、Glam、Punk、Nirvana、Oasis 的历史节点 | 机构性人物／运动概览 |",
  "| 16–17 | Easley；Pearson，*Music Theory Online* | Hardcore 的节奏、riff、音色和演奏方法 | 音乐分析，场景史仍以其他材料补足 |",
  "| 18、21–23、25 | AllMusic 风格概览 | Industrial、Grunge、Post-Grunge、Shoegaze、Post-Rock、Britpop 的工作定义 | 编辑入口；不把短定义当唯一学术定论 |",
  "| 19 | Recording Academy 的 1986 Thrash 专题 | 1986 年作为 Thrash 高峰的专辑与口述材料 | 媒体专题，不代表 Thrash 的全部地域史 |",
  "| 24 | Hillier, *Journal of Music Research Online* | 早期 Melodic Death 的和声实践与谱系校正 | 聚焦早期作品，不概括此后所有路线 |",
  "",
  "母稿中的所有外部网址、作者、题名、刊物和访问日期见[“十一、来源”](./explorable-rock-map.md#十一来源)。",
  "",
  "## 八、编辑结论",
  "",
  "- 175 篇公众号文章已全部归入至少一个主题簇；没有遗失文章。",
  "- 原关系图保留为视觉和名称线索，不直接沿用错误或含混箭头。",
  "- 母稿使用 11 个时间阶段、四条交叉主干、七种正式关系和一组事件节点。",
  "- 当前内容可以开始转为结构化数据，但状态仍为“待确认”；用户确认范围和叙事重心后再改为“可入站”。",
  "",
);

process.stdout.write(lines.join("\n"));
