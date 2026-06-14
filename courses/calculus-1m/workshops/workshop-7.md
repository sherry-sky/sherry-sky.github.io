> **📎 源文件：** `旧资料/02 Workshop/Workshop 7.jpg`

---

# Workshop 7 - 积分应用

## 📌 知识点梳理
- 两曲线之间的面积
- 旋转体体积（圆盘法与壳法）
- 弧长公式
- 积分在物理中的应用（功、质心）
- 微分方程的分离变量法

---

## 第一部分：两曲线之间的面积

### 题目 1
**题目：** 求 $x \in (0, 1)$ 上 $f_1(x) = 7x^2 - 5$ 与 $f_2(x) = 11$ 之间的面积。

<details>
<summary>参考答案</summary>

**解：**

在 $(0, 1)$ 上，$f_1(x) = 7x^2 - 5 \leq 7 - 5 = 2 < 11 = f_2(x)$，所以 $f_2$ 在上方。

$$A = \int_0^1 [f_2(x) - f_1(x)]\, dx = \int_0^1 [11 - (7x^2 - 5)]\, dx = \int_0^1 (16 - 7x^2)\, dx$$

$$= \left[16x - \frac{7x^3}{3}\right]_0^1 = 16 - \frac{7}{3} = \frac{48 - 7}{3} = \frac{41}{3}$$

$$\boxed{A = \frac{41}{3}}$$

**知识点：** 面积公式 $A = \int_a^b [f_{\text{上}}(x) - f_{\text{下}}(x)]\, dx$。

</details>

---

### 题目 2
**题目：** 求 $x \in \left(\dfrac{\pi}{3}, \dfrac{\pi}{2}\right)$ 上 $f_1(x) = 4\sin 2x$ 与 $f_2(x) = \dfrac{1}{2}$ 之间的面积。

<details>
<summary>参考答案</summary>

**解：**

先找交点：$4\sin 2x = \dfrac{1}{2} \implies \sin 2x = \dfrac{1}{8}$

在 $\left(\dfrac{\pi}{3}, \dfrac{\pi}{2}\right)$ 内，$2x \in \left(\dfrac{2\pi}{3}, \pi\right)$。

$\sin 2x = \dfrac{1}{8}$ 在此区间的解为 $2x = \pi - \arcsin\dfrac{1}{8}$，即 $x_0 = \dfrac{\pi}{2} - \dfrac{1}{2}\arcsin\dfrac{1}{8}$。

- 在 $\left(\dfrac{\pi}{3}, x_0\right)$ 上：$\sin 2x > \dfrac{1}{8}$，即 $f_1 > f_2$
- 在 $\left(x_0, \dfrac{\pi}{2}\right)$ 上：$\sin 2x < \dfrac{1}{8}$，即 $f_1 < f_2$

$$A = \int_{\pi/3}^{x_0} \left(4\sin 2x - \frac{1}{2}\right)dx + \int_{x_0}^{\pi/2} \left(\frac{1}{2} - 4\sin 2x\right)dx$$

$$\int \left(4\sin 2x - \frac{1}{2}\right)dx = -2\cos 2x - \frac{x}{2}$$

$$A = \left[-2\cos 2x - \frac{x}{2}\right]_{\pi/3}^{x_0} + \left[2\cos 2x + \frac{x}{2}\right]_{x_0}^{\pi/2}$$

计算各项：
- $\cos 2x_0 = \cos\left(\pi - \arcsin\dfrac{1}{8}\right) = -\cos\left(\arcsin\dfrac{1}{8}\right) = -\sqrt{1 - \dfrac{1}{64}} = -\dfrac{3\sqrt{7}}{8}$
- $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$
- $\cos\pi = -1$

$$A = \left(\frac{3\sqrt{7}}{4} - \frac{x_0}{2}\right) - \left(1 - \frac{\pi}{6}\right) + \left(-2 + \frac{\pi}{4}\right) - \left(\frac{3\sqrt{7}}{4} + \frac{x_0}{2}\right)$$

$$= -x_0 - 3 + \frac{5\pi}{12}$$

其中 $x_0 = \dfrac{\pi}{2} - \dfrac{1}{2}\arcsin\dfrac{1}{8}$：

$$A = -\frac{\pi}{2} + \frac{1}{2}\arcsin\frac{1}{8} - 3 + \frac{5\pi}{12} = -\frac{\pi}{12} + \frac{1}{2}\arcsin\frac{1}{8} - 3 + \frac{5\pi}{12}$$

Wait, let me recalculate more carefully.

$$A = \left[-2\cos 2x - \frac{x}{2}\right]_{\pi/3}^{x_0} + \left[2\cos 2x + \frac{x}{2}\right]_{x_0}^{\pi/2}$$

