---
name: md-source-ref
description: 为课程 Markdown 文档添加 PDF 源文件引用信息，确保每个文档开头标注对应的原始 PDF 文件路径。
source: auto-skill
extracted_at: '2026-06-14T00:15:50.401Z'
---

# Markdown 文档源文件引用技能

## 概述

为课程 Markdown 文档（Notes、Tutorials、Workshops、Homeworks、Exams）添加 PDF 源文件引用信息，方便后续对照查阅和验证内容准确性。

## 触发条件

当用户表达以下意图时触发：
- "给所有 md 加上源文件"
- "标注 PDF 来源"
- "添加源文件引用"
- "标记每个文档对应的 PDF"

## 源文件引用格式

### 标准格式

在 Markdown 文件开头（第一个 `#` 标题之前）添加源文件引用块：

```markdown
> **📎 源文件：** `旧资料/09 Lecture/Week 4-Class 8-TangentLine.pdf`

---

# Week 4: 连续性与导数入门

...
```

### 多个 PDF 文件

用逗号分隔，每个路径用反引号包裹：

```markdown
> **📎 源文件：** `旧资料/03 Homeworks/原题/HW1-Calculus-1M.pdf`, `旧资料/03 Homeworks/回答/hw1.pdf`
```

### 无对应 PDF

当没有对应的原始 PDF 时（如 Week 1-3 没有 Lecture PDF）：

```markdown
> **📎 源文件：** 无对应 PDF（基于课程进度编写）
```

## 文件与 PDF 对应关系

### Notes（笔记）→ Lecture PDFs

| Notes 文件 | 对应 Lecture PDF |
|-----------|-----------------|
| `notes/notes-1.md` | 无（Week 1 无 Lecture） |
| `notes/notes-2.md` | 无（Week 2 无 Lecture） |
| `notes/notes-3.md` | 无（Week 3 无 Lecture） |
| `notes/notes-4.md` | `旧资料/09 Lecture/Week 4-Class 8-TangentLine.pdf` |
| `notes/notes-5.md` | `旧资料/09 Lecture/Week 5-Class 9-Derivatives.pdf` |
| `notes/notes-6.md` | `旧资料/09 Lecture/Week 6-Class11-Extremes.pdf` |
| `notes/notes-7.md` | `Week 7-Class13-A-Concavity-CurveSketching.pdf`, `Week 7-Class13-B-Antiderivatives-Substitution.pdf`, `Week 7-Class14-Definite-Integral.pdf` |
| `notes/notes-8.md` | `Week 8 - Class 15-A-Fundamental-Theorem-Calculus.pdf`, `Week 8 - Class 15-B-Integrals-Odd-Even.pdf`, `Week 8 - Class 16-Areas-Volumes-Average-Value.pdf` |
| `notes/notes-9.md` | `Week 9 - Class 17-Trigonometric-Integrals.pdf`, `Week 9 - Class 18-PartialFractions.pdf` |
| `notes/notes-10.md` | `Week 10-Class 19-A-IntegrationByParts.pdf`, `Week 10-Class 19-B-Arc-Length.pdf`, `Week 10-Class 20-Arc-Length-ReviolutionSurfaces.pdf` |
| `notes/notes-11.md` | `Week 11-Class 21-Sequences.pdf`, `Week 11-Class 22-Sequences-and-Series.pdf` |
| `notes/notes-12.md` | 无（Week 12 无 Lecture） |
| `notes/notes-13.md` | 无（Week 13 无 Lecture） |
| `notes/notes-14.md` | 无（Week 14 无 Lecture） |
| `notes/notes-23.md` | `Week 23-Class-12-30-2024.pdf` |
| `notes/notes-24.md` | `Week 24-Class-1-6-2025.pdf` |
| `notes/notes-25.md` | `Week 25-Class-1-8-2025.pdf` |
| `notes/notes-26.md` | `Week 26-Tutorial-1-7-2025.pdf` |

### Tutorials（习题）→ Tutorial PDFs

| Tutorial 文件 | 对应 PDF |
|--------------|---------|
| `tutorial-{N}.md` | `旧资料/06 Tutorial/Tutorial-Week{N}.pdf` |

### Workshops（研讨）→ Workshop PDFs/JPGs

