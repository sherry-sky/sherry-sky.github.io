> **📎 源文件：** `旧资料/09 Lecture/Week 25-Class-1-8-2025.pdf`

---

# Week 25: Taylor 级数与二项式级数

## 📌 知识点概述

本周学习 Taylor 级数的深入应用，包括利用已知 Maclaurin 级数通过代入、复合、求导和积分得到新函数的 Taylor 展开。重点学习二项式级数及其收敛性，以及利用 Taylor 级数计算极限和近似值。

## 📖 核心内容

### 定义

**Taylor 级数**：若 $f$ 在 $x = a$ 处有各阶导数，则：

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

**Maclaurin 级数**（$a = 0$）：

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$$

**二项式系数**：对 $k \in \mathbb{R}$ 和 $n \in \mathbb{N}$：

$$\binom{k}{n} = \frac{k(k-1)(k-2)\cdots(k-n+1)}{n!}$$

（共 $n$ 个因子），$\binom{k}{0} = 1$。

**二项式级数**：

$$(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n = \sum_{n=0}^{\infty} \frac{k(k-1)\cdots(k-n+1)}{n!} x^n$$

### 定理

**定理 1（Taylor 级数收敛定理）**：若 $f(x) = T_n(x) + R_n(x)$，且对所有 $|x - a| < R$ 有 $\lim_{n \to \infty} R_n(x) = 0$，则 $f(x)$ 在 $(a-R, a+R)$ 上等于其 Taylor 级数之和。

**定理 2（Taylor 不等式）**：若 $|f^{(n+1)}(x)| \leq M$ 对所有 $|x - a| < d$ 成立，则：

$$|R_n(x)| \leq \frac{M}{(n+1)!}|x - a|^{n+1}$$

**定理 3（二项式级数的收敛性）**：
1. 若 $k \in \mathbb{N}$，则 $\binom{k}{n} = 0$ 对所有 $n > k$，级数为有限和 $(1+x)^k = \sum_{n=0}^{k} \binom{k}{n} x^n$
2. 若 $k \notin \mathbb{N}$，用比值判别法可证 $R = 1$：
   - $-1 < k < 0$：收敛区间为 $(-1, 1]$
   - $k \geq 0$（$k \notin \mathbb{N}$）：收敛区间为 $[-1, 1]$
   - $k < -1$：收敛区间为 $(-1, 1)$

**引理**：对任意 $x \in \mathbb{R}$，$\lim_{n \to \infty} \frac{x^n}{n!} = 0$。

### 重要公式

**基本 Maclaurin 级数汇总**：

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} \quad (x \in \mathbb{R})$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} \quad (x \in \mathbb{R})$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n} \quad (x \in \mathbb{R})$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad (|x| < 1)$$

$$\ln(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} x^k \quad (x \in (-1, 1])$$

$$\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} x^{2n+1} \quad (|x| \leq 1)$$

**二项式级数常用特例**：

$$\frac{1}{\sqrt{1+x}} = (1+x)^{-1/2} = \sum_{n=0}^{\infty} \binom{-1/2}{n} x^n = \sum_{n=0}^{\infty} \frac{(-1)^n (2n)!}{4^n (n!)^2} x^n$$

$$\sqrt{1+x} = (1+x)^{1/2} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 - \cdots$$

### 典型例题

**例 1.** 利用 Maclaurin 级数计算极限 $\lim_{x \to 0} \frac{\sin x - x + \frac{1}{6}x^3}{x^5}$。

**解.** 利用 $\sin x$ 的 Maclaurin 展开：

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

代入分子：

$$\sin x - x + \frac{x^3}{6} = \left(x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \cdots\right) - x + \frac{x^3}{6} = \frac{x^5}{120} - \frac{x^7}{5040} + \cdots$$

因此：

$$\frac{\sin x - x + \frac{1}{6}x^3}{x^5} = \frac{1}{120} - \frac{x^2}{5040} + \cdots$$

当 $x \to 0$ 时，高阶项趋于 $0$：

$$\lim_{x \to 0} \frac{\sin x - x + \frac{1}{6}x^3}{x^5} = \frac{1}{120}$$

$\blacksquare$

---

**例 2.** 求 $f(x) = e^{-x^2}$ 的 Maclaurin 级数，并计算 $\int_0^1 e^{-x^2}\,dx$（精确到 $10^{-3}$）。

**解.**

**Maclaurin 级数**：由 $e^t = \sum_{n=0}^{\infty} \frac{t^n}{n!}$，代入 $t = -x^2$：

$$e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-x^2)^n}{n!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \cdots \quad (x \in \mathbb{R})$$

**不定积分**：逐项积分，

$$\int e^{-x^2}\,dx = C + \sum_{n=0}^{\infty} \frac{(-1)^n}{n!(2n+1)} x^{2n+1}$$

**定积分**：

$$\int_0^1 e^{-x^2}\,dx = \sum_{n=0}^{\infty} \frac{(-1)^n}{n!(2n+1)} = 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \cdots$$

这是交错级数，由交错级数估计定理，$|R_n| \leq |a_{n+1}|$。

需要 $|a_{n+1}| = \frac{1}{(n+1)!(2n+3)} < 10^{-3}$。

当 $n = 4$：$|a_5| = \frac{1}{5! \cdot 11} = \frac{1}{1320} < 10^{-3}$。 ✓

取前 5 项（$n = 0$ 到 $n = 4$）：

$$\int_0^1 e^{-x^2}\,dx \approx 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} \approx 0.7475$$

真实值约为 $0.7468$，误差 $|0.7475 - 0.7468| \approx 0.0007 < 0.001$。$\blacksquare$

