> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week12.pdf`

---

# Tutorial 12 - 交错级数、绝对收敛与条件收敛

## 📌 知识点梳理
- 交错级数判别法（Leibniz 判别法）
- 绝对收敛与条件收敛的区分
- 比值判别法与根值判别法
- 交错级数的余项估计

---

### 题目 1

**题目：**

**(a)** 证明对任意收敛数列 $\lim a_{n+1} = \lim a_n$。

**(b)** 设 $a_1 = 1$，$a_{n+1} = \frac{1}{1 + a_n}$，假设 $\{a_n\}$ 收敛，求极限。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 设 $\lim_{n \to \infty} a_n = L$。则 $\{a_{n+1}\}$ 是 $\{a_n\}$ 的子列（去掉第一项），子列与母列有相同极限。

故 $\lim_{n \to \infty} a_{n+1} = L = \lim_{n \to \infty} a_n$。$\blacksquare$

**(b)** 设 $\lim a_n = L$，则 $L = \frac{1}{1 + L} \implies L(1 + L) = 1 \implies L^2 + L - 1 = 0$

$L = \frac{-1 + \sqrt{5}}{2}$（取正值，因 $a_n > 0$）

$$\boxed{L = \frac{\sqrt{5} - 1}{2}}$$

**知识点：** 递推数列极限的求解——令 $a_{n+1}$ 和 $a_n$ 同时趋于 $L$。

</details>

---

### 题目 2

**题目：**

**(a)** 若 $\lim a_{2n} = L$ 且 $\lim a_{2n+1} = L$，证明 $\{a_n\}$ 收敛且极限为 $L$。

**(b)** $a_1 = 1$，$a_{n+1} = 1 + \frac{1}{1 + a_n}$。求前 8 项，证明 $\lim a_n = \sqrt{2}$。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 对任意 $\varepsilon > 0$，存在 $N_1$ 使 $n \geq N_1$ 时 $|a_{2n} - L| < \varepsilon$，存在 $N_2$ 使 $n \geq N_2$ 时 $|a_{2n+1} - L| < \varepsilon$。

取 $N = \max(2N_1, 2N_2 + 1)$，则 $k \geq N$ 时无论 $k$ 是奇数还是偶数，$|a_k - L| < \varepsilon$。$\blacksquare$

**(b)** 前 8 项：
$a_1 = 1$
$a_2 = 1 + \frac{1}{2} = 1.5$
$a_3 = 1 + \frac{1}{2.5} = 1.4$
$a_4 = 1 + \frac{1}{2.4} = 1.41\overline{6}$
$a_5 \approx 1.4138$
$a_6 \approx 1.4142$
$a_7 \approx 1.41421$
$a_8 \approx 1.41421$

这些值趋近 $\sqrt{2} \approx 1.41421356...$

设极限为 $L$：$L = 1 + \frac{1}{1 + L} = \frac{2 + L}{1 + L}$

$L(1 + L) = 2 + L \implies L^2 = 2 \implies L = \sqrt{2}$

这给出了 $\sqrt{2}$ 的连分数展开：$\sqrt{2} = 1 + \frac{1}{2 + \frac{1}{2 + \cdots}}$

**知识点：** 奇偶子列收敛到同一极限则母列收敛；连分数展开。

</details>

---

### 题目 3（核心题）

**题目：** 判断下列级数是绝对收敛、条件收敛还是发散。

**(a)** $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{5 + 3n}$

**(b)** $\sum_{n=0}^\infty \frac{(-1)^{n+1}}{\sqrt{n + 1}}$

**(c)** $\sum_{n=1}^\infty (-1)^n \frac{n^2}{n^2 + n - 1}$

**(d)** $\sum_{n=1}^\infty (-1)^n \frac{\sqrt{n}}{2n + 3}$

**(e)** $\sum_{n=1}^\infty (-1)^{n+1} \frac{n^2}{n^3 + 4}$

**(f)** $\sum_{n=1}^\infty (-1)^{n+1} ne^{-n}$

**(g)** $\sum_{n=1}^\infty (-1)^{n-1} e^{2/n}$

**(h)** $\sum_{n=0}^\infty \frac{\sin(n + 1/2)\pi}{\sqrt{1 + n}}$

**(i)** $\sum_{n=1}^\infty \frac{n\cos(n\pi)}{2n}$

**(j)** $\sum_{n=1}^\infty (-1)^n \sin\frac{\pi}{n}$

**(k)** $\sum_{n=1}^\infty (-1)^n \cos\frac{\pi}{n}$

**(l)** $\sum_{n=1}^\infty (-1)^n (\sqrt{n + 1} - \sqrt{n})$

**(m)** $\sum_{n=4}^\infty \frac{1}{2 + 3n}$

**(n)** $\sum_{n=0}^\infty \frac{2^n}{n!}$

**(o)** $\sum_{n=1}^\infty \frac{ne^{-n^2}}{1}$（即 $\sum ne^{-n^2}$）

**(p)** $\sum_{n=1}^\infty \frac{e^n \sqrt{n!}}{n!}$... 注：原题可能为 $\sum \frac{e^n}{\sqrt{n!}}$ 等。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $b_n = \frac{1}{5 + 3n}$，$b_n \downarrow 0$。由 Leibniz 判别法，级数收敛。

$\sum |a_n| = \sum \frac{1}{5 + 3n} \sim \sum \frac{1}{3n}$，发散（调和级数）。

$$\boxed{\text{条件收敛}}$$

**(b)** $b_n = \frac{1}{\sqrt{n+1}} \downarrow 0$。Leibniz 判别法，收敛。

$\sum \frac{1}{\sqrt{n+1}}$，$p = \frac{1}{2} < 1$，发散。

$$\boxed{\text{条件收敛}}$$

**(c)** $|a_n| = \frac{n^2}{n^2 + n - 1} \to 1 \neq 0$。发散判别法，**发散**。

**(d)** $b_n = \frac{\sqrt{n}}{2n + 3} \sim \frac{1}{2\sqrt{n}} \to 0$，且 $b_n$ 递减（可验证）。

Leibniz 判别法，收敛。$\sum \frac{\sqrt{n}}{2n + 3} \sim \sum \frac{1}{2\sqrt{n}}$，发散。

$$\boxed{\text{条件收敛}}$$

**(e)** $b_n = \frac{n^2}{n^3 + 4} \sim \frac{1}{n} \to 0$，递减。Leibniz 判别法，收敛。

$\sum |a_n| \sim \sum \frac{1}{n}$，发散。

$$\boxed{\text{条件收敛}}$$

**(f)** $|a_n| = ne^{-n}$。比值判别法：$\frac{(n+1)e^{-(n+1)}}{ne^{-n}} = \frac{n+1}{n} \cdot e^{-1} \to e^{-1} < 1$。绝对收敛。

$$\boxed{\text{绝对收敛}}$$

**(g)** $|a_n| = e^{2/n} \to 1 \neq 0$。**发散**。

**(h)** $\sin(n + 1/2)\pi = \sin(n\pi + \pi/2) = \cos(n\pi) = (-1)^n$。

所以级数为 $\sum \frac{(-1)^n}{\sqrt{1 + n}}$，与 (b) 相同。

$$\boxed{\text{条件收敛}}$$

**(i)** $\cos(n\pi) = (-1)^n$，$a_n = \frac{n(-1)^n}{2n} = \frac{(-1)^n}{2}$。$a_n \not\to 0$。**发散**。

**(j)** $\sin\frac{\pi}{n} \sim \frac{\pi}{n} \to 0$，递减。Leibniz 判别法，收敛。

$\sum \sin\frac{\pi}{n} \sim \sum \frac{\pi}{n}$，发散。

$$\boxed{\text{条件收敛}}$$

**(k)** $\cos\frac{\pi}{n} \to 1 \neq 0$，$(-1)^n \cos\frac{\pi}{n} \not\to 0$。**发散**。

**(l)** $\sqrt{n+1} - \sqrt{n} = \frac{1}{\sqrt{n+1} + \sqrt{n}} \sim \frac{1}{2\sqrt{n}} \to 0$，递减。

Leibniz 判别法，收敛。$\sum (\sqrt{n+1} - \sqrt{n}) \sim \sum \frac{1}{2\sqrt{n}}$，发散。

$$\boxed{\text{条件收敛}}$$

**(m)** $\frac{1}{2 + 3n} \sim \frac{1}{3n}$，$p = 1$，正项级数**发散**。

**(n)** 比值判别法：$\frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \frac{2}{n+1} \to 0 < 1$。

$$\boxed{\text{绝对收敛}}$$

**(o)** $ne^{-n^2}$。比值：$\frac{(n+1)e^{-(n+1)^2}}{ne^{-n^2}} = \frac{n+1}{n} e^{-2n-1} \to 0 < 1$。

$$\boxed{\text{绝对收敛}}$$

**知识点：** 交错级数的完整判定流程：先检查 $a_n \to 0$，再用 Leibniz 判别法，最后判断绝对收敛还是条件收敛。

</details>

---

### 题目 4

**题目：**

**(a)** 分析 $\sum_{n=1}^\infty (-1)^n \frac{n!}{n^n}$ 的收敛性。

**(b)** 用前 10 项近似该级数，估计误差。

**(c)** 需要多少项才能使误差小于 $10^{-4}$？

<details>
<summary>参考答案</summary>

**解：**

**(a)** $b_n = \frac{n!}{n^n}$。

比值判别法：$\frac{b_{n+1}}{b_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \left(1 - \frac{1}{n+1}\right)^n \to e^{-1} < 1$

级数绝对收敛。

**(b)** $S_{10} = \sum_{n=1}^{10} (-1)^n \frac{n!}{n^n}$

这是交错级数，误差 $|R_{10}| \leq b_{11} = \frac{11!}{11^{11}}$

$11! = 39916800$，$11^{11} = 285311670611$

$b_{11} \approx 0.000140$

**(c)** 需 $b_{n+1} = \frac{(n+1)!}{(n+1)^{n+1}} \leq 10^{-4}$

计算：$b_8 = \frac{8!}{8^8} = \frac{40320}{16777216} \approx 0.00240$

$b_9 = \frac{9!}{9^9} = \frac{362880}{387420489} \approx 0.000936$

$b_{10} = \frac{10!}{10^{10}} = \frac{3628800}{10^{10}} = 0.000363$

$b_{11} \approx 0.000140$

$b_{12} = \frac{12!}{12^{12}} \approx 0.0000545 < 10^{-4}$

$$\boxed{n \geq 12}$$

**知识点：** 交错级数的余项估计 $|R_n| \leq b_{n+1}$。

</details>

---

### 题目 5

**题目：** 数列 $a_1 = 1$，$a_{n+1} = \frac{2 + \cos n}{\sqrt{n}} a_n$。判断 $\sum a_n$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：**

$\frac{a_{n+1}}{a_n} = \frac{2 + \cos n}{\sqrt{n}}$

因为 $1 \leq 2 + \cos n \leq 3$，所以 $\frac{1}{\sqrt{n}} \leq \frac{a_{n+1}}{a_n} \leq \frac{3}{\sqrt{n}}$

当 $n \geq 10$ 时，$\frac{3}{\sqrt{n}} \leq \frac{3}{\sqrt{10}} < 1$。

更精确地，对充分大的 $n$（$n \geq 9$），$\frac{a_{n+1}}{a_n} \leq \frac{3}{\sqrt{n}} < 1$。

$a_n = a_1 \prod_{k=1}^{n-1} \frac{2 + \cos k}{\sqrt{k}}$

$\ln a_n = \sum_{k=1}^{n-1} \ln(2 + \cos k) - \frac{1}{2}\sum_{k=1}^{n-1} \ln k$

$\sum_{k=1}^{n-1} \ln(2 + \cos k) \leq (n-1)\ln 3$

$\frac{1}{2}\sum_{k=1}^{n-1} \ln k \sim \frac{n}{2}\ln n$

$\ln a_n \leq n\ln 3 - \frac{n}{2}\ln n \to -\infty$（因为 $\frac{n}{2}\ln n$ 增长更快）

故 $a_n \to 0$，且 $a_n$ 衰减速度非常快（类似 $e^{-n\ln n/2}$）。

由比值判别法：$\limsup \frac{a_{n+1}}{a_n} = \limsup \frac{2 + \cos n}{\sqrt{n}} = 0 < 1$。

$$\boxed{\sum a_n \text{ 收敛}}$$

**知识点：** 当比值趋于零时，级数绝对收敛。

</details>

---

### 补充题目（来自原题列表）

**(q)** $\sum_{n=2}^\infty \frac{\sqrt{3^n}}{3^{2n}}$

**(r)** $\sum_{n=1}^\infty \frac{8n^2 + 1}{5n^2 - 1}$

**(s)** $\sum_{n=0}^\infty (-1)^n \left(\frac{8n^2 + 1}{5n^2 - 1}\right)^{1/2}$

**(t)** $\sum_{n=1}^\infty \left(\frac{3n + 1}{8n^5 - 7}\right)^{1/2}$

**(u)** $\sum_{n=1}^\infty (-1)^n \left(\frac{3n + 1}{8n^5 - 7}\right)^{1/2}$

**(v)** $\sum_{n=1}^\infty (-1)^{n-1} \frac{n!}{1 \cdot 3 \cdot 5 \cdots (2n - 1)}$

**(w)** $\sum_{n=1}^\infty (-1)^n \frac{2^n n!}{5 \cdot 8 \cdot 11 \cdots (3n + 2)}$

**(x)** $\sum_{n=2}^\infty \frac{(-1)^{n-1}}{(\ln n)^n}$

**(y)** $\sum_{n=0}^\infty \left(\frac{\arctan n}{n}\right)^n$... 注：$n = 0$ 项需特殊处理。

**(z)** $\sum_{n=1}^\infty \left(1 - \frac{2}{n}\right)^{n^2}$

<details>
<summary>参考答案</summary>

**解：**

**(q)** $\frac{\sqrt{3^n}}{3^{2n}} = \frac{3^{n/2}}{3^{2n}} = 3^{-3n/2} = \left(\frac{1}{3\sqrt{3}}\right)^n$，等比级数 $r = \frac{1}{3\sqrt{3}} < 1$。**绝对收敛**。

**(r)** $\frac{8n^2 + 1}{5n^2 - 1} \to \frac{8}{5} \neq 0$。**发散**。

**(s)** $\left(\frac{8n^2 + 1}{5n^2 - 1}\right)^{1/2} \to \sqrt{8/5} \neq 0$。**发散**。

**(t)** $\left(\frac{3n + 1}{8n^5 - 7}\right)^{1/2} \sim \left(\frac{3}{8n^4}\right)^{1/2} \sim \frac{\sqrt{3}}{2\sqrt{2}n^2}$，$p = 2 > 1$。**收敛**。

**(u)** 同 (t) 的分析，$b_n \to 0$ 且递减，Leibniz 判别法，收敛。绝对值级数也收敛。**绝对收敛**。

**(v)** $b_n = \frac{n!}{1 \cdot 3 \cdot 5 \cdots (2n-1)}$。

$\frac{b_{n+1}}{b_n} = \frac{n+1}{2n+1} \to \frac{1}{2} < 1$。绝对收敛。

**(w)** $\frac{b_{n+1}}{b_n} = \frac{2(n+1)}{3(n+1) + 2} = \frac{2n + 2}{3n + 5} \to \frac{2}{3} < 1$。绝对收敛。

**(x)** 根值判别法：$(b_n)^{1/n} = \frac{1}{(\ln n)} \to 0 < 1$。**绝对收敛**。

**(y)** 根值判别法：$(b_n)^{1/n} = \frac{\arctan n}{n} \to 0 < 1$。**绝对收敛**。

**(z)** $(1 - 2/n)^{n^2}$。$\ln b_n = n^2 \ln(1 - 2/n) \sim n^2(-2/n) = -2n \to -\infty$。

$b_n \sim e^{-2n}$，等比级数 $r = e^{-2} < 1$。**收敛**。

**知识点：** 根值判别法对 $n$ 次幂形式特别有效；比值判别法对阶乘和连乘积有效。

</details>

---

## 📝 本次知识点总结

1. **Leibniz 判别法**：交错级数 $\sum(-1)^n b_n$，$b_n \downarrow 0$ 则收敛。
2. **绝对收敛 vs 条件收敛**：$\sum |a_n|$ 收敛则绝对收敛；$\sum a_n$ 收敛但 $\sum |a_n|$ 发散则条件收敛。
3. **发散判别法优先**：先检查 $a_n \to 0$，不趋于零则直接发散。
4. **比值判别法**：含阶乘、指数时首选。
5. **根值判别法**：含 $n$ 次幂时首选。
6. **余项估计**：交错级数 $|R_n| \leq b_{n+1}$。
