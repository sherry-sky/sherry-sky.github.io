> **📎 源文件：** 无对应 PDF（基于课程进度编写）

---

# Week 14: 期中复习

## 📌 知识点概述

本周为期中复习，系统回顾 Week 1–7 的核心内容，涵盖：函数与模型、极限与连续性、导数及其计算、导数的应用（极值、单调性、凹凸性、洛必达法则）。以下梳理各章核心定义、定理和典型题型。

## 📖 核心内容

### 一、函数基础

**定义**

- **偶函数**：$f(-x) = f(x)$，图像关于 $y$ 轴对称
- **奇函数**：$f(-x) = -f(x)$，图像关于原点对称
- **复合函数**：$(f \circ g)(x) = f(g(x))$
- **反函数**：若 $f$ 为一一映射，则 $f^{-1}(y) = x \iff f(x) = y$

**重要公式**

- 指数函数：$f(x) = a^x$（$a > 0$），$f'(x) = a^x \ln a$
- 对数函数：$f(x) = \log_a x$，$f'(x) = \frac{1}{x \ln a}$
- 自然指数：$(e^x)' = e^x$，$(\ln x)' = \frac{1}{x}$

### 二、极限

**定义**

**函数极限的 $\epsilon$-$\delta$ 定义**：$\lim_{x \to a} f(x) = L$ 意味着对任意 $\epsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - a| < \delta$ 时，$|f(x) - L| < \epsilon$。

**定理**

**极限运算法则**：若 $\lim_{x \to a} f(x) = L$，$\lim_{x \to a} g(x) = M$，则：
1. $\lim_{x \to a} [f(x) + g(x)] = L + M$
2. $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$
3. $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}$（$M \neq 0$）

**夹逼定理**：若 $g(x) \leq f(x) \leq h(x)$ 在 $a$ 附近成立，且 $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$，则 $\lim_{x \to a} f(x) = L$。

**重要极限**：

$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0, \quad \lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

### 三、连续性

**定义**

$f$ 在 $x = a$ 处连续，当且仅当：
1. $f(a)$ 有定义
2. $\lim_{x \to a} f(x)$ 存在
3. $\lim_{x \to a} f(x) = f(a)$

**定理**

- **介值定理（IVT）**：若 $f$ 在 $[a, b]$ 上连续，$N$ 是 $f(a)$ 与 $f(b)$ 之间的任意值，则存在 $c \in (a, b)$ 使得 $f(c) = N$。
- **最值定理（EVT）**：若 $f$ 在 $[a, b]$ 上连续，则 $f$ 在 $[a, b]$ 上取到最大值和最小值。

### 四、导数

**定义**

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

**求导法则**

| 法则 | 公式 |
|------|------|
| 幂函数 | $(x^n)' = nx^{n-1}$ |
| 乘法法则 | $(fg)' = f'g + fg'$ |
| 除法法则 | $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$ |
| 链式法则 | $(f \circ g)' = f'(g(x)) \cdot g'(x)$ |
| 隐函数求导 | 对等式两边关于 $x$ 求导 |

**重要导数公式**：

$$(e^x)' = e^x, \quad (\ln x)' = \frac{1}{x}, \quad (\sin x)' = \cos x, \quad (\cos x)' = -\sin x$$

$$(\tan x)' = \sec^2 x, \quad (\arctan x)' = \frac{1}{1+x^2}, \quad (\arcsin x)' = \frac{1}{\sqrt{1-x^2}}$$

### 五、导数的应用

**定理**

**费马定理**：若 $f$ 在 $c$ 处取局部极值且 $f'(c)$ 存在，则 $f'(c) = 0$。

**罗尔定理**：若 $f$ 在 $[a, b]$ 上连续，$f(a) = f(b)$，且 $f$ 在 $(a, b)$ 上可导，则存在 $c \in (a, b)$ 使得 $f'(c) = 0$。

**拉格朗日中值定理（MVT）**：若 $f$ 在 $[a, b]$ 上连续，在 $(a, b)$ 上可导，则存在 $c \in (a, b)$ 使得：

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**一阶导数判别法**：
- $f' > 0 \Rightarrow f$ 递增
- $f' < 0 \Rightarrow f$ 递减
- $f'$ 由正变负 $\Rightarrow$ 局部极大
- $f'$ 由负变正 $\Rightarrow$ 局部极小

**二阶导数判别法**：若 $f'(c) = 0$：
- $f''(c) > 0 \Rightarrow$ 局部极小（凹向上）
- $f''(c) < 0 \Rightarrow$ 局部极大（凹向下）

**洛必达法则**：若 $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0$（或均为 $\pm\infty$），则：

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

（假设右端极限存在或为 $\pm\infty$）

### 典型例题

**例 1.** 设 $f(x) = \sqrt{1 + e^{-x}} + 8$ 和 $g(x) = |x^3 + x^2|$。判断 $f$ 的单调性和 $g$ 的奇偶性。

**解.**

**$f$ 的单调性**：$f'(x) = \frac{-e^{-x}}{2\sqrt{1 + e^{-x}}}$。

因为 $e^{-x} > 0$ 且 $\sqrt{1 + e^{-x}} > 0$，所以 $f'(x) < 0$ 对所有 $x \in \mathbb{R}$ 成立。

