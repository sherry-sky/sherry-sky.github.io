> **📎 源文件：** `旧资料/02 Workshop/workshop 11.pdf`

---

# Workshop 11 - 级数求和与收敛性综合

##  知识点梳理
- 裂项级数（Telescoping Series）求和
- 比值判别法与根值判别法
- 交错级数的收敛性
- 一般项判别法（第 $n$ 项检验）
- 级数收敛性的综合判断

---

## 第一部分：求级数的和

### 题目 1
**题目：** 求 $\displaystyle\sum_{n=1}^{+\infty} \left(\sqrt{n+1} - 2\sqrt{n} + \sqrt{n-1}\right)$

<details>
<summary>参考答案</summary>

**解：** 记 $a_n = \sqrt{n+1} - 2\sqrt{n} + \sqrt{n-1}$。

观察 $a_n = (\sqrt{n+1} - \sqrt{n}) - (\sqrt{n} - \sqrt{n-1})$。

令 $b_n = \sqrt{n+1} - \sqrt{n}$，则 $a_n = b_n - b_{n-1}$。

部分和：

$$S_N = \sum_{n=1}^N a_n = \sum_{n=1}^N (b_n - b_{n-1}) = b_N - b_0$$

其中 $b_N = \sqrt{N+1} - \sqrt{N}$，$b_0 = \sqrt{1} - \sqrt{0} = 1$。

$$S_N = \sqrt{N+1} - \sqrt{N} - 1 = \frac{1}{\sqrt{N+1} + \sqrt{N}} - 1$$

$$\lim_{N \to \infty} S_N = 0 - 1 = -1$$

$$\boxed{\sum_{n=1}^{+\infty}\left(\sqrt{n+1} - 2\sqrt{n} + \sqrt{n-1}\right) = -1}$$

**知识点：** 二阶差分形式的裂项级数，通过构造一阶差分化为 telescoping。

</details>

---

### 题目 2
**题目：** 求 $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{(3n-2)(3n+1)}$

<details>
<summary>参考答案</summary>

**解：** 部分分式分解：

$$\frac{1}{(3n-2)(3n+1)} = \frac{A}{3n-2} + \frac{B}{3n+1}$$

$$1 = A(3n+1) + B(3n-2)$$

$3n - 2 = 0 \implies n = 2/3$：$1 = A(3) \implies A = 1/3$

$3n + 1 = 0 \implies n = -1/3$：$1 = B(-3) \implies B = -1/3$

$$\frac{1}{(3n-2)(3n+1)} = \frac{1}{3}\left(\frac{1}{3n-2} - \frac{1}{3n+1}\right)$$

部分和：

$$S_N = \frac{1}{3}\sum_{n=1}^N\left(\frac{1}{3n-2} - \frac{1}{3n+1}\right)$$

展开：
- $n=1$：$\frac{1}{1} - \frac{1}{4}$
- $n=2$：$\frac{1}{4} - \frac{1}{7}$
- $n=3$：$\frac{1}{7} - \frac{1}{10}$
- ...
- $n=N$：$\frac{1}{3N-2} - \frac{1}{3N+1}$

中间项全部抵消：

$$S_N = \frac{1}{3}\left(1 - \frac{1}{3N+1}\right)$$

$$\lim_{N \to \infty} S_N = \frac{1}{3}$$

$$\boxed{\sum_{n=1}^{+\infty}\frac{1}{(3n-2)(3n+1)} = \frac{1}{3}}$$

**知识点：** 裂项级数的标准方法——部分分式分解后相邻项抵消。

</details>

---

## 第二部分：判断级数的收敛性

### 题目 3
**题目：** 判断 $\dfrac{1000}{1!} + \dfrac{1000^2}{2!} + \cdots + \dfrac{1000^n}{n!} + \cdots$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 即 $\displaystyle\sum_{n=1}^{+\infty} \dfrac{1000^n}{n!}$。

比值判别法：

$$\lim_{n \to \infty}\frac{1000^{n+1}}{(n+1)!} \cdot \frac{n!}{1000^n} = \lim_{n \to \infty}\frac{1000}{n+1} = 0 < 1$$