| Workshop 文件 | 对应 PDF/JPG |
|--------------|-------------|
| `workshop-1.md` | `旧资料/02 Workshop/Workshop 1.pdf` |
| `workshop-2.md` | `旧资料/02 Workshop/Workshop 2.pdf` |
| `workshop-3.md` | 无（无 Workshop 3） |
| `workshop-4.md` | `旧资料/02 Workshop/Workshop 4.pdf` |
| `workshop-5.md` | `旧资料/02 Workshop/Workshop 5.pdf` |
| `workshop-6.md` | `旧资料/02 Workshop/Workshop 6.pdf` |
| `workshop-7.md` | `旧资料/02 Workshop/Workshop 7.jpg` |
| `workshop-8.md` | `Workshop 8.jpg`, `Workshop 8_2.jpg` |
| `workshop-9.md` | `旧资料/02 Workshop/Workshop 9.pdf` |
| `workshop-10.md` | `旧资料/02 Workshop/Workshop 10.pdf` |
| `workshop-11.md` | `旧资料/02 Workshop/workshop 11.pdf` |
| `workshop-12.md` | `旧资料/02 Workshop/workshop 12.jpg` |

### Homeworks（作业）→ 原题 + 回答 PDFs

| Homework 文件 | 对应 PDF（原题 + 回答） |
|--------------|----------------------|
| `homework-{N}.md` | `旧资料/03 Homeworks/原题/HW{N}-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw{N}.pdf` |

### Exams（考试）→ Exam PDFs

| Exam 文件 | 对应 PDF |
|----------|---------|
| `exam-1.md` | `旧资料/04 Midterm/Midterm-Calc1M-Winter2024.pdf` |
| `exam-2.md` | `旧资料/05 Final/Final-2024-Review.pdf` |

## 批量处理脚本

使用 Python 脚本批量添加源文件引用：

```python
import os
import re

base_dir = "courses/calculus-1m"

# 定义文件与 PDF 的对应关系
file_mappings = {
    "notes/notes-4.md": "旧资料/09 Lecture/Week 4-Class 8-TangentLine.pdf",
    "tutorials/tutorial-1.md": "旧资料/06 Tutorial/Tutorial-Week1.pdf",
    "workshops/workshop-1.md": "旧资料/02 Workshop/Workshop 1.pdf",
    "homeworks/homework-1.md": "旧资料/03 Homeworks/原题/HW1-Calculus-1M.pdf, 旧资料/03 Homeworks/回答/hw1.pdf",
    "exams/exam-1.md": "旧资料/04 Midterm/Midterm-Calc1M-Winter2024.pdf",
    # ... 其他文件
}

for filepath, pdf_files in file_mappings.items():
    full_path = os.path.join(base_dir, filepath)
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已有源文件信息
    if " 源文件：" in content:
        continue
    
    # 构建源文件信息
    if pdf_files:
        pdf_list = [f"`{p}`" for p in pdf_files.split(", ")]
        source_info = f"> **📎 源文件：** {', '.join(pdf_list)}\n\n---\n\n"
    else:
        source_info = f"> **📎 源文件：** 无对应 PDF（基于课程进度编写）\n\n---\n\n"
    
    # 在第一个 # 标题之前插入
    match = re.search(r'^# ', content, re.MULTILINE)
    if match:
        insert_pos = match.start()
        new_content = content[:insert_pos] + source_info + content[insert_pos:]
    else:
        new_content = source_info + content
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
```

## 验证检查

添加完成后，验证以下事项：

1. **位置正确**：源文件引用在第一个 `#` 标题之前
2. **格式统一**：所有文件使用相同的 `> **📎 源文件：**` 格式
3. **路径准确**：PDF 路径相对于课程目录（如 `courses/calculus-1m/`）
4. **无遗漏**：所有 Markdown 文件都已添加（包括无对应 PDF 的文件）

## 注意事项

- 源文件引用使用 `>` 块引用格式，在 Markdown 渲染时会显示为引用块
- 多个 PDF 路径用逗号分隔，每个路径用反引号包裹以显示为代码样式
- 对于基于课程进度编写但无对应 PDF 的文档，明确标注"无对应 PDF"
- 源文件信息应放在文件最开头，便于快速定位原始资料
