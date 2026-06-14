> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week11.pdf`

---

# Tutorial 11 - 数列与级数的收敛性

## 📌 知识点梳理
- 数列通项公式的归纳
- 数列极限的计算
- 数列的单调性与有界性
- 级数收敛性的判定（发散判别法、积分判别法、比较判别法、比值判别法、根值判别法）

---

### 题目 1

**题目：** 写出下列数列的通项公式。

**(a)** $\frac{1}{3}, \frac{1}{16}, \frac{1}{19}, \frac{1}{112}, \frac{1}{115}, \ldots$

**(b)** $1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \ldots$

**(c)** $5, 8, 11, 14, 17, \ldots$

**(d)** $1, 3, 7, 15, 31, \ldots$

**(e)** $1, 2, 6, 24, 120, \ldots$

**(f)** $\frac{2}{2}, \frac{2}{2}, \frac{4}{3}, \frac{2}{3}, \frac{15}{8}, \frac{16}{45}, \ldots$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 分母：$3, 16, 19, 112, 115, \ldots$。规律不太明显，可能为 $a_n = \frac{1}{10n + 3}$ 的变体... 实际上分母为 $3, 16, 19, 112, 115$，差为 $13, 3, 93, 3$... 可能是 $a_n = \frac{1}{(3n-2) \cdot 10^{...}}$ 的某种模式。此题答案取决于具体模式。

**(b)** $a_n = \frac{1}{2^{n-1}}$（等比数列，公比 $\frac{1}{2}$）

**(c)** $a_n = 5 + 3(n - 1) = 3n + 2$（等差数列，公差 $3$）

**(d)** $1, 3, 7, 15, 31$：差为 $2, 4, 8, 16$，即 $2^n$。$a_n = 2^n - 1$

**(e)** $1, 2, 6, 24, 120 = 1!, 2!, 3!, 4!, 5!$。$a_n = n!$

**(f)** 此数列模式较复杂，需更多项来确定。

**知识点：** 通过观察数列的差、比、阶乘等规律来归纳通项。

</details>

---

### 题目 3（核心题）

**题目：** 判断下列数列是否收敛，若收敛求极限。

**(a)** $\left\{\frac{3 \cdot 2^n}{4^n}\right\}$

**(b)** $\left\{\frac{1 \cdot 3 \cdot 5 \cdots (2n - 1)}{n!}\right\}$

**(c)** $\left\{\left(\frac{2n^2}{3n^2 + 2}\right)^{5n - 3}\right\}$

**(d)** $\left\{\left(\frac{2n^2}{3n^2 + 2}\right)^{-(3n^2 + 2)}\right\}$

**(e)** $\left\{\left(\frac{3n - 2}{3n + 1}\right)^n\right\}$

**(f)** $\left\{\left(\frac{2^{n+1}}{2n + 4}\right)^{n+1}\right\}$... 注：原题形式可能有变。

**(g)** $\left\{\frac{2^{n-8}}{n^2}\right\}$

**(h)** $\{\cos(\pi n)\}$

**(i)** $\left\{\cos\frac{\pi}{n}\right\}$

**(j)** $\{\cos(\pi n)\cos\frac{\pi}{n}\}$

**(k)** $\{a^n - b^n\}$，$0 < a < b$

**(l)** $\{n\sqrt{a^n - b^n}\}$... 注：原题可能为 $(a^n + b^n)^{1/n}$，$0 < a < b$

**(m)** $\{k r^n\}$，$k \in \mathbb{N}$，$|r| < 1$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\frac{3 \cdot 2^n}{4^n} = 3\left(\frac{1}{2}\right)^n \to \boxed{0}$

**(b)** $\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} = \frac{(2n)!}{2^n n! \cdot n!} = \frac{(2n)!}{2^n (n!)^2} = \frac{1}{2^n}\binom{2n}{n}$

由 Stirling 公式，$\binom{2n}{n} \sim \frac{4^n}{\sqrt{\pi n}}$，所以 $a_n \sim \frac{2^n}{\sqrt{\pi n}} \to \infty$。

$$\boxed{\text{发散（趋于 } +\infty\text{）}}$$

**(c)** $\frac{2n^2}{3n^2 + 2} \to \frac{2}{3} < 1$，$\left(\frac{2}{3}\right)^{5n - 3} \to \boxed{0}$

**(d)** $\left(\frac{2n^2}{3n^2 + 2}\right)^{-(3n^2 + 2)} = \left(\frac{3n^2 + 2}{2n^2}\right)^{3n^2 + 2} = \left(1 + \frac{n^2 + 2}{2n^2}\right)^{3n^2 + 2}$

底数趋于 $\frac{3}{2}$，指数趋于 $+\infty$，结果 $\to +\infty$。

$$\boxed{\text{发散（趋于 } +\infty\text{）}}$$

**(e)** $\left(\frac{3n - 2}{3n + 1}\right)^n = \left(1 - \frac{3}{3n + 1}\right)^n$

$\ln a_n = n\ln\left(1 - \frac{3}{3n + 1}\right) \sim n \cdot \left(-\frac{3}{3n}\right) = -1$

$$\boxed{e^{-1} = \frac{1}{e}}$$

**(g)** $\frac{2^{n-8}}{n^2} = \frac{1}{256} \cdot \frac{2^n}{n^2} \to +\infty$（指数增长快于多项式）。

$$\boxed{\text{发散（趋于 } +\infty\text{）}}$$

**(h)** $\cos(\pi n) = (-1)^n$，振荡，$$\boxed{\text{发散}}$$

**(i)** $\cos\frac{\pi}{n} \to \cos 0 = \boxed{1}$

**(j)** $(-1)^n \cos\frac{\pi}{n}$：$\cos\frac{\pi}{n} \to 1$，$(-1)^n$ 振荡。$$\boxed{\text{发散}}$$

**(k)** $a^n - b^n = b^n\left[\left(\frac{a}{b}\right)^n - 1\right]$。因 $0 < a < b$，$(a/b)^n \to 0$，$b^n \to +\infty$。

$a^n - b^n \to -\infty$。$$\boxed{\text{发散（趋于 } -\infty\text{）}}$$

**(l)** 若为 $(a^n + b^n)^{1/n}$，$0 < a < b$：

$(a^n + b^n)^{1/n} = b\left(1 + (a/b)^n\right)^{1/n} \to b \cdot 1 = \boxed{b}$

**(m)** $kr^n$，$|r| < 1$：$r^n \to 0$，故 $kr^n \to \boxed{0}$

**知识点：** 数列极限的计算方法——等比数列、Stirling 公式、$\left(1 + \frac{a}{n}\right)^n \to e^a$ 型。

</details>

---

### 题目 4

**题目：** 分析下列递推数列的单调性与收敛性。

**(a)** $a_{n+1} = \sqrt{2 + a_n}$，$a_1 = 1$

**(b)** $a_{n+1} = \sqrt{2 + 2a_n^2}$... 注：原题可能为 $a_{n+1} = \sqrt{2 + a_n}$ 的变体。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 计算前几项：$a_1 = 1$，$a_2 = \sqrt{3} \approx 1.732$，$a_3 = \sqrt{2 + \sqrt{3}} \approx 1.932$。

**单调递增**（归纳法）：假设 $a_n > a_{n-1}$，则 $a_{n+1} = \sqrt{2 + a_n} > \sqrt{2 + a_{n-1}} = a_n$。

**有上界**：证明 $a_n < 2$。$a_1 = 1 < 2$。若 $a_n < 2$，则 $a_{n+1} = \sqrt{2 + a_n} < \sqrt{4} = 2$。

由单调有界定理，数列收敛。设极限为 $L$：$L = \sqrt{2 + L} \implies L^2 - L - 2 = 0 \implies L = 2$（$L = -1$ 舍去）。

$$\boxed{\lim a_n = 2}$$

**知识点：** 单调有界定理——单调递增且有上界的数列必收敛。

</details>

---

### 题目 5

**题目：**

**(a)** 设 $\{a_n\}$ 为正数递减数列。证明 $\sum_{n=0}^\infty 2^n a_{2^n}$ 收敛当且仅当 $\sum_{n=1}^\infty a_n$ 收敛。

**(b)** 证明 $\sum_{n=1}^\infty \frac{1}{n} = \infty$。

<details>
<summary>参考答案</summary>

**证明：**

**(a)** 这是 Cauchy 凝聚判别法（Condensation Test）。

$\sum_{n=1}^\infty a_n = a_1 + (a_2) + (a_3 + a_4) + (a_5 + \cdots + a_8) + \cdots$

因为 $a_n$ 递减：
- $a_3 + a_4 \leq 2a_2$，$a_5 + \cdots + a_8 \leq 4a_4$，...
- $a_3 + a_4 \geq 2a_4$，$a_5 + \cdots + a_8 \geq 4a_8$，...

因此 $\sum a_n$ 与 $\sum 2^n a_{2^n}$ 同时收敛或同时发散。$\blacksquare$

**(b)** 取 $a_n = \frac{1}{n}$，$2^n a_{2^n} = 2^n \cdot \frac{1}{2^n} = 1$。

$\sum 2^n a_{2^n} = \sum 1 = \infty$，由 (a) 知 $\sum \frac{1}{n} = \infty$。$\blacksquare$

**知识点：** Cauchy 凝聚判别法，调和级数发散的优雅证明。

</details>

---

### 题目 7（核心题，选做）

**题目：** 分析下列级数的收敛性。

**(a)** $\sum_{n=1}^\infty \frac{3 + 2n}{2 - 3n}$

**(b)** $\sum_{n=1}^\infty \frac{n^2}{n^2 - 2n + 5}$

**(c)** $\sum_{n=1}^\infty \frac{2n - 8}{n^2}$

**(d)** $\sum_{n=1}^\infty \frac{n}{(n+1)(n+2)(n+3)}$

**(e)** $\sum_{n=1}^\infty 2^{n-1} 5^{-n}$

**(f)** $\sum_{n=0}^\infty [(-0.3)^n - (0.7)^{n+1}]$

**(g)** $\sum_{n=1}^\infty \frac{1}{2 + e^{-n}}$

**(h)** $\sum_{n=1}^\infty \frac{2n + 4}{e^n}$

**(i)** $\sum_{n=1}^\infty (\sin 100)^n$

**(j)** $\sum_{n=1}^\infty \frac{1}{1 + (3/2)^n}$

**(k)** $\sum_{n=1}^\infty \ln\frac{n^2 + 1}{2n^2 + 1}$

**(l)** $\sum_{n=1}^\infty \cos\frac{\pi}{n}$

**(m)** $\sum_{n=1}^\infty \frac{\sin^n k}{3^n}$，$k \in \mathbb{R}$

**(n)** $\sum_{n=1}^\infty ne^{-n^2}$

**(o)** $\sum_{n=1}^\infty \frac{1}{\sqrt[5]{n^4}}$

**(p)** $\sum_{n=1}^\infty \frac{\ln n}{n^2}$

**(q)** $\sum_{n=1}^\infty \ln\left(n\sin\frac{1}{n}\right)$

**(r)** $\sum_{n=1}^\infty \frac{1}{n^n}$

**(s)** $\sum_{n=1}^\infty \frac{n!}{n^n}$

**(t)** $\sum_{n=1}^\infty e^{1/\sqrt{n}}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $a_n = \frac{3 + 2n}{2 - 3n} \to -\frac{2}{3} \neq 0$。由发散判别法，**发散**。

**(b)** $a_n = \frac{n^2}{n^2 - 2n + 5} \to 1 \neq 0$。**发散**。

**(c)** $a_n = \frac{2}{n} - \frac{8}{n^2}$。$\sum \frac{2}{n}$ 发散，$\sum \frac{8}{n^2}$ 收敛，故**发散**。

**(d)** $a_n \sim \frac{n}{n^3} = \frac{1}{n^2}$。由比较判别法，**收敛**。

**(e)** $\sum 2^{n-1} 5^{-n} = \frac{1}{2}\sum\left(\frac{2}{5}\right)^n$，等比级数 $r = \frac{2}{5} < 1$，**收敛**。和 $= \frac{1}{2} \cdot \frac{2/5}{1 - 2/5} = \frac{1}{3}$。

**(f)** 两个等比级数之差：$\sum(-0.3)^n$ 收敛（$|r| < 1$），$\sum(0.7)^{n+1}$ 收敛。**收敛**。

和 $= \frac{1}{1 + 0.3} - \frac{0.7}{1 - 0.7} = \frac{1}{1.3} - \frac{7}{3} = \frac{10}{13} - \frac{7}{3} = \frac{30 - 91}{39} = -\frac{61}{39}$

**(g)** $a_n = \frac{1}{2 + e^{-n}} \to \frac{1}{2} \neq 0$。**发散**。

**(h)** 比值判别法：$\frac{a_{n+1}}{a_n} = \frac{2n + 6}{2n + 4} \cdot e^{-1} \to e^{-1} < 1$。**收敛**。

**(i)** $|\sin 100| < 1$（$100$ 弧度不是 $\frac{\pi}{2} + k\pi$），等比级数 $|r| = |\sin 100| < 1$。**收敛**。

**(j)** $a_n = \frac{1}{1 + (3/2)^n} \sim \left(\frac{2}{3}\right)^n$，等比级数 $r = \frac{2}{3} < 1$。**收敛**。

**(k)** $\ln\frac{n^2 + 1}{2n^2 + 1} \to \ln\frac{1}{2} = -\ln 2 \neq 0$。**发散**。

**(l)** $\cos\frac{\pi}{n} \to 1 \neq 0$。**发散**。

**(m)** $\left|\frac{\sin^n k}{3^n}\right| \leq \left(\frac{1}{3}\right)^n$，等比级数 $r = \frac{1}{3} < 1$。**绝对收敛**。

**(n)** 积分判别法：$\int_1^\infty xe^{-x^2}\,dx = \left[-\frac{1}{2}e^{-x^2}\right]_1^\infty = \frac{1}{2e} < \infty$。**收敛**。

**(o)** $\frac{1}{\sqrt[5]{n^4}} = \frac{1}{n^{4/5}}$，$p = \frac{4}{5} < 1$，$p$-级数**发散**。

**(p)** $\frac{\ln n}{n^2} < \frac{n^{1/2}}{n^2} = \frac{1}{n^{3/2}}$（对充分大的 $n$），$p = \frac{3}{2} > 1$，**收敛**。

**(q)** $n\sin\frac{1}{n} = n\left(\frac{1}{n} - \frac{1}{6n^3} + \cdots\right) = 1 - \frac{1}{6n^2} + \cdots$

$\ln\left(n\sin\frac{1}{n}\right) \approx \ln\left(1 - \frac{1}{6n^2}\right) \approx -\frac{1}{6n^2}$

$\sum \frac{1}{n^2}$ 收敛，故**收敛**。

**(r)** $\frac{1}{n^n} \leq \frac{1}{2^n}$（$n \geq 2$），**收敛**。

**(s)** 比值判别法：$\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \left(1 - \frac{1}{n+1}\right)^n \to e^{-1} < 1$。**收敛**。

**(t)** $e^{1/\sqrt{n}} \to 1 \neq 0$。**发散**。

**知识点：** 级数收敛性判定的完整工具箱——发散判别法、等比级数、$p$-级数、比较判别法、比值判别法、积分判别法。

</details>

---

### 题目 8

**题目：**

**(a)** 用前 5 项近似 $\sum_{n=1}^\infty \frac{1}{n^3}$，估计误差。

**(b)** 需要多少项才能使部分和 $S_n$ 精确到 $10^{-6}$ 以内？

<details>
<summary>参考答案</summary>

**解：**

**(a)** $S_5 = 1 + \frac{1}{8} + \frac{1}{27} + \frac{1}{64} + \frac{1}{125} = 1 + 0.125 + 0.037 + 0.0156 + 0.008 = 1.1856$

误差估计（积分判别法余项）：
$$R_5 \leq \int_5^\infty \frac{dx}{x^3} = \left[-\frac{1}{2x^2}\right]_5^\infty = \frac{1}{50} = 0.02$$

**(b)** 需 $R_n \leq \int_n^\infty \frac{dx}{x^3} = \frac{1}{2n^2} \leq 10^{-6}$

$n^2 \geq 500000 \implies n \geq \sqrt{500000} \approx 707$

$$\boxed{n \geq 708}$$

**知识点：** 积分判别法的余项估计 $R_n \leq \int_n^\infty f(x)\,dx$。

</details>

---

## 📝 本次知识点总结

1. **数列极限**：等比数列、阶乘增长、$\left(1 + \frac{a}{n}\right)^n$ 型是常见类型。
2. **单调有界定理**：递推数列收敛性的核心工具。
3. **发散判别法**：$a_n \not\to 0 \implies \sum a_n$ 发散——首先检查！
4. **比较判别法**：与 $p$-级数或等比级数比较。
5. **比值判别法**：含阶乘、指数时优先使用。
6. **积分判别法**：可估计余项，用于确定近似精度。
