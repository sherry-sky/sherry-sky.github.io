> **📎 源文件：** `旧资料/02 Workshop/Workshop 2.pdf`

---

# Workshop 2 - 函数建模、反函数与函数性质

## 📌 知识点梳理
- 函数建模（几何应用）
- 线性函数的确定
- 差商（导数的定义）
- 函数的定义域与值域
- 单射（injective）的判定
- 反函数的求法
- 二次函数的性质
- 复合函数
- 奇偶函数的性质
- 指数与对数方程

---

### 题目 1
**题目：** 半径为 $r$ 的球形气球体积为 $V = \dfrac{4}{3}\pi r^3$。求一个函数，表示将气球从半径 $r$ 充气到半径 $r+1$ 所需的空气量。

<details>
<summary>参考答案</summary>

**解：**

所需空气量等于两个体积之差：

$$f(r) = V(r+1) - V(r) = \frac{4}{3}\pi(r+1)^3 - \frac{4}{3}\pi r^3$$

展开 $(r+1)^3 = r^3 + 3r^2 + 3r + 1$：

$$f(r) = \frac{4}{3}\pi(r^3 + 3r^2 + 3r + 1 - r^3) = \frac{4}{3}\pi(3r^2 + 3r + 1)$$

$$\boxed{f(r) = \frac{4}{3}\pi(3r^2 + 3r + 1)}$$

**知识点：** 函数建模——将实际问题转化为函数表达式。

</details>

---

### 题目 2
**题目：** 一个开口长方体盒子体积为 $2\,\text{m}^3$，底面为正方形。将盒子的表面积表示为底面边长的函数。

<details>
<summary>参考答案</summary>

**解：**

设底面边长为 $x$，高为 $h$。体积条件：$x^2 h = 2 \implies h = \dfrac{2}{x^2}$。

盒子无盖，表面积 = 底面 + 4个侧面：

$$S(x) = x^2 + 4xh = x^2 + 4x \cdot \frac{2}{x^2} = x^2 + \frac{8}{x}$$

$$\boxed{S(x) = x^2 + \frac{8}{x}, \quad x > 0}$$

**知识点：** 利用约束条件消元，将多变量问题化为单变量函数。

</details>

---

### 题目 3
**题目：** 设 $g(x) = -3x + 8$，$f(x)$ 是满足 $f(-3) = 4$ 和 $f(-1) = 2$ 的线性函数。将集合 $A = \{x \in \mathbb{R} : g(x) < f(x)\}$ 表示为区间。

<details>
<summary>参考答案</summary>

**解：**

先求 $f(x)$。$f$ 是线性函数 $f(x) = mx + b$：

$$m = \frac{2 - 4}{-1 - (-3)} = \frac{-2}{2} = -1$$

$f(x) = -x + b$，代入 $f(-3) = 4$：$3 + b = 4 \implies b = 1$。

所以 $f(x) = -x + 1$。

解 $g(x) < f(x)$：

$$-3x + 8 < -x + 1 \implies -2x < -7 \implies x > \frac{7}{2}$$

$$\boxed{A = \left(\frac{7}{2}, +\infty\right)}$$

**知识点：** 由两点确定线性函数；解线性不等式。

</details>

---

### 题目 4
**题目：** 设 $f(x) = \dfrac{-20x + 4}{kx + 10}$。求 $k \in \mathbb{R}$ 使得直线 $L: x = 2$ 是 $f$ 的垂直渐近线。

<details>
<summary>参考答案</summary>

**解：**

垂直渐近线出现在分母为零而分子不为零的位置。$x = 2$ 是垂直渐近线意味着：

$$k(2) + 10 = 0 \implies 2k = -10 \implies k = -5$$

验证：当 $k = -5$ 时，$f(x) = \dfrac{-20x + 4}{-5x + 10}$，在 $x = 2$ 处分母为 0，分子为 $-20(2) + 4 = -36 \neq 0$。

$$\boxed{k = -5}$$

**知识点：** 有理函数的垂直渐近线由分母零点（且分子不为零）决定。

</details>

---

