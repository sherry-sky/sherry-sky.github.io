> **📎 源文件：** `旧资料/03 Homeworks/原题/HW6-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw6.pdf`

---

# Homework 6 - 微分方程、面积体积与积分恒等式

## 📌 涉及知识点
- 可分离变量的微分方程
- 曲线围成的面积与旋转体体积
- 积分恒等式的证明与应用
- 换元法计算特殊积分

---

### 题目 1（20 分）
**题目：** 求所有可微函数 $f: (0, +\infty) \to (0, +\infty)$，满足 $f(e/3) = 1$ 且

$$\left[x + x\ln^2(3x)\right] f^2(x) f'(x) = f^3(x)$$

<details>
<summary>参考答案</summary>

**解：**

因为 $f(x) > 0$，两边除以 $f^2(x)$：

$$\frac{f'(x)}{f(x)} = x + x\ln^2(3x)$$

两边积分：

$$\ln f(x) = \int \left[x + x\ln^2(3x)\right] dx$$

**计算积分：**

$$\int x\,dx = \frac{x^2}{2}$$

对 $\int x\ln^2(3x)\,dx$，令 $u = \ln(3x)$，$x = \frac{e^u}{3}$，$dx = \frac{e^u}{3}du$：

$$\int x\ln^2(3x)\,dx = \int \frac{e^{2u}}{9} u^2\,du = \frac{1}{9}\int u^2 e^{2u}\,du$$

用分部积分（两次）：

$$\int u^2 e^{2u}\,du = \frac{u^2 e^{2u}}{2} - \int u e^{2u}\,du = \frac{u^2 e^{2u}}{2} - \frac{u e^{2u}}{2} + \frac{e^{2u}}{4}$$

$$= \frac{e^{2u}}{4}(2u^2 - 2u + 1)$$

回代 $u = \ln(3x)$，$e^{2u} = 9x^2$：

$$\int x\ln^2(3x)\,dx = \frac{9x^2}{36}(2\ln^2(3x) - 2\ln(3x) + 1) = \frac{x^2}{4}(2\ln^2(3x) - 2\ln(3x) + 1)$$

因此：

$$\ln f(x) = \frac{x^2}{2} + \frac{x^2}{4}(2\ln^2(3x) - 2\ln(3x) + 1) + C$$

$$= \frac{x^2}{4}\left[2 + 2\ln^2(3x) - 2\ln(3x) + 1\right] + C = \frac{x^2}{4}\left[2\ln^2(3x) - 2\ln(3x) + 3\right] + C$$

**利用初始条件 $f(e/3) = 1$：**

$\ln(3 \cdot e/3) = \ln e = 1$，$x^2 = e^2/9$

$$0 = \frac{e^2}{36}[2 - 2 + 3] + C = \frac{3e^2}{36} + C = \frac{e^2}{12} + C \implies C = -\frac{e^2}{12}$$

$$\boxed{f(x) = \exp\left(\frac{x^2}{4}\left[2\ln^2(3x) - 2\ln(3x) + 3\right] - \frac{e^2}{12}\right)}$$

**知识点：** 可分离变量微分方程、分部积分

</details>

---

### 题目 2（20 分）
**题目：** 比较以下面积是否相等，并给出计算证明。（注：原题含图形，此处给出方法框架。）

<details>
<summary>参考答案</summary>

**解：**

此题需要根据图形确定曲线，分别计算各区域面积，通过定积分比较大小。

**方法：** 对每个区域 $A_i = \int_a^b |f(x) - g(x)|\,dx$，比较各积分值。

（具体计算取决于图中所示曲线，需参考原图。）

**知识点：** 定积分的几何意义、面积比较

</details>

---

### 题目 3（35 分）
**题目：**
(a)（15 分）求 $f(x) = \dfrac{x}{10}$ 与 $g(x) = \dfrac{x}{\sqrt{x^2+36}}$ 围成区域的面积。
(b)（20 分）求 (a) 中区域绕 $x$ 轴旋转所得旋转体的体积。

<details>
<summary>参考答案</summary>

**解：**

**(a) 面积**

求交点：$\dfrac{x}{10} = \dfrac{x}{\sqrt{x^2+36}}$

$x = 0$ 或 $\sqrt{x^2+36} = 10 \implies x^2 = 64 \implies x = 8$（取 $x \geq 0$）

在 $(0, 8)$ 上 $g(x) > f(x)$（因为 $\sqrt{x^2+36} < 10$ 当 $x < 8$）。

$$A = \int_0^8 \left(\frac{x}{\sqrt{x^2+36}} - \frac{x}{10}\right) dx$$

$$= \left[\sqrt{x^2+36} - \frac{x^2}{20}\right]_0^8 = (\sqrt{100} - \frac{64}{20}) - (\sqrt{36} - 0) = (10 - 3.2) - 6 = 0.8$$

$$\boxed{A = \dfrac{4}{5}}$$

**(b) 体积（垫圈法）**

$$V = \pi\int_0^8 \left[g(x)^2 - f(x)^2\right] dx = \pi\int_0^8 \left(\frac{x^2}{x^2+36} - \frac{x^2}{100}\right) dx$$

$$\int_0^8 \frac{x^2}{x^2+36}\,dx = \int_0^8 \left(1 - \frac{36}{x^2+36}\right) dx = \left[x - 6\arctan\frac{x}{6}\right]_0^8 = 8 - 6\arctan\frac{4}{3}$$

$$\int_0^8 \frac{x^2}{100}\,dx = \frac{x^3}{300}\bigg|_0^8 = \frac{512}{300} = \frac{128}{75}$$

$$\boxed{V = \pi\left(8 - 6\arctan\frac{4}{3} - \frac{128}{75}\right) = \pi\left(\frac{472}{75} - 6\arctan\frac{4}{3}\right)}$$

**知识点：** 面积计算、垫圈法求旋转体体积

</details>

---

### 题目 4（25 分）
**题目：**
(a) 设 $f: [0,1] \to \mathbb{R}$ 为连续函数，证明恒等式：$\displaystyle\int_0^\pi x f(\sin x)\,dx = \frac{\pi}{2}\int_0^\pi f(\sin x)\,dx$

(b) 利用 (a) 计算 $\displaystyle\int_0^\pi \frac{x\sin x}{1+\cos^2 x}\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a) 证明**

