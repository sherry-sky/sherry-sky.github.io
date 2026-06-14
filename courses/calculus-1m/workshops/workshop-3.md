> **📎 源文件：** 无对应 PDF（基于课程进度编写）

---

# Workshop 3 - 连续性与极限

## 📌 知识点梳理
- 函数在某点连续的定义（$\varepsilon$-$\delta$ 语言与极限语言）
- 间断点的分类（可去间断、跳跃间断、无穷间断）
- 极限的计算（代数化简、有理化、重要极限）
- 无穷远处的极限（$\lim_{x \to \pm\infty}$）
- 夹逼定理（Squeeze Theorem）
- 中间值定理（Intermediate Value Theorem）

---

### 题目 1
**题目：** 讨论函数 $f(x) = \dfrac{x^2 - 4}{x - 2}$ 在 $x = 2$ 处的连续性。若不连续，是什么类型的间断点？能否通过重新定义 $f(2)$ 使其连续？

<details>
<summary>参考答案</summary>

**解：**

$f(x) = \dfrac{x^2 - 4}{x - 2} = \dfrac{(x-2)(x+2)}{x-2}$

当 $x \neq 2$ 时，$f(x) = x + 2$。

$f(2)$ 无定义（分母为零），所以 $f$ 在 $x = 2$ 处不连续。

但 $\lim_{x \to 2} f(x) = \lim_{x \to 2} (x + 2) = 4$ 存在。

因为极限存在但函数在该点无定义，这是**可去间断点**。

若定义 $f(2) = 4$，则 $f$ 在 $x = 2$ 处连续。

**知识点：** 可去间断点的特征是极限存在但函数值不等于极限（或无定义）。

</details>

---

### 题目 2
**题目：** 讨论函数 $f(x) = \begin{cases} \dfrac{\sin x}{x}, & x \neq 0 \\ 1, & x = 0 \end{cases}$ 在 $x = 0$ 处的连续性。

<details>
<summary>参考答案</summary>

**解：**

需要验证 $\lim_{x \to 0} f(x) = f(0)$。

已知重要极限 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$。

而 $f(0) = 1$。

因为 $\lim_{x \to 0} f(x) = 1 = f(0)$，所以 $f$ 在 $x = 0$ 处**连续**。

**知识点：** 重要极限 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$ 是分析 $\dfrac{0}{0}$ 型极限的基础工具。

</details>

---

### 题目 3
**题目：** 求下列极限：

(a) $\lim_{x \to 3} \dfrac{x^2 - 9}{x^2 - 5x + 6}$

(b) $\lim_{x \to 0} \dfrac{\sqrt{1+x} - 1}{x}$

(c) $\lim_{x \to 1} \dfrac{x^3 - 1}{x^2 - 1}$

<details>
<summary>参考答案</summary>

**(a) 解：**

$$\frac{x^2 - 9}{x^2 - 5x + 6} = \frac{(x-3)(x+3)}{(x-2)(x-3)} = \frac{x+3}{x-2} \quad (x \neq 3)$$

$$\lim_{x \to 3} \frac{x+3}{x-2} = \frac{6}{1} = 6$$

**(b) 解：** 分子有理化：

$$\frac{\sqrt{1+x} - 1}{x} \cdot \frac{\sqrt{1+x} + 1}{\sqrt{1+x} + 1} = \frac{(1+x) - 1}{x(\sqrt{1+x} + 1)} = \frac{x}{x(\sqrt{1+x} + 1)} = \frac{1}{\sqrt{1+x} + 1}$$

$$\lim_{x \to 0} \frac{1}{\sqrt{1+x} + 1} = \frac{1}{2}$$

**(c) 解：**

$$\frac{x^3 - 1}{x^2 - 1} = \frac{(x-1)(x^2 + x + 1)}{(x-1)(x+1)} = \frac{x^2 + x + 1}{x + 1} \quad (x \neq 1)$$

$$\lim_{x \to 1} \frac{x^2 + x + 1}{x + 1} = \frac{3}{2}$$

**知识点：** $\dfrac{0}{0}$ 型极限的常用方法：因式分解消去公因子、有理化。

</details>

---

### 题目 4
**题目：** 求下列无穷远处的极限：