### 题目 5
**题目：** 计算下列函数的差商并化简：

(a) $f(x) = 4 + 3x - x^3$，求 $\dfrac{f(3+h) - f(3)}{h}$

(b) $f(x) = x^3$，求 $\dfrac{f(a+h) - f(a)}{h}$

(c) $f(x) = \dfrac{1}{x}$，求 $\dfrac{f(x) - f(a)}{x - a}$

这个差商表示什么？

<details>
<summary>参考答案</summary>

**(a) 解：**

$f(3) = 4 + 9 - 27 = -14$

$f(3+h) = 4 + 3(3+h) - (3+h)^3 = 4 + 9 + 3h - (27 + 27h + 9h^2 + h^3)$

$= 13 + 3h - 27 - 27h - 9h^2 - h^3 = -14 - 24h - 9h^2 - h^3$

$$\frac{f(3+h) - f(3)}{h} = \frac{-24h - 9h^2 - h^3}{h} = -24 - 9h - h^2$$

**(b) 解：**

$$\frac{(a+h)^3 - a^3}{h} = \frac{a^3 + 3a^2h + 3ah^2 + h^3 - a^3}{h} = 3a^2 + 3ah + h^2$$

**(c) 解：**

$$\frac{\frac{1}{x} - \frac{1}{a}}{x - a} = \frac{\frac{a - x}{ax}}{x - a} = \frac{-(x-a)}{ax(x-a)} = -\frac{1}{ax}$$

**差商的含义：** 差商 $\dfrac{f(x+h)-f(x)}{h}$ 表示函数在两点间的**平均变化率**（即割线斜率），当 $h \to 0$ 时即为导数（切线斜率）。

**知识点：** 差商是导数定义的核心概念。

</details>

---

### 题目 6
**题目：** 考虑函数 $f(x) = \dfrac{2}{\sqrt{x^2 - 1}}$。

(a) 求其最大定义域和值域。

(b) 它是否是单射？

(c) 若是单射，求其到值域的反函数。

(d) 若不是单射，找一个使其为单射的定义域，并求反函数。

<details>
<summary>参考答案</summary>

**(a) 解：**

定义域要求 $x^2 - 1 > 0$（严格大于，因为在分母且在根号内），即 $x^2 > 1$，所以 $x \in (-\infty, -1) \cup (1, +\infty)$。

值域：当 $x^2 > 1$ 时，$\sqrt{x^2 - 1} > 0$，所以 $f(x) > 0$。当 $x \to \pm 1^+$ 时 $f(x) \to +\infty$；当 $x \to \pm\infty$ 时 $f(x) \to 0^+$。

值域为 $(0, +\infty)$。

**(b) 解：** 不是单射。因为 $f(x) = f(-x)$（偶函数），例如 $f(2) = f(-2) = \dfrac{2}{\sqrt{3}}$。

**(d) 解：** 限制定义域为 $(1, +\infty)$，此时 $f$ 是单射（严格递减）。

求反函数：$y = \dfrac{2}{\sqrt{x^2 - 1}}$

$$\sqrt{x^2 - 1} = \frac{2}{y} \implies x^2 - 1 = \frac{4}{y^2} \implies x^2 = 1 + \frac{4}{y^2} = \frac{y^2 + 4}{y^2}$$

因为 $x > 1$，取正根：$x = \dfrac{\sqrt{y^2 + 4}}{y}$

$$f^{-1}(y) = \frac{\sqrt{y^2 + 4}}{y}, \quad y \in (0, +\infty)$$

**知识点：** 偶函数不是单射；通过限制定义域可使函数变为单射从而存在反函数。

</details>

---

### 题目 7
**题目：** 对函数 $f(x) = \dfrac{2}{x^2 - 1}$ 回答上一题的所有问题。答案是否相同？

<details>
<summary>参考答案</summary>

**(a) 解：**

定义域：$x^2 - 1 \neq 0 \implies x \neq \pm 1$，即 $x \in (-\infty, -1) \cup (-1, 1) \cup (1, +\infty)$。

