> **📎 源文件：** `旧资料/09 Lecture/Week 8 - Class 15-A-Fundamental-Theorem-Calculus.pdf`, `旧资料/09 Lecture/Week 8 - Class 15-B-Integrals-Odd-Even.pdf`, `旧资料/09 Lecture/Week 8 - Class 16-Areas-Volumes-Average-Value.pdf`

---

# Week 8: 定积分与微积分基本定理

## 📌 知识点概述

本周进入积分学的核心内容。学习定积分的定义（Riemann 和）、定积分的性质、微积分基本定理（Fundamental Theorem of Calculus）的两个部分、利用奇偶性简化积分、净变化定理，以及两曲线围成面积的计算。

## 📖 核心内容

### 定义

**定积分（Definite Integral）：** 设 $f$ 定义在 $[a, b]$ 上，将 $[a, b]$ 分成 $n$ 个等宽子区间，宽度 $\Delta x = \dfrac{b - a}{n}$，取 $x_k^* \in [x_{k-1}, x_k]$，则：
$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{k=1}^{n} f(x_k^*) \Delta x$$

**可积性：** 若 $f$ 在 $[a, b]$ 上连续（或只有有限个跳跃间断点），则 $f$ 在 $[a, b]$ 上可积。

**定积分的几何意义：**
- 若 $f(x) \geq 0$：$\int_a^b f(x)\,dx$ = 曲线下方面积
- 一般情形：$\int_a^b f(x)\,dx = A_{\text{上方}} - A_{\text{下方}}$（有符号面积）

### 定理

**微积分基本定理（第一部分）：** 若 $f$ 在 $[a, b]$ 上连续，则积分函数：
$$F(x) = \int_a^x f(t)\,dt$$
是 $f$ 的一个反导数，即 $F'(x) = f(x)$。等价地：
$$\frac{d}{dx} \int_a^x f(t)\,dt = f(x)$$

**微积分基本定理（第二部分）：** 若 $F$ 是 $f$ 的任一反导数（即 $F' = f$），则：
$$\int_a^b f(x)\,dx = F(b) - F(a)$$

**复合函数的积分上限求导：**
$$\frac{d}{dx} \int_a^{g(x)} f(t)\,dt = f(g(x)) \cdot g'(x)$$

**更一般的 Leibniz 规则：**
$$\frac{d}{dx} \int_{g(x)}^{h(x)} f(t)\,dt = f(h(x)) \cdot h'(x) - f(g(x)) \cdot g'(x)$$

**奇偶函数的积分性质：**
- 若 $f$ 为**偶函数**（$f(-x) = f(x)$）：$\displaystyle\int_{-a}^{a} f(x)\,dx = 2\int_0^a f(x)\,dx$
- 若 $f$ 为**奇函数**（$f(-x) = -f(x)$）：$\displaystyle\int_{-a}^{a} f(x)\,dx = 0$

### 重要公式

**定积分的性质：**
- $\int_a^a f(x)\,dx = 0$
- $\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$
- $\int_a^b c\,dx = c(b - a)$
- $\int_a^b [f(x) + g(x)]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$
- $\int_a^b [f(x) - g(x)]\,dx = \int_a^b f(x)\,dx - \int_a^b g(x)\,dx$
- $\int_a^b cf(x)\,dx = c\int_a^b f(x)\,dx$

**比较性质：** 若在 $[a, b]$ 上 $f(x) \geq g(x)$，则 $\int_a^b f(x)\,dx \geq \int_a^b g(x)\,dx$。

**净变化定理：** $\int_a^b F'(x)\,dx = F(b) - F(a)$

**定积分的换元法则：**
$$\int_a^b f(g(x)) \cdot g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du$$

---

### 典型例题

**例 1.** 用 Riemann 和证明 $\int_0^1 x^2\,dx = \dfrac{1}{3}$。