(a) $\lim_{x \to +\infty} \dfrac{3x^2 + 2x - 1}{5x^2 - x + 7}$

(b) $\lim_{x \to -\infty} \dfrac{2x^3 + x}{x^4 - 3x^2 + 1}$

(c) $\lim_{x \to +\infty} \left(\sqrt{x^2 + x} - x\right)$

<details>
<summary>参考答案</summary>

**(a) 解：** 分子分母同除以 $x^2$：

$$\lim_{x \to +\infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{5 - \frac{1}{x} + \frac{7}{x^2}} = \frac{3}{5}$$

**(b) 解：** 分子分母同除以 $x^4$：

$$\lim_{x \to -\infty} \frac{\frac{2}{x} + \frac{1}{x^3}}{1 - \frac{3}{x^2} + \frac{1}{x^4}} = \frac{0}{1} = 0$$

**(c) 解：** 有理化：

$$\sqrt{x^2 + x} - x = \frac{(\sqrt{x^2+x} - x)(\sqrt{x^2+x} + x)}{\sqrt{x^2+x} + x} = \frac{x^2 + x - x^2}{\sqrt{x^2+x} + x} = \frac{x}{\sqrt{x^2+x} + x}$$

当 $x \to +\infty$ 时，$\sqrt{x^2 + x} = x\sqrt{1 + \frac{1}{x}}$：

$$\frac{x}{x\sqrt{1 + \frac{1}{x}} + x} = \frac{1}{\sqrt{1 + \frac{1}{x}} + 1} \to \frac{1}{2}$$

**知识点：** 无穷远处极限的处理：最高次项主导；$\infty - \infty$ 型需要有理化。

</details>

---

### 题目 5
**题目：** 讨论函数 $f(x) = \begin{cases} x^2 + 1, & x < 1 \\ 2x, & 1 \leq x < 3 \\ 5, & x \geq 3 \end{cases}$ 的连续性，指出所有间断点及其类型。

<details>
<summary>参考答案</summary>

**解：** 只需检查分段点 $x = 1$ 和 $x = 3$。

**在 $x = 1$ 处：**

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 + 1) = 2$$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} 2x = 2$$

$$f(1) = 2(1) = 2$$

左右极限相等且等于函数值，$f$ 在 $x = 1$ 处**连续**。

**在 $x = 3$ 处：**

$$\lim_{x \to 3^-} f(x) = \lim_{x \to 3^-} 2x = 6$$

$$\lim_{x \to 3^+} f(x) = 5$$

$$f(3) = 5$$

左右极限不相等（$6 \neq 5$），$f$ 在 $x = 3$ 处有**跳跃间断点**。

**知识点：** 分段函数的连续性只需检查分段点；跳跃间断点的特征是左右极限都存在但不相等。

</details>

---

### 题目 6
**题目：** 利用夹逼定理求 $\lim_{x \to 0} x^2 \sin\left(\dfrac{1}{x}\right)$。

<details>
<summary>参考答案</summary>

**解：**

对任意 $x \neq 0$，有 $-1 \leq \sin\left(\dfrac{1}{x}\right) \leq 1$。

因为 $x^2 \geq 0$，两边乘以 $x^2$：

$$-x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2$$

而 $\lim_{x \to 0} (-x^2) = 0$ 且 $\lim_{x \to 0} x^2 = 0$。

由夹逼定理：

$$\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0$$

**知识点：** 夹逼定理：若 $g(x) \leq f(x) \leq h(x)$ 且 $\lim g = \lim h = L$，则 $\lim f = L$。适用于有界函数乘以无穷小量的情形。

</details>

---

### 题目 7
**题目：** 证明方程 $x^3 - x - 1 = 0$ 在区间 $(1, 2)$ 内至少有一个实根。

<details>
<summary>参考答案</summary>

**解：**

设 $f(x) = x^3 - x - 1$。$f$ 是多项式函数，在 $[1, 2]$ 上连续。

$$f(1) = 1 - 1 - 1 = -1 < 0$$

$$f(2) = 8 - 2 - 1 = 5 > 0$$

因为 $f(1) < 0 < f(2)$，由**中间值定理**（Intermediate Value Theorem），存在 $c \in (1, 2)$ 使得 $f(c) = 0$。

