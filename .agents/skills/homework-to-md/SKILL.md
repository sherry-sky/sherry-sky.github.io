---
name: homework-to-md
description: 将作业/习题/考试 PDF 转换为项目标准 Markdown 格式。当用户说"转换作业"、"把 PDF 转成 md"、"处理 homework PDF"、"转换 tutorial"、"转换 exam"或类似内容时使用此技能。此技能处理公式渲染、equation 序号清理、格式规范化等问题。
---

# 作业/习题 PDF 转 Markdown 技能

## 概述

此技能用于将课程作业（Homework）、习题（Tutorial）、考试（Exam）的 PDF 文件转换为项目标准的 Markdown 格式，确保公式正确渲染、格式统一、结构清晰。

## 触发条件

当用户表达以下意图时触发：
- "转换作业 PDF"
- "把 PDF 转成 md"
- "处理 homework/tutorial/exam PDF"
- "生成习题解答"
- "转换第 X 周作业"
- 任何涉及将课程 PDF 转为 Markdown 的请求

## 核心问题与解决方案

### 问题 1：Equation 序号污染

**现象：** PDF 中的公式右侧带有自动编号（如 `(1)`, `(2)`, `050`, `051` 等），转换后这些序号会混入公式文本中。

**示例（错误）：**
```
$$x^2 - 4x + 2 \geq 050$$
```

**解决方案：** 在转换过程中，识别并移除公式末尾的序号模式。

**清理规则：**
- 移除 `$$...$$` 块级公式末尾的数字序号（如 `050`, `051`, `(1)`, `(2)` 等）
- 移除 `$...$` 行内公式末尾的数字序号
- 保留公式内容中的数字（如系数、指数等）

**正则模式参考：**
```
# 块级公式末尾的纯数字序号（3-4位）
\$\$([^$]*?)\s*\d{3,4}\s*\$\$  →  $$\1$$

# 块级公式末尾的括号序号
\$\$([^$]*?)\s*\(\d+\)\s*\$\$  →  $$\1$$

# 行内公式末尾的纯数字序号
\$([^$\n]*?)\s*\d{3,4}\s*\$  →  $\1$
```

### 问题 2：公式未正确渲染

**现象：** LaTeX 命令（如 `\geq`, `\leq`, `\frac` 等）以纯文本形式显示，未被 MathJax 渲染。

**原因分析：**
1. 公式缺少 `$` 或 `$$` 包裹
2. 公式被 markdown 解析器错误处理（如 `_` 被当作斜体标记）
3. 反斜杠被转义

**解决方案：**

#### 2.1 确保所有公式都有正确的包裹符

| 类型 | 包裹符 | 示例 |
|------|--------|------|
| 行内公式 | `$...$` | `$x^2 + 1$` |
| 块级公式 | `$$...$$` | `$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$` |

#### 2.2 常见需要转换的模式

| PDF 原始文本 | 正确 Markdown |
|-------------|--------------|
| `x^2 - 4x + 2 ≥ 0` | `$x^2 - 4x + 2 \geq 0$` |
| `1/25 ≤ 1/(x²-6x+9)` | `$\frac{1}{25} \leq \frac{1}{x^2-6x+9}$` |
| `|9-2x²| ≥ 1/3` | `$\lvert 9-2x^2 \rvert \geq \frac{1}{3}$` |
| `sin θ = √3/2` | `$\sin\theta = \frac{\sqrt{3}}{2}$` |
| `x ∈ R²` | `$x \in \mathbb{R}^2$` |
| `ε > 0` | `$\varepsilon > 0$` |

#### 2.3 保护 LaTeX 不被 Markdown 解析器破坏

项目使用 `content-viewer.js` 中的 `protectLatexFormulas()` 函数在 marked.js 解析前保护 LaTeX 公式。确保：
- 行内公式用 `$...$` 包裹（不是 `\( ... \)`）
- 块级公式用 `$$...$$` 包裹（不是 `\[ ... \]`）
- 公式中避免使用未转义的 `_` 和 `*`

### 问题 3：PDF 文本提取的格式混乱

**现象：** PDF 提取的文本存在换行错乱、上下标位置错误、分数显示异常等。

**解决方案：**
1. 使用 `pdfplumber` 提取文本时启用 `layout=True` 保留布局
2. 人工校对数学表达式，确保上下标、分数正确
3. 对于复杂公式，建议手动重写而非依赖自动提取

## 转换工作流程

