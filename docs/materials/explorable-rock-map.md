# 可探索的摇滚发展关系图

- 状态：待确认
- 类型：探索页内容母稿
- 时间范围：19 世纪末的根源传统至 21 世纪网络时代
- 地域范围：以美国、英国和欧洲大陆主干为中心，必要时补充跨地域传播
- 来源底账：[来源与证据索引](./explorable-rock-map-sources.md)
- 原始关系图：[文字转写](./raw/rock-genre-genealogy-chart/transcription.md)
- 最后整理：2026-09-23

## 一、这张图讲什么

这不是一棵“父流派生出子流派”的家谱，而是一张带时间的关系网络。摇滚的发展由声音、场景、媒介、社会环境和产业命名共同推动；同一个流派可能同时来自多条传统，也可能先有实践、后有名称，再经过媒体和市场扩大传播。流派研究因此更适合处理关系、边界和形成过程，而不是寻找唯一正确的分类树。[^1][^2]

《从零开始说摇滚》的 175 篇文章是本稿的主要中文叙事素材。它对 Progressive Rock、Hard Rock/Heavy Metal、Punk、NWOBHM、Glam、Grunge、Extreme Metal、Goth、Shoegaze、Hardcore、Britpop、Metalcore、Industrial、Alternative Metal、Post-Rock 和 Post-Metal 有连续专题；关系图提供了约 60 个初始名称和一批待验证箭头；本轮整合与外部研究负责分类校正和空缺补充。逐篇对应关系记录在[来源与证据索引](./explorable-rock-map-sources.md)。

外部研究主要补足四类缺口：

1. Blues、Gospel、R&B、Country、Folk 与 Jazz 不是 Folk 的单线子代，而是各有历史、长期接触的根源传统；
2. 1960 年代的变化不只来自乐队和专辑，也来自民权运动、反文化、LP、放大技术和录音室；
3. Alternative、Indie、New Wave、Britpop、NWOBHM 等名称常常首先指向场景或产业位置，不是纯音色；
4. 2000 年以后不再存在一条可以代表全部摇滚的主流路线，复兴、混合与全球网络成为常态。

## 二、探索图的基本语法

### 1. 节点类型

| 类型 | ID | 含义 | 例子 |
| --- | --- | --- | --- |
| 根源传统 | `root` | 早于现代摇滚、长期提供语言的传统 | Blues、Gospel、Country |
| 邻接传统 | `adjacent` | 不归入摇滚，但持续与摇滚发生融合或影响 | Funk、Hip-Hop、Electronic、Ambient |
| 流派 | `genre` | 有相对稳定的声音语法与创作共同体 | Psychedelic Rock、Thrash Metal |
| 场景／运动 | `scene` | 地域、厂牌、场所、媒体与听众比统一音色更重要 | NWOBHM、Britpop、Seattle Grunge |
| 伞形标签 | `umbrella` | 容纳多种声音，常由媒体或产业扩散 | Alternative Rock、Indie Rock、New Wave |
| 方法／修饰语 | `method` | 可附着于多个流派，不必总设为独立父级 | Progressive、Symphonic、Atmospheric、Technical |
| 历史事件 | `event` | 改变传播条件或场景走向的节点 | British Invasion、MTV、1991 Alternative breakthrough |

节点可以跨类型。例如 Grunge 既有可辨认的声音，也指向 Seattle、Sub Pop 和 1980 年代中后期的地方网络；Indie 最初更接近生产和发行位置，后来才形成若干可辨识审美。页面应展示本项目采用的类型，但允许边界说明。

### 2. 关系类型

| ID | 中文显示 | 用途 | 视觉建议 |
| --- | --- | --- | --- |
| `derived_from` | 直接衍生 | 最主要、可连续追踪的历史与声音基础 | 实线箭头 |
| `fusion_of` | 融合形成 | 两个或多个来源共同构成新节点 | 汇合实线 |
| `influenced_by` | 受到影响 | 影响显著，但不足以构成直接父级 | 细虚线 |
| `scene_successor` | 场景承接 | 人员、厂牌、场所或组织伦理延续 | 点划线 |
| `commercialized_as` | 商业化为 | 地下实践经产业包装进入更广市场 | 双线或标签线 |
| `revival_of` | 复兴／再阐释 | 后来场景重新使用早期语法 | 回环线 |
| `parallel_with` | 同期并行 | 同期互相回应，但不存在明确继承 | 无箭头连线 |

原图所有箭头必须转换成上述一种关系；无法判断时暂存为 `unresolved`，不能默认写成 `derived_from`。

### 3. 时间字段

| 字段 | 含义 |
| --- | --- |
| `emergence` | 可辨认实践开始出现 |
| `codified` | 名称、声音和场景趋于稳定 |
| `breakthrough` | 进入更广传播或商业主流 |
| `revivals` | 后来的复兴区间，可有多个 |

“第一张唱片”“第一次使用名称”“场景真正形成”和“商业爆发”通常不是同一年。图上优先使用区间；只有证据充分时才标具体日期。

### 4. 可见层级

- **默认层**：约 40 个关键节点，保证第一眼能看懂四条主干；
- **展开层**：约 40—50 个支系、方法和地域节点，在聚焦父级时出现；
- **详情层**：乐队、专辑、厂牌、场所和人物，不作为主图永久节点；
- **事件层**：技术、媒体和社会事件，可按需打开。

## 三、全图骨架

第一版可用四条不断交叉的主干解释整体，而不是四棵互不相干的树。

### 1. 根源与 Rock 'n' Roll

Blues、R&B、Gospel、Country、Folk、Jazz 和流行歌曲工业在美国社会与音乐市场中长期接触，形成 1940—1950 年代的电声化、强反拍和青少年文化。Rock 'n' Roll 是这次汇流的公共名称，不是某一天由某个人单独发明。Rock Hall 与 Smithsonian 的资料都把 Blues、R&B、Gospel、Country/Folk 视为核心来源，并强调非裔美国音乐在节奏、演唱和表演上的基础作用。[^3][^4][^5]

### 2. 1960—1970 年代的扩张

British Beat、大西洋往返、Folk Revival、民权与反战运动、Garage 场景、效果器、放大器和多轨录音共同把 Rock 'n' Roll 扩展成 Rock。Folk Rock、Psychedelic、Garage、Blues Rock、Experimental/Art、Progressive、Hard Rock、Glam 与 Heavy Metal 在这一阶段形成。1964 是声音快速变化的节点，但量化研究显示变化在 British Invasion 前已经开始，英国乐队更像放大和加速既有趋势。[^6]

### 3. Punk、Post-Punk 与 Alternative 地下网络

Garage、The Velvet Underground、The Stooges 等 Proto-Punk 资源在 1970 年代中期与纽约、伦敦场景汇合。Punk 不只是更短更快的声音，也是 DIY 厂牌、fanzine、小型场所和低参与门槛构成的生产方式。其后 New Wave、Post-Punk、Hardcore、Goth、Indie、Alternative、Emo、Shoegaze、Grunge、Britpop 与 Post-Rock 沿不同场景扩展。Library of Congress 将 The Velvet Underground 的影响直接连接到 Punk、Hardcore、Alternative 与后来的实验摇滚。[^7]

### 4. Heavy Metal 的分化与再融合

Hard Rock、Blues Rock 和 Psychedelic 的重量在 Black Sabbath 等乐队处形成 Heavy Metal 的稳定核心；NWOBHM 重新组织速度、双吉他和独立发行网络；Thrash、Doom、Death、Black、Power、Progressive 等分支在 1980—1990 年代成形。Metal 又持续与 Hardcore、Industrial、Alternative、Folk、Goth、Hip-Hop、Shoegaze 和 Post-Rock 融合，形成 Crossover Thrash、Grindcore、Metalcore、Industrial Metal、Nu Metal、Blackgaze 与 Post-Metal。金属分类本身也是多层级网络，研究型数据集仍需承认地域、复合标签和优先级会改变分类结果。[^8][^9]

## 四、按时间探索

### 01 · 摇滚之前：多条根源在美国社会中相遇

- 时间：19 世纪末—1953
- 阶段 ID：`roots-before-rock`
- 主要节点：`blues`、`gospel`、`country`、`folk-traditions`、`jazz`、`r-and-b`
- 关键事件：录音工业分类、城市迁移、电声化、独立电台与厂牌

Blues、Gospel、Jazz 与 R&B 都深植非裔美国历史，但它们不是一条简单的先后链。Blues 提供蓝调音阶、十二小节等结构、个人叙事与 call-and-response；Gospel 提供强烈人声、应答和情感递进；Jazz 提供即兴、合奏互动与复杂和声；R&B 则在 1940 年代城市黑人音乐市场中整合 Jump Blues、Big Band、Boogie、Gospel 和电声节奏。Smithsonian 将 R&B 的形成与非裔美国人口迁移、城市社群和种族化市场分类联系起来。[^5]

Country 与 Folk 也不是没有非裔影响的“白人纯传统”。美国南部弦乐、英伦民谣、黑人 banjo、Blues、Gospel 与商业乡村录音长期交换语言。图谱应把这些传统并列摆在根部，以交叉影响连接，而不是画出 Folk → Blues/Jazz 的单亲箭头。

**听觉锚点**：Robert Johnson 的 1930 年代录音、Sister Rosetta Tharpe《Strange Things Happening Every Day》(1944)、Hank Williams 的 1940—1950 年代录音、Louis Jordan 的 Jump Blues、Muddy Waters 的 Chicago electric blues。

**关系出口**：

- `blues + jazz + gospel → r-and-b`：`fusion_of`
- `blues + country + gospel ↔ early-pop-market`：`influenced_by`
- `r-and-b + country + gospel + pop-songcraft → rock-and-roll`：`fusion_of`

### 02 · Rock 'n' Roll：青少年市场给汇流命名

- 时间：1954—1959
- 阶段 ID：`rock-and-roll`
- 主要节点：`rock-and-roll`、`rockabilly`、`doo-wop`、`early-pop-rock`
- 关键事件：跨种族广播、45 转单曲、电视、独立厂牌与青少年消费

Chuck Berry、Little Richard、Fats Domino、Bo Diddley、Elvis Presley、Jerry Lee Lewis、Buddy Holly 等人的差异，正说明 Rock 'n' Roll 是共享市场和文化能量下的多种声音，而不是一个狭窄配方。Chuck Berry 把 Country 叙事、R&B 节奏、Boogie-woogie 与电吉他 riff 组织成可被后世乐队反复使用的模板；Library of Congress 对其录音的研究同样强调这种跨传统组合。[^10]