值域分析：
- 当 $|x| > 1$ 时，$x^2 - 1 > 0$，$f(x) > 0$，$f(x) \to 0^+$（$x \to \pm\infty$），$f(x) \to +\infty$（$x \to \pm 1^+$）。值域部分为 $(0, +\infty)$。
- 当 $|x| < 1$ 时，$x^2 - 1 < 0$，$f(x) < 0$，$f(0) = -2$ 为最大值，$f(x) \to -\infty$（$x \to \pm 1^-$）。值域部分为 $(-\infty, -2]$。

总值域：$(-\infty, -2] \cup (0, +\infty)$。

**(b) 解：** 不是单射。$f(x) = f(-x)$。

**(d) 解：** 限制在 $(1, +\infty)$ 上，$f$ 严格递减，是单射。

$y = \dfrac{2}{x^2 - 1} \implies x^2 - 1 = \dfrac{2}{y} \implies x = \sqrt{1 + \dfrac{2}{y}} = \sqrt{\dfrac{y+2}{y}}$

$$f^{-1}(y) = \sqrt{\frac{y+2}{y}}, \quad y \in (0, +\infty)$$

**答案不同：** 定义域、值域和反函数表达式都与题目 6 不同。

**知识点：** 根号的存在与否会显著改变函数的定义域和值域。

</details>

---

### 题目 8
**题目：** 求满足以下条件的二次函数 $f$：

(a) 顶点横坐标 $x_v = 2$

(b) $\text{Im}(f) = [5, +\infty)$

(c) $f(4) = 13$

<details>
<summary>参考答案</summary>

**解：**

由 (a) 和 (b)，顶点为 $(2, 5)$，开口向上，所以：

$$f(x) = a(x - 2)^2 + 5, \quad a > 0$$

由 (c)：$f(4) = a(4-2)^2 + 5 = 4a + 5 = 13 \implies a = 2$。

$$\boxed{f(x) = 2(x-2)^2 + 5 = 2x^2 - 8x + 13}$$

**知识点：** 二次函数顶点式 $f(x) = a(x - h)^2 + k$，其中 $(h, k)$ 为顶点。

</details>

---

### 题目 9
**题目：** 求函数 $f(x) = \dfrac{1}{1 - \tan x}$ 的定义域。

<details>
<summary>参考答案</summary>

**解：**

需要满足两个条件：
1. $\tan x$ 有定义：$x \neq \dfrac{\pi}{2} + k\pi$，$k \in \mathbb{Z}$
2. 分母不为零：$1 - \tan x \neq 0 \implies \tan x \neq 1 \implies x \neq \dfrac{\pi}{4} + k\pi$，$k \in \mathbb{Z}$

$$\boxed{\text{Dom}(f) = \mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi, \frac{\pi}{4} + k\pi : k \in \mathbb{Z}\right\}}$$

**知识点：** 三角函数的定义域限制；分母不为零。

</details>

---

### 题目 10
**题目：** 求函数 $f(x) = \dfrac{1 - e^x}{1 - e^{1-x^2}}$ 的定义域。

<details>
<summary>参考答案</summary>

**解：**

分母不为零：$1 - e^{1-x^2} \neq 0 \implies e^{1-x^2} \neq 1 \implies 1 - x^2 \neq 0 \implies x \neq \pm 1$。

分子和分母中的指数函数对所有实数都有定义。

$$\boxed{\text{Dom}(f) = \mathbb{R} \setminus \{-1, 1\}}$$

**知识点：** 指数函数 $e^x$ 对所有实数有定义；$e^u = 1 \iff u = 0$。

</details>

---

### 题目 11
**题目：** 设 $g(x) = |x^2 - 1| - |x^2 - 4|$。$g$ 是奇函数、偶函数还是都不是？它是单射吗？

<details>
<summary>参考答案</summary>

**解：**

**奇偶性：**

$$g(-x) = |(-x)^2 - 1| - |(-x)^2 - 4| = |x^2 - 1| - |x^2 - 4| = g(x)$$

所以 $g$ 是**偶函数**。

