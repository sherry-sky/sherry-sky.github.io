> **📎 源文件：** `旧资料/02 Workshop/Workshop 10.pdf`

---

# Workshop 10 - 幂级数与泰勒展开

##  知识点梳理
- 幂级数的收敛半径与收敛域
- 泰勒级数与麦克劳林级数
- 常见函数的泰勒展开
- 幂级数的逐项求导与逐项积分
- 利用泰勒展开求极限和近似值
- 泰勒级数的余项估计

---

### 题目 1
**题目：** 求下列幂级数的收敛半径和收敛域：

(a) $\displaystyle\sum_{n=0}^{+\infty} \frac{x^n}{n+1}$

(b) $\displaystyle\sum_{n=1}^{+\infty} \frac{(x-2)^n}{n \cdot 3^n}$

(c) $\displaystyle\sum_{n=0}^{+\infty} n!\, x^n$

<details>
<summary>参考答案</summary>

**(a) 解：**

$$R = \lim_{n \to \infty}\left|\frac{a_n}{a_{n+1}}\right| = \lim_{n \to \infty}\frac{n+2}{n+1} = 1$$

端点检验：
- $x = 1$：$\sum \dfrac{1}{n+1} = \sum \dfrac{1}{n}$（从 $n=1$ 起），调和级数，**发散**
- $x = -1$：$\sum \dfrac{(-1)^n}{n+1}$，交错级数，$a_n = \dfrac{1}{n+1}$ 递减趋于 0，**收敛**

$$\boxed{R = 1, \quad \text{收敛域} = [-1, 1)}$$

**(b) 解：**

$$R = \lim_{n \to \infty}\left|\frac{n \cdot 3^n}{(n+1) \cdot 3^{n+1}}\right| = \lim_{n \to \infty}\frac{n}{3(n+1)} = \frac{1}{3}$$

收敛区间 $|x - 2| < \dfrac{1}{3}$，即 $x \in \left(\dfrac{5}{3}, \dfrac{7}{3}\right)$。

端点检验：
- $x = \dfrac{7}{3}$：$\sum \dfrac{1}{n}$，**发散**
- $x = \dfrac{5}{3}$：$\sum \dfrac{(-1)^n}{n}$，**收敛**（交错调和级数）

$$\boxed{R = \frac{1}{3}, \quad \text{收敛域} = \left[\frac{5}{3}, \frac{7}{3}\right)}$$

**(c) 解：**

$$R = \lim_{n \to \infty}\frac{n!}{(n+1)!} = \lim_{n \to \infty}\frac{1}{n+1} = 0$$

$$\boxed{R = 0, \quad \text{仅在 } x = 0 \text{ 处收敛}}$$

**知识点：** 收敛半径公式 $R = \lim\left|\dfrac{a_n}{a_{n+1}}\right|$；端点需单独检验。

</details>

---

### 题目 2
**题目：** 写出下列函数在 $x = 0$ 处的泰勒（麦克劳林）展开式（写出前几项和一般项）：

(a) $e^x$

(b) $\sin x$

(c) $\dfrac{1}{1-x}$

(d) $\ln(1+x)$

<details>
<summary>参考答案</summary>

