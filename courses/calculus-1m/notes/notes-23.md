> **📎 源文件：** `旧资料/09 Lecture/Week 23-Class-12-30-2024.pdf`

---

# Week 23: 级数进阶

## 📌 知识点概述

本周在 Week 12 的基础上深入学习级数的收敛性判别方法。重点包括：几何级数的灵活运用、比较判别法的详细证明、极限比较判别法的深入应用、交错级数判别法及其余项估计、绝对收敛与条件收敛的判定，以及比值判别法和根值判别法。

## 📖 核心内容

### 定义

**几何级数**：

$$\sum_{n=0}^{\infty} r^n = \frac{1}{1-r} \quad (|r| < 1), \qquad \sum_{n=k}^{\infty} r^n = \frac{r^k}{1-r} \quad (|r| < 1)$$

**绝对收敛与条件收敛**：
- $\sum a_n$ **绝对收敛** $\iff$ $\sum |a_n|$ 收敛
- $\sum a_n$ **条件收敛** $\iff$ $\sum a_n$ 收敛但 $\sum |a_n|$ 发散

### 定理

**定理 1（积分判别法）**：设 $f$ 在 $[1, \infty)$ 上连续、正值、递减，$f(n) = a_n$，则 $\sum_{n=1}^{\infty} a_n$ 与 $\int_1^{\infty} f(x)\,dx$ 同敛散。

**定理 2（比较判别法）**：设 $0 < a_n \leq b_n$：
1. 若 $\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛
2. 若 $\sum a_n$ 发散 $\Rightarrow$ $\sum b_n$ 发散

**定理 3（极限比较判别法）**：设 $a_n, b_n > 0$，$\lim_{n \to \infty} \frac{a_n}{b_n} = c > 0$，则两级数同敛散。

**定理 4（交错级数判别法 / Leibniz 判别法）**：设 $b_n > 0$，$\{b_n\}$ 递减且 $\lim b_n = 0$，则 $\sum_{n=1}^{\infty} (-1)^{n-1} b_n$ 收敛。

**定理 5（交错级数余项估计）**：$|R_n| \leq b_{n+1}$。

**定理 6（绝对收敛蕴含收敛）**：若 $\sum |a_n|$ 收敛，则 $\sum a_n$ 收敛。

**证明思路**：由 $0 \leq a_n + |a_n| \leq 2|a_n|$，若 $\sum |a_n|$ 收敛，则 $\sum 2|a_n|$ 收敛。由比较判别法 $\sum (a_n + |a_n|)$ 收敛。因此 $\sum a_n = \sum (a_n + |a_n|) - \sum |a_n|$ 为两个收敛级数之差，故收敛。

**定理 7（比值判别法）**：$L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$：
- $L < 1 \Rightarrow$ 绝对收敛
- $L > 1$ 或 $L = \infty \Rightarrow$ 发散
- $L = 1 \Rightarrow$ 不确定

**定理 8（根值判别法）**：$L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$：
- $L < 1 \Rightarrow$ 绝对收敛
- $L > 1$ 或 $L = \infty \Rightarrow$ 发散
- $L = 1 \Rightarrow$ 不确定

### 重要公式

**$p$-级数**：$\sum_{n=1}^{\infty} \frac{1}{n^p}$，$p > 1$ 收敛，$p \leq 1$ 发散。

**几何级数余项**：$R_n = \sum_{k=n+1}^{\infty} r^k = \frac{r^{n+1}}{1-r}$

**比较判别法的余项估计**：若 $0 < a_n \leq b_n$，则 $R_n^{(a)} \leq R_n^{(b)}$。

### 典型例题

**例 1.** 计算 $\sum_{n=4}^{\infty} \frac{3^n}{2^{2n}}$。

**解.** 化简通项：

$$\frac{3^n}{2^{2n}} = \frac{3^n}{4^n} = \left(\frac{3}{4}\right)^n$$

这是几何级数，$r = \frac{3}{4}$，$|r| < 1$，从 $n = 4$ 开始：

$$\sum_{n=4}^{\infty} \left(\frac{3}{4}\right)^n = \frac{(3/4)^4}{1 - 3/4} = \frac{81/256}{1/4} = \frac{81}{256} \cdot 4 = \frac{81}{64}$$