**收敛**。

（实际上 $\sum_{n=0}^{+\infty}\dfrac{1000^n}{n!} = e^{1000}$，所以原级数 $= e^{1000} - 1$。）

**知识点：** 含阶乘的级数用比值判别法；$\sum \dfrac{a^n}{n!} = e^a - 1$（从 $n=1$ 起）。

</details>

---

### 题目 4
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{(n!)^2}{(2n)!}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 比值判别法：

$$\frac{a_{n+1}}{a_n} = \frac{((n+1)!)^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2} = \frac{(n+1)^2}{(2n+2)(2n+1)} = \frac{(n+1)^2}{2(n+1)(2n+1)} = \frac{n+1}{2(2n+1)}$$

$$\lim_{n \to \infty}\frac{n+1}{4n+2} = \frac{1}{4} < 1$$

**收敛**。

**知识点：** 含阶乘比值的级数，比值判别法非常有效。

</details>

---

### 题目 5
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{n^{n+1/n}}{\left(n + \frac{1}{n}\right)^n}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 先分析一般项 $a_n$ 的渐近行为。

$$a_n = \frac{n^{n+1/n}}{\left(n + \frac{1}{n}\right)^n} = \frac{n^n \cdot n^{1/n}}{n^n\left(1 + \frac{1}{n^2}\right)^n} = \frac{n^{1/n}}{\left(1 + \frac{1}{n^2}\right)^n}$$

当 $n \to \infty$：
- $n^{1/n} = e^{\frac{\ln n}{n}} \to e^0 = 1$
- $\left(1 + \dfrac{1}{n^2}\right)^n = e^{n \ln(1 + 1/n^2)} \approx e^{n \cdot 1/n^2} = e^{1/n} \to 1$

所以 $a_n \to 1 \neq 0$。

由**第 $n$ 项检验**（必要条件的逆否命题），级数**发散**。

**知识点：** 级数收敛的必要条件是 $a_n \to 0$；若 $a_n \not\to 0$，级数必发散。

</details>

---

### 题目 6
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{\sqrt[n]{\ln n}}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 分析一般项 $a_n = \dfrac{1}{(\ln n)^{1/n}}$。

$$(\ln n)^{1/n} = e^{\frac{\ln(\ln n)}{n}} \to e^0 = 1 \quad (n \to \infty)$$

所以 $a_n \to 1 \neq 0$。

由第 $n$ 项检验，级数**发散**。

**知识点：** $(\ln n)^{1/n} \to 1$，因为 $\dfrac{\ln(\ln n)}{n} \to 0$。

</details>

---

### 题目 7
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} (\sqrt{2} - \sqrt[3]{2})(\sqrt{2} - \sqrt[5]{2})\cdots(\sqrt{2} - \sqrt[2n+1]{2})$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 记 $a_n = \prod_{k=1}^n (\sqrt{2} - 2^{1/(2k+1)})$。

注意 $\sqrt{2} = 2^{1/2}$，而 $2^{1/(2k+1)}$ 当 $k \geq 1$ 时 $2k+1 \geq 3$，所以 $\dfrac{1}{2k+1} \leq \dfrac{1}{3} < \dfrac{1}{2}$。

因此 $2^{1/(2k+1)} < 2^{1/2} = \sqrt{2}$，每个因子为正。

当 $k \to \infty$ 时，$2^{1/(2k+1)} \to 2^0 = 1$，所以因子 $\sqrt{2} - 2^{1/(2k+1)} \to \sqrt{2} - 1 \approx 0.414 < 1$。

对充分大的 $k$，因子小于某个 $r < 1$（例如 $r = 0.5$）。

所以 $a_n$ 以指数速度趋于 0。用比值判别法：

$$\frac{a_{n+1}}{a_n} = \sqrt{2} - 2^{1/(2n+3)} \to \sqrt{2} - 1 \approx 0.414 < 1$$

由比值判别法，级数**收敛**。

**知识点：** 连乘积形式的级数，比值判别法直接适用；因子趋于小于 1 的常数时级数收敛。

</details>

---

