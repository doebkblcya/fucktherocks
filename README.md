# FuckTheRocks

一个以三维专辑画廊建立品牌印象、用时间化关系网络讲述摇滚发展路线与类型关系的中文网站。

第一版只有三个页面：

- `/`：3D 专辑画廊首页；
- `/explore`：时间化摇滚关系网络；
- `/404`：基础错误页。

历史、分类、流派、乐队、专辑与搜索不再拆成独立栏目。它们统一进入探索页，并通过时间阅读、关系聚焦、页面内详情和搜索筛选呈现。

## 当前状态

三个页面的可评审原型已经建立。首页从球体内部环视 30 张真实专辑封面；探索页已扩展为从根源到当代的 11 段时间链、95 个流派／场景／相邻传统条目及文字关系。内容资料仍在逐条核对，不能把这份主要谱系当作全球所有子流派的终极清单。`docs/` 与 `docs/materials/` 是产品和内容的事实来源。

## 技术栈

- Astro 6
- TypeScript
- Tailwind CSS 4
- Three.js：首页 3D 场景
- GSAP：首页滚动编排
- HTML：探索页时间链、分类索引与文字关系
- 静态构建

## 文档

- [`docs/product.md`](./docs/product.md)：第一版产品范围
- [`docs/design.md`](./docs/design.md)：视觉与交互设计
- [`docs/implementation.md`](./docs/implementation.md)：实现方案
- [`docs/roadmap.md`](./docs/roadmap.md)：实施顺序
- [`docs/album-covers.md`](./docs/album-covers.md)：首页专辑选择与封面来源
- [`docs/materials/`](./docs/materials/)：原始资料、内容母稿与来源

## 本地运行

本地运行：

~~~sh
pnpm install
pnpm dev
~~~

封面保存在项目的 `public/covers/` 并纳入 Git，静态构建会将它们复制到 `dist/covers/`。`pnpm covers` 只在需要补抓缺失文件时运行。来源记录在 `public/covers/manifest.json`。

部署到 Cloudflare Pages 时连接 Git 仓库，构建命令设为 `pnpm build`，输出目录设为 `dist`。首页先加载当前封面，再限量加载视野附近的封面；不需要另外配置 R2。