$$\boxed{\sum_{n=4}^{\infty} \frac{3^n}{2^{2n}} = \frac{81}{64}}$$

$\blacksquare$

---

**例 2.** 判别级数 $\sum_{n=1}^{\infty} \frac{\ln n}{n}$ 的敛散性。

**解.** 对 $n \geq 3$，$\ln n > 1$，故 $\frac{\ln n}{n} > \frac{1}{n}$。

调和级数 $\sum_{n=1}^{\infty} \frac{1}{n}$ 发散。

由比较判别法：

$$\sum_{n=3}^{\infty} \frac{\ln n}{n} \geq \sum_{n=3}^{\infty} \frac{1}{n} = \infty$$

因此 $\sum_{n=1}^{\infty} \frac{\ln n}{n}$ 发散。$\blacksquare$

---

**例 3.** 判别级数 $\sum_{n=1}^{\infty} \frac{\sqrt{4n^2 + 3n - 1}}{7n^5 - 2}$ 的敛散性。

**解.** 分析主导项：

$$a_n = \frac{\sqrt{4n^2 + 3n - 1}}{7n^5 - 2} = \frac{n\sqrt{4 + 3/n - 1/n^2}}{n^5(7 - 2/n^5)} = \frac{\sqrt{4 + 3/n - 1/n^2}}{n^4(7 - 2/n^5)} \approx \frac{2}{7n^4}$$

取 $b_n = \frac{1}{n^4}$（$p$-级数，$p = 4 > 1$，收敛）。

$$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{\sqrt{4 + 3/n - 1/n^2}}{7 - 2/n^5} = \frac{\sqrt{4}}{7} = \frac{2}{7} > 0$$

由极限比较判别法，原级数收敛。$\blacksquare$

---

**例 4.** 判别级数 $\sum_{n=7}^{\infty} (-1)^{n+1} \frac{n^2}{n^3 - 216}$ 的敛散性。

**解.** 设 $b_n = \frac{n^2}{n^3 - 216}$。注意 $\sqrt[3]{216} = 6$，故在 $n \geq 7$ 时分母为正。

**条件 1（递减）**：设 $f(x) = \frac{x^2}{x^3 - 216}$，

$$f'(x) = \frac{2x(x^3 - 216) - x^2 \cdot 3x^2}{(x^3 - 216)^2} = \frac{-x^4 - 432x}{(x^3 - 216)^2} < 0 \quad \forall x > 6$$

故 $f$ 在 $(6, \infty)$ 上递减，$\{b_n\}_{n \geq 7}$ 递减。 ✓

**条件 2（趋于零）**：

$$\lim_{n \to \infty} \frac{n^2}{n^3 - 216} = \lim_{n \to \infty} \frac{1/n}{1 - 216/n^3} = 0 \quad \checkmark$$

由交错级数判别法，级数收敛。$\blacksquare$

---

**例 5.** 用根值判别法判断级数 $\sum_{n=1}^{\infty} (-1)^n \left(\frac{2n+3}{5n+2}\right)^n$ 的敛散性。

**解.** 对绝对值项应用根值判别法：

$$L = \lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} \sqrt[n]{\left(\frac{2n+3}{5n+2}\right)^n} = \lim_{n \to \infty} \frac{2n+3}{5n+2} = \lim_{n \to \infty} \frac{2 + 3/n}{5 + 2/n} = \frac{2}{5}$$

因为 $L = \frac{2}{5} < 1$，由根值判别法，级数**绝对收敛**，因此也收敛。$\blacksquare$

## 📝 本周知识点总结

1. 几何级数 $\sum r^n$ 是最基本的收敛级数工具，需灵活运用其变形
2. **比较判别法**需要找到合适的比较对象（通常用 $p$-级数或几何级数）
3. **极限比较判别法**在通项为有理函数或含根式时特别有效：提取主导项
4. **交错级数判别法**需验证两个条件：递减和趋于零
5. **绝对收敛**是比收敛更强的条件，可通过判断 $\sum |a_n|$ 的敛散性来确定
6. **比值判别法**适合含 $n!$ 或指数项的级数；**根值判别法**适合通项含 $n$ 次方的级数
7. 当 $L = 1$ 时，比值和根值判别法均失效，需改用其他方法
