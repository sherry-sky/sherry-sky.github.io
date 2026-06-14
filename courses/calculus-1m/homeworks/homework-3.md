> **📎 源文件：** `旧资料/03 Homeworks/原题/HW3-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw3.pdf`

---

# Homework 3 - 连续性、渐近线与导数

## 📌 涉及知识点
- 分段函数的间断点分析
- 连续性条件的参数确定
- 垂直与水平渐近线
- 导数的极限定义
- 分段函数的可微性条件

---

### 题目 1（20 分）
**题目：** 求 $f$ 的不连续点。在这些点处，$f$ 是从右连续、从左连续、还是都不连续？画出 $f$ 的图像。

**(a)** $f(x) = \begin{cases} e^x & \text{if } x \leq 0 \\ -(x-1)^2 + 2 & \text{if } 0 < x < 2 \\ \dfrac{x}{x-1} & \text{if } x \geq 2 \end{cases}$

**(b)** $f(x) = \begin{cases} \sin^2(2x) & \text{if } x \leq -\pi \\ \dfrac{4x^3 - 4x^2 - \pi^2 x + \pi^2}{2x} & \text{if } -\pi < x < \pi \\ \tan^2\!\left(\dfrac{x}{2} - \dfrac{\pi}{2}\right) & \text{if } x \geq \pi \end{cases}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 间断点只可能在分段点 $x = 0$ 和 $x = 2$ 处。

**在 $x = 0$ 处：**
- $f(0) = e^0 = 1$
- $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} e^x = 1$
- $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} [-(x-1)^2 + 2] = -1 + 2 = 1$

左极限 = 右极限 = 函数值，所以 $f$ 在 $x = 0$ 处**连续**。

**在 $x = 2$ 处：**
- $f(2) = \dfrac{2}{2-1} = 2$
- $\lim_{x \to 2^-} f(x) = -(2-1)^2 + 2 = 1$
- $\lim_{x \to 2^+} f(x) = \dfrac{2}{1} = 2$

左极限 $= 1 \neq 2 = f(2)$，所以 $f$ 在 $x = 2$ 处**不连续**。

因为 $\lim_{x \to 2^-} f(x) = 1 \neq f(2)$，$f$ 在 $x = 2$ 处**不是从左连续**。
因为 $\lim_{x \to 2^+} f(x) = 2 = f(2)$，$f$ 在 $x = 2$ 处**从右连续**。

**结论：** $x = 2$ 是唯一的不连续点，$f$ 在此处从右连续。

---

**(b)** 间断点在 $x = -\pi$ 和 $x = \pi$ 处。

**在 $x = -\pi$ 处：**
- $f(-\pi) = \sin^2(-2\pi) = 0$
- $\lim_{x \to -\pi^-} f(x) = \sin^2(-2\pi) = 0$
- $\lim_{x \to -\pi^+} f(x) = \dfrac{4(-\pi)^3 - 4(-\pi)^2 - \pi^2(-\pi) + \pi^2}{2(-\pi)} = \dfrac{-4\pi^3 - 4\pi^2 + \pi^3 + \pi^2}{-2\pi} = \dfrac{-3\pi^3 - 3\pi^2}{-2\pi} = \dfrac{3\pi^2 + 3\pi}{2}$

因为 $\dfrac{3\pi^2 + 3\pi}{2} \neq 0$，$f$ 在 $x = -\pi$ 处**不连续**（跳跃间断）。

$f$ 从左连续（左极限 = 函数值 = 0），但**不从右连续**。

**在 $x = \pi$ 处：**

先因式分解分子 $4x^3 - 4x^2 - \pi^2 x + \pi^2$：

$$= 4x^2(x-1) - \pi^2(x-1) = (x-1)(4x^2 - \pi^2) = (x-1)(2x-\pi)(2x+\pi)$$

- $f(\pi) = \tan^2\!\left(\dfrac{\pi}{2} - \dfrac{\pi}{2}\right) = \tan^2(0) = 0$
- $\lim_{x \to \pi^-} f(x) = \dfrac{(\pi-1)(2\pi-\pi)(2\pi+\pi)}{2\pi} = \dfrac{(\pi-1)(\pi)(3\pi)}{2\pi} = \dfrac{3\pi(\pi-1)}{2}$
- $\lim_{x \to \pi^+} f(x) = \tan^2(0) = 0$

因为 $\dfrac{3\pi(\pi-1)}{2} \approx 10.1 \neq 0 = f(\pi)$，$f$ 在 $x = \pi$ 处**不连续**。

$f$ 从右连续（右极限 = 函数值 = 0），但**不是从左连续**。

**知识点：** 连续性、左/右连续、极限计算

</details>

---

### 题目 2（20 分）
**题目：** 求使 $f$ 在全体实数上连续的值 $a$ 和 $b$。

