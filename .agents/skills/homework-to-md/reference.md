# 作业 PDF 转 Markdown 参考指南

## 转换检查清单

在转换每个 PDF 时，按以下清单逐项检查：

### 结构检查
- [ ] 文件标题格式正确：`# Tutorial/Homework/Exam X - [主题]`
- [ ] 知识点梳理部分完整
- [ ] 题目编号连续，子题编号正确（(a), (b), (c)...）
- [ ] 每道题都有参考答案（或标注"待补充"）
- [ ] 知识点总结部分完整

### 公式检查
- [ ] 所有数学表达式都被 `$` 或 `$$` 正确包裹
- [ ] 行内公式使用 `$...$`（不是 `\( ... \)`）
- [ ] 块级公式使用 `$$...$$`（不是 `\[ ... \]`）
- [ ] 公式末尾无 equation 序号（如 `050`, `051`, `(1)` 等）
- [ ] 最终答案使用 `\boxed{}` 包裹
- [ ] 分数使用 `\frac{}{}` 而非 `a/b`
- [ ] 根号使用 `\sqrt{}` 而非 `√`
- [ ] 希腊字母使用 LaTeX 命令（如 `\varepsilon` 而非 `ε`）
- [ ] 集合符号正确（`\mathbb{R}`, `\in`, `\subset` 等）

### 格式检查
- [ ] 题目与答案之间使用 `<details>/<summary>` 折叠
- [ ] 题目之间有 `---` 分隔线
- [ ] 中文与公式之间有空格
- [ ] 块级公式前后有空行
- [ ] 无多余空行或空白字符

### 图片检查
- [ ] PDF 中的函数图像已提取并保存为 PNG
- [ ] 图片命名规范：`tutorial-{N}-q{M}-graph.png`
- [ ] 图片与 Markdown 文件在同一目录
- [ ] Markdown 中使用相对路径引用图片
- [ ] 图片在题目描述后插入

## 典型转换示例

### 示例 1：不等式

**PDF 原文：**
```
Solve the inequality: x(x − 4) ≥ −2
```

**转换后：**
```markdown
**题目：** 求解不等式 $x(x - 4) \geq -2$。
```

### 示例 2：带序号的公式（需要清理）

**PDF 原文（含 equation 序号）：**
```
x² − 4x + 2 ≥ 0    050
```

**错误转换（保留序号）：**
```markdown
$$x^2 - 4x + 2 \geq 050$$  ← 错误！050 是 equation 序号
```

**正确转换（清除序号）：**
```markdown
$$x^2 - 4x + 2 \geq 0$$
```

### 示例 3：分数与根号

**PDF 原文：**
```
        1          1
       ──  ≤  ─────────
       25     x² − 6x + 9
```

**转换后：**
```markdown
$$\frac{1}{25} \leq \frac{1}{x^2 - 6x + 9}$$
```

### 示例 4：绝对值不等式

**PDF 原文：**
```
|9 − 2x²| ≥ 1/3
```

**转换后：**
```markdown
$$\lvert 9 - 2x^2 \rvert \geq \frac{1}{3}$$
```

### 示例 5：集合表示

**PDF 原文：**
```
{ (x, y) ∈ R² : y² < x + 1 < 2y + 3 }
```

**转换后：**
```markdown
$$\{(x, y) \in \mathbb{R}^2 : y^2 < x + 1 < 2y + 3\}$$
```

### 示例 6：三角函数

**PDF 原文：**
```
sin θ = √3/2, cos θ > 0
```

**转换后：**
```markdown
$\sin\theta = \frac{\sqrt{3}}{2}$，$\cos\theta > 0$
```

### 示例 7：ε-δ 证明

**PDF 原文：**
```
for every ε > 0, if the distance from x to 1 is smaller than ε/3
```

**转换后：**
```markdown
对任意 $\varepsilon > 0$，若 $x$ 到 $1$ 的距离小于 $\frac{\varepsilon}{3}$
```

### 示例 8：多行推导（含需要清理的序号）

**PDF 原文：**
```
x² − 4x + 2 ≥ 0    052
x² − 4x + 2 ≥ 0    053
x² − 4x + 2 ≥ 0    054
```

**正确转换（每行独立，清除序号）：**
```markdown
$$x^2 - 4x + 2 \geq 0$$

$$x^2 - 4x + 2 \geq 0$$

$$x^2 - 4x + 2 \geq 0$$
```

## Equation 序号识别规则

PDF 中的 equation 序号通常有以下特征：

1. **位置固定**：出现在公式行的最右侧
2. **格式统一**：通常是 3-4 位数字（如 `050`, `051`, `052`）或括号数字（如 `(1)`, `(2)`）
3. **与公式内容无关**：序号不参与数学运算
4. **连续递增**：同一文档中序号通常连续递增

**清理方法：**
- 手动检查每个 `$$...$$` 和 `$...$` 块
- 移除末尾的纯数字（3-4位）或括号数字
- 注意区分公式内容中的数字（如系数 `2`, `4`）和序号

## 常见问题 FAQ

### Q: 如何处理 PDF 中的图片/图形？

A: 使用 `pdfplumber` 提取 PDF 中的图片，保存为 PNG 格式，并在 Markdown 中引用。

**提取方法：**
```python
import pdfplumber
from PIL import Image

with pdfplumber.open(pdf_path) as pdf:
    for page_idx, page in enumerate(pdf.pages):
        for img_idx, img in enumerate(page.images):
            # 渲染页面并裁剪图片区域
            page_img = page.to_image(resolution=200)
            pil_img = page_img.original
            scale = pil_img.size[0] / page.width
            x0, y0, w, h = img['x0'], img['top'], img['width'], img['height']
            cropped = pil_img.crop((int(x0*scale), int(y0*scale), 
                                    int((x0+w)*scale), int((y0+h)*scale)))
            cropped.save(f'tutorial-X-q{page_idx}-img{img_idx}.png', 'PNG')
```

**在 Markdown 中引用：**
```markdown
![题目 1 函数图像](tutorial-3-q1-graph.png)
```

**注意事项：**
- 图片应与 Markdown 文件保存在同一目录
- 使用相对路径引用
- 对于函数图像题，在题目描述后插入图片
- 对于几何证明题，在题目描述后插入图片作为几何背景说明

### Q: 公式太长怎么办？

A: 使用 `aligned` 环境拆分多行公式：
```markdown
$$
\begin{aligned}
x^2 - 4x + 2 &\geq 0 \\
(x-2)^2 - 2 &\geq 0 \\
(x-2)^2 &\geq 2
\end{aligned}
$$
```

### Q: 如何处理选择题/填空题格式？

A: 按照项目标准格式，将选项列为子题：
```markdown
**(a)** 选项 A 内容

**(b)** 选项 B 内容
```

### Q: 答案不确定怎么办？

A: 在答案部分标注"待验证"，并给出推导思路：
```markdown
<details>
<summary>参考答案（待验证）</summary>

**解：**

推导过程...

> ⚠️ 此答案待验证，请参考原始 PDF 确认。

$$\boxed{答案}$$

</details>
```