**解.** 将 $[0, 1]$ 分成 $n$ 等份，$\Delta x = \dfrac{1}{n}$，取左端点 $x_k = \dfrac{k}{n}$（$k = 0, 1, \ldots, n-1$）：
$$L_n = \sum_{k=0}^{n-1} \frac{1}{n} \left(\frac{k}{n}\right)^2 = \frac{1}{n^3} \sum_{k=0}^{n-1} k^2 = \frac{1}{n^3} \cdot \frac{(n-1)n(2n-1)}{6}$$
$$= \frac{(n-1)(2n-1)}{6n^2} = \frac{2n^2 - 3n + 1}{6n^2}$$

当 $n \to \infty$：
$$\int_0^1 x^2\,dx = \lim_{n \to \infty} L_n = \lim_{n \to \infty} \frac{2n^2 - 3n + 1}{6n^2} = \frac{2}{6} = \frac{1}{3}$$

---

**例 2.** 求 $F'(x)$，其中 $F(x) = \displaystyle\int_1^{x^4} \dfrac{1}{\cos t}\,dt$。

**解.** 使用复合函数的积分上限求导公式，令 $u = x^4$，$u' = 4x^3$：
$$F'(x) = \frac{1}{\cos(x^4)} \cdot 4x^3 = \frac{4x^3}{\cos(x^4)}$$

---

**例 3.** 计算 $\displaystyle\int_{-3\pi/4}^{3\pi/4} [5x^4 + \cos x]\,dx$。

**解.** $f(x) = 5x^4 + \cos x$ 是偶函数（$f(-x) = 5x^4 + \cos x = f(x)$），因此：
$$\int_{-3\pi/4}^{3\pi/4} [5x^4 + \cos x]\,dx = 2\int_0^{3\pi/4} [5x^4 + \cos x]\,dx$$
$$= 2\left[x^5 + \sin x\right]_0^{3\pi/4} = 2\left[\left(\frac{3\pi}{4}\right)^5 + \sin\frac{3\pi}{4}\right] = 2\left[\frac{243\pi^5}{1024} + \frac{\sqrt{2}}{2}\right] = \frac{243\pi^5}{512} + \sqrt{2}$$

---

**例 4.** 求由 $y = e^x$、$y = x$、$x = -1$ 和 $x = 1$ 围成的区域面积。

**解.** 在 $[-1, 1]$ 上，$e^x \geq x$（上边界为 $y = e^x$，下边界为 $y = x$）：
$$A = \int_{-1}^{1} (e^x - x)\,dx = \left[e^x - \frac{x^2}{2}\right]_{-1}^{1} = \left(e - \frac{1}{2}\right) - \left(e^{-1} + \frac{1}{2}\right) = e - e^{-1} - 1 + 1 = e - e^{-1}$$

等等，重新计算：
$$= \left(e - \frac{1}{2}\right) - \left(\frac{1}{e} - \frac{1}{2}\right) = e - \frac{1}{e} = e - e^{-1}$$

---

**例 5.** 求 $\displaystyle\int_0^4 \sqrt{2x + 1}\,dx$。

**解.** 令 $u = 2x + 1$，$du = 2\,dx$。当 $x = 0$ 时 $u = 1$，当 $x = 4$ 时 $u = 9$：
$$\int_0^4 \sqrt{2x + 1}\,dx = \int_1^9 \frac{\sqrt{u}}{2}\,du = \frac{1}{2} \cdot \frac{2}{3} u^{3/2} \bigg|_1^9 = \frac{1}{3}[9^{3/2} - 1^{3/2}] = \frac{1}{3}[27 - 1] = \frac{26}{3}$$

---

## 📝 本周知识点总结

1. **定积分定义**：Riemann 和的极限，表示有符号面积。
2. **微积分基本定理**：连接微分与积分的桥梁。
   - 第一部分：积分函数的导数 = 被积函数
   - 第二部分：定积分 = 反导数在端点的差
3. **复合函数积分上限求导**：链式法则与 FTC 的结合。
4. **奇偶性简化积分**：偶函数翻倍，奇函数为零。
5. **净变化定理**：变化率的积分 = 净变化量。
6. **两曲线面积**：$\int_a^b [f(x) - g(x)]\,dx$，其中 $f \geq g$。
7. **定积分换元**：注意同时更换积分上下限。
