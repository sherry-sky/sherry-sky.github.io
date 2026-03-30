---
name: pdf-converter
description: 通用 PDF 转换工具，支持转 Markdown 和 PDF 页面提取为图片配合视觉理解
---

# pdf-converter

通用的 PDF 转换工具，适用于学术教材、习题、笔记等各类 PDF 文件。

## 工作流程

### 步骤 1：PDF 转 MD
运行 Python 脚本生成初始 Markdown 文件：
```bash
python convert_pdf_to_md.py --pdf "document.pdf" --output "./output" --title "Document"
```

### 步骤 2：AI 尝试直接视觉理解 PDF
直接向 AI 提供 PDF 文件路径进行理解。
- **成功** → 跳至步骤 5
- **失败** → 继续步骤 3

### 步骤 3：PDF 转图片（如步骤 2 失败）
```bash
python convert_pdf_to_images.py "document.pdf" -o "pages/document" --dpi 200
```

### 步骤 4：AI 使用图片进行视觉理解
读取所有 PNG 图片，理解公式、图表、表格等内容。

### 步骤 5：润色 MD 文档
对比 PDF/图片与生成的 MD，校正公式、格式、内容。

## 功能模块

### 模块 A: PDF 转 Markdown
- ✅ 文本提取和格式化
- ✅ 数学公式和化学式处理（LaTeX）
- ✅ 图片提取和保存
- ✅ 表格检测和转换
- ✅ 页眉页脚清理

### 模块 B: PDF 转图片（配合视觉理解）
- ✅ 将 PDF 每一页转换为 PNG 图片
- ✅ 可自定义分辨率（DPI）
- ✅ 适合配合视觉模型进行内容理解
- ✅ 自动创建目录结构

### 模块 C: AI 润色和校对
- ✅ 公式校正（LaTeX 格式）
- ✅ 化学式校正（下标、箭头等）
- ✅ 表格格式校正
- ✅ 图片引用路径验证
- ✅ 标题层级检查

---

## 快速开始

### 完整流程（推荐）

```bash
# 步骤 1: PDF 转 MD
python convert_pdf_to_md.py --pdf "document.pdf" --output "./output" --title "Document"

# 步骤 2: AI 润色（人工介入）
# 如果 AI 直接读 PDF 失败，执行步骤 3

# 步骤 3: PDF 转图片（如需要）
python convert_pdf_to_images.py "document.pdf" -o "pages/document" --dpi 200

# 步骤 4-5: AI 使用图片润色 MD（人工介入）
```

### 单个文件转换（仅 MD）

```bash
python convert_pdf_to_md.py --pdf "document.pdf" --output "./output" --title "Document Title"
```

### 单个文件转换（仅图片）

```bash
python convert_pdf_to_images.py "document.pdf" -o "pages/document" --dpi 200
```

### 批量转换

```bash
python convert_pdf_to_md.py --pdf-dir "./pdfs" --output-dir "./output" --pattern "(\d+).*\.pdf"
```

---

## 命令行参数

### convert_pdf_to_md.py 参数

| 参数 | 说明 | 示例 |
|------|------|------|
| `--pdf` | PDF 文件路径 | `"file.pdf"` |
| `--output` | 输出目录 | `"./output"` |
| `--title` | 文档标题 | `"Chapter 1"` |
| `--pdf-dir` | PDF 文件目录（批量） | `"./pdfs"` |
| `--output-dir` | 输出目录（批量） | `"./output"` |
| `--pattern` | 文件匹配正则 | `"(\d+).*\.pdf"` |
| `--answer-pattern` | 答案文件匹配 | `".*Answer.*\.pdf"` |
| `--img-subdir` | 图片子目录 | `"tutorials"` |

### convert_pdf_to_images.py 参数

| 参数 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `pdf_path` | PDF 文件路径（必需） | - | `"file.pdf"` |
| `-o, --output` | 输出目录 | `pages` | `"pages/document"` |
| `--dpi` | 图片分辨率 | `200` | `300` |
| `--prefix` | 文件名前缀 | `page` | `"doc_page"` |

---

## 使用示例

### 示例 1：完整流程处理单个 PDF

```bash
# 步骤 1: 生成 MD 文件
python convert_pdf_to_md.py \
    --pdf "lecture1.pdf" \
    --output "./notes" \
    --title "Lecture 1"

# 步骤 2: AI 尝试直接读 PDF 润色
# (如果失败，继续步骤 3)

# 步骤 3: 转图片
python convert_pdf_to_images.py \
    "lecture1.pdf" \
    -o "pages/lecture1" \
    --dpi 200

# 步骤 4-5: AI 使用图片润色 MD
```

### 示例 2：批量转换教程（含答案合并）

```bash
python convert_pdf_to_md.py \
    --pdf-dir "Tutorials-PDF" \
    --output-dir "tutorials" \
    --pattern "(\d+)T.*\.pdf" \
    --answer-pattern ".*Answer.*\.pdf" \
    --img-subdir "tutorials"
```

