> **📎 源文件：** `旧资料/04 Midterm/Midterm-Calc1M-Winter2024.pdf`

---

# 期中考试 - Differential and Integral Calculus 1M

## 📌 考试范围
- 函数的性质（单调性、奇偶性）
- 可微性与连续性
- 渐近线分析
- 隐函数求导
- 函数的单调性与单射性
- $\varepsilon$-$\delta$ 极限证明
- 分段函数的可微性

**考试时间：** 2024 年 11 月 23 日，3 小时

---

### 题目 1（10 分）
**题目：** 设 $f(x) = \dfrac{1+\sqrt{e^x+8}}{3}$，$g(x) = |x^3+x^2|$。选择正确答案：

a. $f$ 递增，$g$ 既非奇函数也非偶函数
b. $f$ 递增，$g$ 是偶函数
c. $f$ 递减，$g$ 是奇函数
d. $f^{-1}$ 递增，$g$ 是奇函数
e. $f^{-1}$ 递减，$g$ 是偶函数

<details>
<summary>参考答案</summary>

**解：**

**分析 $f(x)$：** $e^x$ 递增 $\implies e^x + 8$ 递增 $\implies \sqrt{e^x+8}$ 递增 $\implies f(x)$ 递增。

$f^{-1}$ 也是递增的（递增函数的反函数仍递增）。

**分析 $g(x)$：** $g(-x) = |(-x)^3+(-x)^2| = |-x^3+x^2| = |x^2-x^3|$

$g(x) = |x^3+x^2| = |x^2(x+1)|$

$g(-x) = |x^2(1-x)|$

$g(1) = |1+1| = 2$，$g(-1) = |-1+1| = 0$。$g(-1) \neq g(1)$ 且 $g(-1) \neq -g(1)$。

所以 $g$ **既非奇函数也非偶函数**。

$$\boxed{\text{答案：a}}$$

**知识点：** 复合函数单调性、奇偶性判断

</details>

---

### 题目 2（10 分）
**题目：** 关于 $f$ 和 $g$ 的可微性，选择正确答案：

a. $f$ 在 $\mathbb{R}$ 上可微，$g$ 在 $\mathbb{R}\setminus\{-1\}$ 上可微
b. $f$ 在 $\mathbb{R}$ 上可微，$g$ 在 $\mathbb{R}\setminus\{-1, 0\}$ 上可微
c. $f$ 和 $g$ 在 $\mathbb{R}$ 上均可微
d. $g'(-1) = 24f'(0)$
e. $g'(0) > f'(0)$

<details>
<summary>参考答案</summary>

**解：**

**$f(x) = \frac{1+\sqrt{e^x+8}}{3}$：** $e^x + 8 > 0$ 对所有实数成立，$\sqrt{e^x+8}$ 处处可微，所以 $f$ 在 $\mathbb{R}$ 上可微。

**$g(x) = |x^3+x^2| = |x^2(x+1)| = x^2|x+1|$：**

- $x \neq -1$ 且 $x \neq 0$ 时：$g$ 可微（绝对值内部不为零）
- $x = -1$ 处：$g'(-1^-) = \lim_{h \to 0^-} \frac{g(-1+h)-g(-1)}{h}$

$g(-1+h) = (-1+h)^2|h| = (1-2h+h^2)|h|$

$g'(-1^-) = \lim_{h \to 0^-} \frac{(1-2h+h^2)(-h)}{h} = -(1) = -1$

$g'(-1^+) = \lim_{h \to 0^+} \frac{(1-2h+h^2)(h)}{h} = 1$

左导数 $\neq$ 右导数，$g$ 在 $x = -1$ 处不可微。

- $x = 0$ 处：$g(0+h) = h^2|h+1|$

$g'(0) = \lim_{h \to 0} \frac{h^2|h+1|}{h} = \lim_{h \to 0} h|h+1| = 0$

$g$ 在 $x = 0$ 处可微，$g'(0) = 0$。

$f'(0) = \frac{e^0}{6\sqrt{e^0+8}} = \frac{1}{6\sqrt{9}} = \frac{1}{18}$

$g'(0) = 0 < \frac{1}{18} = f'(0)$，所以 e 不对。