**(a)** $e^x = \displaystyle\sum_{n=0}^{+\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$，收敛域 $\mathbb{R}$

**(b)** $\sin x = \displaystyle\sum_{n=0}^{+\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$，收敛域 $\mathbb{R}$

**(c)** $\dfrac{1}{1-x} = \displaystyle\sum_{n=0}^{+\infty} x^n = 1 + x + x^2 + x^3 + \cdots$，收敛域 $|x| < 1$

**(d)** $\ln(1+x) = \displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^{n+1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$，收敛域 $(-1, 1]$

**知识点：** 这四个展开式是最基本的泰勒级数，其他函数的展开可通过代换、求导、积分得到。

</details>

---

### 题目 3
**题目：** 利用已知展开式求下列函数的麦克劳林展开：

(a) $f(x) = x e^{x^2}$

(b) $f(x) = \dfrac{1}{1+x^2}$

(c) $f(x) = \arctan x$

<details>
<summary>参考答案</summary>

**(a) 解：** 将 $e^u = \sum \dfrac{u^n}{n!}$ 中 $u$ 替换为 $x^2$：

$$e^{x^2} = \sum_{n=0}^{+\infty} \frac{x^{2n}}{n!}$$

$$f(x) = x \cdot e^{x^2} = \sum_{n=0}^{+\infty} \frac{x^{2n+1}}{n!} = x + x^3 + \frac{x^5}{2} + \frac{x^7}{6} + \cdots$$

收敛域 $\mathbb{R}$。

**(b) 解：** 将 $\dfrac{1}{1-u} = \sum u^n$ 中 $u$ 替换为 $-x^2$：

$$\frac{1}{1+x^2} = \sum_{n=0}^{+\infty} (-x^2)^n = \sum_{n=0}^{+\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + \cdots$$

收敛域 $|x^2| < 1$，即 $|x| < 1$。

**(c) 解：** 因为 $\dfrac{d}{dx}\arctan x = \dfrac{1}{1+x^2} = \sum_{n=0}^{+\infty}(-1)^n x^{2n}$，逐项积分：

$$\arctan x = \sum_{n=0}^{+\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots$$

收敛域 $|x| \leq 1$（端点由莱布尼茨判别法收敛）。

**知识点：** 通过代换、求导、积分从已知展开式推导新函数的展开式。

</details>

---

### 题目 4
**题目：** 利用泰勒展开求极限 $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$。

<details>
<summary>参考答案</summary>

**解：**

$$e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$$

$$e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \cdots$$

$$\frac{e^x - 1 - x}{x^2} = \frac{1}{2} + \frac{x}{6} + \cdots \to \frac{1}{2} \quad (x \to 0)$$

$$\boxed{\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \frac{1}{2}}$$

**知识点：** 泰勒展开是求 $\dfrac{0}{0}$ 型极限的强大工具，比洛必达法则更系统。

</details>

---

### 题目 5
**题目：** 利用泰勒展开求极限 $\displaystyle\lim_{x \to 0} \frac{\sin x - x + \frac{x^3}{6}}{x^5}$。

<details>
<summary>参考答案</summary>

**解：**

$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \cdots$$

$$\sin x - x + \frac{x^3}{6} = \frac{x^5}{120} - \frac{x^7}{5040} + \cdots$$

$$\frac{\sin x - x + \frac{x^3}{6}}{x^5} = \frac{1}{120} - \frac{x^2}{5040} + \cdots \to \frac{1}{120} \quad (x \to 0)$$

$$\boxed{\lim_{x \to 0} \frac{\sin x - x + \frac{x^3}{6}}{x^5} = \frac{1}{120}}$$

**知识点：** 需要展开到足够高的阶数以消去分子中的低阶项。

</details>

---

### 题目 6
**题目：** 求函数 $f(x) = \dfrac{1}{(1-x)^2}$ 的麦克劳林展开。

<details>
<summary>参考答案</summary>

**解：** 方法一：对 $\dfrac{1}{1-x} = \sum_{n=0}^{+\infty} x^n$ 逐项求导。

$$\frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2} = \sum_{n=1}^{+\infty} n x^{n-1} = \sum_{n=0}^{+\infty} (n+1)x^n$$

$$\frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \cdots = \sum_{n=0}^{+\infty}(n+1)x^n$$

收敛域 $|x| < 1$。

**方法二：** 直接计算 $f^{(n)}(0)$。

$f(x) = (1-x)^{-2}$，$f'(x) = 2(1-x)^{-3}$，$f''(x) = 6(1-x)^{-4}$，$f^{(n)}(x) = (n+1)!(1-x)^{-(n+2)}$。

$f^{(n)}(0) = (n+1)!$，所以 $a_n = \dfrac{(n+1)!}{n!} = n+1$。

$$\boxed{\frac{1}{(1-x)^2} = \sum_{n=0}^{+\infty}(n+1)x^n, \quad |x| < 1}$$

**知识点：** 逐项求导/积分不改变收敛半径；$(1-x)^{-2}$ 的展开系数为 $n+1$。

</details>

---

### 题目 7
**题目：** 用泰勒展开近似计算 $\sqrt{1.1}$，精确到小数点后四位。

<details>
<summary>参考答案</summary>

**解：**

$$\sqrt{1+x} = (1+x)^{1/2} = 1 + \frac{1}{2}x + \frac{\frac{1}{2}(-\frac{1}{2})}{2!}x^2 + \frac{\frac{1}{2}(-\frac{1}{2})(-\frac{3}{2})}{3!}x^3 + \cdots$$

$$= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} - \cdots$$

取 $x = 0.1$：

$$\sqrt{1.1} \approx 1 + 0.05 - 0.00125 + 0.0000625 = 1.0488125$$

误差估计：下一项为 $-\dfrac{5}{128}x^4 = -\dfrac{5}{128}(0.1)^4 \approx -3.9 \times 10^{-6}$，远小于 $10^{-4}$。

$$\boxed{\sqrt{1.1} \approx 1.0488}$$

（精确值：$\sqrt{1.1} = 1.04880884\ldots$）

**知识点：** 泰勒展开可用于数值近似；余项估计保证精度。

</details>

---

### 题目 8
**题目：** 证明 $e$ 是无理数。（提示：利用 $e = \sum_{n=0}^{+\infty} \dfrac{1}{n!}$）

<details>
<summary>参考答案</summary>

**证明：** 反证法。假设 $e = \dfrac{p}{q}$，其中 $p, q$ 为正整数。

$$e = \sum_{n=0}^{+\infty}\frac{1}{n!}$$

两边乘以 $q!$：

$$q! \cdot e = q!\sum_{n=0}^{q}\frac{1}{n!} + q!\sum_{n=q+1}^{+\infty}\frac{1}{n!}$$

左边 $q! \cdot e = q! \cdot \dfrac{p}{q} = (q-1)! \cdot p$ 是整数。

右边第一项 $q!\sum_{n=0}^{q}\dfrac{1}{n!} = \sum_{n=0}^{q}\dfrac{q!}{n!}$ 是整数（因为 $n \leq q$ 时 $n! | q!$）。

所以右边第二项 $R = q!\sum_{n=q+1}^{+\infty}\dfrac{1}{n!}$ 也必须是整数。

但：

$$R = \frac{q!}{(q+1)!} + \frac{q!}{(q+2)!} + \cdots = \frac{1}{q+1} + \frac{1}{(q+1)(q+2)} + \cdots$$

$$0 < R < \frac{1}{q+1}\left(1 + \frac{1}{q+1} + \frac{1}{(q+1)^2} + \cdots\right) = \frac{1}{q+1} \cdot \frac{q+1}{q} = \frac{1}{q} \leq 1$$

所以 $0 < R < 1$，$R$ 不可能是整数，矛盾。

因此 $e$ 是无理数。$\blacksquare$

**知识点：** 泰勒级数不仅用于计算，还可用于证明数的性质（如有理性/无理性）。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了幂级数与泰勒展开的核心内容：

1. **收敛半径**：比值法 $R = \lim\left|\dfrac{a_n}{a_{n+1}}\right|$；端点需单独用其他判别法检验。
2. **基本展开式**：$e^x$、$\sin x$、$\cos x$、$\dfrac{1}{1-x}$、$\ln(1+x)$ 的麦克劳林级数必须熟记。
3. **展开技巧**：代换（$x \to x^2$ 等）、逐项求导、逐项积分可从已知展开推导新展开。
4. **泰勒展开求极限**：将分子分母展开到适当阶数，消去低阶项后取极限。
5. **数值近似**：泰勒多项式可近似计算函数值，余项估计保证精度。
6. **理论应用**：泰勒级数可用于证明 $e$ 等常数的无理性。
