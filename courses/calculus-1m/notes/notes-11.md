> **📎 源文件：** `旧资料/09 Lecture/Week 11-Class 21-Sequences.pdf`, `旧资料/09 Lecture/Week 11-Class 22-Sequences-and-Series.pdf`

---

# Week 11: 数列（Sequences）

## 📌 知识点概述

本周学习数列的基本概念、极限的定义与计算、单调性与有界性，以及递推数列的收敛性。数列是定义在正整数集上的函数，其极限理论是后续级数学习的基础。

## 📖 核心内容

### 定义

**数列（Sequence）**：一个数列是按正整数顺序排列的数的集合：

$$\{a_n : 1 \leq n,\; n \in \mathbb{N}\} = \{a_n\}_{n=1}^{\infty}$$

数列可以看作函数 $f: \mathbb{N} \to \mathbb{R}$，其中 $a_n = f(n)$。

**数列的极限**：数列 $\{a_n\}$ 有极限 $L \in \mathbb{R}$，记为 $\lim_{n \to \infty} a_n = L$，如果对任意 $\epsilon > 0$，存在 $N \in \mathbb{N}$，使得当 $n > N$ 时：

$$|a_n - L| < \epsilon$$

**无穷极限（发散到 $\infty$）**：$\lim_{n \to \infty} a_n = \infty$，如果对任意 $M > 0$，存在 $N \in \mathbb{N}$，使得当 $n > N$ 时 $a_n > M$。

**单调数列**：
- **递增数列**：$a_n < a_{n+1}$ 对所有 $n \geq 1$ 成立
- **递减数列**：$a_n > a_{n+1}$ 对所有 $n \geq 1$ 成立
- **单调数列**：递增或递减的数列

**有界数列**：
- **上有界**：存在 $M$ 使得 $a_n \leq M$ 对所有 $n \geq 1$
- **下有界**：存在 $m$ 使得 $m \leq a_n$ 对所有 $n \geq 1$

### 定理

**定理 1（函数极限法）**：若 $f(n) = a_n$ 且 $\lim_{x \to \infty} f(x) = L$，则 $\lim_{n \to \infty} a_n = L$。

**定理 2（极限运算法则）**：若 $\{a_n\}$ 和 $\{b_n\}$ 收敛，分别趋于 $L_1$ 和 $L_2$，则：
1. $\lim_{n \to \infty} (a_n + b_n) = L_1 + L_2$
2. $\lim_{n \to \infty} (a_n - b_n) = L_1 - L_2$
3. $\lim_{n \to \infty} c \cdot a_n = c \cdot L_1$
4. $\lim_{n \to \infty} a_n \cdot b_n = L_1 \cdot L_2$
5. $\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{L_1}{L_2}$（$L_2 \neq 0$）
6. $\lim_{n \to \infty} a_n^p = L_1^p$（$p > 0$）

**定理 3**：若 $\lim_{n \to \infty} |a_n| = 0$，则 $\lim_{n \to \infty} a_n = 0$。

**定理 4（夹逼定理）**：若 $a_n \leq b_n \leq c_n$（对所有 $n \geq n_0$），且 $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L$，则 $\lim_{n \to \infty} b_n = L$。

**定理 5（连续函数复合）**：若 $f$ 在 $L$ 处连续，且 $\lim_{n \to \infty} a_n = L$，则 $\lim_{n \to \infty} f(a_n) = f(L)$。

**定理 6（单调有界定理）**：每个有界的单调数列必收敛。
- 若 $\{a_n\}$ 递增有上界，则 $\lim_{n \to \infty} a_n = \sup S$
- 若 $\{a_n\}$ 递减有下界，则 $\lim_{n \to \infty} a_n = \inf S$

**命题**：序列 $\{r^n\}$ 在 $-1 < r \leq 1$ 时收敛，其余情况发散：
- 若 $-1 < r < 1$，则 $\lim_{n \to \infty} r^n = 0$
- 若 $r = 1$，则 $\lim_{n \to \infty} r^n = 1$

### 重要公式

- **Fibonacci 数列**：$f_1 = f_2 = 1$，$f_n = f_{n-1} + f_{n-2}$
- **数学归纳法**：证明 $P(1)$ 成立，再证明 $P(n) \Rightarrow P(n+1)$，则 $P(k)$ 对所有 $k \in \mathbb{N}$ 成立

### 典型例题

**例 1.** 求数列 $a_n = \frac{(-1)^n}{4^n}$ 的前几项，并判断其收敛性。

**解.** 前几项为：$-\frac{1}{4},\; \frac{1}{16},\; -\frac{1}{64},\; \frac{1}{256},\; -\frac{1}{1024},\; \ldots$

