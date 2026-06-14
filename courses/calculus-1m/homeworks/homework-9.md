> **📎 源文件：** `旧资料/03 Homeworks/原题/HW9-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw9.pdf`

---

# Homework 9 - 序列极限与级数收敛性

## 📌 涉及知识点
- 序列极限与复合函数
- 级数收敛性的判断（发散检验、比较检验、积分检验）
- 根值检验与比值检验
- 级数近似与误差估计

---

### 题目 1
**题目：** 设 $a_n = n\sqrt{n}$（$n \geq 2$），$f(x) = \dfrac{\sin(x^2-1)}{x-1}$（$x \neq 1$）。求 $\displaystyle\lim_{n\to\infty} f(a_n)$。

<details>
<summary>参考答案</summary>

**解：**

$a_n = n\sqrt{n} = n^{3/2} \to +\infty$（$n \to \infty$）。

$$f(a_n) = \frac{\sin(a_n^2 - 1)}{a_n - 1}$$

因为 $|\sin(a_n^2 - 1)| \leq 1$ 且 $a_n - 1 \to +\infty$：

$$|f(a_n)| \leq \frac{1}{a_n - 1} \to 0$$

由夹逼定理：

$$\boxed{\lim_{n\to\infty} f(a_n) = 0}$$

**知识点：** 序列极限、夹逼定理

</details>

---

### 题目 2
**题目：** 判断以下命题的真假，真的证明，假的举反例。

(a) 若 $\lim_{n\to\infty} a_n = 0$，则 $\displaystyle\sum_{n=1}^\infty a_n$ 收敛。

(b) $\displaystyle\sum_{n=1}^\infty \frac{2^n + 4^n}{\pi^n}$ 发散。

(c) $\displaystyle\sum_{n=1}^\infty \sqrt{\frac{2n^3}{n^4}}$ 发散。

<details>
<summary>参考答案</summary>

**解：**

**(a) 假。**

反例：$a_n = \dfrac{1}{n}$。$\lim_{n\to\infty} \dfrac{1}{n} = 0$，但 $\displaystyle\sum_{n=1}^\infty \dfrac{1}{n}$（调和级数）发散。

**(b) 真。**

$$\frac{2^n + 4^n}{\pi^n} = \left(\frac{2}{\pi}\right)^n + \left(\frac{4}{\pi}\right)^n$$

因为 $\dfrac{4}{\pi} > 1$，所以 $\left(\dfrac{4}{\pi}\right)^n \to +\infty$。

通项不趋于零，由发散检验，级数**发散**。

**(c) 真。**

$$\sqrt{\frac{2n^3}{n^4}} = \sqrt{\frac{2}{n}} = \frac{\sqrt{2}}{\sqrt{n}}$$

$$\sum_{n=1}^\infty \frac{\sqrt{2}}{\sqrt{n}} = \sqrt{2}\sum_{n=1}^\infty \frac{1}{n^{1/2}}$$

这是 $p = \dfrac{1}{2} < 1$ 的 $p$-级数，**发散**。

**知识点：** 发散检验、$p$-级数

</details>

---

### 题目 3
**题目：** 分析以下级数的收敛性。

(a) $\displaystyle\sum_{n=2}^\infty \frac{1}{n\ln n}$

(b) $\displaystyle\sum_{n=2}^\infty \frac{1}{n[\ln(n)]^n}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 用积分检验法：

$$\int_2^\infty \frac{dx}{x\ln x} = \left[\ln(\ln x)\right]_2^\infty = +\infty$$

积分发散，所以级数 $\displaystyle\sum_{n=2}^\infty \frac{1}{n\ln n}$ **发散**。

**(b)** 用根值检验法：

$$\sqrt[n]{a_n} = \frac{1}{n^{1/n} \cdot \ln n}$$

因为 $\lim_{n\to\infty} n^{1/n} = 1$，$\lim_{n\to\infty} \ln n = +\infty$：

$$\lim_{n\to\infty} \sqrt[n]{a_n} = \frac{1}{1 \cdot \infty} = 0 < 1$$

由根值检验法，级数 $\displaystyle\sum_{n=2}^\infty \frac{1}{n[\ln(n)]^n}$ **收敛**。

**知识点：** 积分检验法、根值检验法

</details>

---

### 题目 4
**题目：**
(a) 用前 10 项和近似级数 $\displaystyle\sum_{n=2}^\infty \frac{1}{n(\ln n)^2}$，估计误差。
(b) 需要多少项才能保证部分和的精度在 $5 \times 10^{-4}$ 以内？

<details>
<summary>参考答案</summary>

**解：**

**(a)** 前 10 项和：

$$S_{10} = \sum_{n=2}^{11} \frac{1}{n(\ln n)^2} \approx 1.800$$

**误差估计：** 由积分检验法的余项估计：

$$R_{10} \leq \int_{10}^\infty \frac{dx}{x(\ln x)^2} = \left[-\frac{1}{\ln x}\right]_{10}^\infty = \frac{1}{\ln 10} \approx 0.4343$$

**(b)** 要求 $R_N \leq \dfrac{1}{\ln N} \leq 5 \times 10^{-4}$：

$$\ln N \geq 2000 \implies N \geq e^{2000}$$

$$\boxed{N \geq e^{2000} \approx 10^{868}}$$

**注：** 此级数收敛极慢，需要极多项才能达到较高精度。

**知识点：** 级数近似、积分余项估计

</details>

---

## 📝 本次知识点总结

1. **序列极限**：有界量除以无穷大量趋于零（夹逼定理）
2. **发散检验**：通项不趋于零则级数发散
3. **$p$-级数**：$\sum \frac{1}{n^p}$ 在 $p > 1$ 时收敛，$p \leq 1$ 时发散
4. **积分检验法**：$f(x)$ 递减正函数，级数与积分同敛散
5. **根值检验法**：$\lim \sqrt[n]{a_n} < 1$ 则收敛
6. **余项估计**：$R_N \leq \int_N^\infty f(x)\,dx$
