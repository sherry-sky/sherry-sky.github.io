> **📎 源文件：** `旧资料/09 Lecture/Week 7-Class13-A-Concavity-CurveSketching.pdf`, `旧资料/09 Lecture/Week 7-Class13-B-Antiderivatives-Substitution.pdf`, `旧资料/09 Lecture/Week 7-Class14-Definite-Integral.pdf`

---

# Week 7: 曲线描绘与反导数

## 📌 知识点概述

本周分为两部分：（1）利用导数进行完整的曲线描绘，包括凹凸性、拐点、渐近线（含斜渐近线）、L'Hospital 法则；（2）反导数（不定积分）的概念、基本积分公式和换元积分法。

## 📖 核心内容

### 定义

**凹凸性：**
- **上凹（Concave Upward）**：曲线位于所有切线之上，$f''(x) > 0$
- **下凹（Concave Downward）**：曲线位于所有切线之下，$f''(x) < 0$

**拐点（Inflection Point）：** 曲线在 $(c, f(c))$ 处改变凹凸性的点，要求 $f$ 在 $c$ 处连续。

**反导数（Antiderivative）：** 若 $F'(x) = f(x)$，则 $F(x)$ 是 $f(x)$ 的一个反导数。记为：
$$F(x) = \int f(x)\,dx + C$$

**斜渐近线：** 若 $\lim_{x \to +\infty} [f(x) - (mx + b)] = 0$，则 $y = mx + b$ 是 $f$ 在 $+\infty$ 处的斜渐近线。其中：
$$m = \lim_{x \to +\infty} \frac{f(x)}{x}, \quad b = \lim_{x \to +\infty} [f(x) - mx]$$

### 定理

**二阶导数判别法：** 设 $f''(c)$ 存在且 $f'(c) = 0$：
- $f''(c) > 0 \implies f$ 在 $c$ 处有局部最小值
- $f''(c) < 0 \implies f$ 在 $c$ 处有局部最大值
- $f''(c) = 0 \implies$ 判别法失效

**L'Hospital 法则：** 若 $\lim_{x \to c} f(x) = 0$ 且 $\lim_{x \to c} g(x) = 0$（或两者均为 $\pm\infty$），则：
$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$
（前提是右端极限存在）。

### 重要公式

**基本积分公式：**

| $\int f(x)\,dx$ | 结果 |
|---|---|
| $\int 0\,dx$ | $C$ |
| $\int 1\,dx$ | $x + C$ |
| $\int x^n\,dx$（$n \neq -1$） | $\dfrac{x^{n+1}}{n+1} + C$ |
| $\int \dfrac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \dfrac{1}{1+x^2}\,dx$ | $\arctan x + C$ |
| $\int \dfrac{1}{\sqrt{1-x^2}}\,dx$ | $\arcsin x + C$ |
| $\int \cosh x\,dx$ | $\sinh x + C$ |
| $\int \sinh x\,dx$ | $\cosh x + C$ |

**积分的线性性质：**
$$\int [af(x) + bg(x)]\,dx = a\int f(x)\,dx + b\int g(x)\,dx$$

**换元积分法（Substitution Rule）：** 若 $u = g(x)$，则 $du = g'(x)\,dx$：
$$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du = F(u) + C = F(g(x)) + C$$

---

### 典型例题

**例 1.** 对 $f(x) = x^4 - 4x^3$ 进行完整的曲线分析并描绘图像。

**解.**

**Step 1: 定义域** $\text{Dom}(f) = \mathbb{R}$

**Step 2: 对称性** $f$ 既非奇函数也非偶函数，非周期函数。

**Step 3-4: 增减性与极值**
$$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$$
临界点：$x = 0$ 和 $x = 3$。

| 区间 | $(-\infty, 0)$ | $0$ | $(0, 3)$ | $3$ | $(3, +\infty)$ |
|------|:---:|:---:|:---:|:---:|:---:|
| $f'(x)$ | $-$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | 递减 | | 递减 | | 递增 |

$f$ 在 $x = 3$ 处有**局部最小值** $f(3) = 81 - 108 = -27$，无局部最大值。

**Step 5-6: 凹凸性与拐点**
$$f''(x) = 12x^2 - 24x = 12x(x - 2)$$