第一项：$\left(-2\cos 2x_0 - \frac{x_0}{2}\right) - \left(-2\cos\frac{2\pi}{3} - \frac{\pi}{6}\right) = \frac{3\sqrt{7}}{4} - \frac{x_0}{2} - 1 + \frac{\pi}{6}$

第二项：$\left(2\cos\pi + \frac{\pi}{4}\right) - \left(2\cos 2x_0 + \frac{x_0}{2}\right) = -2 + \frac{\pi}{4} + \frac{3\sqrt{7}}{4} - \frac{x_0}{2}$

$$A = \frac{3\sqrt{7}}{2} - x_0 - 3 + \frac{5\pi}{12}$$

代入 $x_0 = \dfrac{\pi}{2} - \dfrac{1}{2}\arcsin\dfrac{1}{8}$：

$$A = \frac{3\sqrt{7}}{2} - \frac{\pi}{2} + \frac{1}{2}\arcsin\frac{1}{8} - 3 + \frac{5\pi}{12} = \frac{3\sqrt{7}}{2} - \frac{\pi}{12} + \frac{1}{2}\arcsin\frac{1}{8} - 3$$

$$\boxed{A = \frac{3\sqrt{7}}{2} - 3 - \frac{\pi}{12} + \frac{1}{2}\arcsin\frac{1}{8}}$$

**知识点：** 当两曲线在积分区间内有交点时，需分段计算面积。

</details>

---

### 题目 3
**题目：** 求 $x \in (-4, 2)$ 上 $f_1(x) = e^{3x-8}$ 与 $f_2(x) = \ln(x+9) + 16$ 之间的面积。

<details>
<summary>参考答案</summary>

**解：**

在 $(-4, 2)$ 上：
- $f_1(x) = e^{3x-8}$：当 $x = -4$ 时 $f_1 = e^{-20} \approx 0$；当 $x = 2$ 时 $f_1 = e^{-2} \approx 0.135$
- $f_2(x) = \ln(x+9) + 16$：当 $x = -4$ 时 $f_2 = \ln 5 + 16 \approx 17.6$；当 $x = 2$ 时 $f_2 = \ln 11 + 16 \approx 18.4$

显然 $f_2(x) > f_1(x)$ 在整个区间上成立。

$$A = \int_{-4}^2 [\ln(x+9) + 16 - e^{3x-8}]\, dx$$

分项计算：

**第一项：** $\int_{-4}^2 \ln(x+9)\, dx$

令 $u = x + 9$：

$$\int_5^{11} \ln u\, du = [u\ln u - u]_5^{11} = (11\ln 11 - 11) - (5\ln 5 - 5) = 11\ln 11 - 5\ln 5 - 6$$

**第二项：** $\int_{-4}^2 16\, dx = 16 \times 6 = 96$

**第三项：** $\int_{-4}^2 e^{3x-8}\, dx = \left[\frac{e^{3x-8}}{3}\right]_{-4}^2 = \frac{e^{-2} - e^{-20}}{3}$

$$A = 11\ln 11 - 5\ln 5 - 6 + 96 - \frac{e^{-2} - e^{-20}}{3}$$

$$\boxed{A = 11\ln 11 - 5\ln 5 + 90 - \frac{e^{-2} - e^{-20}}{3}}$$

**知识点：** $\int \ln u\, du = u\ln u - u + C$（分部积分法）。

</details>

---

## 第二部分：旋转体体积

### 题目 4
**题目：** 求由 $y = x^2$、$y = 0$、$x = 2$ 围成的区域绕 $x$ 轴旋转所得旋转体的体积。

<details>
<summary>参考答案</summary>

**解：** 使用圆盘法（Disk Method）：

$$V = \pi\int_0^2 [f(x)]^2\, dx = \pi\int_0^2 (x^2)^2\, dx = \pi\int_0^2 x^4\, dx = \pi\left[\frac{x^5}{5}\right]_0^2 = \frac{32\pi}{5}$$

$$\boxed{V = \frac{32\pi}{5}}$$

**知识点：** 圆盘法 $V = \pi\int_a^b [f(x)]^2\, dx$。

</details>

---

### 题目 5
**题目：** 求由 $y = \sqrt{x}$、$y = 0$、$x = 4$ 围成的区域绕 $y$ 轴旋转所得旋转体的体积。

<details>
<summary>参考答案</summary>

**解：** 使用壳法（Shell Method）：

$$V = 2\pi\int_0^4 x \cdot f(x)\, dx = 2\pi\int_0^4 x\sqrt{x}\, dx = 2\pi\int_0^4 x^{3/2}\, dx$$

$$= 2\pi\left[\frac{2}{5}x^{5/2}\right]_0^4 = 2\pi \cdot \frac{2}{5} \cdot 32 = \frac{128\pi}{5}$$

$$\boxed{V = \frac{128\pi}{5}}$$