“第一首 Rock 'n' Roll”不设置唯一答案。《Rocket 88》(1951) 可用于讨论失真吉他、节奏和后来的命名；《Rock Around the Clock》(1954/1955) 可用于讨论大众突破；《Maybellene》(1955) 和《Tutti Frutti》(1955) 可用于讨论歌曲、吉他和表演语言。它们回答的是不同问题。

**代表专辑／录音锚点**：Elvis Presley《Elvis Presley》(1956)、Buddy Holly《The "Chirping" Crickets》(1957)、Chuck Berry《Chuck Berry Is on Top》(1959)。公众号早期篇提供 Jackie Brenston、Bill Haley、Elvis、Chuck Berry、Little Richard、Johnny Cash、Carl Perkins 和 Buddy Holly 等候选，但其“第一首”判断只作为叙事线索。[^11]

### 03 · 乐队时代与大西洋往返

- 时间：1960—1964
- 阶段 ID：`bands-and-atlantic`
- 主要节点：`surf-rock`、`soul`、`british-beat`、`garage-rock`
- 关键事件：British Invasion、Motown/Soul crossover、地区 Garage 网络、乐队编制标准化

早期明星退潮没有终止摇滚。Surf/Instrumental Rock 完善电吉他音色；Girl Group 与 Brill Building 推进录音室歌曲生产；Motown 与 Soul 把 R&B/Gospel 的人声和节奏带入更广市场；英国 Skiffle、R&B 与 Beat 场景吸收美国唱片，再把强化后的乐队模式送回美国。

这一阶段在探索页上应表现为“大西洋往返”，不是 Britain → America 的单向箭头。The Beatles、The Rolling Stones、The Animals、The Yardbirds 与 The Kinks 的共同点不是统一声音，而是把不同美国根源重新组织成英国乐队语言。

**代表锚点**：The Beach Boys《Surfin' U.S.A.》(1963)、The Beatles《A Hard Day's Night》(1964)、The Rolling Stones《The Rolling Stones》(1964)、The Kinks《Kinks》(1964)。

### 04 · Rock 第一次大分化

- 时间：1965—1969
- 阶段 ID：`rock-expands`
- 主要节点：`folk-rock`、`garage-rock`、`psychedelic-rock`、`acid-rock`、`blues-rock`、`experimental-rock`、`art-rock`、`progressive-rock`、`hard-rock`、`proto-punk`
- 关键事件：Folk Revival 电声化、反文化、效果器、多轨录音、专辑地位上升

Folk Rock 把民谣写作、抗议传统、和声与摇滚节拍结合；Garage Rock 用低成本录音、重复 riff 和地方乐队网络保留直接能量；Psychedelic Rock 借助反馈、磁带、非西方音色和录音室实验扩展空间；Blues Rock 强化电吉他、即兴和音量。这几条路线不是互斥的，The Yardbirds、Cream、Jimi Hendrix、The Beatles 和 Jefferson Airplane 都可能跨越多项。

Experimental/Art Rock 把噪音、磁带、先锋艺术、概念和制作过程当成作品本体。The Velvet Underground & Nico (1967) 商业成绩有限，却为 Art Rock、Proto-Punk、Noise、Post-Punk 和 Alternative 提供持久参照；美国国家录音名录也把它的影响连接到上述多代场景。[^7]

Progressive Rock 从 British Psychedelia、Art Rock、Classical、Jazz、录音室和长篇结构中逐渐成形；Hard Rock 则集中 Blues Rock/Psychedelic 的放大、riff 与舞台力量，并通向 Heavy Metal。公众号对 1967—1977 的 Progressive Rock 和 1963—1970 的 Hard/Heavy 路线提供了连续时间材料，但“前卫摇滚衰亡”和“朋克导致英国金属中断”应理解为市场与场景重组，而不是音乐突然消失。[^12]

**代表锚点**：

- The Byrds《Mr. Tambourine Man》(1965)
- The Beatles《Revolver》(1966)
- The 13th Floor Elevators《The Psychedelic Sounds of the 13th Floor Elevators》(1966)
- The Jimi Hendrix Experience《Are You Experienced》(1967)
- The Velvet Underground & Nico (1967)
- Pink Floyd《The Piper at the Gates of Dawn》(1967)
- The Sonics《Here Are The Sonics》(1965)
- King Crimson《In the Court of the Crimson King》(1969)
- Led Zeppelin《Led Zeppelin II》(1969)

### 05 · 专辑时代的多极成熟

- 时间：1970—1974
- 阶段 ID：`album-era`
- 主要节点：`heavy-metal`、`progressive-rock`、`glam-rock`、`krautrock`、`southern-rock`、`country-rock`、`jazz-rock`
- 关键事件：LP/概念专辑、arena 扩张、合成器、德国实验场景

1970 年前后不是 Heavy Metal 独占的时刻。Progressive Rock 以长篇、多段结构、复杂拍号、概念和器乐技巧扩展专辑；Glam Rock 用 Rock 'n' Roll、Pop、剧场、时尚、camp 与性别表演重塑明星形象；Krautrock 在西德多地用重复、motorik、电子和录音室探索挑战英美范式；Southern Rock、Country Rock 与 Jazz-Rock 则从不同方向重连根源与即兴。

Black Sabbath 的 1970 年两张专辑让低沉 riff、黑暗气氛和持续重量成为可以延展的核心语法，但 Hard Rock 与 Heavy Metal 在早期高度重叠。图谱应允许 Led Zeppelin、Deep Purple、Blue Cheer、Uriah Heep 等乐队跨节点，而不强迫它们获得唯一身份。[^13]

Glam Rock 与后来 Glam Metal 不同。前者是 1970 年代英国为中心的文化现象，声音从简洁 Rock 'n' Roll 到 Art Rock 都可容纳；后者是 1980 年代以美国洛杉矶为中心、结合 Hard/Heavy、Pop hook、吉他独奏和 MTV 形象的场景。二者有影响关系，不是同一名称的前后代。V&A 对 Glam 的讨论同样把剧场、服装、性别表达及其对 Punk/New Romantic 等后续文化的影响放在核心位置。[^14]

**代表锚点**：Black Sabbath《Black Sabbath》《Paranoid》(1970)、David Bowie《The Rise and Fall of Ziggy Stardust and the Spiders from Mars》(1972)、Yes《Close to the Edge》(1972)、Neu!《Neu!》(1972)、Pink Floyd《The Dark Side of the Moon》(1973)、The Allman Brothers Band《At Fillmore East》(1971)、Miles Davis《Bitches Brew》(1970)。

### 06 · Punk 重置规则

- 时间：1975—1979
- 阶段 ID：`punk-reset`
- 主要节点：`proto-punk`、`punk-rock`、`new-wave`、`post-punk`、`power-pop`
- 关键事件：CBGB/纽约场景、英国 Punk、DIY 发行、fanzine

Punk 不是对 1970 年代所有复杂音乐的简单反动。它把 Garage、Rock 'n' Roll、The Velvet Underground、The Stooges、New York Dolls、Patti Smith 等资源压缩成短歌、直接 riff、强烈姿态和低参与门槛；更重要的是，它建立了可以绕开大型工业的演出、出版与发行网络。Rock Hall 的教育资料把 1970 年代中期纽约、随后英国场景以及美国各地城市网络并置，并强调 DIY、小俱乐部和 fanzine。[^15]

Punk 很快分成多条道路。New Wave 是覆盖面很大的后 Punk 商业/媒体标签，吸收 Pop、Power Pop、Reggae/Ska、电子与视觉媒介；Post-Punk 保留 Punk 的实验许可，却扩大节奏、音色和结构；Hardcore 则在 1970 年代末到 1980 年代初把速度、短歌与场景伦理推向更极端。因此页面不能把 New Wave、Post-Punk、Hardcore 画成互斥的三个盒子。

**代表锚点**：Patti Smith《Horses》(1975)、Ramones《Ramones》(1976)、Sex Pistols《Never Mind the Bollocks》(1977)、Television《Marquee Moon》(1977)、Wire《Pink Flag》(1977)、Talking Heads《More Songs About Buildings and Food》(1978)、Joy Division《Unknown Pleasures》(1979)、The Clash《London Calling》(1979)。

### 07 · 地下场景制度化，Metal 开始系统分裂

- 时间：1980—1984
- 阶段 ID：`underground-systems`
- 主要节点：`hardcore-punk`、`post-hardcore`、`gothic-rock`、`darkwave`、`industrial`、`alternative-rock`、`indie-rock`、`nwobhm`、`speed-metal`、`thrash-metal`、`doom-metal`、`black-metal-first-wave`
- 关键事件：College Radio、独立厂牌、MTV、NWOBHM、城市 Hardcore 网络

美国 Hardcore 在洛杉矶、华盛顿 D.C.、旧金山、波士顿等地形成差异化场景。Bad Brains、Black Flag、Minor Threat、Dead Kennedys 等把 Punk 的速度、喊唱、riff 和集体表演推向新语法；学术分析显示，Hardcore 并不是“不会演奏”的同义词，其高速下的 riff、重音、节拍感和音色需要特定技巧。[^16][^17]

Post-Punk 的阴暗、低音驱动和空间化分支逐渐形成 Gothic Rock；Cocteau Twins、Dead Can Dance、This Mortal Coil 等又把氛围、人声和录音室推向 Ethereal/Dream Pop。Industrial 从 1970 年代先锋电子、磁带、噪音、行为艺术和 Punk 挑衅中发展，Throbbing Gristle、Cabaret Voltaire、Einstürzende Neubauten 等早期实践并不以金属吉他为必要条件。之后 Industrial Rock/Metal 才把它与歌曲结构和重 riff 结合。[^18]

金属一侧，NWOBHM 是英国场景运动，不是单一音色子类。它提高速度、强化双吉他、舞台形象与 DIY 单曲网络，为 Speed、Thrash、Power 和后来极端金属提供共同资源。Venom 的《Black Metal》(1982) 提供名称与美学，Bathory、Hellhammer/Celtic Frost 等扩展第一波极端语法；Candlemass、Saint Vitus、Pentagram 等则在 Black Sabbath 遗产上使 Doom 稳定。

**代表锚点**：Bauhaus《In the Flat Field》(1980)、Motörhead《Ace of Spades》(1980)、Black Flag《Damaged》(1981)、Iron Maiden《The Number of the Beast》(1982)、Venom《Black Metal》(1982)、R.E.M.《Murmur》(1983)、Cocteau Twins《Head over Heels》(1983)、Metallica《Kill 'Em All》(1983)。