**单射性：** 因为 $g$ 是偶函数，$g(x) = g(-x)$，所以只要 $x \neq 0$，就有 $g(x) = g(-x)$ 但 $x \neq -x$，故 $g$ **不是单射**。

例如 $g(2) = |4-1| - |4-4| = 3$，$g(-2) = 3$，但 $2 \neq -2$。

**知识点：** 偶函数 $f(-x) = f(x)$ 不可能是单射（除非定义域只含 0）。

</details>

---

### 题目 12
**题目：** 求解下列方程中的 $x$：

(a) $e^{7-4x} = 6$

(b) $\ln(x^2 - 1) = 3$

(c) $e^{2x} - 3e^x + 2 = 0$

(d) $\ln(\ln(x)) = 1$

<details>
<summary>参考答案</summary>

**(a) 解：** 两边取自然对数：

$$7 - 4x = \ln 6 \implies x = \frac{7 - \ln 6}{4}$$

**(b) 解：** 两边取指数：

$$x^2 - 1 = e^3 \implies x^2 = e^3 + 1 \implies x = \pm\sqrt{e^3 + 1}$$

验证：$x^2 - 1 = e^3 > 0$，两个解都有效。

**(c) 解：** 令 $u = e^x$：

$$u^2 - 3u + 2 = 0 \implies (u-1)(u-2) = 0$$

$u = 1 \implies e^x = 1 \implies x = 0$

$u = 2 \implies e^x = 2 \implies x = \ln 2$

**(d) 解：** 两边取指数：

$$\ln(x) = e \implies x = e^e$$

验证：$\ln(e^e) = e$，$\ln(e) = 1$。正确。

**知识点：** 指数与对数互为逆运算；换元法解指数方程。

</details>

---

### 题目 13
**题目：** 求 $f + g$、$f \cdot g$ 和 $f \circ g$ 及其定义域。

(a) $f(x) = x^3 + 2x^2$，$g(x) = 3x^2 - 1$

<details>
<summary>参考答案</summary>

**解：**

$$(f+g)(x) = x^3 + 2x^2 + 3x^2 - 1 = x^3 + 5x^2 - 1, \quad \text{Dom} = \mathbb{R}$$

$$(f \cdot g)(x) = (x^3 + 2x^2)(3x^2 - 1) = 3x^5 + 6x^4 - x^3 - 2x^2, \quad \text{Dom} = \mathbb{R}$$

$$(f \circ g)(x) = f(g(x)) = (3x^2 - 1)^3 + 2(3x^2 - 1)^2$$

展开：$(3x^2 - 1)^2 = 9x^4 - 6x^2 + 1$

$(3x^2 - 1)^3 = (3x^2-1)(9x^4 - 6x^2 + 1) = 27x^6 - 18x^4 + 3x^2 - 9x^4 + 6x^2 - 1 = 27x^6 - 27x^4 + 9x^2 - 1$

$$(f \circ g)(x) = 27x^6 - 27x^4 + 9x^2 - 1 + 18x^4 - 12x^2 + 2 = 27x^6 - 9x^4 - 3x^2 + 1$$

定义域为 $\mathbb{R}$。

**知识点：** 多项式函数的和、积、复合仍为多项式，定义域为 $\mathbb{R}$。

</details>

---

### 题目 14
**题目：** 证明 $\cos(\sin^{-1}(x)) = \sqrt{1 - x^2}$。

<details>
<summary>参考答案</summary>

**解：**

设 $\theta = \sin^{-1}(x)$，则 $\sin\theta = x$，且 $\theta \in \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$。

由 $\sin^2\theta + \cos^2\theta = 1$：

$$\cos^2\theta = 1 - \sin^2\theta = 1 - x^2$$

因为 $\theta \in \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$，在此区间上 $\cos\theta \geq 0$，所以：

$$\cos\theta = \sqrt{1 - x^2}$$

即 $\cos(\sin^{-1}(x)) = \sqrt{1 - x^2}$。$\blacksquare$

**知识点：** 反三角函数的定义域和值域；基本三角恒等式。

</details>

---

### 题目 15
**题目：** 求 $f \circ g$、$g \circ f$、$f \circ f$ 和 $g \circ g$ 及其定义域。