**知识点：** 壳法 $V = 2\pi\int_a^b x \cdot f(x)\, dx$（绕 $y$ 轴旋转）。

</details>

---

## 第三部分：弧长

### 题目 6
**题目：** 求曲线 $y = \dfrac{2}{3}x^{3/2}$ 从 $x = 0$ 到 $x = 3$ 的弧长。

<details>
<summary>参考答案</summary>

**解：**

$$y' = \frac{2}{3} \cdot \frac{3}{2}x^{1/2} = \sqrt{x}$$

弧长公式：

$$L = \int_0^3 \sqrt{1 + (y')^2}\, dx = \int_0^3 \sqrt{1 + x}\, dx$$

令 $u = 1 + x$：

$$L = \int_1^4 \sqrt{u}\, du = \left[\frac{2}{3}u^{3/2}\right]_1^4 = \frac{2}{3}(8 - 1) = \frac{14}{3}$$

$$\boxed{L = \frac{14}{3}}$$

**知识点：** 弧长公式 $L = \int_a^b \sqrt{1 + [f'(x)]^2}\, dx$。

</details>

---

### 题目 7
**题目：** 求曲线 $y = \ln(\cos x)$ 从 $x = 0$ 到 $x = \dfrac{\pi}{4}$ 的弧长。

<details>
<summary>参考答案</summary>

**解：**

$$y' = \frac{-\sin x}{\cos x} = -\tan x$$

$$1 + (y')^2 = 1 + \tan^2 x = \sec^2 x$$

$$L = \int_0^{\pi/4} \sqrt{\sec^2 x}\, dx = \int_0^{\pi/4} \sec x\, dx$$

$$= \Big[\ln|\sec x + \tan x|\Big]_0^{\pi/4} = \ln(\sqrt{2} + 1) - \ln(1 + 0) = \ln(\sqrt{2} + 1)$$

$$\boxed{L = \ln(\sqrt{2} + 1)}$$

**知识点：** $\int \sec x\, dx = \ln|\sec x + \tan x| + C$；三角恒等式 $1 + \tan^2 x = \sec^2 x$。

</details>

---

## 第四部分：微分方程应用

### 题目 8
**题目：** 求所有函数 $f: \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right] \to \mathbb{R}$ 满足 $f'(x) = f(x)\tan x$。

<details>
<summary>参考答案</summary>

**解：** 分离变量：

$$\frac{f'(x)}{f(x)} = \tan x \quad (f(x) \neq 0)$$

$$\ln|f(x)| = \int \tan x\, dx = -\ln|\cos x| + C_1$$

$$|f(x)| = \frac{e^{C_1}}{|\cos x|} \implies f(x) = \frac{C}{\cos x} = C\sec x$$

其中 $C \in \mathbb{R}$（$C = 0$ 时 $f \equiv 0$ 也是解）。

$$\boxed{f(x) = C\sec x, \quad C \in \mathbb{R}}$$

**知识点：** 分离变量法；$\int \tan x\, dx = -\ln|\cos x| + C$。

</details>

---

### 题目 9
**题目：** 求所有函数 $f: \mathbb{R} \to \mathbb{R}$ 满足 $(5 - 4x + x^4)f'(x) - 3xf(x) = 0$。

<details>
<summary>参考答案</summary>

**解：**

$$\frac{f'(x)}{f(x)} = \frac{3x}{x^4 - 4x + 5} \quad (f(x) \neq 0)$$

注意 $x^4 - 4x + 5 = (x-1)^2(x^2 + 2x + 3) + 2 > 0$ 对所有 $x$ 成立（实际上 $(x^2-1)^2 + 4(x-1)^2 + ... $ 总之恒正）。

$$\ln|f(x)| = \int \frac{3x}{x^4 - 4x + 5}\, dx$$

此积分无初等闭式，故：

$$\boxed{f(x) = C\exp\left(\int_0^x \frac{3t}{t^4 - 4t + 5}\, dt\right), \quad C \in \mathbb{R}}$$

**知识点：** 一阶线性齐次微分方程 $f' = g(x)f$ 的通解公式。

</details>

---

## 📝 本次知识点总结

本次 Workshop 涵盖了积分应用的主要内容：

1. **曲线间面积**：$A = \int_a^b |f_1 - f_2|\, dx$，需找交点分段。
2. **旋转体体积**：
   - 圆盘法：$V = \pi\int [f(x)]^2\, dx$（绕 $x$ 轴）
   - 壳法：$V = 2\pi\int x f(x)\, dx$（绕 $y$ 轴）
3. **弧长**：$L = \int_a^b \sqrt{1 + [f'(x)]^2}\, dx$
4. **微分方程**：分离变量法 $f' = g(x)f \implies f = Ce^{\int g}$
5. **常用积分**：$\int \ln u\, du = u\ln u - u$，$\int \sec x\, dx = \ln|\sec x + \tan x|$
