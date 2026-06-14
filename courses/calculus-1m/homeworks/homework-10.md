> **📎 源文件：** `旧资料/03 Homeworks/原题/hw10-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw10-TODO 更新.pdf`

---

# Homework 10 - 幂级数与泰勒级数

## 📌 涉及知识点
- 比值检验与阶乘级数
- 绝对收敛、条件收敛与发散
- 幂级数的收敛半径与收敛区间
- 麦克劳林级数与泰勒级数
- 泰勒级数的数值近似

---

### 题目 1
**题目：** 对哪些正整数 $k$，级数 $\displaystyle\sum_{n=1}^\infty \frac{(n!)^2}{(kn)!}$ 收敛？

<details>
<summary>参考答案</summary>

**解：**

用比值检验：

$$\frac{a_{n+1}}{a_n} = \frac{((n+1)!)^2}{(k(n+1))!} \cdot \frac{(kn)!}{(n!)^2} = \frac{(n+1)^2}{(kn+k)(kn+k-1)\cdots(kn+1)}$$

分母是 $k$ 个连续整数的乘积，每个 $\sim kn$。

**$k = 1$：** $\dfrac{(n+1)^2}{n+1} = n+1 \to \infty$，**发散**。

**$k = 2$：** $\dfrac{(n+1)^2}{(2n+2)(2n+1)} = \dfrac{(n+1)^2}{2(n+1)(2n+1)} = \dfrac{n+1}{2(2n+1)} \to \dfrac{1}{4} < 1$，**收敛**。

**$k \geq 3$：** 分母 $\sim (kn)^k$，分子 $\sim n^2$，比值 $\sim \dfrac{n^2}{(kn)^k} \to 0 < 1$，**收敛**。

$$\boxed{k \geq 2}$$

**知识点：** 比值检验、阶乘增长

</details>

---

### 题目 2
**题目：** 判断以下级数是绝对收敛、条件收敛还是发散。

(a) $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{n\ln(n+1)}$

(b) $\displaystyle\sum_{n=1}^\infty \left(\frac{\ln n}{n}\right)^3$

(c) $\displaystyle\sum_{n=1}^\infty \frac{e^{2n}}{6n-1}$

(d) $\displaystyle\sum_{n=1}^\infty \ln\!\left(\frac{n}{n+1}\right)$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 绝对值级数 $\sum \frac{1}{n\ln(n+1)}$：

与 $\frac{1}{n\ln n}$ 比较（$\ln(n+1) \sim \ln n$），由积分检验法知 $\sum \frac{1}{n\ln n}$ 发散，所以绝对值级数发散。

交错级数：$b_n = \frac{1}{n\ln(n+1)}$ 递减且趋于零，由莱布尼茨判别法，交错级数收敛。

$$\boxed{\text{条件收敛}}$$

**(b)** $\left(\frac{\ln n}{n}\right)^3$：因为 $\ln n < n^{1/3}$（$n$ 充分大），所以 $\frac{\ln n}{n} < n^{-2/3}$，$\left(\frac{\ln n}{n}\right)^3 < n^{-2}$。

由比较检验法（与 $p=2$ 的 $p$-级数比较），**绝对收敛**。

**(c)** $\frac{e^{2n}}{6n-1} \geq \frac{e^{2n}}{6n} \to +\infty$，通项不趋于零，**发散**。

**(d)** $\ln\!\left(\frac{n}{n+1}\right) = -\ln\!\left(1+\frac{1}{n}\right) \sim -\frac{1}{n}$

$\sum \left|\ln\!\left(\frac{n}{n+1}\right)\right| \sim \sum \frac{1}{n}$ 发散。

部分和 $S_N = -\sum_{n=1}^N \ln\!\left(1+\frac{1}{n}\right) = -\ln(N+1) \to -\infty$，**发散**。

**知识点：** 莱布尼茨判别法、比较检验、发散检验

</details>

---

### 题目 3
**题目：**
(a) 判断 $\displaystyle\sum_{n=1}^\infty a_n$，其中 $a_1 = 1$，$a_{n+1} = \left(\dfrac{n^2+4}{n^2+3}\right)^{n^2/2} a_n$。
(b) 判断 $\displaystyle\sum_{n=1}^\infty (-1)^{n-1}b_n$，其中 $b_n = \frac{1}{n}$（$n$ 奇），$b_n = \frac{1}{n^2}$（$n$ 偶）。为什么莱布尼茨判别法不适用？

