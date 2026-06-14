# AGENTS.md — Agent 集群配置

本项目采用多 Agent 协作模式，分为**工程基建**和**内容生产**两大集群。

---

## 集群总览

**🔧 工程基建集群** — 负责网站技术架构

| Agent | 角色 | 职责 |
|-------|------|------|
| 🖥️ Frontend Engineer | 前端工程师 | HTML 页面、JS 交互、组件系统 |
| 🎨 Style Designer | 样式设计师 | CSS 样式、响应式布局、视觉设计 |
| 🏗️ Course Builder | 课程建造师 | 课程目录结构创建、模板管理 |
| 🚀 Deploy Manager | 部署管理员 | Git 操作、GitHub Pages 部署 |

**📚 内容生产集群** — 负责从 PDF 到发布内容的全链路

| Agent | 角色 | 职责 |
|-------|------|------|
| 📄 PDF→Notes Converter | PDF 转笔记 | 课件 PDF → 结构化 Markdown 笔记 |
| ✍️ Answer Generator | 答案生成器 | 题目/答案 PDF → 详细分步解答 |
| 🧠 Knowledge Organizer | 知识整理师 | 知识点提取、题目映射、考点标注 |
| 🎨 Polisher | 内容润色师 | AI 初稿润色、格式规范、计算校验 |
| 🖼️ Image Extractor | 图片提取师 | PDF 图片提取、目录组织、引用插入 |
| 🔍 Quality Inspector | 质量检查员 | 格式校验、公式验证、链接检查 |

---

# 一、🔧 工程基建集群

---

## 🖥️ Frontend Engineer（前端工程师）

**管辖范围：**
- `components/*.html` — 可复用 HTML 组件
- `js/*.js` — 所有 JavaScript 文件
- 各课程的 `*.html` 页面文件

**工作规范：**
- 不引入任何前端框架或构建工具
- 新页面必须包含 `#navbar-container` 和 `#footer-container`
- 通过 `loadComponent()` 加载公共组件
- JS 函数使用 camelCase 命名
- 新功能优先封装为可复用函数

---

## 🎨 Style Designer（样式设计师）

**管辖范围：**
- `css/style.css` — 全局样式文件（唯一）

**工作规范：**
- 颜色使用 CSS 变量，不硬编码
- 移动端优先，断点 `768px`
- 动画效果保持简洁，不影响性能

---

## 🏗️ Course Builder（课程建造师）

**管辖范围：**
- `courses/` 目录结构
- `.agents/skills/course-template/` — 课程模板 skill

**工作流程：**
1. 使用 `course-template` skill 生成课程目录结构
2. 创建 6 个标准 HTML 页面（index, lectures, notes, tutorials, homework, exams）
3. 更新 `index.html` 首页课程卡片
4. 更新 `components/navbar.html` 导航栏
5. 更新 `js/main.js` 课程配置

**命名规范：** 课程目录使用 kebab-case（如 `analytical-chemistry/`）

---

## 🚀 Deploy Manager（部署管理员）

**管辖范围：** Git 提交、分支管理、GitHub Pages 部署

**提交规范：** `类型: 描述`

| 类型 | 说明 | 示例 |
|------|------|------|
| `新增` | 新内容或新功能 | `新增: 分析化学第5章笔记` |
| `更新` | 修改已有内容 | `更新: 导航栏添加新课程` |
| `修复` | 修复 Bug | `修复: 数学公式渲染错误` |
| `优化` | 性能或体验优化 | `优化: 移动端样式适配` |

---

# 二、📚 内容生产集群

---

## 📄 PDF→Notes Converter（PDF 转笔记）

**输入：** `Lectures-PDF/*.pdf`
**输出：** `notes/notes-N.md`

**工作流程：**
1. 读取 PDF，提取文字、表格、公式
2. 构建 Markdown 结构：标题 → 原始文件引用 → 课程框架表 → 正文 → Summary
3. 格式化 LaTeX 公式（`$...$` 行内，`$$...$$` 块级）
4. 转换 PDF 中的表格为 Markdown 表格
5. 每章末尾添加要点总结

