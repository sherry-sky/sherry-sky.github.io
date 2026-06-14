> **📎 源文件：** `旧资料/09 Lecture/Week 26-Tutorial-1-7-2025.pdf`

---

# Week 26: 综合复习

## 📌 知识点概述

本周为期末综合复习，系统回顾整个微积分 1M 课程的核心内容，涵盖：数列与级数（Week 11–13）、幂级数与 Taylor 级数（Week 23–25），并通过综合例题将各章知识串联。重点在于灵活运用各种判别法和展开技巧解决综合问题。

## 📖 核心内容

### 一、数列（Week 11）

**核心概念**：
- 数列极限的 $\epsilon$-$N$ 定义
- 函数极限法：$f(n) = a_n$，$\lim_{x \to \infty} f(x) = L \Rightarrow \lim_{n \to \infty} a_n = L$
- 夹逼定理、极限运算法则
- 单调有界定理：有界的单调数列必收敛
- 递推数列求极限：设 $L = \lim a_n$，解 $L = g(L)$

**特殊数列**：
- $\{r^n\}$：$|r| < 1$ 时收敛于 $0$，$r = 1$ 时为 $1$，$|r| > 1$ 或 $r \leq -1$ 时发散
- $\frac{n!}{n^n}$：用夹逼定理证明收敛于 $0$

### 二、级数收敛性判别（Week 12–13）

**判别法速查表**：

| 判别法 | 适用场景 | 结论 |
|--------|----------|------|
| 发散检验 | $\lim a_n \neq 0$ | 发散 |
| 几何级数 | $\sum ar^n$ | $|r| < 1$ 收敛 |
| $p$-级数 | $\sum \frac{1}{n^p}$ | $p > 1$ 收敛 |
| 积分判别法 | $f(n) = a_n$，$f$ 连续正递减 | 与 $\int f(x)dx$ 同敛散 |
| 比较判别法 | 可与已知级数比较 | 大收敛则小收敛，小发散则大发散 |
| 极限比较判别法 | 通项含多项式/根式 | $\lim \frac{a_n}{b_n} = c > 0$ 同敛散 |
| 交错级数 | $\sum (-1)^n b_n$ | $b_n \downarrow 0$ 则收敛 |
| 比值判别法 | 含 $n!$ 或指数 | $L < 1$ 绝对收敛，$L > 1$ 发散 |
| 根值判别法 | 含 $n$ 次方 | $L < 1$ 绝对收敛，$L > 1$ 发散 |

**绝对收敛与条件收敛**：
- 绝对收敛 $\Rightarrow$ 收敛
- 条件收敛：级数收敛但不绝对收敛（如交错调和级数）

### 三、幂级数（Week 24）

**收敛半径求法**：
- 比值判别法：$R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|$
- 根值判别法：$R = \frac{1}{\lim_{n \to \infty} \sqrt[n]{|c_n|}}$
- 端点必须单独检验

**函数展开为幂级数的方法**：
1. **几何级数法**：化为 $\frac{1}{1-r}$ 的形式
2. **逐项求导**：$f(x) = g'(x) \Rightarrow$ 对 $g$ 的级数逐项求导
3. **逐项积分**：$f(x) = \int g(x)\,dx \Rightarrow$ 对 $g$ 的级数逐项积分
4. **代入/复合**：将 $x$ 替换为 $g(x)$

### 四、Taylor 级数与二项式级数（Week 25）

**Taylor 级数**：

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

**Taylor 不等式**：$|R_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$

**二项式级数**：

$$(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n, \quad \binom{k}{n} = \frac{k(k-1)\cdots(k-n+1)}{n!}$$

收敛区间：$k \in \mathbb{N}$ 时为有限和；$k \notin \mathbb{N}$ 时 $R = 1$，端点敛散性取决于 $k$。

### 典型例题

**例 1.** 求 $\sum_{n=1}^{\infty} \frac{(2x-5)^n}{\sqrt{n+2}}$ 的收敛区间。

**解.** 比值判别法：

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \frac{|2x-5|^{n+1}}{\sqrt{n+3}} \cdot \frac{\sqrt{n+2}}{|2x-5|^n} = |2x-5| \cdot 1 = |2x-5|$$

收敛条件：$|2x - 5| < 1$，即 $2 < x < 3$，$R = \frac{1}{2}$。

**端点检验**：
- $x = 3$：$\sum \frac{1}{\sqrt{n+2}}$，$p = \frac{1}{2} \leq 1$，发散。
- $x = 2$：$\sum \frac{(-1)^n}{\sqrt{n+2}}$，由 Leibniz 判别法（$\frac{1}{\sqrt{n+2}}$ 递减趋于 $0$），收敛。

收敛区间为 $[2, 3)$。$\blacksquare$

---

**例 2.** 将 $f(x) = \frac{1}{1-x^2}$ 和 $g(x) = \frac{x}{(1-x^2)^2}$ 表示为幂级数。

**解.**

**$f(x)$ 的展开**：利用几何级数，取 $r = x^2$：

$$f(x) = \frac{1}{1-x^2} = \sum_{n=0}^{\infty} x^{2n} = 1 + x^2 + x^4 + x^6 + \cdots \quad (|x| < 1)$$

**$g(x)$ 的展开**：注意到 $\frac{d}{dx}\left(\frac{1}{1-x^2}\right) = \frac{2x}{(1-x^2)^2}$，故：

$$g(x) = \frac{x}{(1-x^2)^2} = \frac{1}{2} \frac{d}{dx} \sum_{n=0}^{\infty} x^{2n} = \frac{1}{2} \sum_{n=1}^{\infty} 2n x^{2n-1} = \sum_{n=1}^{\infty} n x^{2n-1} \quad (|x| < 1)$$

$\blacksquare$

---

**例 3.** 判别级数 $\sum_{n=1}^{\infty} (-1)^n \frac{n!}{n^n}$ 的敛散性。

**解.** 用比值判别法：

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{(n+1) \cdot n!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1 + \frac{1}{n}\right)^n}$$

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \frac{1}{e} \approx 0.368 < 1$$

