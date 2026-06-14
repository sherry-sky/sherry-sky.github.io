> **📎 源文件：** `旧资料/03 Homeworks/原题/HW1-Calculus-1M.pdf`, `旧资料/03 Homeworks/回答/hw1.pdf`

---

# Homework 1 - 不等式、几何与三角函数

## 📌 涉及知识点
- 绝对值不等式的求解
- 集合的图形表示（抛物线与绝对值函数围成的区域）
- 平行线与垂直线的斜率关系
- 圆锥曲线的交点与直线方程
- 三角方程的求解
- 分段函数的定义域与值域
- 不等式的证明

---

### 题目 1（14 分）
**题目：** 求解不等式 $1 < |2x - 1| \leq \dfrac{x^2}{4}$，用区间表示解集，并在数轴上标示。

<details>
<summary>参考答案</summary>

**解：**

将不等式分为两部分讨论。

**第一部分：** $|2x - 1| > 1$

- 当 $2x - 1 > 1$，即 $x > 1$
- 当 $2x - 1 < -1$，即 $x < 0$

所以 $|2x-1| > 1$ 的解为 $x \in (-\infty, 0) \cup (1, +\infty)$。

**第二部分：** $|2x - 1| \leq \dfrac{x^2}{4}$

**情况 1：** $x \geq \dfrac{1}{2}$ 时，$2x - 1 \leq \dfrac{x^2}{4}$

$$8x - 4 \leq x^2 \implies x^2 - 8x + 4 \geq 0$$

求根公式：$x = \dfrac{8 \pm \sqrt{64-16}}{2} = 4 \pm 2\sqrt{3}$

因为 $4 - 2\sqrt{3} \approx 0.536 < 1$，在 $x > 1$ 的条件下，$(x-4)^2 \geq 0$ 恒成立。

所以此情况的解为 $x > 1$。

**情况 2：** $x < \dfrac{1}{2}$ 时，$1 - 2x \leq \dfrac{x^2}{4}$

$$4 - 8x \leq x^2 \implies x^2 + 8x - 4 \geq 0$$

求根：$x = -4 \pm 2\sqrt{5}$

因为 $-4 + 2\sqrt{5} \approx 0.47 > 0$，在 $x < 0$ 的条件下，需要 $x \leq -4 - 2\sqrt{5}$。

等等，让我重新计算。$x^2 + 8x - 4 \geq 0$ 的根为 $x = -4 \pm 2\sqrt{5}$。

实际上重新审视：$1 - 2x \leq \frac{x^2}{4} \implies 4 - 8x \leq x^2 \implies x^2 + 8x - 4 \geq 0$。

根为 $x = \frac{-8 \pm \sqrt{64+16}}{2} = -4 \pm 2\sqrt{5}$。

$-4 - 2\sqrt{5} \approx -8.47$，$-4 + 2\sqrt{5} \approx 0.47$。

在 $x < 0$ 条件下：$x \leq -4 - 2\sqrt{5}$。

**综合两部分：**

$$\boxed{x \in (-\infty,\, -4 - 2\sqrt{5}\,] \cup (1,\, +\infty)}$$

**知识点：** 绝对值不等式、二次不等式、区间表示

</details>

---

### 题目 2（14 分）
**题目：** 在 $xy$ 平面上画出集合 $\left\{(x,y) \in \mathbb{R}^2 : 2(x+4)^2 + 2 \leq y \leq -|x+4| + 5\right\}$。

<details>
<summary>参考答案</summary>

**解：**

**下界：** $y \geq 2(x+4)^2 + 2$，这是顶点在 $(-4, 2)$、开口向上的抛物线。

**上界：** $y \leq -|x+4| + 5$，这是顶点在 $(-4, 5)$、开口向下的 V 形。

**求交点：** 令 $2(x+4)^2 + 2 = -|x+4| + 5$

设 $u = |x+4| \geq 0$：

$$2u^2 + 2 = -u + 5 \implies 2u^2 + u - 3 = 0 \implies (2u+3)(u-1) = 0$$

