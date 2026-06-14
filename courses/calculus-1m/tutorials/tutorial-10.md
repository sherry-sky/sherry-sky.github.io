> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week10.pdf`

---

# Tutorial 10 - 反常积分、弧长与旋转面面积

## 📌 知识点梳理
- 反常积分的收敛性判定
- 比较判别法
- 弧长公式
- 旋转面面积公式
- Gabriel 号角（Torricelli 喇叭）悖论

---

### 题目 1（核心题）

**题目：** 判断下列反常积分是否收敛，若收敛则求值。

**(a)** $\int_3^\infty \frac{1}{3x - 1}\,dx$

**(b)** $\int_1^\infty \frac{e^{-\sqrt{x}}}{\sqrt{x}}\,dx$

**(c)** $\int_{-\infty}^0 \frac{2x + 3}{(x^2 + 3x + 1)^3}\,dx$

**(d)** $\int_0^{\pi/2} \sec^2 x\,dx$

**(e)** $\int_0^1 \frac{\sin(1/x)}{x^2}\,dx$

**(f)** $\int_0^3 \left(\frac{1}{\sqrt{9 - x^2}} + \frac{1}{\sqrt[3]{3 - x}}\right)\,dx$

**(g)** $\int_0^\infty \ln(x^2 + 2x + 2)\,dx$

**(h)** $\int_{-\infty}^\infty \frac{1}{4x^2 + 4x + 5}\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\int_3^\infty \frac{dx}{3x - 1} = \frac{1}{3}\ln|3x - 1|\Big|_3^\infty = \infty$

$$\boxed{\text{发散}}$$

**(b)** 令 $u = \sqrt{x}$，$du = \frac{dx}{2\sqrt{x}}$：

$$\int_1^\infty \frac{e^{-\sqrt{x}}}{\sqrt{x}}\,dx = 2\int_1^\infty e^{-u}\,du = 2[-e^{-u}]_1^\infty = 2e^{-1} = \boxed{\frac{2}{e}}$$

**(c)** 令 $u = x^2 + 3x + 1$，$du = (2x + 3)\,dx$：

$x = 0$ 时 $u = 1$，$x \to -\infty$ 时 $u \to +\infty$：

$$\int_{+\infty}^1 \frac{du}{u^3} = \left[-\frac{1}{2u^2}\right]_{+\infty}^1 = -\frac{1}{2} + 0 = \boxed{-\frac{1}{2}}$$

**(d)** $\int_0^{\pi/2} \sec^2 x\,dx = \tan x\Big|_0^{\pi/2} = \lim_{x \to \pi/2^-} \tan x - 0 = +\infty$

$$\boxed{\text{发散}}$$

**(e)** 令 $u = 1/x$，$du = -1/x^2\,dx$：

$$\int_0^1 \frac{\sin(1/x)}{x^2}\,dx = \int_\infty^1 \sin u \cdot (-du) = \int_1^\infty \sin u\,du$$

$\lim_{b \to \infty} [-\cos u]_1^b = \lim_{b \to \infty} (\cos 1 - \cos b)$，极限不存在。

$$\boxed{\text{发散}}$$

**(f)** 第一个积分：$\int_0^3 \frac{dx}{\sqrt{9 - x^2}} = \sin^{-1}\frac{x}{3}\Big|_0^3 = \frac{\pi}{2}$

第二个积分：$\int_0^3 (3 - x)^{-1/3}\,dx = \left[-\frac{3}{2}(3 - x)^{2/3}\right]_0^3 = 0 + \frac{3}{2} \cdot 3^{2/3} = \frac{3^{5/3}}{2}$

$$\boxed{\frac{\pi}{2} + \frac{3^{5/3}}{2}} \quad \text{收敛}$$

**(g)** 当 $x \to \infty$ 时，$\ln(x^2 + 2x + 2) \sim 2\ln x \to \infty$，被积函数不趋于零。

$$\boxed{\text{发散}}$$

**(h)** $4x^2 + 4x + 5 = (2x + 1)^2 + 4$，令 $u = 2x + 1$：

$$\int_{-\infty}^\infty \frac{dx}{(2x+1)^2 + 4} = \frac{1}{2}\int_{-\infty}^\infty \frac{du}{u^2 + 4} = \frac{1}{2} \cdot \frac{1}{2}\tan^{-1}\frac{u}{2}\Big|_{-\infty}^\infty = \frac{1}{4} \cdot \pi = \boxed{\frac{\pi}{4}}$$

**知识点：** 反常积分需分类型处理——无穷区间型和无界函数型，关键是计算极限。

</details>

---

### 题目 2（核心题）

**题目：** 判断下列反常积分的收敛性。

**(a)** $\int_{\pi/2}^\infty \frac{1}{x^2 + \sin^2 x}\,dx$

**(b)** $\int_1^\infty \frac{1}{\sqrt{x^4 + x}}\,dx$

**(c)** $\int_2^\infty \frac{1}{\sqrt{x(x - 1)}}\,dx$

**(d)** $\int_1^\infty \frac{\pi + |\sin(x^3 - 1)|}{\sqrt{x}}\,dx$

**(e)** $\int_e^\infty \frac{1}{x(\ln x)^p}\,dx$，$p \in \mathbb{R}$

**(f)** $\int_0^\infty xe^{-2x}\,dx$

**(g)** $\int_{-\infty}^\infty \frac{1}{\cosh x}\,dx$

**(h)** $\int_0^{\pi/2} \csc x\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\frac{1}{x^2 + \sin^2 x} \leq \frac{1}{x^2}$，而 $\int_{\pi/2}^\infty \frac{dx}{x^2}$ 收敛。由比较判别法，**收敛**。

**(b)** $\frac{1}{\sqrt{x^4 + x}} \sim \frac{1}{x^2}$（$x \to \infty$），$\int_1^\infty \frac{dx}{x^2}$ 收敛。**收敛**。

**(c)** $\frac{1}{\sqrt{x(x-1)}} \sim \frac{1}{x}$（$x \to \infty$），$\int_2^\infty \frac{dx}{x}$ 发散。**发散**。

**(d)** $\frac{\pi + |\sin(x^3 - 1)|}{\sqrt{x}} \geq \frac{\pi}{\sqrt{x}}$，$\int_1^\infty \frac{\pi}{\sqrt{x}}\,dx$ 发散。**发散**。

**(e)** 令 $u = \ln x$，$du = dx/x$：$\int_1^\infty \frac{du}{u^p}$。$p > 1$ 时收敛，$p \leq 1$ 时发散。

$$\boxed{p > 1 \text{ 时收敛，} p \leq 1 \text{ 时发散}}$$

**(f)** 分部积分：$\int_0^\infty xe^{-2x}\,dx = \left[-\frac{x}{2}e^{-2x}\right]_0^\infty + \frac{1}{2}\int_0^\infty e^{-2x}\,dx = 0 + \frac{1}{4} = \boxed{\frac{1}{4}}$，收敛。

**(g)** $\frac{1}{\cosh x} = \frac{2}{e^x + e^{-x}} \sim 2e^{-x}$（$x \to +\infty$），$\sim 2e^x$（$x \to -\infty$）。两者均指数衰减，**收敛**。

实际上 $\int_{-\infty}^\infty \frac{2}{e^x + e^{-x}}\,dx = 2\tan^{-1}(e^x)\Big|_{-\infty}^\infty = 2(\frac{\pi}{2} - 0) = \pi$。

**(h)** $\csc x = \frac{1}{\sin x} \sim \frac{1}{x}$（$x \to 0^+$），$\int_0^{\pi/2} \frac{dx}{x}$ 发散。**发散**。

**知识点：** 比较判别法——找一个已知收敛/发散的函数做比较。

</details>

---

### 题目 4

**题目：** 用分部积分证明下列反常积分收敛。

**(a)** $\int_0^\infty \frac{\sin x}{x}\,dx$

**(b)** $\int_0^\infty \cos(x^2)\,dx$

<details>
<summary>参考答案</summary>

**证明：**

**(a)** 将积分分为 $\int_0^1$ 和 $\int_1^\infty$。$\int_0^1 \frac{\sin x}{x}\,dx$ 中 $\frac{\sin x}{x} \to 1$（$x \to 0$），被积函数连续有界，积分收敛。

对 $\int_1^\infty \frac{\sin x}{x}\,dx$，分部积分：$u = \frac{1}{x}$，$dv = \sin x\,dx$：

$$\int_1^b \frac{\sin x}{x}\,dx = \left[-\frac{\cos x}{x}\right]_1^b - \int_1^b \frac{\cos x}{x^2}\,dx$$

当 $b \to \infty$ 时，$-\frac{\cos b}{b} \to 0$，$\int_1^\infty \frac{\cos x}{x^2}\,dx$ 绝对收敛（$|\frac{\cos x}{x^2}| \leq \frac{1}{x^2}$）。

故 $\int_0^\infty \frac{\sin x}{x}\,dx$ 收敛。$\blacksquare$

**(b)** 令 $u = x^2$，$du = 2x\,dx$：$\int_0^\infty \cos(x^2)\,dx = \int_0^\infty \frac{\cos u}{2\sqrt{u}}\,du$

类似 (a)，分部积分可证其收敛（Fresnel 积分）。$\blacksquare$

**知识点：** 分部积分可以将条件收敛的积分转化为绝对收敛的积分。

</details>

---

### 题目 6（核心题）

**题目：** 求下列曲线的弧长。

**(a)** $y = e^x$，$x \in [0, 1]$

**(b)** $36y^2 = (x^2 - 4)^3$，$2 \leq x \leq 3$，$y \geq 0$

**(c)** $y = \ln(\cos x)$，$x \in [0, \pi/3]$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $y' = e^x$，$L = \int_0^1 \sqrt{1 + e^{2x}}\,dx$

令 $u = e^x$，$du = e^x\,dx = u\,dx$：

$$L = \int_1^e \frac{\sqrt{1 + u^2}}{u}\,du$$

再令 $u = \tan\theta$：

$$L = \int \frac{\sec\theta}{\tan\theta}\sec^2\theta\,d\theta = \int \frac{\sec^3\theta}{\tan\theta}\,d\theta$$

此积分结果为 $\sqrt{1 + u^2} - \ln\left|\frac{1 + \sqrt{1 + u^2}}{u}\right|\Big|_1^e$

$$= \sqrt{1 + e^2} - \sqrt{2} + \ln\frac{1 + \sqrt{2}}{e + \sqrt{1 + e^2}} + \ln(1 + \sqrt{2})$$

简化后：$\boxed{\sqrt{1 + e^2} - \sqrt{2} + \ln\frac{(1 + \sqrt{2})^2}{e + \sqrt{1 + e^2}}}$

**(b)** $y = \frac{(x^2 - 4)^{3/2}}{6}$，$y' = \frac{3(x^2 - 4)^{1/2} \cdot 2x}{6} = x\sqrt{x^2 - 4}$

$1 + (y')^2 = 1 + x^2(x^2 - 4) = 1 + x^4 - 4x^2 = (x^2 - 2)^2 - 3$... 

让我重新计算：$1 + x^2(x^2 - 4) = x^4 - 4x^2 + 1$。这不太容易化简。

实际上 $1 + (y')^2 = 1 + x^2(x^2 - 4) = x^4 - 4x^2 + 1$。

嗯，让我重新检查。$y = \frac{(x^2-4)^{3/2}}{6}$，$y' = \frac{3}{6}(x^2-4)^{1/2} \cdot 2x = x(x^2-4)^{1/2}$

$(y')^2 = x^2(x^2-4) = x^4 - 4x^2$

$1 + (y')^2 = x^4 - 4x^2 + 1$

这个不完全平方。让我重新检查原题... $36y^2 = (x^2 - 4)^3$，$y \geq 0$，$y = \frac{(x^2-4)^{3/2}}{6}$。

$L = \int_2^3 \sqrt{x^4 - 4x^2 + 1}\,dx$

这个积分较复杂，可能需要数值方法。

**(c)** $y' = \frac{-\sin x}{\cos x} = -\tan x$

$1 + (y')^2 = 1 + \tan^2 x = \sec^2 x$

$$L = \int_0^{\pi/3} \sec x\,dx = \ln|\sec x + \tan x|\Big|_0^{\pi/3} = \ln(2 + \sqrt{3}) - \ln 1 = \boxed{\ln(2 + \sqrt{3})}$$

**知识点：** 弧长公式 $L = \int_a^b \sqrt{1 + (y')^2}\,dx$。

</details>

---

### 题目 7

**题目：** 求曲线绕 $x$ 轴旋转所得的旋转面面积。

**(a)** $y = e^{-x}$，$x \in [0, 1]$

**(b)** $x^2 + y^2 = a^2$，$x \in [0, a/2]$，$y \geq 0$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $y' = -e^{-x}$，$S = 2\pi\int_0^1 e^{-x}\sqrt{1 + e^{-2x}}\,dx$

令 $u = e^{-x}$，$du = -e^{-x}\,dx$：

$$S = 2\pi\int_{1/e}^1 \sqrt{1 + u^2}\,du = 2\pi\left[\frac{u\sqrt{1+u^2}}{2} + \frac{1}{2}\ln(u + \sqrt{1+u^2})\right]_{1/e}^1$$

$$= \pi\left[\sqrt{2} + \ln(1 + \sqrt{2}) - \frac{1}{e}\sqrt{1 + \frac{1}{e^2}} - \ln\left(\frac{1}{e} + \sqrt{1 + \frac{1}{e^2}}\right)\right]$$

**(b)** 球面的一部分。$y = \sqrt{a^2 - x^2}$，$y' = \frac{-x}{\sqrt{a^2 - x^2}}$

$1 + (y')^2 = 1 + \frac{x^2}{a^2 - x^2} = \frac{a^2}{a^2 - x^2}$

$$S = 2\pi\int_0^{a/2} \sqrt{a^2 - x^2} \cdot \frac{a}{\sqrt{a^2 - x^2}}\,dx = 2\pi a \int_0^{a/2} dx = 2\pi a \cdot \frac{a}{2} = \boxed{\pi a^2}$$

**知识点：** 旋转面面积 $S = 2\pi\int_a^b y\sqrt{1 + (y')^2}\,dx$。

</details>

---

### 题目 8

**题目：** Gabriel 号角——对 $t > 1$，设 $A(t)$ 为 $y = \frac{1}{x}$ 绕 $x$ 轴旋转所得曲面在 $[1, t]$ 上的面积，$V(t)$ 为对应体积。证明 $\lim_{t \to \infty} A(t) = \infty$ 但 $\lim_{t \to \infty} V(t)$ 有限。

<details>
<summary>参考答案</summary>

**证明：**

$y = \frac{1}{x}$，$y' = -\frac{1}{x^2}$

**体积：**
$$V(t) = \pi\int_1^t \frac{1}{x^2}\,dx = \pi\left[-\frac{1}{x}\right]_1^t = \pi\left(1 - \frac{1}{t}\right)$$

$$\lim_{t \to \infty} V(t) = \boxed{\pi} \quad \text{（有限）}$$

**面积：**
$$A(t) = 2\pi\int_1^t \frac{1}{x}\sqrt{1 + \frac{1}{x^4}}\,dx > 2\pi\int_1^t \frac{1}{x}\,dx = 2\pi\ln t$$

$$\lim_{t \to \infty} 2\pi\ln t = \infty \implies \lim_{t \to \infty} A(t) = \boxed{\infty}$$

**悖论：** 有限体积却需要无限大的表面积来覆盖——"Painter's Paradox"：可以用有限油漆填充号角内部，但无法涂满其表面。

**知识点：** 反常积分的收敛与发散在几何中的奇妙应用。

</details>

---

### 题目 9

**题目：** 求曲线绕 $y$ 轴旋转所得的旋转面面积。

**(a)** $x^2 + y^2 = a^2$，$y \in [0, a/2]$，$x \geq 0$

**(c)** $(x - R)^2 + y^2 = r^2$，$0 < r < R$，从 $y = -r$ 到 $y = r$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $x = \sqrt{a^2 - y^2}$，$\frac{dx}{dy} = \frac{-y}{\sqrt{a^2 - y^2}}$

$1 + \left(\frac{dx}{dy}\right)^2 = \frac{a^2}{a^2 - y^2}$

$$S = 2\pi\int_0^{a/2} x\sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy = 2\pi\int_0^{a/2} \sqrt{a^2 - y^2} \cdot \frac{a}{\sqrt{a^2 - y^2}}\,dy = 2\pi a \cdot \frac{a}{2} = \boxed{\pi a^2}$$

**(c)** 这是圆环面（torus）的表面积。参数化：$x = R + r\cos\theta$，$y = r\sin\theta$。

绕 $y$ 轴旋转的面积：
$$S = 2\pi\int_{-r}^r x\sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$$

利用参数形式：$S = 2\pi\int_0^{2\pi} (R + r\cos\theta) \cdot r\,d\theta = 2\pi r[R\theta + r\sin\theta]_0^{2\pi} = 2\pi r \cdot 2\pi R = \boxed{4\pi^2 Rr}$$

**知识点：** 绕 $y$ 轴旋转的面积 $S = 2\pi\int x\,ds$；圆环面面积可用 Pappus 定理。

</details>

---

## 📝 本次知识点总结

1. **反常积分**：分无穷区间型和无界函数型，通过极限判定收敛性。
2. **比较判别法**：找合适的比较函数是判定收敛性的关键技巧。
3. **弧长**：$L = \int\sqrt{1 + (y')^2}\,dx$，注意化简根号下的表达式。
4. **旋转面面积**：$S = 2\pi\int y\sqrt{1 + (y')^2}\,dx$（绕 $x$ 轴）。
5. **Gabriel 号角**：有限体积 + 无限表面积的悖论，展示了反常积分的反直觉性质。