### 示例 3：特定项目结构

```bash
# Tutorials
python convert_pdf_to_md.py \
    --pdf-dir "Tutorials-PDF" \
    --output-dir "tutorials" \
    --pattern "(\d+)T.*\.pdf" \
    --answer-pattern ".*Answer.*\.pdf" \
    --img-subdir "tutorials"

# Homeworks
python convert_pdf_to_md.py \
    --pdf-dir "HW-PDF" \
    --output-dir "homeworks" \
    --pattern "(\d+)H.*\.pdf" \
    --answer-pattern ".*Answer.*\.pdf" \
    --img-subdir "homeworks"

# Exams
python convert_pdf_to_md.py \
    --pdf-dir "Exam-PDF" \
    --output-dir "exams" \
    --pattern "(\d+).*\.pdf" \
    --answer-pattern ".*Answer.*\.pdf" \
    --img-subdir "exams"
```

### 示例 4：通用命令格式

```bash
# PDF 转 MD
python convert_pdf_to_md.py \
    --pdf "path/to/document.pdf" \
    --output "output_dir" \
    --title "Document Title"

# PDF 转图片
python convert_pdf_to_images.py \
    "path/to/document.pdf" \
    -o "pages/document-name" \
    --dpi 200
```

---

## 输出结构

### PDF 转 MD 输出

```
output/
├── document.md
└── images/
    └── document/
        ├── page1_img1.png
        └── page2_img1.png
```

### PDF 转图片输出

```
pages/
└── document-name/
    ├── page_001.png
    ├── page_002.png
    └── page_003.png
```

---

## AI 润色指南

### 润色流程

#### 第一步：尝试直接视觉理解 PDF

直接向 AI 提供 PDF 文件路径，请求读取和润色：

```
请读取以下文件进行润色：
- PDF 文件：path/to/document.pdf
- MD 文件：output/document.md

检查并润色公式、化学式、表格、图片引用等。
```

#### 第二步：如失败，转图片后润色

如果直接读 PDF 失败，先转换图片：

```bash
python convert_pdf_to_images.py \
    "path/to/document.pdf" \
    -o "pages/document-name" \
    --dpi 200
```

然后使用图片润色：

```
请读取以下文件进行润色：
- PDF 图片：pages/document-name/page_001.png, page_002.png, ...
- MD 文件：output/document.md

批量读取图片内容，对比润色 MD 文件中的：
- 公式（LaTeX 格式）
- 化学式（下标、箭头等）
- 表格格式
- 图片引用路径等
```

### AI 润色检查清单

- [ ] 公式是否正确使用 LaTeX 格式（`$...$` 或 `$$...$$`）
- [ ] 化学式下标是否使用 `<sub>` 标签
- [ ] 化学方程式箭头是否正确（`→`, `⇌`, `↔` 等）
- [ ] 表格是否有正确的表头和分隔线
- [ ] 图片路径是否正确
- [ ] 标题层级是否合理（`#`, `##`, `###`）
- [ ] 列表格式是否正确（`-`, `1.`, `[ ]`）
- [ ] 特殊符号是否正确转义
- [ ] 上下标是否正确（`^`, `<sup>`, `<sub>`）
- [ ] 单位格式是否规范（空格、斜体等）

---

## 依赖安装

```bash
pip install PyMuPDF pdfplumber pillow
```

---

## 常见问题

### Q: 图片提取失败怎么办？
A: 某些 PDF 中的图片可能是矢量图或特殊格式，尝试使用 `convert_pdf_to_images.py` 将整个页面转为图片。

### Q: 公式识别不准确？
A: 使用 AI 润色功能，让 AI 根据 PDF 内容或转图片后的内容校正公式的 LaTeX 表达。

### Q: 表格格式混乱？
A: Python 转换可能无法完美处理复杂表格，建议用 AI 润色时重点检查表格部分。

### Q: 如何判断是否需要转图片？
A: 如果 AI 直接读取 PDF 时出现乱码、无法识别公式或图表，建议转图片后使用视觉理解。

### Q: 批量处理后如何快速定位需要润色的文件？
A: 查看输出目录中所有 `.md` 文件，逐个与原始 PDF 对比润色。

### Q: 如何自定义页眉页脚过滤？
A: 修改 `convert_pdf_to_md.py` 脚本中的 `header_footer_patterns` 列表。

### Q: 特殊字符映射不对？
A: 修改 `convert_pdf_to_md.py` 脚本中的 `char_map` 字典。

---

## 分辨率建议

| DPI | 用途 | 文件大小 |
|-----|------|----------|
| 150 | 快速预览 | 较小 |
| 200 | 标准使用（推荐） | 中等 |
| 300 | 高清输出 | 较大 |
| 400+ | 打印质量 | 大 |