因为 $|a_n| = \left(\frac{1}{4}\right)^n$，且 $\lim_{n \to \infty} \left(\frac{1}{4}\right)^n = 0$（因为 $r = \frac{1}{4} \in (-1, 1)$），

由定理 3，$\lim_{n \to \infty} |a_n| = 0 \Rightarrow \lim_{n \to \infty} a_n = 0$。

数列收敛于 $0$。$\blacksquare$

---

**例 2.** 求极限 $\lim_{n \to \infty} \frac{\ln(n^2)}{4n^2 - 1}$。

**解.** 设 $f(x) = \frac{\ln(x^2)}{4x^2 - 1} = \frac{2\ln x}{4x^2 - 1}$，则 $f(n) = a_n$。

当 $x \to \infty$ 时，分子分母均趋于 $\infty$，应用洛必达法则：

$$\lim_{x \to \infty} \frac{2\ln x}{4x^2 - 1} = \lim_{x \to \infty} \frac{2/x}{8x} = \lim_{x \to \infty} \frac{2}{8x^2} = \lim_{x \to \infty} \frac{1}{4x^2} = 0$$

由定理 1，$\lim_{n \to \infty} a_n = 0$。$\blacksquare$

---

**例 3.** 证明 $\lim_{n \to \infty} \frac{1}{n} = 0$。

**解.** 给定 $\epsilon > 0$，分两种情况：

- **情况 $\epsilon \geq 1$**：取 $N = 1$，当 $n > 1$ 时，$\frac{1}{n} < 1 \leq \epsilon$。

- **情况 $0 < \epsilon < 1$**：取 $N = \min\{n \in \mathbb{N} : \frac{1}{\epsilon} < n\}$，当 $n > N > \frac{1}{\epsilon}$ 时：

$$\left|\frac{1}{n} - 0\right| = \frac{1}{n} < \epsilon$$

因此，对任意 $\epsilon > 0$，存在 $N$ 使得 $n > N \Rightarrow |a_n - 0| < \epsilon$，即 $\lim_{n \to \infty} \frac{1}{n} = 0$。$\blacksquare$

---

**例 4.** 判断数列 $a_n = \frac{n!}{n^n}$ 的收敛性。

**解.** 将 $a_n$ 展开：

$$a_n = \frac{n!}{n^n} = \frac{1 \cdot 2 \cdot 3 \cdots n}{n \cdot n \cdot n \cdots n} = \frac{1}{n} \cdot \frac{2 \cdot 3 \cdots n}{n \cdot n \cdots n}$$

括号中的表达式分子不超过分母，因此：

$$0 < a_n \leq \frac{1}{n}$$

因为 $\lim_{n \to \infty} \frac{1}{n} = 0$，由夹逼定理，$\lim_{n \to \infty} a_n = 0$。$\blacksquare$

---

**例 5.** 设 $a_1 = 2$，$a_{n+1} = \frac{1}{2}(a_n + 6)$，证明 $\{a_n\}$ 递增有界，并求其极限。

**解.**

**第一步：证明递增。** 用数学归纳法证明 $a_n < a_{n+1}$。

- 基础：$a_1 = 2 < 4 = a_2$。 ✓
- 归纳步骤：设 $a_n < a_{n+1}$，则 $a_n + 6 < a_{n+1} + 6$，故 $\frac{1}{2}(a_n + 6) < \frac{1}{2}(a_{n+1} + 6)$，即 $a_{n+1} < a_{n+2}$。 ✓

**第二步：证明有界。** 用归纳法证明 $2 \leq a_n < 6$。

- 基础：$a_1 = 2 < 6$。 ✓
- 归纳步骤：设 $a_n < 6$，则 $a_{n+1} = \frac{1}{2}(a_n + 6) < \frac{1}{2}(6 + 6) = 6$。 ✓

**第三步：求极限。** 由单调有界定理，极限存在。设 $L = \lim_{n \to \infty} a_n$，则：

$$L = \lim_{n \to \infty} a_{n+1} = \lim_{n \to \infty} \frac{1}{2}(a_n + 6) = \frac{1}{2}(L + 6)$$

解得 $2L = L + 6$，即 $L = 6$。$\blacksquare$

## 📝 本周知识点总结

1. 数列是定义在正整数集上的函数，极限的 $\epsilon$-$N$ 定义是核心工具
2. 求数列极限的常用方法：函数极限法（洛必达法则）、夹逼定理、极限运算法则
3. 单调有界定理是证明递推数列收敛的关键工具
4. 对递推数列 $a_{n+1} = g(a_n)$，若极限存在，可通过解方程 $L = g(L)$ 求得极限值
5. 数列 $r^n$ 在 $|r| < 1$ 时趋于 $0$，$r = 1$ 时为 $1$，$|r| > 1$ 或 $r \leq -1$ 时发散