<details>
<summary>参考答案</summary>

**解：**

**(a)** 比值：$\dfrac{a_{n+1}}{a_n} = \left(1 + \dfrac{1}{n^2+3}\right)^{n^2/2}$

取对数：$\frac{n^2}{2}\ln\!\left(1+\frac{1}{n^2+3}\right) \sim \frac{n^2}{2} \cdot \frac{1}{n^2+3} \to \frac{1}{2}$

所以 $\dfrac{a_{n+1}}{a_n} \to e^{1/2} = \sqrt{e} \approx 1.649 > 1$

由比值检验法，级数**发散**。

**(b)** 级数为 $\frac{1}{1} - \frac{1}{4} + \frac{1}{3} - \frac{1}{16} + \frac{1}{5} - \frac{1}{36} + \cdots$

**莱布尼茨判别法不适用**的原因：$b_n$ 不单调递减。例如 $b_2 = \frac{1}{4} < \frac{1}{3} = b_3$。

**收敛性分析：** 将奇数项和偶数项分开：

- 奇数项之和：$\sum \frac{1}{2k-1}$ 发散（调和级数的一半）
- 偶数项之和：$\sum \frac{1}{(2k)^2} = \frac{1}{4}\sum \frac{1}{k^2}$ 收敛

交错和的部分和 $S_{2N} = \sum_{k=1}^N \frac{1}{2k-1} - \sum_{k=1}^N \frac{1}{4k^2}$

第一项趋于 $+\infty$，第二项趋于有限值，所以 $S_{2N} \to +\infty$。

级数**发散**。

**知识点：** 比值检验、莱布尼茨判别法的条件

</details>

---

### 题目 4
**题目：** 求以下幂级数的收敛半径和收敛区间。

(a) $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{3n^2+1} x^n$

(b) $\displaystyle\sum_{n=1}^\infty \frac{(-1)^n}{3n+1} (3x+1)^n$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\dfrac{1}{R} = \lim_{n\to\infty} \left|\dfrac{a_{n+1}}{a_n}\right| = \lim_{n\to\infty} \dfrac{3n^2+1}{3(n+1)^2+1} = 1$

$R = 1$。在 $x = \pm 1$ 处：$\left|\dfrac{(-1)^n}{3n^2+1}(\pm 1)^n\right| = \dfrac{1}{3n^2+1} \leq \dfrac{1}{3n^2}$，由比较检验法收敛。

$$\boxed{R = 1, \quad \text{收敛区间} = [-1, 1]}$$

**(b)** 令 $u = 3x+1$，$\dfrac{1}{R_u} = \lim \dfrac{3n+1}{3(n+1)+1} = 1$，$R_u = 1$。

$|3x+1| < 1 \implies -\frac{2}{3} < x < 0$，$R = \frac{1}{3}$。

- $x = 0$（$u = 1$）：$\sum \frac{(-1)^n}{3n+1}$，交错级数收敛 ✅
- $x = -\frac{2}{3}$（$u = -1$）：$\sum \frac{1}{3n+1}$，发散 ❌

$$\boxed{R = \dfrac{1}{3}, \quad \text{收敛区间} = \left(-\dfrac{2}{3},\, 0\right]}$$

**知识点：** 收敛半径、端点检验

</details>

---

### 题目 5
**题目：** 求以下函数的麦克劳林级数及收敛区间。

(a) $f(x) = \dfrac{x^2}{(1-2x)^4}$

(b) $F(x) = \displaystyle\int_0^x \left[e^{-3t^2} + \dfrac{4}{4+t^2}\right] dt$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 从几何级数出发：$\dfrac{1}{1-2x} = \sum_{n=0}^\infty (2x)^n$

逐次求导：

$$\frac{1}{(1-2x)^2} = \sum_{n=1}^\infty n \cdot 2^n x^{n-1}$$

$$\frac{2}{(1-2x)^3} = \sum_{n=2}^\infty n(n-1) \cdot 2^n x^{n-2}$$

$$\frac{8}{(1-2x)^4} = \sum_{n=3}^\infty n(n-1)(n-2) \cdot 2^n x^{n-3}$$

$$\frac{1}{(1-2x)^4} = \sum_{n=3}^\infty \frac{n(n-1)(n-2) \cdot 2^{n-3}}{1} x^{n-3} \cdot \frac{1}{1}$$