$$\boxed{\text{答案：b}}$$

**知识点：** 绝对值函数的可微性

</details>

---

### 题目 3（10 分）
**题目：** 设 $f(x) = \begin{cases} \dfrac{\sin(\omega x)}{2} & x < 0 \\[6pt] \dfrac{\cos^2(x)}{\arctan\ln\dfrac{x}{2}} & x > 0 \end{cases}$

关于渐近线，选择正确答案。

<details>
<summary>参考答案</summary>

**解：**

**$x \to -\infty$：** $f(x) = \frac{\sin(\omega x)}{2}$，有界振荡，无水平渐近线。

**$x \to 0^-$：** $f(x) \to \frac{\sin 0}{2} = 0$

**$x \to 0^+$：** $f(x) = \frac{\cos^2 x}{\arctan\ln(x/2)}$

当 $x \to 0^+$：$\cos^2 x \to 1$，$\ln(x/2) \to -\infty$，$\arctan(-\infty) = -\frac{\pi}{2}$

$f(x) \to \frac{1}{-\pi/2} = -\frac{2}{\pi}$

**$x \to +\infty$：** $\ln(x/2) \to +\infty$，$\arctan\ln(x/2) \to \frac{\pi}{2}$

$\cos^2 x$ 在 $[0, 1]$ 振荡，所以 $f(x)$ 在 $0$ 和 $\frac{2}{\pi}$ 之间振荡，无水平渐近线。

**垂直渐近线：** $\arctan\ln(x/2) = 0 \implies \ln(x/2) = 0 \implies x = 2$

在 $x = 2$ 处：$\cos^2(2) \neq 0$，分母为零，所以 $x = 2$ 是垂直渐近线。

根据选项分析，正确答案应包含 $y = 0$（作为 $x \to -\infty$ 方向的行为）和 $x = 2$（垂直渐近线）。

$$\boxed{\text{答案：e（} f \text{ 有水平渐近线 } y = 0 \text{ 和垂直渐近线 } x = 2\text{）}}$$

**注：** 具体选项取决于 $\omega$ 的值和题目的完整表述。

**知识点：** 渐近线分析

</details>

---

### 题目 4（10 分）
**题目：** 关于 $f$ 的连续性，选择正确答案。

<details>
<summary>参考答案</summary>

**解：**

$f$ 在 $x = 0$ 处：$\lim_{x \to 0^-} f(x) = 0$，$\lim_{x \to 0^+} f(x) = -\frac{2}{\pi}$。

左右极限不相等，$\lim_{x \to 0} f(x)$ 不存在，$f$ 在 $x = 0$ 处不连续。

$f$ 在 $x = 2$ 处不连续（垂直渐近线）。

$f$ 在 $(0, +\infty) \setminus \{2\}$ 上连续。

$$\boxed{\text{答案：c（} \lim_{x \to 0^-} f(x) \neq \lim_{x \to 0^+} f(x) \text{）}}$$

**知识点：** 连续性、左右极限

</details>

---

### 题目 5（10 分）
**题目：** 设曲线 $C$：$\dfrac{\pi}{2}\cos(2\pi x + 3\pi y) = \arctan\dfrac{xy^3+x^2}{4}$。关于切线，选择正确答案。

<details>
<summary>参考答案</summary>

**解：**

**在 $(1, 1)$ 处隐函数求导：**

验证 $(1,1)$ 在曲线上：$\frac{\pi}{2}\cos(5\pi) = \frac{\pi}{2}(-1) = -\frac{\pi}{2}$

$\arctan\frac{1+1}{4} = \arctan\frac{1}{2}$

$-\frac{\pi}{2} \neq \arctan\frac{1}{2}$，所以 $(1,1)$ 可能不在曲线上。

重新检查：若曲线方程为 $\frac{\pi}{2}\cos(2\pi x + 3\pi y) = \arctan\frac{xy^3+x^2}{4}$

在 $(-1,-1)$ 处：$\frac{\pi}{2}\cos(-5\pi) = -\frac{\pi}{2}$，$\arctan\frac{-1+1}{4} = 0$。也不在。

此题的精确答案取决于曲线的具体方程。通过隐函数求导可得切线斜率，再与各选项比较。

