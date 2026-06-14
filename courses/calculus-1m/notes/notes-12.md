> **📎 源文件：** 无对应 PDF（基于课程进度编写）

---

# Week 12: 级数收敛性判别

## 📌 知识点概述

本周学习无穷级数的基本概念和收敛性判别方法。包括几何级数、$p$-级数、积分判别法、比较判别法、极限比较判别法、交错级数判别法、绝对收敛与条件收敛、比值判别法和根值判别法。这些工具是分析级数收敛性的核心。

## 📖 核心内容

### 定义

**级数（Series）**：给定数列 $\{a_n\}$，级数为各项之和：

$$\sum_{k=1}^{\infty} a_k = a_1 + a_2 + a_3 + \cdots$$

**部分和**：$S_n = \sum_{k=1}^{n} a_k$

**收敛与发散**：若 $\lim_{n \to \infty} S_n = L \in \mathbb{R}$，则级数收敛于 $L$；否则级数发散。

**绝对收敛**：若 $\sum_{n=1}^{\infty} |a_n|$ 收敛，则 $\sum_{n=1}^{\infty} a_n$ 绝对收敛。

**条件收敛**：若 $\sum_{n=1}^{\infty} a_n$ 收敛但 $\sum_{n=1}^{\infty} |a_n|$ 发散，则 $\sum_{n=1}^{\infty} a_n$ 条件收敛。

### 定理

**定理 1（收敛的必要条件）**：若 $\sum_{n=1}^{\infty} a_n$ 收敛，则 $\lim_{n \to \infty} a_n = 0$。

> **注意**：逆命题不成立！$\lim_{n \to \infty} a_n = 0$ 不能保证级数收敛（如调和级数）。

**定理 2（几何级数）**：

$$\sum_{n=0}^{\infty} r^n = \frac{1}{1-r} \quad (|r| < 1)$$

当 $|r| \geq 1$ 时发散。更一般地，$\sum_{n=k}^{\infty} r^n = \frac{r^k}{1-r}$。

**定理 3（积分判别法）**：设 $f$ 在 $[1, \infty)$ 上连续、正值、递减，且 $f(n) = a_n$，则：

$$\sum_{n=1}^{\infty} a_n \text{ 收敛} \iff \int_1^{\infty} f(x)\,dx \text{ 收敛}$$

**推论（$p$-级数）**：$\sum_{n=1}^{\infty} \frac{1}{n^p}$ 在 $p > 1$ 时收敛，$p \leq 1$ 时发散。

**定理 4（比较判别法）**：设 $0 < a_n \leq b_n$，则：
1. 若 $\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛
2. 若 $\sum a_n$ 发散 $\Rightarrow$ $\sum b_n$ 发散

**定理 5（极限比较判别法）**：设 $a_n, b_n > 0$：
1. 若 $\lim_{n \to \infty} \frac{a_n}{b_n} = c > 0$，则两个级数同敛散
2. 若 $\lim_{n \to \infty} \frac{a_n}{b_n} = 0$ 且 $\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛
3. 若 $\lim_{n \to \infty} \frac{a_n}{b_n} = 0$ 且 $\sum a_n$ 发散 $\Rightarrow$ $\sum b_n$ 发散

**定理 6（交错级数判别法）**：设 $b_n > 0$，若交错级数 $\sum_{n=1}^{\infty} (-1)^{n-1} b_n$ 满足：
1. $\{b_n\}$ 递减：$b_{n+1} \leq b_n$
2. $\lim_{n \to \infty} b_n = 0$

则该交错级数收敛。

**定理 7（交错级数估计定理）**：若 $S = \sum_{n=1}^{\infty} (-1)^{n-1} b_n$ 满足上述条件，则余项满足：

$$|R_n| = |S - S_n| \leq b_{n+1}$$

**定理 8（绝对收敛蕴含收敛）**：若 $\sum_{n=1}^{\infty} |a_n|$ 收敛，则 $\sum_{n=1}^{\infty} a_n$ 收敛。

**定理 9（比值判别法）**：设 $\sum a_n$，考虑 $L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$：
1. 若 $L < 1$，则绝对收敛
2. 若 $L > 1$ 或 $L = \infty$，则发散
3. 若 $L = 1$，判别法失效

**定理 10（根值判别法）**：设 $L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$：
1. 若 $L < 1$，则绝对收敛
2. 若 $L > 1$ 或 $L = \infty$，则发散
3. 若 $L = 1$，判别法失效

### 重要公式

**余项估计（积分判别法）**：设 $f$ 连续、正值、递减，$f(n) = a_n$，级数收敛于 $S$，则：

$$\int_{n+1}^{\infty} f(x)\,dx \leq R_n = S - S_n \leq \int_n^{\infty} f(x)\,dx$$

等价地：

$$S_n + \int_{n+1}^{\infty} f(x)\,dx \leq S \leq S_n + \int_n^{\infty} f(x)\,dx$$

**$p$-级数余项估计**（$p > 1$）：

$$\frac{1}{(p-1)(n+1)^{p-1}} \leq R_n \leq \frac{1}{(p-1)n^{p-1}}$$

