# FuckTheRocks — 设计规范（Design System）

> 视觉方向的唯一事实来源，M0 起所有前端实现据此落地。方法论遵循 `frontend-design` skill，风格参考 `editorial`（杂志排版）与 `paper`（纸张质感）skill。

## 1. Context and goals（上下文与目标）

- **风格定位**：复古黑胶车库风（Vintage Vinyl）—— 奶油纸底 + 粗衬线 + 砖红/焦糖暖色 + 轻做旧；
- **受众**：摇滚乐迷（入门到资深），偏知识/档案阅读场景；
- **页面唯一任务**：让用户高效地在"发展史 / 分类学 / 乐队 / 专辑"之间交叉浏览与检索；
- **设计意图一句话**：把摇滚最标志性的物理载体——黑胶唱片——变成全站可识别的视觉锚点，让站点读起来像一本"懂摇滚的地下杂志"，而非通用模板。

## 2. 关键风险与破局（签名元素）

> ⚠️ `frontend-design` skill 明确警告：AI 生成的模板化外观之一正是"奶油纸底 + 高对比衬线 + 陶土色"，几乎命中我们的方向。遵循用户 brief 的同时，必须靠**一个扎根主题的签名元素**把它和模板区分开。

**签名元素：黑胶唱片标签系统（Record Label System）**

- 首页 hero：一张黑胶唱片（CSS/SVG 绘制）作为核心视觉，唱片中心标签（center label）承载当前精选内容，纹路作背景纹理；
- 分类学流派页：流派节点用"唱片中心标签"样式呈现（圆形标签：流派名 + 起源年代）；
- 发展史时间线：用"唱片纹路"作为年代刻度/进度装饰。

约束：**大胆只花在这一处**。签名元素之外的排版、间距、组件保持安静克制（`frontend-design` 的"Spend your boldness in one place"）。

## 3. Design tokens and foundations（设计 token）

### 3.1 配色（语义 token）

| Token | 色值 | 用途 |
| --- | --- | --- |
| `--surface` | `#F5EFE0` | 页面奶油纸底 |
| `--surface-alt` | `#EFE6D0` | 卡片/区块底（更深一档纸色） |
| `--ink` | `#1A1A1A` | 主文字（炭黑） |
| `--ink-muted` | `#5C5548` | 次级文字（暖灰棕） |
| `--accent` | `#C0392B` | 强调：链接、主按钮、焦点态（砖红） |
| `--accent-strong` | `#A93226` | 强调悬停/按下态 |
| `--warm` | `#8B5E3C` | 次级强调（焦糖棕）：年代、标签 |
| `--gold` | `#C9A227` | 点缀（暗金）：徽标、装饰 |
| `--line` | `#D8CDB4` | 分割线、边框（暖灰） |

> 规则：组件**必须**引用语义 token，禁止散落裸色值。暗金 `--gold` 仅用于徽标级点缀，克制使用。

### 3.2 字体

| 角色 | 字体 | 说明 |
| --- | --- | --- |
| Display（标题） | 粗衬线 Slab Serif（Rockwell / Playfair Display） | 承载气质，克制使用，只用于标题 |
| Body（正文） | 高可读无衬线（Source Sans 3 / Inter） | 长文阅读主体 |
| 专名（乐队/专辑/流派原文） | 衬线斜体（如 Playfair Display Italic） | 视觉区分"原文专名"，呼应黑胶/杂志引文 |

**字号 scale**：14 / 16 / 18 / 24 / 32 / 40（对应 caption / body / lead / h3 / h2 / h1）。
**间距**：8pt 基线网格（4 / 8 / 12 / 16 / 24 / 32 / 48）。

### 3.3 质感与做旧

- **轻做旧**：纸张纹理（subtle noise/grain）+ 轻微边缘泛旧，**不影响文字对比度与可读性**；
- 黑胶纹理元素仅用于签名元素（hero 唱片、纹路装饰），不铺满全站。

### 3.4 图片

