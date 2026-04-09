---
name: course-template
description: 为新课程创建模板和结构。当用户说"为新课程创建模板"、"创建新的课程"、"添加一门新课"、"设置课程目录结构"或类似内容时使用此技能。此技能会创建标准的课程目录结构、HTML 页面框架，并提供 PDF 转换指南。
---

# 课程模板技能 (Course Template Skill)

## 概述

此技能用于为新课程创建标准化的目录结构和文件模板。基于分析化学课程的最佳实践，提供灵活可扩展的课程管理框架。

## 触发条件

当用户表达以下意图时触发：
- "为新课程创建模板"
- "创建新的课程"
- "添加一门新课"
- "设置课程目录结构"
- "初始化课程文件夹"
- 任何涉及创建新课程目录的请求

## 核心功能

### 1. 创建课程目录结构

技能将创建以下标准目录结构：

```
courses/[course-name]/
├── index.html              # 课程主页
├── tutorials.html          # 习题列表页
├── homeworks.html          # 作业列表页
├── exams.html              # 考试列表页
├── notes.html              # 笔记列表页
├── lectures.html           # 讲座列表页
├── tutorials/              # 习题 Markdown 文件
│   └── images/             # 习题图片
├── homeworks/              # 作业 Markdown 文件
│   └── images/             # 作业图片
├── exams/                  # 考试 Markdown 文件
│   └── images/             # 考试图片
├── notes/                  # 笔记 Markdown 文件
│   └── images/             # 笔记图片
├── Tutorials-PDF/          # 原始习题 PDF
├── HW-PDF/                 # 原始作业 PDF
├── Exam-PDF/               # 原始考试 PDF
└── Lectures-PDF/           # 原始讲座 PDF
```

### 2. 目录命名灵活性

技能支持常见的命名变体，根据用户提供的课程名称和偏好自动调整：

| 类型 | 标准命名 | 常见变体 |
|------|----------|----------|
| 习题 | `tutorials/` | `exercises/`, `problems/`, `practices/` |
| 作业 | `homeworks/` | `assignments/`, `hw/`, `homework/` |
| 考试 | `exams/` | `exam/`, `tests/`, `quizzes/` |
| 笔记 | `notes/` | `lecture-notes/`, `lectures/` |
| PDF 文件夹 | `Tutorials-PDF/` | `Tutorial-PDFs/`, `tutorials-pdf/`, `Tutorials/` |

### 3. 生成 HTML 页面框架

为课程生成基础的 HTML 页面，包括：
- 课程主页（index.html）
- 各分类列表页（tutorials.html, homeworks.html, exams.html, notes.html, lectures.html）

### 4. PDF 转换指南

提供将 PDF 转换为 Markdown 的指导：

#### 习题类 PDF（Tutorials/Homeworks/Exams）

转换后的 Markdown 格式：

```markdown
# [Title] - 习题解答

> 📚 [课程名称] 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- 知识点 1
- 知识点 2
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="Q1" -->
**Q1.** 题目内容...
<!-- QUESTION_END -->

<!-- QUESTION_START id="Q2" -->
**Q2.** 题目内容...
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="Q1" -->
**Q1.** 解答内容...
<!-- ANSWER_END -->

<!-- ANSWER_START for="Q2" -->
**Q2.** 解答内容...
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [PDF 名称](路径)
- **答案 PDF**: [PDF 名称](路径)
<!-- PDF_LINKS_END -->
```

#### 笔记类 PDF（Notes/Lectures）

转换后的 Markdown 格式：

```markdown
# Lecture X: [主题]

> 📄 原始文件：[PDF 名称]

---

## 课程信息

[教师信息、课程大纲等]

## 内容

[笔记正文]
```

## 使用流程

### 步骤 1：确认课程信息

在创建模板前，向用户确认以下信息：
1. **课程名称**（用于目录命名，如 `algebra-1`, `calculus-1m`）
2. **课程显示名称**（用于页面标题，如 "Algebra 1", "微积分 1M"）
3. **课程描述**（可选，用于课程简介）
4. **是否需要所有分类**（tutorials, homeworks, exams, notes, lectures）

### 步骤 2：使用脚本创建模板

技能包含一个 Python 脚本用于自动创建课程模板。执行以下命令：

```bash
cd /Users/jerry/Nutstore\ Files/进行项目/sherry-sky.github.io
python .agents/skills/course-template/scripts/generate_course_template.py \
    --course-name <课程代码> \
    --course-title "<课程显示名称>" \
    --description "<课程描述（可选）>"
```

**示例：**
```bash
python .agents/skills/course-template/scripts/generate_course_template.py \
    --course-name organic-chemistry \
    --course-title "有机化学" \
    --description "有机化学是研究有机化合物的结构、性质、反应和合成的科学"
```

### 步骤 3：验证创建结果

脚本执行后会：
1. 创建所有必要的目录
2. 生成 HTML 页面（index.html, tutorials.html 等）
3. 生成 README.md 文件

### 步骤 4：提供后续指导

告知用户如何：
- 将 PDF 文件放入对应的 PDF 文件夹（Tutorials-PDF/, HW-PDF/ 等）
- 使用 PDF 转换工具将 PDF 转为 Markdown
- 编辑 Markdown 文件添加内容

## 示例输出

当用户请求创建新课程时，技能应该：

1. **确认信息**：询问课程名称和偏好
2. **创建结构**：执行目录创建命令
3. **生成文件**：创建 HTML 页面和配置文件
4. **提供指导**：说明后续如何使用

## 相关资源

- 参考课程：`courses/analytical-chemistry/`
- 参考课程：`courses/algebra-1/`
- PDF 转换工具：`.agents/skills/pdf/`