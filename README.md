# FuckTheRocks

一个用 3D 专辑画廊进入摇滚历史、再通过时间线与流派分类探索其发展的中文网站。第一版已部署，当前继续完善内容与体验。

网站只有三个页面：`/` 首页、`/explore` 探索页和 `404` 错误页。现行产品与设计约束只维护在 [`docs/README.md`](./docs/README.md)；内容依据见 [`docs/materials/`](./docs/materials/README.md)。不要从旧讨论或代码现状反向推定产品范围。

## 本地运行

~~~sh
pnpm install
pnpm dev
~~~

检查与构建：

~~~sh
pnpm check
pnpm build
~~~

项目使用 Astro、TypeScript 和 Three.js，生成静态站点。Cloudflare Pages 的构建命令为 `pnpm build`，输出目录为 `dist`。

专辑封面在 `public/covers/`，选择与介绍在 `src/data/home-albums.json`，文件来源在 `public/covers/manifest.json`。探索内容在 `src/data/explore-*`；`docs/materials/` 保存资料母稿与来源，不在页面运行时加载。
