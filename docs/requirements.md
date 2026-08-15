# FuckTheRocks — 需求分析

> 从 `product.md` 派生。定义功能需求、内容数据字段与非功能约束，供 `tech-design.md` 落地实现。

## 1. 概述

- **形态**：静态站（Astro），纯只读，无用户系统、无后端登录态；
- **数据**：结构化数据（MusicBrainz 导入）+ 叙事内容（人工撰写，Markdown/MDX）；
- **语言**：中文为主，专名保留原文。

## 2. 功能需求

### 2.1 首页（Home）

- 门户入口，提供三大内容区的导航；
- 精选展示：年代导航、流派速览、代表专辑；
- 提供全局搜索入口。

### 2.2 发展史（History）

- 以年代为轴的时间线视图（50s → 当代）；
- 每个年代/事件节点：标题、时间、描述、关联流派/乐队/专辑；
- 支持点击跳转到关联词条。

### 2.3 分类学（Taxonomy）

- 流派网状图谱的概览/导航（表达父子 + 融合关系）；
- 流派词条页：定义、起源年代/地点、父流派、衍生子流派、融合来源、代表乐队/专辑、正文；
- 支持从流派页反查：哪些乐队/专辑打上了该流派标签。

### 2.4 乐队/艺术家词条（Artists）

- 字段：原文名、中文译名、别名、成立/解散年份、起源地、成员、流派标签、专辑列表、简介；
- 展示该乐队的专辑列表与流派归属，支持跳转。

### 2.5 专辑词条（Albums）

- 字段：专辑名、乐队、发行年份、厂牌、流派标签、曲目列表、封面、点评；
- 展示曲目列表（并入专辑页，不做独立曲目页）。

### 2.6 检索（Search）

- Pagefind 站内全文/标签检索；
- 检索范围：乐队、专辑、流派、年代；
- 结果可点击跳转到对应词条。

## 3. 内容数据字段（内容模型）

> 字段为内容层的定义；实现层映射见 `tech-design.md`。

### 3.1 流派 Genre

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| slug | string | 唯一标识（如 `grindcore`） |
| name_zh | string | 中文名（如 碾核） |
| name_en | string | 原文名（如 Grindcore） |
| aliases | string[] | 别名 |
| summary | string | 一句话简介 |
| definition | string | 定义（中文长文） |
| origin_decade | string | 起源年代（如 `1980s`） |
| origin_place | string | 起源地 |
| parent_genres | string[] | 父流派（多父，网状） |
| fusion_sources | string[] | 融合来源（明确标注的融合流派） |
| representative_artists | string[] | 代表乐队（关联 slug） |
| representative_albums | string[] | 代表专辑（关联 slug） |
| body | string | 正文（MDX） |

### 3.2 乐队/艺术家 Artist

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| slug | string | 唯一标识 |
| name_en | string | 原文名 |
| name_zh | string | 中文译名 |
| aka | string[] | 别名 |
| formed_year | number | 成立年份 |
| disbanded_year | number \| null | 解散年份（null = 活跃） |
| origin | string | 起源地 |
| members | array | 成员（可含时期信息） |
| genres | string[] | 流派标签（关联 Genre slug） |
| bio | string | 简介（人工叙事） |

### 3.3 专辑 Album

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| slug | string | 唯一标识 |
| title | string | 专辑名（原文） |
| artist | string | 关联乐队（Artist slug） |
| release_year | number | 发行年份 |
| label | string | 厂牌 |
| genres | string[] | 流派标签（关联 Genre slug） |
| tracks | Track[] | 曲目列表 |
| milestone | boolean | 是否为摇滚史里程碑 |
| review | string | 点评（人工叙事） |

### 3.4 曲目 Track（并入专辑）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| title | string | 曲名 |
| duration | number \| null | 时长（秒） |
| position | number | 曲序 |

### 3.5 年代/事件 Era（发展史时间线）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| slug | string | 唯一标识 |
| decade | string | 年代（如 `1960s`） |
| title | string | 事件标题 |
| date | string | 时间（可宽泛，如 `1967`） |
| description | string | 描述 |
| related_genres | string[] | 关联流派 |
| related_artists | string[] | 关联乐队 |
| related_albums | string[] | 关联专辑 |

## 4. 非功能需求

### 4.1 性能

- 静态输出，首屏加载快；图片懒加载、响应式；
- 构建时间可控（随内容量增长，需关注 Pagefind 索引与图片处理耗时）。

### 4.2 可访问性（a11y）

- 语义化 HTML；图片 alt；键盘可导航；色彩对比达标。

### 4.3 SEO

- 每页独立标题/描述；Open Graph；sitemap；语义化 URL（slug）。

### 4.4 可维护性

- 内容以 Markdown/MDX + frontmatter 管理，结构化字段（乐队/专辑/流派）与叙事分离；
- 分类学关系以数据（而非硬编码导航）表达，新增流派/乐队/专辑只需加内容文件。

### 4.5 国际化字段

- 内容字段中英双列（name_zh / name_en），站点 UI 中文，专名展示保留原文。

## 5. 页面用例（关键路径）

1. **系统了解摇滚史**：首页 → 发展史 → 按年代浏览 → 点击事件关联的流派/专辑；
2. **按流派探索**：首页 → 分类学 → 流派树/图谱 → 流派词条 → 代表乐队/专辑；
3. **查某乐队/专辑**：搜索框输入 → 结果跳转词条 → 沿流派/年代关联继续浏览；
4. **交叉检索**：从流派页反查所有打该标签的乐队/专辑；从专辑页看流派与年代归属。
