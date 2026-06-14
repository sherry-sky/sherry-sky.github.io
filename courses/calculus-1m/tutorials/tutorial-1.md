> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week1.pdf`

---

# Tutorial 1 - 不等式、直线与三角函数

## 📌 知识点梳理
- 一元二次/三次不等式的求解
- 绝对值不等式
- 中点公式与数轴上的点
- 直线方程（平行、垂直）
- 平面区域的表示与绘制
- 三角函数的基本关系

---

### 题目 1

**题目：** 求解下列不等式，用区间表示解集，并在数轴上表示。

**(a)** $x(x - 4) \geq -2$

<details>
<summary>参考答案</summary>

**解：**

将不等式整理为标准形式：
$$x^2 - 4x + 2 \geq 0$$

求根公式：$x = \frac{4 \pm \sqrt{16 - 8}}{2} = \frac{4 \pm 2\sqrt{2}}{2} = 2 \pm \sqrt{2}$

因为二次项系数为正（开口向上），所以不等式在两根之外成立。

$$\boxed{(-\infty,\; 2 - \sqrt{2}\,] \cup [\,2 + \sqrt{2},\; +\infty)}$$

**知识点：** 一元二次不等式的求解，利用求根公式确定零点，根据开口方向判断解集。

</details>

---

**(b)** $x^2 < 2x - 1$

<details>
<summary>参考答案</summary>

**解：**

整理得：$x^2 - 2x + 1 < 0$，即 $(x - 1)^2 < 0$。

由于完全平方 $(x-1)^2 \geq 0$ 对所有实数 $x$ 恒成立，故不存在使 $(x-1)^2 < 0$ 的 $x$。

$$\boxed{\emptyset \text{（无解）}}$$

**知识点：** 完全平方非负性质。

</details>

---

**(c)** $x^3 - 3x + 2 > 0$

<details>
<summary>参考答案</summary>

**解：**

因式分解：先试 $x = 1$：$1 - 3 + 2 = 0$，所以 $(x - 1)$ 是因子。

$$x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)(x - 1)(x + 2) = (x - 1)^2(x + 2)$$

不等式变为 $(x - 1)^2(x + 2) > 0$。

- $(x - 1)^2 \geq 0$，等号在 $x = 1$ 时取到。
- 当 $x \neq 1$ 时，$(x - 1)^2 > 0$，此时需要 $x + 2 > 0$，即 $x > -2$。

综合得：$x > -2$ 且 $x \neq 1$。

$$\boxed{(-2,\; 1) \cup (1,\; +\infty)}$$

**知识点：** 多项式因式分解，符号分析。

</details>

---

**(d)** $\frac{1}{25} \leq \frac{1}{x^2 - 6x + 9}$

<details>
<summary>参考答案</summary>

**解：**

注意 $x^2 - 6x + 9 = (x - 3)^2$，不等式为：
$$\frac{1}{25} \leq \frac{1}{(x - 3)^2}$$

要求 $(x - 3)^2 > 0$，即 $x \neq 3$。两边取倒数（注意正数取倒数不等号反向）：
$$(x - 3)^2 \leq 25$$

$$|x - 3| \leq 5 \implies -5 \leq x - 3 \leq 5 \implies -2 \leq x \leq 8$$

排除 $x = 3$：

$$\boxed{[-2,\; 3) \cup (3,\; 8]}$$

**知识点：** 分式不等式，取倒数时注意不等号方向。

</details>

---

**(e)** $|9 - 2x^2| \geq \frac{1}{3}$

<details>
<summary>参考答案</summary>

**解：**

分两种情况：

**情况 1：** $9 - 2x^2 \geq \frac{1}{3}$
$$2x^2 \leq 9 - \frac{1}{3} = \frac{26}{3} \implies x^2 \leq \frac{13}{3} \implies |x| \leq \sqrt{\frac{13}{3}}$$

**情况 2：** $9 - 2x^2 \leq -\frac{1}{3}$
$$2x^2 \geq 9 + \frac{1}{3} = \frac{28}{3} \implies x^2 \geq \frac{14}{3} \implies |x| \geq \sqrt{\frac{14}{3}}$$

$$\boxed{\left[-\sqrt{\frac{13}{3}},\; \sqrt{\frac{13}{3}}\,\right] \cup \left(-\infty,\; -\sqrt{\frac{14}{3}}\,\right] \cup \left[\,\sqrt{\frac{14}{3}},\; +\infty\right)}$$

**知识点：** 绝对值不等式的分类讨论。

</details>

---

**(f)** $|x^3 + 1| < 4$

<details>
<summary>参考答案</summary>

**解：**

$$-4 < x^3 + 1 < 4 \implies -5 < x^3 < 3$$

$$\boxed{(-\sqrt[3]{5},\; \sqrt[3]{3})}$$

**知识点：** 绝对值不等式转化为双侧不等式。

</details>

---

### 题目 2

**题目：** 证明：若 $x < y$，则 $x < \frac{x + y}{2} < y$。

<details>
<summary>参考答案</summary>

**证明：**

由 $x < y$，两边加 $x$：
$$2x < x + y \implies x < \frac{x + y}{2}$$

由 $x < y$，两边加 $y$：
$$x + y < 2y \implies \frac{x + y}{2} < y$$

综合得 $x < \frac{x + y}{2} < y$。$\blacksquare$

**知识点：** $\frac{x+y}{2}$ 是 $x$ 和 $y$ 的中点，必然严格位于两者之间。

</details>

---

### 题目 3

**题目：** 考虑直线 $l(x) = 3x + 2$。证明：对任意 $\varepsilon > 0$，若 $x$ 到 $1$ 的距离小于 $\frac{\varepsilon}{3}$，则 $l(x)$ 到 $5$ 的距离小于 $\varepsilon$。

<details>
<summary>参考答案</summary>

**证明：**

已知 $|x - 1| < \frac{\varepsilon}{3}$，需证 $|l(x) - 5| < \varepsilon$。

$$|l(x) - 5| = |3x + 2 - 5| = |3x - 3| = 3|x - 1| < 3 \cdot \frac{\varepsilon}{3} = \varepsilon$$

因此 $|l(x) - 5| < \varepsilon$。$\blacksquare$

**知识点：** $\varepsilon$-$\delta$ 语言的初步应用，线性函数的连续性。

</details>

---

### 题目 4

**题目：** 判断下列哪组三个点共线。

**(a)** $(1, 1)$, $(3, 7)$, $(-2, -8)$

**(b)** $(-1, 7)$, $(2, 5)$, $(1, 2)$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 计算斜率：
$$k_{12} = \frac{7 - 1}{3 - 1} = 3, \quad k_{13} = \frac{-8 - 1}{-2 - 1} = \frac{-9}{-3} = 3$$

斜率相同，三点共线。 ✓

**(b)** 计算斜率：
$$k_{12} = \frac{5 - 7}{2 - (-1)} = \frac{-2}{3}, \quad k_{13} = \frac{2 - 7}{1 - (-1)} = \frac{-5}{2}$$

$k_{12} \neq k_{13}$，三点不共线。

$$\boxed{\text{(a) 中的三点共线}}$$

**知识点：** 共线的判定——任意两点间斜率相同。

</details>

---

### 题目 5

**题目：** 求满足条件的直线方程。

**(a)** 过点 $(1, 2)$，平行于 $y = 3x + 5$

**(b)** 过点 $(-3, 0)$，垂直于 $y = -4x + 1$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 平行线斜率相同，$k = 3$：
$$y - 2 = 3(x - 1) \implies \boxed{y = 3x - 1}$$

**(b)** 垂直线斜率为负倒数，$k = \frac{1}{4}$：
$$y - 0 = \frac{1}{4}(x + 3) \implies \boxed{y = \frac{1}{4}x + \frac{3}{4}}$$

**知识点：** 平行线斜率相等，垂直线斜率互为负倒数。

</details>

---

### 题目 6

**题目：** 求垂直于直线 $y = -3x + 2$ 且过直线 $y = \frac{1}{7}x - 2$ 与 $y = 2x - 28$ 交点的直线方程。

<details>
<summary>参考答案</summary>

**解：**

**第一步：求交点。** 令 $\frac{1}{7}x - 2 = 2x - 28$：
$$\frac{1}{7}x - 2x = -28 + 2 \implies -\frac{13}{7}x = -26 \implies x = 14$$
$$y = 2(14) - 28 = 0$$

交点为 $(14, 0)$。

**第二步：** 垂直线的斜率 $k = \frac{1}{3}$（$-3$ 的负倒数）。

$$y - 0 = \frac{1}{3}(x - 14) \implies \boxed{y = \frac{1}{3}x - \frac{14}{3}}$$

**知识点：** 求两直线交点，垂直线斜率。

</details>

---

### 题目 7（核心题）

**题目：** 在 $xy$ 平面上描绘下列区域。

**(a)** $\{(x, y) \in \mathbb{R}^2 : y^2 < x + 1 < 2y + 3\}$

**(d)** $\{(x, y) \in \mathbb{R}^2 : |x| + |y| \leq 2\}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 拆为两个不等式：
- $y^2 < x + 1 \implies x > y^2 - 1$：抛物线 $x = y^2 - 1$ 的右侧
- $x + 1 < 2y + 3 \implies x < 2y + 2$：直线 $x = 2y + 2$ 的左侧

区域为抛物线与直线之间的部分。

**(d)** $|x| + |y| \leq 2$ 是一个以原点为中心、顶点在 $(\pm 2, 0)$ 和 $(0, \pm 2)$ 的正方形（含边界）。

**知识点：** 含绝对值的区域描绘，抛物线与直线围成的区域。

</details>

---

### 题目 8（核心题）

**题目：** 描绘由下列曲线对围成的有界区域，并用不等式表示。

**(a)** 直线 $y = \frac{1}{3}x$ 与抛物线 $x = y^2$

**(b)** 直线 $x - 2y = 2$ 与抛物线 $y = 4 - x^2$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 求交点：将 $x = y^2$ 代入 $y = \frac{1}{3}x$：
$$y = \frac{1}{3}y^2 \implies y^2 - 3y = 0 \implies y(y - 3) = 0$$

$y = 0 \implies x = 0$；$y = 3 \implies x = 9$。交点为 $(0, 0)$ 和 $(9, 3)$。

区域表示为：
$$\boxed{\{(x, y) : 0 \leq y \leq 3,\; y^2 \leq x \leq 3y\}}$$

**(b)** 求交点：将 $x = 2y + 2$ 代入 $y = 4 - x^2$：
$$y = 4 - (2y + 2)^2 = 4 - 4y^2 - 8y - 4 = -4y^2 - 8y$$
$$4y^2 + 9y = 0 \implies y(4y + 9) = 0$$

$y = 0 \implies x = 2$；$y = -\frac{9}{4} \implies x = 2(-\frac{9}{4}) + 2 = -\frac{7}{2}$。

区域表示为：
$$\boxed{\left\{(x, y) : -\frac{7}{2} \leq x \leq 2,\; \frac{x - 2}{2} \leq y \leq 4 - x^2\right\}}$$

**知识点：** 求曲线交点，用不等式表示围成区域。

</details>

---

### 题目 9

**题目：** 设 $\theta$ 满足 $\sin \theta = \frac{3}{2}$（注：应为 $\sin\theta = \frac{1}{2}$ 或 $\frac{\sqrt{3}}{2}$ 等，此处按 $\sin\theta = \frac{\sqrt{3}}{2}$ 理解）且 $\cos \theta > 0$。求 $\theta$ 处的所有其他三角函数值。

> **注：** 原题中 $\sin\theta = \frac{3}{2}$ 无实数解，合理推断为 $\sin\theta = \frac{\sqrt{3}}{2}$ 或 $\sin\theta = \frac{1}{2}$。此处按 $\sin\theta = \frac{1}{2}$ 解答。

<details>
<summary>参考答案</summary>

**解：**

设 $\sin\theta = \frac{1}{2}$，$\cos\theta > 0$（第一象限）。

$$\cos\theta = \sqrt{1 - \sin^2\theta} = \sqrt{1 - \frac{1}{4}} = \sqrt{\frac{3}{4}} = \frac{\sqrt{3}}{2}$$

$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

$$\csc\theta = \frac{1}{\sin\theta} = 2, \quad \sec\theta = \frac{1}{\cos\theta} = \frac{2\sqrt{3}}{3}, \quad \cot\theta = \frac{1}{\tan\theta} = \sqrt{3}$$

**知识点：** 三角函数基本恒等式 $\sin^2\theta + \cos^2\theta = 1$。

</details>

---

### 题目 10

**题目：** 求满足下列条件的所有实数 $x$。

**(a)** $\cos x = \frac{\sqrt{3}}{2}$

**(b)** $2\cos^2 x + 3\sin^2 x = \frac{5}{4}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\cos x = \frac{\sqrt{3}}{2}$ 的解为：
$$\boxed{x = \pm\frac{\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}}$$

**(b)** 利用 $\sin^2 x = 1 - \cos^2 x$：
$$2\cos^2 x + 3(1 - \cos^2 x) = \frac{5}{4}$$
$$2\cos^2 x + 3 - 3\cos^2 x = \frac{5}{4}$$
$$-\cos^2 x = \frac{5}{4} - 3 = -\frac{7}{4}$$
$$\cos^2 x = \frac{7}{4}$$

但 $\cos^2 x \leq 1$，而 $\frac{7}{4} > 1$，矛盾。

$$\boxed{\text{无解}}$$

**知识点：** 三角方程的求解，$\cos x$ 的值域限制。

</details>

---

## 📝 本次知识点总结

1. **不等式求解**：将不等式化为标准形式，求零点，利用符号分析确定解集区间。
2. **绝对值不等式**：分情况讨论或利用 $|A| < a \iff -a < A < a$。
3. **直线方程**：平行线斜率相等，垂直线斜率互为负倒数，点斜式求方程。
4. **区域描绘**：将复合不等式拆分，逐一分析每个条件对应的几何区域。
5. **三角函数**：利用基本恒等式和象限信息求各三角函数值。