$$f(x) = \begin{cases} \dfrac{x^3 - x^2 - x + 1}{x - 1} & \text{if } x < 1 \\ ax^2 + bx + 1 & \text{if } 1 \leq x < \pi \\ 2\sin\!\left(\dfrac{x - 5\pi}{2}\right) & \text{if } x \geq \pi \end{cases}$$

<details>
<summary>参考答案</summary>

**解：**

先化简第一段：$x^3 - x^2 - x + 1 = x^2(x-1) - (x-1) = (x-1)(x^2-1) = (x-1)^2(x+1)$

所以当 $x < 1$ 时，$f(x) = (x-1)(x+1) = x^2 - 1$（$x \neq 1$，但取极限时可用）。

**在 $x = 1$ 处连续：**

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 - 1) = 0$$

$$f(1) = a + b + 1$$

要求 $a + b + 1 = 0 \implies a + b = -1 \quad \cdots (1)$

**在 $x = \pi$ 处连续：**

$$\lim_{x \to \pi^-} f(x) = a\pi^2 + b\pi + 1$$

$$\lim_{x \to \pi^+} f(x) = 2\sin\!\left(\frac{\pi - 5\pi}{2}\right) = 2\sin(-2\pi) = 0$$

要求 $a\pi^2 + b\pi + 1 = 0 \implies a\pi^2 + b\pi = -1 \quad \cdots (2)$

**解方程组：**

由 (1)：$b = -1 - a$。代入 (2)：

$$a\pi^2 + (-1-a)\pi = -1 \implies a\pi^2 - \pi - a\pi = -1 \implies a(\pi^2 - \pi) = \pi - 1$$

$$a(\pi)(\pi - 1) = \pi - 1 \implies a = \frac{1}{\pi}$$

$$b = -1 - \frac{1}{\pi} = -\frac{\pi + 1}{\pi}$$

$$\boxed{a = \dfrac{1}{\pi}, \quad b = -\dfrac{\pi + 1}{\pi}}$$

**知识点：** 连续性条件、方程组求解

</details>

---

### 题目 3（24 分）
**题目：** 求下列曲线的垂直和水平渐近线。

(a) $f(x) = \dfrac{x-1}{x^2 + x - 1}$

(b) $g(x) = \dfrac{\cos 2x}{x^2 + 1} + 1$

(c) $h(x) = \dfrac{1 + e^{2x}}{1 + 4e^{2x}}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f(x) = \dfrac{x-1}{x^2+x-1}$

**垂直渐近线：** 令分母为零：$x^2 + x - 1 = 0 \implies x = \dfrac{-1 \pm \sqrt{5}}{2}$

$$\boxed{x = \dfrac{-1 + \sqrt{5}}{2} \quad \text{和} \quad x = \dfrac{-1 - \sqrt{5}}{2}}$$

**水平渐近线：**

$$\lim_{x \to \pm\infty} \frac{x-1}{x^2+x-1} = \lim_{x \to \pm\infty} \frac{1/x - 1/x^2}{1 + 1/x - 1/x^2} = 0$$

$$\boxed{y = 0}$$

**(b)** $g(x) = \dfrac{\cos 2x}{x^2+1} + 1$

**垂直渐近线：** 分母 $x^2 + 1 > 0$ 对所有实数成立，**无垂直渐近线**。

**水平渐近线：** 因为 $|\cos 2x| \leq 1$ 且 $x^2 + 1 \to \infty$：

$$\lim_{x \to \pm\infty} g(x) = 0 + 1 = 1$$

$$\boxed{y = 1}$$

**(c)** $h(x) = \dfrac{1+e^{2x}}{1+4e^{2x}}$

**垂直渐近线：** $1 + 4e^{2x} > 0$ 对所有实数成立，**无垂直渐近线**。

**水平渐近线：**

$$\lim_{x \to -\infty} h(x) = \frac{1+0}{1+0} = 1 \implies \boxed{y = 1}$$

$$\lim_{x \to +\infty} h(x) = \lim_{x \to +\infty} \frac{e^{-2x}+1}{e^{-2x}+4} = \frac{0+1}{0+4} = \frac{1}{4} \implies \boxed{y = \dfrac{1}{4}}$$

**知识点：** 渐近线的求法、极限在无穷远处的行为

</details>

---

### 题目 4（16 分）
**题目：**
(a) 对 $x > 0$，用导数的极限定义证明 $f(x) = \sqrt{x}$ 的导数为 $f'(x) = \dfrac{1}{2\sqrt{x}}$。
(b) 解释为什么 $f'(0)$ 不存在。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 由导数定义：

$$f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h}$$

分子有理化：

$$= \lim_{h \to 0} \frac{(\sqrt{x+h}-\sqrt{x})(\sqrt{x+h}+\sqrt{x})}{h(\sqrt{x+h}+\sqrt{x})} = \lim_{h \to 0} \frac{x+h-x}{h(\sqrt{x+h}+\sqrt{x})}$$