(a) $f(x) = 3x + 5$，$g(x) = x^2 + x$

(b) $f(x) = \sqrt{x+1}$，$g(x) = 4x - 3$

<details>
<summary>参考答案</summary>

**(a) 解：**

$(f \circ g)(x) = f(x^2 + x) = 3(x^2 + x) + 5 = 3x^2 + 3x + 5$，Dom $= \mathbb{R}$

$(g \circ f)(x) = g(3x+5) = (3x+5)^2 + (3x+5) = 9x^2 + 30x + 25 + 3x + 5 = 9x^2 + 33x + 30$，Dom $= \mathbb{R}$

$(f \circ f)(x) = f(3x+5) = 3(3x+5) + 5 = 9x + 20$，Dom $= \mathbb{R}$

$(g \circ g)(x) = g(x^2+x) = (x^2+x)^2 + (x^2+x) = x^4 + 2x^3 + x^2 + x^2 + x = x^4 + 2x^3 + 2x^2 + x$，Dom $= \mathbb{R}$

**(b) 解：**

$f(x) = \sqrt{x+1}$ 的定义域为 $x \geq -1$。

$(f \circ g)(x) = f(4x-3) = \sqrt{4x-3+1} = \sqrt{4x-2}$，需要 $4x - 2 \geq 0 \implies x \geq \dfrac{1}{2}$。Dom $= \left[\dfrac{1}{2}, +\infty\right)$

$(g \circ f)(x) = g(\sqrt{x+1}) = 4\sqrt{x+1} - 3$，需要 $x \geq -1$。Dom $= [-1, +\infty)$

$(f \circ f)(x) = f(\sqrt{x+1}) = \sqrt{\sqrt{x+1}+1}$，需要 $x \geq -1$。Dom $= [-1, +\infty)$

$(g \circ g)(x) = g(4x-3) = 4(4x-3) - 3 = 16x - 15$，Dom $= \mathbb{R}$

**知识点：** 复合函数的定义域是使内层函数值落在外层函数定义域内的 $x$ 的集合。

</details>

---

### 题目 16
**题目：** 求下列函数的反函数：

(a) $f(x) = \sqrt{1 + \sqrt{2 + 3x}}$

(b) $f(x) = \dfrac{4x - 1}{2x + 3}$

<details>
<summary>参考答案</summary>

**(a) 解：**

$y = \sqrt{1 + \sqrt{2 + 3x}}$

$y^2 = 1 + \sqrt{2 + 3x}$

$y^2 - 1 = \sqrt{2 + 3x}$

$(y^2 - 1)^2 = 2 + 3x$

$x = \dfrac{(y^2 - 1)^2 - 2}{3}$

所以 $f^{-1}(x) = \dfrac{(x^2 - 1)^2 - 2}{3}$。

定义域：$f$ 的值域。$2 + 3x \geq 0 \implies x \geq -\dfrac{2}{3}$。当 $x = -\dfrac{2}{3}$ 时 $f = \sqrt{1+0} = 1$；$x \to +\infty$ 时 $f \to +\infty$。所以 $f^{-1}$ 定义域为 $[1, +\infty)$。

**(b) 解：**

$y = \dfrac{4x - 1}{2x + 3}$

$y(2x + 3) = 4x - 1$

$2xy + 3y = 4x - 1$

$2xy - 4x = -1 - 3y$

$x(2y - 4) = -(1 + 3y)$

$x = \dfrac{-(1 + 3y)}{2y - 4} = \dfrac{1 + 3y}{4 - 2y}$

$$f^{-1}(x) = \frac{3x + 1}{4 - 2x}$$

**知识点：** 求反函数的步骤：交换 $x, y$ 后解出 $y$；注意定义域和值域的互换。

</details>

---

### 题目 17
**题目：** 判断下列命题的真假：

设 $f: \mathbb{R} \to \mathbb{R}$ 为偶函数。若 $f(x)$ 在 $A^+ = [0, +\infty)$ 上递增，则它在 $A^- = (-\infty, 0]$ 上递减。

<details>
<summary>参考答案</summary>

