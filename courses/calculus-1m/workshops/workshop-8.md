> **📎 源文件：** `旧资料/02 Workshop/Workshop 8.jpg`, `旧资料/02 Workshop/Workshop 8_2.jpg`

---

# Workshop 8 - 积分进阶技巧

## 📌 知识点梳理
- 分部积分法
- 部分分式分解
- 三角换元
- 反常积分（无穷区间与瑕积分）
- 积分的综合应用

---

### 题目 1
**题目：** 计算下列积分（分部积分法）：

(a) $\int x e^x\, dx$

(b) $\int x^2 \ln x\, dx$

(c) $\int e^x \sin x\, dx$

<details>
<summary>参考答案</summary>

**(a) 解：** 令 $u = x$，$dv = e^x dx$，则 $du = dx$，$v = e^x$。

$$\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = e^x(x - 1) + C$$

**(b) 解：** 令 $u = \ln x$，$dv = x^2 dx$，则 $du = \dfrac{dx}{x}$，$v = \dfrac{x^3}{3}$。

$$\int x^2 \ln x\, dx = \frac{x^3}{3}\ln x - \int \frac{x^3}{3} \cdot \frac{1}{x}\, dx = \frac{x^3}{3}\ln x - \frac{1}{3}\int x^2\, dx = \frac{x^3}{3}\ln x - \frac{x^3}{9} + C$$

**(c) 解：** 令 $I = \int e^x \sin x\, dx$。

第一次分部积分：$u = \sin x$，$dv = e^x dx$：

$$I = e^x \sin x - \int e^x \cos x\, dx$$

第二次分部积分：$\int e^x \cos x\, dx$，令 $u = \cos x$，$dv = e^x dx$：

$$\int e^x \cos x\, dx = e^x \cos x + \int e^x \sin x\, dx = e^x \cos x + I$$

代入：

$$I = e^x \sin x - (e^x \cos x + I) = e^x \sin x - e^x \cos x - I$$

$$2I = e^x(\sin x - \cos x) \implies I = \frac{e^x(\sin x - \cos x)}{2} + C$$

$$\boxed{\int e^x \sin x\, dx = \frac{e^x(\sin x - \cos x)}{2} + C}$$

**知识点：** 分部积分公式 $\int u\, dv = uv - \int v\, du$；"循环型"积分需两次分部后解方程。

</details>

---

### 题目 2
**题目：** 用部分分式法计算 $\displaystyle\int \frac{3x + 5}{x^2 + x - 2}\, dx$。

<details>
<summary>参考答案</summary>

**解：**

分解分母：$x^2 + x - 2 = (x+2)(x-1)$。

设 $\dfrac{3x + 5}{(x+2)(x-1)} = \dfrac{A}{x+2} + \dfrac{B}{x-1}$。

$$3x + 5 = A(x-1) + B(x+2)$$

令 $x = 1$：$8 = 3B \implies B = \dfrac{8}{3}$

令 $x = -2$：$-1 = -3A \implies A = \dfrac{1}{3}$

$$\int \frac{3x+5}{x^2+x-2}\, dx = \frac{1}{3}\int \frac{dx}{x+2} + \frac{8}{3}\int \frac{dx}{x-1} = \frac{1}{3}\ln|x+2| + \frac{8}{3}\ln|x-1| + C$$

$$\boxed{\int \frac{3x+5}{x^2+x-2}\, dx = \frac{1}{3}\ln|x+2| + \frac{8}{3}\ln|x-1| + C}$$

**知识点：** 部分分式分解——将有理函数分解为简单分式之和。

</details>

---

### 题目 3
**题目：** 计算 $\displaystyle\int \frac{dx}{x^2\sqrt{x^2 - 1}}$。

<details>
<summary>参考答案</summary>

**解：** 三角换元，令 $x = \sec\theta$，$dx = \sec\theta\tan\theta\, d\theta$，$\sqrt{x^2-1} = \tan\theta$。

$$\int \frac{\sec\theta\tan\theta}{\sec^2\theta \cdot \tan\theta}\, d\theta = \int \frac{1}{\sec\theta}\, d\theta = \int \cos\theta\, d\theta = \sin\theta + C$$

