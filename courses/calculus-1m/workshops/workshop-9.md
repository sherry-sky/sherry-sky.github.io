> **📎 源文件：** `旧资料/02 Workshop/Workshop 9.pdf`

---

# Workshop 9 - 数列与级数基础

## 📌 知识点梳理
- 数列极限的计算
- 级数收敛的定义（部分和）
- 几何级数与 $p$-级数
- 比较判别法与极限比较判别法
- 比值判别法（Ratio Test）与根值判别法（Root Test）
- 交错级数与莱布尼茨判别法

---

### 题目 1
**题目：** 求下列数列的极限：

(a) $a_n = \dfrac{3n^2 + 2n - 1}{5n^2 + n + 3}$

(b) $a_n = \left(1 + \dfrac{2}{n}\right)^n$

(c) $a_n = \dfrac{n!}{n^n}$

<details>
<summary>参考答案</summary>

**(a) 解：** 分子分母同除以 $n^2$：

$$\lim_{n \to \infty} \frac{3 + \frac{2}{n} - \frac{1}{n^2}}{5 + \frac{1}{n} + \frac{3}{n^2}} = \frac{3}{5}$$

**(b) 解：** 利用重要极限 $\lim_{n \to \infty}\left(1 + \dfrac{1}{n}\right)^n = e$：

$$\left(1 + \frac{2}{n}\right)^n = \left[\left(1 + \frac{2}{n}\right)^{n/2}\right]^2 \to e^2$$

$$\boxed{\lim_{n \to \infty}\left(1 + \frac{2}{n}\right)^n = e^2}$$

**(c) 解：**

$$\frac{n!}{n^n} = \frac{1 \cdot 2 \cdot 3 \cdots n}{n \cdot n \cdot n \cdots n} = \frac{1}{n} \cdot \frac{2}{n} \cdot \frac{3}{n} \cdots \frac{n}{n}$$

每一项 $\dfrac{k}{n} \leq 1$，所以：

$$0 < \frac{n!}{n^n} \leq \frac{1}{n} \cdot 1 \cdot 1 \cdots 1 = \frac{1}{n} \to 0$$

由夹逼定理，$\lim_{n \to \infty} \dfrac{n!}{n^n} = 0$。

**知识点：** 数列极限的基本计算方法；重要极限 $(1 + a/n)^n \to e^a$。

</details>

---

### 题目 2
**题目：** 判断下列几何级数的收敛性，若收敛则求和：

(a) $\displaystyle\sum_{n=0}^{+\infty} \left(\frac{2}{3}\right)^n$

(b) $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n}{2^n}$

(c) $\displaystyle\sum_{n=0}^{+\infty} 3 \cdot \left(\frac{5}{4}\right)^n$

<details>
<summary>参考答案</summary>

**(a) 解：** 公比 $r = \dfrac{2}{3}$，$|r| < 1$，收敛。

$$S = \frac{1}{1 - \frac{2}{3}} = \frac{1}{\frac{1}{3}} = 3$$

**(b) 解：** 公比 $r = -\dfrac{1}{2}$，$|r| < 1$，收敛。

$$S = \frac{-\frac{1}{2}}{1 - (-\frac{1}{2})} = \frac{-\frac{1}{2}}{\frac{3}{2}} = -\frac{1}{3}$$

**(c) 解：** 公比 $r = \dfrac{5}{4}$，$|r| > 1$，**发散**。

**知识点：** 几何级数 $\sum ar^n$ 当 $|r| < 1$ 时收敛于 $\dfrac{a}{1-r}$，$|r| \geq 1$ 时发散。

</details>

---

### 题目 3
**题目：** 用比值判别法判断下列级数的收敛性：

(a) $\displaystyle\sum_{n=1}^{+\infty} \frac{n!}{3^n}$

(b) $\displaystyle\sum_{n=1}^{+\infty} \frac{2^n}{n!}$

(c) $\displaystyle\sum_{n=1}^{+\infty} \frac{n^2}{2^n}$

<details>
<summary>参考答案</summary>

