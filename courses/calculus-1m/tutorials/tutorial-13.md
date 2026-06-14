> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week13.pdf`

---

# Tutorial 13 - 幂级数与 Taylor 级数

## 📌 知识点梳理
- 幂级数的收敛半径与收敛区间
- 函数展开为幂级数
- Taylor 级数与 Maclaurin 级数
- 幂级数的逐项求导与逐项积分
- 利用级数进行近似计算

---

### 题目 1（核心题）

**题目：** 求下列幂级数的收敛半径和收敛区间。

**(a)** $\sum_{n=0}^\infty n x^n$

**(b)** $\sum_{n=1}^\infty \frac{1}{n}(x - 3)^n$

**(c)** $\sum_{n=0}^\infty \frac{1}{n^2 + 1}(x - 2)^n$

**(d)** $\sum_{n=0}^\infty n!(2x - 1)^n$

**(e)** $\sum_{n=0}^\infty \frac{1}{n^3}(5x - 4)^n$

**(f)** $\sum_{n=0}^\infty \frac{(-3)^n}{\sqrt{n + 1}} x^n$

**(g)** $\sum_{n=1}^\infty \frac{(-1)^n}{(2n - 1)^{2n}}(x - 1)^n$

**(h)** $\sum_{n=2}^\infty \frac{1}{2^n \ln n}(x + 2)^n$

**(i)** $\sum_{n=1}^\infty \frac{\sqrt{n}}{9^n}(x + 7)^n$

**(j)** $\sum_{n=2}^\infty \frac{1}{n^n}(x - 2)^n$

**(k)** $\sum_{n=1}^\infty \frac{1}{\sqrt{5n}}\sqrt{n}(3x - 1)^n$

**(l)** $\sum_{n=1}^\infty \frac{n}{b^n}(x - a)^n$，$b > 0$

**(m)** $\sum_{n=2}^\infty \frac{n^{2n}}{2 \cdot 4 \cdot 6 \cdots (2n)} x^n$

**(n)** $\sum_{n=1}^\infty \frac{1}{n^3}(5x - 4)^n$（同 e）

**(o)** $\sum_{n=1}^\infty \frac{1}{1 \cdot 3 \cdot 5 \cdots (2n - 1)} x^n$

**(p)** $\sum_{n=1}^\infty \frac{n!}{1 \cdot 3 \cdot 5 \cdots (2n - 1)} x^n$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\frac{a_{n+1}}{a_n} = \frac{n+1}{n}|x| \to |x|$。$R = 1$。

端点 $x = \pm 1$：$\sum n(\pm 1)^n$，通项不趋于零，发散。

$$\boxed{R = 1,\; (-1, 1)}$$

**(b)** $\frac{a_{n+1}}{a_n} = \frac{n}{n+1}|x - 3| \to |x - 3|$。$R = 1$。

$x = 4$：$\sum \frac{1}{n}$，发散。$x = 2$：$\sum \frac{(-1)^n}{n}$，条件收敛。

$$\boxed{R = 1,\; [2, 4)}$$

**(c)** $\frac{a_{n+1}}{a_n} = \frac{n^2 + 1}{(n+1)^2 + 1}|x - 2| \to |x - 2|$。$R = 1$。

$x = 3$：$\sum \frac{1}{n^2 + 1}$，收敛。$x = 1$：$\sum \frac{(-1)^n}{n^2 + 1}$，绝对收敛。

$$\boxed{R = 1,\; [1, 3]}$$

**(d)** $\frac{a_{n+1}}{a_n} = (n+1)|2x - 1| \to \infty$（$x \neq 1/2$）。$R = 0$。

$$\boxed{R = 0,\; \text{仅在 } x = \frac{1}{2} \text{ 处收敛}}$$

**(e)** 改写为 $\sum \frac{1}{n^3} 5^n (x - 4/5)^n$。

$\frac{a_{n+1}}{a_n} = \frac{n^3}{(n+1)^3} \cdot 5|x - 4/5| \to 5|x - 4/5|$。$5|x - 4/5| < 1 \implies |x - 4/5| < 1/5$。

$R = 1/5$。端点：$x = 1$ 时 $\sum \frac{1}{n^3}$ 收敛，$x = 3/5$ 时 $\sum \frac{(-1)^n}{n^3}$ 绝对收敛。

$$\boxed{R = \frac{1}{5},\; \left[\frac{3}{5},\; 1\right]}$$

**(f)** $\frac{a_{n+1}}{a_n} = \frac{3\sqrt{n+1}}{\sqrt{n+2}}|x| \to 3|x|$。$R = 1/3$。

$x = 1/3$：$\sum \frac{(-1)^n}{\sqrt{n+1}}$，条件收敛。$x = -1/3$：$\sum \frac{1}{\sqrt{n+1}}$，发散。

$$\boxed{R = \frac{1}{3},\; \left[-\frac{1}{3},\; \frac{1}{3}\right)}$$

**(g)** 根值判别法：$|a_n|^{1/n} = \frac{|x - 1|}{(2n - 1)^2} \to 0$。$R = \infty$。

$$\boxed{R = \infty,\; (-\infty, +\infty)}$$

**(h)** $\frac{a_{n+1}}{a_n} = \frac{2^n \ln n}{2^{n+1} \ln(n+1)}|x + 2| \to \frac{|x + 2|}{2}$。$R = 2$。

$x = 0$：$\sum \frac{1}{2^n \ln n}$，收敛。$x = -4$：$\sum \frac{(-1)^n}{2^n \ln n}$，绝对收敛。

$$\boxed{R = 2,\; [-4, 0]}$$

**(i)** $\frac{a_{n+1}}{a_n} = \frac{\sqrt{n+1}}{9\sqrt{n}}|x + 7| \to \frac{|x + 7|}{9}$。$R = 9$。

$$\boxed{R = 9}$$

**(j)** 根值：$|a_n|^{1/n} = \frac{|x - 2|}{n} \to 0$。$R = \infty$。

$$\boxed{R = \infty,\; (-\infty, +\infty)}$$

**(k)** $\frac{1}{\sqrt{5n}} \cdot \sqrt{n} = \frac{1}{\sqrt{5}}$。级数为 $\sum \frac{1}{\sqrt{5}}(3x - 1)^n$，等比级数。

$|3x - 1| < 1 \implies 0 < x < 2/3$。$R = 1/3$。

$$\boxed{R = \frac{1}{3},\; \left(0,\; \frac{2}{3}\right)}$$

**(l)** $\frac{a_{n+1}}{a_n} = \frac{n+1}{n} \cdot \frac{|x - a|}{b} \to \frac{|x - a|}{b}$。$R = b$。

$$\boxed{R = b}$$

**(m)** $\frac{a_{n+1}}{a_n} = \frac{(n+1)^{2(n+1)}}{(2n+2)} \cdot \frac{2 \cdot 4 \cdots (2n)}{n^{2n}}|x| = \frac{(n+1)^{2n+2}}{n^{2n}(2n+2)}|x|$

$= \frac{(n+1)^{2n} \cdot (n+1)^2}{n^{2n} \cdot 2(n+1)}|x| = \frac{(1 + 1/n)^{2n} \cdot (n+1)}{2}|x| \to \infty$

$R = 0$。

$$\boxed{R = 0}$$

**(o)** $\frac{a_{n+1}}{a_n} = \frac{1 \cdot 3 \cdots (2n-1)}{1 \cdot 3 \cdots (2n+1)}|x| = \frac{|x|}{2n + 1} \to 0$。$R = \infty$。

$$\boxed{R = \infty,\; (-\infty, +\infty)}$$

**(p)** $\frac{a_{n+1}}{a_n} = \frac{(n+1)}{2n + 1}|x| \to \frac{|x|}{2}$。$R = 2$。

$$\boxed{R = 2}$$

**知识点：** 收敛半径用比值判别法或根值判别法求；端点需逐一检验。

</details>

---

### 题目 2（核心题）

**题目：** 将下列函数展开为幂级数，并求收敛半径和收敛区间。

**(a)** $f(x) = \frac{1}{1 - x}$

**(b)** $f(x) = \frac{x^5}{1 - x}$

**(c)** $f(x) = \frac{1}{(1 - x)^2}$

**(d)** $f(x) = \ln(x + 1)$

**(e)** $f(x) = \arctan x$

**(j)** $f(x) = \frac{2x - 4}{x^2 - 4x + 3}$

**(k)** $f(x) = \frac{2x + 3}{x^2 + 3x + 2}$

**(l)** $f(x) = \ln(5 - x)$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\frac{1}{1 - x} = \sum_{n=0}^\infty x^n$，$R = 1$，$(-1, 1)$

**(b)** $\frac{x^5}{1 - x} = x^5 \sum_{n=0}^\infty x^n = \sum_{n=0}^\infty x^{n+5} = \sum_{n=5}^\infty x^n$，$R = 1$，$(-1, 1)$

**(c)** 对 $\frac{1}{1-x} = \sum x^n$ 逐项求导：$\frac{1}{(1-x)^2} = \sum_{n=1}^\infty nx^{n-1} = \sum_{n=0}^\infty (n+1)x^n$，$R = 1$，$(-1, 1)$

**(d)** 对 $\frac{1}{1+t} = \sum (-1)^n t^n$ 从 $0$ 到 $x$ 积分：

$$\ln(1 + x) = \sum_{n=0}^\infty \frac{(-1)^n}{n + 1} x^{n+1} = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} x^n$$

$R = 1$。$x = 1$ 时 $\sum \frac{(-1)^{n-1}}{n}$ 收敛，$x = -1$ 时 $\sum \frac{-1}{n}$ 发散。

收敛区间 $(-1, 1]$。

**(e)** 对 $\frac{1}{1 + t^2} = \sum (-1)^n t^{2n}$ 积分：

$$\arctan x = \sum_{n=0}^\infty \frac{(-1)^n}{2n + 1} x^{2n+1}$$

$R = 1$，$[-1, 1]$。

**(j)** $f(x) = \frac{2(x - 2)}{(x - 1)(x - 3)}$

部分分式：$\frac{2x - 4}{(x-1)(x-3)} = \frac{A}{x-1} + \frac{B}{x-3}$

$x = 1$：$A = \frac{-2}{-2} = 1$。$x = 3$：$B = \frac{2}{2} = 1$。

$f(x) = \frac{1}{x - 1} + \frac{1}{x - 3} = \frac{-1}{1 - x} + \frac{-1/3}{1 - x/3}$

$= -\sum_{n=0}^\infty x^n - \frac{1}{3}\sum_{n=0}^\infty \left(\frac{x}{3}\right)^n = -\sum_{n=0}^\infty \left(1 + \frac{1}{3^{n+1}}\right) x^n$

$R = 1$（两个级数收敛半径的最小值）。

**(k)** $\frac{2x + 3}{(x + 1)(x + 2)} = \frac{A}{x + 1} + \frac{B}{x + 2}$

$x = -1$：$A = \frac{1}{1} = 1$。$x = -2$：$B = \frac{-1}{-1} = 1$。

$f(x) = \frac{1}{1 + x} + \frac{1}{2 + x} = \sum (-x)^n + \frac{1}{2}\sum\left(-\frac{x}{2}\right)^n = \sum_{n=0}^\infty (-1)^n\left(1 + \frac{1}{2^{n+1}}\right)x^n$

$R = 1$。

**(l)** $\ln(5 - x) = \ln 5 + \ln\left(1 - \frac{x}{5}\right) = \ln 5 - \sum_{n=1}^\infty \frac{1}{n}\left(\frac{x}{5}\right)^n = \ln 5 - \sum_{n=1}^\infty \frac{x^n}{n \cdot 5^n}$

$R = 5$。

**知识点：** 利用已知幂级数（几何级数）通过逐项求导、逐项积分、部分分式等方法得到新的幂级数展开。

</details>

---

### 题目 3

**题目：** 证明 $\frac{1}{(1 - x)^{m+1}} = \sum_{n=0}^\infty \binom{n + m}{m} x^n$，$m \in \mathbb{N}$，$x \in (-1, 1)$。

<details>
<summary>参考答案</summary>

**证明：**

对 $\frac{1}{1 - x} = \sum_{n=0}^\infty x^n$ 逐次求导 $m$ 次：

左边：$\frac{d^m}{dx^m}(1 - x)^{-1} = m!(1 - x)^{-(m+1)}$

右边：$\frac{d^m}{dx^m}\sum_{n=0}^\infty x^n = \sum_{n=m}^\infty n(n-1)\cdots(n-m+1)x^{n-m} = \sum_{k=0}^\infty (k+m)(k+m-1)\cdots(k+1)x^k$

$= m!\sum_{k=0}^\infty \binom{k + m}{m} x^k$

因此 $(1 - x)^{-(m+1)} = \sum_{k=0}^\infty \binom{k + m}{m} x^k$。$\blacksquare$

**知识点：** 幂级数的逐项求导——对几何级数反复求导可得广义二项式展开。

</details>

---

### 题目 4（核心题）

**题目：** 求下列函数的 Taylor 级数。

**(a)** $\sin x$ 在 $a = 0$

**(b)** $\sin x$ 在 $a = \pi$

**(c)** $\sin^2 x = \frac{1}{2}(1 - \cos 2x)$ 在 $a = 0$

**(d)** $x\cos x$ 在 $a = 0$

**(e)** $\frac{1}{x + 5}$ 在 $a = -2$

**(f)** $\frac{x^2 + 4x + 4}{x + 5}$ 在 $a = -2$

**(g)** $x^2 + 2x - 1$ 在 $a = 1$

**(h)** $(x^2 + 2x - 1)e^x$ 在 $a = 1$

**(i)** $e^{-x^2}$ 在 $a = 0$

**(j)** $\int_0^x e^{-t^2}\,dt$ 在 $a = 0$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\sin x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n + 1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$，$R = \infty$

**(b)** $\sin x = \sin(x - \pi + \pi) = -\sin(x - \pi)$

$$\sin x = -\sum_{n=0}^\infty \frac{(-1)^n}{(2n + 1)!}(x - \pi)^{2n+1} = \sum_{n=0}^\infty \frac{(-1)^{n+1}}{(2n + 1)!}(x - \pi)^{2n+1}$$

**(c)** $\cos 2x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!}(2x)^{2n} = \sum_{n=0}^\infty \frac{(-1)^n 4^n}{(2n)!} x^{2n}$

$$\sin^2 x = \frac{1}{2} - \frac{1}{2}\sum_{n=0}^\infty \frac{(-1)^n 4^n}{(2n)!} x^{2n} = \sum_{n=1}^\infty \frac{(-1)^{n+1} 2^{2n-1}}{(2n)!} x^{2n}$$

**(d)** $x\cos x = x\sum_{n=0}^\infty \frac{(-1)^n}{(2n)!}x^{2n} = \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!}x^{2n+1}$

**(e)** $\frac{1}{x + 5} = \frac{1}{(x + 2) + 3} = \frac{1}{3} \cdot \frac{1}{1 + \frac{x+2}{3}} = \frac{1}{3}\sum_{n=0}^\infty (-1)^n \left(\frac{x + 2}{3}\right)^n = \sum_{n=0}^\infty \frac{(-1)^n}{3^{n+1}}(x + 2)^n$

$R = 3$。

**(f)** $\frac{x^2 + 4x + 4}{x + 5} = \frac{(x + 2)^2}{x + 5}$

利用 (e)：$\frac{1}{x + 5} = \sum_{n=0}^\infty \frac{(-1)^n}{3^{n+1}}(x + 2)^n$

$(x + 2)^2 \cdot \frac{1}{x + 5} = \sum_{n=0}^\infty \frac{(-1)^n}{3^{n+1}}(x + 2)^{n+2} = \sum_{n=2}^\infty \frac{(-1)^{n-2}}{3^{n-1}}(x + 2)^n = \sum_{n=2}^\infty \frac{(-1)^n}{3^{n-1}}(x + 2)^n$

**(g)** $x^2 + 2x - 1$ 在 $a = 1$：令 $u = x - 1$，$x = u + 1$。

$(u + 1)^2 + 2(u + 1) - 1 = u^2 + 2u + 1 + 2u + 2 - 1 = u^2 + 4u + 2$

$$f(x) = 2 + 4(x - 1) + (x - 1)^2$$

（多项式的 Taylor 级数就是它本身。）

**(h)** 令 $u = x - 1$，$x = u + 1$。$x^2 + 2x - 1 = (u+1)^2 + 2(u+1) - 1 = u^2 + 4u + 2$

$e^x = e^{u+1} = e \cdot e^u = e\sum_{n=0}^\infty \frac{u^n}{n!}$

$(u^2 + 4u + 2) \cdot e\sum_{n=0}^\infty \frac{u^n}{n!}$，展开合并同类项即可。

**(i)** $e^{-x^2} = \sum_{n=0}^\infty \frac{(-x^2)^n}{n!} = \sum_{n=0}^\infty \frac{(-1)^n}{n!} x^{2n}$，$R = \infty$

**(j)** 对 (i) 逐项积分：

$$\int_0^x e^{-t^2}\,dt = \sum_{n=0}^\infty \frac{(-1)^n}{n!} \int_0^x t^{2n}\,dt = \sum_{n=0}^\infty \frac{(-1)^n}{n!(2n + 1)} x^{2n+1}$$

$$= x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \cdots$$

**知识点：** Taylor 级数的常用方法——直接展开、利用已知级数替换、逐项求导/积分、多项式乘法。

</details>

---

### 题目 5

**题目：** 用级数近似 $f(x)$，使误差小于 $\varepsilon$。

**(a)** $f(x) = \sin x$，$x = \frac{1}{2}$，$\varepsilon = 10^{-2}$

**(b)** $f(x) = \int_0^x e^{-t^2}\,dt$，$x = 1$，$\varepsilon = 10^{-3}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\sin\frac{1}{2} = \frac{1}{2} - \frac{(1/2)^3}{3!} + \frac{(1/2)^5}{5!} - \cdots$

这是交错级数，误差 $\leq$ 第一个被忽略的项的绝对值。

第一项：$\frac{1}{2} = 0.5$，误差 $\leq \frac{(1/2)^3}{6} = \frac{1}{48} \approx 0.0208 > 0.01$

前两项：$0.5 - \frac{1}{48} \approx 0.4792$，误差 $\leq \frac{(1/2)^5}{120} = \frac{1}{3840} \approx 0.00026 < 0.01$

$$\boxed{\sin\frac{1}{2} \approx \frac{1}{2} - \frac{1}{48} = \frac{23}{48} \approx 0.479}$$

**(b)** $\int_0^1 e^{-t^2}\,dt = \sum_{n=0}^\infty \frac{(-1)^n}{n!(2n + 1)}$

$= 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \frac{1}{1320} + \cdots$

$= 1 - 0.3333 + 0.1 - 0.02381 + 0.004630 - 0.000758 + 0.000107 - \cdots$

交错级数，误差 $\leq$ 第一个被忽略项。

需 $\frac{1}{n!(2n+1)} < 10^{-3}$：

$n = 4$：$\frac{1}{24 \cdot 9} = \frac{1}{216} \approx 0.00463 > 10^{-3}$

$n = 5$：$\frac{1}{120 \cdot 11} = \frac{1}{1320} \approx 0.000758 < 10^{-3}$

取前 6 项（$n = 0$ 到 $n = 5$）：

$$\int_0^1 e^{-t^2}\,dt \approx 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \frac{1}{1320} \approx 0.7468$$

$$\boxed{\int_0^1 e^{-t^2}\,dt \approx 0.747}$$

**知识点：** 交错级数的余项估计使我们可以精确控制近似精度。

</details>

---

## 📝 本次知识点总结

1. **收敛半径**：比值判别法或根值判别法求 $R$，端点需逐一检验。
2. **幂级数展开**：利用几何级数 $\frac{1}{1-x} = \sum x^n$ 作为基础，通过替换、求导、积分得到新展开。
3. **Taylor 级数**：$f(x) = \sum \frac{f^{(n)}(a)}{n!}(x - a)^n$，可利用已知展开简化计算。
4. **逐项运算**：幂级数在收敛区间内可逐项求导和逐项积分。
5. **近似计算**：交错级数的余项估计提供了精度的保证。