由 $x = \sec\theta$，$\cos\theta = \dfrac{1}{x}$，$\sin\theta = \dfrac{\sqrt{x^2-1}}{x}$。

$$\boxed{\int \frac{dx}{x^2\sqrt{x^2-1}} = \frac{\sqrt{x^2-1}}{x} + C}$$

**知识点：** 三角换元：$\sqrt{x^2 - a^2}$ 用 $x = a\sec\theta$；$\sqrt{a^2 - x^2}$ 用 $x = a\sin\theta$；$\sqrt{x^2 + a^2}$ 用 $x = a\tan\theta$。

</details>

---

### 题目 4
**题目：** 判断下列反常积分的收敛性，若收敛则求值：

(a) $\displaystyle\int_1^{+\infty} \frac{1}{x^2}\, dx$

(b) $\displaystyle\int_0^1 \frac{1}{\sqrt{x}}\, dx$

(c) $\displaystyle\int_1^{+\infty} \frac{1}{x}\, dx$

<details>
<summary>参考答案</summary>

**(a) 解：**

$$\int_1^{+\infty} \frac{dx}{x^2} = \lim_{b \to +\infty}\left[-\frac{1}{x}\right]_1^b = \lim_{b \to +\infty}\left(-\frac{1}{b} + 1\right) = 1$$

**收敛**，值为 1。

**(b) 解：** 这是瑕积分（$x = 0$ 处被积函数趋于无穷）。

$$\int_0^1 \frac{dx}{\sqrt{x}} = \lim_{a \to 0^+}\left[2\sqrt{x}\right]_a^1 = \lim_{a \to 0^+}(2 - 2\sqrt{a}) = 2$$

**收敛**，值为 2。

**(c) 解：**

$$\int_1^{+\infty} \frac{dx}{x} = \lim_{b \to +\infty}[\ln x]_1^b = \lim_{b \to +\infty}\ln b = +\infty$$

**发散**。

**知识点：** $p$-积分 $\int_1^{+\infty} \dfrac{dx}{x^p}$ 当 $p > 1$ 时收敛，$p \leq 1$ 时发散；$\int_0^1 \dfrac{dx}{x^p}$ 当 $p < 1$ 时收敛。

</details>

---

### 题目 5
**题目：** 计算 $\displaystyle\int_0^{+\infty} e^{-x}\, dx$ 和 $\displaystyle\int_{-\infty}^{+\infty} \frac{dx}{1 + x^2}$。

<details>
<summary>参考答案</summary>

**第一个积分：**

$$\int_0^{+\infty} e^{-x}\, dx = \lim_{b \to +\infty}[-e^{-x}]_0^b = \lim_{b \to +\infty}(-e^{-b} + 1) = 1$$

**第二个积分：**

$$\int_{-\infty}^{+\infty} \frac{dx}{1+x^2} = \lim_{a \to -\infty}\lim_{b \to +\infty}[\arctan x]_a^b = \frac{\pi}{2} - \left(-\frac{\pi}{2}\right) = \pi$$

$$\boxed{\int_0^{+\infty} e^{-x}\, dx = 1, \quad \int_{-\infty}^{+\infty} \frac{dx}{1+x^2} = \pi}$$

**知识点：** 无穷区间上的反常积分通过取极限计算。

</details>

---

### 题目 6
**题目：** 用比较判别法判断 $\displaystyle\int_1^{+\infty} \frac{dx}{x^2 + e^x}$ 的收敛性。

<details>
<summary>参考答案</summary>

**解：**

对 $x \geq 1$，有 $x^2 + e^x > e^x$，所以：

$$0 < \frac{1}{x^2 + e^x} < \frac{1}{e^x} = e^{-x}$$

而 $\int_1^{+\infty} e^{-x}\, dx = e^{-1} < +\infty$（收敛）。

由比较判别法，$\int_1^{+\infty} \dfrac{dx}{x^2 + e^x}$ **收敛**。

**知识点：** 比较判别法：若 $0 \leq f(x) \leq g(x)$ 且 $\int g$ 收敛，则 $\int f$ 收敛。

</details>

---

### 题目 7
**题目：** 计算 $\displaystyle\int \frac{x^2}{\sqrt{9 - x^2}}\, dx$。

<details>
<summary>参考答案</summary>