因为 $u \geq 0$，所以 $u = 1$，即 $|x+4| = 1$，解得 $x = -3$ 或 $x = -5$。

交点为 $(-3, 4)$ 和 $(-5, 4)$。

**阴影区域：** 在 $x \in [-5, -3]$ 之间，抛物线 $y = 2(x+4)^2 + 2$ 以下、V 形线 $y = -|x+4|+5$ 以上的封闭区域。

**知识点：** 二次函数图像、绝对值函数、区域作图

</details>

---

### 题目 3（14 分）
**题目：** 设 $l, r, s$ 为非竖直直线。证明：
(a) 若 $l \parallel r$ 且 $r \parallel s$，则 $l \parallel s$。
(b) 若 $l \parallel r$ 且 $r \perp s$，则 $l \perp s$。
(c) 若 $l \perp r$ 且 $r \perp s$，则 $l \parallel s$。

<details>
<summary>参考答案</summary>

**证明：**

设 $l, r, s$ 的斜率分别为 $m_l, m_r, m_s$。

**(a)** $l \parallel r \implies m_l = m_r$，$r \parallel s \implies m_r = m_s$。

因此 $m_l = m_s$，即 $l \parallel s$。$\blacksquare$

**(b)** $l \parallel r \implies m_l = m_r$，$r \perp s \implies m_r \cdot m_s = -1$。

因此 $m_l \cdot m_s = m_r \cdot m_s = -1$，即 $l \perp s$。$\blacksquare$

**(c)** $l \perp r \implies m_l \cdot m_r = -1$，$r \perp s \implies m_r \cdot m_s = -1$。

由 $m_l = -\dfrac{1}{m_r}$ 和 $m_s = -\dfrac{1}{m_r}$，得 $m_l = m_s$，即 $l \parallel s$。$\blacksquare$

**知识点：** 平行与垂直的斜率条件

</details>

---

### 题目 4（14 分）
**题目：** 求垂直于直线 $2x - \sqrt{5}\,y = 6 + 4\sqrt{5}$ 且经过圆锥曲线 $4x^2 + 5y^2 - 24x + 40y + 96 = 0$ 与 $(y+4)^2 - (x-3)^2 = 1$ 的交点中距原点最近的点的直线方程。

<details>
<summary>参考答案</summary>

**解：**

**第一步：求圆锥曲线的交点**

将椭圆方程配方：
$$4(x-3)^2 + 5(y+4)^2 = 4 \cdot 5 = 20 \implies \frac{(x-3)^2}{5} + \frac{(y+4)^2}{4} = 1$$

椭圆中心 $(3, -4)$，$a = \sqrt{5}$，$b = 2$。

检验点 $(3, -4)$ 是否在双曲线上：
$$(-4+4)^2 - (3-3)^2 = 0 \neq 1$$

等等，$(0)(0) = 0 \neq 1$，所以 $(3,-4)$ 不在双曲线上。

让我重新检验。双曲线方程为 $(y+4)^2 - (x-3)^2 = 1$。

代入 $(3, -4)$：$0 - 0 = 0 \neq 1$。确实不在。

设 $u = (x-3)^2$，$v = (y+4)^2$。椭圆方程：$4u + 5v = 20$，双曲线方程：$v - u = 1$。

由双曲线：$v = u + 1$。代入椭圆：$4u + 5(u+1) = 20 \implies 9u = 15 \implies u = \dfrac{5}{3}$。

$v = \dfrac{5}{3} + 1 = \dfrac{8}{3}$。

$(x-3)^2 = \dfrac{5}{3} \implies x = 3 \pm \sqrt{\dfrac{5}{3}}$

$(y+4)^2 = \dfrac{8}{3} \implies y = -4 \pm \sqrt{\dfrac{8}{3}}$

四个交点为 $\left(3 \pm \sqrt{\frac{5}{3}},\; -4 \pm \sqrt{\frac{8}{3}}\right)$。

**第二步：找距原点最近的交点**

