> **📎 源文件：** `旧资料/09 Lecture/Week 9 - Class 17-Trigonometric-Integrals.pdf`, `旧资料/09 Lecture/Week 9 - Class 18-PartialFractions.pdf`

---

# Week 9: 积分技巧（一）

## 📌 知识点概述

本周学习两种重要的积分技巧：（1）三角积分——处理含 $\sin$、$\cos$、$\tan$、$\sec$ 等三角函数的积分，包括利用三角恒等式化简和特定的策略；（2）部分分式法——将有理函数分解为简单分式之和再进行积分。同时涉及三角代换和广义积分的初步概念。

## 📖 核心内容

### 定义

**有理函数：** 两个多项式之比 $\dfrac{p(x)}{q(x)}$。

**部分分式分解：** 将有理函数写成若干简单分式之和的方法，分四种情形：
- **情形 1**：分母有不同的线性因子 $(a_1x + b_1)\cdots(a_nx + b_n)$
- **情形 2**：分母有重复的线性因子 $(ax + b)^r$
- **情形 3**：分母有不可约二次因子 $ax^2 + bx + c$（$\Delta < 0$）
- **情形 4**：分母有重复的不可约二次因子 $(ax^2 + bx + c)^r$

### 定理

**部分分式定理：** 设 $\dfrac{p(x)}{q(x)}$ 满足 $\deg(p) < \deg(q)$，则 $q(x)$ 的每种因子对应特定的分式形式：

| 因子类型 | 对应分式 |
|----------|----------|
| 线性因子 $(ax + b)$ | $\dfrac{A}{ax + b}$ |
| 重复线性因子 $(ax + b)^r$ | $\dfrac{B_1}{ax+b} + \dfrac{B_2}{(ax+b)^2} + \cdots + \dfrac{B_r}{(ax+b)^r}$ |
| 不可约二次因子 $(ax^2+bx+c)$ | $\dfrac{Cx + D}{ax^2 + bx + c}$ |
| 重复二次因子 $(ax^2+bx+c)^r$ | $\dfrac{C_1x+D_1}{ax^2+bx+c} + \cdots + \dfrac{C_rx+D_r}{(ax^2+bx+c)^r}$ |

### 重要公式

**三角恒等式（用于积分）：**
$$\sin^2 x = \frac{1 - \cos(2x)}{2}, \quad \cos^2 x = \frac{1 + \cos(2x)}{2}$$
$$\tan^2 x = \sec^2 x - 1$$
$$\sin A \cos B = \frac{1}{2}[\sin(A-B) + \sin(A+B)]$$
$$\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$$
$$\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$$

**三角积分策略：**

| 被积函数形式 | 策略 |
|---|---|
| $\sin^m x \cos^n x$，$n$ 为奇数 | 保留一个 $\cos x$，其余用 $\cos^2 x = 1 - \sin^2 x$ 替换，令 $u = \sin x$ |
| $\sin^m x \cos^n x$，$m$ 为奇数 | 保留一个 $\sin x$，其余用 $\sin^2 x = 1 - \cos^2 x$ 替换，令 $u = \cos x$ |
| $\tan^m x \sec^{2k} x$（$k \geq 2$） | 保留 $\sec^2 x$，其余用 $\sec^2 x = 1 + \tan^2 x$ 替换，令 $u = \tan x$ |
| $\tan^{2k+1} x \sec^n x$（$k \geq 1$） | 保留 $\sec x \tan x$，其余用 $\tan^2 x = \sec^2 x - 1$ 替换，令 $u = \sec x$ |

**三角代换：**

| 被积函数含 | 代换 | 恒等式 |
|---|---|---|
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ |

---

### 典型例题

**例 1.** 求 $\int \sin^5 x \cos^2 x\,dx$。

**解.** $\cos$ 的幂次为偶数，$\sin$ 的幂次为奇数。保留一个 $\sin x$，将 $\sin^4 x$ 用 $\cos x$ 表示：
$$\sin^5 x \cos^2 x = (\sin^2 x)^2 \cos^2 x \sin x = (1 - \cos^2 x)^2 \cos^2 x \sin x$$

令 $u = \cos x$，$du = -\sin x\,dx$：
$$\int (1 - u^2)^2 u^2 (-du) = -\int (u^2 - 2u^4 + u^6)\,du = -\frac{u^3}{3} + \frac{2u^5}{5} - \frac{u^7}{7} + C$$
$$= -\frac{\cos^3 x}{3} + \frac{2\cos^5 x}{5} - \frac{\cos^7 x}{7} + C$$

