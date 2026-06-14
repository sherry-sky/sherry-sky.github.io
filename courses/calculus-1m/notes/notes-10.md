> **📎 源文件：** `旧资料/09 Lecture/Week 10-Class 19-A-IntegrationByParts.pdf`, `旧资料/09 Lecture/Week 10-Class 19-B-Arc-Length.pdf`, `旧资料/09 Lecture/Week 10-Class 20-Arc-Length-ReviolutionSurfaces.pdf`

---

# Week 10: 积分技巧（二）与弧长

## 📌 知识点概述

本周继续学习积分的高级技巧，包括：分部积分法（Integration by Parts）、广义积分（Improper Integrals）的定义与收敛性判别、比较判别法，以及弧长公式的推导与应用。

## 📖 核心内容

### 定义

**分部积分法：** 由乘法法则 $(fg)' = f'g + fg'$ 两边积分得到：
$$\int u\,dv = uv - \int v\,du$$

**广义积分（Type 1：无穷区间）：**
$$\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^t f(x)\,dx$$
$$\int_{-\infty}^b f(x)\,dx = \lim_{t \to -\infty} \int_t^b f(x)\,dx$$
$$\int_{-\infty}^{+\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{+\infty} f(x)\,dx$$
（两部分都收敛时，整体才收敛。）

**广义积分（Type 2：不连续被积函数）：** 若 $f$ 在 $x = b$ 处有垂直渐近线：
$$\int_a^b f(x)\,dx = \lim_{t \to b^-} \int_a^t f(x)\,dx$$
若 $f$ 在 $x = a$ 处有垂直渐近线：
$$\int_a^b f(x)\,dx = \lim_{t \to a^+} \int_t^b f(x)\,dx$$

**弧长（Arc Length）：** 若 $f'$ 在 $[a, b]$ 上连续，曲线 $y = f(x)$ 的弧长为：
$$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

若曲线为 $x = g(y)$，$c \leq y \leq d$：
$$L = \int_c^d \sqrt{1 + [g'(y)]^2}\,dy$$

### 定理

**$p$-积分判别法：**
$$\int_1^{+\infty} \frac{1}{x^p}\,dx \begin{cases} \text{收敛}, & p > 1, \text{值为 } \dfrac{1}{p-1} \\ \text{发散}, & p \leq 1 \end{cases}$$

**比较判别法：** 设 $f(x) \geq g(x) \geq 0$ 对 $x \geq a$：
1. 若 $\int_a^{+\infty} f(x)\,dx$ 收敛 $\implies$ $\int_a^{+\infty} g(x)\,dx$ 收敛
2. 若 $\int_a^{+\infty} g(x)\,dx$ 发散 $\implies$ $\int_a^{+\infty} f(x)\,dx$ 发散

**LIATE 规则**（分部积分中选择 $u$ 的优先级）：
1. **L**ogarithmic（对数函数）
2. **I**nverse trigonometric（反三角函数）
3. **A**lgebraic（代数函数）
4. **T**rigonometric（三角函数）
5. **E**xponential（指数函数）

### 重要公式

**弧长函数：** 从起点 $(a, f(a))$ 到点 $(x, f(x))$ 的弧长为：
$$s(x) = \int_a^x \sqrt{1 + [f'(t)]^2}\,dt$$
$$\frac{ds}{dx} = \sqrt{1 + [f'(x)]^2}$$

**参数曲线的弧长：** $(x(t), y(t))$，$a \leq t \leq b$：
$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

**极坐标曲线的弧长：** $r = r(t)$，$\alpha \leq t \leq \beta$：
$$L = \int_\alpha^\beta \sqrt{r^2(t) + \left(\frac{dr}{dt}\right)^2}\,dt$$

---

### 典型例题

**例 1.** 求 $\int x \sin x\,dx$。

**解.** 按 LIATE 规则，选 $u = x$，$dv = \sin x\,dx$：
- $du = dx$
- $v = -\cos x$

$$\int x \sin x\,dx = -x\cos x - \int (-\cos x)\,dx = -x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C$$

---

**例 2.** 求 $\int \arctan x\,dx$。

**解.** 选 $u = \arctan x$，$dv = dx$：
- $du = \dfrac{1}{1 + x^2}\,dx$
- $v = x$

$$\int \arctan x\,dx = x\arctan x - \int \frac{x}{1 + x^2}\,dx = x\arctan x - \frac{1}{2}\ln(1 + x^2) + C$$

---

**例 3.** 判断广义积分 $\displaystyle\int_1^{+\infty} e^{-x^2}\,dx$ 是否收敛。

**解.** 由于 $e^{-x^2}$ 没有初等反导数，使用比较判别法。

对 $x \geq 1$：$x^2 \geq x \implies e^{-x^2} \leq e^{-x}$。

已知 $\int_1^{+\infty} e^{-x}\,dx = \lim_{t \to +\infty} [-e^{-x}]_1^t = \lim_{t \to +\infty} (-e^{-t} + e^{-1}) = e^{-1}$，收敛。

由比较判别法，$\int_1^{+\infty} e^{-x^2}\,dx$ **收敛**。

---

**例 4.** 判断广义积分 $\displaystyle\int_0^1 \ln x\,dx$ 是否收敛，若收敛求其值。

**解.** $x = 0$ 是瑕点（$\lim_{x \to 0^+} \ln x = -\infty$）。

$$\int_0^1 \ln x\,dx = \lim_{t \to 0^+} \int_t^1 \ln x\,dx$$

用分部积分求反导数：$u = \ln x$，$dv = dx$，$du = \dfrac{1}{x}\,dx$，$v = x$：
$$\int \ln x\,dx = x\ln x - \int x \cdot \frac{1}{x}\,dx = x\ln x - x$$

因此：
$$\int_0^1 \ln x\,dx = \lim_{t \to 0^+} [x\ln x - x]_t^1 = \lim_{t \to 0^+} [(1 \cdot 0 - 1) - (t\ln t - t)]$$
$$= -1 - \lim_{t \to 0^+} t\ln t + \lim_{t \to 0^+} t$$

用 L'Hospital 法则：$\lim_{t \to 0^+} t\ln t = \lim_{t \to 0^+} \dfrac{\ln t}{1/t} = \lim_{t \to 0^+} \dfrac{1/t}{-1/t^2} = \lim_{t \to 0^+} (-t) = 0$

$$\int_0^1 \ln x\,dx = -1 - 0 + 0 = -1$$

积分**收敛**，值为 $-1$。

---

**例 5.** 求曲线 $y^2 = x^3$ 从 $(1, 1)$ 到 $(4, 8)$ 的弧长。

**解.** 对 $y^2 = x^3$ 隐式求导：$2y\dfrac{dy}{dx} = 3x^2 \implies \dfrac{dy}{dx} = \dfrac{3x^2}{2y}$

$$\left(\frac{dy}{dx}\right)^2 = \frac{9x^4}{4y^2} = \frac{9x^4}{4x^3} = \frac{9x}{4}$$

弧长：
$$L = \int_1^4 \sqrt{1 + \frac{9x}{4}}\,dx$$

令 $u = 1 + \dfrac{9x}{4}$，$du = \dfrac{9}{4}\,dx$。当 $x = 1$ 时 $u = \dfrac{13}{4}$，当 $x = 4$ 时 $u = 10$：
$$L = \int_{13/4}^{10} \sqrt{u} \cdot \frac{4}{9}\,du = \frac{4}{9} \cdot \frac{2}{3} u^{3/2} \bigg|_{13/4}^{10} = \frac{8}{27}\left[10^{3/2} - \left(\frac{13}{4}\right)^{3/2}\right]$$
$$= \frac{8}{27}\left[10\sqrt{10} - \frac{13\sqrt{13}}{8}\right] = \frac{8}{27} \cdot 10\sqrt{10} - \frac{8}{27} \cdot \frac{13\sqrt{13}}{8} = \frac{80\sqrt{10}}{27} - \frac{13\sqrt{13}}{27}$$
$$= \frac{80\sqrt{10} - 13\sqrt{13}}{27}$$

---

## 📝 本周知识点总结

1. **分部积分法**：$\int u\,dv = uv - \int v\,du$，用 LIATE 规则选择 $u$。
2. **循环分部积分**：如 $\int e^x \sin x\,dx$，需要两次分部积分后解方程。
3. **广义积分 Type 1**：无穷区间上的积分，通过极限判断收敛性。
4. **广义积分 Type 2**：被积函数有瑕点（垂直渐近线），通过极限判断。
5. **$p$-积分**：$\int_1^{+\infty} \dfrac{1}{x^p}\,dx$ 在 $p > 1$ 时收敛，$p \leq 1$ 时发散。
6. **比较判别法**：大收敛推小收敛，小发散推大发散。
7. **弧长公式**：$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx$，可通过换元法或三角代换求解。
8. **参数曲线与极坐标曲线的弧长**：使用对应的参数形式弧长公式。
