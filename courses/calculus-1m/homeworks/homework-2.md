> **📎 源文件：** `旧资料/03 Homeworks/原题/HW2-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw2.pdf`

---

# Homework 2 - 反函数、极限与 $\varepsilon$-$\delta$ 定义

## 📌 涉及知识点
- 反函数的存在性与求解
- 极限的计算（有理化、因式分解、夹逼定理）
- $\varepsilon$-$\delta$ 语言证明极限
- 有界函数与无穷小的乘积

---

### 题目 1（30 分）
**题目：** 考虑函数 $f(x) = \sqrt[3]{4x^3 - 8}$。

(a) 证明 $f$ 是单射（one-to-one）。
(b) 计算 $f^{-1}(x)$，并求其定义域和值域。
(c) 计算 $\displaystyle\lim_{x \to \sqrt[3]{10}} f^{-1}(x)$。

<details>
<summary>参考答案</summary>

**解：**

**(a) 证明 $f$ 是单射**

计算导数：
$$f'(x) = \frac{1}{3}(4x^3 - 8)^{-2/3} \cdot 12x^2 = \frac{4x^2}{(4x^3-8)^{2/3}}$$

对于所有 $x \neq \sqrt[3]{2}$（即 $4x^3 - 8 \neq 0$），$f'(x) > 0$（分子 $4x^2 > 0$，分母为正数的 $2/3$ 次方 $> 0$）。

因此 $f$ 在 $(-\infty, \sqrt[3]{2})$ 和 $(\sqrt[3]{2}, +\infty)$ 上严格递增。

又因为 $f$ 在 $x = \sqrt[3]{2}$ 处连续（$f(\sqrt[3]{2}) = 0$），所以 $f$ 在 $\mathbb{R}$ 上严格递增，从而是单射。$\blacksquare$

**(b) 求 $f^{-1}(x)$**

设 $y = \sqrt[3]{4x^3 - 8}$，解出 $x$：

$$y^3 = 4x^3 - 8 \implies x^3 = \frac{y^3 + 8}{4} \implies x = \sqrt[3]{\frac{y^3 + 8}{4}}$$

所以 $f^{-1}(x) = \sqrt[3]{\dfrac{x^3 + 8}{4}}$。

- **定义域：** $\mathbb{R}$（因为 $x^3 + 8$ 对所有实数有定义，立方根对所有实数有定义）
- **值域：** $\mathbb{R}$（即 $f$ 的定义域）

**(c) 计算极限**

因为 $f^{-1}$ 是连续函数，直接代入：

$$\lim_{x \to \sqrt[3]{10}} f^{-1}(x) = f^{-1}(\sqrt[3]{10}) = \sqrt[3]{\frac{(\sqrt[3]{10})^3 + 8}{4}} = \sqrt[3]{\frac{10 + 8}{4}} = \sqrt[3]{\frac{18}{4}} = \sqrt[3]{\frac{9}{2}}$$

$$\boxed{\sqrt[3]{\dfrac{9}{2}} = \dfrac{\sqrt[3]{36}}{2}}$$

**知识点：** 反函数、单调性、连续性

</details>

---

### 题目 2（21 分）
**题目：** 计算下列极限。

(a) $\displaystyle\lim_{x \to \sqrt{2}^-} \sqrt{\frac{60 - 22x^2}{2 - x}}$

(b) $\displaystyle\lim_{x \to -2} \frac{x^3 + x^2 - 2x}{x + 2}$

(c) $\displaystyle\lim_{x \to 0} \frac{7x^2}{|x|}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 代入 $x = \sqrt{2}$：

$$\frac{60 - 22(2)}{2 - \sqrt{2}} = \frac{60 - 44}{2 - \sqrt{2}} = \frac{16}{2 - \sqrt{2}}$$

有理化分母：

$$\frac{16}{2-\sqrt{2}} \cdot \frac{2+\sqrt{2}}{2+\sqrt{2}} = \frac{16(2+\sqrt{2})}{4-2} = \frac{16(2+\sqrt{2})}{2} = 8(2+\sqrt{2})$$

$$\lim_{x \to \sqrt{2}^-} \sqrt{\frac{60-22x^2}{2-x}} = \sqrt{8(2+\sqrt{2})} = 2\sqrt{2(2+\sqrt{2})} = 2\sqrt{4+2\sqrt{2}}$$

**(b)** 因式分解分子：

$$x^3 + x^2 - 2x = x(x^2 + x - 2) = x(x+2)(x-1)$$

$$\lim_{x \to -2} \frac{x(x+2)(x-1)}{x+2} = \lim_{x \to -2} x(x-1) = (-2)(-3) = \boxed{6}$$

**(c)** 分别计算左右极限：

$$\lim_{x \to 0^+} \frac{7x^2}{x} = \lim_{x \to 0^+} 7x = 0$$

$$\lim_{x \to 0^-} \frac{7x^2}{-x} = \lim_{x \to 0^-} (-7x) = 0$$

左右极限相等，所以 $\displaystyle\lim_{x \to 0} \frac{7x^2}{|x|} = \boxed{0}$。

**知识点：** 极限计算、有理化、因式分解、左右极限

</details>

---

### 题目 3（20 分）
**题目：** 给定 $\varepsilon = \dfrac{1}{5}$，求 $\delta$ 使得：

(a) $|x - 1| < \delta$ 蕴含 $|x^2 + x - 2| < \varepsilon$。