| 区间 | $(-\infty, 0)$ | $0$ | $(0, 2)$ | $2$ | $(2, +\infty)$ |
|------|:---:|:---:|:---:|:---:|:---:|
| $f''(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| 凹凸性 | 上凹 | 拐点 | 下凹 | 拐点 | 上凹 |

拐点：$(0, 0)$ 和 $(2, f(2)) = (2, -16)$。

**Step 7: 渐近线**
$\lim_{x \to \pm\infty} f(x) = +\infty$，无水平渐近线，无垂直渐近线。

---

**例 2.** 用 L'Hospital 法则计算 $\lim_{x \to 1^+} \left(\dfrac{1}{\ln x} - \dfrac{1}{x - 1}\right)$。

**解.** 通分：
$$\frac{1}{\ln x} - \frac{1}{x - 1} = \frac{x - 1 - \ln x}{\ln x \cdot (x - 1)}$$
当 $x \to 1^+$ 时，分子 $\to 0$，分母 $\to 0$，为 $\dfrac{0}{0}$ 型。

第一次 L'Hospital：
$$\lim_{x \to 1^+} \frac{1 - 1/x}{\frac{1}{x}(x-1) + \ln x} = \lim_{x \to 1^+} \frac{1 - 1/x}{1 - 1/x + \ln x}$$
仍为 $\dfrac{0}{0}$ 型。

第二次 L'Hospital：
$$\lim_{x \to 1^+} \frac{1/x^2}{1/x^2 + 1/x} = \lim_{x \to 1^+} \frac{1}{1 + x} = \frac{1}{2}$$

---

**例 3.** 求 $\int \sin^4(x)\,dx$。

**解.** 利用半角公式 $\sin^2 x = \dfrac{1 - \cos(2x)}{2}$：
$$\sin^4 x = \left(\frac{1 - \cos(2x)}{2}\right)^2 = \frac{1 - 2\cos(2x) + \cos^2(2x)}{4}$$
再用 $\cos^2(2x) = \dfrac{1 + \cos(4x)}{2}$：
$$\sin^4 x = \frac{1}{4}\left(1 - 2\cos(2x) + \frac{1 + \cos(4x)}{2}\right) = \frac{1}{4}\left(\frac{3}{2} - 2\cos(2x) + \frac{1}{2}\cos(4x)\right)$$

积分：
$$\int \sin^4 x\,dx = \frac{1}{4}\left(\frac{3}{2}x - \sin(2x) + \frac{1}{8}\sin(4x)\right) + C = \frac{3x}{8} - \frac{\sin(2x)}{4} + \frac{\sin(4x)}{32} + C$$

---

**例 4.** 用换元法求 $\int \dfrac{\sin x}{\sqrt{\cos x}}\,dx$。

**解.** 令 $u = \cos x$，$du = -\sin x\,dx$：
$$\int \frac{\sin x}{\sqrt{\cos x}}\,dx = \int \frac{-du}{\sqrt{u}} = -\int u^{-1/2}\,du = -\frac{u^{1/2}}{1/2} + C = -2\sqrt{u} + C = -2\sqrt{\cos x} + C$$

---

**例 5.** 求 $f(x) = \dfrac{x^3}{x^2 + 1}$ 的斜渐近线。

**解.** 计算 $m$：
$$m = \lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{x^3}{x(x^2 + 1)} = \lim_{x \to +\infty} \frac{x^2}{x^2 + 1} = 1$$

计算 $b$：
$$b = \lim_{x \to +\infty} [f(x) - x] = \lim_{x \to +\infty} \left[\frac{x^3}{x^2 + 1} - x\right] = \lim_{x \to +\infty} \frac{x^3 - x^3 - x}{x^2 + 1} = \lim_{x \to +\infty} \frac{-x}{x^2 + 1} = 0$$

因此斜渐近线为 $y = x$（在 $+\infty$ 和 $-\infty$ 处均成立）。

---

## 📝 本周知识点总结

1. **曲线描绘指南**：定义域 $\to$ 对称性 $\to$ 增减性 $\to$ 极值 $\to$ 凹凸性 $\to$ 拐点 $\to$ 渐近线 $\to$ 绘图。
2. **二阶导数判别法**：$f''(c) > 0$ 为局部最小，$f''(c) < 0$ 为局部最大。
3. **L'Hospital 法则**：处理 $0/0$ 和 $\infty/\infty$ 型不定式。
4. **不定积分**：反导数运算，结果需加常数 $C$。
5. **基本积分公式**：幂函数、三角函数、指数函数等的积分。
6. **换元积分法**：链式法则的逆运算，选择合适的 $u$ 简化被积函数。
7. **斜渐近线**：通过求 $m$ 和 $b$ 的极限来确定。