### 题目 8
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^{n(n-1)/2}}{2^n}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 分析符号 $(-1)^{n(n-1)/2}$：

- $n=1$：$(-1)^0 = 1$
- $n=2$：$(-1)^1 = -1$
- $n=3$：$(-1)^3 = -1$
- $n=4$：$(-1)^6 = 1$
- $n=5$：$(-1)^{10} = 1$
- $n=6$：$(-1)^{15} = -1$

符号模式：$+, -, -, +, +, -, -, +, \ldots$（周期为 4）

虽然符号不是严格交替，但 $|a_n| = \dfrac{1}{2^n}$。

$$\sum|a_n| = \sum\frac{1}{2^n} = 1 < +\infty$$

级数**绝对收敛**，因此收敛。

**知识点：** 绝对收敛 $\implies$ 收敛；当 $|a_n|$ 构成收敛级数时，无论符号如何排列都收敛。

</details>

---

### 题目 9
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n \sin^2 n}{n}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 利用 $\sin^2 n = \dfrac{1 - \cos 2n}{2}$：

$$\frac{(-1)^n \sin^2 n}{n} = \frac{(-1)^n}{2n} - \frac{(-1)^n \cos 2n}{2n}$$

**第一项：** $\sum \dfrac{(-1)^n}{2n}$ 是交错调和级数的一半，由莱布尼茨判别法**收敛**。

**第二项：** $\sum \dfrac{(-1)^n \cos 2n}{2n}$。

利用 $(-1)^n \cos 2n = \cos(n\pi)\cos 2n = \dfrac{1}{2}[\cos(2n + n\pi) + \cos(2n - n\pi)]$

$= \dfrac{1}{2}[\cos(n(2+\pi)) + \cos(n(2-\pi))]$

这两个都是形如 $\sum \dfrac{\cos(\alpha n)}{n}$ 的级数。由 Dirichlet 判别法（$\sum \cos(\alpha n)$ 的部分和有界，$1/n$ 递减趋于 0），当 $\alpha$ 不是 $2\pi$ 的整数倍时收敛。

$2 + \pi$ 和 $2 - \pi$ 都不是 $2\pi$ 的整数倍，所以第二项也**收敛**。

两项都收敛，原级数**收敛**。

**知识点：** 三角恒等式化简；Dirichlet 判别法处理 $\sum \dfrac{\cos(\alpha n)}{n}$ 型级数。

</details>

---

### 题目 10
**题目：** 判断级数 $1 - \dfrac{3}{2} + \dfrac{5}{4} - \dfrac{7}{8} + \cdots$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：** 一般项为 $a_n = (-1)^{n+1} \dfrac{2n-1}{2^{n-1}}$（$n = 1, 2, 3, \ldots$）。

验证：$n=1$：$\dfrac{1}{1} = 1$ ✓；$n=2$：$-\dfrac{3}{2}$ ✓；$n=3$：$\dfrac{5}{4}$ ✓；$n=4$：$-\dfrac{7}{8}$ ✓。

比值判别法（对绝对值）：

$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{2n+1}{2^n} \cdot \frac{2^{n-1}}{2n-1} = \frac{2n+1}{2(2n-1)} \to \frac{1}{2} < 1$$

级数**绝对收敛**，因此收敛。

**知识点：** 含指数分母的级数通常用比值判别法；指数增长快于多项式增长。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了级数求和与收敛性判断的综合技巧：

1. **裂项求和**：通过部分分式或差分分解，使相邻项相互抵消。
2. **比值判别法**：对含阶乘、指数、连乘积的级数特别有效。
3. **第 $n$ 项检验**：$a_n \not\to 0 \implies$ 级数发散（最常用的发散判别法）。
4. **绝对收敛**：$\sum |a_n|$ 收敛 $\implies \sum a_n$ 收敛，无需关心符号模式。
5. **三角恒等式**：$\sin^2 n = \dfrac{1-\cos 2n}{2}$ 可将复杂级数分解为简单级数之和。
6. **Dirichlet 判别法**：处理 $\sum \dfrac{\cos(\alpha n)}{n}$ 型级数的有力工具。