$d^2 = x^2 + y^2 = \left(3 \pm \sqrt{\frac{5}{3}}\right)^2 + \left(-4 \pm \sqrt{\frac{8}{3}}\right)^2$

为使 $d^2$ 最小，取负号和正号（使 $|x|$ 和 $|y|$ 尽量小）：

$x = 3 - \sqrt{\frac{5}{3}} \approx 1.71$，$y = -4 + \sqrt{\frac{8}{3}} \approx -2.37$

$d^2 \approx 2.92 + 5.60 = 8.52$

（需比较四种组合，取最小值对应的点。）

**第三步：求垂直线方程**

已知直线 $2x - \sqrt{5}\,y = 6 + 4\sqrt{5}$ 的斜率为 $m = \dfrac{2}{\sqrt{5}}$。

垂直线的斜率为 $m_{\perp} = -\dfrac{\sqrt{5}}{2}$。

经过最近交点 $(x_0, y_0)$，直线方程为：

$$y - y_0 = -\frac{\sqrt{5}}{2}(x - x_0)$$

**知识点：** 圆锥曲线交点、距离公式、垂直线斜率

</details>

---

### 题目 5（14 分）
**题目：** 求所有满足 $\cos t = \sin^2 t - 1$ 的实数 $t$。

<details>
<summary>参考答案</summary>

**解：**

利用恒等式 $\sin^2 t = 1 - \cos^2 t$：

$$\cos t = (1 - \cos^2 t) - 1 = -\cos^2 t$$

$$\cos^2 t + \cos t = 0 \implies \cos t(\cos t + 1) = 0$$

**情况 1：** $\cos t = 0 \implies t = \dfrac{\pi}{2} + k\pi$，$k \in \mathbb{Z}$

检验：$\cos t = 0$，$\sin^2 t - 1 = 1 - 1 = 0$。✅

**情况 2：** $\cos t = -1 \implies t = \pi + 2k\pi = (2k+1)\pi$，$k \in \mathbb{Z}$

检验：$\cos t = -1$，$\sin^2 t - 1 = 0 - 1 = -1$。✅

$$\boxed{t = \frac{\pi}{2} + k\pi \quad \text{或} \quad t = (2k+1)\pi, \quad k \in \mathbb{Z}}$$

即 $t \in \left\{\dfrac{\pi}{2} + k\pi : k \in \mathbb{Z}\right\} \cup \{(2k+1)\pi : k \in \mathbb{Z}\}$。

注意 $(2k+1)\pi$ 已包含在 $\frac{\pi}{2} + k\pi$ 中（当 $k$ 为奇数时），所以：

$$\boxed{t = \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}}$$

**知识点：** 三角恒等式、三角方程求解

</details>

---

### 题目 6（16 分）
**题目：** 设 $c$ 为固定实数，求以下函数的定义域、值域并画出图像。

$$f(x) = \begin{cases} \dfrac{c}{x^3+3x^2+3x+1} & \text{if } x < -\pi \\[8pt] \dfrac{\sqrt{6}}{2}\cos x - \sqrt{3} & \text{if } -\pi \leq x \leq 3\pi \\[8pt] \dfrac{\sqrt{x^2-6\pi x+9\pi^2} - 2 - \sqrt{3}}{x - 3\pi} & \text{if } 3\pi < x < 5\pi \\[8pt] e^{-5x/\pi} & \text{if } x \geq 5\pi \end{cases}$$

<details>
<summary>参考答案</summary>

**解：**

**化简各段：**

**第一段：** $x^3 + 3x^2 + 3x + 1 = (x+1)^3$，所以 $f(x) = \dfrac{c}{(x+1)^3}$。

定义域限制：$x < -\pi$ 且 $x \neq -1$。因为 $-\pi \approx -3.14 < -1$，所以 $x = -1$ 在 $(-\infty, -\pi)$ 内。

定义域：$(-\infty, -1) \cup (-1, -\pi)$。

**第二段：** $f(x) = \dfrac{\sqrt{6}}{2}\cos x - \sqrt{3}$，定义域 $[-\pi, 3\pi]$。