**解：** 命题为**真**。

**证明：** 设 $x_1 < x_2 \leq 0$，则 $-x_1 > -x_2 \geq 0$。

因为 $f$ 在 $[0, +\infty)$ 上递增，且 $-x_1 > -x_2 \geq 0$：

$$f(-x_1) > f(-x_2)$$

又因为 $f$ 是偶函数，$f(-x_1) = f(x_1)$，$f(-x_2) = f(x_2)$：

$$f(x_1) > f(x_2)$$

即 $x_1 < x_2 \implies f(x_1) > f(x_2)$，所以 $f$ 在 $(-\infty, 0]$ 上递减。$\blacksquare$

**知识点：** 偶函数关于 $y$ 轴对称，一侧递增则另一侧递减。

</details>

---

### 题目 18
**题目：** 判断下列命题的真假：

设 $f: \mathbb{R} \to \mathbb{R}$ 为奇函数。若 $f(x)$ 在 $A^+ = [0, +\infty)$ 上递增，则它在 $A^- = (-\infty, 0]$ 上也递增。

<details>
<summary>参考答案</summary>

**解：** 命题为**真**。

**证明：** 设 $x_1 < x_2 \leq 0$，则 $-x_1 > -x_2 \geq 0$。

因为 $f$ 在 $[0, +\infty)$ 上递增：

$$f(-x_1) > f(-x_2)$$

因为 $f$ 是奇函数，$f(-x) = -f(x)$：

$$-f(x_1) > -f(x_2) \implies f(x_1) < f(x_2)$$

即 $x_1 < x_2 \implies f(x_1) < f(x_2)$，所以 $f$ 在 $(-\infty, 0]$ 上也递增。$\blacksquare$

**知识点：** 奇函数关于原点对称，两侧单调性相同。

</details>

---

### 题目 19
**题目：** 确定函数 $f(x) = \begin{cases} x^2, & x \leq 0 \\ 1 - x, & x > 0 \end{cases}$ 的递增和递减区间。

<details>
<summary>参考答案</summary>

**解：**

- 当 $x \leq 0$ 时，$f(x) = x^2$。$x^2$ 在 $(-\infty, 0]$ 上递减（$x$ 越负，$x^2$ 越大）。
- 当 $x > 0$ 时，$f(x) = 1 - x$。这是斜率为 $-1$ 的直线，在 $(0, +\infty)$ 上递减。
- 在 $x = 0$ 处：$f(0) = 0$，$\lim_{x \to 0^+} f(x) = 1$。函数在 $x = 0$ 处有跳跃。

检查整体单调性：
- 在 $(-\infty, 0]$ 上递减
- 在 $(0, +\infty)$ 上递减
- 但 $f(0) = 0 < 1 = \lim_{x \to 0^+} f(x)$，所以从 $x=0$ 到 $x>0$ 是"跳升"的

**递增区间：** 无（函数整体不递增）

**递减区间：** $(-\infty, 0]$ 和 $(0, +\infty)$ 分别递减，但整体在 $\mathbb{R}$ 上不是递减的（因为 $f(0) = 0 < f(0.5) = 0.5$）。

**知识点：** 分段函数的单调性需要逐段分析，并注意分段点处的连续性。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了函数理论的核心内容：

1. **函数建模**：将几何、物理问题转化为函数表达式，利用约束条件消元。
2. **差商与导数**：差商 $\dfrac{f(x+h)-f(x)}{h}$ 是导数的定义，表示平均变化率。
3. **定义域与值域**：注意分母不为零、根号内非负、对数真数大于零等限制。
4. **单射与反函数**：偶函数不是单射；通过限制定义域可使函数存在反函数。
5. **复合函数**：$(f \circ g)(x) = f(g(x))$，定义域需同时满足内外层要求。
6. **奇偶函数**：偶函数 $f(-x)=f(x)$ 关于 $y$ 轴对称；奇函数 $f(-x)=-f(x)$ 关于原点对称。
7. **指数与对数**：互为逆运算，$e^{\ln x} = x$，$\ln(e^x) = x$。
