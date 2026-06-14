> **📎 源文件：** `旧资料/03 Homeworks/原题/HW5-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw5.pdf`

---

# Homework 5 - 渐近线、极值与积分

## 📌 涉及知识点
- 函数的垂直与水平渐近线
- 临界点、单调性与极值
- 优化问题（扇形面积最大化）
- 黎曼和计算定积分

---

### 题目 1（30 分）
**题目：** 对每个使 $\cos(\ln(e^a+1)) \neq 0$ 的实数 $a > 0$，求函数 $g(x) = \dfrac{\cos(x)\ln(x-a)}{\ln(e^x - e^a)}$ 的所有垂直和水平渐近线。

<details>
<summary>参考答案</summary>

**解：**

**定义域分析：** 需 $x > a$（使 $\ln(x-a)$ 有意义）且 $e^x - e^a > 0$（即 $x > a$）且 $\ln(e^x - e^a) \neq 0$（即 $e^x - e^a \neq 1$，$x \neq \ln(e^a+1)$）。

定义域为 $(a, \ln(e^a+1)) \cup (\ln(e^a+1), +\infty)$。

**垂直渐近线：**

**在 $x = a$ 处（右极限）：**

$$\lim_{x \to a^+} g(x) = \lim_{x \to a^+} \frac{\cos(x)\ln(x-a)}{\ln(e^x - e^a)}$$

这是 $\frac{-\infty}{-\infty}$ 型（$\cos a \neq 0$ 时）。用洛必达法则：

分子导数：$-\sin(x)\ln(x-a) + \frac{\cos(x)}{x-a}$

分母导数：$\frac{e^x}{e^x - e^a}$

当 $x \to a^+$ 时，主要项为 $\frac{\cos(x)/(x-a)}{e^a/(e^x-e^a)}$。

因为 $e^x - e^a \approx e^a(x-a)$，所以 $\frac{1/(x-a)}{e^a/(e^a(x-a))} = \frac{1/(x-a)}{1/(x-a)} = 1$。

所以 $\lim_{x \to a^+} g(x) = \cos(a)$（有限值），**不是垂直渐近线**。

**在 $x = \ln(e^a+1)$ 处：**

设 $x_0 = \ln(e^a+1)$。分母 $\ln(e^{x_0}-e^a) = \ln 1 = 0$。

分子 $\cos(x_0)\ln(x_0 - a) = \cos(\ln(e^a+1)) \cdot \ln(\ln(e^a+1)-a)$。

由题设 $\cos(\ln(e^a+1)) \neq 0$，且 $\ln(\ln(e^a+1)-a) \neq 0$（一般情况），分子不为零而分母趋于零。

$$\boxed{x = \ln(e^a + 1) \quad \text{是垂直渐近线}}$$

**水平渐近线（$x \to +\infty$）：**

$$g(x) = \frac{\cos(x)\ln(x-a)}{\ln(e^x - e^a)} = \frac{\cos(x)\ln(x-a)}{\ln(e^x(1-e^{a-x}))} = \frac{\cos(x)\ln(x-a)}{x + \ln(1-e^{a-x})}$$

当 $x \to +\infty$ 时，$\ln(1-e^{a-x}) \to 0$，所以分母 $\sim x$。

$$|g(x)| \leq \frac{\ln(x-a)}{x} \to 0$$

由夹逼定理：

$$\boxed{y = 0 \quad \text{是水平渐近线}}$$

**知识点：** 渐近线分析、洛必达法则、夹逼定理

</details>

---

### 题目 2（30 分）
**题目：** 设 $f(x) = \begin{cases} \sin^{2/3}(\pi x) & \text{if } -1 \leq x < 2 \\ 2\tanh|x-3| & \text{if } x \geq 2 \end{cases}$

(a) 求所有临界点、单调区间和极值。
(b) 求 $f$ 的绝对最大值和最小值点。

<details>
<summary>参考答案</summary>