### 典型例题

**例 1.** 判别级数 $\sum_{n=1}^{\infty} \frac{1}{2n + n - 1}$ 的收敛性。

**解.** 设 $a_n = \frac{1}{2n + n - 1} = \frac{1}{3n - 1}$。

对 $n \geq 1$，有 $3n - 1 \geq 2n > 0$，因此 $a_n = \frac{1}{3n-1} \leq \frac{1}{2n} < \frac{1}{2^n}$（当 $n$ 充分大时）。

更精确地，取 $b_n = \frac{1}{2^n}$（几何级数，$r = \frac{1}{2} < 1$，收敛），

因为 $n \geq 1 \Rightarrow 3n - 1 \geq 2n \geq 2^n$ 不总成立，改用直接比较：

对 $n \geq 1$：$2^n + n - 1 \geq 2^n$，故 $\frac{1}{2^n + n - 1} \leq \frac{1}{2^n}$。

由比较判别法，$\sum_{n=1}^{\infty} \frac{1}{2^n + n - 1}$ 收敛。$\blacksquare$

---

**例 2.** 判别级数 $\sum_{n=1}^{\infty} \frac{\ln n}{n}$ 的收敛性。

**解.** 对 $n \geq 3$，$\ln n \geq \ln 3 > 1$，故 $\frac{\ln n}{n} \geq \frac{1}{n}$。

调和级数 $\sum_{n=1}^{\infty} \frac{1}{n}$ 发散（$p$-级数，$p = 1$）。

由比较判别法，$\sum_{n=3}^{\infty} \frac{\ln n}{n} \geq \sum_{n=3}^{\infty} \frac{1}{n} = \infty$，故原级数发散。$\blacksquare$

---

**例 3.** 判别级数 $\sum_{n=1}^{\infty} \frac{\sqrt{4n^2 + 3n - 1}}{7n^5 - 2}$ 的收敛性。

**解.** 分析主导项：

$$a_n = \frac{\sqrt{4n^2 + 3n - 1}}{7n^5 - 2} \approx \frac{\sqrt{4n^2}}{7n^5} = \frac{2n}{7n^5} = \frac{2}{7n^4}$$

取 $b_n = \frac{1}{n^4}$（$p$-级数，$p = 4 > 1$，收敛），计算极限比：

$$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{\sqrt{4n^2 + 3n - 1} \cdot n^4}{7n^5 - 2} = \lim_{n \to \infty} \frac{n^4 \cdot 2n \sqrt{1 + \frac{3}{4n} - \frac{1}{4n^2}}}{7n^5(1 - \frac{2}{7n^5})} = \frac{2}{7} > 0$$

由极限比较判别法，原级数收敛。$\blacksquare$

---

**例 4.** 判别级数 $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{5 + 3n}$ 的收敛性，并判断是否绝对收敛。

**解.** 设 $b_n = \frac{1}{5 + 3n}$：
- $b_n > 0$ 对所有 $n \geq 1$
- $b_{n+1} = \frac{1}{5 + 3(n+1)} < \frac{1}{5 + 3n} = b_n$，递减 ✓
- $\lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{1}{5 + 3n} = 0$ ✓

由交错级数判别法，级数收敛。

判断绝对收敛：$\sum_{n=1}^{\infty} |a_n| = \sum_{n=1}^{\infty} \frac{1}{5 + 3n}$。

与调和级数比较：$\frac{1}{5 + 3n} \sim \frac{1}{3n}$，由极限比较判别法知 $\sum \frac{1}{5+3n}$ 发散。

因此，级数**条件收敛**。$\blacksquare$

---

**例 5.** 用比值判别法判别级数 $\sum_{n=1}^{\infty} \frac{n^n}{n!}$ 的收敛性。

**解.** 计算比值极限：

$$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)^{n+1}}{(n+1)!} \cdot \frac{n!}{n^n} = \lim_{n \to \infty} \frac{(n+1)^{n+1}}{(n+1) \cdot n^n} = \lim_{n \to \infty} \frac{(n+1)^n}{n^n} = \lim_{n \to \infty} \left(\frac{n+1}{n}\right)^n = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

因为 $e \approx 2.718 > 1$，由比值判别法，级数发散。$\blacksquare$

## 📝 本周知识点总结

1. **收敛必要条件**：$\lim a_n = 0$ 是收敛的必要而非充分条件（调和级数是经典反例）
2. **几何级数**和 **$p$-级数**是最常用的比较基准
3. **积分判别法**适用于 $f(n) = a_n$ 可积分的情形，同时提供余项估计
4. **比较判别法**和**极限比较判别法**通过与其他级数比较来判断敛散性
5. **交错级数判别法**（Leibniz 判别法）处理正负交替的级数
6. **绝对收敛**是比收敛更强的条件：绝对收敛 $\Rightarrow$ 收敛
7. **比值判别法**适合含 $n!$ 或指数项的级数；**根值判别法**适合含 $n$ 次方的级数
8. 当比值判别法和根值判别法给出 $L = 1$ 时，需换用其他方法
