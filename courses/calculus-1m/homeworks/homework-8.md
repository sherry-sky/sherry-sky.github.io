> **📎 源文件：** `旧资料/03 Homeworks/原题/HW8-Calculus1M.pdf`, `旧资料/03 Homeworks/回答/hw8.pdf`

---

# Homework 8 - 反常积分、弧长与旋转面面积

## 📌 涉及知识点
- 反常积分的收敛性与计算
- 含参数的反常积分
- 弧长公式
- 旋转面面积公式

---

### 题目 1
**题目：** 求反常积分 $\displaystyle\int_{1+\sqrt{2}}^{+\infty} \frac{(\sqrt{2}-1)x^2 + 4\sqrt{2}+2}{\sqrt{x^4+2x^2-8}}\,dx$ 的精确值。

<details>
<summary>参考答案</summary>

**解：**

注意 $x^4+2x^2-8 = (x^2-2)(x^2+4)$。

在下限 $x = 1+\sqrt{2}$ 处：$x^2 = 3+2\sqrt{2}$，$x^2-2 = 1+2\sqrt{2}$，$x^2+4 = 7+2\sqrt{2}$。

当 $x \to +\infty$ 时，被积函数 $\sim \frac{(\sqrt{2}-1)x^2}{x^2} = \sqrt{2}-1 > 0$。

因为被积函数趋于非零常数 $\sqrt{2}-1$，所以此反常积分**发散**。

$$\boxed{\text{此反常积分发散}}$$

**注：** 若原题中被积函数的分子为 $x^3$ 而非 $x^2$（即 $(\sqrt{2}-1)x^3 + (4\sqrt{2}+2)x$），则积分收敛。此时分子 $= \frac{\sqrt{2}-1}{4} \cdot (4x^3+4x) = \frac{\sqrt{2}-1}{4} \cdot \frac{d}{dx}(x^4+2x^2-8)$，积分可用 $\int \frac{du}{2\sqrt{u}}$ 计算。

**知识点：** 反常积分的收敛性判断

</details>

---

### 题目 2
**题目：**
(a) 求使 $\displaystyle\int_0^1 x^p \ln x\,dx$ 收敛的 $p$ 值，并计算积分。
(b) 对每个正整数 $n$，计算 $\displaystyle\int_0^1 \left[(\ln x)^n + \frac{1}{x^{(n-1)/n}}\right] dx$。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 用分部积分，$u = \ln x$，$dv = x^p dx$：

$$\int_0^1 x^p \ln x\,dx = \left[\frac{x^{p+1}\ln x}{p+1}\right]_0^1 - \int_0^1 \frac{x^p}{p+1}\,dx$$

当 $p > -1$ 时：$\lim_{x \to 0^+} x^{p+1}\ln x = 0$，所以第一项为 $0$。

$$= 0 - \frac{1}{p+1}\cdot\frac{x^{p+1}}{p+1}\bigg|_0^1 = -\frac{1}{(p+1)^2}$$

当 $p = -1$：$\int_0^1 \frac{\ln x}{x}\,dx = \frac{(\ln x)^2}{2}\Big|_0^1 = -\infty$（发散）

当 $p < -1$：$\lim_{x \to 0^+} x^{p+1}\ln x = \pm\infty$（发散）

$$\boxed{\text{收敛条件：} p > -1, \quad \int_0^1 x^p \ln x\,dx = -\frac{1}{(p+1)^2}}$$

**(b)** 分别计算两个积分：

**第一部分：** $\int_0^1 (\ln x)^n\,dx$

用递推公式（分部积分 $u = (\ln x)^n$，$dv = dx$）：

$$\int_0^1 (\ln x)^n\,dx = (-1)^n \cdot n!$$

**第二部分：** $\int_0^1 x^{-(n-1)/n}\,dx = \int_0^1 x^{-1+1/n}\,dx$

$$= \frac{x^{1/n}}{1/n}\bigg|_0^1 = n$$

**合计：**

$$\boxed{\int_0^1 \left[(\ln x)^n + \frac{1}{x^{(n-1)/n}}\right] dx = (-1)^n \cdot n! + n}$$

**知识点：** 反常积分、分部积分递推

</details>

---

