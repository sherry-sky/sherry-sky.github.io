> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week2.pdf`

---

# Tutorial 2 - 函数、差商、定义域、复合函数与反函数

## 📌 知识点梳理
- 隐函数与显函数的判定
- 差商（difference quotient）的计算
- 函数定义域的确定
- 三角函数的值域与周期
- 单调性、奇偶性
- 复合函数的定义域与值域
- 反函数的存在性与求法

---

### 题目 1（核心题）

**题目：** 判断下列方程是否定义了 $y$ 关于 $x$ 的函数。

**(a)** $x + y = 1$ **(b)** $x^2 + y^2 = 1$ **(c)** $x^3 + y^3 = 1$ **(d)** $x^2 + y = 1$ **(e)** $x + y^2 = 1$ **(f)** $x^2 + y^3 = 1$ **(g)** $xy = 1$ **(h)** $xy = -2$ **(i)** $xy = 0$

<details>
<summary>参考答案</summary>

**解：**

逐一判断能否将 $y$ 唯一表示为 $x$ 的函数：

| 方程 | 是否为函数 | 理由 |
|------|-----------|------|
| (a) $x + y = 1$ | ✅ 是 | $y = 1 - x$ |
| (b) $x^2 + y^2 = 1$ | ❌ 否 | $y = \pm\sqrt{1 - x^2}$，一个 $x$ 对应两个 $y$ |
| (c) $x^3 + y^3 = 1$ | ✅ 是 | $y = \sqrt[3]{1 - x^3}$，立方根唯一 |
| (d) $x^2 + y = 1$ | ✅ 是 | $y = 1 - x^2$ |
| (e) $x + y^2 = 1$ | ❌ 否 | $y = \pm\sqrt{1 - x}$ |
| (f) $x^2 + y^3 = 1$ | ✅ 是 | $y = \sqrt[3]{1 - x^2}$ |
| (g) $xy = 1$ | ✅ 是 | $y = \frac{1}{x}$（$x \neq 0$） |
| (h) $xy = -2$ | ✅ 是 | $y = -\frac{2}{x}$（$x \neq 0$） |
| (i) $xy = 0$ | ❌ 否 | 当 $x = 0$ 时，$y$ 可取任意值 |

**知识点：** 函数的定义要求每个 $x$ 值对应唯一的 $y$ 值。偶数次幂导致多值，奇数次幂（如立方根）保持单值。

</details>

---

### 题目 2

**题目：** 计算下列函数的差商并化简。

**(a)** $f(x) = 4 + 3x - x^3$，求 $\frac{f(3+h) - f(3)}{h}$

**(b)** $f(x) = 2x^3$，求 $\frac{f(x_0 + h) - f(x_0)}{h}$

**(c)** $f(x) = \frac{1}{x}$，求 $\frac{f(x) - f(x_0)}{x - x_0}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f(3) = 4 + 9 - 27 = -14$

$$f(3+h) = 4 + 3(3+h) - (3+h)^3 = 4 + 9 + 3h - (27 + 27h + 9h^2 + h^3) = -14 - 24h - 9h^2 - h^3$$

$$\frac{f(3+h) - f(3)}{h} = \frac{-24h - 9h^2 - h^3}{h} = \boxed{-24 - 9h - h^2}$$

**(b)** $f(x_0 + h) = 2(x_0 + h)^3 = 2(x_0^3 + 3x_0^2 h + 3x_0 h^2 + h^3)$

$$\frac{f(x_0+h) - f(x_0)}{h} = \frac{6x_0^2 h + 6x_0 h^2 + 2h^3}{h} = \boxed{6x_0^2 + 6x_0 h + 2h^2}$$

**(c)** $\frac{f(x) - f(x_0)}{x - x_0} = \frac{\frac{1}{x} - \frac{1}{x_0}}{x - x_0} = \frac{\frac{x_0 - x}{x \cdot x_0}}{x - x_0} = \boxed{-\frac{1}{x \cdot x_0}}$

差商表示函数在两点之间的平均变化率，当 $h \to 0$（或 $x \to x_0$）时即为导数。

**知识点：** 差商是导数的基础，当增量趋于零时差商的极限即为导数。

</details>

---

### 题目 3

**题目：** 设 $f(x) = x^2 + 1$。求在 $x = 1$ 和 $x = 1 + h$ 处与 $f$ 的图像相交的直线方程。

<details>
<summary>参考答案</summary>

**解：**

两交点为 $(1, f(1)) = (1, 2)$ 和 $(1+h, f(1+h)) = (1+h, (1+h)^2 + 1) = (1+h, h^2 + 2h + 2)$。

斜率：
$$m = \frac{(h^2 + 2h + 2) - 2}{(1+h) - 1} = \frac{h^2 + 2h}{h} = h + 2$$

直线方程（过 $(1, 2)$）：
$$\boxed{y = (h + 2)(x - 1) + 2 = (h+2)x - h}$$

**知识点：** 割线（secant line）的斜率即为差商，当 $h \to 0$ 时趋于切线斜率。

</details>

---

### 题目 4

**题目：** 用一块 $12 \times 20$ 英寸的矩形纸板（无盖），从四角各切去边长为 $x$ 的正方形后折成盒子。将体积 $V$ 表示为 $x$ 的函数。

<details>
<summary>参考答案</summary>

**解：**

切去四角后折起：
- 长：$20 - 2x$
- 宽：$12 - 2x$
- 高：$x$

$$\boxed{V(x) = x(20 - 2x)(12 - 2x), \quad 0 < x < 6}$$

**知识点：** 建立实际问题的函数模型，注意定义域的限制。

</details>

---

### 题目 5（核心题）

**题目：** 求下列函数的定义域。

**(a)** $f(x) = \frac{x}{2x - 1} + \frac{1}{x - 2}$

**(b)** $g(x) = \frac{x}{x^2 - 25}$

**(c)** $h(x) = \frac{1}{1 + \frac{1}{1 - x}}$

**(d)** $j(x) = \sqrt{\sin x}$

**(e)** $k(x) = \sqrt{-t - 1} + \sqrt{t + 2}$（变量为 $t$）

**(f)** $l(x) = \sqrt{\frac{1}{e^x - 2}}$

**(g)** $u(x) = \frac{\sqrt{x} - 1}{x - 1}$

**(h)** $v(x) = \sqrt{\frac{1 + \sin x}{1 + \cos x}}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 分母不为零：$2x - 1 \neq 0$ 且 $x - 2 \neq 0$，即 $x \neq \frac{1}{2}$ 且 $x \neq 2$。

$$\boxed{\mathbb{R} \setminus \left\{\frac{1}{2},\; 2\right\}}$$

**(b)** $x^2 - 25 \neq 0 \implies x \neq \pm 5$。

$$\boxed{\mathbb{R} \setminus \{-5,\; 5\}}$$

**(c)** 需要 $1 - x \neq 0$（即 $x \neq 1$）且 $1 + \frac{1}{1-x} \neq 0$。

$$1 + \frac{1}{1-x} = 0 \implies \frac{1}{1-x} = -1 \implies 1 - x = -1 \implies x = 2$$

$$\boxed{\mathbb{R} \setminus \{1,\; 2\}}$$

**(d)** 需要 $\sin x \geq 0$，即 $x \in [2k\pi,\; (2k+1)\pi]$，$k \in \mathbb{Z}$。

$$\boxed{\bigcup_{k \in \mathbb{Z}} [2k\pi,\; (2k+1)\pi]}$$

**(e)** 需要 $-t - 1 \geq 0 \implies t \leq -1$ 且 $t + 2 \geq 0 \implies t \geq -2$。

$$\boxed{[-2,\; -1]}$$

**(f)** 需要 $e^x - 2 > 0 \implies e^x > 2 \implies x > \ln 2$。

$$\boxed{(\ln 2,\; +\infty)}$$

**(g)** 需要 $x \geq 0$ 且 $x - 1 \neq 0$，即 $x \geq 0$ 且 $x \neq 1$。

$$\boxed{[0,\; 1) \cup (1,\; +\infty)}$$

**(h)** 需要 $\frac{1 + \sin x}{1 + \cos x} \geq 0$ 且 $1 + \cos x \neq 0$。

因为 $1 + \sin x \geq 0$（$\sin x \geq -1$），$1 + \cos x \geq 0$（$\cos x \geq -1$），且 $1 + \cos x = 0$ 当 $x = (2k+1)\pi$。

所以只需 $1 + \cos x \neq 0$，即 $x \neq (2k+1)\pi$。

$$\boxed{\mathbb{R} \setminus \{(2k+1)\pi : k \in \mathbb{Z}\}}$$

**知识点：** 定义域需考虑分母不为零、偶次根号下非负、对数参数为正等约束。

</details>

---

### 题目 6

**题目：** 求下列函数的值域和周期。

**(a)** $f_1(x) = \sin(2x)$ **(b)** $f_2(x) = 2\sin(x)$ **(c)** $f_3(x) = \cos\left(\frac{x}{3}\right)$ **(d)** $f_4(x) = 1 - \sin^2\left(\frac{3x}{4}\right)$

<details>
<summary>参考答案</summary>

**解：**

| 函数 | 值域 | 周期 |
|------|------|------|
| (a) $\sin(2x)$ | $[-1, 1]$ | $T = \frac{2\pi}{2} = \pi$ |
| (b) $2\sin(x)$ | $[-2, 2]$ | $T = 2\pi$ |
| (c) $\cos\left(\frac{x}{3}\right)$ | $[-1, 1]$ | $T = \frac{2\pi}{1/3} = 6\pi$ |
| (d) $1 - \sin^2\left(\frac{3x}{4}\right) = \cos^2\left(\frac{3x}{4}\right)$ | $[0, 1]$ | $T = \frac{2\pi}{3/4} = \frac{8\pi}{3}$ |

**知识点：** $A\sin(\omega x + \varphi)$ 的值域为 $[-|A|, |A|]$，周期 $T = \frac{2\pi}{|\omega|}$。

</details>

---

### 题目 7

**题目：** 设 $f(x) = x^2$，$x \in [0, +\infty)$。证明 $f$ 是递增的。

<details>
<summary>参考答案</summary>

**证明：**

设 $0 \leq x < y$，则：
$$y^2 - x^2 = (y - x)(y + x)$$

因为 $y > x \geq 0$，所以 $y - x > 0$ 且 $y + x > 0$，故 $y^2 - x^2 > 0$，即 $x^2 < y^2$。

因此 $f$ 在 $[0, +\infty)$ 上严格递增。$\blacksquare$

**知识点：** 利用因式分解证明单调性。

</details>

---

### 题目 9

**题目：** 设分段函数 $f(x) = \begin{cases} x^2 + 2x & \text{if } x \geq 0 \\ -x^2 + 2x & \text{if } x < 0 \end{cases}$

**(a)** 求值域 **(b)** 判断单调性 **(c)** 判断奇偶性

<details>
<summary>参考答案</summary>

**解：**

**(a)** 当 $x \geq 0$ 时：$f(x) = x^2 + 2x = (x+1)^2 - 1$，在 $[0, +\infty)$ 上递增，$f(0) = 0$，值域为 $[0, +\infty)$。

当 $x < 0$ 时：$f(x) = -x^2 + 2x = -(x-1)^2 + 1$，在 $(-\infty, 0)$ 上递增（因为顶点 $x=1$ 不在该区间内，且 $f'(x) = -2x + 2 > 0$ 对 $x < 0$），$f(x) \to -\infty$（$x \to -\infty$），$f(x) \to 0$（$x \to 0^-$），值域为 $(-\infty, 0)$。

$$\boxed{\text{值域为 } \mathbb{R}}$$

**(b)** 在 $(-\infty, 0)$ 上 $f'(x) = -2x + 2 > 0$（递增），在 $[0, +\infty)$ 上 $f'(x) = 2x + 2 > 0$（递增），且 $f$ 在 $x = 0$ 处连续（$f(0) = 0$），所以 $f$ 在 $\mathbb{R}$ 上严格递增。

**(c)** 当 $x > 0$ 时：$f(-x) = -(-x)^2 + 2(-x) = -x^2 - 2x = -(x^2 + 2x) = -f(x)$。

当 $x = 0$ 时：$f(0) = 0$。

因此 $f$ 是奇函数。

**知识点：** 分段函数逐段分析，拼接处需验证连续性和一致性。

</details>

---

### 题目 10

**题目：** 设 $f(x) = |x^2 - 16|$。

**(a)** 写出 $f(x)$ 的分段表达式 **(b)** 确定递增和递减区间 **(c)** 画出图像

<details>
<summary>参考答案</summary>

**解：**

**(a)** $x^2 - 16 \geq 0 \iff |x| \geq 4$，所以：

$$f(x) = \begin{cases} x^2 - 16 & \text{if } x \leq -4 \text{ 或 } x \geq 4 \\ -(x^2 - 16) = 16 - x^2 & \text{if } -4 < x < 4 \end{cases}$$

**(b)**
- $x \leq -4$：$f(x) = x^2 - 16$，$f'(x) = 2x < 0$，递减
- $-4 < x < 0$：$f(x) = 16 - x^2$，$f'(x) = -2x > 0$，递增
- $0 < x < 4$：$f(x) = 16 - x^2$，$f'(x) = -2x < 0$，递减
- $x \geq 4$：$f(x) = x^2 - 16$，$f'(x) = 2x > 0$，递增

$$\boxed{\text{递减区间：} (-\infty, -4] \cup [0, 4]；\text{递增区间：} [-4, 0] \cup [4, +\infty)}$$

**知识点：** 绝对值函数的分段处理，各段独立分析单调性。

</details>

---

### 题目 13（核心题）

**题目：** 求 $f \circ g$ 和 $g \circ f$，及其定义域和值域。

**(a)** $f(x) = \sin x$，$g(x) = |x|$

**(c)** $f(x) = 2\ln x$，$g(x) = e^x$

**(d)** $f(x) = |2x + 1|$，$g(x) = \sqrt{-x + 5}$

<details>
<summary>参考答案</summary>

**解：**

**(a)**
- $f(g(x)) = \sin(|x|)$，定义域 $\mathbb{R}$，值域 $[-1, 1]$
- $g(f(x)) = |\sin x|$，定义域 $\mathbb{R}$，值域 $[0, 1]$

**(c)**
- $f(g(x)) = 2\ln(e^x) = 2x$，定义域 $\mathbb{R}$，值域 $\mathbb{R}$
- $g(f(x)) = e^{2\ln x} = x^2$，定义域 $(0, +\infty)$，值域 $(0, +\infty)$

**(d)**
- $f(g(x)) = |2\sqrt{-x+5} + 1|$，需要 $-x + 5 \geq 0 \implies x \leq 5$。因为 $\sqrt{-x+5} \geq 0$，所以 $2\sqrt{-x+5} + 1 > 0$，故 $f(g(x)) = 2\sqrt{-x+5} + 1$。定义域 $(-\infty, 5]$，值域 $[1, +\infty)$。
- $g(f(x)) = \sqrt{-|2x+1| + 5}$，需要 $|2x+1| \leq 5 \implies -3 \leq x \leq 2$。定义域 $[-3, 2]$，值域 $[0, \sqrt{5}]$。

**知识点：** 复合函数的定义域由内层函数的值域必须落在外层函数定义域中决定。

</details>

---

### 题目 16（核心题）

**题目：** 证明下列函数是一一映射，并求反函数。

**(a)** $f(x) = mx + b$

**(b)** $f(x) = \begin{cases} 2x + 1 & \text{if } x \leq 1 \\ 2 + \sqrt{x} & \text{if } x > 1 \end{cases}$

**(c)** $f(x) = 1 - 4^{-x/2}$

**(e)** $f(x) = \ln(e^x - 2)$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 当 $m \neq 0$ 时，$f$ 是线性函数，严格单调，故为一一映射。

$y = mx + b \implies x = \frac{y - b}{m}$，所以 $f^{-1}(x) = \frac{x - b}{m}$。

**(b)** $x \leq 1$ 时 $f(x) = 2x + 1 \leq 3$，严格递增；$x > 1$ 时 $f(x) = 2 + \sqrt{x} > 2 + 1 = 3$，严格递增。两段值域不重叠，故整体一一映射。

反函数：
$$f^{-1}(x) = \begin{cases} \frac{x - 1}{2} & \text{if } x \leq 3 \\ (x - 2)^2 & \text{if } x > 3 \end{cases}$$

**(c)** $f(x) = 1 - 4^{-x/2} = 1 - 2^{-x} = 1 - \left(\frac{1}{2}\right)^x$。因为 $\left(\frac{1}{2}\right)^x$ 严格递减，所以 $f$ 严格递增，为一一映射。

$y = 1 - 2^{-x} \implies 2^{-x} = 1 - y \implies -x = \log_2(1 - y) \implies x = -\log_2(1 - y)$

$$f^{-1}(x) = -\log_2(1 - x), \quad x \in (-\infty, 1)$$

**(e)** 定义域：$e^x - 2 > 0 \implies x > \ln 2$。$f'(x) = \frac{e^x}{e^x - 2} > 0$，严格递增。

$y = \ln(e^x - 2) \implies e^y = e^x - 2 \implies e^x = e^y + 2 \implies x = \ln(e^y + 2)$

$$f^{-1}(x) = \ln(e^x + 2)$$

**知识点：** 一一映射要求严格单调或值域不重叠；求反函数即解出 $x$ 关于 $y$ 的表达式后交换变量。

</details>

---

### 题目 18

**题目：** 将 $f(x) = (x - 2)^{1/3} + 5$ 写成复合函数的形式，并利用复合函数求其反函数。

<details>
<summary>参考答案</summary>

**解：**

设 $f = h \circ g \circ k$，其中：
$$k(x) = x - 2, \quad g(u) = u^{1/3}, \quad h(v) = v + 5$$

求反函数：逐步反转。

$y = (x - 2)^{1/3} + 5 \implies y - 5 = (x - 2)^{1/3} \implies (y - 5)^3 = x - 2 \implies x = (y - 5)^3 + 2$

$$\boxed{f^{-1}(x) = (x - 5)^3 + 2}$$

**知识点：** 复合函数的反函数等于各层反函数按相反顺序复合：$(f \circ g)^{-1} = g^{-1} \circ f^{-1}$。

</details>

---

## 📝 本次知识点总结

1. **函数判定**：检查每个 $x$ 是否唯一对应一个 $y$。
2. **差商**：$\frac{f(x+h)-f(x)}{h}$ 是导数的基础，表示平均变化率。
3. **定义域**：综合考虑分母非零、根号非负、对数正参数等约束。
4. **单调性与奇偶性**：分段函数需逐段分析后在拼接处验证。
5. **复合函数**：定义域由内层值域与外层定义域的交集决定。
6. **反函数**：严格单调函数必有反函数，通过解方程求得。