**方法：** 对曲线方程两边关于 $x$ 求导，代入点的坐标，解出 $y'$，然后判断切线的平行/垂直关系。

**知识点：** 隐函数求导

</details>

---

### 题目 6（10 分）
**题目：** 设 $f(x) = \dfrac{\ln(x^2-6x+8)}{\ln(x^2-6x+9)}$。选择正确答案。

<details>
<summary>参考答案</summary>

**解：**

$f(x) = \dfrac{\ln((x-2)(x-4))}{\ln((x-3)^2)} = \dfrac{\ln(x-2)+\ln(x-4)}{2\ln|x-3|}$

**定义域：** $(x-2)(x-4) > 0$ 且 $(x-3)^2 \neq 1$（即 $x \neq 2, 4$）且 $(x-3)^2 > 0$（即 $x \neq 3$）。

定义域：$(-\infty, 2) \cup (2, 3) \cup (3, 4) \cup (4, +\infty)$... 等等。

$(x-2)(x-4) > 0 \implies x < 2$ 或 $x > 4$。

在 $x < 2$ 或 $x > 4$ 上，$(x-3)^2 > 1$（因为 $|x-3| > 1$），所以 $\ln(x-3)^2 > 0$。

**垂直渐近线：** $x = 2$ 和 $x = 4$ 处，分子 $\to -\infty$，分母 $\to \ln 1 = 0$。

$x \to 2^-$：$\ln(x-2) \to -\infty$，$2\ln(3-x) \to 2\ln 1 = 0$... 需要更仔细分析。

实际上在 $x \to 2^-$：$\ln(x-2) \to -\infty$（$x-2 \to 0^-$... 但 $x < 2$ 时 $x-2 < 0$，$\ln(x-2)$ 无定义）。

重新考虑定义域：$x < 2$ 时 $(x-2)(x-4) = (2-x)(4-x) > 0$ ✅

$\ln((2-x)(4-x))$ 在 $x \to 2^-$ 时 $\to \ln(0 \cdot 2) = -\infty$

$\ln(x-3)^2 = 2\ln(3-x) \to 2\ln 1 = 0$

所以 $f(x) \to -\infty$，$x = 2$ 是垂直渐近线。同理 $x = 4$ 也是。

**单射性：** $f(x) = \frac{\ln(x^2-6x+8)}{2\ln|x-3|}$

令 $u = x-3$：$f = \frac{\ln(u^2-1)}{2\ln|u|}$，$|u| > 1$。

这是关于 $|u|$ 的函数，所以 $f(3+t) = f(3-t)$，$f$ 不是单射。

$$\boxed{\text{答案：a（} f \text{ 有两条垂直渐近线）}}$$

**知识点：** 对数函数的定义域、渐近线、单射性

</details>

---

### 题目 7（20 分）
**题目：** 假设 $\displaystyle\lim_{t \to 0} \dfrac{\sin t}{t} = 1$，用 $\varepsilon$-$\delta$ 定义证明 $\displaystyle\lim_{t \to 0} \left(\dfrac{\sin t}{t}\right)^2 - 1 = 0$（即 $\displaystyle\lim_{t \to 0} \left(\dfrac{\sin t}{t}\right)^2 = 1$）。

<details>
<summary>参考答案</summary>

**证明：**

已知 $\displaystyle\lim_{t \to 0} \dfrac{\sin t}{t} = 1$。

设 $\varepsilon > 0$。取 $\varepsilon_1 = \min\{\varepsilon, 1\} > 0$。

由已知极限，存在 $\delta > 0$ 使得 $0 < |t| < \delta$ 时：

$$\left|\frac{\sin t}{t} - 1\right| < \varepsilon_1$$

注意：

$$\left|\left(\frac{\sin t}{t}\right)^2 - 1\right| = \left|\frac{\sin t}{t} - 1\right| \cdot \left|\frac{\sin t}{t} + 1\right|$$

因为 $\left|\dfrac{\sin t}{t} - 1\right| < \varepsilon_1 \leq 1$，所以 $0 < \dfrac{\sin t}{t} < 2$，从而 $\left|\dfrac{\sin t}{t} + 1\right| < 3$。

