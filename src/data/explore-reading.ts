// Edited from docs/materials/explorable-rock-map.md. Keep the short index data
// separate so the default Explore view remains scannable.
export type ListeningAnchor = {
  artist: string;
  title: string;
  year: number | string;
  note: string;
};

type EraReading = {
  story: string[];
  events: { when: string; title: string; note: string }[];
  listening: ListeningAnchor[];
};

export const eraReading: Record<string, EraReading> = {
  'roots-before-rock': {
    story: [
      '摇滚并非从单一流派突然诞生。蓝调、福音、爵士和城市 R&B 各有自己的历史，却在演唱、节奏和即兴方式上不断交换语言。1940 年代的 R&B 又把 Jump Blues、Boogie、Gospel 与电声节奏带进新的城市市场。',
      '乡村与民间传统也参与了这场交汇，且它们本身就包含跨社群的长期交流。把所有根源画成一条父子链，会抹去这些同时存在、互相影响的路线。',
    ],
    events: [
      { when: '1940s', title: '城市迁移与电声化', note: '城市社群、放大器和新的录音市场改变了音乐传播的条件。' },
    ],
    listening: [
      { artist: 'Sister Rosetta Tharpe', title: 'Strange Things Happening Every Day', year: 1944, note: '听福音人声与电吉他如何接近后来的摇滚表达。' },
      { artist: 'Louis Jordan', title: 'Jump Blues 录音', year: '1940s', note: '听舞曲节奏、铜管和流行歌曲写法的汇合。' },
      { artist: 'Muddy Waters', title: 'Chicago Electric Blues 录音', year: '1950s', note: '听蓝调进入放大后的城市乐队编制。' },
    ],
  },
  'rock-and-roll': {
    story: [
      'Rock ’n’ Roll 为多种既有实践提供了一个跨市场名称。Chuck Berry、Little Richard、Fats Domino、Elvis Presley 和 Buddy Holly 的声音并不相同；共同点是强烈节奏、青少年传播和电声表演。',
      '“第一首摇滚歌曲”没有能解释所有变化的唯一答案。《Rocket 88》可讨论失真与后来的命名，《Rock Around the Clock》可讨论大众突破，Berry 和 Little Richard 的录音则展示了吉他、歌曲与舞台语言。',
    ],
    events: [
      { when: '1950s', title: '45 转、电台与青少年市场', note: '单曲、广播和电视让不同社群的声音跨越原有唱片分类。' },
    ],
    listening: [
      { artist: 'Elvis Presley', title: 'Elvis Presley', year: 1956, note: '观察早期摇滚如何成为大众明星形象。' },
      { artist: 'Buddy Holly', title: 'The “Chirping” Crickets', year: 1957, note: '乐队创作与演奏编制的早期模板。' },
      { artist: 'Chuck Berry', title: 'Chuck Berry Is on Top', year: 1959, note: '电吉他 riff 与跨传统歌曲写法的集中呈现。' },
    ],
  },
  'bands-and-atlantic': {
    story: [
      '1960 年代初并不是摇滚的空白期。冲浪摇滚发展混响吉他，Soul 与 Motown 让 R&B／Gospel 的表达进入更广市场，Girl Group 和 Brill Building 则推进了录音室歌曲生产。',
      '英国乐队从美国唱片、Skiffle 和本地 R&B 场景学习，再把重新组织的乐队语言送回美国。British Invasion 更适合被理解为大西洋往返，而不是英国对美国的单向输入。',
    ],
    events: [
      { when: '1964—1966', title: 'British Invasion', note: '跨洋传播放大了乐队编制与青年文化的影响。' },
    ],
    listening: [
      { artist: 'The Beach Boys', title: 'Surfin’ U.S.A.', year: 1963, note: '冲浪文化与吉他／人声路线的交汇。' },
      { artist: 'The Beatles', title: 'A Hard Day’s Night', year: 1964, note: '英国乐队写作与表演模板。' },
      { artist: 'The Rolling Stones', title: 'The Rolling Stones', year: 1964, note: '美国 R&B 和蓝调在英国乐队中的再组织。' },
    ],
  },
  'rock-expands': {
    story: [
      '民谣写作与电声乐队汇合，车库场景保留重复 riff 和直接能量；迷幻、蓝调摇滚和录音室实验则从不同方向扩展音色。它们经常出现在同一乐队或同一张唱片里，并非互斥的盒子。',
      '专辑逐渐成为比单曲更大的创作单位。The Velvet Underground 将噪音与先锋艺术带入摇滚，King Crimson 等乐队扩展长篇结构，Hard Rock 则把音量和 riff 推向随后金属的形成期。',
    ],
    events: [
      { when: '1965—1975', title: 'LP、多轨与录音室成为乐器', note: '效果器、磁带与分轨录音让声音设计进入作品本体。' },
    ],
    listening: [
      { artist: 'The Byrds', title: 'Mr. Tambourine Man', year: 1965, note: '民谣写作与电声乐队的汇合。' },
      { artist: 'The Beatles', title: 'Revolver', year: 1966, note: '歌曲结构和录音室实验同时扩张。' },
      { artist: 'The Velvet Underground & Nico', title: 'The Velvet Underground & Nico', year: 1967, note: 'Art、Noise 与后来 Punk 的交叉锚点。' },
    ],
  },
  'album-era': {
    story: [
      '1970 年代前半不是一条“越来越重”的直线。前卫摇滚扩展长篇与概念写作，Glam 用剧场和性别表演改造明星形象，德国实验场景探索重复、电子和录音室，南方摇滚与爵士摇滚又重连根源和即兴。',
      'Black Sabbath 把低沉 riff、黑暗气氛和持续重量推成可延展的核心，但早期 Hard Rock 与 Heavy Metal 仍高度重叠。给乐队只贴一个今天的标签，会让这一时期的交叉消失。',
    ],
    events: [
      { when: '1970s', title: '专辑与大型舞台', note: '概念专辑、合成器和 arena 演出让作品与表演尺度同步扩大。' },
    ],
    listening: [
      { artist: 'Black Sabbath', title: 'Paranoid', year: 1970, note: '早期金属语法的广泛传播。' },
      { artist: 'David Bowie', title: 'Ziggy Stardust', year: 1972, note: '角色、时尚、剧场与歌曲构成同一作品。' },
      { artist: 'Neu!', title: 'Neu!', year: 1972, note: '重复与 motorik 展示德国场景的另一种方向。' },
    ],
  },
  'punk-reset': {
    story: [
      'Punk 汇合了 Garage、早期 Rock ’n’ Roll、The Velvet Underground 和 The Stooges 等资源；短歌与直接 riff 很重要，但更持久的改变是小场地、fanzine 和独立发行建立的参与方式。',
      '分化几乎立即发生：New Wave 更接近宽泛的媒体和商业标签，Post-Punk 保留实验许可并扩大节奏与音色，Hardcore 则强化速度、重音和自治场景。它们不是三个互斥的后代。',
    ],
    events: [
      { when: '1976—1980s', title: 'DIY 厂牌、fanzine 与小场地', note: '音乐生产和传播不再完全依赖大型唱片工业。' },
    ],
    listening: [
      { artist: 'Patti Smith', title: 'Horses', year: 1975, note: '纽约场景里诗歌、表演与摇滚的结合。' },
      { artist: 'Ramones', title: 'Ramones', year: 1976, note: '短歌、速度和极简编制。' },
      { artist: 'Joy Division', title: 'Unknown Pleasures', year: 1979, note: '听 Punk 之后空间化制作与阴暗路线。' },
    ],
  },
  'underground-systems': {
    story: [
      '美国不同城市的 Hardcore 建立了自己的速度、演出与巡演网络；Post-Punk 的阴暗路线走向 Gothic Rock，而 Industrial 从磁带、噪音、电子和行为艺术出发，最初并不以金属吉他为核心。',
      'NWOBHM 是英国的场景运动，不是单一音色。它强化速度、双吉他和独立发行，为 Thrash、Power 及极端金属提供共同资源；同时 Doom 在 Black Sabbath 的重量上形成另一条缓慢路线。',
    ],
    events: [
      { when: '1980s', title: 'College Radio 与独立巡演网', note: '地方场景被电台、厂牌和跨城演出连接。' },
      { when: '1981 起', title: 'MTV 与音乐录像', note: '视觉形象成为 New Wave、Glam Metal 等场景扩散的重要媒介。' },
    ],
    listening: [
      { artist: 'Black Flag', title: 'Damaged', year: 1981, note: 'Hardcore 声音与自治场景的锚点。' },
      { artist: 'Iron Maiden', title: 'The Number of the Beast', year: 1982, note: 'NWOBHM 速度、双吉他与传播突破。' },
      { artist: 'R.E.M.', title: 'Murmur', year: 1983, note: 'College Radio 与 Alternative 地下网络。' },
    ],
  },
  'extreme-and-alternative': {
    story: [
      'Hardcore 延伸出结构更开放的 Post-Hardcore、私人化表达更强的早期 Emo，也与 Thrash 相遇形成 Crossover；Grindcore 则把 Hardcore／Crust、Metal 和噪音压缩到极端速度。',
      'Alternative 此时仍主要指独立电台、厂牌和巡演位置，而不是一种统一音色。另一侧，Thrash 的高峰带动 Death 与 Black Metal 分化；Shoegaze 和 Seattle 的混合声音也在各自地方网络中成形。',
    ],
    events: [
      { when: '1985 起', title: 'PMRC 与 Parental Advisory', note: '金属和说唱进入主流道德恐慌与审查争议。' },
      { when: '1986', title: 'Thrash 的关键高峰', note: '同一标签下的结构、速度和重量已呈现不同写法。' },
    ],
    listening: [
      { artist: 'Rites of Spring', title: 'Rites of Spring', year: 1985, note: 'D.C. 情绪硬核的早期声音。' },
      { artist: 'Metallica', title: 'Master of Puppets', year: 1986, note: 'Thrash 的结构和重量。' },
      { artist: 'Sonic Youth', title: 'Daydream Nation', year: 1988, note: 'Noise Rock 与 Alternative 网络交汇。' },
    ],
  },
  'alternative-breakthrough': {
    story: [
      'Grunge 在 Seattle 场景存在多年后才迎来全球突破；1991 年不是起点，而是 Alternative 从地下网络名称转为大型市场分类的节点。相邻的 Shoegaze、Post-Rock 和 Industrial Rock 并未因此走上同一条路线。',
      '极端金属也在地域网络中分化：Florida 的 Death、瑞典 Gothenburg 的 Melodic Death、挪威第二波 Black Metal，以及英国 Death-Doom 各有不同来源。按地名和时期阅读，比把它们排成一列父子关系更准确。',
    ],
    events: [
      { when: '1991—1994', title: 'Alternative 商业突破', note: '大型媒体重新命名地下网络；Grunge 是关键，却不是全部。' },
    ],
    listening: [
      { artist: 'My Bloody Valentine', title: 'Loveless', year: 1991, note: 'Shoegaze 的音墙与空间制作。' },
      { artist: 'Nirvana', title: 'Nevermind', year: 1991, note: '地方场景转为全球商业突破。' },
      { artist: 'Slint', title: 'Spiderland', year: 1991, note: 'Post-Rock 前史中的动态与非传统结构。' },
    ],
  },
  'hybrid-explosion': {
    story: [
      'Britpop 是英国 Indie、媒体和地域身份交织的运动，不是统一音色。与此同时，Alternative Metal 把 Funk、Hip-Hop、Industrial、Prog 和 Hardcore 带进金属交叉地带，Nu Metal 又形成自己的青年市场和制作语言。',
      'Metalcore 的核心是 Hardcore 场景与 Metal riff／breakdown 的结合，并非 Grindcore 的单线后代。Post-Metal 则从 Sludge、Hardcore、Industrial 和 Ambient 出发，把重量转成更长的动态过程。',
    ],
    events: [
      { when: '1990s 后期', title: '融合标签与互联网前夜', note: '媒体分类越来越密集，跨场景传播也开始加速。' },
    ],
    listening: [
      { artist: 'Oasis', title: '(What’s the Story) Morning Glory?', year: 1995, note: 'Britpop 的大众传播节点。' },
      { artist: 'Tortoise', title: 'Millions Now Living Will Never Die', year: 1996, note: 'Post-Rock 的多源实验。' },
      { artist: 'Neurosis', title: 'Through Silver in Blood', year: 1996, note: 'Post-Metal 的重量、氛围与长篇结构。' },
    ],
  },
  'network-era': {
    story: [
      '2000 年以后，复兴不等于复制：Garage 和 Post-Punk 语法被新一代乐队重新组合；Emo、Metalcore、Post-Metal、Blackgaze 和各地 Post-Rock 场景则沿不同网络继续变化。',
      '数字发行和流媒体降低了地域隔离，也让旧目录重新被发现。现有资料对欧美 Metal／Post-Rock 较充分，对更多地域与 2010 年代后整体变化仍不完整，因此这里呈现多中心的延续与重组，不虚构唯一主流。',
    ],
    events: [
      { when: '1999—至今', title: '数字发行与平台网络', note: '文件分享、流媒体和社群平台加快了复兴与跨地域连接。' },
    ],
    listening: [
      { artist: 'Radiohead', title: 'Kid A', year: 2000, note: 'Rock 与电子、Ambient 和制作实验重新组合。' },
      { artist: 'The White Stripes', title: 'Elephant', year: 2003, note: 'Garage／Blues 语法的再传播。' },
      { artist: 'Alcest', title: 'Écailles de lune', year: 2010, note: 'Black Metal、Shoegaze 与 Post-Rock 的交汇。' },
    ],
  },
};