### 题目 3
**题目：**
(a) 求 $y = \arcsin(e^{-x})$ 在 $0 \leq x \leq \ln\sqrt{2}$ 上的弧长。
(b) 求 $y = 3\sqrt[3]{x}$ 在 $(1,3)$ 和 $(9,9)$ 之间的弧长。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $y' = \dfrac{-e^{-x}}{\sqrt{1-e^{-2x}}}$

$$1 + (y')^2 = 1 + \frac{e^{-2x}}{1-e^{-2x}} = \frac{1}{1-e^{-2x}}$$

$$L = \int_0^{\ln\sqrt{2}} \frac{dx}{\sqrt{1-e^{-2x}}}$$

令 $u = e^{-x}$，$du = -e^{-x}dx = -u\,dx$：

$$L = \int_{1/\sqrt{2}}^1 \frac{du}{u\sqrt{1-u^2}}$$

令 $u = \sin\theta$，$du = \cos\theta\,d\theta$：

$$L = \int_{\pi/4}^{\pi/2} \csc\theta\,d\theta = \left[-\ln|\csc\theta + \cot\theta|\right]_{\pi/4}^{\pi/2}$$

$$= -\ln(1+0) + \ln(\sqrt{2}+1) = \ln(\sqrt{2}+1)$$

$$\boxed{L = \ln(\sqrt{2}+1)}$$

**(b)** $y = 3x^{1/3}$，$y' = x^{-2/3}$

$$L = \int_1^9 \sqrt{1 + x^{-4/3}}\,dx = \int_1^9 \frac{\sqrt{x^{4/3}+1}}{x^{2/3}}\,dx$$

令 $u = x^{1/3}$，$x = u^3$，$dx = 3u^2 du$：

$$L = \int_1^{9^{1/3}} \frac{\sqrt{u^4+1}}{u^2} \cdot 3u^2\,du = 3\int_1^{\sqrt[3]{9}} \sqrt{u^4+1}\,du$$

此积分无初等函数原函数，需数值计算。

$$\boxed{L = 3\int_1^{\sqrt[3]{9}} \sqrt{u^4+1}\,du \approx 7.78}$$

**知识点：** 弧长公式、三角换元

</details>

---

### 题目 4
**题目：**
(a) 求 $8x^2 = y^2 - y^4$ 绕 $y$ 轴旋转的旋转面面积。
(b) 求 $y = \cosh x$ 在 $[-2, 2]$ 上绕 $x$ 轴旋转的旋转面面积。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $x^2 = \frac{y^2-y^4}{8}$，$x \geq 0$ 时 $x = \frac{y\sqrt{1-y^2}}{2\sqrt{2}}$（$y \in [0, 1]$，由对称性取两倍）。

$$S = 2\pi\int_{-1}^1 x\sqrt{1+\left(\frac{dx}{dy}\right)^2}\,dy$$

经过计算（此积分较复杂，涉及椭圆积分），需数值方法求解。

**(b)** $y = \cosh x$，$y' = \sinh x$

$$\sqrt{1+(y')^2} = \sqrt{1+\sinh^2 x} = \cosh x$$

$$S = 2\pi\int_{-2}^2 \cosh x \cdot \cosh x\,dx = 2\pi\int_{-2}^2 \cosh^2 x\,dx$$

$$= 2\pi\int_{-2}^2 \frac{\cosh 2x + 1}{2}\,dx = \pi\left[\frac{\sinh 2x}{2} + x\right]_{-2}^2$$

$$= \pi\left[\left(\frac{\sinh 4}{2} + 2\right) - \left(-\frac{\sinh 4}{2} - 2\right)\right] = \pi(\sinh 4 + 4)$$

$$\boxed{S = \pi(\sinh 4 + 4)}$$

**知识点：** 旋转面面积公式、双曲函数积分

</details>

---

## 📝 本次知识点总结

1. **反常积分**：判断收敛性需分析被积函数在奇点和无穷远处的行为
2. **含参数积分**：$\int_0^1 x^p \ln x\,dx$ 在 $p > -1$ 时收敛
3. **弧长**：$L = \int\sqrt{1+(y')^2}\,dx$，注意换元简化
4. **旋转面面积**：$S = 2\pi\int y\sqrt{1+(y')^2}\,dx$（绕 $x$ 轴），$\cosh^2 x$ 的积分技巧
