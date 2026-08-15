# FuckTheRocks — 技术实现

> 从 `requirements.md` 的数据字段落地为可执行的技术方案。核心：Astro 静态站 + Content Collections + MusicBrainz 导入管线 + Pagefind 检索。

## 1. 技术选型

| 层 | 选型 | 理由 |
| --- | --- | --- |
| 框架 | Astro（4/5） | 内容优先，Markdown/MDX 原生，静态输出快，岛屿式按需交互 |
| 语言 | TypeScript | Content Collections schema 强校验 + 类型推导 |
| 内容 | Markdown/MDX + frontmatter | 结构化字段与叙事分离，易维护 |
| 内容管理 | Astro Content Collections（zod） | 内容校验、类型安全、关系引用 |
| 样式 | Tailwind CSS | 快速主题化，暗色友好 |
| 搜索 | Pagefind | 构建时生成索引，纯静态、零后端 |
| 部署 | 静态托管 + 自定义域名 `fuckthe.rocks` | GitHub Pages / Cloudflare Pages 等 |

## 2. 项目结构（草案）

```
fucktherocks/
├─ astro.config.mjs
├─ package.json
├─ src/
│  ├─ content/                  # Content Collections
│  │  ├─ genres/                # 流派（分类学）
│  │  ├─ artists/               # 乐队/艺术家
│  │  ├─ albums/                # 专辑
│  │  └─ eras/                  # 年代/事件（时间线）
│  ├─ content.config.ts         # zod schema 定义
│  ├─ pages/                    # 路由
│  │  ├─ index.astro            # 首页
│  │  ├─ history/               # 发展史
│  │  ├─ taxonomy/              # 分类学
│  │  ├─ artists/[slug].astro   # 乐队页
│  │  ├─ albums/[slug].astro    # 专辑页
│  │  └─ genres/[slug].astro    # 流派页
│  ├─ layouts/
│  └─ components/
├─ scripts/                     # 导入/工具脚本
│  └─ import-musicbrainz.ts
└─ public/
```

## 3. Content Collections Schema（zod 草案）

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const genres = defineCollection({
  type: 'content',
  schema: z.object({
    name_zh: z.string(),
    name_en: z.string(),
    aliases: z.array(z.string()).default([]),
    summary: z.string(),
    origin_decade: z.string().optional(),      // "1980s"
    origin_place: z.string().optional(),
    parent_genres: z.array(z.string()).default([]),   // 多父，网状
    fusion_sources: z.array(z.string()).default([]),  // 融合来源
    representative_artists: z.array(z.string()).default([]),
    representative_albums: z.array(z.string()).default([]),
  }),
});

const artists = defineCollection({
  type: 'content',
  schema: z.object({
    name_en: z.string(),
    name_zh: z.string().optional(),
    aka: z.array(z.string()).default([]),
    formed_year: z.number().optional(),
    disbanded_year: z.number().nullable().optional(),
    origin: z.string().optional(),
    members: z.array(z.string()).default([]),
    genres: z.array(z.string()).default([]),   // 关联 Genre slug
  }),
});

const albums = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artist: z.string(),          // Artist slug
    release_year: z.number().optional(),
    label: z.string().optional(),
    genres: z.array(z.string()).default([]),
    milestone: z.boolean().default(false),
    tracks: z.array(z.object({
      title: z.string(),
      duration: z.number().nullable().optional(),
      position: z.number().optional(),
    })).default([]),
  }),
});

const eras = defineCollection({
  type: 'content',
  schema: z.object({
    decade: z.string(),           // "1960s"
    title: z.string(),
    date: z.string().optional(),
    related_genres: z.array(z.string()).default([]),
    related_artists: z.array(z.string()).default([]),
    related_albums: z.array(z.string()).default([]),
  }),
});

export const collections = { genres, artists, albums, eras };
```

> 关联关系用 slug 字符串数组表达（多对多），渲染时在页面里查表 resolve。MVP 阶段避免引入数据库，跨引用由构建期 join 完成。

## 4. MusicBrainz 导入管线

### 4.1 目标

从 MusicBrainz 拉取乐队 / 专辑 / 曲目 / 厂牌等结构化数据，生成 `src/content/` 下的 Markdown 文件（frontmatter + 占位正文），叙事字段留空待人工补写。

### 4.2 接口要点

- 端点：`https://musicbrainz.org/ws/2/`
- 许可：CC0（可自由使用）
- 限速：未认证 1 req/s；需在脚本内节流（sleep ≥ 1s / 请求）；
- 主要查询：`artist`（lookup/release-group）、`release-group`、`release`（含 `recordings`）、`label`；
- 风格标签：MusicBrainz 的 genre/tag 体系与站点分类学不完全一致，导入后需映射到自有 Genre slug。

### 4.3 流程

1. **种子清单**：维护一份待导入乐队 slug 列表（人工维护，优先里程碑乐队）；
2. **拉取**：脚本遍历种子 → 查 artist → 拉 release-groups → 拉 release 详情（曲目/厂牌/年份）；
3. **清洗/映射**：风格标签 → 自有流派 slug；补中文译名占位；
4. **生成**：写 `artists/<slug>.md`、`albums/<slug>.md`（frontmatter 结构化 + 空正文待人工）；
5. **人工补写**：叙事正文、流派定义、中文译名、里程碑判定。

### 4.4 脚本形态

- Node.js/TypeScript 脚本（与 Astro 同栈），`scripts/import-musicbrainz.ts`；
- 幂等：重复运行可刷新数据而不破坏已人工撰写的正文（仅更新结构化 frontmatter，或 diff 提示）。

## 5. 分类学网状结构渲染

- **MVP**：流派页直接展示「父流派 / 衍生子流派 / 融合来源」三段列表 + 关联乐队/专辑，不强制画图；
- **图谱可视化（后续）**：用 D3/cytoscape 在 `/taxonomy` 页渲染流派有向图（节点=流派，边=父子/融合），支持缩放与点击跳转。作为渐进增强，不阻塞 MVP。

## 6. 检索（Pagefind）

- 构建后运行 `pagefind --site dist` 生成索引；
- 搜索框前端接 Pagefind UI，结果跨 genres/artists/albums/eras；
- 纯静态，无后端；索引随每次构建刷新。

## 7. 部署方案

- **静态输出**：`astro build` 产出 `dist/`；
- **托管**：GitHub Pages（与仓库同源，免费）或 Cloudflare Pages（自定义域名配置更灵活）；
- **域名**：`fuckthe.rocks` 作为自定义域名 CNAME 指向托管平台；
- **CI**：GitHub Actions 在 push 到 `main` 时自动 `build + 部署`，并跑 Pagefind 索引。

## 8. 关键决策与待定项

| 项 | 现状 | 备注 |
| --- | --- | --- |
| 内容存储 | Markdown frontmatter | MVP 足够；量大后可迁 JSON/内容层 API |
| 图谱可视化 | MVP 不画图，仅列表 | 后续渐进增强 |
| 图片 | 专辑封面/乐队照 | 版权需甄别，MVP 用 MusicBrainz/Cover Art Archive 或占位 |
| 托管平台 | 待定（GH Pages / Cloudflare Pages） | 与域名解析一起定 |
