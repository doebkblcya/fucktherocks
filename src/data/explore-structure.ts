// Editorial navigation, not a claim that each genre has one parent.
export const families = [
  {
    id: 'roots', number: '01', title: '根源与早期摇滚',
    groups: [
      { id: 'roots-sources', title: '摇滚的多条根源', note: '蓝调、福音、乡村、爵士与城市节奏蓝调并行汇流。', genres: ['folk-traditions', 'blues', 'gospel', 'country', 'jazz', 'r-and-b'] },
      { id: 'roots-early', title: '早期摇滚与流行支线', note: '从 Rock ’n’ Roll 到人声、冲浪与流行写作。', genres: ['soul', 'rock-and-roll', 'rockabilly', 'doo-wop', 'surf-rock', 'pop-rock'] },
      { id: 'roots-adjacent', title: '持续交汇的相邻传统', note: '并非摇滚子流派，却长期影响它的节奏、音色与制作。', genres: ['funk', 'electronic', 'ambient', 'hip-hop'] },
    ],
  },
  {
    id: 'expansion', number: '02', title: '摇滚的扩张',
    groups: [
      { id: 'expansion-songs', title: '民谣、蓝调与地域声音', note: '歌曲写作、蓝调吉他与地方传统进入乐队编制。', genres: ['british-beat', 'folk-rock', 'country-rock', 'southern-rock', 'blues-rock'] },
      { id: 'expansion-experiment', title: '迷幻与实验', note: '从车库现场到效果器、录音室实验和长篇结构。', genres: ['garage-rock', 'psychedelic-rock', 'acid-rock', 'experimental-rock', 'art-rock', 'progressive-rock', 'jazz-rock', 'krautrock'] },
      { id: 'expansion-direct', title: '音量、舞台与旋律', note: '重 riff、舞台形象和简洁有力的旋律写作。', genres: ['hard-rock', 'glam-rock', 'power-pop'] },
    ],
  },
  {
    id: 'alternative', number: '03', title: '朋克与另类',
    groups: [
      { id: 'alternative-punk', title: '朋克与硬核', note: '直接、快速的表达继续分化为后朋克、硬核与 Emo。', genres: ['proto-punk', 'punk-rock', 'new-wave', 'post-punk', 'hardcore-punk', 'post-hardcore', 'emo'] },
      { id: 'alternative-dark', title: '哥特与暗色声音', note: '后朋克附近的低音驱动、空间感与阴暗音色。', genres: ['gothic-rock', 'ethereal-wave', 'darkwave'] },
      { id: 'alternative-texture', title: '噪音与梦幻音墙', note: '失真、反馈、模糊人声与层叠吉他。', genres: ['noise-rock', 'noise-pop', 'dream-pop', 'shoegaze'] },
      { id: 'alternative-indie', title: '另类与独立网络', note: '独立发行和地域场景逐渐形成更广的市场标签。', genres: ['alternative-rock', 'indie-rock', 'madchester', 'grunge', 'post-grunge', 'britpop'] },
      { id: 'alternative-later', title: '实验、延伸与复兴', note: '工业、后摇、数学摇滚以及旧声音的新一轮演绎。', genres: ['industrial', 'industrial-rock', 'post-rock', 'math-rock', 'garage-rock-revival', 'post-punk-revival', 'emo-pop'] },
    ],
  },
  {
    id: 'metal', number: '04', title: '金属及其分支',
    groups: [
      { id: 'metal-traditional', title: '传统、速度与旋律', note: '重 riff、双吉他与更快或更旋律化的写作。', genres: ['heavy-metal', 'traditional-heavy-metal', 'nwobhm', 'glam-metal', 'speed-metal', 'power-metal', 'progressive-metal'] },
      { id: 'metal-doom', title: '厄运与重量', note: '缓慢、低沉和厚重音色继续分出迷幻、污泥与死亡厄运。', genres: ['doom-metal', 'stoner-metal', 'sludge-metal', 'death-doom', 'funeral-doom', 'gothic-metal'] },
      { id: 'metal-extreme', title: '激流、死亡与黑金属', note: '速度、复杂 riff、极端声线和地域场景的不同发展。', genres: ['thrash-metal', 'groove-metal', 'death-metal', 'melodic-death-metal', 'brutal-death-metal', 'technical-death-metal', 'black-metal-first-wave', 'black-metal-second-wave'] },
      { id: 'metal-folk', title: '民谣与交响方向', note: '传统旋律、地域主题或交响编配进入金属。', genres: ['folk-metal', 'viking-metal', 'symphonic-metal'] },
      { id: 'metal-core', title: '硬核交汇', note: 'Hardcore 与 Thrash、Death Metal 的不同交叉。', genres: ['crossover-thrash', 'grindcore', 'metalcore', 'melodic-metalcore', 'deathcore'] },
      { id: 'metal-hybrid', title: '另类与跨界金属', note: '放克、Hip-Hop、工业、后摇和盯鞋等资源进入重型声音。', genres: ['alternative-metal', 'rap-metal', 'funk-metal', 'nu-metal', 'industrial-metal', 'post-metal', 'blackgaze'] },
    ],
  },
] as const;

// The source era list highlights selected names. These additions place the
// remaining index entries at their approximate first formation period.
export const additionalFirstEras: Record<string, string> = {
  'pop-rock': 'bands-and-atlantic',
  funk: 'rock-expands',
  electronic: 'roots-before-rock',
  ambient: 'album-era',
  'hip-hop': 'punk-reset',
  'country-rock': 'rock-expands',
  'acid-rock': 'rock-expands',
  'art-rock': 'rock-expands',
  'power-pop': 'album-era',
  'post-hardcore': 'extreme-and-alternative',
  'ethereal-wave': 'underground-systems',
  darkwave: 'underground-systems',
  'noise-pop': 'extreme-and-alternative',
  'dream-pop': 'underground-systems',
  madchester: 'extreme-and-alternative',
  'math-rock': 'extreme-and-alternative',
  'traditional-heavy-metal': 'album-era',
  'glam-metal': 'underground-systems',
  'stoner-metal': 'extreme-and-alternative',
  'sludge-metal': 'extreme-and-alternative',
  'speed-metal': 'punk-reset',
  'groove-metal': 'extreme-and-alternative',
  'brutal-death-metal': 'extreme-and-alternative',
  'technical-death-metal': 'extreme-and-alternative',
  'black-metal-first-wave': 'underground-systems',
  'folk-metal': 'alternative-breakthrough',
  'viking-metal': 'extreme-and-alternative',
  'death-doom': 'extreme-and-alternative',
  'funeral-doom': 'alternative-breakthrough',
  'symphonic-metal': 'alternative-breakthrough',
  'crossover-thrash': 'extreme-and-alternative',
  grindcore: 'extreme-and-alternative',
  'alternative-metal': 'extreme-and-alternative',
  'rap-metal': 'extreme-and-alternative',
  'funk-metal': 'extreme-and-alternative',
  'industrial-metal': 'extreme-and-alternative',
};

export const firstEraOverrides: Record<string, string> = {
  'proto-punk': 'album-era',
  'post-rock': 'alternative-breakthrough',
};