**解：**

**(a) 临界点与单调性**

**第一段 $f(x) = \sin^{2/3}(\pi x)$，$x \in [-1, 2)$：**

$$f'(x) = \frac{2}{3}\sin^{-1/3}(\pi x) \cdot \pi\cos(\pi x) = \frac{2\pi\cos(\pi x)}{3\sin^{1/3}(\pi x)}$$

- $f'(x) = 0 \implies \cos(\pi x) = 0 \implies x = -\frac{1}{2}, \frac{1}{2}, \frac{3}{2}$
- $f'(x)$ 不存在 $\implies \sin(\pi x) = 0 \implies x = -1, 0, 1$（在定义域内）

临界点：$x = -1, -\frac{1}{2}, 0, \frac{1}{2}, 1, \frac{3}{2}$

**第二段 $f(x) = 2\tanh|x-3|$，$x \geq 2$：**

- 当 $x > 3$：$f'(x) = 2\text{sech}^2(x-3) > 0$
- 当 $2 \leq x < 3$：$f'(x) = -2\text{sech}^2(3-x) < 0$
- $x = 3$：$f'(3)$ 不存在（左右导数分别为 $-2$ 和 $2$）

临界点：$x = 3$

**函数值：**

| $x$ | $f(x)$ |
|-----|--------|
| $-1$ | $\sin^{2/3}(-\pi) = 0$ |
| $-1/2$ | $\sin^{2/3}(-\pi/2) = 1$ |
| $0$ | $\sin^{2/3}(0) = 0$ |
| $1/2$ | $\sin^{2/3}(\pi/2) = 1$ |
| $1$ | $\sin^{2/3}(\pi) = 0$ |
| $3/2$ | $\sin^{2/3}(3\pi/2) = 1$ |
| $2$ | $2\tanh|{-1}| = 2\tanh 1$ |
| $3$ | $2\tanh 0 = 0$ |

**单调区间：**
- 递增：$(-1, -\frac{1}{2})$，$(0, \frac{1}{2})$，$(1, \frac{3}{2})$，$(3, +\infty)$
- 递减：$(-\frac{1}{2}, 0)$，$(\frac{1}{2}, 1)$，$(2, 3)$

**局部极大值：** $f(-\frac{1}{2}) = f(\frac{1}{2}) = f(\frac{3}{2}) = 1$

**局部极小值：** $f(-1) = f(0) = f(1) = f(3) = 0$

**(b) 绝对最值**

注意 $2\tanh 1 \approx 1.523 > 1$，且当 $x \to +\infty$ 时 $f(x) \to 2$。

所以 $f$ 有**绝对最小值** $0$，在 $x = -1, 0, 1, 3$ 处取到。

$f$ **没有绝对最大值**（上确界为 $2$，但不可达）。

若只考虑闭区间上的值，则绝对最大值为 $f(\frac{1}{2}) = f(-\frac{1}{2}) = f(\frac{3}{2}) = 1$（在第一段中）。

**知识点：** 临界点、单调性、极值、绝对值函数

</details>

---

### 题目 3（20 分）
**题目：** 一个扇形的周长为 10 cm。求使扇形面积最大的半径和圆心角。

<details>
<summary>参考答案</summary>

**解：**

设半径为 $r$，弧长为 $l$，圆心角为 $\alpha$（弧度）。

**约束条件：** $2r + l = 10 \implies l = 10 - 2r$

**面积公式：** $A = \dfrac{1}{2}rl = \dfrac{1}{2}r(10-2r) = 5r - r^2$

**定义域：** $r > 0$ 且 $l > 0 \implies 0 < r < 5$，$\alpha = \dfrac{l}{r} = \dfrac{10-2r}{r} > 0$

**求最大值：**

$$A'(r) = 5 - 2r = 0 \implies r = \frac{5}{2}$$

$$A''(r) = -2 < 0 \implies r = \frac{5}{2} \text{ 是极大值点}$$

