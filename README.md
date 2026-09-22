# FuckTheRocks

一个以三维专辑画廊建立品牌印象、用时间化关系网络讲述摇滚发展路线与类型关系的中文网站。

第一版只有三个页面：

- `/`：3D 专辑画廊首页；
- `/explore`：时间化摇滚关系网络；
- `/404`：基础错误页。

历史、分类、流派、乐队、专辑与搜索不再拆成独立栏目。它们统一进入探索页，并通过时间阅读、关系聚焦、页面内详情和搜索筛选呈现。

## 当前状态

产品范围、视觉方向和实现原则已经重新确认。旧版网站实现不再使用，工程将从空白页面骨架重新建立；`docs/` 与 `docs/materials/` 是当前事实来源。

## 计划技术栈

- Astro 6
- TypeScript
- Tailwind CSS 4
- Three.js：首页 3D 场景
- GSAP：首页滚动编排
- SVG + HTML：探索页关系网络与可访问内容
- 静态构建

## 文档

- [`docs/product.md`](./docs/product.md)：第一版产品范围
- [`docs/design.md`](./docs/design.md)：视觉与交互设计
- [`docs/implementation.md`](./docs/implementation.md)：实现方案
- [`docs/roadmap.md`](./docs/roadmap.md)：实施顺序
- [`docs/materials/`](./docs/materials/)：原始资料、内容母稿与来源

## 本地运行

工程重新建立后使用：

~~~sh
pnpm install
pnpm dev
~~~
