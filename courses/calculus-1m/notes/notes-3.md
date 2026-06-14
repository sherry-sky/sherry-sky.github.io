> **📎 源文件：** 无对应 PDF（基于课程进度编写）

---

# Week 3: 极限——概念、运算法则与 $\varepsilon$-$\delta$ 定义

## 📌 知识点概述

本周进入微积分的核心概念——极限。学习内容包括：从图像读取极限、单侧极限与双侧极限的关系、极限的运算法则、特殊极限（如 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$）、$\varepsilon$-$\delta$ 极限定义，以及用定义证明极限。

## 📖 核心内容

### 定义

**极限的直观定义：** $\lim_{x \to a} f(x) = L$ 表示当 $x$ 趋近于 $a$ 时，$f(x)$ 趋近于 $L$。

**单侧极限：**
- 左极限：$\lim_{x \to a^-} f(x) = L$
- 右极限：$\lim_{x \to a^+} f(x) = L$

**双侧极限存在条件：** $\lim_{x \to a} f(x) = L$ 存在当且仅当 $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$。

**$\varepsilon$-$\delta$ 定义：** $\lim_{x \to a} f(x) = L$ 意味着：对任意 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - a| < \delta$ 时，$|f(x) - L| < \varepsilon$。

### 定理

**极限运算法则：** 设 $\lim_{x \to a} f(x) = L$，$\lim_{x \to a} g(x) = L'$，则：
- $\lim_{x \to a} [f(x) + g(x)] = L + L'$
- $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot L'$
- $\lim_{x \to a} c \cdot f(x) = cL$
- $\lim_{x \to a} \dfrac{f(x)}{g(x)} = \dfrac{L}{L'}$（$L' \neq 0$）

**夹逼定理（Squeeze Theorem）：** 若 $g(x) \leq f(x) \leq h(x)$ 且 $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$，则 $\lim_{x \to a} f(x) = L$。

**重要极限：**
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

### 重要公式

**多项式极限：** 对任意多项式 $p(x)$ 和任意实数 $a$，$\lim_{x \to a} p(x) = p(a)$。

---

### 典型例题

**例 1.** 计算 $\lim_{x \to -2} \dfrac{x^3 + 3x^2 + 2x}{x^2 - 4}$。

**解.** 先因式分解分子和分母：
$$\frac{x^3 + 3x^2 + 2x}{x^2 - 4} = \frac{x(x^2 + 3x + 2)}{(x-2)(x+2)} = \frac{x(x+1)(x+2)}{(x-2)(x+2)}$$
约去公因子 $(x+2)$：
$$\lim_{x \to -2} \frac{x(x+1)}{x-2} = \frac{(-2)(-2+1)}{-2-2} = \frac{(-2)(-1)}{-4} = \frac{2}{-4} = -\frac{1}{2}$$

---

**例 2.** 计算 $\lim_{x \to 0} \left(\dfrac{1}{x} - \dfrac{1}{|x|}\right)$。

**解.** 分别考虑左右极限：
- 当 $x \to 0^+$ 时，$|x| = x$：$\dfrac{1}{x} - \dfrac{1}{x} = 0$
- 当 $x \to 0^-$ 时，$|x| = -x$：$\dfrac{1}{x} - \dfrac{1}{-x} = \dfrac{1}{x} + \dfrac{1}{x} = \dfrac{2}{x} \to -\infty$

左极限为 $-\infty$，右极限为 $0$，因此**极限不存在**。

---

**例 3.** 计算 $\lim_{x \to 0} \dfrac{\sqrt{1+x} - \sqrt{1-x}}{x}$。

**解.** 分子有理化，乘以共轭表达式：
$$\frac{\sqrt{1+x} - \sqrt{1-x}}{x} \cdot \frac{\sqrt{1+x} + \sqrt{1-x}}{\sqrt{1+x} + \sqrt{1-x}} = \frac{(1+x) - (1-x)}{x(\sqrt{1+x} + \sqrt{1-x})} = \frac{2x}{x(\sqrt{1+x} + \sqrt{1-x})}$$
$$= \frac{2}{\sqrt{1+x} + \sqrt{1-x}}$$
因此：
$$\lim_{x \to 0} \frac{\sqrt{1+x} - \sqrt{1-x}}{x} = \frac{2}{\sqrt{1} + \sqrt{1}} = \frac{2}{2} = 1$$

---

**例 4.** 利用 $\sin x \leq x \leq \tan x$（$x \in (0, \pi/2)$），证明 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$。

**解.** 由 $\sin x \leq x \leq \tan x = \dfrac{\sin x}{\cos x}$，对 $x \in (0, \pi/2)$ 除以 $\sin x > 0$：
$$1 \leq \frac{x}{\sin x} \leq \frac{1}{\cos x}$$
取倒数（不等号反转）：
$$\cos x \leq \frac{\sin x}{x} \leq 1$$
因为 $\lim_{x \to 0^+} \cos x = 1$，由夹逼定理：$\lim_{x \to 0^+} \dfrac{\sin x}{x} = 1$。

由于 $\dfrac{\sin x}{x}$ 是偶函数，左极限也等于 $1$，所以 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$。

---

**例 5.** 用 $\varepsilon$-$\delta$ 定义证明 $\lim_{x \to 1} \sqrt{x} = 1$。给定 $\varepsilon = \dfrac{1}{5}$，求 $\delta$。

**解.** 需要找到 $\delta > 0$，使得当 $|x - 1| < \delta$ 时，$|\sqrt{x} - 1| < \varepsilon = \dfrac{1}{5}$。

$$|\sqrt{x} - 1| < \frac{1}{5} \iff -\frac{1}{5} < \sqrt{x} - 1 < \frac{1}{5} \iff \frac{4}{5} < \sqrt{x} < \frac{6}{5}$$
$$\iff \frac{16}{25} < x < \frac{36}{25}$$

即 $|x - 1| < \min\left(1 - \dfrac{16}{25}, \dfrac{36}{25} - 1\right) = \min\left(\dfrac{9}{25}, \dfrac{11}{25}\right) = \dfrac{9}{25}$。

取 $\delta = \dfrac{9}{25}$，则当 $|x - 1| < \delta$ 时，$|\sqrt{x} - 1| < \dfrac{1}{5}$。

---

## 📝 本周知识点总结

1. **极限的概念**：理解极限描述的是函数在某点附近的趋势，而非该点的函数值。
2. **极限的计算**：因式分解消去法、有理化、夹逼定理是常用技巧。
3. **特殊极限**：$\lim_{x \to 0} \dfrac{\sin x}{x} = 1$ 是重要基础。
4. **$\varepsilon$-$\delta$ 定义**：严格量化了"趋近"的含义，是分析学的基石。
5. **极限运算法则**：和、差、积、商的极限等于极限的和、差、积、商（分母极限非零）。