**(a) 解：**

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \frac{(n+1)!}{3^{n+1}} \cdot \frac{3^n}{n!} = \lim_{n \to \infty} \frac{n+1}{3} = +\infty > 1$$

**发散**。

**(b) 解：**

$$\lim_{n \to \infty} \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \lim_{n \to \infty} \frac{2}{n+1} = 0 < 1$$

**收敛**（绝对收敛）。

**(c) 解：**

$$\lim_{n \to \infty} \frac{(n+1)^2}{2^{n+1}} \cdot \frac{2^n}{n^2} = \lim_{n \to \infty} \frac{1}{2}\left(\frac{n+1}{n}\right)^2 = \frac{1}{2} < 1$$

**收敛**。

**知识点：** 比值判别法：$L = \lim\left|\dfrac{a_{n+1}}{a_n}\right|$，$L < 1$ 收敛，$L > 1$ 发散，$L = 1$ 不确定。阶乘和指数函数适合用比值判别法。

</details>

---

### 题目 4
**题目：** 用比较判别法或极限比较判别法判断下列级数的收敛性：

(a) $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{n^2 + n}$

(b) $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{\sqrt{n^3 + 1}}$

(c) $\displaystyle\sum_{n=2}^{+\infty} \frac{1}{n\ln n}$

<details>
<summary>参考答案</summary>

**(a) 解：**

$$\frac{1}{n^2 + n} < \frac{1}{n^2}$$

因为 $\sum \dfrac{1}{n^2}$ 收敛（$p = 2 > 1$），由比较判别法，原级数**收敛**。

实际上 $\dfrac{1}{n^2+n} = \dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$，这是 telescoping series，和为 1。

**(b) 解：**

$$\frac{1}{\sqrt{n^3+1}} \sim \frac{1}{n^{3/2}} \quad (n \to \infty)$$

极限比较：$\lim_{n \to \infty} \dfrac{1/\sqrt{n^3+1}}{1/n^{3/2}} = \lim_{n \to \infty} \dfrac{n^{3/2}}{\sqrt{n^3+1}} = 1$

因为 $\sum \dfrac{1}{n^{3/2}}$ 收敛（$p = 3/2 > 1$），原级数**收敛**。

**(c) 解：** 用积分判别法。

$$\int_2^{+\infty} \frac{dx}{x\ln x} = \lim_{b \to +\infty}[\ln(\ln x)]_2^b = +\infty$$

积分发散，所以级数**发散**。

**知识点：** 比较判别法需找合适的比较对象；$\sum \dfrac{1}{n\ln n}$ 是经典的发散级数（比调和级数稍慢）。

</details>

---

### 题目 5
**题目：** 判断下列交错级数的收敛性：

(a) $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n}$

(b) $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n n}{n^2 + 1}$

<details>
<summary>参考答案</summary>

**(a) 解：** 这是交错调和级数。

$a_n = \dfrac{1}{n}$：
- $a_n > 0$
- $a_{n+1} < a_n$（递减）
- $\lim_{n \to \infty} a_n = 0$

由莱布尼茨判别法，级数**收敛**。

（注意：$\sum \dfrac{1}{n}$ 发散，所以这是条件收敛。）

**(b) 解：** $a_n = \dfrac{n}{n^2+1}$。

- $a_n > 0$
- 递减性：$f(x) = \dfrac{x}{x^2+1}$，$f'(x) = \dfrac{1-x^2}{(x^2+1)^2} < 0$ 当 $x > 1$，所以 $n \geq 1$ 后递减。
- $\lim_{n \to \infty} \dfrac{n}{n^2+1} = 0$

由莱布尼茨判别法，级数**收敛**。

绝对收敛性：$\dfrac{n}{n^2+1} \sim \dfrac{1}{n}$，$\sum \dfrac{1}{n}$ 发散，所以**条件收敛**。

**知识点：** 莱布尼茨判别法：交错级数 $\sum(-1)^n a_n$ 若 $a_n$ 递减趋于 0 则收敛。

</details>

---