### 步骤 1：读取 PDF 文件

使用 `read_file` 工具读取 PDF 文件，获取原始文本内容。

```
read_file: courses/[course]/旧资料/06 Tutorial/Tutorial-WeekX.pdf
```

### 步骤 1.5：提取 PDF 中的图片

如果 PDF 中包含函数图像、几何图形等需要保留的图片，使用以下方法提取：

```python
import pdfplumber
from PIL import Image

pdf_path = 'courses/[course]/旧资料/06 Tutorial/Tutorial-WeekX.pdf'
out_dir = 'courses/[course]/tutorials/'

with pdfplumber.open(pdf_path) as pdf:
    for page_idx, page in enumerate(pdf.pages):
        images = page.images
        if images:
            # 将页面渲染为图像（200 DPI）
            page_img = page.to_image(resolution=200)
            pil_img = page_img.original
            scale = pil_img.size[0] / page.width
            
            for img_idx, img in enumerate(images):
                x0, y0, w, h = img['x0'], img['top'], img['width'], img['height']
                px, py = int(x0 * scale), int(y0 * scale)
                pw, ph = int(w * scale), int(h * scale)
                cropped = pil_img.crop((px, py, px + pw, py + ph))
                # 保存到同目录
                out_path = f'{out_dir}tutorial-X-q{page_idx}-img{img_idx}.png'
                cropped.save(out_path, 'PNG')
```

**图片命名规范：**
- 题目图像：`tutorial-{N}-q{M}-graph.png`（如 `tutorial-3-q1-graph.png`）
- 几何示意图：`tutorial-{N}-figure-{description}.png`

**在 Markdown 中引用图片：**
```markdown
![题目 1 函数图像](tutorial-3-q1-graph.png)
```

**注意事项：**
- 图片应与 Markdown 文件保存在同一目录
- 使用相对路径引用
- 对于函数图像题，在题目描述后插入图片
- 对于几何证明题，在题目描述后插入图片作为几何背景说明

### 步骤 2：分析 PDF 内容结构

识别以下内容：
- 课程名称和学期信息
- 题目编号和子题（(a), (b), (c) 等）
- 数学公式（需要转换为 LaTeX）
- 是否有答案部分

### 步骤 3：转换为标准 Markdown 格式

按照以下模板生成 Markdown 文件：

#### 习题类（Tutorial/Homework）标准格式

```markdown
# Tutorial X - [主题]

## 📌 知识点梳理
- 知识点 1
- 知识点 2
- 知识点 3

---

### 题目 1

**题目：** 题目内容（含 LaTeX 公式）

**(a)** 子题内容

**(b)** 子题内容

<details>
<summary>参考答案</summary>

**解：**

解答步骤...

$$\boxed{最终答案}$$

**知识点：** 涉及的知识点说明

</details>

---

### 题目 2

...

---

##  本次知识点总结

1. **知识点 1**：说明
2. **知识点 2**：说明
```

#### 带 HTML 注释标记的格式（用于 content-viewer 组件）

如果需要使用 content-viewer 组件的可折叠答案功能，使用以下格式：

```markdown
# Tutorial X - [主题]

## 背景知识点

<!-- BACKGROUND_START -->
- 知识点 1
- 知识点 2
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="Q1" -->
**Q1.** 题目内容...
<!-- QUESTION_END -->

<!-- QUESTION_START id="Q2a" -->
**Q2(a).** 子题内容...
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="Q1" -->
**Q1.** 解答内容...

$$\boxed{答案}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="Q2a" -->
**Q2(a).** 解答内容...
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [Tutorial-WeekX.pdf](../旧资料/06 Tutorial/Tutorial-WeekX.pdf)
<!-- PDF_LINKS_END -->
```

### 步骤 4：公式清理与验证

#### 4.1 清理 Equation 序号

逐行检查所有 `$$...$$` 和 `$...$` 公式块，移除末尾的数字序号：

```
# 检查模式
$$...内容...050$$  →  $$...内容...$$
$$...内容...(1)$$  →  $$...内容...$$
$...内容...051$    →  $...内容...$
```

#### 4.2 验证公式包裹

确保每个数学表达式都被 `$` 或 `$$` 正确包裹：
- 行内数学表达式 → `$...$`
- 独立成行的公式 → `$$...$$`

#### 4.3 常见 LaTeX 命令对照表