因此：

$$\left|\left(\frac{\sin t}{t}\right)^2 - 1\right| < 3\varepsilon_1 \leq 3\varepsilon$$

取 $\varepsilon_1 = \dfrac{\varepsilon}{3}$，则存在 $\delta > 0$ 使得 $0 < |t| < \delta$ 时 $\left|\left(\dfrac{\sin t}{t}\right)^2 - 1\right| < \varepsilon$。

$$\boxed{\lim_{t \to 0} \left(\frac{\sin t}{t}\right)^2 = 1} \quad \blacksquare$$

**知识点：** $\varepsilon$-$\delta$ 证明、极限的乘积性质

</details>

---

### 题目 8（20 分）
**题目：** 设 $c \in \mathbb{R}$，$f(x) = \begin{cases} x^{2/3} & x \leq 1 \\ \dfrac{x^3 - 5x^2 + 8x - 4c}{x - 1} & x > 1 \end{cases}$

(a) 是否存在 $c$ 使 $f'(1)$ 存在？用导数定义证明。
(b) 求所有 $x \in \mathbb{R}$ 使 $f$ 可微。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 若 $f$ 在 $x = 1$ 可微，则 $f$ 在 $x = 1$ 连续。

$f(1) = 1^{2/3} = 1$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} \frac{x^3-5x^2+8x-4c}{x-1}$$

要使极限存在，分子在 $x = 1$ 处必须为零：

$$1 - 5 + 8 - 4c = 0 \implies c = 1$$

当 $c = 1$ 时：$x^3-5x^2+8x-4 = (x-1)(x^2-4x+4) = (x-1)(x-2)^2$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (x-2)^2 = 1 = f(1) \quad \checkmark$$

**检验可微性（用定义）：**

**左导数：**

$$f'(1^-) = \lim_{x \to 1^-} \frac{x^{2/3} - 1}{x - 1} = \lim_{x \to 1^-} \frac{(x^{1/3}-1)(x^{1/3}+1)}{(x^{1/3}-1)(x^{2/3}+x^{1/3}+1)} = \lim_{x \to 1^-} \frac{x^{1/3}+1}{x^{2/3}+x^{1/3}+1} = \frac{2}{3}$$

**右导数：**

$$f'(1^+) = \lim_{x \to 1^+} \frac{(x-2)^2 - 1}{x - 1} = \lim_{x \to 1^+} \frac{x^2-4x+3}{x-1} = \lim_{x \to 1^+} (x-3) = -2$$

因为 $\dfrac{2}{3} \neq -2$，左导数 $\neq$ 右导数。

**结论：** 不存在 $c$ 使 $f'(1)$ 存在。

**(b)**

- $x < 0$：$f(x) = x^{2/3}$，$f'(x) = \frac{2}{3}x^{-1/3}$ 存在 ✅
- $x = 0$：$f'(0) = \lim_{h \to 0} \frac{h^{2/3}}{h} = \lim_{h \to 0} h^{-1/3} = \infty$，不可微 ❌
- $0 < x < 1$：$f'(x) = \frac{2}{3}x^{-1/3}$ 存在 ✅
- $x = 1$：由 (a)，不可微 ❌
- $x > 1$：$f(x) = (x-2)^2$（$c = 1$ 时），$f'(x) = 2(x-2)$ 存在 ✅

$$\boxed{f \text{ 在 } (-\infty, 0) \cup (0, 1) \cup (1, +\infty) \text{ 上可微}}$$

**知识点：** 导数定义、连续性是可微性的必要条件、分段函数可微性

</details>

---

## 📝 考试知识点总结

1. **函数性质**：复合函数的单调性由内到外逐层判断；奇偶性用 $f(-x)$ 与 $f(x)$ 比较
2. **可微性**：绝对值函数在零点可能不可微；分段函数在分界点需用定义检验
3. **渐近线**：垂直渐近线由分母零点确定；水平渐近线由 $x \to \pm\infty$ 极限确定
4. **$\varepsilon$-$\delta$ 证明**：利用已知极限，通过不等式放缩建立 $\varepsilon$ 与 $\delta$ 的关系
5. **导数定义**：$f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$，左右导数需分别计算