### 题目 6
**题目：** 判断级数 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n}{\sqrt{n}}$ 是绝对收敛、条件收敛还是发散。

<details>
<summary>参考答案</summary>

**解：**

**绝对收敛性：** $\sum\left|\dfrac{(-1)^n}{\sqrt{n}}\right| = \sum\dfrac{1}{\sqrt{n}} = \sum\dfrac{1}{n^{1/2}}$，这是 $p = 1/2 < 1$ 的 $p$-级数，**发散**。

**条件收敛性：** $a_n = \dfrac{1}{\sqrt{n}}$ 递减趋于 0，由莱布尼茨判别法，原级数**收敛**。

所以该级数**条件收敛**。

**知识点：** 绝对收敛 $\implies$ 收敛；条件收敛 = 收敛但不绝对收敛。

</details>

---

### 题目 7
**题目：** 求幂级数 $\displaystyle\sum_{n=0}^{+\infty} \frac{x^n}{n!}$ 的收敛半径和收敛域。

<details>
<summary>参考答案</summary>

**解：** 用比值判别法：

$$\lim_{n \to \infty}\left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty}\left|\frac{x^{n+1}}{(n+1)!} \cdot \frac{n!}{x^n}\right| = \lim_{n \to \infty}\frac{|x|}{n+1} = 0 < 1 \quad \forall x$$

收敛半径 $R = +\infty$，收敛域为 $\mathbb{R}$。

（此级数即为 $e^x$ 的泰勒展开。）

$$\boxed{R = +\infty, \quad \text{收敛域} = (-\infty, +\infty)}$$

**知识点：** 幂级数收敛半径的比值法公式 $R = \lim\left|\dfrac{a_n}{a_{n+1}}\right|$。

</details>

---

### 题目 8
**题目：** 求级数 $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{n(n+1)(n+2)}$ 的和。

<details>
<summary>参考答案</summary>

**解：** 部分分式分解：

$$\frac{1}{n(n+1)(n+2)} = \frac{A}{n} + \frac{B}{n+1} + \frac{C}{n+2}$$

$$1 = A(n+1)(n+2) + Bn(n+2) + Cn(n+1)$$

$n = 0$：$1 = 2A \implies A = 1/2$

$n = -1$：$1 = -B \implies B = -1$

$n = -2$：$1 = 2C \implies C = 1/2$

$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2n} - \frac{1}{n+1} + \frac{1}{2(n+2)}$$

这可以写成 telescoping 形式。更简洁地：

$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right]$$

验证：$\dfrac{1}{n(n+1)} - \dfrac{1}{(n+1)(n+2)} = \dfrac{(n+2) - n}{n(n+1)(n+2)} = \dfrac{2}{n(n+1)(n+2)}$。正确。

所以部分和：

$$S_N = \frac{1}{2}\sum_{n=1}^N\left[\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right] = \frac{1}{2}\left[\frac{1}{1 \cdot 2} - \frac{1}{(N+1)(N+2)}\right]$$

$$\lim_{N \to \infty} S_N = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$$

$$\boxed{\sum_{n=1}^{+\infty} \frac{1}{n(n+1)(n+2)} = \frac{1}{4}}$$

**知识点：** Telescoping series（裂项级数）——相邻项相互抵消，部分和化简后取极限。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了数列与级数的基础内容：

1. **数列极限**：最高次项主导；重要极限 $(1+a/n)^n \to e^a$；夹逼定理。
2. **几何级数**：$\sum ar^n$，$|r|<1$ 时收敛于 $a/(1-r)$。
3. **比值判别法**：适合含阶乘、指数的级数；$L<1$ 收敛，$L>1$ 发散。
4. **比较判别法**：与 $p$-级数 $\sum 1/n^p$ 比较（$p>1$ 收敛，$p\leq 1$ 发散）。
5. **莱布尼茨判别法**：交错级数 $a_n$ 递减趋于 0 则收敛。
6. **绝对收敛与条件收敛**：绝对收敛强于条件收敛。
7. **裂项级数**：通过部分分式分解使相邻项抵消。