令 $u = \pi - x$，$du = -dx$：

$$I = \int_0^\pi x f(\sin x)\,dx = \int_\pi^0 (\pi - u) f(\sin(\pi - u))(-du) = \int_0^\pi (\pi - u) f(\sin u)\,du$$

$$= \pi\int_0^\pi f(\sin u)\,du - \int_0^\pi u f(\sin u)\,du = \pi\int_0^\pi f(\sin x)\,dx - I$$

$$2I = \pi\int_0^\pi f(\sin x)\,dx \implies I = \frac{\pi}{2}\int_0^\pi f(\sin x)\,dx \quad \blacksquare$$

**(b) 计算**

取 $f(\sin x) = \dfrac{\sin x}{1+\cos^2 x}$（注意 $\cos^2 x = 1 - \sin^2 x$，所以 $f(t) = \dfrac{t}{2-t^2}$）。

由 (a)：

$$\int_0^\pi \frac{x\sin x}{1+\cos^2 x}\,dx = \frac{\pi}{2}\int_0^\pi \frac{\sin x}{1+\cos^2 x}\,dx$$

令 $u = \cos x$，$du = -\sin x\,dx$：

$$= \frac{\pi}{2}\int_1^{-1} \frac{-du}{1+u^2} = \frac{\pi}{2}\int_{-1}^1 \frac{du}{1+u^2} = \frac{\pi}{2}[\arctan u]_{-1}^1 = \frac{\pi}{2}\left(\frac{\pi}{4} - \left(-\frac{\pi}{4}\right)\right)$$

$$\boxed{\int_0^\pi \frac{x\sin x}{1+\cos^2 x}\,dx = \frac{\pi^2}{4}}$$

**知识点：** 积分恒等式、换元法

</details>

---

## 📝 本次知识点总结

1. **微分方程**：分离变量后积分，注意利用初始条件确定常数
2. **面积与体积**：求交点确定积分区间，垫圈法 $V = \pi\int(R^2 - r^2)\,dx$
3. **积分恒等式**：利用 $u = \pi - x$ 换元，$\sin(\pi - x) = \sin x$ 的对称性
4. **特殊积分**：结合恒等式与换元法简化计算