$$= \lim_{h \to 0} \frac{h}{h(\sqrt{x+h}+\sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{2\sqrt{x}}$$

$$\boxed{f'(x) = \dfrac{1}{2\sqrt{x}}} \quad \blacksquare$$

**(b)** $f'(0) = \displaystyle\lim_{h \to 0^+} \dfrac{\sqrt{h} - 0}{h} = \lim_{h \to 0^+} \dfrac{1}{\sqrt{h}} = +\infty$

此极限不存在（趋于无穷），所以 $f'(0)$ **不存在**。

几何解释：$y = \sqrt{x}$ 在 $x = 0$ 处有一条**垂直切线**。

**知识点：** 导数定义、分子有理化

</details>

---

### 题目 5（20 分）
**题目：** 求 $a, b, c, d \in \mathbb{R}$ 使以下函数可微。

$$f(x) = \begin{cases} \sin x & \text{if } x \leq 0 \\ ax^3 + bx^2 + cx + d & \text{if } 0 < x < 1 \\ -x^2 + 2x & \text{if } x \geq 1 \end{cases}$$

$f'$ 是否可微？

<details>
<summary>参考答案</summary>

**解：**

可微必连续。在分段点 $x = 0$ 和 $x = 1$ 处需满足连续性和导数相等。

**在 $x = 0$ 处：**

连续性：$\lim_{x \to 0^-} \sin x = 0 = \lim_{x \to 0^+} (ax^3+bx^2+cx+d) = d$

$$\implies d = 0$$

导数相等：$\cos(0) = 1 = 3a(0)^2 + 2b(0) + c = c$

$$\implies c = 1$$

**在 $x = 1$ 处：**

连续性：$a + b + c + d = -1 + 2 = 1$

因为 $c = 1, d = 0$：$a + b + 1 = 1 \implies a + b = 0 \quad \cdots (1)$

导数相等：$3a + 2b + c = -2(1) + 2 = 0$

因为 $c = 1$：$3a + 2b + 1 = 0 \implies 3a + 2b = -1 \quad \cdots (2)$

由 (1) $b = -a$ 代入 (2)：$3a - 2a = -1 \implies a = -1$

等等，让我重新计算：$3a + 2(-a) = -1 \implies a = -1$，$b = 1$。

让我验证：$f(1^-) = -1 + 1 + 1 + 0 = 1$，$f(1^+) = -1 + 2 = 1$ ✅

$f'(1^-) = 3(-1) + 2(1) + 1 = -3 + 2 + 1 = 0$，$f'(1^+) = -2 + 2 = 0$ ✅

$$\boxed{a = -1, \quad b = 1, \quad c = 1, \quad d = 0}$$

**$f'$ 是否可微？**

$$f'(x) = \begin{cases} \cos x & x < 0 \\ -3x^2 + 2x + 1 & 0 < x < 1 \\ -2x + 2 & x > 1 \end{cases}$$

在 $x = 1$ 处检验 $f'$ 的连续性（即可微性的前提）：

$$\lim_{x \to 1^-} f'(x) = -3 + 2 + 1 = 0, \quad \lim_{x \to 1^+} f'(x) = -2 + 2 = 0$$

$f'$ 在 $x = 1$ 处连续。再检验 $f'$ 在 $x = 1$ 处的导数：

$$(f')'(1^-) = \lim_{h \to 0^-} \frac{f'(1+h) - f'(1)}{h} = \lim_{h \to 0^-} \frac{-3(1+h)^2 + 2(1+h) + 1}{h}$$

$$= \lim_{h \to 0^-} \frac{-3 - 6h - 3h^2 + 2 + 2h + 1}{h} = \lim_{h \to 0^-} \frac{-4h - 3h^2}{h} = -4$$

$$(f')'(1^+) = \lim_{h \to 0^+} \frac{-2(1+h) + 2 - 0}{h} = \lim_{h \to 0^+} \frac{-2h}{h} = -2$$

因为 $-4 \neq -2$，$f'$ 在 $x = 1$ 处不可微。

**结论：** $f'$ **不是**可微的（在 $x = 1$ 处不可微）。

**知识点：** 可微性条件、分段函数的导数匹配

</details>

---

## 📝 本次知识点总结

1. **间断点分类**： removable（可去）、jump（跳跃）、infinite（无穷）间断点；左/右连续性
2. **连续性参数确定**：在分段点处令左右极限相等，建立方程组
3. **渐近线**：垂直渐近线由分母零点确定；水平渐近线由 $x \to \pm\infty$ 的极限确定
4. **导数定义**：$\lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$，有理化技巧
5. **可微性条件**：连续 + 左右导数相等