(b) $|x - 2| < \delta$ 蕴含 $\left|\dfrac{1}{x} - \dfrac{1}{2}\right| < \varepsilon$。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 因式分解：$|x^2 + x - 2| = |x-1||x+2|$。

假设 $\delta \leq 1$，则 $|x - 1| < 1 \implies 0 < x < 2 \implies |x+2| < 4$。

所以 $|x^2 + x - 2| < 4|x-1|$。

要使 $4|x-1| < \dfrac{1}{5}$，需 $|x-1| < \dfrac{1}{20}$。

取 $\delta = \min\left\{1, \dfrac{1}{20}\right\} = \boxed{\dfrac{1}{20}}$。

**验证：** $|x-1| < \frac{1}{20} \implies |x+2| \leq |x-1| + 3 < \frac{1}{20} + 3 = \frac{61}{20}$

$|x^2+x-2| = |x-1||x+2| < \frac{1}{20} \cdot \frac{61}{20} = \frac{61}{400} < \frac{1}{5} = \frac{80}{400}$ ✅

**(b)** $\left|\dfrac{1}{x} - \dfrac{1}{2}\right| = \left|\dfrac{2-x}{2x}\right| = \dfrac{|x-2|}{2|x|}$。

假设 $\delta \leq \dfrac{1}{2}$，则 $|x-2| < \dfrac{1}{2} \implies \dfrac{3}{2} < x < \dfrac{5}{2} \implies |x| > \dfrac{3}{2}$。

所以 $\dfrac{|x-2|}{2|x|} < \dfrac{|x-2|}{3}$。

要使 $\dfrac{|x-2|}{3} < \dfrac{1}{5}$，需 $|x-2| < \dfrac{3}{5}$。

取 $\delta = \min\left\{\dfrac{1}{2}, \dfrac{3}{5}\right\} = \boxed{\dfrac{1}{2}}$。

**验证：** $|x-2| < \frac{1}{2} \implies \frac{3}{2} < x < \frac{5}{2}$

$\frac{|x-2|}{2|x|} < \frac{1/2}{2 \cdot 3/2} = \frac{1/2}{3} = \frac{1}{6} < \frac{1}{5}$ ✅

**知识点：** $\varepsilon$-$\delta$ 方法

</details>

---

### 题目 4（14 分）
**题目：** 用 $\varepsilon$-$\delta$ 定义证明 $\displaystyle\lim_{x \to 2} \dfrac{1}{x} = \dfrac{1}{2}$。

<details>
<summary>参考答案</summary>

**证明：**

设 $\varepsilon > 0$。需要找 $\delta > 0$ 使得 $0 < |x-2| < \delta$ 时 $\left|\dfrac{1}{x} - \dfrac{1}{2}\right| < \varepsilon$。

$$\left|\frac{1}{x} - \frac{1}{2}\right| = \frac{|x-2|}{2|x|}$$

取 $\delta \leq 1$，则 $|x-2| < 1 \implies 1 < x < 3 \implies |x| > 1$。

所以 $\dfrac{|x-2|}{2|x|} < \dfrac{|x-2|}{2}$。

要使 $\dfrac{|x-2|}{2} < \varepsilon$，需 $|x-2| < 2\varepsilon$。

取 $\delta = \min\{1, 2\varepsilon\}$。

**验证：** 当 $0 < |x-2| < \delta$ 时：

$$\left|\frac{1}{x} - \frac{1}{2}\right| = \frac{|x-2|}{2|x|} < \frac{\delta}{2} \leq \frac{2\varepsilon}{2} = \varepsilon$$

因此 $\displaystyle\lim_{x \to 2} \dfrac{1}{x} = \dfrac{1}{2}$。$\blacksquare$

**知识点：** 极限的 $\varepsilon$-$\delta$ 证明

</details>

---

### 题目 5（15 分）
**题目：** 证明 $\displaystyle\lim_{x \to 0} \sin^2\!\left(\frac{1}{x^2}\right) \sin^2(x^2) = 0$。

<details>
<summary>参考答案</summary>

**证明：**

因为 $\sin^2\!\left(\dfrac{1}{x^2}\right) \leq 1$ 对所有 $x \neq 0$ 成立，所以：

$$0 \leq \sin^2\!\left(\frac{1}{x^2}\right) \sin^2(x^2) \leq \sin^2(x^2)$$

又因为 $\displaystyle\lim_{x \to 0} \sin^2(x^2) = \sin^2(0) = 0$，

由**夹逼定理**（Squeeze Theorem）：

$$\lim_{x \to 0} \sin^2\!\left(\frac{1}{x^2}\right) \sin^2(x^2) = 0 \quad \blacksquare$$

**知识点：** 夹逼定理、有界量与无穷小的乘积

</details>

---

## 📝 本次知识点总结

1. **反函数**：严格单调函数必有反函数；$f^{-1}$ 的定义域 = $f$ 的值域，$f^{-1}$ 的值域 = $f$ 的定义域
2. **极限计算技巧**：有理化分母、因式分解消去零因子、分左右极限处理绝对值
3. **$\varepsilon$-$\delta$ 证明**：先限制 $\delta$ 的范围以控制其他因子，再根据 $\varepsilon$ 确定最终的 $\delta$
4. **夹逼定理**：有界函数乘以趋于零的函数，极限为零