---

**例 2.** 求 $\int \tan^5 x \sec^7 x\,dx$。

**解.** $\tan$ 的幂次为奇数，保留 $\sec x \tan x$，将 $\tan^4 x$ 用 $\sec x$ 表示：
$$\tan^5 x \sec^7 x = (\tan^2 x)^2 \sec^6 x \cdot \sec x \tan x = (\sec^2 x - 1)^2 \sec^6 x \cdot \sec x \tan x$$

令 $u = \sec x$，$du = \sec x \tan x\,dx$：
$$\int (u^2 - 1)^2 u^6\,du = \int (u^{10} - 2u^8 + u^6)\,du = \frac{u^{11}}{11} - \frac{2u^9}{9} + \frac{u^7}{7} + C$$
$$= \frac{\sec^{11} x}{11} - \frac{2\sec^9 x}{9} + \frac{\sec^7 x}{7} + C$$

---

**例 3.** 求 $\int \dfrac{2x^2 - x + 4}{x^3 + 4x}\,dx$。

**解.** 分母因式分解：$x^3 + 4x = x(x^2 + 4)$。

部分分式分解：
$$\frac{2x^2 - x + 4}{x(x^2 + 4)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 4}$$

通分比较分子：$2x^2 - x + 4 = A(x^2 + 4) + (Bx + C)x = (A + B)x^2 + Cx + 4A$

比较系数：
- $x^2$：$A + B = 2$
- $x$：$C = -1$
- 常数：$4A = 4 \implies A = 1$，$B = 1$

$$\int \left(\frac{1}{x} + \frac{x - 1}{x^2 + 4}\right)dx = \int \frac{1}{x}\,dx + \int \frac{x}{x^2 + 4}\,dx - \int \frac{1}{x^2 + 4}\,dx$$
$$= \ln|x| + \frac{1}{2}\ln(x^2 + 4) - \frac{1}{2}\arctan\frac{x}{2} + C$$

---

**例 4.** 求 $\int \dfrac{4x}{(x^3 - x^2 - x + 1)(x - 1)}\,dx$。

**解.** 分母因式分解：$(x^3 - x^2 - x + 1)(x - 1) = (x-1)^2(x+1)(x-1) = (x-1)^3(x+1)$。

部分分式分解：
$$\frac{4x}{(x-1)^3(x+1)} = \frac{A}{x+1} + \frac{B}{x-1} + \frac{C}{(x-1)^2} + \frac{D}{(x-1)^3}$$

通分比较分子，解得 $A = \dfrac{1}{2}$，$B = -\dfrac{1}{2}$，$C = 1$，$D = 2$：
$$\int \left[\frac{1}{2(x+1)} - \frac{1}{2(x-1)} + \frac{1}{(x-1)^2} + \frac{2}{(x-1)^3}\right]dx$$
$$= \frac{1}{2}\ln|x+1| - \frac{1}{2}\ln|x-1| - \frac{1}{x-1} - \frac{1}{(x-1)^2} + C$$

---

**例 5.** 求 $\int \sin(4x)\cos(5x)\,dx$。

**解.** 利用积化和差公式：
$$\sin(4x)\cos(5x) = \frac{1}{2}[\sin(4x - 5x) + \sin(4x + 5x)] = \frac{1}{2}[-\sin x + \sin(9x)]$$

积分：
$$\int \sin(4x)\cos(5x)\,dx = \frac{1}{2}\left[\cos x - \frac{1}{9}\cos(9x)\right] + C$$

---

## 📝 本周知识点总结

1. **三角积分**：根据被积函数中 $\sin$、$\cos$ 幂次的奇偶性选择不同策略。
2. **$\tan$-$\sec$ 型积分**：利用 $\tan^2 x + 1 = \sec^2 x$ 进行转化。
3. **积化和差**：将 $\sin A \cos B$ 等乘积化为和差形式再积分。
4. **部分分式法**：将有理函数分解为简单分式之和。
5. **四种情形**：线性因子、重复线性因子、二次因子、重复二次因子。
6. **三角代换**：含 $\sqrt{a^2 - x^2}$、$\sqrt{a^2 + x^2}$、$\sqrt{x^2 - a^2}$ 的积分。
7. **LIATE 规则**：分部积分中选择 $u$ 的优先级参考。