### 08 · Alternative 地下网络与 Extreme Metal 成形

- 时间：1985—1989
- 阶段 ID：`extreme-and-alternative`
- 主要节点：`post-hardcore`、`emo`、`noise-rock`、`dream-pop`、`shoegaze`、`grunge`、`crossover-thrash`、`grindcore`、`thrash-metal`、`death-metal`、`black-metal`、`power-metal`、`progressive-metal`、`doom-metal`
- 关键事件：1986 Thrash 高峰、D.C. Emo、Seattle/Sub Pop、英国噪音流行与 Dream Pop

Hardcore 的后续不是一条线：Hüsker Dü、Minutemen、Fugazi 等扩展结构与动态；Rites of Spring 等 D.C. 乐队把私人化表达带入 Hardcore/Post-Hardcore，形成早期 Emo；D.R.I.、Suicidal Tendencies、S.O.D. 等在 Hardcore 与 Thrash 之间形成 Crossover Thrash；Napalm Death 等把 Hardcore/Crust、Thrash/Death 与噪音推向 Grindcore。Grindcore 与 Metalcore 有交叉，却不是后者的单一父级。

Alternative/Indie 此时主要指向 College Radio、独立厂牌、巡演线路和对主流市场的替代位置，而非统一音色。Sonic Youth、Pixies、R.E.M.、The Smiths、Dinosaur Jr. 等互不相同，却共同构成后来的 Alternative 资源。Dream Pop、Noise Pop 和 Neo-Psychedelia 在英国汇成 Shoegaze 前夜；Seattle 乐队则把 Punk/Hardcore、Garage、Hard Rock 和 Metal 混为早期 Grunge。

Thrash 在 1986 年达到声音和传播的关键高峰。《Master of Puppets》《Peace Sells... but Who's Buying?》《Reign in Blood》显示同一标签内部已形成不同写法；Recording Academy 也把 1986 视为该场景的临界点。[^19] Thrash 与第一波 Black Metal 又推动 Death Metal、第二波 Black Metal 等极端分化。Power Metal 在美国传统重金属和欧洲 Speed/Melodic 路线上形成不同重心；Progressive Metal 则把 Heavy Metal 与 Prog 的结构、概念和技巧结合。

**代表锚点**：Rites of Spring《Rites of Spring》(1985)、The Jesus and Mary Chain《Psychocandy》(1985)、Candlemass《Epicus Doomicus Metallicus》(1986)、Metallica《Master of Puppets》(1986)、Slayer《Reign in Blood》(1986)、Napalm Death《Scum》(1987)、Death《Scream Bloody Gore》(1987)、Sonic Youth《Daydream Nation》(1988)、Soundgarden《Ultramega OK》(1988)。

### 09 · Alternative 进入主流，极端金属地域化

- 时间：1990—1994
- 阶段 ID：`alternative-breakthrough`
- 主要节点：`grunge`、`post-grunge`、`shoegaze`、`britpop`、`post-rock`、`alternative-metal`、`industrial-rock`、`industrial-metal`、`groove-metal`、`death-metal`、`melodic-death-metal`、`black-metal-second-wave`、`death-doom`、`gothic-metal`
- 关键事件：1991 Alternative 商业突破、MTV、Seattle 主流化、挪威第二波、Florida/Gothenburg 等地域场景

Grunge 在 1980 年代中期已于 Seattle/Sub Pop 网络形成；Nirvana 的成功是突破点，不是起点。1991 年后，“Alternative”从地下网络名称转为大型唱片工业的市场分类，原本差异很大的乐队被放进同一货架。Grunge 的 Punk 伦理与 Metal/Hard Rock 音色在主流复制中被重新配方，形成宽泛的 Post-Grunge。[^20][^21]

英国 Shoegaze 在 1980 年代末至 1990 年代初稳定：Dream Pop 更突出旋律、空间和轻盈感，Shoegaze 更突出反馈、失真、音墙和人声后置，但两者高度重叠。1992 年后，Grunge 与随后 Britpop 的媒体浪潮挤压了 Shoegaze 的商业空间；这属于场景替换，不表示声音消失。[^22]

Post-Rock 在 1990 年代评论话语中被命名，以 Rock 乐器和制作手段追求非传统歌曲结构、重复、音色与空间，吸收 Krautrock、Ambient、Minimalism、Jazz、Dub、电子和实验音乐。Talk Talk、Slint 是关键前史，Tortoise、Stereolab、Disco Inferno 等展示不同方向；“用摇滚乐器做非摇滚音乐”是有用入口，不是充分定义。[^23]

Metal 在地域场景中继续分化：Florida Death Metal、瑞典 Gothenburg Melodic Death、挪威第二波 Black Metal、英国 Death-Doom 等形成各自网络。Melodic Death Metal 不应画成 Brutal Death 的子代；音乐分析显示它由 Swedish Death Metal 与 NWOBHM/旋律重金属资源转化出独立和声实践。[^24] Paradise Lost、My Dying Bride、Anathema 等 Death-Doom 场景又成为 Gothic Metal 的一条重要来源，但 Gothic Metal 仍需考虑 Gothic/Ethereal、Symphonic 与其他地域路线。

**代表锚点**：Depeche Mode《Violator》(1990，作为跨界背景)、My Bloody Valentine《Loveless》(1991)、Nirvana《Nevermind》(1991)、Slint《Spiderland》(1991)、Paradise Lost《Gothic》(1991)、Ministry《Psalm 69》(1992)、Darkthrone《A Blaze in the Northern Sky》(1992)、Dream Theater《Images and Words》(1992)、Pantera《Vulgar Display of Power》(1992)、Suede《Suede》(1993)。

### 10 · 融合类型与市场标签爆发

- 时间：1995—1999
- 阶段 ID：`hybrid-explosion`
- 主要节点：`britpop`、`post-grunge`、`post-rock`、`nu-metal`、`metalcore`、`melodic-death-metal`、`technical-death-metal`、`gothic-metal`、`symphonic-metal`、`post-metal`、`stoner-metal`
- 关键事件：Britpop 媒体化、Nu Metal 青年市场、Metalcore 网络、互联网前夜

Britpop 是 1990 年代英国 Indie 场景中的文化和产业运动。它从 1960 年代 British Pop、Mod、Glam、Punk/New Wave、The Smiths、Madchester 等资源中提炼英国地域叙事，并在媒体竞争中获得全国性意义。Blur、Oasis、Pulp、Suede 的声音并不统一；1997 年后的分化也说明它不是一个可以持续复制的固定配方。[^25]

Alternative Metal 更适合作为实验/跨界伞形标签：Faith No More、Helmet、Tool、Rage Against the Machine、Primus 等分别吸收 Funk、Hip-Hop、Industrial、Prog 和 Hardcore。Nu Metal 在这片交叉地带进一步结合低调弦、切分、DJ/采样、Hip-Hop/Funk、Industrial/Groove 和青年身份，于 1990 年代中后期形成特定声音与商业场景；Korn、Deftones、Slipknot、Limp Bizkit、Linkin Park 也不应被压成单一模板。

Metalcore 的核心是 Hardcore 场景与 Metal riff/breakdown 的结合。Crossover Thrash 是前驱，Earth Crisis、Converge、Integrity、Shai Hulud 等 1990 年代乐队形成不同早期方向；2000 年代 Melodic Metalcore 又大量吸收 Gothenburg Melodic Death。公众号 Metalcore 专题自己也指出 Metalcore 与 Crossover、Groove、Hardcore、Nu Metal 存在重叠，这比原图的 Grindcore → Metalcore 单箭头更可靠。[^26]

Neurosis、Godflesh 等把 Sludge/Hardcore、Industrial、Ambient 与长篇结构结合，为 Post-Metal 奠基；1996 年 Neurosis《Through Silver in Blood》是比原始文章中误写的专辑名更可靠的锚点。Stoner Rock/Metal 则从 Doom、Psychedelic/Acid Rock、Blues Rock 与沙漠场景形成 fuzz、groove 和重复语法。