**输出模板：**
```markdown
# Lecture N: 标题

> 📄 原始文件：XL-xxx.pdf

---

（课程框架表，当前章节加粗）

## 正文内容
### X.X 小节标题
...

## Summary
- 要点1
- 要点2

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*
```

**质量要求：** 公式可被 MathJax 渲染 · 表格对齐可读 · 专业术语保留英文

---

## ✍️ Answer Generator（答案生成器）

**输入：** `Tutorials-PDF/*.pdf`、`HW-PDF/*.pdf`、`Exam-PDF/*.pdf`
**输出：** `tutorials/tutorial-N.md`、`homeworks/homeworkN.md`、`exams/*.md`

**工作流程：**
1. **题目识别** — 从 PDF 转录题目，分配唯一 ID
2. **知识点提取** — 分析涉及的概念/公式，写入 BACKGROUND 区域
3. **答案生成** — 参考原始答案，生成分步解答（思路 → 推导 → 结果 → 总结）
4. **结构化标记** — 用 HTML 注释划分 QUESTION / ANSWER / PDF_LINKS 区域

**答案标准：**
- 每步推导有文字说明，不跳步
- 公式使用 `aligned` 环境对齐
- 单位计算完整，有效数字正确
- 每道题末尾有总结段落，归纳核心方法

**输出模板：**
```markdown
# Tutorial N - 习题解答

> 📚 课程名 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **概念A**: 定义...
- **公式B**: $formula$...
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T{N}-1" -->
**T{N}-1.** 题目内容...
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T{N}-1" -->
**T{N}-1.** 详细解答...

**总结：** 解题方法归纳...
<!-- ANSWER_END -->

---

<!-- PDF_LINKS_START -->
## 📎 原始 PDF 文件
- **题目 PDF**: [xxx.pdf](Tutorials-PDF/xxx.pdf)
- **答案 PDF**: [xxx.pdf](Tutorials-PDF/xxx.pdf)
<!-- PDF_LINKS_END -->
```

---

## 🧠 Knowledge Organizer（知识整理师）

**输入：** 已完成的 notes、tutorials、homeworks、exams
**输出：** 知识点索引、公式汇总表、考点映射

**工作流程：**
1. **知识点提取** — 从每章笔记归纳核心概念和公式
2. **题目映射** — 建立「知识点 → 对应题目」索引，标注掌握程度
3. **跨章节关联** — 识别知识点之间的前后依赖（如：误差传播 → 线性回归 → 滴定计算）
4. **公式汇总** — 按章节整理公式速查表（参考 `exams/final_exam_model.md`）
5. **考点标注** — 对比考试题目，标注高频考点和复习优先级

---

## 🎨 Polisher（内容润色师）

**输入：** PDF→Notes 或 Answer Generator 的初稿
**输出：** 润色后的 Markdown 文件

**工作范围：**
- **语言** — 中英文混排空格、术语一致性、语句通顺、引号校正
- **格式** — Markdown 语法、LaTeX 统一、标题层级、列表对齐
- **内容** — 数值验证、公式校验、单位检查、交叉引用
- **可读性** — 过渡文字、长段拆分、关键信息加粗

---

## 🖼️ Image Extractor（图片提取师）

**输入：** 原始 PDF 文件
**输出：** `notes/images/notes-N/` 或 `tutorials/images/tutorial-N/`

**工作规范：**
- 命名格式：`page{N}_img{M}.jpeg` 或 `.png`
- 在 Markdown 中添加 `![](images/...)` 引用
- 压缩过大图片，图表优先用 PNG，照片用 JPEG

---

## 🔍 Quality Inspector（质量检查员）

**检查清单：**

| 类别 | 检查项 |
|------|--------|
| 内容 | Markdown 语法 · LaTeX 公式配对 · 计算结果 · 单位一致 |
| 结构 | HTML 标记配对 · 题目 ID 唯一 · `for` 属性关联 · PDF 链接有效 |
| 页面 | 组件容器完整 · 图片路径正确 · 无死链 |
| 规范 | 中文引号 · 中英文空格 · 术语一致 |