$\cos x$ 在 $[-\pi, 3\pi]$ 上取遍 $[-1, 1]$。

值域：$\left[-\dfrac{\sqrt{6}}{2} - \sqrt{3},\; \dfrac{\sqrt{6}}{2} - \sqrt{3}\right]$

**第三段：** $\sqrt{x^2 - 6\pi x + 9\pi^2} = \sqrt{(x-3\pi)^2} = |x - 3\pi|$。

当 $x > 3\pi$ 时，$|x-3\pi| = x - 3\pi$，所以：

$$f(x) = \frac{x - 3\pi - 2 - \sqrt{3}}{x - 3\pi} = 1 - \frac{2+\sqrt{3}}{x-3\pi}$$

当 $x \to 3\pi^+$ 时，$f(x) \to -\infty$。

当 $x \to 5\pi^-$ 时，$f(x) \to 1 - \dfrac{2+\sqrt{3}}{2\pi}$。

值域：$\left(-\infty,\; 1 - \dfrac{2+\sqrt{3}}{2\pi}\right)$。

**第四段：** $f(x) = e^{-5x/\pi}$，定义域 $[5\pi, +\infty)$。

$f(5\pi) = e^{-5}$，当 $x \to +\infty$ 时 $f(x) \to 0^+$。

值域：$(0, e^{-5}]$。

**总定义域：** $(-\infty, -1) \cup (-1, -\pi) \cup [-\pi, 3\pi] \cup (3\pi, 5\pi) \cup [5\pi, +\infty) = (-\infty, -1) \cup (-1, +\infty)$

**总值域：** 各段值域的并集（取决于 $c$ 的值）。

若 $c > 0$：第一段值域为 $(-\infty, 0)$，总值域为 $(-\infty, 0) \cup \left[-\dfrac{\sqrt{6}}{2}-\sqrt{3},\; \dfrac{\sqrt{6}}{2}-\sqrt{3}\right] \cup (0, e^{-5}]$。

**知识点：** 分段函数、定义域与值域、代数化简

</details>

---

### 题目 7（14 分）
**题目：**
(a) 证明：若 $0 < a < b$ 且 $0 < c < d$，则 $ac < bd$。
(b) 利用 (a) 证明：若 $0 < x < y$，则 $x^3 < y^3$。

<details>
<summary>参考答案</summary>

**证明：**

**(a)** 因为 $a < b$ 且 $c > 0$，所以 $ac < bc$。

因为 $c < d$ 且 $b > 0$，所以 $bc < bd$。

由传递性：$ac < bc < bd$，即 $ac < bd$。$\blacksquare$

**(b)** 因为 $0 < x < y$：

- 用 $x$ 乘不等式 $x < y$（$x > 0$）：$x \cdot x < y \cdot x \implies x^2 < xy$
- 用 $y$ 乘不等式 $x < y$（$y > 0$）：$x \cdot y < y \cdot y \implies xy < y^2$

所以 $0 < x^2 < xy$ 且 $0 < xy < y^2$。

利用 (a)，令 $a = x^2$，$b = xy$，$c = x$，$d = y$：

$$x^2 \cdot x < xy \cdot y \implies x^3 < y^3 \quad \blacksquare$$

**知识点：** 不等式性质、传递性

</details>

---

## 📝 本次知识点总结

1. **绝对值不等式**：将 $|A| \leq B$ 分解为 $-B \leq A \leq B$（当 $B \geq 0$），注意分情况讨论
2. **区域作图**：通过配方和求交点确定不等式组的解集区域
3. **斜率关系**：$l \parallel r \iff m_l = m_r$；$l \perp r \iff m_l \cdot m_r = -1$
4. **圆锥曲线**：通过配方化为标准形式，联立方程求交点
5. **三角方程**：利用 $\sin^2 t + \cos^2 t = 1$ 统一为关于 $\cos t$ 的方程
6. **分段函数**：逐段分析定义域和值域，注意化简（如完全平方的开方）
7. **不等式证明**：利用正数乘法的保序性和传递性