**代表锚点**：Oasis《(What's the Story) Morning Glory?》(1995)、Pulp《Different Class》(1995)、At the Gates《Slaughter of the Soul》(1995)、The Smashing Pumpkins《Mellon Collie and the Infinite Sadness》(1995)、Tortoise《Millions Now Living Will Never Die》(1996)、Neurosis《Through Silver in Blood》(1996)、Therion《Theli》(1996)、Radiohead《OK Computer》(1997)、Godspeed You! Black Emperor《F♯ A♯ ∞》(1997)、Korn《Follow the Leader》(1998)、Opeth《Still Life》(1999)、Slipknot《Slipknot》(1999)。

### 11 · 复兴、平台化与多中心网络

- 时间：2000—至今
- 阶段 ID：`network-era`
- 主要节点：`indie-rock`、`garage-rock-revival`、`post-punk-revival`、`emo-pop`、`melodic-metalcore`、`deathcore`、`blackgaze`、`post-metal`、`post-rock-revival`
- 关键事件：数字录音与发行、文件分享、流媒体、全球场景同步、旧目录再发现

2000 年以后很难再用单一流派代表摇滚。The Strokes、The White Stripes、Interpol 等重新使用 Garage/Post-Punk 语法；Emo/Pop Punk 进入主流，同时地下 Emo、Screamo 和 Post-Hardcore 延续；Metalcore 旋律化后，Deathcore 再把 Metalcore breakdown 与 Death Metal 结合；Alcest 等把 Black Metal、Shoegaze 与 Post-Rock 连接成 Blackgaze/Metalgaze；Isis、Cult of Luna、Russian Circles 等扩展 Post-Metal；Post-Rock 在欧洲、亚洲和中国形成新的地域网络。

这不是“摇滚停止创新”，而是大型媒体不再能够用一个全国性标签代表全部场景。数字发行降低地域隔离，旧目录随再版与平台推荐被重新发现，标签变得更细、跨类型更快。一个艺人可以同时连接 Indie、Electronic、Metal、Hip-Hop 或实验传统，网站不应强制唯一分类。

公众号在这一部分对 Muse、The White Stripes、Metalcore、Gothic Metal、Industrial/Alternative Metal、Post-Rock、Post-Metal、Krautrock 再发现和中国 Post-Rock 提供了大量案例，但不是 2010—2020 年代的完整总体史。因此当代部分以“延续、复兴与重组”呈现，不虚构一个统一主流。[^27]

**代表锚点**：Radiohead《Kid A》(2000)、Linkin Park《Hybrid Theory》(2000)、Isis《Oceanic》(2002)、The White Stripes《Elephant》(2003)、Arcade Fire《Funeral》(2004)、Converge《Jane Doe》(2001)、Alcest《Écailles de lune》(2010)、Deafheaven《Sunbather》(2013)、惘闻《八匹马》(2007，作为中国地域支线候选)。

## 五、节点目录

节点目录是探索页的内容基线，不是互斥分类表。“核心”表示默认图可见，“展开”表示聚焦相关父级或搜索时出现。

### A. 根源与早期摇滚

| ID | 显示名 | 类型 | 成形／进入本图 | 识别与边界 | 可见性 |
| --- | --- | --- | --- | --- | --- |
| `folk-traditions` | 民间传统 Folk Traditions | root | 现代唱片工业以前，多地域 | 口传、地方舞曲、劳动与叙事传统；不是所有美国音乐的单一父级 | 核心 |
| `blues` | 蓝调 Blues | root | 19 世纪末—20 世纪初，美国南部 | 蓝调音阶、call-and-response、个人叙事和多种结构；Country/Urban/Electric 是重要内部变化 | 核心 |
| `gospel` | 福音 Gospel | root | 20 世纪上半叶，美国黑人教会 | 强烈人声、应答、情感递进；直接影响 R&B、Soul 与 Rock 'n' Roll | 核心 |
| `country` | 乡村 Country | root | 1920s 商业录音，美国南部／阿巴拉契亚 | 弦乐、叙事、地方口音；内部含 Old-Time、Honky-tonk、Western Swing 等资源 | 核心 |
| `jazz` | 爵士 Jazz | root | 20 世纪初，美国 | Swing、即兴、和声与合奏互动；主要以影响和融合进入 Rock | 核心 |
| `r-and-b` | 节奏蓝调 R&B | root | 1940s，美国城市黑人音乐市场 | Jump Blues、Jazz、Gospel、Boogie 与电声节奏的宽泛历史类别 | 核心 |
| `soul` | 灵魂乐 Soul | genre | 1950s 末—1960s，美国 | R&B 与 Gospel 的人声、节奏和世俗表达融合；与 Rock 长期 crossover | 展开 |
| `rock-and-roll` | Rock 'n' Roll | genre | 1940s 后期萌芽，1950s 中期突破 | R&B、Country、Gospel、Pop songcraft 的跨市场汇流 | 核心 |
| `rockabilly` | 山区乡村摇滚 Rockabilly | genre | 1950s，美国南部 | Country/Hillbilly 与 R&B 的小编制高速结合 | 展开 |
| `doo-wop` | Doo-Wop | genre | 1940s 末—1950s，美国城市 | 黑人声乐组合、Gospel/R&B 和声与街角文化；重要早期支线 | 展开 |
| `surf-rock` | 冲浪摇滚 Surf Rock | genre | 1960s 初，美国加州 | 混响吉他与快速 picking；人声支系连接 Pop 与青年海滩文化 | 展开 |
| `pop-rock` | 流行摇滚 Pop Rock | umbrella | 1960s 起，英美及全球 | Rock 编制与 Pop songcraft 的长期交叉，不是单一谱系 | 展开 |
| `funk` | 放克 Funk | adjacent | 1960s，美国 | R&B/Soul 的节奏与 groove 路线；影响 Post-Punk、Funk Metal 与 Alternative | 展开 |
| `electronic` | 电子音乐 Electronic | adjacent | 20 世纪中期起，多地 | 合成、磁带、机器节奏与制作传统；长期进入 Krautrock、Post-Punk、Industrial | 展开 |
| `ambient` | 氛围音乐 Ambient | adjacent | 1970s 被命名，多地 | 以空间、音色和环境为中心；影响 Post-Rock/Post-Metal 等 | 展开 |
| `hip-hop` | Hip-Hop | adjacent | 1970s，纽约；随后全球 | MC、DJ、breakbeat、采样与街区文化；与 Rap Metal/Nu Metal 等交汇 | 展开 |

### B. 1960—1970 年代扩张

| ID | 显示名 | 类型 | 成形时期／地点 | 识别与主要来源 | 可见性 |
| --- | --- | --- | --- | --- | --- |
| `british-beat` | British Beat | scene | 1960s 初，英国 | Skiffle、R&B、Rock 'n' Roll 与英国乐队文化 | 展开 |
| `folk-rock` | 民谣摇滚 Folk Rock | genre | 1960s 中期，英美 | Folk 写作、和声和抗议传统 + Rock 节拍 | 核心 |
| `country-rock` | 乡村摇滚 Country Rock | genre | 1960s 后期，美国 | Country 乐器／和声 + Rock 编制 | 展开 |
| `southern-rock` | 南方摇滚 Southern Rock | scene | 1960s 末—1970s，美国南部 | Blues Rock + Country/Honky-tonk + 即兴与地域叙事 | 展开 |
| `blues-rock` | 蓝调摇滚 Blues Rock | genre | 1960s 中后期，英美 | Electric Blues 在乐队、音量与长篇即兴中的强化 | 核心 |
| `garage-rock` | 车库摇滚 Garage Rock | scene | 1960s，美国地方网络 | 简陋录音、重复 riff、直接能量；通向 Proto-Punk | 核心 |
| `psychedelic-rock` | 迷幻摇滚 Psychedelic Rock | genre | 1960s 中后期，英美 | Folk/Garage/Beat + 效果器、非西方音色与录音室实验 | 核心 |
| `acid-rock` | 酸性摇滚 Acid Rock | genre | 1960s 后期，美国 | Psychedelic + Blues/Hard；更重、长篇和即兴 | 展开 |
| `experimental-rock` | 实验摇滚 Experimental Rock | umbrella | 1960s 起，多地 | Rock 与 tape、noise、avant-garde、非标准结构结合 | 核心 |
| `art-rock` | 艺术摇滚 Art Rock | umbrella | 1960s 后期，英美 | 把专辑、概念、制作和表演视为整体艺术 | 展开 |
| `progressive-rock` | 前卫摇滚 Progressive Rock | genre | 1960s 后期—1970s，英国为主 | Psychedelic/Art + Classical/Jazz；长篇、多段与复杂节拍 | 核心 |
| `jazz-rock` | 爵士摇滚 Jazz-Rock / Fusion | genre | 1960s 末—1970s，英美 | Jazz 即兴和复杂性 + Rock/Funk 电声能量 | 展开 |
| `krautrock` | Krautrock | scene | 1960s 末—1970s，西德 | Experimental/Psychedelic + Electronic/Minimalism；名称是外部伞形称呼 | 核心 |
| `hard-rock` | 硬摇滚 Hard Rock | genre | 1960s 后期，英美 | Blues Rock + Psychedelic 的重 riff、强鼓点和高音量 | 核心 |
| `glam-rock` | 华丽摇滚 Glam Rock | scene | 1970s 前半，英国 | Rock 'n' Roll/Pop + 剧场、时尚、camp 和性别表演 | 核心 |
| `power-pop` | 强力流行 Power Pop | genre | 1970s 初，英美 | British Invasion melody + 响亮吉他 + 三分钟 Pop hook | 展开 |
| `proto-punk` | 原型朋克 Proto-Punk | umbrella | 1960s 末—1970s 初，美国等 | Garage、Experimental、Hard Rock 的原始、重复与对抗面 | 核心 |
| `heavy-metal` | 重金属 Heavy Metal | genre | 1960s 末—1970s 初，英国／美国 | Hard/Blues/Psychedelic 的重 riff、失真、强鼓点和黑暗／宏大主题 | 核心 |

### C. Punk、Post-Punk 与 Alternative 网络

| ID | 显示名 | 类型 | 成形时期／地点 | 识别与主要来源 | 可见性 |
| --- | --- | --- | --- | --- | --- |
| `punk-rock` | 朋克摇滚 Punk Rock | scene | 1970s 中期，纽约／伦敦等 | Garage、Rock 'n' Roll、Proto-Punk + DIY 场景 | 核心 |
| `new-wave` | 新浪潮 New Wave | umbrella | 1970s 后期—1980s，英美 | Punk 之后的 Pop、电子、Ska/Reggae 与视觉媒体交汇 | 展开 |
| `post-punk` | 后朋克 Post-Punk | umbrella | 1970s 后期—1980s 初，英国／美国 | Punk 的生产伦理 + Dub、Funk、Art/Experimental 与电子 | 核心 |
| `hardcore-punk` | 硬核朋克 Hardcore Punk | scene | 1970s 末—1980s，美国多城 | Punk 的速度、短歌、强重音与自治场景 | 核心 |
| `post-hardcore` | 后硬核 Post-Hardcore | umbrella | 1980s 中后期，美国 | Hardcore 场景承接，扩大动态、结构和情绪表达 | 展开 |
| `emo` | 情绪硬核／Emo | scene | 1980s 中期，Washington D.C. | Post-Hardcore/Hardcore 中私人化、动态化写作；后续形态差异很大 | 展开 |
| `gothic-rock` | 哥特摇滚 Gothic Rock | scene | 1970s 末—1980s，英国 | Post-Punk 的阴暗、低音驱动、空间化与戏剧表达 | 核心 |
| `ethereal-wave` | 仙音 Ethereal Wave | genre | 1980s，英国／欧洲 | Gothic/Post-Punk + Dream Pop 式氛围与人声 | 展开 |
| `darkwave` | 暗潮 Darkwave | umbrella | 1980s，欧洲／北美 | Post-Punk/Goth/New Wave + Synth/Electronic；地域含义不同 | 展开 |
| `noise-rock` | 噪音摇滚 Noise Rock | genre | 1980s，美国等 | Punk/Post-Punk + No Wave/Experimental 的失谐、噪音和身体性 | 展开 |
| `noise-pop` | 噪音流行 Noise Pop | genre | 1980s 中后期，英国／美国 | Pop melody + feedback/distortion；连接 Indie 与 Shoegaze | 展开 |
| `dream-pop` | 梦幻流行 Dream Pop | umbrella | 1980s，英国／美国 | Post-Punk、Neo-Psychedelia 与空间化制作 | 展开 |
| `shoegaze` | 盯鞋 Shoegaze | scene | 1980s 末—1990s 初，英国／爱尔兰 | Dream/Noise Pop + Psychedelic，突出反馈、音墙和人声后置 | 核心 |
| `alternative-rock` | 另类摇滚 Alternative Rock | umbrella | 1980s 地下网络；1991 后市场化 | College Radio、独立厂牌和非主流场景的宽泛集合 | 核心 |
| `indie-rock` | 独立摇滚 Indie Rock | umbrella | 1980s 起，英美及全球 | 首先指独立生产／发行位置，后来兼有审美含义 | 展开 |
| `madchester` | Madchester | scene | 1980s 末—1990s 初，Manchester | Indie/Post-Punk + Dance、Acid House 与 rave 文化 | 展开 |
| `grunge` | Grunge | scene | 1980s 中后期，Seattle／美国西北 | Punk/Hardcore、Garage、Hard Rock 与 Metal 的地方性混合 | 核心 |
| `post-grunge` | 后垃圾 Post-Grunge | umbrella | 1990s 中期，北美 | Grunge 进入主流后的简化、广播化和跨地域复制 | 展开 |
| `britpop` | Britpop | scene | 1990s 前中期，英国 | British Pop/Rock 传统 + Indie 场景与媒体化地域身份 | 核心 |
| `industrial` | 工业音乐 Industrial | scene | 1970s 后期，英国／欧洲 | Tape、noise、electronics、performance art 与挑衅性实验 | 核心 |
| `industrial-rock` | 工业摇滚 Industrial Rock | genre | 1980s 末—1990s，英美 | Industrial 方法 + Rock 歌曲、吉他和巡演体系 | 展开 |
| `post-rock` | 后摇滚 Post-Rock | umbrella | 1990s 初被命名，多地 | Rock 乐器 + Krautrock、Ambient、Minimalism、Dub、Jazz 与电子 | 核心 |
| `math-rock` | 数学摇滚 Math Rock | genre | 1980s 末—1990s，美国／日本等 | Post-Hardcore/Indie + 不规则节拍、断裂 riff 和结构精度 | 展开 |
| `garage-rock-revival` | 车库摇滚复兴 | scene | 1990s 末—2000s 初，纽约／底特律等 | 对 1960s Garage、Punk 与简洁 Rock 编制的再阐释 | 展开 |
| `post-punk-revival` | 后朋克复兴 | scene | 2000s 初，英美 | Post-Punk/New Wave 的节奏与音色在 Indie 网络中复兴 | 展开 |
| `emo-pop` | Emo Pop | umbrella | 1990s 末—2000s，北美 | Emo/Post-Hardcore + Pop Punk/Pop songcraft；不等同全部 Emo | 展开 |

### D. Heavy Metal 与 Extreme Metal 网络

| ID | 显示名 | 类型 | 成形时期／地点 | 识别与主要来源 | 可见性 |
| --- | --- | --- | --- | --- | --- |
| `traditional-heavy-metal` | 传统重金属 | umbrella | 1970s—1980s，英美 | Heavy Metal 的 riff、独奏、强力人声与乐队语法 | 展开 |
| `nwobhm` | NWOBHM | scene | 1970s 末—1980s 中期，英国 | Heavy Metal + Punk 时代 DIY、速度和双吉他；是场景运动 | 核心 |
| `glam-metal` | 华丽金属 Glam/Hair Metal | scene | 1980s，美国洛杉矶为主 | Hard/Heavy + Pop hook、吉他英雄和 MTV 形象 | 展开 |
| `doom-metal` | 厄运金属 Doom Metal | genre | 1970s 根源；1980s 成形，英美 | Black Sabbath 式低速、沉重 riff 与压迫氛围 | 核心 |
| `stoner-metal` | 石人／沙漠金属 Stoner Metal | scene | 1980s 末—1990s，美国等 | Doom + Psychedelic/Acid/Blues Rock 的 fuzz 与 groove | 展开 |
| `sludge-metal` | 污泥金属 Sludge Metal | scene | 1980s 后期，美国南部／西海岸 | Doom/Metal 的重量 + Hardcore/Noise 的粗粝与场景伦理 | 展开 |
| `speed-metal` | 速度金属 Speed Metal | genre | 1970s 末—1980s，欧美 | NWOBHM/Heavy Metal + Punk 速度；与早期 Thrash/Power 重叠 | 展开 |
| `thrash-metal` | 激流金属 Thrash Metal | scene | 1980s 初，美国／德国等 | NWOBHM/Speed + Hardcore/Punk；高速切分 riff | 核心 |
| `groove-metal` | 律动金属 Groove Metal | genre | 1980s 末—1990s，美国 | Thrash 后期的中速、切分、低沉和强身体律动 | 展开 |
| `death-metal` | 死亡金属 Death Metal | scene | 1980s 中后期，美国／瑞典等 | Thrash/第一波极端金属的更重音色、低吼、复杂 riff | 核心 |
| `melodic-death-metal` | 旋律死亡金属 | scene | 1990s 初，瑞典 Gothenburg 等 | Swedish Death + NWOBHM/传统旋律金属资源 | 展开 |
| `brutal-death-metal` | 残酷死亡金属 | genre | 1980s 末—1990s，美国等 | Death Metal 的低音域、密集打击与极端声线强化 | 展开 |
| `technical-death-metal` | 技术死亡金属 | method | 1980s 末—1990s，多地 | Death Metal + Progressive/technical 方法；强调复杂节奏与技巧 | 展开 |
| `black-metal-first-wave` | 第一波黑金属 | scene | 1980s，英国／欧洲／南美 | Heavy/Speed/Thrash 的极端美学、名称和粗粝制作 | 展开 |
| `black-metal-second-wave` | 第二波黑金属 | scene | 1990s 初，挪威为中心 | 第一波资源的高速 tremolo、氛围、美学与地域场景再编码 | 核心 |
| `power-metal` | 力量金属 Power Metal | genre | 1980s，欧美两条路线 | Heavy/Speed + 旋律、强力人声与史诗叙事；美欧重心不同 | 展开 |
| `progressive-metal` | 前卫金属 Progressive Metal | genre | 1980s 中后期，欧美 | Heavy Metal + Progressive Rock 的长篇、复杂结构和概念 | 核心 |
| `folk-metal` | 民谣金属 Folk Metal | umbrella | 1990s，欧洲等 | Metal + 地域民间乐器、旋律、语言与叙事 | 展开 |
| `viking-metal` | 维京金属 Viking Metal | scene | 1980s 末—1990s，北欧 | Black/Heavy/Folk 资源 + 北欧主题和氛围；不由 Doom 单线产生 | 展开 |
| `death-doom` | 死亡厄运 Death-Doom | genre | 1980s 末—1990s 初，欧洲／美国 | Death Metal + Doom 的低速、低吼和沉重氛围 | 展开 |
| `funeral-doom` | 葬礼厄运 Funeral Doom | genre | 1990s，欧洲等 | Death-Doom/Doom 的极慢速度、长篇和极端压抑空间 | 展开 |
| `gothic-metal` | 哥特金属 Gothic Metal | umbrella | 1990s，欧洲 | Death-Doom、Gothic/Ethereal、女性声线等地域路线汇合 | 核心 |
| `symphonic-metal` | 交响金属 Symphonic Metal | method | 1990s，欧洲等 | Orchestral/symphonic 方法附着于 Power、Gothic、Black 等金属 | 展开 |
| `crossover-thrash` | Crossover Thrash | scene | 1980s 中期，美国 | Hardcore Punk + Thrash Metal 的双向融合 | 展开 |
| `grindcore` | Grindcore | genre | 1980s 中后期，英国／美国 | Hardcore/Crust + Thrash/Death + Noise 的高速极端化 | 展开 |
| `metalcore` | 金属核 Metalcore | scene | 1980s 末萌芽，1990s 成形，美国 | Hardcore 场景 + Metal riff、重量与 breakdown | 核心 |
| `melodic-metalcore` | 旋律金属核 | scene | 1990s 末—2000s，美国等 | Metalcore + Melodic Death 的双吉他旋律和歌曲结构 | 展开 |
| `deathcore` | 死核 Deathcore | scene | 2000s，美国等 | Metalcore breakdown + Death Metal 的音色、riff 与声线 | 展开 |
| `alternative-metal` | 另类金属 Alternative Metal | umbrella | 1980s 末—1990s，美国 | Metal 与 Funk、Hip-Hop、Industrial、Prog、Hardcore 等实验交叉 | 核心 |
| `rap-metal` | 说唱金属 Rap Metal | genre | 1980s 末—1990s，美国 | Hip-Hop vocal/rhythm + Hard Rock/Metal；与 Nu Metal 部分重叠 | 展开 |
| `funk-metal` | 放克金属 Funk Metal | genre | 1980s 中后期—1990s，美国 | Funk groove/bass + Metal/Hard Rock | 展开 |
| `nu-metal` | 新金属 Nu Metal | scene | 1990s 中后期—2000s 初，美国 | Alternative Metal + Hip-Hop/Funk/Industrial/Groove，低调弦与切分 | 核心 |
| `industrial-metal` | 工业金属 Industrial Metal | genre | 1980s 末—1990s，欧美 | Industrial 的机械节奏/采样 + Heavy/Thrash riff | 核心 |
| `post-metal` | 后金属 Post-Metal | umbrella | 1990s，欧美 | Sludge/Hardcore/Industrial + Post-Rock/Ambient 的长篇和动态 | 核心 |
| `blackgaze` | Blackgaze / Metalgaze | genre | 2000s，法国／全球网络 | Black Metal + Shoegaze/Post-Rock 的音墙、氛围和结构 | 展开 |

### E. 事件与媒介节点

| ID | 显示名 | 时间 | 图上作用 |
| --- | --- | --- | --- |
| `event-45rpm-radio` | 45 转、电台与青少年市场 | 1940s 末—1950s | 加速 R&B、Country 和 Rock 'n' Roll 跨市场传播 |
| `event-british-invasion` | British Invasion | 1964—1966 | 放大大西洋往返，使乐队编制成为主流模板 |
| `event-lp-studio` | LP、多轨与录音室成为乐器 | 1965—1975 | 推动 Psychedelic、Art/Prog、专辑概念和音色实验 |
| `event-diy-network` | DIY 厂牌、fanzine 与小场地 | 1976—1980s | 让 Punk/Hardcore/Post-Punk 建立替代生产体系 |
| `event-mtv` | MTV 与音乐录像 | 1981—1990s | 扩大 New Wave、Glam Metal、Alternative 等视觉化传播 |
| `event-college-radio` | College Radio / 独立巡演网 | 1980s | 连接 Indie、Alternative、Post-Hardcore 与地方场景 |
| `event-parental-advisory` | PMRC 与 Parental Advisory | 1985 起 | 展示金属、说唱与主流道德恐慌及审查争议 |
| `event-alt-breakthrough` | Alternative 商业突破 | 1991—1994 | 将地下网络重命名为大型市场类别；Grunge 是关键但非全部 |
| `event-digital-platforms` | 数字发行、文件分享与流媒体 | 1999—至今 | 降低地域壁垒，增强复兴、微类型与跨场景同步 |

## 六、核心关系清单

这是页面第一版可以直接采用的边。证据强度 `A` 表示多项权威或学术来源与历史共识相符；`B` 表示来源充分但边界宽；`C` 表示有用的编辑假设，进入网站时应保留“部分影响”措辞。

### A. 根源、Rock 'n' Roll 与 1960 年代扩张

| From | To | 关系 | 强度 | 说明 |
| --- | --- | --- | --- | --- |
| `blues` | `r-and-b` | `fusion_of` | A | 与 Jazz、Gospel、Boogie 等共同进入城市 R&B |
| `jazz` | `r-and-b` | `fusion_of` | A | Jump/Big Band 与节奏组织是形成资源 |
| `gospel` | `r-and-b` | `fusion_of` | A | 演唱、应答与情感递进被世俗化 |
| `r-and-b` | `rock-and-roll` | `fusion_of` | A | 节奏、表演和黑人音乐传统的核心来源 |
| `country` | `rock-and-roll` | `fusion_of` | A | 叙事、弦乐和南方市场的关键来源 |
| `gospel` | `rock-and-roll` | `fusion_of` | A | 人声与表演的关键来源 |
| `r-and-b` | `rockabilly` | `fusion_of` | A | 与 Country/Hillbilly 汇合 |
| `country` | `rockabilly` | `fusion_of` | A | 与 R&B 汇合 |
| `rock-and-roll` | `british-beat` | `derived_from` | A | 经英国 Skiffle/R&B 场景再组织 |
| `surf-rock` | `garage-rock` | `influenced_by` | C | 地方乐队、吉他音色和器乐技术的部分影响 |
| `folk-traditions` | `folk-rock` | `fusion_of` | A | 写作、和声、抗议和 Revival 传统 |
| `rock-and-roll` | `folk-rock` | `fusion_of` | A | 电声节拍与乐队编制 |
| `blues` | `blues-rock` | `derived_from` | A | Electric Blues 经摇滚乐队与放大技术强化 |
| `garage-rock` | `psychedelic-rock` | `fusion_of` | B | 与 Folk/Beat、实验和反文化共同进入 |
| `folk-rock` | `psychedelic-rock` | `fusion_of` | B | 歌曲、和声和反文化语境 |
| `blues-rock` | `acid-rock` | `fusion_of` | B | 与 Psychedelic 汇成更重、更长篇的方向 |
| `psychedelic-rock` | `acid-rock` | `derived_from` | A | 更重和更即兴的美国支系 |
| `psychedelic-rock` | `progressive-rock` | `fusion_of` | A | 与 Art、Classical/Jazz 和录音室实验汇合 |
| `art-rock` | `progressive-rock` | `fusion_of` | B | 概念、制作与综合艺术取向 |
| `jazz` | `jazz-rock` | `fusion_of` | A | 与 Rock/Funk 电声能量融合 |
| `psychedelic-rock` | `krautrock` | `fusion_of` | B | 与电子、Minimalism 和德国实验场景汇合 |
| `blues-rock` | `hard-rock` | `derived_from` | A | 重 riff、独奏和音量强化 |
| `psychedelic-rock` | `hard-rock` | `fusion_of` | A | 音色、放大与长篇表演资源 |
| `hard-rock` | `heavy-metal` | `derived_from` | A | 早期高度重叠，1970s 后逐渐稳定分界 |
| `blues-rock` | `heavy-metal` | `fusion_of` | A | riff 与调式基础 |
| `garage-rock` | `proto-punk` | `derived_from` | A | 直接、重复、地方性和低成本实践 |
| `experimental-rock` | `proto-punk` | `influenced_by` | B | Velvet Underground 等提供噪音、重复与对抗美学 |
| `glam-rock` | `punk-rock` | `influenced_by` | B | 形象、简洁 Rock 'n' Roll 与挑衅姿态 |

### B. Punk、Post-Punk 与 Alternative

| From | To | 关系 | 强度 | 说明 |
| --- | --- | --- | --- | --- |
| `proto-punk` | `punk-rock` | `derived_from` | A | 与纽约／伦敦具体场景汇合 |
| `garage-rock` | `punk-rock` | `influenced_by` | A | 短歌、riff 与低技术门槛 |
| `punk-rock` | `new-wave` | `scene_successor` | B | Punk 后的宽泛媒体／市场分类 |
| `punk-rock` | `post-punk` | `scene_successor` | A | 延续 DIY，扩张声音语言 |
| `experimental-rock` | `post-punk` | `fusion_of` | B | 与 Punk、Dub/Funk 和电子汇合 |
| `krautrock` | `post-punk` | `influenced_by` | A | 重复、motorik 与电子制作 |
| `punk-rock` | `hardcore-punk` | `derived_from` | A | 城市场景把速度与自治网络推向极端 |
| `hardcore-punk` | `post-hardcore` | `scene_successor` | A | 保留场景，扩大结构和动态 |
| `post-hardcore` | `emo` | `derived_from` | A | D.C. 等场景的情绪化分支 |
| `post-punk` | `gothic-rock` | `derived_from` | A | 阴暗、低音驱动与空间化支系 |
| `gothic-rock` | `ethereal-wave` | `derived_from` | B | 与 Dream/ambient 式制作汇合 |
| `post-punk` | `darkwave` | `fusion_of` | B | 与 New Wave、Goth 和电子共同形成 |
| `industrial` | `darkwave` | `influenced_by` | C | 部分地域场景的电子／机械影响，不是单一父级 |
| `post-punk` | `noise-rock` | `fusion_of` | B | 与 No Wave/Experimental/Punk 汇合 |
| `post-punk` | `dream-pop` | `fusion_of` | B | 与 Neo-Psychedelia 和空间化制作汇合 |
| `dream-pop` | `shoegaze` | `fusion_of` | A | 与 Noise Pop/Psychedelic 构成核心来源 |
| `noise-pop` | `shoegaze` | `fusion_of` | A | Pop melody 与 feedback/noise 的桥梁 |
| `psychedelic-rock` | `shoegaze` | `influenced_by` | B | 音墙、效果器和沉浸空间 |
| `post-punk` | `alternative-rock` | `scene_successor` | B | 进入 College Radio／独立网络的一条主线 |
| `hardcore-punk` | `alternative-rock` | `scene_successor` | B | DIY 巡演、厂牌和声音资源 |
| `indie-rock` | `alternative-rock` | `parallel_with` | A | 1980s 大量重叠；1991 后产业含义分化 |
| `punk-rock` | `grunge` | `fusion_of` | A | 与 Hardcore、Garage、Hard/Metal 共同形成 |
| `hard-rock` | `grunge` | `fusion_of` | A | 重 riff 与 1970s Rock 资源 |
| `heavy-metal` | `grunge` | `influenced_by` | B | 部分 Seattle 乐队的重量与音色来源 |
| `grunge` | `post-grunge` | `commercialized_as` | A | 主流复制和广播化标签 |
| `british-beat` | `britpop` | `influenced_by` | B | 与 Glam、Punk/New Wave、Indie 等共同构成历史引用 |
| `indie-rock` | `britpop` | `scene_successor` | A | 1990s 英国 Indie 网络的媒体化运动 |
| `shoegaze` | `britpop` | `parallel_with` | B | 场景与成员交叠但并非直接子代；媒体注意力发生替换 |
| `industrial` | `industrial-rock` | `commercialized_as` | B | 实验方法进入 Rock 歌曲与大型巡演体系 |
| `krautrock` | `post-rock` | `influenced_by` | A | 重复、音色和非传统结构资源 |
| `experimental-rock` | `post-rock` | `fusion_of` | A | 与 Ambient/Minimalism/Dub/Jazz 等汇合 |
| `post-hardcore` | `math-rock` | `fusion_of` | B | 与 Prog/Experimental 的复杂节拍写作汇合 |
| `garage-rock` | `garage-rock-revival` | `revival_of` | A | 旧语法在 2000s Indie/媒体网络重现 |
| `post-punk` | `post-punk-revival` | `revival_of` | A | 节奏、吉他与视觉语言被重新编码 |
| `emo` | `emo-pop` | `commercialized_as` | B | 与 Pop Punk/Pop songcraft 汇合后的主流标签 |

### C. Heavy Metal 的分化与跨界

| From | To | 关系 | 强度 | 说明 |
| --- | --- | --- | --- | --- |
| `heavy-metal` | `nwobhm` | `scene_successor` | A | 传统金属在英国 Punk 时代的场景重组 |
| `punk-rock` | `nwobhm` | `influenced_by` | B | 速度、DIY 单曲和现场网络影响 |
| `glam-rock` | `glam-metal` | `influenced_by` | B | 形象与剧场性；声音主干仍来自 Hard/Heavy |
| `hard-rock` | `glam-metal` | `fusion_of` | A | 与 Heavy/Pop hook 汇合 |
| `heavy-metal` | `doom-metal` | `derived_from` | A | 直接延展 Black Sabbath 核心语法 |
| `doom-metal` | `stoner-metal` | `fusion_of` | A | 与 Psychedelic/Acid/Blues Rock 汇合 |
| `doom-metal` | `sludge-metal` | `fusion_of` | A | 与 Hardcore/Noise 汇合 |
| `hardcore-punk` | `sludge-metal` | `fusion_of` | A | 粗粝声音、场景伦理和节奏资源 |
| `nwobhm` | `speed-metal` | `derived_from` | A | 速度、双吉他和传统金属写作 |
| `speed-metal` | `thrash-metal` | `fusion_of` | B | 与 Hardcore/Punk 共同构成 Thrash |
| `hardcore-punk` | `thrash-metal` | `fusion_of` | A | 速度、短促攻击和场景交流 |
| `thrash-metal` | `groove-metal` | `derived_from` | A | 速度降低、切分与 groove 强化 |
| `thrash-metal` | `death-metal` | `derived_from` | A | 更重、更低沉和更复杂的极端化 |
| `black-metal-first-wave` | `death-metal` | `influenced_by` | B | 与 Thrash 共同构成早期极端语汇 |
| `death-metal` | `melodic-death-metal` | `fusion_of` | A | 与 NWOBHM/旋律重金属汇合 |
| `nwobhm` | `melodic-death-metal` | `fusion_of` | A | 双吉他旋律和调性资源 |
| `death-metal` | `brutal-death-metal` | `derived_from` | A | Death 内部的强度、音域和打击强化 |
| `death-metal` | `technical-death-metal` | `derived_from` | A | 主干仍是 Death Metal |
| `progressive-metal` | `technical-death-metal` | `influenced_by` | B | 复杂节拍、结构和技巧的部分来源 |
| `thrash-metal` | `black-metal-first-wave` | `fusion_of` | B | 与 Speed/Heavy 的极端美学汇合 |
| `black-metal-first-wave` | `black-metal-second-wave` | `scene_successor` | A | 挪威等地重新编码声音、美学与场景 |
| `speed-metal` | `power-metal` | `fusion_of` | A | 与传统 Heavy/旋律路线汇合 |
| `progressive-rock` | `progressive-metal` | `fusion_of` | A | 与 Heavy Metal 共同构成 |
| `heavy-metal` | `folk-metal` | `fusion_of` | A | 与地域民间传统融合 |
| `black-metal-first-wave` | `viking-metal` | `fusion_of` | B | 与 Heavy/Folk、北欧主题与氛围汇合 |
| `death-metal` | `death-doom` | `fusion_of` | A | 与 Doom 共同构成 |
| `doom-metal` | `death-doom` | `fusion_of` | A | 与 Death 共同构成 |
| `death-doom` | `funeral-doom` | `derived_from` | A | 极慢、长篇与氛围进一步强化 |
| `death-doom` | `gothic-metal` | `fusion_of` | B | 与 Gothic/Ethereal 等地域路线汇合 |
| `gothic-rock` | `gothic-metal` | `influenced_by` | B | 影响程度因乐队和地域而异 |
| `power-metal` | `symphonic-metal` | `fusion_of` | B | 常见主干之一，不是唯一父级 |
| `hardcore-punk` | `crossover-thrash` | `fusion_of` | A | 与 Thrash 双向融合 |
| `thrash-metal` | `crossover-thrash` | `fusion_of` | A | 与 Hardcore 双向融合 |
| `hardcore-punk` | `grindcore` | `fusion_of` | A | 与 Crust/Thrash/Death/Noise 汇合 |
| `death-metal` | `grindcore` | `influenced_by` | B | 部分场景的 riff、音色和声线来源 |
| `hardcore-punk` | `metalcore` | `fusion_of` | A | 场景与 breakdown 语法的核心来源 |
| `thrash-metal` | `metalcore` | `fusion_of` | B | 与其他 Metal riff 语言共同进入 |
| `melodic-death-metal` | `melodic-metalcore` | `fusion_of` | A | 与 Metalcore 汇合 |
| `metalcore` | `deathcore` | `fusion_of` | A | 与 Death Metal 汇合 |
| `death-metal` | `deathcore` | `fusion_of` | A | 与 Metalcore 汇合 |
| `industrial` | `industrial-metal` | `fusion_of` | A | 与 Heavy/Thrash riff 汇合 |
| `heavy-metal` | `alternative-metal` | `fusion_of` | B | 与 Funk/Hip-Hop/Industrial/Prog/Hardcore 等交叉 |
| `alternative-metal` | `nu-metal` | `derived_from` | A | 在 1990s 特定场景中进一步定型 |
| `hip-hop` | `rap-metal` | `fusion_of` | A | 与 Hard Rock/Metal 共同构成；节点可在扩展层补入 |
| `funk` | `funk-metal` | `fusion_of` | A | 与 Hard Rock/Metal 共同构成；节点可在扩展层补入 |
| `sludge-metal` | `post-metal` | `fusion_of` | A | 与 Post-Rock/Ambient/Industrial 汇合 |
| `post-rock` | `post-metal` | `fusion_of` | A | 长篇、动态与氛围结构来源 |
| `black-metal-second-wave` | `blackgaze` | `fusion_of` | A | 与 Shoegaze/Post-Rock 汇合 |
| `shoegaze` | `blackgaze` | `fusion_of` | A | 音墙、氛围和空间来源 |

## 七、代表专辑索引

专辑不是“证明流派存在”的唯一证据，也不是最佳榜单。第一版每个核心节点先显示 1—3 张：优先选择形成期、转折期或能听出关系的作品；同一专辑可属于多个节点，但需说明它在各节点中承担的不同作用。

| 路线 | 专辑 | 年份 | 在图中的作用 |
| --- | --- | ---: | --- |
| Rock 'n' Roll | Elvis Presley — *Elvis Presley* | 1956 | Rock 'n' Roll 大众化与跨市场表演 |
| Rock 'n' Roll | Buddy Holly — *The “Chirping” Crickets* | 1957 | 乐队创作／演奏模板 |
| Folk Rock | The Byrds — *Mr. Tambourine Man* | 1965 | Folk 写作与电声乐队汇合 |
| Garage | The Sonics — *Here Are The Sonics* | 1965 | 地方 Garage 的粗粝音色 |
| Psychedelic | The 13th Floor Elevators — *The Psychedelic Sounds…* | 1966 | 早期名称与系统化迷幻表达 |
| Studio/Art | The Beatles — *Revolver* | 1966 | 录音室、歌曲与跨传统实验 |
| Experimental/Proto-Punk | The Velvet Underground & Nico — *The Velvet Underground & Nico* | 1967 | Art/Noise/Punk/Alternative 的交叉锚点 |
| Blues/Hard | The Jimi Hendrix Experience — *Are You Experienced* | 1967 | Blues、Psychedelic 与吉他音色扩张 |
| Progressive | King Crimson — *In the Court of the Crimson King* | 1969 | Prog 成形的高辨识锚点 |
| Hard Rock | Led Zeppelin — *Led Zeppelin II* | 1969 | Blues Rock 向 Hard Rock 集中 |
| Heavy Metal | Black Sabbath — *Black Sabbath* | 1970 | 黑暗氛围与重 riff 核心化 |
| Heavy Metal | Black Sabbath — *Paranoid* | 1970 | 早期金属语法的广泛传播 |
| Jazz-Rock | Miles Davis — *Bitches Brew* | 1970 | Jazz 与电声 Rock/Funk 融合 |
| Krautrock | Neu! — *Neu!* | 1972 | motorik、重复与德国实验场景 |
| Glam Rock | David Bowie — *Ziggy Stardust* | 1972 | 声音、角色、时尚和剧场的合体 |
| Progressive | Yes — *Close to the Edge* | 1972 | 长篇、多段与技巧写作 |
| Punk | Ramones — *Ramones* | 1976 | 短歌、速度和极简乐队语法 |
| Punk | Sex Pistols — *Never Mind the Bollocks* | 1977 | 英国 Punk 的爆发节点 |
| Post-Punk | Wire — *Pink Flag* | 1977 | 从 Punk 规则内向实验结构转折 |
| Post-Punk | Joy Division — *Unknown Pleasures* | 1979 | 空间化制作与 Gothic/Post-Punk 路线 |
| NWOBHM | Iron Maiden — *The Number of the Beast* | 1982 | 双吉他、速度和场景突破 |
| First-Wave Black | Venom — *Black Metal* | 1982 | 名称、美学与第一波极端资源 |
| Alternative/Indie | R.E.M. — *Murmur* | 1983 | College Radio 与 Alternative 地下网络 |
| Hardcore | Black Flag — *Damaged* | 1981 | Hardcore 声音与自治巡演网络 |
| Emo/Post-Hardcore | Rites of Spring — *Rites of Spring* | 1985 | D.C. 情绪硬核早期锚点 |
| Thrash | Metallica — *Master of Puppets* | 1986 | Thrash 结构、重量和传播高峰 |
| Thrash | Slayer — *Reign in Blood* | 1986 | 极端速度和压缩结构 |
| Doom | Candlemass — *Epicus Doomicus Metallicus* | 1986 | Epic Doom 的稳定范式 |
| Grindcore | Napalm Death — *Scum* | 1987 | Hardcore/Metal/Noise 的极端交叉 |
| Death Metal | Death — *Scream Bloody Gore* | 1987 | Death Metal 成形期锚点 |
| Noise/Alternative | Sonic Youth — *Daydream Nation* | 1988 | Noise Rock 与 Alternative 网络交汇 |
| Shoegaze | My Bloody Valentine — *Loveless* | 1991 | 音墙、采样式吉他和空间制作 |
| Grunge | Nirvana — *Nevermind* | 1991 | 地方场景转为全球商业突破 |
| Post-Rock 前史 | Slint — *Spiderland* | 1991 | 动态、重复与非传统歌曲结构 |
| Gothic/Death-Doom | Paradise Lost — *Gothic* | 1991 | Death-Doom 向 Gothic Metal 的关键桥梁 |
| Progressive Metal | Dream Theater — *Images and Words* | 1992 | Prog 与 Metal 的广泛定型 |
| Industrial Metal | Ministry — *Psalm 69* | 1992 | 机械节奏、采样和 Metal riff 结合 |
| Groove Metal | Pantera — *Vulgar Display of Power* | 1992 | Thrash 后的中速切分与重量 |
| Second-Wave Black | Darkthrone — *A Blaze in the Northern Sky* | 1992 | 挪威第二波场景和声音转折 |
| Britpop | Suede — *Suede* | 1993 | Britpop 前期媒体与英国身份节点 |
| Britpop | Oasis — *(What's the Story) Morning Glory?* | 1995 | 运动的大众突破 |
| Melodic Death | At the Gates — *Slaughter of the Soul* | 1995 | Gothenburg 路线与后续 Metalcore 影响 |
| Post-Rock | Tortoise — *Millions Now Living Will Never Die* | 1996 | 1990s Post-Rock 多源实验范式 |
| Post-Metal | Neurosis — *Through Silver in Blood* | 1996 | Sludge/Hardcore、Industrial 与长篇氛围结合 |
| Symphonic Metal | Therion — *Theli* | 1996 | 交响方法进入极端／歌剧化金属 |
| Nu Metal | Korn — *Follow the Leader* | 1998 | Nu Metal 商业场景扩大 |
| Progressive/Extreme | Opeth — *Still Life* | 1999 | Death、Prog 与动态写作跨界 |
| Digital-era Hybrid | Radiohead — *Kid A* | 2000 | Rock 与电子、Ambient、实验制作重组 |
| Nu Metal | Linkin Park — *Hybrid Theory* | 2000 | Rap/Industrial/Pop 与 Nu Metal 的大众整合 |
| Metalcore | Converge — *Jane Doe* | 2001 | Metalcore/Hardcore 的不协和与情绪强度 |
| Post-Metal | Isis — *Oceanic* | 2002 | Post-Metal 长篇、动态与氛围定型 |
| Garage Revival | The White Stripes — *Elephant* | 2003 | 极简 Garage/Blues 语法的再传播 |
| Indie | Arcade Fire — *Funeral* | 2004 | 网络时代 Indie 的跨国突破 |
| 中国 Post-Rock | 惘闻 — *八匹马* | 2007 | 中国地域支线候选，不代表全部中国摇滚 |
| Blackgaze | Alcest — *Écailles de lune* | 2010 | Black Metal、Shoegaze 与 Post-Rock 汇流 |
| Blackgaze | Deafheaven — *Sunbather* | 2013 | Blackgaze 的国际传播与边界争论 |

## 八、节点详情内容模板

每个节点打开后只需一屏完成定位，避免另做百科页面。

1. **一句话定位**：它是什么，以及它不是什么；
2. **形成区间**：`emergence`、`codified`、`breakthrough` 分开写；
3. **地点与场景**：城市、场所、厂牌、媒体或社群；
4. **听觉线索**：节奏、riff、音色、结构、人声、制作中最有区分力的 3—5 项；
5. **关系**：2—4 条主要来源、2—4 条主要去向，显示边型；
6. **人物／乐队**：形成期、代表期、边界案例分组，不做无穷名单；
7. **专辑**：1—3 张，解释为何选而非只展示封面；
8. **边界说明**：名称是否由媒体命名、是否兼指地域场景、与近邻有何重叠；
9. **来源**：本地文章、外部资料和编辑备注可回溯。

数据化时至少需要：`id`、`name_zh`、`name_en`、`aliases`、`type`、`summary`、`emergence`、`codified`、`breakthrough`、`regions`、`traits`、`artists`、`albums`、`relations`、`source_ids`、`status`。`artists` 和 `albums` 是详情数据，不进入全局节点力导布局。

## 九、边界与争议

1. **Rock 的边界**：本图以历史关系为准，允许 Soul、Hip-Hop、Electronic、Ambient 等作为邻接影响节点；不把它们全部吞进“摇滚”。
2. **Hard Rock 与 Heavy Metal**：1968—1973 高度重叠，乐队可跨节点；不要用今天的严格标签倒推全部早期作品。
3. **Glam Rock 与 Glam Metal**：前者是 1970s 英国文化运动，后者主要是 1980s 美国 Hard/Heavy 商业场景，只以影响边连接。
4. **New Wave、Alternative、Indie**：三者都曾是产业／场景伞形标签，不能仅靠 BPM、吉他音色或歌手风格判定。
5. **Grunge**：既是 Seattle 场景，也是被市场扩张的声音标签；`post-grunge` 使用 `commercialized_as`，不写成价值贬低。
6. **Emo**：至少包含 1980s D.C. 情绪硬核、1990s Midwest/Indie 路线、2000s Emo Pop 等阶段；不能用后期形象覆盖全部历史。
7. **Gothic Rock 与 Gothic Metal**：两者有美学和部分音乐联系，但不共享一条简单主干；“女声／交响”本身不足以判定 Gothic Metal。
8. **Black Metal 波次**：第一波与第二波主要是历史场景划分，不等于严格音色等级。
9. **Power Metal**：美国与欧洲路线的声音、速度和主题重心不同，详情层需拆分地域标签。
10. **Post-Rock／Post-Metal**：“Post”是实践方法和评论框架，不表示 Rock/Metal 已结束；两者内部差异很大。
11. **当代史不完整**：现有中文素材偏重欧美和 Metal/Post-Rock，第一版明确呈现覆盖边界，后续再增加拉丁美洲、非洲、亚洲及中国摇滚的独立脉络。

## 十、从母稿到页面

第一版建议按以下顺序转化，不再另写一套“分类学页面”：

1. 先提取 1975—1994 年约 15 个核心节点作为真实验证切片；
2. 为样本加入直接衍生、融合、影响和场景承接关系，并记录来源；
3. 以 11 个阶段生成纵向时间骨架，默认只显示主干和当前年代附近的关系；
4. 先为每个核心节点编辑一句话定位、形成区间、2 条关系和 1 张专辑；
5. 样本验证后再扩展到约 40 个第一版核心节点和更多代表专辑；
6. 关系强度 `C` 默认不进入图谱，只保留在详情或资料层；
7. 任何新增箭头必须记录边型、来源和编辑理由。

验收标准不是“收录所有流派”，而是用户能从任一核心节点回答：它何时／何地形成、主要从哪里来、与哪些近邻不同、后来通向哪里，以及用哪一两张专辑能听见这段关系。

## 十一、来源

[^1]: David Brackett, “[Introduction: They Never Even Knew](https://doi.org/10.1525/california/9780520248717.003.0001),” *Categorizing Sound: Genre and Twentieth-Century Popular Music*, University of California Press, 2016.
[^2]: Jennifer C. Lena and Richard A. Peterson, “[Classification as Culture: Types and Trajectories of Music Genres](https://doi.org/10.1177/000312240807300501),” *American Sociological Review* 73(5), 2008.
[^3]: Rock & Roll Hall of Fame, “[Roots of Rock](https://rockhall.com/exhibitions/roots-of-rock/),” accessed 2026-09-12.
[^4]: Smithsonian National Museum of African American History and Culture, “[Celebrating Black Music](https://nmaahc.si.edu/explore/stories/celebrating-black-music-month),” accessed 2026-09-12.
[^5]: National Museum of African American History and Culture / Smithsonian Folklife, “[Tell It Like It Is: A History of Rhythm and Blues](https://folklife.si.edu/magazine/freedom-sounds-tell-it-like-it-is-a-history-of-rhythm-and-blues),” accessed 2026-09-12.
[^6]: Matthias Mauch, Robert M. MacCallum, Mark Levy, and Armand M. Leroi, “[The Evolution of Popular Music: USA 1960–2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC4453253/),” *Royal Society Open Science* 2, 2015.
[^7]: Alan F. Levy, “[The Velvet Underground and Nico—The Velvet Underground and Nico (1967)](https://lcweb2.loc.gov/static/programs/national-recording-preservation-board/documents/Velvet-Underground-and-Nico_Levy.pdf),” Library of Congress, National Recording Registry essay.
[^8]: David G. Angeler, “[Heavy Metal Music Meets Complexity and Sustainability Science](https://pmc.ncbi.nlm.nih.gov/articles/PMC5031579/),” *SpringerPlus* 5, 2016.
[^9]: Ignacio Soto-Silva, “[A Genre Classification Scheme for Metal-Music Corpus Studies](https://www.mdpi.com/2306-5729/11/8/188),” *Data* 11(8), 2026.
[^10]: Bruce Pegg, “[‘Roll Over Beethoven’—Chuck Berry (1956)](https://lcweb2.loc.gov/static/programs/national-recording-preservation-board/documents/RollOverBeethoven.pdf),” Library of Congress, National Recording Registry essay.
[^11]: 《从零开始说摇滚》“定义、根源与早期摇滚”及相关早期文章，见[逐篇来源索引](./explorable-rock-map-sources.md#定义根源与早期摇滚)。
[^12]: 《从零开始说摇滚》“前卫摇滚”“硬摇滚与早期重金属”专题，见[逐篇来源索引](./explorable-rock-map-sources.md#前卫摇滚)；Rock & Roll Hall of Fame, “[Genesis](https://rockhall.com/inductees/genesis/),” accessed 2026-09-12.
[^13]: Rock & Roll Hall of Fame, “[Black Sabbath](https://rockhall.com/inductees/black-sabbath/),” accessed 2026-09-12.
[^14]: Victoria and Albert Museum, “[Glam Rock: Dandies in the Underworld](https://www.vam.ac.uk/shop/books/fashion-and-textiles/glam-rock-dandies-in-the-underworld-122197.html),” accessed 2026-09-12.
[^15]: Rock & Roll Hall of Fame, “[Punk Rock in the 1970s and 1980s Playlist](https://oldschool-edu.rockhall.com/sites/default/files/2020-09/punk%20in%20the%201970s%20and%201980s%20playlist.pdf),” educational guide, 2020.
[^16]: David B. Easley, “[Riff Schemes, Form, and the Genre of Early American Hardcore Punk (1978–83)](https://mtosmt.org/issues/mto.15.21.1/mto.15.21.1.easley.html),” *Music Theory Online* 21(1), 2015.
[^17]: David M. Pearson, “[Extreme Hardcore Punk and the Analytical Challenges of Rhythm, Riffs, and Timbre in Punk Music](https://mtosmt.org/issues/mto.19.25.1/mto.19.25.1.pearson.html),” *Music Theory Online* 25(1), 2019.
[^18]: AllMusic, “[Industrial](https://www.allmusic.com/genre/industrial-ma0000002658),” accessed 2026-09-12; see also the eight archived Industrial articles in the [source index](./explorable-rock-map-sources.md#industrialindustrial-rock-与-industrial-metal).
[^19]: Recording Academy, “[How 1986 Became the Epicenter of a New Metal Sound](https://www.grammy.com/news/metallica-megadeth-slayer-anthrax-1986-new-metal-sound-albums-that-defined-thrash-interview/),” accessed 2026-09-12.
[^20]: Rock & Roll Hall of Fame, “[Nirvana](https://rockhall.com/inductees/nirvana/),” accessed 2026-09-12.
[^21]: AllMusic, “[Grunge](https://www.allmusic.com/genre/grunge-ma0000002626)” and “[Post-Grunge](https://www.allmusic.com/genre/post-grunge-ma0000005020),” accessed 2026-09-12.
[^22]: AllMusic, “[Shoegaze](https://www.allmusic.com/style/shoegaze-ma0000004454),” accessed 2026-09-12.
[^23]: AllMusic, “[Post-Rock](https://www.allmusic.com/genre/post-rock-ma0000002790),” accessed 2026-09-12.
[^24]: Benjamin Phillip Hillier, “[Musical Practices in Early Melodic Death Metal](https://www2.jmro.org.au/index.php/main/article/view/36),” *Journal of Music Research Online* 11, 2020 (published online 2022), DOI [10.20851/7m97ym72](https://doi.org/10.20851/7m97ym72).
[^25]: AllMusic, “[Britpop](https://www.allmusic.com/style/britpop-ma0000002480),” accessed 2026-09-12; Rock & Roll Hall of Fame, “[Oasis](https://rockhall.com/inductees/oasis/),” accessed 2026-09-12.
[^26]: 《从零开始说摇滚》六篇 Metalcore 专题，见[逐篇来源索引](./explorable-rock-map-sources.md#metalcore)；其路线与 Hardcore 研究[^16][^17]交叉核对。
[^27]: 《从零开始说摇滚》当代相关专题覆盖范围，见[来源与证据索引](./explorable-rock-map-sources.md)；本稿将其作为个案集而非全球总体史。