$$\alpha = \frac{10 - 2(5/2)}{5/2} = \frac{5}{5/2} = 2 \text{ rad}$$

$$A_{\max} = 5 \cdot \frac{5}{2} - \left(\frac{5}{2}\right)^2 = \frac{25}{4} = 6.25 \text{ cm}^2$$

$$\boxed{r = \dfrac{5}{2} \text{ cm}, \quad \alpha = 2 \text{ rad}}$$

**知识点：** 优化问题、二次函数最值

</details>

---

### 题目 4（20 分）
**题目：** 用黎曼和计算定积分 $\displaystyle\int_0^3 (x^3 + 2x)\,dx$。

<details>
<summary>参考答案</summary>

**解：**

将 $[0, 3]$ 等分为 $n$ 个小区间，$\Delta x = \dfrac{3}{n}$，$x_i = \dfrac{3i}{n}$。

$$\int_0^3 (x^3+2x)\,dx = \lim_{n\to\infty} \sum_{i=1}^n f(x_i)\Delta x = \lim_{n\to\infty} \sum_{i=1}^n \left[\left(\frac{3i}{n}\right)^3 + 2\left(\frac{3i}{n}\right)\right]\frac{3}{n}$$

$$= \lim_{n\to\infty} \left[\frac{243}{n^4}\sum_{i=1}^n i^3 + \frac{18}{n^2}\sum_{i=1}^n i\right]$$

利用求和公式 $\sum i^3 = \dfrac{n^2(n+1)^2}{4}$，$\sum i = \dfrac{n(n+1)}{2}$：

$$= \lim_{n\to\infty} \left[\frac{243}{n^4} \cdot \frac{n^2(n+1)^2}{4} + \frac{18}{n^2} \cdot \frac{n(n+1)}{2}\right]$$

$$= \lim_{n\to\infty} \left[\frac{243(n+1)^2}{4n^2} + \frac{9(n+1)}{n}\right]$$

$$= \frac{243}{4} + 9 = \frac{243 + 36}{4} = \frac{279}{4}$$

等等，让我重新计算：$\frac{243}{4} + 9 = \frac{243}{4} + \frac{36}{4} = \frac{279}{4}$。

让我验证：$\int_0^3 (x^3+2x)\,dx = \left[\frac{x^4}{4} + x^2\right]_0^3 = \frac{81}{4} + 9 = \frac{81+36}{4} = \frac{117}{4}$。

我的黎曼和计算有误。重新计算：

$\frac{243}{n^4} \cdot \frac{n^2(n+1)^2}{4} = \frac{243}{4} \cdot \frac{(n+1)^2}{n^2} \to \frac{243}{4}$

等等，$\left(\frac{3i}{n}\right)^3 = \frac{27i^3}{n^3}$，乘以 $\Delta x = \frac{3}{n}$ 得 $\frac{81i^3}{n^4}$。

$$\sum \frac{81i^3}{n^4} = \frac{81}{n^4} \cdot \frac{n^2(n+1)^2}{4} \to \frac{81}{4}$$

$\frac{18}{n^2} \cdot \frac{n(n+1)}{2} = \frac{9(n+1)}{n} \to 9$

$$\int_0^3 (x^3+2x)\,dx = \frac{81}{4} + 9 = \boxed{\frac{117}{4}}$$

**知识点：** 黎曼和、求和公式

</details>

---

## 📝 本次知识点总结

1. **渐近线分析**：综合考察定义域、极限行为和洛必达法则
2. **临界点**：$f'(x) = 0$ 或 $f'(x)$ 不存在的点；注意绝对值函数的尖点
3. **优化问题**：建立目标函数，求导找极值，验证最值
4. **黎曼和**：利用 $\sum i = \frac{n(n+1)}{2}$ 和 $\sum i^3 = \frac{n^2(n+1)^2}{4}$ 计算极限
