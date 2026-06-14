> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week5.pdf`

---

# Tutorial 5 - 求导法则、隐函数微分与双曲函数

## 📌 知识点梳理
- 切线方程与法线
- 多项式插值（利用切线条件确定系数）
- 乘积法则、商法则、链式法则
- 隐函数求导
- 对数微分法
- 反函数的导数
- 双曲函数及其恒等式

---

### 题目 1

**题目：** 设 $f(x) = x^3 + 2x^2 - 2$。

**(a)** 求在点 $(-3, 7)$ 处的切线方程。

**(b)** 求曲线 $y = f(x)$ 上切线垂直于 $y$ 轴的所有点。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f'(x) = 3x^2 + 4x$，$f'(-3) = 27 - 12 = 15$。

切线方程：$y - 7 = 15(x + 3)$，即 $\boxed{y = 15x + 52}$。

**(b)** 切线垂直于 $y$ 轴即切线水平，$f'(x) = 0$：
$$3x^2 + 4x = 0 \implies x(3x + 4) = 0 \implies x = 0 \text{ 或 } x = -\frac{4}{3}$$

$f(0) = -2$，$f\left(-\frac{4}{3}\right) = -\frac{64}{27} + \frac{32}{9} - 2 = -\frac{64}{27} + \frac{96}{27} - \frac{54}{27} = -\frac{22}{27}$

$$\boxed{(0,\; -2) \text{ 和 } \left(-\frac{4}{3},\; -\frac{22}{27}\right)}$$

**知识点：** $f'(x_0)$ 为切线斜率；水平切线对应 $f'(x) = 0$。

</details>

---

### 题目 2（核心题）

**题目：** 求多项式 $f(x) = ax^3 + bx^2 + cx + d$ 满足以下条件：

**(a)** 在 $x = 0$ 处与 $y = \frac{1}{2}x - \frac{3}{2}$ 相切，在 $x = 1$ 处与 $y = \frac{15}{2}x - \frac{13}{2}$ 相切。

**(c)** 过原点，斜率为 1，且在 $x = 1$ 和 $x = -1$ 处有水平切线。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f(0) = d = -\frac{3}{2}$（切点在第一条线上），$f'(0) = c = \frac{1}{2}$。

$f(1) = a + b + c + d = \frac{15}{2} - \frac{13}{2} = 1$，$f'(1) = 3a + 2b + c = \frac{15}{2}$。

代入 $c = \frac{1}{2}$，$d = -\frac{3}{2}$：
$$a + b = 1 - \frac{1}{2} + \frac{3}{2} = 2$$
$$3a + 2b = \frac{15}{2} - \frac{1}{2} = 7$$

解得 $a = 3$，$b = -1$。

$$\boxed{f(x) = 3x^3 - x^2 + \frac{1}{2}x - \frac{3}{2}}$$

**(c)** $f(0) = 0 \implies d = 0$。$f'(0) = 1 \implies c = 1$。

$f'(1) = 3a + 2b + 1 = 0$，$f'(-1) = 3a - 2b + 1 = 0$。

两式相加：$6a + 2 = 0 \implies a = -\frac{1}{3}$。两式相减：$4b = 0 \implies b = 0$。

$$\boxed{f(x) = -\frac{1}{3}x^3 + x}$$

**知识点：** 切线条件给出函数值和导数值两个方程，联立求解系数。

</details>

---

### 题目 3

**题目：** 证明 $\frac{d}{dx}(\cos x) = -\sin x$。

<details>
<summary>参考答案</summary>

**证明：**

$$\frac{d}{dx}\cos x = \lim_{h \to 0} \frac{\cos(x+h) - \cos x}{h} = \lim_{h \to 0} \frac{\cos x \cos h - \sin x \sin h - \cos x}{h}$$

$$= \cos x \lim_{h \to 0} \frac{\cos h - 1}{h} - \sin x \lim_{h \to 0} \frac{\sin h}{h} = \cos x \cdot 0 - \sin x \cdot 1 = -\sin x \quad \blacksquare$$

**知识点：** 利用和角公式和两个重要极限。

</details>

---

### 题目 5（核心题）

**题目：** 用至少两种方法求下列函数的导数。

**(a)** $f(x) = \frac{2x - 5}{x}$ **(b)** $f(x) = (2x + 3)^2$ **(c)** $f(x) = x\sqrt[3]{x + 2}$

**(d)** $f(x) = e^{\sqrt{x}}$ **(e)** $f(x) = \ln\frac{1}{x}$ **(f)** $f(x) = \cos^2 x - \sin^2 x$

<details>
<summary>参考答案</summary>

**解：**

**(a)**
- 方法一（商法则）：$f'(x) = \frac{2 \cdot x - (2x - 5) \cdot 1}{x^2} = \frac{5}{x^2}$
- 方法二（化简）：$f(x) = 2 - \frac{5}{x} = 2 - 5x^{-1}$，$f'(x) = 5x^{-2} = \frac{5}{x^2}$

**(b)**
- 方法一（链式法则）：$f'(x) = 2(2x + 3) \cdot 2 = 4(2x + 3)$
- 方法二（展开）：$f(x) = 4x^2 + 12x + 9$，$f'(x) = 8x + 12 = 4(2x + 3)$

**(c)**
- 方法一（乘积法则）：$f(x) = x(x+2)^{1/3}$，$f'(x) = (x+2)^{1/3} + x \cdot \frac{1}{3}(x+2)^{-2/3} = (x+2)^{-2/3}\left[(x+2) + \frac{x}{3}\right] = \frac{4x + 6}{3(x+2)^{2/3}}$
- 方法二（化简后求导）：$f(x) = x^{4/3}(1 + 2/x)^{1/3}$... 方法一更直接。

**(d)**
- 方法一（链式法则）：$f'(x) = e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}} = \frac{e^{\sqrt{x}}}{2\sqrt{x}}$
- 方法二（对数微分法）：$\ln f = \sqrt{x}$，$\frac{f'}{f} = \frac{1}{2\sqrt{x}}$，$f' = \frac{e^{\sqrt{x}}}{2\sqrt{x}}$

**(e)**
- 方法一（链式法则）：$f'(x) = \frac{1}{1/x} \cdot \left(-\frac{1}{x^2}\right) = -\frac{1}{x}$
- 方法二（化简）：$f(x) = -\ln x$，$f'(x) = -\frac{1}{x}$

**(f)**
- 方法一（直接求导）：$f'(x) = -2\cos x \sin x - 2\sin x \cos x = -4\sin x \cos x = -2\sin 2x$
- 方法二（化简）：$f(x) = \cos 2x$，$f'(x) = -2\sin 2x$

**知识点：** 同一问题可用不同求导方法验证结果，化简后再求导往往更简便。

</details>

---

### 题目 8

**题目：** 利用求导法则计算下列函数的导数。

**(a)** $f(x) = e^{nx}$，$n \in \mathbb{Z}$

**(b)** $f(x) = e^{2x} - x^{1/3}$

**(c)** $f(x) = x^2 g(x) + \sin x + \sqrt{\frac{x + \tan x}{xg(x)}}$，$g(x)$ 可微且 $g(x) \neq 0$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $f'(x) = ne^{nx}$

**(b)** $f'(x) = 2e^{2x} - \frac{1}{3}x^{-2/3} = 2e^{2x} - \frac{1}{3x^{2/3}}$

**(c)** 逐项求导：
$$f'(x) = 2xg(x) + x^2 g'(x) + \cos x + \frac{d}{dx}\sqrt{\frac{x + \tan x}{xg(x)}}$$

最后一项用链式法则和商法则：
$$\frac{d}{dx}\sqrt{\frac{x + \tan x}{xg(x)}} = \frac{1}{2}\sqrt{\frac{xg(x)}{x + \tan x}} \cdot \frac{(1 + \sec^2 x) \cdot xg(x) - (x + \tan x)(g(x) + xg'(x))}{(xg(x))^2}$$

**知识点：** 链式法则、乘积法则、商法则的综合运用。

</details>

---

### 题目 10

**题目：** 设 $a$ 为正实数。

**(a)** 证明 $\lim_{x \to +\infty} \left(1 + \frac{a}{x}\right)^x = e^a$

**(b)** 求 $\lim_{x \to 0} (1 + ax)^{1/x}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 令 $t = \frac{x}{a}$，则 $x = at$，当 $x \to +\infty$ 时 $t \to +\infty$：
$$\left(1 + \frac{a}{x}\right)^x = \left(1 + \frac{1}{t}\right)^{at} = \left[\left(1 + \frac{1}{t}\right)^t\right]^a \to e^a$$

**(b)** 令 $t = \frac{1}{x}$，当 $x \to 0$ 时 $t \to \infty$：
$$(1 + ax)^{1/x} = \left(1 + \frac{a}{t}\right)^t \to e^a$$

$$\boxed{e^a}$$

**知识点：** 重要极限 $\lim_{t \to \infty}\left(1 + \frac{1}{t}\right)^t = e$ 的推广形式。

</details>

---

### 题目 11

**题目：** 设 $F(x) = f(xf(xf(x)))$，其中 $f(1) = 2$，$f(2) = 3$，$f'(1) = 4$，$f'(2) = 5$，$f'(3) = 6$。求 $F'(1)$。

<details>
<summary>参考答案</summary>

**解：**

逐步计算：
- $f(1) = 2$
- $1 \cdot f(1) = 1 \cdot 2 = 2$
- $f(2) = 3$
- $2 \cdot f(2) = 2 \cdot 3 = 6$... 等等，让我重新理解。

$F(x) = f(x \cdot f(x \cdot f(x)))$

在 $x = 1$ 处：
- 内层：$f(1) = 2$
- 中层：$1 \cdot f(1) = 2$，$f(2) = 3$
- 外层：$1 \cdot f(2) = 3$，$F(1) = f(3)$... 但 $f(3)$ 未给出。

重新理解：$F(x) = f(xf(xf(x)))$

设 $u(x) = xf(x)$，$v(x) = xf(v(x)) = xf(xf(x))$，$F(x) = f(v(x))$。

在 $x = 1$ 处：
- $u(1) = 1 \cdot f(1) = 2$
- $v(1) = 1 \cdot f(u(1)) = f(2) = 3$
- $F(1) = f(v(1)) = f(3)$

$F'(x) = f'(v(x)) \cdot v'(x)$

$v(x) = x \cdot f(xf(x))$，$v'(x) = f(xf(x)) + x \cdot f'(xf(x)) \cdot \frac{d}{dx}[xf(x)]$

$\frac{d}{dx}[xf(x)] = f(x) + xf'(x)$

在 $x = 1$ 处：
- $f(1) + 1 \cdot f'(1) = 2 + 4 = 6$
- $f(f(1)) = f(2) = 3$
- $f'(f(1)) \cdot 6 = f'(2) \cdot 6 = 5 \cdot 6 = 30$
- $v'(1) = 3 + 1 \cdot 30 = 33$

$F'(1) = f'(3) \cdot 33 = 6 \cdot 33 = \boxed{198}$

**知识点：** 多层复合函数的链式法则，需从内到外逐层计算。

</details>

---

### 题目 13（核心题）

**题目：** 求下列隐函数方程确定的导数。

**(a)** $y^2 - x^4 = 3$，在 $(1, 2)$ 处

**(b)** $y^3 + xy + x^2 = 1$，在 $(1, 0)$ 处

**(c)** $3xy^2 + 5xy = 8$，在 $(1, 1)$ 处

<details>
<summary>参考答案</summary>

**解：**

**(a)** 两边对 $x$ 求导：$2yy' - 4x^3 = 0 \implies y' = \frac{2x^3}{y}$

在 $(1, 2)$ 处：$y' = \frac{2}{2} = \boxed{1}$

**(b)** 两边对 $x$ 求导：$3y^2 y' + y + xy' + 2x = 0 \implies y'(3y^2 + x) = -(y + 2x)$

在 $(1, 0)$ 处：$y'(0 + 1) = -(0 + 2) \implies y' = \boxed{-2}$

**(c)** 两边对 $x$ 求导：$3y^2 + 6xyy' + 5y + 5xy' = 0 \implies y'(6xy + 5x) = -(3y^2 + 5y)$

在 $(1, 1)$ 处：$y'(6 + 5) = -(3 + 5) \implies y' = \boxed{-\frac{8}{11}}$

**知识点：** 隐函数求导——对方程两边同时对 $x$ 求导，将 $y$ 视为 $x$ 的函数。

</details>

---

### 题目 14

**题目：** 用对数微分法求导。

**(a)** $y = \frac{e^{2x} \sqrt[3]{x^2 \sin x}}{x^2 - 1}$

**(b)** $y = (\cos x)^{x^2}$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 取对数：
$$\ln y = 2x + \frac{1}{3}(2\ln x + \ln(\sin x)) - \ln(x^2 - 1)$$

$$= 2x + \frac{2}{3}\ln x + \frac{1}{3}\ln(\sin x) - \ln(x^2 - 1)$$

两边对 $x$ 求导：
$$\frac{y'}{y} = 2 + \frac{2}{3x} + \frac{\cos x}{3\sin x} - \frac{2x}{x^2 - 1} = 2 + \frac{2}{3x} + \frac{\cot x}{3} - \frac{2x}{x^2 - 1}$$

$$\boxed{y' = y \left(2 + \frac{2}{3x} + \frac{\cot x}{3} - \frac{2x}{x^2 - 1}\right)}$$

**(b)** 取对数：$\ln y = x^2 \ln(\cos x)$

$$\frac{y'}{y} = 2x \ln(\cos x) + x^2 \cdot \frac{-\sin x}{\cos x} = 2x \ln(\cos x) - x^2 \tan x$$

$$\boxed{y' = (\cos x)^{x^2} (2x \ln(\cos x) - x^2 \tan x)}$$

**知识点：** 对数微分法适用于积、商、幂的复杂组合，取对数后化为加减运算。

</details>

---

### 题目 15

**题目：**

**(a)** 设 $f$ 是可微的一一映射，其反函数 $f^{-1}$ 也可微。证明 $(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$。

**(b)** 若 $f(4) = 5$，$f'(4) = \frac{2}{3}$，求 $(f^{-1})'(5)$。

<details>
<summary>参考答案</summary>

**解：**

**(a)** 设 $y = f^{-1}(x)$，则 $f(y) = x$。两边对 $x$ 求导：
$$f'(y) \cdot y' = 1 \implies y' = \frac{1}{f'(y)} = \frac{1}{f'(f^{-1}(x))}$$

**(b)** $(f^{-1})'(5) = \frac{1}{f'(f^{-1}(5))} = \frac{1}{f'(4)} = \frac{1}{2/3} = \boxed{\frac{3}{2}}$

**知识点：** 反函数导数公式——反函数的导数等于原函数导数在对应点处的倒数。

</details>

---

### 题目 16

**题目：** 证明双曲函数的下列恒等式。

**(a)** $\cosh(-x) = \cosh(x)$ **(b)** $\cosh(x+y) = \cosh x \cosh y + \sinh x \sinh y$

**(c)** $\sinh(-x) = -\sinh(x)$ **(e)** $\cosh^{-1}(x) = \ln(x + \sqrt{x^2 - 1})$ **(f)** $\sinh^{-1}(x) = \ln(x + \sqrt{x^2 + 1})$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\cosh(-x) = \frac{e^{-x} + e^{-(-x)}}{2} = \frac{e^{-x} + e^x}{2} = \cosh(x)$ $\blacksquare$

**(b)** 右边 $= \frac{e^x + e^{-x}}{2} \cdot \frac{e^y + e^{-y}}{2} + \frac{e^x - e^{-x}}{2} \cdot \frac{e^y - e^{-y}}{2}$

$= \frac{1}{4}[(e^{x+y} + e^{x-y} + e^{-x+y} + e^{-x-y}) + (e^{x+y} - e^{x-y} - e^{-x+y} + e^{-x-y})]$

$= \frac{1}{4}[2e^{x+y} + 2e^{-(x+y)}] = \frac{e^{x+y} + e^{-(x+y)}}{2} = \cosh(x+y)$ $\blacksquare$

**(c)** $\sinh(-x) = \frac{e^{-x} - e^{-(-x)}}{2} = \frac{e^{-x} - e^x}{2} = -\sinh(x)$ $\blacksquare$

**(e)** 设 $y = \cosh^{-1}(x)$，则 $\cosh y = x$，$\frac{e^y + e^{-y}}{2} = x$，$e^{2y} - 2xe^y + 1 = 0$。

$e^y = x \pm \sqrt{x^2 - 1}$。因 $y \geq 0$（$\cosh^{-1}$ 的值域），$e^y \geq 1$，取正号：

$$y = \ln(x + \sqrt{x^2 - 1}) \quad \blacksquare$$

**(f)** 设 $y = \sinh^{-1}(x)$，则 $\sinh y = x$，$\frac{e^y - e^{-y}}{2} = x$，$e^{2y} - 2xe^y - 1 = 0$。

$e^y = x + \sqrt{x^2 + 1}$（取正号，因 $e^y > 0$）。

$$y = \ln(x + \sqrt{x^2 + 1}) \quad \blacksquare$$

**知识点：** 双曲函数由指数函数定义，其恒等式可通过指数运算直接验证。

</details>

---

## 📝 本次知识点总结

1. **切线方程**：利用 $f'(x_0)$ 求斜率，点斜式写出方程。
2. **求导法则**：乘积法则、商法则、链式法则是求导的基本工具。
3. **隐函数求导**：对方程两边同时对 $x$ 求导，$y$ 视为 $x$ 的函数。
4. **对数微分法**：适用于复杂的积、商、幂形式，先取对数再求导。
5. **反函数导数**：$(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$。
6. **双曲函数**：定义基于指数函数，性质与三角函数有相似之处。