等等，让我重新计算。$\frac{d}{dx}\frac{1}{(1-2x)^3} = \frac{6}{(1-2x)^4}$

$$\frac{d}{dx}\sum_{n=2}^\infty n(n-1)2^n x^{n-2} = \sum_{n=3}^\infty n(n-1)(n-2)2^n x^{n-3}$$

所以 $\frac{6}{(1-2x)^4} = \sum_{n=3}^\infty n(n-1)(n-2)2^n x^{n-3}$

$\frac{1}{(1-2x)^4} = \frac{1}{6}\sum_{n=3}^\infty n(n-1)(n-2)2^n x^{n-3}$

乘以 $x^2$：

$$f(x) = \frac{x^2}{(1-2x)^4} = \frac{1}{6}\sum_{n=3}^\infty n(n-1)(n-2)2^n x^{n-1}$$

令 $m = n-1$（$n = m+1$）：

$$f(x) = \frac{1}{6}\sum_{m=2}^\infty (m+1)m(m-1)2^{m+1} x^m = \sum_{m=2}^\infty \frac{(m+1)m(m-1)}{3} 2^m x^m$$

收敛区间：$|2x| < 1 \implies |x| < \dfrac{1}{2}$，即 $\left(-\dfrac{1}{2}, \dfrac{1}{2}\right)$。

**(b)** 展开被积函数：

$$e^{-3t^2} = \sum_{n=0}^\infty \frac{(-3)^n t^{2n}}{n!}$$

$$\frac{4}{4+t^2} = \frac{1}{1+t^2/4} = \sum_{n=0}^\infty (-1)^n \frac{t^{2n}}{4^n}$$

逐项积分：

$$F(x) = \sum_{n=0}^\infty \left[\frac{(-3)^n}{n!(2n+1)} + \frac{(-1)^n}{4^n(2n+1)}\right] x^{2n+1}$$

两个级数对所有 $t$ 收敛，所以收敛区间为 $(-\infty, +\infty)$。

**知识点：** 几何级数求导、逐项积分

</details>

---

### 题目 6
**题目：** 用 $e^x$ 的泰勒级数求 $\sqrt{e}$ 的近似值，精度为 $10^{-5}$。

<details>
<summary>参考答案</summary>

**解：**

$$\sqrt{e} = e^{1/2} = \sum_{n=0}^\infty \frac{1}{n! \cdot 2^n}$$

**误差估计：** 用 $N$ 项近似，余项：

$$R_N = \sum_{n=N+1}^\infty \frac{1}{n! \cdot 2^n} < \frac{1}{(N+1)! \cdot 2^{N+1}} \cdot \sum_{k=0}^\infty \frac{1}{(N+2)^k \cdot 2^k} < \frac{1}{(N+1)! \cdot 2^{N+1}} \cdot 2$$

需要 $\frac{2}{(N+1)! \cdot 2^{N+1}} < 10^{-5}$。

逐项计算：
- $N = 7$：$\frac{2}{8! \cdot 256} = \frac{2}{10321920} \approx 1.9 \times 10^{-7} < 10^{-5}$ ✅
- $N = 6$：$\frac{2}{7! \cdot 128} = \frac{2}{645120} \approx 3.1 \times 10^{-6} < 10^{-5}$ ✅

取 $N = 6$（前 7 项）即可：

$$\sqrt{e} \approx 1 + \frac{1}{2} + \frac{1}{8} + \frac{1}{48} + \frac{1}{384} + \frac{1}{3840} + \frac{1}{46080} + \frac{1}{645120}$$

$$\approx 1 + 0.5 + 0.125 + 0.020833 + 0.002604 + 0.000260 + 0.000022 + 0.000002$$

$$\boxed{\sqrt{e} \approx 1.64872}$$

**知识点：** 泰勒级数近似、误差估计

</details>

---

## 📝 本次知识点总结

1. **比值检验**：处理阶乘和幂次的级数特别有效
2. **条件收敛 vs 绝对收敛**：交错级数可能条件收敛（莱布尼茨判别法）
3. **收敛半径**：$\frac{1}{R} = \lim\left|\frac{a_{n+1}}{a_n}\right|$，端点需单独检验
4. **麦克劳林级数**：从已知级数（几何级数、$e^x$）出发，通过求导、积分、换元得到新级数
5. **数值近似**：利用泰勒级数的余项估计确定所需项数