**解：** 三角换元，令 $x = 3\sin\theta$，$dx = 3\cos\theta\, d\theta$，$\sqrt{9-x^2} = 3\cos\theta$。

$$\int \frac{9\sin^2\theta}{3\cos\theta} \cdot 3\cos\theta\, d\theta = 9\int \sin^2\theta\, d\theta = 9\int \frac{1 - \cos 2\theta}{2}\, d\theta = \frac{9}{2}\left(\theta - \frac{\sin 2\theta}{2}\right) + C$$

$$= \frac{9}{2}\theta - \frac{9}{4}\sin 2\theta + C = \frac{9}{2}\theta - \frac{9}{2}\sin\theta\cos\theta + C$$

回代：$\theta = \arcsin\dfrac{x}{3}$，$\sin\theta = \dfrac{x}{3}$，$\cos\theta = \dfrac{\sqrt{9-x^2}}{3}$。

$$= \frac{9}{2}\arcsin\frac{x}{3} - \frac{9}{2} \cdot \frac{x}{3} \cdot \frac{\sqrt{9-x^2}}{3} + C = \frac{9}{2}\arcsin\frac{x}{3} - \frac{x\sqrt{9-x^2}}{2} + C$$

$$\boxed{\int \frac{x^2}{\sqrt{9-x^2}}\, dx = \frac{9}{2}\arcsin\frac{x}{3} - \frac{x\sqrt{9-x^2}}{2} + C}$$

**知识点：** $\sqrt{a^2 - x^2}$ 型用 $x = a\sin\theta$ 换元；$\sin^2\theta = \dfrac{1 - \cos 2\theta}{2}$ 降幂。

</details>

---

### 题目 8
**题目：** 计算 $\displaystyle\int \frac{dx}{(x+1)(x^2+1)}$。

<details>
<summary>参考答案</summary>

**解：** 部分分式分解：

$$\frac{1}{(x+1)(x^2+1)} = \frac{A}{x+1} + \frac{Bx + C}{x^2+1}$$

$$1 = A(x^2+1) + (Bx+C)(x+1)$$

令 $x = -1$：$1 = 2A \implies A = \dfrac{1}{2}$

展开比较系数：

$1 = \dfrac{1}{2}(x^2+1) + Bx^2 + Bx + Cx + C = \left(\dfrac{1}{2} + B\right)x^2 + (B+C)x + \left(\dfrac{1}{2} + C\right)$

$x^2$ 系数：$\dfrac{1}{2} + B = 0 \implies B = -\dfrac{1}{2}$

常数项：$\dfrac{1}{2} + C = 1 \implies C = \dfrac{1}{2}$

$$\int \frac{dx}{(x+1)(x^2+1)} = \frac{1}{2}\int \frac{dx}{x+1} - \frac{1}{2}\int \frac{x}{x^2+1}\, dx + \frac{1}{2}\int \frac{dx}{x^2+1}$$

$$= \frac{1}{2}\ln|x+1| - \frac{1}{4}\ln(x^2+1) + \frac{1}{2}\arctan x + C$$

$$\boxed{\int \frac{dx}{(x+1)(x^2+1)} = \frac{1}{2}\ln|x+1| - \frac{1}{4}\ln(x^2+1) + \frac{1}{2}\arctan x + C}$$

**知识点：** 部分分式中不可约二次因子对应 $\dfrac{Bx+C}{x^2+1}$ 形式。

</details>

---

##  本次知识点总结

本次 Workshop 涵盖了积分的进阶技巧：

1. **分部积分法**：$\int u\, dv = uv - \int v\, du$；适用于被积函数为两类不同函数乘积的情形。
2. **部分分式分解**：将有理函数分解为简单分式，注意不可约二次因子的处理。
3. **三角换元**：根据根号内的形式选择换元——$\sqrt{a^2-x^2} \to x=a\sin\theta$，$\sqrt{x^2-a^2} \to x=a\sec\theta$，$\sqrt{x^2+a^2} \to x=a\tan\theta$。
4. **反常积分**：无穷区间和瑕积分都通过取极限定义；$p$-积分是重要的比较基准。
5. **比较判别法**：通过与已知收敛/发散的积分比较来判断反常积分的敛散性。
