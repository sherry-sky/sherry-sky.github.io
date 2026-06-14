---
name: pdf-image-extract
description: 从 PDF 文件中提取图片（函数图像、几何图形等），裁剪并保存为 PNG 格式，用于在 Markdown 文档中引用。
source: auto-skill
extracted_at: '2026-06-14T00:22:16.997Z'
---

# PDF 图片提取技能

## 概述

从课程 PDF（Tutorial、Homework、Exam）中提取函数图像、几何图形等图片，保存为 PNG 格式，供 Markdown 文档引用。

## 触发条件

当用户表达以下意图时触发：
- "提取 PDF 中的图片"
- "把 PDF 里的图拿出来"
- "Tutorial 里有图需要插入"
- "函数图像需要保存"

## 核心方法

使用 `pdfplumber` 读取 PDF 图片元数据（坐标、尺寸），然后将页面渲染为高分辨率图像，按坐标裁剪出目标图片区域。

### 为什么不用 `pdfimages`？

`pdfimages` 提取的是 PDF 内嵌的原始图像资源，通常是整页渲染的大图（如 1500x1100 像素），无法精确定位到具体的函数图像区域。而 `pdfplumber` 的 `page.images` 返回的是每个图片元素的精确坐标和尺寸，可以精确裁剪。

## 提取流程

### 步骤 1：分析 PDF 图片信息

```python
import pdfplumber

pdf_path = 'courses/calculus-1m/旧资料/06 Tutorial/Tutorial-Week3.pdf'

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        print(f'Page {i+1}: {len(page.images)} images')
        for j, img in enumerate(page.images):
            print(f'  Image {j}: x0={img["x0"]:.0f}, y0={img["top"]:.0f}, '
                  f'w={img["width"]:.0f}, h={img["height"]:.0f}')
```

### 步骤 2：渲染页面并裁剪图片

```python
import pdfplumber
from PIL import Image

pdf_path = 'courses/calculus-1m/旧资料/06 Tutorial/Tutorial-Week3.pdf'
out_dir = 'courses/calculus-1m/tutorials/'

with pdfplumber.open(pdf_path) as pdf:
    for page_idx, page in enumerate(pdf.pages):
        images = page.images
        if not images:
            continue
        
        # 将页面渲染为 200 DPI 图像
        page_img = page.to_image(resolution=200)
        pil_img = page_img.original
        
        # 计算缩放比例（PDF 点 → 像素）
        scale = pil_img.size[0] / page.width
        
        for img_idx, img in enumerate(images):
            x0, y0 = img['x0'], img['top']
            w, h = img['width'], img['height']
            
            # 转换为像素坐标并裁剪
            px, py = int(x0 * scale), int(y0 * scale)
            pw, ph = int(w * scale), int(h * scale)
            cropped = pil_img.crop((px, py, px + pw, py + ph))
            
            # 保存为 PNG
            out_path = f'{out_dir}tutorial-3-q{page_idx+1}-img{img_idx}.png'
            cropped.save(out_path, 'PNG')
            print(f'Saved: {out_path} ({cropped.size[0]}x{cropped.size[1]})')
```

### 步骤 3：重命名为规范文件名

根据图片内容重命名：
- 题目 1 的函数图像 → `tutorial-3-q1-graph.png`
- 题目 2 的函数图像 → `tutorial-3-q2-graph.png`
- 几何示意图 → `tutorial-3-figure-unit-circle.png`

### 步骤 4：在 Markdown 中引用

```markdown
### 题目 1（基于图像）

**题目：** 对于给定函数 $f$ 的图像，求下列各量的值。

![题目 1 函数图像](tutorial-3-q1-graph.png)

**(a)** $\lim_{x \to 0^-} f(x)$
...
```

## 图片命名规范

| 类型 | 命名格式 | 示例 |
|------|---------|------|
| 题目函数图像 | `tutorial-{N}-q{M}-graph.png` | `tutorial-3-q1-graph.png` |
| 几何示意图 | `tutorial-{N}-figure-{desc}.png` | `tutorial-5-figure-unit-circle.png` |
| 多部分图像 | `tutorial-{N}-q{M}-graph-part{K}.png` | `tutorial-3-q2-graph-part2.png` |

## 注意事项

1. **图片与 Markdown 同目录**：图片应保存在与 Markdown 文件相同的目录下，使用相对路径引用。

2. **200 DPI 渲染**：使用 `resolution=200` 保证图片清晰度，同时文件大小可控（通常 10-20KB）。

3. **坐标系统**：
   - PDF 使用点（points）为单位，1 point = 1/72 inch
   - `page.width` 和 `page.height` 是页面尺寸（通常 612x792 points for Letter）
   - `img['x0']` 和 `img['top']` 是图片左上角坐标
   - 渲染后的像素坐标 = PDF 坐标 × (渲染宽度 / PDF 宽度)

4. **清理临时文件**：如果使用 `pdfimages` 提取了整页大图，记得清理 `.ppm` 临时文件。

5. **图片检查清单**：
   - [ ] 图片已保存为 PNG 格式
   - [ ] 图片与 Markdown 文件在同一目录
   - [ ] 使用相对路径引用
   - [ ] 图片在题目描述后插入
   - [ ] 图片大小合理（< 50KB）

## 依赖库

```bash
pip install pdfplumber Pillow
```

## 参考资源

- `pdfplumber` 文档：https://github.com/jsvine/pdfplumber
- `Pillow` 文档：https://pillow.readthedocs.io/
