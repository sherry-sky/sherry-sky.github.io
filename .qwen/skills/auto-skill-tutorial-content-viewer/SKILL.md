---
name: tutorial-content-viewer
description: Handle multiple Markdown formats for tutorial question cards in the content viewer system
source: auto-skill
extracted_at: '2026-06-14T00:55:28.376Z'
---

# Tutorial Content Viewer — 多格式题目卡片渲染

学习博客的内容查看器 (`js/content-viewer.js`) 支持两种 Markdown 题目格式，统一渲染为可折叠的题目卡片。

## 支持的格式

### 格式 A：HTML 注释标记（推荐）

用于 `tutorial-2.md` 等标准格式：

```markdown
<!-- QUESTION_START id="T2-1" -->
**T2-1.** 题目内容...
<!-- QUESTION_END -->

<!-- ANSWER_START for="T2-1" -->
**T2-1.** 详细解答...
<!-- ANSWER_END -->
```

### 格式 B：`<details>` 标签（简洁格式）

用于 `tutorial-1.md` 等快速编写场景：

```markdown
### 题目 1

**题目：** 求解下列不等式...

**(a)** $x(x - 4) \geq -2$

<details>
<summary>参考答案</summary>

**解：** 将不等式整理为标准形式...
</details>
```

## 处理流程

`viewerProcessCollapsible()` 函数按以下顺序检测格式：

1. **检查注释标记** — 如果 HTML 中包含 `QUESTION_START` 或 `ANSWER_START`，使用 `viewerProcessWithCommentMarkers()` 处理
2. **检查 `<details>` 块** — 如果存在 `<details>` 元素，使用 `viewerProcessDetailsBlocks()` 转换
3. **两者都没有** — 不做特殊处理，直接渲染原始 Markdown

## 关键函数

### `viewerProcessDetailsBlocks(contentElement)`

将 `<details>` 格式转换为题目卡片的步骤：

1. 查找所有 `<details>` 元素
2. 对每个 `<details>`：
   - 提取 `<summary>` 后的答案内容
   - 向前遍历兄弟节点，收集题目内容（直到遇到 `<hr>`、`<h3>` 或另一个 `<details>`）
   - 创建 `.viewer-collapsible-wrapper` 容器
   - 将题目内容移入 `.viewer-question-block`
   - 添加"查看答案"按钮（`.viewer-toggle-answer-btn`）
   - 创建隐藏的答案区域（`.viewer-answer-content`，初始 `display: none`）
   - 替换原有的 `<details>` 元素
3. 调用 MathJax 重新渲染公式

### 注意事项

- 题目变量声明用 `let markdown`（不是 `const`），因为后续需要替换图片路径
- 转换后必须调用 `MathJax.typesetPromise()` 重新渲染公式
- 事件委托通过 `document.addEventListener('click', ...)` 处理按钮点击

## CSS 样式

所有格式共享以下类名：

| 类名 | 用途 |
|------|------|
| `.viewer-collapsible-wrapper` | 题目卡片容器（圆角、阴影） |
| `.viewer-question-block` | 题目区域（渐变背景、左侧彩色边框） |
| `.viewer-toggle-answer-btn` | 查看答案按钮（渐变背景、hover 动画） |
| `.viewer-answer-content` | 答案区域（默认隐藏，`.show` 时展开） |
| `.viewer-background-knowledge-card` | 背景知识卡片 |
