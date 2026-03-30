# PDF 转换器使用指南

## 概述

本项目使用 skills 中的 PDF 转 Markdown 工具处理分析化学课程的 PDF 文件，包括：
- **Tutorials-PDF/** - 习题教程
- **HW-PDF/** - 课后作业
- **Exam-PDF/** - 考试试卷

## 工具位置

- **Skills 通用工具**: `.agents/skills/pdf-converter/convert_pdf_to_md.py`

## 已处理文件状态

### ✅ 已完成转换的文件（含 images）

| 目录 | 文件 | images 状态 |
|------|------|-------------|
| tutorials/ | doc2.md - doc12.md | ✅ 已生成 |

### 📁 images 文件夹结构

```
courses/analytical-chemistry/tutorials/images/
├── 2T-Questions for Tutorial of Anal Chem 1/
│   └── page1_img1.jpeg
├── 2T-Answer for Tutorial of Anal Chem 1/
│   └── page4_img1.png
├── 3T-Questions for Tutorial of Anal Chem 1/
├── 3T-Solutions for Tutorial of Anal Chem 1/
├── 4T-Question for Tutorial of Anal Chem 1/
├── 4T-Answer for Tutorial of Anal Chem 1/
├── 5T-Tutorial for Anal Chem1/
├── 5T-Answer for Tutorial of Anal Chem1/
│   ├── page1_img1.png
│   ├── page1_img2.png
│   └── ...
├── 6T-Tutorial for Anal Chem1/
├── 6T-Answer for Tutorial of Anal Chem1/
│   └── ...
└── ...
```

## 使用转换脚本

### 单个文件转换

```bash
cd /Users/jerry/Nutstore\ Files/进行项目/sherry-sky.github.io
python .agents/skills/pdf-converter/convert_pdf_to_md.py \
    --pdf "courses/analytical-chemistry/Tutorials-PDF/2T-Questions for Tutorial of Anal Chem 1.pdf" \
    --output "courses/analytical-chemistry/tutorials" \
    --title "Tutorial 2"
```

### 批量转换（推荐）

```bash
python .agents/skills/pdf-converter/convert_pdf_to_md.py \
    --pdf-dir "courses/analytical-chemistry/Tutorials-PDF" \
    --output-dir "courses/analytical-chemistry/tutorials" \
    --pattern "(\d+)T.*\.pdf" \
    --answer-pattern ".*Answer.*\.pdf" \
    --img-subdir "tutorials"
```

### 输出目录结构

```
courses/analytical-chemistry/
├── tutorials/                    # 教程习题解答
│   ├── doc2.md                   # Tutorial 2 (含题目和答案)
│   ├── doc3.md                   # Tutorial 3
│   ├── ...
│   └── images/                   # 图片文件夹
│       ├── 2T-Questions for Tutorial of Anal Chem 1/
│       ├── 2T-Answer for Tutorial of Anal Chem 1/
│       └── ...
├── homeworks/                    # 课后作业答案
├── exams/                        # 考试试卷
├── Tutorials-PDF/                # 原始 PDF
├── HW-PDF/                       # 原始 PDF
├── Exam-PDF/                     # 原始 PDF
└── convert_pdf_to_md.py          # 课程专用脚本（已弃用）
```

## 图片路径格式

MD 文件中的图片引用格式：
```markdown
![page1_img1.jpeg](../tutorials/images/{PDF 名称}/page1_img1.jpeg)
```

## AI 润色流程

### 步骤 1：使用 skills 脚本转换
生成包含图片引用的 MD 文件

### 步骤 2：读取原始 PDF
直接读取 PDF 文件获取原始内容

### 步骤 3：对比润色
- 校正化学式 LaTeX 格式
- 校正数学公式
- 规范化表格
- 修正单位格式
- 添加中文翻译

### 步骤 4：验证
检查润色后的文件是否正确显示

## 已润色文件

| 文件 | 润色内容 |
|------|----------|
| Tutorial 2 | 限制试剂、溶液浓度、理想气体定律 |
| Tutorial 3 | 有效数字、误差分析、不确定度计算 |
| Tutorial 4 | 平均值、标准偏差、RSD 计算 |
| Tutorial 5 | 最小二乘法、标准加入法 |
| Tutorial 6 | pH 计算、解离分数、缓冲溶液、凯氏定氮法 |
| Tutorial 7 | 酸碱滴定、滴定曲线、滴定误差 |

## 相关文档

- [README.md](../../README.md) - 项目总体说明
- [notes/](notes/) - 课程笔记