---

**例 3.** 求 $f(x) = \frac{1}{\sqrt{4-x}}$ 的 Maclaurin 级数及收敛区间。

**解.** 改写为二项式级数的形式：

$$f(x) = \frac{1}{\sqrt{4-x}} = \frac{1}{\sqrt{4(1 - x/4)}} = \frac{1}{2}(1 - x/4)^{-1/2}$$

利用二项式级数 $(1+u)^k = \sum_{n=0}^{\infty} \binom{k}{n} u^n$，取 $k = -\frac{1}{2}$，$u = -\frac{x}{4}$：

$$f(x) = \frac{1}{2} \sum_{n=0}^{\infty} \binom{-1/2}{n} \left(-\frac{x}{4}\right)^n = \frac{1}{2} \sum_{n=0}^{\infty} \binom{-1/2}{n} \frac{(-1)^n}{4^n} x^n$$

计算系数：

$$\binom{-1/2}{n} = \frac{(-1/2)(-3/2)(-5/2)\cdots(-(2n-1)/2)}{n!} = \frac{(-1)^n \cdot 1 \cdot 3 \cdot 5 \cdots (2n-1)}{2^n \cdot n!}$$

代入：

$$f(x) = \frac{1}{2} \sum_{n=0}^{\infty} \frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{2^n \cdot n! \cdot 4^n} x^n = \frac{1}{2} \sum_{n=0}^{\infty} \frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n! \cdot 8^n} x^n$$

收敛条件：$\left|-\frac{x}{4}\right| < 1$，即 $|x| < 4$，$R = 4$。

收敛区间为 $(-4, 4)$。$\blacksquare$

---

**例 4.** 求 $f(x) = \sin^2 x$ 的 Maclaurin 级数。

**解.** 利用三角恒等式 $\sin^2 x = \frac{1 - \cos(2x)}{2}$。

由 $\cos t = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} t^{2n}$，代入 $t = 2x$：

$$\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} (2x)^{2n} = 1 + \sum_{n=1}^{\infty} \frac{(-1)^n 2^{2n}}{(2n)!} x^{2n}$$

因此：

$$\sin^2 x = \frac{1}{2} - \frac{1}{2}\cos(2x) = \frac{1}{2} - \frac{1}{2}\left[1 + \sum_{n=1}^{\infty} \frac{(-1)^n 2^{2n}}{(2n)!} x^{2n}\right] = -\frac{1}{2}\sum_{n=1}^{\infty} \frac{(-1)^n 2^{2n}}{(2n)!} x^{2n}$$

$$= \sum_{n=1}^{\infty} \frac{(-1)^{n+1} 2^{2n-1}}{(2n)!} x^{2n} = x^2 - \frac{1}{3}x^4 + \frac{2}{45}x^6 - \cdots$$

收敛区间为 $(-\infty, \infty)$。$\blacksquare$

---

**例 5.** 利用 Taylor 级数近似计算 $\sqrt{4.5}$，精确到 $10^{-4}$。

**解.** 设 $f(x) = \sqrt{x}$，在 $a = 4$ 处展开。利用二项式级数：

$$\sqrt{x} = \sqrt{4 + (x-4)} = 2\sqrt{1 + \frac{x-4}{4}} = 2\left(1 + \frac{x-4}{4}\right)^{1/2}$$

展开 $(1+u)^{1/2}$，$u = \frac{x-4}{4} = \frac{0.5}{4} = \frac{1}{8}$：

$$(1+u)^{1/2} = 1 + \frac{1}{2}u + \frac{(1/2)(-1/2)}{2!}u^2 + \frac{(1/2)(-1/2)(-3/2)}{3!}u^3 + \cdots$$

$$= 1 + \frac{1}{2}u - \frac{1}{8}u^2 + \frac{1}{16}u^3 - \frac{5}{128}u^4 + \cdots$$

代入 $u = \frac{1}{8}$：

$$\sqrt{4.5} = 2\left[1 + \frac{1}{2}\cdot\frac{1}{8} - \frac{1}{8}\cdot\frac{1}{64} + \frac{1}{16}\cdot\frac{1}{512} - \cdots\right]$$

$$= 2\left[1 + \frac{1}{16} - \frac{1}{512} + \frac{1}{8192} - \cdots\right]$$

$$\approx 2\left[1 + 0.0625 - 0.001953 + 0.000122\right] \approx 2 \times 1.060669 \approx 2.12134$$

这是交错级数，$|R_3| \leq |a_4| = 2 \times \frac{5}{128} \times \frac{1}{8^4} = \frac{10}{128 \times 4096} \approx 0.000019 < 10^{-4}$。

因此 $\sqrt{4.5} \approx 2.1213$（精确到 $10^{-4}$）。$\blacksquare$

## 📝 本周知识点总结

1. **Taylor 级数**的核心方法：利用已知展开式通过代入、复合、求导、积分得到新展开
2. **二项式级数** $(1+x)^k$ 对任意实数 $k$ 均适用，收敛区间取决于 $k$ 的值
3. 利用 Maclaurin 级数可以**计算极限**（替代洛必达法则），尤其对复杂不定式更有效
4. 利用 Taylor 级数可以**近似计算**定积分（如 $\int e^{-x^2}dx$）和函数值（如 $\sqrt{4.5}$）
5. **交错级数估计定理**在近似计算中用于确定所需项数和误差界
6. **Taylor 不等式** $|R_n| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$ 是证明余项趋于零的主要工具
7. 常用技巧：$\sin^2 x = \frac{1-\cos 2x}{2}$，$e^{g(x)}$ 通过代入 $t = g(x)$ 展开