即方程 $x^3 - x - 1 = 0$ 在 $(1, 2)$ 内至少有一个实根。$\blacksquare$

**知识点：** 中间值定理：若 $f$ 在 $[a,b]$ 上连续，且 $f(a)$ 与 $f(b)$ 异号，则存在 $c \in (a,b)$ 使 $f(c) = 0$。

</details>

---

### 题目 8
**题目：** 求参数 $a$ 和 $b$ 的值，使得函数

$$f(x) = \begin{cases} x^2 + a, & x < 0 \\ b, & x = 0 \\ 2x + 1, & x > 0 \end{cases}$$

在 $x = 0$ 处连续。

<details>
<summary>参考答案</summary>

**解：** $f$ 在 $x = 0$ 处连续需要 $\lim_{x \to 0^-} f(x) = f(0) = \lim_{x \to 0^+} f(x)$。

$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (x^2 + a) = a$$

$$f(0) = b$$

$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (2x + 1) = 1$$

所以需要 $a = b = 1$。

$$\boxed{a = 1, \quad b = 1}$$

**知识点：** 分段函数在分段点连续的条件：左极限 = 右极限 = 函数值。

</details>

---

### 题目 9
**题目：** 求 $\lim_{x \to 0} \dfrac{e^x - 1}{x}$ 和 $\lim_{x \to +\infty} \dfrac{\ln x}{x}$。

<details>
<summary>参考答案</summary>

**第一个极限：**

这是重要极限之一。利用 $e^x$ 的泰勒展开 $e^x = 1 + x + \dfrac{x^2}{2!} + \cdots$：

$$\frac{e^x - 1}{x} = \frac{x + \frac{x^2}{2!} + \cdots}{x} = 1 + \frac{x}{2!} + \cdots \to 1 \quad (x \to 0)$$

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

**第二个极限：**

当 $x \to +\infty$ 时，$\ln x$ 增长远慢于 $x$。

令 $x = e^t$（$t \to +\infty$）：

$$\frac{\ln x}{x} = \frac{t}{e^t}$$

因为 $e^t$ 增长远快于 $t$（指数增长 vs 线性增长），所以 $\dfrac{t}{e^t} \to 0$。

$$\lim_{x \to +\infty} \frac{\ln x}{x} = 0$$

**知识点：** 重要极限 $\lim_{x \to 0} \dfrac{e^x - 1}{x} = 1$；对数函数的增长速度慢于任何正幂次函数。

</details>

---

### 题目 10
**题目：** 求 $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$。

<details>
<summary>参考答案</summary>

**解：** 利用半角公式 $1 - \cos x = 2\sin^2\left(\dfrac{x}{2}\right)$：

$$\frac{1 - \cos x}{x^2} = \frac{2\sin^2\left(\frac{x}{2}\right)}{x^2} = 2 \cdot \left(\frac{\sin\left(\frac{x}{2}\right)}{x}\right)^2 = 2 \cdot \left(\frac{1}{2} \cdot \frac{\sin\left(\frac{x}{2}\right)}{\frac{x}{2}}\right)^2$$

$$= \frac{1}{2} \cdot \left(\frac{\sin\left(\frac{x}{2}\right)}{\frac{x}{2}}\right)^2 \to \frac{1}{2} \cdot 1^2 = \frac{1}{2}$$

$$\boxed{\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}}$$

**知识点：** 利用三角恒等式将 $\dfrac{0}{0}$ 型极限转化为已知的重要极限。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了极限与连续性的核心内容：

1. **连续的定义**：$f$ 在 $x = a$ 处连续 $\iff \lim_{x \to a} f(x) = f(a)$，需要左极限、右极限、函数值三者相等。
2. **间断点分类**：可去间断（极限存在但函数值不匹配）、跳跃间断（左右极限存在但不等）、无穷间断（极限为无穷）。
3. **极限计算技巧**：因式分解、有理化、三角恒等式、重要极限。
4. **无穷远处的极限**：比较最高次项；指数增长 > 多项式增长 > 对数增长。
5. **夹逼定理**：处理有界函数与无穷小量乘积的极限。
6. **中间值定理**：连续函数在区间端点异号时必有零点。