type GenreReading = {
  context: string;
  traits: string[];
  artists: string[];
  record?: ListeningAnchor;
  boundary: string;
  sourceArticles?: number[];
};

export const genreReading: Record<string, GenreReading> = {
  blues: {
    context: '蓝调从美国南部的多种社群实践走向城市电声乐队，既是一套可辨认的写作与演唱资源，也有不断变化的地方形式。',
    traits: ['应答式演唱', '蓝调音阶与反复句式', '个人叙事与即兴'],
    artists: ['Robert Johnson', 'Muddy Waters'],
    record: { artist: 'Muddy Waters', title: 'Chicago Electric Blues 录音', year: '1950s', note: '从放大后的吉他和乐队互动进入城市蓝调。' },
    boundary: '蓝调不是所有后来摇滚风格的唯一父级；Gospel、Country、Jazz 与 R&B 也在长期交汇。',
  },
  gospel: {
    context: '福音音乐的群体应答、情感递进和强烈人声深刻影响了 R&B、Soul 与早期摇滚的表演语言。',
    traits: ['主唱与合唱应答', '逐步增强的情绪张力', '节奏鲜明的人声表达'],
    artists: ['Sister Rosetta Tharpe'],
    record: { artist: 'Sister Rosetta Tharpe', title: 'Strange Things Happening Every Day', year: 1944, note: '宗教表达、电吉他和大众唱片市场在此相遇。' },
    boundary: '不能把福音仅当作摇滚的“前身”；它是持续发展的独立传统。',
  },
  'r-and-b': {
    context: '1940 年代的城市 R&B 是宽泛的历史市场类别，把 Jump Blues、Boogie、Gospel、Jazz 和电声节奏连接起来。',
    traits: ['突出反拍与舞曲律动', '电声小编制', '蓝调与福音唱法并存'],
    artists: ['Louis Jordan', 'Fats Domino'],
    record: { artist: 'Louis Jordan', title: 'Jump Blues 录音', year: '1940s', note: '听 R&B 进入早期摇滚之前的节奏与编制。' },
    boundary: 'R&B 的名称和所指随年代改变；这里主要指早期历史语境，不等于今天所有同名市场类别。',
  },
  'rock-and-roll': {
    context: 'Rock ’n’ Roll 在 1950 年代把不同传统带进共同的青年市场。音乐人之间差异很大，但节奏、电吉他与舞台表达形成了后来乐队可反复改写的模板。',
    traits: ['明显的反拍', '短篇歌曲与 riff', '高能量的电声表演'],
    artists: ['Chuck Berry', 'Little Richard', 'Elvis Presley', 'Buddy Holly'],
    record: { artist: 'Chuck Berry', title: 'Chuck Berry Is on Top', year: 1959, note: '电吉他 riff、叙事歌曲与跨传统写法的锚点。' },
    boundary: '不存在一首能单独承担全部“起源”的歌曲；声音形成、名称传播与商业突破是不同过程。',
  },
  'folk-rock': {
    context: '民谣摇滚将 Folk Revival 的写作、和声与社会议题放进电声乐队，打开了歌曲语言和摇滚编制之间的新关系。',
    traits: ['重视歌词与叙事', '民谣和声与电吉他', '摇滚节拍下的抗议传统'],
    artists: ['Bob Dylan', 'The Byrds'],
    record: { artist: 'The Byrds', title: 'Mr. Tambourine Man', year: 1965, note: '听民谣歌曲如何被电声乐队重新组织。' },
    boundary: '不是 Folk 被 Rock 简单取代；原有民谣场景与新乐队路线长期并行。',
  },
  'psychedelic-rock': {
    context: '迷幻摇滚借助效果器、磁带与录音室，尝试让歌曲呈现更不稳定、更具空间感的感官经验。它可同时连接 Folk、Garage、Blues 和实验音乐。',
    traits: ['反馈与效果器', '非标准音色和空间处理', '延长的器乐段落'],
    artists: ['The 13th Floor Elevators', 'Jimi Hendrix', 'Pink Floyd'],
    record: { artist: 'The 13th Floor Elevators', title: 'The Psychedelic Sounds of the 13th Floor Elevators', year: 1966, note: '早期系统化的迷幻表达。' },
    boundary: '迷幻并非单一声音配方；重型 Acid Rock 与更轻的 Folk／Studio 路线可以同时属于它。',
  },
  'progressive-rock': {
    context: '前卫摇滚在 1960 年代末至 1970 年代把长篇结构、概念专辑、器乐技巧与古典／爵士资源带进摇滚。',
    traits: ['多段式长篇', '不规则节拍和器乐演奏', '概念与专辑整体结构'],
    artists: ['King Crimson', 'Yes', 'Genesis'],
    record: { artist: 'King Crimson', title: 'In the Court of the Crimson King', year: 1969, note: '前卫摇滚形成期的高辨识锚点。' },
    boundary: '“前卫”不是音乐复杂程度的通用评分，也不能把后来所有实验摇滚都归入这一流派。',
  },
  krautrock: {
    context: 'Krautrock 是外部形成的伞形称呼，覆盖西德多个实验场景；这些乐队以重复、电子、即兴和录音室方式寻找英美摇滚之外的路径。',
    traits: ['motorik 与持续重复', '电子／磁带实验', '开放式结构'],
    artists: ['Neu!', 'Can', 'Faust'],
    record: { artist: 'Neu!', title: 'Neu!', year: 1972, note: '从 motorik 节奏进入德国实验场景。' },
    boundary: '它不是一套统一的德国音色；乐队之间的目标和方法差异很大。',
  },
  'glam-rock': {
    context: 'Glam 把歌曲、服装、舞台角色和性别表演编排成整体文化事件，声音可从简洁 Rock ’n’ Roll 跨到 Art Rock。',
    traits: ['剧场化角色', '强烈视觉形象', 'Rock 与 Pop 的直接歌曲写法'],
    artists: ['David Bowie', 'T. Rex', 'Roxy Music'],
    record: { artist: 'David Bowie', title: 'Ziggy Stardust', year: 1972, note: '角色、声音与剧场构成同一作品。' },
    boundary: '1970 年代 Glam Rock 不等于 1980 年代美国 Glam Metal；二者有影响关系，却不是同一个场景。',
  },
  'heavy-metal': {
    context: '早期重金属从 Hard Rock、Blues Rock 和 Psychedelic 的重量中逐渐稳定；Black Sabbath 让低沉 riff 与黑暗氛围成为可延展的核心语法。',
    traits: ['持续而沉重的 riff', '更强的失真与鼓击', '黑暗或宏大的主题'],
    artists: ['Black Sabbath', 'Judas Priest', 'Deep Purple'],
    record: { artist: 'Black Sabbath', title: 'Paranoid', year: 1970, note: '早期金属语法广泛传播的作品。' },
    boundary: '1968—1973 年的 Hard Rock 与 Heavy Metal 高度重叠，不宜用今天的分类倒推每张早期唱片。',
  },
  'punk-rock': {
    context: 'Punk 将早期摇滚、Garage 与 Proto-Punk 的直接性带进纽约、伦敦等场景；DIY 出版、场地和厂牌与短歌同样关键。',
    traits: ['短而直接的歌曲', '重复 riff 与强烈速度', '低门槛的参与方式'],
    artists: ['Ramones', 'Patti Smith', 'The Clash', 'Sex Pistols'],
    record: { artist: 'Ramones', title: 'Ramones', year: 1976, note: '极简编制、速度和短歌的集中呈现。' },
    boundary: 'Punk 不是一种固定拍速或对所有复杂音乐的简单反动；场景和生产伦理是定义的一部分。',
  },
  'post-punk': {
    context: 'Post-Punk 继承 Punk 的实验许可和独立网络，却把 Dub、Funk、电子、噪音和更开放的结构带进新的歌曲形式。',
    traits: ['突出低音与节奏空间', '非传统吉他音色', '实验性歌曲结构'],
    artists: ['Joy Division', 'Wire', 'Talking Heads'],
    record: { artist: 'Joy Division', title: 'Unknown Pleasures', year: 1979, note: '空间化制作与阴暗后朋克路线。' },
    boundary: '“后”不是 Punk 的结束；不少乐队与 Punk 同时活动，且相互共享成员、厂牌和场地。',
  },
  'hardcore-punk': {
    context: '美国多地的 Hardcore 将 Punk 推向更短、更快和更强的集体表演，同时建立自治巡演、厂牌和城市社群。',
    traits: ['高速短歌', '强重音与密集 riff', '现场集体能量'],
    artists: ['Black Flag', 'Bad Brains', 'Minor Threat'],
    record: { artist: 'Black Flag', title: 'Damaged', year: 1981, note: '听声音和自治场景如何彼此支撑。' },
    boundary: '速度不是全部；各城市的演奏方法、政治立场和组织方式并不一致。',
  },
  shoegaze: {
    context: 'Shoegaze 从 Dream Pop、Noise Pop 和 Neo-Psychedelia 之间成形，以反馈、失真和层叠制作制造包围感。',
    traits: ['吉他音墙与反馈', '人声后置', '模糊但可辨的旋律'],
    artists: ['My Bloody Valentine'],
    record: { artist: 'My Bloody Valentine', title: 'Loveless', year: 1991, note: '音墙、采样式吉他与空间制作的锚点。' },
    boundary: '与 Dream Pop 高度重叠，但不能仅凭“朦胧”就把所有空间化流行音乐归为 Shoegaze。',
  },
  'alternative-rock': {
    context: 'Alternative 起初更像 College Radio、独立厂牌和巡演线路构成的替代位置；1991 年后，它又被大型产业用作宽泛市场标签。',
    traits: ['声音差异大于共同音色', '独立发行与地方网络', '对主流分类的替代位置'],
    artists: ['R.E.M.', 'Sonic Youth', 'Pixies'],
    record: { artist: 'R.E.M.', title: 'Murmur', year: 1983, note: 'College Radio 时代的地下网络锚点。' },
    boundary: '不能用一种吉他音色定义所有 Alternative；市场化之前与之后的标签含义也不同。',
  },
  grunge: {
    context: 'Grunge 在 Seattle／美国西北的地方网络中混合 Punk、Hardcore、Garage、Hard Rock 与 Metal；1991 年的成功是传播转折，而非形成起点。',
    traits: ['粗粝吉他与动态反差', 'Punk 和 Metal 的交叉', '地方厂牌与场景网络'],
    artists: ['Nirvana', 'Soundgarden', 'Alice in Chains'],
    record: { artist: 'Nirvana', title: 'Nevermind', year: 1991, note: '地方场景进入全球市场的突破节点。' },
    boundary: 'Grunge 既是场景又是后来的市场标签；几支代表乐队并不共享同一套严格音色。',
  },
  'post-rock': {
    context: 'Post-Rock 用摇滚乐器探索重复、音色、空间和非传统歌曲结构，持续吸收 Krautrock、Ambient、Minimalism、Dub、Jazz 与电子音乐。',
    traits: ['重复与渐变', '结构和空间重于主歌副歌', '器乐与制作方法开放'],
    artists: ['Talk Talk', 'Slint', 'Tortoise'],
    record: { artist: 'Tortoise', title: 'Millions Now Living Will Never Die', year: 1996, note: '1990 年代后摇滚多源实验的范例。' },
    boundary: '“用摇滚乐器做非摇滚音乐”只是入口，不足以概括这个内部差异很大的伞形标签。',
  },
  nwobhm: {
    context: 'NWOBHM 是 1970 年代末到 1980 年代英国的场景运动，连接了传统重金属、Punk 时期的 DIY 发行和更快的双吉他语言。',
    traits: ['更快的速度', '双吉他与独奏', '独立单曲和现场网络'],
    artists: ['Iron Maiden'],
    record: { artist: 'Iron Maiden', title: 'The Number of the Beast', year: 1982, note: '场景突破与速度／旋律的代表锚点。' },
    boundary: '它是地域与时期明确的运动，不是所有高速金属的通用音色类别。',
  },
  'thrash-metal': {
    context: 'Thrash 在 NWOBHM、Speed Metal 与 Hardcore／Punk 的交汇中成形；1986 年的一批作品展示了它在结构、速度与重量上的分化。',
    traits: ['高速切分 riff', '紧密的鼓与吉他配合', '攻击性和结构变化并存'],
    artists: ['Metallica', 'Slayer', 'Megadeth', 'Anthrax'],
    record: { artist: 'Metallica', title: 'Master of Puppets', year: 1986, note: 'Thrash 的长篇结构、重量与传播高峰。' },
    boundary: 'Thrash 并不只有一套美国范式；德国等地域场景也有自身路线。',
  },
  'death-metal': {
    context: 'Death Metal 在 Thrash 和第一波极端金属的资源上形成更重音色、低吼与复杂 riff，并在美国、瑞典等地区产生不同场景。',
    traits: ['低沉失真的吉他', '低吼与密集打击', '复杂或快速变化的 riff'],
    artists: ['Death'],
    record: { artist: 'Death', title: 'Scream Bloody Gore', year: 1987, note: 'Death Metal 成形期的一条重要路线。' },
    boundary: 'Melodic、Technical 与 Brutal 等后续方向不能排成单一路径；各自引入了不同资源。',
  },
  'black-metal-second-wave': {
    context: '第二波黑金属以 1990 年代初挪威场景为中心，重新组织第一波的声音、美学和地域网络；这里的“波”首先是历史划分。',
    traits: ['高速 tremolo 与氛围', '粗粝制作', '强烈的场景美学'],
    artists: ['Darkthrone'],
    record: { artist: 'Darkthrone', title: 'A Blaze in the Northern Sky', year: 1992, note: '挪威第二波声音与场景转折。' },
    boundary: '第一波与第二波不是音色“等级”；不同地域的 Black Metal 也不能被挪威场景全部代表。',
  },
  metalcore: {
    context: 'Metalcore 从 Hardcore 场景与金属 riff、重量及 breakdown 的结合中成形，1990 年代已有不同方向，之后又出现旋律化支系。',
    traits: ['Hardcore 式重音和 breakdown', '金属 riff 与厚重音色', '场景伦理与跨界写作'],
    artists: ['Converge', 'Earth Crisis', 'Integrity'],
    record: { artist: 'Converge', title: 'Jane Doe', year: 2001, note: 'Hardcore／Metalcore 的不协和与情绪强度。' },
    boundary: 'Crossover Thrash 是重要前驱，但 Grindcore 不是 Metalcore 的单一父级；后期旋律金属核也不是全部。',
  },
  'nu-metal': {
    context: 'Nu Metal 在 Alternative Metal 的交叉地带吸收 Hip-Hop、Funk、Industrial 和 Groove，1990 年代后期又形成显著的青年商业场景。',
    traits: ['低调弦与切分', '采样、DJ 或 Hip-Hop 节奏', '强烈的音色反差'],
    artists: ['Korn', 'Deftones', 'Slipknot', 'Linkin Park'],
    record: { artist: 'Korn', title: 'Follow the Leader', year: 1998, note: 'Nu Metal 商业场景扩大的锚点。' },
    boundary: '这些乐队的写法差异很大；Nu Metal 不等于把说唱直接叠在金属上。',
  },
  'post-metal': {
    context: 'Post-Metal 把 Sludge、Hardcore、Industrial 和 Ambient 的资源带入更长的动态过程，重量不只表现为速度或 riff，也表现为空间与累积。',
    traits: ['长篇与渐进式动态', '沉重音墙', '氛围和重复'],
    artists: ['Neurosis', 'Isis', 'Cult of Luna'],
    record: { artist: 'Neurosis', title: 'Through Silver in Blood', year: 1996, note: 'Sludge／Hardcore、Industrial 与长篇氛围的交汇。' },
    boundary: '“Post”不是 Metal 的终点；它是评论和实践方法的宽泛称呼。',
  },
  'folk-traditions': {
    context: '民间传统指向口传、地方舞曲、劳动和叙事等多种实践。摇滚从这些实践中持续借用写作和表演方法，但不存在一个包办所有根源的“民谣父级”。',
    traits: ['口传与地方变体', '叙事歌曲', '社群性演唱与舞曲'],
    artists: ['Hank Williams', 'Bob Dylan'],
    boundary: '这里是多地域传统的索引，不把 Country、Blues、Gospel 或 Jazz 归为它的单一子代。',
  },
  country: {
    context: '乡村音乐在美国南部和阿巴拉契亚的弦乐、叙事和商业录音中发展，也与黑人 banjo、蓝调和福音传统长期交流。',
    traits: ['弦乐和舞曲节奏', '地方口音与叙事', '多种乡村录音支系'],
    artists: ['Hank Williams', 'Johnny Cash', 'Carl Perkins'],
    record: { artist: 'Hank Williams', title: '1940—1950 年代录音', year: '1940s—1950s', note: '从歌曲写作与人声叙事进入乡村传统。' },
    boundary: 'Country 并非与黑人音乐隔离的“纯白人传统”；它与 Blues、Gospel 和早期 Rock ’n’ Roll 长期交错。',
  },
  jazz: {
    context: '爵士通过即兴、复杂和声、合奏互动和 Swing 节奏持续影响摇滚，尤其在 Jazz-Rock、Progressive 和实验路线中可见。',
    traits: ['即兴与合奏回应', '复杂和声', 'Swing 与节奏变化'],
    artists: ['Miles Davis'],
    record: { artist: 'Miles Davis', title: 'Bitches Brew', year: 1970, note: '这是爵士与 Rock／Funk 电声能量的交汇，不是整个爵士传统的缩影。' },
    boundary: 'Jazz 在图中是独立根源与邻接影响，不是 Psychedelic 或 Prog 的单一父级。',
  },
  'blues-rock': {
    context: 'Blues Rock 将电声蓝调的吉他、即兴和反复乐句带进更响亮的摇滚乐队，也为 Hard Rock 提供重要资源。',
    traits: ['放大的蓝调吉他', '长篇即兴', '重复 riff 与强鼓点'],
    artists: ['The Yardbirds', 'Cream', 'Jimi Hendrix'],
    record: { artist: 'The Jimi Hendrix Experience', title: 'Are You Experienced', year: 1967, note: '听蓝调吉他、迷幻音色和舞台能量如何交叉。' },
    boundary: 'Blues Rock 与 Psychedelic、Hard Rock 在 1960 年代高度重叠，不能只按音量划线。',
  },
  'garage-rock': {
    context: '1960 年代地方乐队的低成本录音、直接 riff 和强烈能量形成 Garage 场景，后来成为 Proto-Punk 的重要参照。',
    traits: ['粗粝录音', '短促重复 riff', '地方乐队网络'],
    artists: ['The Sonics', 'The 13th Floor Elevators'],
    record: { artist: 'The Sonics', title: 'Here Are The Sonics', year: 1965, note: '地方 Garage 的粗粝音色和直接性。' },
    boundary: 'Garage 不是对所有技术简单的乐队的评价；它也指特定年代和地方传播网络。',
  },
  'experimental-rock': {
    context: '实验摇滚把噪音、磁带、先锋艺术、制作过程或非常规结构视为作品的一部分，覆盖多个时期和互不相同的场景。',
    traits: ['非标准结构', '噪音与磁带处理', '概念和制作方法开放'],
    artists: ['The Velvet Underground', 'The Beatles', 'Can'],
    record: { artist: 'The Velvet Underground & Nico', title: 'The Velvet Underground & Nico', year: 1967, note: '听噪音、艺术实践与歌曲形式的碰撞。' },
    boundary: '这是跨场景伞形标签，不能把所有创新或复杂作品自动归入其中。',
  },
  'hard-rock': {
    context: 'Hard Rock 集中放大了 Blues Rock 和 Psychedelic 的 riff、鼓点与舞台力量，并与早期 Heavy Metal 共同发展。',
    traits: ['响亮的电吉他 riff', '强鼓点', '舞台型人声和即兴'],
    artists: ['Led Zeppelin', 'Deep Purple'],
    record: { artist: 'Led Zeppelin', title: 'Led Zeppelin II', year: 1969, note: 'Blues Rock 向 Hard Rock 集中的锚点。' },
    boundary: '早期 Hard Rock／Heavy Metal 边界流动，不宜给 1960 年代末乐队强制贴单一身份。',
  },
  'proto-punk': {
    context: 'Proto-Punk 是后来回望 Garage、Experimental 与 Hard Rock 中某些原始、重复和对抗性实践时使用的伞形称呼。',
    traits: ['直接而重复的 riff', '舞台对抗性', '噪音和非常规表达'],
    artists: ['The Velvet Underground', 'The Stooges', 'New York Dolls'],
    record: { artist: 'The Velvet Underground & Nico', title: 'The Velvet Underground & Nico', year: 1967, note: '从实验摇滚通向后续 Punk 的交叉锚点。' },
    boundary: '这些音乐人未必自称 Punk；“原型”是后来的历史关系描述，不是当时统一的场景名称。',
  },
  'gothic-rock': {
    context: 'Gothic Rock 从 Post-Punk 的低音驱动、阴暗氛围和空间化制作中逐渐形成，也发展出鲜明的视觉与场景文化。',
    traits: ['突出的低音线', '阴暗空间与延迟效果', '戏剧化人声'],
    artists: ['Bauhaus', 'The Cure', 'Siouxsie and the Banshees'],
    record: { artist: 'Bauhaus', title: 'In the Flat Field', year: 1980, note: '早期 Gothic Rock 的声音与视觉锚点。' },
    boundary: 'Gothic Rock 与后来的 Gothic Metal 有联系，但并非一条直接、统一的父子路线。',
  },
  britpop: {
    context: 'Britpop 是 1990 年代英国 Indie、媒体竞争与地域身份交织的文化运动，借用 British Pop、Mod、Glam 和 Punk 等多代资源。',
    traits: ['英国地域叙事', '吉他流行写作', '媒体化的场景竞争'],
    artists: ['Blur', 'Oasis', 'Pulp', 'Suede'],
    record: { artist: 'Oasis', title: '(What’s the Story) Morning Glory?', year: 1995, note: '运动进入大众市场的关键节点。' },
    boundary: '代表乐队音色并不统一；Britpop 不能简化成一套可无限复制的声音配方。',
  },
  industrial: {
    context: '早期 Industrial 将磁带、噪音、电子、行为艺术与挑衅性实验组织成场景；与摇滚或金属歌曲结构的结合发生在后续路线。',
    traits: ['磁带与采样', '机械或噪音质地', '表演与概念实验'],
    artists: ['Throbbing Gristle', 'Cabaret Voltaire', 'Einstürzende Neubauten'],
    boundary: 'Industrial 并不以重金属吉他为必要条件，Industrial Rock／Metal 是后来的交汇。',
  },
  'doom-metal': {
    context: 'Doom 把 Black Sabbath 的缓慢重量、低沉 riff 和压迫气氛发展成独立路线，1980 年代出现更稳定的场景写法。',
    traits: ['低速与长音', '沉重 riff', '压迫或哀悼气氛'],
    artists: ['Candlemass', 'Saint Vitus', 'Pentagram'],
    record: { artist: 'Candlemass', title: 'Epicus Doomicus Metallicus', year: 1986, note: 'Epic Doom 成形的代表范式。' },
    boundary: 'Doom 后续可与 Death、Psychedelic、Sludge 等交叉，但不是所有慢速金属的唯一来源。',
  },
  'progressive-metal': {
    context: 'Progressive Metal 把 Heavy Metal 的音色和力量与 Prog 的长篇、复杂结构、概念和技巧写作结合。',
    traits: ['长篇多段结构', '不规则拍号', '金属 riff 与器乐技巧'],
    artists: ['Dream Theater', 'Queensrÿche'],
    record: { artist: 'Dream Theater', title: 'Images and Words', year: 1992, note: 'Prog 与 Metal 结合获得广泛传播的锚点。' },
    boundary: '复杂演奏不是唯一标准；它与 Technical Death 等方法有交叉，却不是后者的单一父级。',
  },
  'gothic-metal': {
    context: 'Gothic Metal 在 1990 年代从 Death-Doom、Gothic／Ethereal 和多种地域路线中汇合，兼有沉重音色与阴暗氛围。',
    traits: ['沉重而缓慢的动态', '哥特氛围与声线对比', '多条地域路线'],
    artists: ['Paradise Lost', 'My Dying Bride', 'Anathema'],
    record: { artist: 'Paradise Lost', title: 'Gothic', year: 1991, note: 'Death-Doom 通向 Gothic Metal 的关键桥梁。' },
    boundary: '“女声”或“交响”本身不足以定义 Gothic Metal；它也不是 Gothic Rock 的简单金属化。',
  },
  'alternative-metal': {
    context: 'Alternative Metal 是金属与 Funk、Hip-Hop、Industrial、Prog、Hardcore 等资源交叉的伞形标签，内部差异远大于统一音色。',
    traits: ['跨类型节奏', '非传统金属音色', '结构与制作实验'],
    artists: ['Faith No More', 'Helmet', 'Tool', 'Rage Against the Machine'],
    boundary: '它不等于 Nu Metal；后者是此交叉地带中形成的特定声音和商业场景。',
  },
  'industrial-metal': {
    context: 'Industrial Metal 将工业音乐的机械节奏、采样和噪音处理与 Heavy／Thrash 的 riff 结合，在 1980 年代末至 1990 年代扩张。',
    traits: ['机械节奏与采样', '失真金属 riff', '重复与制作质地'],
    artists: ['Ministry', 'Godflesh'],
    record: { artist: 'Ministry', title: 'Psalm 69', year: 1992, note: '机械节奏与 Metal riff 结合的锚点。' },
    boundary: '它不代表全部 Industrial；早期工业音乐有不依赖吉他的独立历史。',
  },
  'new-wave': {
    context: 'New Wave 是 Punk 之后逐渐扩大的媒体与市场标签。Pop 歌曲、电子音色、Ska／Reggae 节奏和影像文化可以在其中相遇，但并不组成单一配方。',
    traits: ['紧凑的流行歌曲写法', '电子或跨类型节奏', '声音与视觉形象并重'],
    artists: ['Talking Heads'],
    record: { artist: 'Talking Heads', title: 'More Songs About Buildings and Food', year: 1978, note: '从 Punk 网络走向更开放的节奏与歌曲形式。' },
    boundary: 'New Wave 与 Post-Punk 有重叠，前者更常作为宽泛的媒体／市场分类，不能把两者画成互斥后代。',
    sourceArticles: [159, 157],
  },
  'post-hardcore': {
    context: 'Post-Hardcore 延续 Hardcore 的城市社群与 DIY 网络，却把短歌以外的动态、结构和表达方式重新打开。',
    traits: ['强弱动态变化', '不再固定于高速短歌', '保留 Hardcore 的现场张力'],
    artists: ['Fugazi'],
    boundary: '这里的“后”指场景承接和写法扩张；它不是所有较慢 Hardcore 乐队的统一音色。',
    sourceArticles: [69, 68],
  },
  emo: {
    context: '早期 Emo 从 1980 年代 Washington D.C. 的 Hardcore／Post-Hardcore 场景出发，让私人化表达与动态反差进入原有网络。之后的 Midwest／Indie 与 Emo Pop 又是不同阶段。',
    traits: ['私人化歌词', '情绪与音量的动态变化', 'Hardcore 场景出身'],
    artists: ['Rites of Spring'],
    record: { artist: 'Rites of Spring', title: 'Rites of Spring', year: 1985, note: '进入早期 D.C. 情绪硬核，而非以后所有 Emo 的统一模板。' },
    boundary: '不能用 2000 年代的服装或主流形象倒推 1980 年代的 Emo。',
    sourceArticles: [68],
  },
  'dream-pop': {
    context: 'Dream Pop 把 Post-Punk、Neo-Psychedelia 与空间化制作连接起来，歌曲的旋律、人声和氛围比清晰的摇滚 riff 更突出。',
    traits: ['空间化吉他与人声', '柔和而持续的层次', '旋律和氛围并置'],
    artists: ['Cocteau Twins', 'This Mortal Coil'],
    record: { artist: 'Cocteau Twins', title: 'Head over Heels', year: 1983, note: '听 Post-Punk 资源如何转向更空间化的人声与制作。' },
    boundary: '与 Shoegaze 相交，但后者通常更突出反馈、失真与吉他音墙。',
    sourceArticles: [79],
  },
  'indie-rock': {
    context: 'Indie 最初强调独立厂牌、制作与发行的位置；它与 Alternative 地下网络高度重叠，后来才逐渐兼有审美标签的含义。',
    traits: ['独立制作与发行', '音色没有唯一标准', '地方场景与巡演网络'],
    artists: ['R.E.M.', 'The Smiths', 'Arcade Fire'],
    record: { artist: 'Arcade Fire', title: 'Funeral', year: 2004, note: '网络时代 Indie 跨地域传播的一个锚点。' },
    boundary: '1991 年后的 Alternative 常被大工业用作市场标签；Indie 也不能简单等于某一种清淡吉他声。',
    sourceArticles: [13, 51],
  },
  'post-grunge': {
    context: 'Grunge 的商业突破之后，广播与大型市场把其部分声音和形象重新组合，Post-Grunge 因而是场景扩张后的宽泛标签。',
    traits: ['更稳定的电台歌曲结构', '重吉他与旋律 hook 并置', '跨地域的主流复制'],
    artists: [],
    boundary: 'Post-Grunge 不是对所有后来 Seattle 乐队的贬义判定，也不能反过来解释 Grunge 的形成。',
    sourceArticles: [136],
  },
  'glam-metal': {
    context: '1980 年代美国 Glam／Hair Metal 把 Hard Rock 与 Heavy Metal 的吉他、Pop hook、洛杉矶现场和 MTV 时代的视觉包装结合。',
    traits: ['突出吉他独奏与副歌', '舞台和影像形象', 'Hard／Heavy 与 Pop 的商业交叉'],
    artists: [],
    boundary: '它受到 1970 年代 Glam Rock 的视觉影响，但两者的时代、场景和主要声音来源不同。',
    sourceArticles: [147, 143],
  },
  'speed-metal': {
    context: 'Speed Metal 从传统重金属和 NWOBHM 的速度强化中形成，与早期 Thrash、Power Metal 共享一些乐队和技术资源。',
    traits: ['快速鼓与吉他', '传统金属 riff 和独奏', '紧迫但仍重视旋律'],
    artists: ['Motörhead'],
    record: { artist: 'Motörhead', title: 'Ace of Spades', year: 1980, note: '听传统重金属、速度与 Punk 能量的交叉。' },
    boundary: '“快”不是充分分类标准；Thrash 与 Power 还在节奏、旋律和场景上走向不同。',
    sourceArticles: [115, 113],
  },
  'power-metal': {
    context: 'Power Metal 从传统 Heavy 与 Speed 路线分化，美国与欧洲场景对重量、速度、旋律和史诗叙事的侧重不同。',
    traits: ['高强度而旋律化的人声', '快速或有推进感的节奏', '史诗主题与双吉他资源'],
    artists: [],
    boundary: '美式和欧式路线不能压成一种固定音色；Symphonic Metal 也不是它的必然下一站。',
    sourceArticles: [112, 110],
  },
  'groove-metal': {
    context: 'Thrash 速度化之后，一些乐队把重心转向更低沉的音色、中速切分和身体性的 groove，形成 1990 年代的重要金属路线。',
    traits: ['中速与切分重音', '低沉厚重的 riff', '鼓与吉他的身体律动'],
    artists: ['Pantera'],
    record: { artist: 'Pantera', title: 'Vulgar Display of Power', year: 1992, note: '从切分和重量听见 Thrash 之后的变化。' },
    boundary: 'Groove 不是 Thrash 的“慢版”；它重新组织了节奏重点，也与其他 1990 年代金属场景交错。',
    sourceArticles: [130, 129],
  },
  'melodic-death-metal': {
    context: '瑞典 Gothenburg 等地的 Melodic Death 将 Death Metal 的极端音色与 NWOBHM／传统旋律金属的双吉他资源结合。',
    traits: ['低吼与高速节奏', '双吉他旋律', 'Death riff 与调性写作并存'],
    artists: ['At the Gates'],
    record: { artist: 'At the Gates', title: 'Slaughter of the Soul', year: 1995, note: '哥德堡路线及其对后续旋律金属核影响的锚点。' },
    boundary: '它不是 Brutal Death 的下一层；不同 Death 分支从共同主干引入了不同资源。',
    sourceArticles: [124],
  },
  'death-doom': {
    context: 'Death-Doom 把 Death Metal 的低沉音色和声线与 Doom 的缓慢重量结合，成为 1990 年代部分 Gothic Metal 场景的重要桥梁。',
    traits: ['慢速沉重 riff', '低吼和压抑氛围', '长篇动态'],
    artists: ['Paradise Lost', 'My Dying Bride', 'Anathema'],
    record: { artist: 'Paradise Lost', title: 'Gothic', year: 1991, note: '听 Death-Doom 如何向 Gothic Metal 的一条路线过渡。' },
    boundary: '它同时依赖 Death 与 Doom；不能只凭速度或女声判定其后续归属。',
    sourceArticles: [90, 89],
  },
  'funeral-doom': {
    context: 'Funeral Doom 在 Doom／Death-Doom 的慢速与哀悼氛围上进一步拉长时间感和空间感，1990 年代逐渐形成独立写法。',
    traits: ['极慢速度', '长篇与稀疏变化', '沉重而压抑的空间'],
    artists: [],
    boundary: '“慢”本身并不足以划出 Funeral Doom；长篇结构与情绪组织同样重要。',
    sourceArticles: [88],
  },
  'stoner-metal': {
    context: 'Stoner Rock／Metal 从 Doom、Psychedelic、Acid 与 Blues Rock 中汇合出 fuzz、重复和 groove，并与沙漠场景联系在一起。',
    traits: ['fuzz 吉他', '反复 groove', '迷幻与低速重量交错'],
    artists: [],
    boundary: '它不是 Doom 的简单改名；迷幻、蓝调与地方场景同样决定了其声音。',
    sourceArticles: [25],
  },
  'sludge-metal': {
    context: 'Sludge 把 Doom 的重量与 Hardcore／Noise 的粗粝和场景伦理结合，也成为部分 Post-Metal 长篇写作的来源。',
    traits: ['粗粝失真', '迟缓与爆发交替', 'Hardcore 式张力'],
    artists: ['Neurosis'],
    boundary: '不能把所有沉重、缓慢的金属都归入 Sludge；其 Hardcore 与噪音来源需要同时被看见。',
    sourceArticles: [1],
  },
  'ethereal-wave': {
    context: 'Ethereal Wave 从 Gothic／Post-Punk 周边的阴暗空间，走向更漂浮的人声、氛围和录音室层次。',
    traits: ['空灵人声', '宽阔的空间处理', '哥特与 Dream Pop 之间的氛围'],
    artists: ['Cocteau Twins', 'Dead Can Dance', 'This Mortal Coil'],
    boundary: '它与 Gothic Rock、Dream Pop 常有重叠，不应只按“女声”或朦胧效果判定。',
    sourceArticles: [81, 80],
  },
  darkwave: {
    context: 'Darkwave 是地域含义会变化的伞形标签，把 Post-Punk／Goth 的阴暗感与 New Wave、合成器和电子制作连接起来。',
    traits: ['低音与电子节奏', '阴暗空间感', '合成器与后朋克歌曲并置'],
    artists: [],
    boundary: '它不是 Industrial 或 Gothic Rock 的单一子类；各地场景对这个名称的用法不同。',
    sourceArticles: [81, 80],
  },
  blackgaze: {
    context: 'Blackgaze／Metalgaze 将 Black Metal 的极端音色与 Shoegaze、Post-Rock 的音墙、氛围和长篇动态结合。',
    traits: ['极端声线与密集吉他', '音墙与氛围段落', '强烈的动态转场'],
    artists: ['Alcest', 'Deafheaven'],
    record: { artist: 'Alcest', title: 'Écailles de lune', year: 2010, note: '听 Black Metal 与 Shoegaze／Post-Rock 如何交汇。' },
    boundary: '不是所有带混响的 Black Metal 都属于 Blackgaze，Shoegaze 也不是唯一来源。',
    sourceArticles: [74, 72],
  },
  'industrial-rock': {
    context: 'Industrial Rock 把工业音乐的电子、采样和机械节奏带进摇滚歌曲与巡演体系；它与更重 riff 的 Industrial Metal 有交叉。',
    traits: ['机械节奏和采样', '摇滚歌曲结构', '噪音与影像化表演'],
    artists: [],
    boundary: '工业音乐早于这一商业化交汇，不应被倒写成“有电子音色的金属”。',
    sourceArticles: [44, 43],
  },
  'crossover-thrash': {
    context: 'Crossover Thrash 是 Hardcore Punk 与 Thrash Metal 双向流动的场景：速度、riff、演出网络与听众都发生交叉。',
    traits: ['高速短歌与金属 riff', 'Hardcore 和 Thrash 的重音', '跨场景演出与发行'],
    artists: ['D.R.I.', 'Suicidal Tendencies', 'S.O.D.'],
    boundary: '它不是 Metalcore 的别名，亦不能把 Hardcore 对 Thrash 的影响写成单向继承。',
    sourceArticles: [67, 66],
  },
};