- **保留原图彩色**（不强制黑白/降饱和）；
- 统一处理：复古相框式边框（`--line` 色 1px 内框 + 奶油纸外衬），保持视觉一致。

## 4. Component-level rules（组件规则）

> 通用：组件需定义 `default / hover / focus-visible / active / disabled` 状态（交互类）与 `empty / loading / error` 状态（数据类）。

- **导航**：顶部横向主导航（发展史 / 分类学 / 乐队 / 专辑 / 搜索），当前页用 `--accent` 下划线标识，不跳色；
- **链接**：`--accent` 色 + 下划线（hover 加深为 `--accent-strong`），正文内链接不改变字号；
- **按钮**：主按钮 `--accent` 实底白字，次按钮描边透明底；圆角克制（≤ 6px）；
- **卡片**（乐队/专辑条目）：`--surface-alt` 底 + `--line` 描边，封面图片统一相框处理；
- **标签**（流派/年代）：`--warm` 描边胶囊，专名保留原文；
- **时间线**：发展史用唱片纹路刻度，事件点用 `--accent`；
- **搜索框**：奶油纸底 + `--line` 描边，聚焦态 `--accent` 描边。

## 5. Accessibility requirements（可访问性，测试可执行）

- 满足 **WCAG 2.2 AA**：正文对比度 ≥ 4.5:1，大字号 ≥ 3:1（`--ink` on `--surface` 需达标）；
- 键盘优先：全站可 Tab 导航，`focus-visible` 用 `--accent` 显式焦点环；
- 语义 HTML 优先于 ARIA；图片 `alt` 必填（乐队照/封面描述）；
- 触控目标 ≥ 44px；支持 `prefers-reduced-motion`（签名元素的转动动效须降级为静态）；
- 做旧纹理不得降低文字对比度（纹理层须位于内容之下且不遮挡）。

## 6. Content and tone（内容与语调）

- 站点 UI 文案：简体中文，简洁、直接、低行话；按钮动词明确（如"搜索"而非"提交"）；
- 专名（乐队/专辑/流派）保留原文；中文译名与原文并置时，原文用衬线斜体区分；
- 空状态是引导而非情绪：如"该流派暂无代表专辑"。

## 7. Anti-patterns（反模式，禁止实现）

- ❌ 奶油纸底上直接堆大段高饱和彩色，破坏复古统一感；
- ❌ 过度使用暗金 `--gold`（点缀降级为噪音）；
- ❌ 为"复古"牺牲可读性：低对比文字、重度噪点压正文；
- ❌ 签名元素（黑胶唱片）滥用：在非 hero 页面反复出现导致视觉疲劳；
- ❌ 圆角过大、毛玻璃、霓虹渐变等与复古车库风冲突的现代特效。

## 8. QA checklist（代码评审可执行）

- [ ] 所有颜色走语义 token，无散落裸色值；
- [ ] 字体角色（Display/Body/专名）使用正确，字号在 scale 内；
- [ ] 交互组件状态齐全（hover/focus/active/disabled），焦点环可见；
- [ ] 对比度 WCAG AA 达标（可用工具实测）；
- [ ] 图片有 alt，做旧纹理不遮挡内容；
- [ ] 响应式：移动端（含 hero 黑胶唱片）正常降级；
- [ ] 签名元素克制：仅 hero 与流派/时间线克制呼应，无滥用。

## 9. 参考资源

三个设计 skill 已固化为**项目级 skill**（位于 `.agents/skills/`），随仓库分发，Codex 会从当前目录向上扫描仓库根的 `.agents/skills` 自动发现，团队任何成员 clone 后即自动获得，无需各自手动安装：

- `frontend-design` skill（方法论）：`.agents/skills/frontend-design/SKILL.md`
- `editorial` skill（排版）：`.agents/skills/editorial/SKILL.md`
- `paper` skill（纸张质感）：`.agents/skills/paper/SKILL.md`

> 约定：设计相关 skill 统一放项目级 `.agents/skills/`（而非全局 `~/.agents/skills/`），保证团队环境一致、版本可控。