由比值判别法，级数**绝对收敛**。$\blacksquare$

---

**例 4.** 求 $f(x) = \frac{1}{x+5}$ 在 $a = -2$ 处的 Taylor 级数及收敛区间。

**解.** 改写为几何级数形式：

$$f(x) = \frac{1}{3 + (x+2)} = \frac{1}{3} \cdot \frac{1}{1 - \left(-\frac{x+2}{3}\right)} = \frac{1}{3} \sum_{n=0}^{\infty} \left(-\frac{x+2}{3}\right)^n = \sum_{n=0}^{\infty} \frac{(-1)^n}{3^{n+1}} (x+2)^n$$

收敛条件：$\left|\frac{x+2}{3}\right| < 1$，即 $|x + 2| < 3$，$R = 3$。

**端点检验**：
- $x = 1$：$\sum \frac{(-1)^n}{3}$，通项不趋于 $0$，发散。
- $x = -5$：$\sum \frac{(-1)^n (-3)^n}{3^{n+1}} = \sum \frac{1}{3}$，通项不趋于 $0$，发散。

收敛区间为 $(-5, 1)$。$\blacksquare$

---

**例 5.** 设 $g(x) = \left(1 + \frac{\pi}{4}\right)x - \frac{1}{2}x^2$，$h(x) = x\arctan x - \frac{1}{2}\ln(x^2 + 1)$。设

$$f(x) = \int_0^{g(x) - h(x)} \frac{t^4 + 3}{e^t + 1}\,dt$$

求 $f(x)$ 在 $(0, +\infty)$ 上的极值。

**解.**

**第一步：求 $f'(x)$。** 由微积分基本定理：

$$f'(x) = \frac{(g(x) - h(x))^4 + 3}{e^{g(x) - h(x)} + 1} \cdot (g'(x) - h'(x))$$

因为被积函数 $\frac{t^4 + 3}{e^t + 1} > 0$ 恒成立，所以 $f'(x)$ 的符号完全由 $g'(x) - h'(x)$ 决定。

**第二步：计算 $g'(x) - h'(x)$。**

$$g'(x) = 1 + \frac{\pi}{4} - x$$

$$h'(x) = \arctan x + x \cdot \frac{1}{x^2 + 1} - \frac{1}{2} \cdot \frac{2x}{x^2 + 1} = \arctan x + \frac{x}{x^2+1} - \frac{x}{x^2+1} = \arctan x$$

因此：

$$g'(x) - h'(x) = 1 + \frac{\pi}{4} - x - \arctan x$$

**第三步：求 $f'(x) = 0$ 的点。**

令 $g'(x) - h'(x) = 0$，即 $1 + \frac{\pi}{4} - x - \arctan x = 0$。

注意到 $x = 1$ 是一个根：$1 + \frac{\pi}{4} - 1 - \arctan 1 = \frac{\pi}{4} - \frac{\pi}{4} = 0$。 ✓

**第四步：判断极值类型。**

设 $\phi(x) = 1 + \frac{\pi}{4} - x - \arctan x$，则 $\phi'(x) = -1 - \frac{1}{1+x^2} < 0$，故 $\phi(x)$ 严格递减。

- 当 $0 < x < 1$ 时，$\phi(x) > \phi(1) = 0$，即 $f'(x) > 0$，$f$ 递增。
- 当 $x > 1$ 时，$\phi(x) < \phi(1) = 0$，即 $f'(x) < 0$，$f$ 递减。

因此 $f$ 在 $x = 1$ 处取得**局部极大值**，也是 $(0, +\infty)$ 上的**最大值**。$\blacksquare$

## 📝 本周知识点总结

1. **数列与级数**是整个学期的核心：从数列极限到级数收敛性，再到幂级数展开，形成完整的知识链
2. **判别法的选择**是关键技能：
   - 含 $n!$ 或指数 $\to$ 比值判别法
   - 含 $n$ 次方 $\to$ 根值判别法
   - 有理函数/根式 $\to$ 极限比较判别法
   - 交错符号 $\to$ 先检验绝对收敛，再用 Leibniz 判别法
3. **幂级数**的核心操作：求收敛半径（比值法） $\to$ 检验端点 $\to$ 用已知展开式表示函数
4. **Taylor 级数**的应用：近似计算函数值、定积分、极限
5. **微积分基本定理**与 Taylor 级数的结合是综合题的常见考点
6. 复习建议：重点掌握每种判别法的适用条件和典型例题的解题思路