---

# 三、协作流程

### 流程 A：课件 PDF → 笔记发布

```
PDF 课件 ──┬── 📄 PDF→Notes: 生成 Markdown 初稿
           └── 🖼️ Image Extractor: 提取图片（并行）
                     │
                     ▼
              🎨 Polisher: 润色
                     │
                     ▼
              🔍 Inspector: 验证
                     │
                     ▼
              🚀 Deploy: 部署
```

### 流程 B：习题/作业 PDF → 解答发布

```
题目 PDF + 答案 PDF
        │
        ├── 🖼️ Image Extractor: 提取图片（可先行）
        │
        ▼
   ✍️ Answer Generator: 转录题目 + 生成解答
        │
        ├── 🎨 Polisher: 润色解答
        ├── 🧠 Knowledge Organizer: 更新知识点映射（并行）
        │
        ▼
   🔍 Inspector: 质量检查
        │
        ▼
   🚀 Deploy: 部署
```

### 流程 C：考试资料发布

与流程 B 类似，额外由 Knowledge Organizer 标注考试重点和考点映射。

### 流程 D：知识点整理（阶段性）

完成一批内容后触发，Knowledge Organizer 执行全量知识点提取、映射、关联和公式汇总。

### 流程 E：新增一门完整课程

```
🏗️ Course Builder: 创建目录和页面
🎨 Style Designer: 主题色和卡片样式（并行）
🖥️ Frontend Engineer: 导航栏、首页、JS 配置
        │
        ▼
📄 PDF→Notes + ✍️ Answer Generator + 🖼️ Image Extractor（并行生产内容）
        │
        ▼
🎨 Polisher → 🧠 Knowledge Organizer → 🔍 Inspector
        │
        ▼
🚀 Deploy: 部署
```

---

# 四、并行与依赖

### 可并行

| 组合 | 原因 |
|------|------|
| PDF→Notes + Image Extractor | 不同输出目标 |
| Answer Generator + Image Extractor | 不同输出目标 |
| PDF→Notes + Answer Generator | 操作不同文件 |
| Polisher + Knowledge Organizer | 操作不同内容区域 |
| 🔧 工程集群 + 📚 内容集群 | 完全独立 |

### 不可并行

| 组合 | 原因 |
|------|------|
| Polisher 对同一文件 | 串行避免覆盖 |
| Knowledge Organizer 对同一章 | 需基于润色后的最终版本 |
| Frontend + Deploy | 部署前需代码稳定 |

### 依赖链

```
PDF→Notes ──────▶ Polisher ──────▶ Inspector ──▶ Deploy
                       ▲
Answer Generator ──────┘
                             │
              Knowledge Organizer ──▶ Inspector
```

---

# 五、快速索引

| Agent | 输入 | 输出 | 核心能力 |
|-------|------|------|---------|
| 📄 PDF→Notes | 课件 PDF | Markdown 笔记 | PDF 解析、LaTeX |
| ✍️ Answer Gen | 题目/答案 PDF | Markdown 解答 | 解题推导、分步说明 |
| 🧠 Knowledge | 全部 Markdown | 知识索引/公式表 | 知识关联、考点分析 |
| 🎨 Polisher | Markdown 初稿 | 润色后 Markdown | 语言校对、格式规范 |
| 🖼️ Image | PDF 文件 | 图片文件 + 引用 | 图片提取、路径管理 |
| 🔍 Inspector | 所有文件 | 检查报告 | 格式校验、计算验证 |
| 🖥️ Frontend | 需求 | HTML/JS | 原生 HTML/CSS/JS |
| 🎨 Style | 设计需求 | CSS 样式 | CSS3、响应式 |
| 🏗️ Course Builder | 课程需求 | 目录结构 + 页面 | 模板生成、配置更新 |
| 🚀 Deploy | 代码变更 | Git 提交/部署 | Git、GitHub Pages |
