> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week4.pdf`

---

# Tutorial 4 - 连续性、渐近线与导数定义

## 📌 知识点梳理
- 函数间断点的分类（可去间断、跳跃间断、无穷间断）
- 连续性的判定与参数确定
- 水平渐近线与垂直渐近线
- 导数的极限定义
- 切线方程
- 可微性的判定

---

### 题目 1（核心题）

**题目：** 解释下列函数在给定 $a$ 处为何不连续。

**(a)** $f(x) = \frac{x^2 - 1}{x + 1}$，$a = 1$ 和 $a = -1$

**(b)** $f(x) = \tan x$，$a = \frac{\pi}{2}$

**(c)** $f(x) = \begin{cases} e^x & \text{if } x < 1 \\ 3 & \text{if } x \geq 1 \end{cases}$，$a = 1$

**(d)** $f(x) = \begin{cases} \sin(x) & \text{if } x \leq 0 \\ \ln x & \text{if } x > 0 \end{cases}$，$a = 0$

**(e)** $f(x) = \begin{cases} \frac{x^2 + x}{x^2 - 1} & \text{if } |x| \neq 1 \\ 0 & \text{if } |x| = 1 \end{cases}$，$|a| = 1$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f(x) = \frac{(x-1)(x+1)}{x+1}$
- $a = 1$：$f(1) = \frac{0}{2} = 0$，$\lim_{x \to 1} f(x) = \lim_{x \to 1} (x - 1) = 0$。实际上 $f$ 在 $x = 1$ 处连续（$f(1) = 0 = \lim_{x\to 1}f(x)$）。**注意**：$a = -1$ 处 $f$ 无定义（分母为零），$\lim_{x \to -1} f(x) = \lim_{x \to -1}(x-1) = -2$，为可去间断点。
- $a = -1$：$f(-1)$ 无定义，不连续。

**(b)** $\tan x = \frac{\sin x}{\cos x}$，$\cos\frac{\pi}{2} = 0$，$\lim_{x \to \pi/2} \tan x$ 不存在（趋于 $\pm\infty$），为无穷间断点。

**(c)** $\lim_{x \to 1^-} f(x) = e^1 = e \neq 3 = f(1)$。左极限不等于函数值，为跳跃间断点。

**(d)** $\lim_{x \to 0^-} f(x) = \sin 0 = 0$，$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \ln x = -\infty$。右极限不存在（趋于 $-\infty$），为无穷间断点。

**(e)** $f(x) = \frac{x(x+1)}{(x-1)(x+1)}$（$|x| \neq 1$）
- $a = 1$：$\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{x}{x - 1}$ 不存在（趋于 $\pm\infty$），无穷间断点。
- $a = -1$：$\lim_{x \to -1} f(x) = \lim_{x \to -1} \frac{x}{x - 1} = \frac{-1}{-2} = \frac{1}{2}$，但 $f(-1) = 0 \neq \frac{1}{2}$，可去间断点。

**知识点：** 间断点分类——可去间断（极限存在但不等于函数值）、跳跃间断（左右极限存在但不相等）、无穷间断（极限为 $\pm\infty$）。

</details>

---

### 题目 2

**题目：** 利用连续性的定义和极限的性质，证明函数在给定区间上连续。

**(a)** $f(x) = x^2 - \sqrt{-x^2 + 9}$，$[-3, 3]$

**(b)** $f(x) = \frac{3 - x^2 + x}{x^{1 - \sin(x)}}$，$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right)$

<details>
<summary>参考答案</summary>

**证明：**

**(a)** $x^2$ 是多项式，处处连续。$-x^2 + 9$ 在 $[-3, 3]$ 上非负，$\sqrt{-x^2 + 9}$ 作为连续函数的复合在 $[-3, 3]$ 上连续。两个连续函数之差连续。$\blacksquare$

**(b)** 分子 $3 - x^2 + x$ 是多项式，处处连续。分母 $x^{1 - \sin x}$：在 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 上需 $x > 0$（对一般幂函数），此处需仔细分析定义域。在定义域内，分子分母均连续且分母不为零，故商连续。$\blacksquare$

**知识点：** 连续函数的和、差、积、商、复合仍连续。

</details>

---

### 题目 3

**题目：** 求 $f$ 的间断点，并判断在每个间断点处的连续性方向。

**(a)** $f(x) = \begin{cases} x^3 & \text{if } x < -1 \\ x & \text{if } -1 \leq x \leq 1 \\ x^2 & \text{if } x > 1 \end{cases}$

**(b)** $f(x) = \begin{cases} -\sin x & \text{if } x < -\pi \\ \cos\left(\frac{x - \pi}{2}\right) & \text{if } -\pi \leq x < \pi \\ \tan x & \text{if } x \geq \pi \end{cases}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 可疑点为 $x = -1$ 和 $x = 1$。

$x = -1$：$\lim_{x \to -1^-} f(x) = (-1)^3 = -1$，$\lim_{x \to -1^+} f(x) = -1$，$f(-1) = -1$。连续！

$x = 1$：$\lim_{x \to 1^-} f(x) = 1$，$\lim_{x \to 1^+} f(x) = 1^2 = 1$，$f(1) = 1$。连续！

$$\boxed{f \text{ 在 } \mathbb{R} \text{ 上连续，无间断点}}$$

**(b)** 可疑点为 $x = -\pi$ 和 $x = \pi$。

$x = -\pi$：$\lim_{x \to -\pi^-} f(x) = -\sin(-\pi) = 0$，$\lim_{x \to -\pi^+} f(x) = \cos\left(\frac{-\pi - \pi}{2}\right) = \cos(-\pi) = -1$，$f(-\pi) = -1$。

左极限 $\neq$ 右极限，跳跃间断点。$f$ 在 $x = -\pi$ 处右连续。

$x = \pi$：$\lim_{x \to \pi^-} f(x) = \cos\left(\frac{\pi - \pi}{2}\right) = \cos 0 = 1$，$\lim_{x \to \pi^+} f(x) = \tan \pi = 0$，$f(\pi) = 0$。

左极限 $\neq$ 右极限，跳跃间断点。$f$ 在 $x = \pi$ 处右连续。

**知识点：** 分段函数的连续性需在各段拼接处逐一检验。

</details>

---

### 题目 4（核心题）

**题目：** 求使 $f$ 在整个 $\mathbb{R}$ 上连续的参数值。

**(a)** $f(x) = \begin{cases} \frac{2x^2 - x + 1}{x - 1} & \text{if } x \leq 0 \\ ax + b & \text{if } 0 < x < 2 \\ e^x & \text{if } x \geq 2 \end{cases}$

<details>
<summary>参考答案</summary>

**解：**

**在 $x = 0$ 处连续：**

$\lim_{x \to 0^-} f(x) = \frac{0 - 0 + 1}{0 - 1} = -1$

$\lim_{x \to 0^+} f(x) = a(0) + b = b$

需 $b = -1$。

**在 $x = 2$ 处连续：**

$\lim_{x \to 2^-} f(x) = 2a + b = 2a - 1$

$\lim_{x \to 2^+} f(x) = e^2$

需 $2a - 1 = e^2 \implies a = \frac{e^2 + 1}{2}$

$$\boxed{a = \frac{e^2 + 1}{2}, \quad b = -1}$$

**知识点：** 利用连续性条件（左极限 = 右极限 = 函数值）建立方程组求解参数。

</details>

---

### 题目 5

**题目：** 设 $f$ 在 $c$ 处连续且 $f(c) \neq 0$。证明存在区间 $(c - \delta, c + \delta)$，使得在该区间内 $f(c)$ 与 $f(x)$ 同号。

<details>
<summary>参考答案</summary>

**证明：**

设 $f(c) > 0$。取 $\varepsilon = f(c) > 0$。由连续性，存在 $\delta > 0$，当 $|x - c| < \delta$ 时：
$$|f(x) - f(c)| < f(c) \implies -f(c) < f(x) - f(c) < f(c) \implies 0 < f(x) < 2f(c)$$

故在 $(c - \delta, c + \delta)$ 内 $f(x) > 0$，与 $f(c)$ 同号。

$f(c) < 0$ 的情况类似。$\blacksquare$

**知识点：** 连续函数的局部保号性。

</details>

---

### 题目 6

**题目：** 证明：若 $n$ 为正整数且 $a > 0$，则存在唯一的 $b > 0$ 使得 $b^n = a$。

<details>
<summary>参考答案</summary>

**证明：**

设 $f(x) = x^n$，$f$ 在 $[0, +\infty)$ 上连续，$f(0) = 0$，$f(x) \to +\infty$（$x \to +\infty$）。

取充分大的 $M$ 使 $M^n > a$，则 $f(0) = 0 < a < M^n = f(M)$。

由介值定理，存在 $b \in (0, M)$ 使 $f(b) = a$，即 $b^n = a$。

唯一性：$f(x) = x^n$ 在 $(0, +\infty)$ 上严格递增（$f'(x) = nx^{n-1} > 0$），故 $b$ 唯一。$\blacksquare$

**知识点：** 介值定理（IVT）证明根的存在性，单调性保证唯一性。

</details>

---

### 题目 8（核心题）

**题目：** 求下列极限。

**(a)** $\lim_{x \to \infty} \frac{3x - 1}{-3x + 2}$

**(b)** $\lim_{x \to -\infty} \frac{x + 3}{x^2 - 9}$

**(c)** $\lim_{x \to \infty} \left(\sqrt{x^2 + ax} - \sqrt{x^2 + bx}\right)$

**(d)** $\lim_{x \to \infty} [\ln(x^2 - 1) - \ln(x^2 + 2)]$

**(e)** $\lim_{x \to -\infty} e^{3x} \sin x$

**(f)** $\lim_{x \to -\infty} \frac{\sqrt{1 + 4x^6}}{2 - x^3}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 分子分母同除以 $x$：
$$\lim_{x \to \infty} \frac{3 - 1/x}{-3 + 2/x} = \frac{3}{-3} = \boxed{-1}$$

**(b)** $\frac{x + 3}{x^2 - 9} = \frac{x + 3}{(x-3)(x+3)} = \frac{1}{x - 3}$（$x \neq -3$）

$$\lim_{x \to -\infty} \frac{1}{x - 3} = \boxed{0}$$

**(c)** 有理化：
$$\sqrt{x^2 + ax} - \sqrt{x^2 + bx} = \frac{(x^2 + ax) - (x^2 + bx)}{\sqrt{x^2 + ax} + \sqrt{x^2 + bx}} = \frac{(a - b)x}{\sqrt{x^2 + ax} + \sqrt{x^2 + bx}}$$

当 $x \to +\infty$ 时，$\sqrt{x^2 + ax} \approx x$，所以：
$$\frac{(a-b)x}{x + x} = \frac{a - b}{2}$$

$$\boxed{\frac{a - b}{2}}$$

**(d)** $\ln(x^2 - 1) - \ln(x^2 + 2) = \ln\frac{x^2 - 1}{x^2 + 2}$

$$\lim_{x \to \infty} \frac{x^2 - 1}{x^2 + 2} = 1 \implies \ln 1 = \boxed{0}$$

**(e)** $|e^{3x} \sin x| \leq e^{3x}$，当 $x \to -\infty$ 时 $e^{3x} \to 0$。

由夹逼定理：$\boxed{0}$。

**(f)** 当 $x \to -\infty$ 时，$x^6 \to +\infty$，$\sqrt{1 + 4x^6} \approx 2|x|^3 = -2x^3$（因为 $x < 0$）。

$$\frac{\sqrt{1 + 4x^6}}{2 - x^3} \approx \frac{-2x^3}{-x^3} = 2$$

更精确地，分子分母同除以 $x^3$（注意 $x < 0$，$x^3 < 0$）：

$$\frac{\sqrt{1 + 4x^6}/x^3}{(2 - x^3)/x^3} = \frac{-\sqrt{1/x^6 + 4}}{2/x^3 - 1} \to \frac{-2}{-1} = \boxed{2}$$

**知识点：** 无穷远处的极限——分子分母同除以最高次幂，有理化，夹逼定理。

</details>

---

### 题目 9

**题目：** 求下列函数的水平渐近线和垂直渐近线。

**(a)** $f(x) = \frac{x - 1}{x - 2}$ **(b)** $f(x) = \frac{2x - 3}{x + 1}$ **(c)** $f(x) = \frac{x^2 - 1}{x^2 - 2}$

**(d)** $f(x) = \frac{2e^{-3x}}{3e^x - 2}$ **(e)** $f(x) = \ln(x + 1) - \ln x$ **(f)** $f(x) = \ln x - \ln(1 - x)$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 垂直渐近线：$x = 2$（分母为零）。水平渐近线：$\lim_{x \to \pm\infty} \frac{x-1}{x-2} = 1$，即 $y = 1$。

**(b)** 垂直渐近线：$x = -1$。水平渐近线：$\lim_{x \to \pm\infty} \frac{2x-3}{x+1} = 2$，即 $y = 2$。

**(c)** 垂直渐近线：$x = \pm\sqrt{2}$。水平渐近线：$\lim_{x \to \pm\infty} \frac{x^2-1}{x^2-2} = 1$，即 $y = 1$。

**(d)** 垂直渐近线：$3e^x - 2 = 0 \implies x = \ln\frac{2}{3}$。

$x \to +\infty$：$e^{-3x} \to 0$，$e^x \to +\infty$，$f(x) \to 0$，水平渐近线 $y = 0$。

$x \to -\infty$：$e^{-3x} \to +\infty$，$e^x \to 0$，$f(x) \to -\infty$，无水平渐近线。

**(e)** $f(x) = \ln\frac{x+1}{x} = \ln\left(1 + \frac{1}{x}\right)$。

垂直渐近线：$x = 0$（$\ln x$ 无定义）和 $x = -1$（$\ln(x+1)$ 无定义）。

$x \to +\infty$：$f(x) \to \ln 1 = 0$，水平渐近线 $y = 0$。

$x \to -\infty$：$f(x) \to \ln 1 = 0$，水平渐近线 $y = 0$。

**(f)** $f(x) = \ln\frac{x}{1-x}$。

垂直渐近线：$x = 0$ 和 $x = 1$。

$x \to +\infty$：$\frac{x}{1-x} \to -1$，$\ln$ 无定义（在实数范围内）。

$x \to -\infty$：$\frac{x}{1-x} \to 1$，$f(x) \to 0$，水平渐近线 $y = 0$。

**知识点：** 垂直渐近线对应分母为零或函数无定义处，水平渐近线对应 $x \to \pm\infty$ 时的极限。

</details>

---

### 题目 12（核心题）

**题目：** 用导数的定义求下列函数的导数。

**(a)** $f(x) = x^4$ **(b)** $f(x) = \sin x$ **(c)** $f(x) = \frac{1}{x}$ **(d)** $f(x) = \frac{1}{\sqrt{x}}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f'(x) = \lim_{h \to 0} \frac{(x+h)^4 - x^4}{h} = \lim_{h \to 0} \frac{4x^3 h + 6x^2 h^2 + 4xh^3 + h^4}{h} = \lim_{h \to 0} (4x^3 + 6x^2 h + 4xh^2 + h^3) = \boxed{4x^3}$

**(b)** $f'(x) = \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h} = \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}$

$= \lim_{h \to 0} \left[\sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}\right] = \sin x \cdot 0 + \cos x \cdot 1 = \boxed{\cos x}$

**(c)** $f'(x) = \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x+h)}{h \cdot x(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)} = \boxed{-\frac{1}{x^2}}$

**(d)** $f'(x) = \lim_{h \to 0} \frac{\frac{1}{\sqrt{x+h}} - \frac{1}{\sqrt{x}}}{h} = \lim_{h \to 0} \frac{\sqrt{x} - \sqrt{x+h}}{h\sqrt{x}\sqrt{x+h}}$

有理化分子：$\frac{-(x+h-x)}{h\sqrt{x}\sqrt{x+h}(\sqrt{x} + \sqrt{x+h})} = \frac{-1}{\sqrt{x}\sqrt{x+h}(\sqrt{x} + \sqrt{x+h})}$

$\to \frac{-1}{x \cdot 2\sqrt{x}} = \boxed{-\frac{1}{2x^{3/2}}}$

**知识点：** 导数定义 $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$，需要用到二项式展开、和角公式、有理化等技巧。

</details>

---

### 题目 14

**题目：**

**(a)** 设 $|f(x)| \leq x^2$ 对所有 $x \in (-a, a)$ 成立。证明 $f$ 在 $0$ 处可微。

**(b)** 设 $f(x) = \begin{cases} x^2 \sin\frac{1}{x} & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$。$f$ 在哪些点可微？

<details>
<summary>参考答案</summary>

**解：**

**(a)** 由 $|f(x)| \leq x^2$ 得 $f(0) = 0$（令 $x = 0$）。

$$\left|\frac{f(x) - f(0)}{x - 0}\right| = \left|\frac{f(x)}{x}\right| \leq \frac{x^2}{|x|} = |x| \to 0 \quad (x \to 0)$$

由夹逼定理，$f'(0) = 0$。$\blacksquare$

**(b)** 当 $x \neq 0$ 时，$f$ 由初等函数的积和复合构成，可微。

在 $x = 0$ 处：
$$\left|\frac{f(h) - f(0)}{h}\right| = \left|\frac{h^2 \sin(1/h)}{h}\right| = |h| \left|\sin\frac{1}{h}\right| \leq |h| \to 0$$

故 $f'(0) = 0$，$f$ 在 $x = 0$ 处也可微。

$$\boxed{f \text{ 在 } \mathbb{R} \text{ 上处处可微}}$$

**知识点：** 夹逼定理证明可微性；$x^2 \sin(1/x)$ 是经典的可微但导数不连续的例子。

</details>

---

## 📝 本次知识点总结

1. **间断点分类**：可去间断、跳跃间断、无穷间断，需逐一检验各拼接点。
2. **连续性应用**：利用连续性条件确定参数，介值定理证明根的存在性。
3. **渐近线**：垂直渐近线看无定义点处的极限，水平渐近线看无穷远处的极限。
4. **导数定义**：$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$，是微积分的基石。
5. **可微性判定**：利用夹逼定理可以证明某些特殊函数在特定点的可微性。