| 数学符号 | LaTeX 命令 | 示例 |
|---------|-----------|------|
| ≥ | `\geq` 或 `\ge` | `$x \geq 0$` |
| ≤ | `\leq` 或 `\le` | `$x \leq 1$` |
| ≠ | `\neq` 或 `\ne` | `$x \neq 0$` |
| ± | `\pm` | `$\pm 1$` |
| ∞ | `\infty` | `$+\infty$` |
| ∈ | `\in` | `$x \in \mathbb{R}$` |
| ∉ | `\notin` | `$x \notin \mathbb{Z}$` |
| ⊂ | `\subset` | `$A \subset B$` |
| ∪ | `\cup` | `$A \cup B$` |
| ∩ | `\cap` | `$A \cap B$` |
| ∅ | `\emptyset` | `$\emptyset$` |
| ∀ | `\forall` | `$\forall x$` |
| ∃ | `\exists` | `$\exists x$` |
| → | `\to` 或 `\rightarrow` | `$x \to 0$` |
| ⇒ | `\implies` | `$P \implies Q$` |
| ⇔ | `\iff` | `$P \iff Q$` |
| √ | `\sqrt{}` | `$\sqrt{x}$` |
| ³√ | `\sqrt[3]{}` | `$\sqrt[3]{x}$` |
| 分数 | `\frac{}{}` | `$\frac{1}{2}$` |
| 绝对值 | `\lvert ... \rvert` | `$\lvert x \rvert$` |
| 集合 | `\{ ... \}` | `$\{x : x > 0\}$` |
| 实数集 | `\mathbb{R}` | `$\mathbb{R}^2$` |
| 整数集 | `\mathbb{Z}` | `$\mathbb{Z}$` |
| 自然数集 | `\mathbb{N}` | `$\mathbb{N}$` |
| 空集 | `\emptyset` | `$\emptyset$` |
| 希腊字母 | `\alpha, \beta, \theta, \varepsilon` | `$\varepsilon > 0$` |
| 求和 | `\sum_{i=1}^{n}` | `$\sum_{i=1}^{n} x_i$` |
| 积分 | `\int_{a}^{b}` | `$\int_0^1 f(x)\,dx$` |
| 极限 | `\lim_{x \to a}` | `$\lim_{x \to 0} \frac{\sin x}{x}$` |
| 偏导 | `\frac{\partial f}{\partial x}` | `$\frac{\partial f}{\partial x}$` |

### 步骤 5：保存文件

将生成的 Markdown 文件保存到对应目录：

| 类型 | 保存路径 | 文件命名 |
|------|---------|---------|
| Tutorial | `courses/[course]/tutorials/tutorial-{N}.md` | `tutorial-1.md`, `tutorial-2.md`, ... |
| Homework | `courses/[course]/homeworks/homework-{N}.md` | `homework-1.md`, `homework-2.md`, ... |
| Exam | `courses/[course]/exams/exam-{N}.md` | `exam-1.md`, `exam-2.md`, ... |

### 步骤 6：验证渲染效果

转换完成后，提醒用户：
1. 在浏览器中打开对应的 viewer 页面检查公式渲染
2. 确认所有 equation 序号已清除
3. 确认所有公式正确显示

## 注意事项

### 公式中的特殊字符

- **下划线 `_`**：在公式中用于下标，如 `$x_1$`。确保在 `$` 内使用，否则 markdown 会将其解析为斜体。
- **星号 `*`**：避免在公式中使用 `*` 表示乘法，使用 `\cdot` 或 `\times`。
- **反斜杠 `\`**：LaTeX 命令以 `\` 开头，确保不被 markdown 转义。
- **花括号 `{}`**：在公式中用于分组，如 `$\frac{1}{2}$`。

### 中文与公式混排

- 中文文本与行内公式之间建议留一个空格，提高可读性
- 块级公式 `$$...$$` 前后应有空行

### 答案格式

- 最终答案使用 `\boxed{}` 包裹：`$$\boxed{答案}$$`
- 证明题结尾使用 `$\blacksquare$` 或 `$\square$`
- 无解时使用 `$\boxed{\text{无解}}$` 或 `$\boxed{\emptyset}$`

## 参考资源

- 项目标准格式参考：`courses/calculus-1m/tutorials/tutorial-1.md`
- Content Viewer 组件：`components/content-viewer.html`
- Markdown 渲染逻辑：`js/content-viewer.js`
- PDF 处理工具：`.agents/skills/pdf/`
- 课程模板：`.agents/skills/course-template/`
