> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week8.pdf`

---

# Tutorial 8 - 微积分基本定理、积分应用

## 📌 知识点梳理
- 微积分基本定理（FTC）
- 变上限积分函数的求导
- 定积分的计算
- 曲线围成区域的面积
- 旋转体体积

---

### 题目 1（基于图像）

**题目：** 设 $g(x) = \int_0^x f(t)\,dt$，其中 $f$ 的图像已知。求 $g(0), g(1), g(2), g(3), g(6)$，分析 $g$ 的单调性和最大值。

<details>
<summary>参考答案</summary>

**解：**

$g(x)$ 表示 $f$ 从 $0$ 到 $x$ 的有向面积。

- $g(0) = 0$
- $g(x)$ 在 $f(t) > 0$ 的区间上递增，在 $f(t) < 0$ 的区间上递减
- $g$ 的最大值出现在 $f$ 从正变负的点（即 $g'(x) = f(x) = 0$ 且从正变负）

**方法：** 通过计算 $f$ 图像下方面积的累积值来确定 $g$ 的各点值。

**知识点：** FTC 第一部分——$g'(x) = f(x)$，$g$ 的单调性由 $f$ 的符号决定。

</details>

---

### 题目 2

**题目：** 曲线 $y = \int_0^x \frac{1 - t^2}{1 + t^2}\,dt$ 在哪个区间上是凹向下的？

<details>
<summary>参考答案</summary>

**解：**

$y' = \frac{1 - x^2}{1 + x^2}$（FTC）

$y'' = \frac{-2x(1 + x^2) - (1 - x^2)(2x)}{(1 + x^2)^2} = \frac{-2x - 2x^3 - 2x + 2x^3}{(1 + x^2)^2} = \frac{-4x}{(1 + x^2)^2}$

凹向下要求 $y'' < 0$：$\frac{-4x}{(1 + x^2)^2} < 0 \implies x > 0$

$$\boxed{(0,\; +\infty)}$$

**知识点：** FTC + 二阶导数判断凹凸性。

</details>

---

### 题目 3（核心题）

**题目：**

**(a)** 设 $G(x) = \int_a^{g(x)} f(t)\,dt$，证明 $G'(x) = f(g(x))g'(x)$。

**(b)** 求 $\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt$ 的公式。

<details>
<summary>参考答案</summary>

**证明：**

**(a)** 设 $F(x) = \int_a^x f(t)\,dt$，则 $F'(x) = f(x)$（FTC）。

$G(x) = F(g(x))$，由链式法则：$G'(x) = F'(g(x)) \cdot g'(x) = f(g(x))g'(x)$。$\blacksquare$

**(b)** $\int_{u(x)}^{v(x)} f(t)\,dt = \int_a^{v(x)} f(t)\,dt - \int_a^{u(x)} f(t)\,dt$

$$\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt = f(v(x))v'(x) - f(u(x))u'(x)$$

$$\boxed{\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt = f(v(x))v'(x) - f(u(x))u'(x)}$$

**知识点：** FTC + 链式法则是变上限积分求导的核心工具。

</details>

---

### 题目 4（核心题）

**题目：** 求下列函数的导数。

**(a)** $g(x) = \int_0^x e^{-t^2}\,dt$

**(c)** $g(x) = \int_0^{3x} \frac{1}{\sqrt{4 - t^4}}\,dt$

**(d)** $g(x) = \int_4^{2x^2} \frac{1}{2t - 2}\,dt$

**(f)** $g(x) = \int_{3x}^{e^{3x}} \ln t\,dt$

**(i)** $g(x) = \int_{-x}^x \sin t\,dt$

**(j)** $g(x) = \int_{u(x^2)}^{v(x^3)} f(t)\,dt$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $g'(x) = \boxed{e^{-x^2}}$（直接 FTC）

**(c)** $g'(x) = \frac{1}{\sqrt{4 - (3x)^4}} \cdot 3 = \boxed{\frac{3}{\sqrt{4 - 81x^4}}}$

**(d)** $g'(x) = \frac{1}{2(2x^2) - 2} \cdot 4x = \frac{4x}{4x^2 - 4} = \boxed{\frac{x}{x^2 - 1}}$

**(f)** $g'(x) = \ln(e^{3x}) \cdot 3e^{3x} - \ln(3x) \cdot 3 = 3xe^{3x} - 3\ln(3x)$

$$\boxed{3xe^{3x} - 3\ln(3x)}$$

**(i)** $g'(x) = \sin(x) \cdot 1 - \sin(-x) \cdot (-1) = \sin x + \sin(-x) = \sin x - \sin x = 0$

实际上 $g(x) = \int_{-x}^x \sin t\,dt = 0$（$\sin t$ 是奇函数），所以 $g'(x) = 0$。$\boxed{0}$

**(j)** $g'(x) = f(v(x^3)) \cdot v'(x^3) \cdot 3x^2 - f(u(x^2)) \cdot u'(x^2) \cdot 2x$

$$\boxed{3x^2 f(v(x^3)) v'(x^3) - 2x f(u(x^2)) u'(x^2)}$$

**知识点：** 变限积分求导公式的综合应用。

</details>

---

### 题目 5

**题目：** 应用两次 FTC 计算 $\frac{d^2}{dx^2}\left[\int_0^{\sqrt{x}} \int_0^{1+u^4} (\sinh t + t)\,dt\,du\right]$。

<details>
<summary>参考答案</summary>

**解：**

设 $H(x) = \int_0^{\sqrt{x}} \int_0^{1+u^4} (\sinh t + t)\,dt\,du$。

设 $F(u) = \int_0^{1+u^4} (\sinh t + t)\,dt$，则 $H(x) = \int_0^{\sqrt{x}} F(u)\,du$。

**第一次求导：**
$$H'(x) = F(\sqrt{x}) \cdot \frac{1}{2\sqrt{x}} = \frac{1}{2\sqrt{x}} \int_0^{1+x^2} (\sinh t + t)\,dt$$

**第二次求导：** 用乘积法则和 FTC：

$$H''(x) = -\frac{1}{4x^{3/2}} \int_0^{1+x^2} (\sinh t + t)\,dt + \frac{1}{2\sqrt{x}} \cdot (\sinh(1+x^2) + 1 + x^2) \cdot 2x$$

$$= -\frac{1}{4x^{3/2}} \int_0^{1+x^2} (\sinh t + t)\,dt + \sqrt{x}(\sinh(1+x^2) + 1 + x^2)$$

**知识点：** FTC 的多次应用，结合链式法则和乘积法则。

</details>

---

### 题目 6

**题目：** 求函数 $f$ 和数 $a$ 使得 $\int_a^x \frac{f(t)}{t^2}\,dt + 6 = 2\sqrt{x}$。

<details>
<summary>参考答案</summary>

**解：**

两边对 $x$ 求导：
$$\frac{f(x)}{x^2} = 2 \cdot \frac{1}{2\sqrt{x}} = \frac{1}{\sqrt{x}}$$

$$f(x) = \frac{x^2}{\sqrt{x}} = x^{3/2}$$

代入 $x = a$：$\int_a^a \frac{f(t)}{t^2}\,dt + 6 = 2\sqrt{a} \implies 6 = 2\sqrt{a} \implies a = 9$

$$\boxed{f(x) = x^{3/2}, \quad a = 9}$$

**知识点：** FTC 求导 + 代入特殊值确定参数。

</details>

---

### 题目 7（核心题）

**题目：** 求下列积分。

**(a)** $\int \frac{x^3}{(x^2 + 3)^3}\,dx$

**(b)** $\int \frac{\ln x}{x(1 + (\ln x)^2)^2}\,dx$

**(c)** $\int \frac{1}{x\sqrt{\ln(x^2) + 1}}\,dx$

**(d)** $\int \frac{e^x}{\sqrt{1 - e^{2x}}}\,dx$

**(e)** $\int \frac{\sin^3 x}{\sqrt{\cos x}}\,dx$

**(f)** $\int \frac{\sqrt{x^2 + 1}}{x^2}\,dx$

**(g)** $\int \frac{\sin^{-1}(x)}{\sqrt{1 - x^2}}\,dx$

**(h)** $\int \frac{\tan^{-1}(x)}{1 + x^2}\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 令 $u = x^2 + 3$，$du = 2x\,dx$，$x^2 = u - 3$：

$$\int \frac{x^2 \cdot x}{(x^2 + 3)^3}\,dx = \frac{1}{2}\int \frac{u - 3}{u^3}\,du = \frac{1}{2}\int (u^{-2} - 3u^{-3})\,du = \frac{1}{2}\left(-u^{-1} + \frac{3}{2}u^{-2}\right) + C$$

$$= \boxed{-\frac{1}{2(x^2 + 3)} + \frac{3}{4(x^2 + 3)^2} + C}$$

**(b)** 令 $u = \ln x$，$du = \frac{dx}{x}$：

$$\int \frac{u}{(1 + u^2)^2}\,du$$

再令 $v = 1 + u^2$，$dv = 2u\,du$：

$$\frac{1}{2}\int v^{-2}\,dv = -\frac{1}{2v} + C = \boxed{-\frac{1}{2(1 + (\ln x)^2)} + C}$$

**(c)** $\ln(x^2) = 2\ln|x|$，令 $u = 2\ln|x| + 1$，$du = \frac{2}{x}\,dx$：

$$\int \frac{1}{x\sqrt{u}}\,dx = \frac{1}{2}\int u^{-1/2}\,du = \sqrt{u} + C = \boxed{\sqrt{2\ln|x| + 1} + C}$$

**(d)** 令 $u = e^x$，$du = e^x\,dx$：

$$\int \frac{du}{\sqrt{1 - u^2}} = \sin^{-1}(u) + C = \boxed{\sin^{-1}(e^x) + C}$$

**(e)** $\sin^3 x = \sin x(1 - \cos^2 x)$，令 $u = \cos x$，$du = -\sin x\,dx$：

$$-\int \frac{1 - u^2}{\sqrt{u}}\,du = -\int (u^{-1/2} - u^{3/2})\,du = -2u^{1/2} + \frac{2}{5}u^{5/2} + C$$

$$= \boxed{-2\sqrt{\cos x} + \frac{2}{5}\cos^{5/2} x + C}$$

**(f)** 令 $x = \tan\theta$，$dx = \sec^2\theta\,d\theta$，$\sqrt{x^2 + 1} = \sec\theta$：

$$\int \frac{\sec\theta}{\tan^2\theta} \sec^2\theta\,d\theta = \int \frac{\sec^3\theta}{\tan^2\theta}\,d\theta$$

此积分较复杂，也可用换元 $u = \sqrt{x^2 + 1}$，$u^2 = x^2 + 1$，$u\,du = x\,dx$：

$$\int \frac{u}{x^2} \cdot \frac{u\,du}{x} = \int \frac{u^2}{x^3}\,du = \int \frac{u^2}{(u^2 - 1)^{3/2}}\,du$$

最终结果：$\boxed{-\frac{\sqrt{x^2 + 1}}{x} + \ln|x + \sqrt{x^2 + 1}| + C}$

**(g)** 令 $u = \sin^{-1}(x)$，$du = \frac{dx}{\sqrt{1 - x^2}}$：

$$\int u\,du = \frac{u^2}{2} + C = \boxed{\frac{(\sin^{-1} x)^2}{2} + C}$$

**(h)** 令 $u = \tan^{-1}(x)$，$du = \frac{dx}{1 + x^2}$：

$$\int u\,du = \frac{u^2}{2} + C = \boxed{\frac{(\tan^{-1} x)^2}{2} + C}$$

**知识点：** 换元积分法是关键技巧，需识别合适的替换变量。

</details>

---

### 题目 9

**题目：** 求由 $(x - 2)^2 - 2y = -2$，$y = x + 2$，$x = -2$，$x = 6$ 围成的区域面积。

<details>
<summary>参考答案</summary>

**解：**

$(x - 2)^2 - 2y = -2 \implies y = \frac{(x-2)^2 + 2}{2} = \frac{x^2 - 4x + 6}{2}$

比较两曲线在 $[-2, 6]$ 上的大小：
$$x + 2 - \frac{x^2 - 4x + 6}{2} = \frac{2x + 4 - x^2 + 4x - 6}{2} = \frac{-x^2 + 6x - 2}{2}$$

$-x^2 + 6x - 2 = 0 \implies x = 3 \pm \sqrt{7}$

$3 - \sqrt{7} \approx 0.35$，$3 + \sqrt{7} \approx 5.65$

在 $[-2, 3 - \sqrt{7}]$ 和 $[3 + \sqrt{7}, 6]$ 上，抛物线在上方。

在 $[3 - \sqrt{7}, 3 + \sqrt{7}]$ 上，直线在上方。

面积需要分段积分（计算略）。

**知识点：** 求面积需先确定上下曲线关系，分段积分。

</details>

---

### 题目 11

**题目：** 求由 $y^2 = 2x$，$3y = -2x + 10$，$y = 4$ 围成的区域面积。

<details>
<summary>参考答案</summary>

**解：**

将曲线表示为 $x$ 关于 $y$ 的函数：
- $y^2 = 2x \implies x = \frac{y^2}{2}$
- $3y = -2x + 10 \implies x = \frac{10 - 3y}{2} = 5 - \frac{3y}{2}$

求交点：$\frac{y^2}{2} = 5 - \frac{3y}{2} \implies y^2 + 3y - 10 = 0 \implies (y + 5)(y - 2) = 0$

$y = 2$（$y = -5$ 不在考虑范围内）。

$y = 4$ 与 $x = \frac{y^2}{2}$ 交于 $x = 8$，与 $x = 5 - \frac{3y}{2}$ 交于 $x = -1$。

区域在 $y \in [2, 4]$ 上，右侧为 $x = \frac{y^2}{2}$，左侧为 $x = 5 - \frac{3y}{2}$：

$$A = \int_2^4 \left(\frac{y^2}{2} - 5 + \frac{3y}{2}\right)\,dy = \left[\frac{y^3}{6} - 5y + \frac{3y^2}{4}\right]_2^4$$

$$= \left(\frac{64}{6} - 20 + 12\right) - \left(\frac{8}{6} - 10 + 3\right) = \left(\frac{32}{3} - 8\right) - \left(\frac{4}{3} - 7\right) = \frac{28}{3} - \left(-\frac{17}{3}\right)$$

等等，让我重新计算：

$= \left(\frac{32}{3} - 8\right) - \left(\frac{4}{3} - 7\right) = \frac{32}{3} - 8 - \frac{4}{3} + 7 = \frac{28}{3} - 1 = \frac{25}{3}$

$$\boxed{A = \frac{25}{3}}$$

**知识点：** 当曲线更适合表示为 $x = g(y)$ 时，对 $y$ 积分更方便。

</details>

---

### 题目 13（核心题）

**题目：** 设区域 $R$ 由 $y = \sqrt{x}$ 和 $y = x$ 围成。求旋转体体积。

**(a)** 绕 $x$ 轴旋转

**(b)** 绕 $y = \frac{3}{2}$ 旋转

<details>
<summary>参考答案</summary>

**解：**

交点：$\sqrt{x} = x \implies x = 0$ 或 $x = 1$。在 $[0, 1]$ 上 $\sqrt{x} \geq x$。

**(a)** 绕 $x$ 轴旋转（垫圈法）：

$$V = \pi\int_0^1 [(\sqrt{x})^2 - x^2]\,dx = \pi\int_0^1 (x - x^2)\,dx = \pi\left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \pi\left(\frac{1}{2} - \frac{1}{3}\right) = \boxed{\frac{\pi}{6}}$$

**(b)** 绕 $y = \frac{3}{2}$ 旋转（垫圈法）：

外半径 $R(x) = \frac{3}{2} - x$（从旋转轴到 $y = x$），内半径 $r(x) = \frac{3}{2} - \sqrt{x}$（到 $y = \sqrt{x}$）。

$$V = \pi\int_0^1 \left[\left(\frac{3}{2} - x\right)^2 - \left(\frac{3}{2} - \sqrt{x}\right)^2\right]\,dx$$

$$= \pi\int_0^1 \left[\frac{9}{4} - 3x + x^2 - \frac{9}{4} + 3\sqrt{x} - x\right]\,dx = \pi\int_0^1 (x^2 - 4x + 3\sqrt{x})\,dx$$

$$= \pi\left[\frac{x^3}{3} - 2x^2 + 2x^{3/2}\right]_0^1 = \pi\left(\frac{1}{3} - 2 + 2\right) = \boxed{\frac{\pi}{3}}$$

**知识点：** 垫圈法（Washer Method）——旋转体体积 $V = \pi\int (R^2 - r^2)\,dx$。

</details>

---

## 📝 本次知识点总结

1. **微积分基本定理**：连接微分与积分的桥梁，$g'(x) = f(x)$。
2. **变限积分求导**：FTC + 链式法则，注意上下限都是函数时的处理。
3. **换元积分**：识别合适的替换变量是积分计算的关键。
4. **面积计算**：确定上下曲线，选择对 $x$ 或 $y$ 积分。
5. **旋转体体积**：垫圈法和圆盘法是基本工具。