因此 $f$ 是**递减函数**。

**$g$ 的奇偶性**：$g(-x) = |(-x)^3 + (-x)^2| = |-x^3 + x^2| = |x^2 - x^3|$。

而 $g(x) = |x^3 + x^2|$，$-g(x) = -|x^3 + x^2|$。

$g(-x) \neq g(x)$ 且 $g(-x) \neq -g(x)$（取 $x = 1$ 验证：$g(-1) = 0$，$g(1) = 2$），故 $g$ **既非偶函数也非奇函数**。$\blacksquare$

---

**例 2.** 设 $f(x) = \begin{cases} \frac{\sin(\omega x)}{x^2} & x < 0 \\ x^2 \cos(x) & x > 0 \end{cases}$，分析 $f$ 的渐近线和连续性。

**解.**

**水平渐近线**：

当 $x \to -\infty$ 时，$\left|\frac{\sin(\omega x)}{x^2}\right| \leq \frac{1}{x^2} \to 0$，故 $y = 0$ 是左侧水平渐近线。

当 $x \to +\infty$ 时，$|x^2 \cos x|$ 无界振荡，无水平渐近线。

（注：根据具体题目中 $\omega$ 的值和选项做进一步分析。）

**连续性**：需要检查 $x = 0$ 处的左右极限是否相等且等于 $f(0)$。$\blacksquare$

---

**例 3.** 设曲线 $C$ 由方程 $\cos(2x + 3y) = \arctan(xy^3) + x^2 - \frac{\pi}{4}$ 定义。求曲线在 $(1, 1)$ 处的切线。

**解.** 对方程两边关于 $x$ 隐函数求导：

$$-\sin(2x + 3y) \cdot \left(2 + 3\frac{dy}{dx}\right) = \frac{y^3 + 3xy^2 \frac{dy}{dx}}{1 + (xy^3)^2} + 2x$$

代入 $(x, y) = (1, 1)$：

$$-\sin(5) \cdot (2 + 3y') = \frac{1 + 3y'}{1 + 1} + 2 = \frac{1 + 3y'}{2} + 2$$

解出 $y'$ 即可得到切线斜率，切线方程为 $y - 1 = y'(1)(x - 1)$。$\blacksquare$

---

**例 4.** 设 $f(x) = \frac{\ln(x^2)}{x^2 - 1}$，分析 $f$ 的性质。

**解.**

$f(x) = \frac{2\ln|x|}{x^2 - 1}$

**定义域**：$x \neq 0, \pm 1$。

**垂直渐近线**：$x = 1$ 和 $x = -1$ 处分母为零。

$\lim_{x \to 1} \frac{2\ln x}{x^2 - 1} = \lim_{x \to 1} \frac{2/x}{2x} = \lim_{x \to 1} \frac{1}{x^2} = 1$（洛必达法则），故 $x = 1$ 不是垂直渐近线（极限有限）。

$\lim_{x \to -1^+} \frac{2\ln|x|}{x^2 - 1} = \lim_{x \to -1^+} \frac{2\ln(-x)}{x^2 - 1} = \lim_{x \to -1^+} \frac{2 \cdot \frac{1}{-x} \cdot (-1)}{2x} = \lim_{x \to -1^+} \frac{-2/x}{2x} = \lim_{x \to -1^+} \frac{-1}{x^2} = -1$

故 $x = \pm 1$ 均不是垂直渐近线（极限有限）。

**单调性**：$f$ 为偶函数（$f(-x) = f(x)$），可只分析 $x > 0$ 且 $x \neq 1$ 的情形。$\blacksquare$

---

**例 5.** 已知 $\lim_{x \to 1} \frac{f(x)}{x} = 1$，用 $\epsilon$-$\delta$ 定义证明 $\lim_{x \to 1} \left[\frac{f(x)}{x} - 1\right] = 0$。

**解.** 设 $g(x) = \frac{f(x)}{x}$，已知 $\lim_{x \to 1} g(x) = 1$。

需证 $\lim_{x \to 1} [g(x) - 1] = 0$。

给定 $\epsilon > 0$，由已知条件，存在 $\delta > 0$，使得当 $0 < |x - 1| < \delta$ 时：

$$|g(x) - 1| < \epsilon$$

而这正是要证的 $\left|\frac{f(x)}{x} - 1\right| < \epsilon$。

因此 $\lim_{x \to 1} \left[\frac{f(x)}{x} - 1\right] = 0$。$\blacksquare$

## 📝 本周知识点总结

1. **极限**是微积分的基石：掌握 $\epsilon$-$\delta$ 定义、极限运算法则、夹逼定理和洛必达法则
2. **连续性**的三个条件缺一不可；介值定理和最值定理是闭区间上连续函数的重要性质
3. **导数**的计算需熟练掌握链式法则和隐函数求导
4. **导数应用**：一阶导数判断单调性和极值，二阶导数判断凹凸性和拐点
5. 中值定理（罗尔定理、拉格朗日中值定理）是连接函数值与导数值的桥梁
6. 期中考试重点：极限计算、连续性分析、导数计算与应用、函数图像分析
7. 隐函数求导和参数方程求导是常见考点
