# QWEN.md — 项目协作规范

## 项目概述

基于 GitHub Pages 的静态学习博客。**纯前端 HTML + CSS + JavaScript**，无框架、无构建工具。
内容通过 `marked.js` 渲染 Markdown，数学公式通过 MathJax 渲染 LaTeX。

## 核心规则

1. **Agent Skills 保护** — 默认不修改 `.agents/skills/`，除非用户明确要求
2. **文件备份** — 修改重要配置文件前先备份
3. **遵循现有风格** — 新增代码与现有风格一致
4. **优先复用** — 优先使用已有组件和工具函数
5. **无构建依赖** — 不引入 npm/webpack 等构建工具
6. **中文引号** — 使用 "" ''，不使用 "" ''
7. **中英文混排** — 中英文之间加空格，专业术语首次保留英文

## 技术约定

- CSS 变量定义在 `:root`，主色 `--primary-color: #1e40af`，断点 `768px`
- 页面必须包含 `#navbar-container` 和 `#footer-container`
- 组件通过 `js/components.js` 的 `loadComponent()` 加载
- LaTeX：`$...$` 行内，`$$...$$` 块级，多行用 `aligned` 环境

## 文件命名

| 类型 | 格式 | 示例 |
|------|------|------|
| 笔记 | `notes-{N}.md` | `notes-1.md` |
| 习题 | `tutorial-{N}.md` | `tutorial-2.md` |
| 作业 | `homework{N}.md` | `homework2.md` |
| 题目 ID | `T{章}-{号}` / `H{章}-{号}` | `T2-1`, `H3-2` |

## 内容标记系统

| 标记 | 用途 |
|------|------|
| `<!-- BACKGROUND_START -->` / `END` | 背景知识点 |
| `<!-- QUESTION_START id="T2-1" -->` / `END` | 题目 |
| `<!-- ANSWER_START for="T2-1" -->` / `END` | 答案 |
| `<!-- PDF_LINKS_START -->` / `END` | 原始 PDF 链接 |

## 详细指南

- Agent 集群定义与协作流程 → [AGENTS.md](AGENTS.md)
- 内容生产模板与标准 → [AGENTS.md](AGENTS.md) 内容生产集群章节

## 本地预览

```bash
python3 -m http.server 8000
```
