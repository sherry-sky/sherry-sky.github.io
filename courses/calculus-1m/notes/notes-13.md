> **📎 源文件：** 无对应 PDF（基于课程进度编写）

---

# Week 13: 幂级数与 Taylor 级数

## 📌 知识点概述

本周学习幂级数的概念、收敛半径与收敛区间的求法，以及将函数表示为幂级数的方法（几何级数法、逐项求导、逐项积分）。同时学习 Taylor 级数和 Maclaurin 级数的定义、常见展开式，以及 Taylor 不等式与余项估计。

## 📖 核心内容

### 定义

**幂级数**：形如下列的级数：

$$f(x) = \sum_{n=0}^{\infty} c_n (x - x_0)^n = c_0 + c_1(x - x_0) + c_2(x - x_0)^2 + \cdots$$

其中 $x$ 是变量，$c_n$ 是系数，$x_0$ 是中心点。对每个固定的 $x$，幂级数成为数值级数。

**收敛半径与收敛区间**：

对幂级数 $\sum_{n=0}^{\infty} c_n (x - a)^n$，有且仅有三种可能：
1. 仅在 $x = a$ 处收敛（$R = 0$）
2. 对所有 $x \in \mathbb{R}$ 收敛（$R = \infty$）
3. 存在 $R > 0$，使得 $|x - a| < R$ 时收敛，$|x - a| > R$ 时发散

$R$ 称为**收敛半径**。收敛区间可以是 $(a-R, a+R)$、$[a-R, a+R)$、$(a-R, a+R]$ 或 $[a-R, a+R]$。

**Taylor 级数**：若 $f$ 在 $x = a$ 处有各阶导数，则 Taylor 级数为：

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

当 $a = 0$ 时称为 **Maclaurin 级数**：

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n$$

**Taylor 多项式与余项**：

$$f(x) = T_n(x) + R_n(x)$$

其中 $T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k$ 为 $n$ 阶 Taylor 多项式，$R_n(x)$ 为余项。

### 定理

**定理 1（幂级数的逐项运算）**：若 $\sum_{n=0}^{\infty} c_n (x - a)^n$ 的收敛半径为 $R > 0$，则在 $(a - R, a + R)$ 内：

1. **逐项求导**：$f'(x) = \sum_{n=1}^{\infty} n c_n (x - a)^{n-1}$

2. **逐项积分**：$\int f(x)\,dx = C + \sum_{n=0}^{\infty} c_n \frac{(x - a)^{n+1}}{n+1}$

3. 求导和积分后的级数收敛半径不变（端点可能改变）。

**定理 2（Taylor 级数收敛定理）**：若 $f(x) = T_n(x) + R_n(x)$，且对所有 $|x - a| < R$，有 $\lim_{n \to \infty} R_n(x) = 0$，则 $f(x)$ 在 $(a - R, a + R)$ 上等于其 Taylor 级数之和。

**定理 3（Taylor 不等式）**：若 $|f^{(n+1)}(x)| \leq M$ 对所有 $|x - a| < d$ 成立，则：

$$|R_n(x)| \leq \frac{M}{(n+1)!}|x - a|^{n+1} \quad \text{对所有 } |x - a| < d$$

**引理**：对任意 $x \in \mathbb{R}$，$\lim_{n \to \infty} \frac{|x|^n}{(n+1)!} = 0$。

### 重要公式

**常见 Maclaurin 级数**：

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (x \in \mathbb{R})$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (x \in \mathbb{R})$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (x \in \mathbb{R})$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad (|x| < 1)$$

$$\ln(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} x^k = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (x \in (-1, 1])$$

$$\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} x^{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots \quad (|x| < 1)$$

### 典型例题

**例 1.** 求幂级数 $\sum_{n=0}^{\infty} \frac{(x-3)^n}{n}$ 的收敛区间。

**解.** 用比值判别法：

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \frac{|x-3|^{n+1}}{n+1} \cdot \frac{n}{|x-3|^n} = \lim_{n \to \infty} \frac{n}{n+1}|x-3| = |x-3|$$

收敛条件：$|x - 3| < 1$，即 $2 < x < 4$，收敛半径 $R = 1$。

**端点检验**：
- $x = 4$：$\sum_{n=1}^{\infty} \frac{1}{n}$，调和级数，发散。
- $x = 2$：$\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$，交错调和级数，由 Leibniz 判别法收敛。

收敛区间为 $[2, 4)$。$\blacksquare$

---

**例 2.** 将 $f(x) = \frac{1}{1-x}$ 和 $g(x) = \frac{1}{(1-x)^2}$ 表示为以 $x = 0$ 为中心的幂级数。

**解.**

**$f(x)$ 的展开**：利用几何级数，

$$f(x) = \frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad (|x| < 1)$$

**$g(x)$ 的展开**：注意到 $g(x) = f'(x) = \frac{d}{dx}\left(\frac{1}{1-x}\right)$，逐项求导：

$$g(x) = \frac{d}{dx} \sum_{n=0}^{\infty} x^n = \sum_{n=1}^{\infty} n x^{n-1} = \sum_{k=0}^{\infty} (k+1) x^k \quad (|x| < 1)$$

收敛区间为 $(-1, 1)$。$\blacksquare$

---

**例 3.** 求 $f(x) = \ln(1+x)$ 的 Maclaurin 级数，并确定收敛区间。

**解.** $f'(x) = \frac{1}{1+x}$，利用几何级数（$r = -x$）：

$$f'(x) = \frac{1}{1+x} = \frac{1}{1-(-x)} = \sum_{n=0}^{\infty} (-1)^n x^n \quad (|x| < 1)$$

逐项积分：

$$f(x) = \int_0^x \sum_{n=0}^{\infty} (-1)^n t^n \,dt = \sum_{n=0}^{\infty} \frac{(-1)^n}{n+1} x^{n+1} + C$$

由 $f(0) = \ln 1 = 0$，得 $C = 0$。令 $k = n + 1$：

$$\ln(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} x^k = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$$

收敛半径 $R = 1$。在 $x = 1$ 处为交错调和级数（收敛），在 $x = -1$ 处为负调和级数（发散）。

收敛区间为 $(-1, 1]$。$\blacksquare$

---

**例 4.** 证明 $e^x$ 等于其 Maclaurin 级数之和（对所有 $x \in \mathbb{R}$）。

**解.** $f(x) = e^x$ 的各阶导数均为 $f^{(n)}(x) = e^x$，$f^{(n)}(0) = 1$。

Maclaurin 级数为 $\sum_{n=0}^{\infty} \frac{x^n}{n!}$。

对任意 $d > 0$，当 $|x| < d$ 时，$|f^{(n+1)}(x)| = e^x < e^d$，取 $M = e^d$。

由 Taylor 不等式：

$$|R_n(x)| \leq \frac{e^d}{(n+1)!}|x|^{n+1}$$

由引理 $\lim_{n \to \infty} \frac{|x|^{n+1}}{(n+1)!} = 0$，故 $\lim_{n \to \infty} |R_n(x)| = 0$。

因此 $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ 对所有 $x \in \mathbb{R}$ 成立。$\blacksquare$

---

**例 5.** 求 $f(x) = \frac{1}{x+5}$ 在 $a = -2$ 处的 Taylor 级数及收敛区间。

**解.** 利用几何级数，将 $f(x)$ 改写为以 $(x+2)$ 为变量的形式：

$$f(x) = \frac{1}{x+5} = \frac{1}{3 + (x+2)} = \frac{1}{3} \cdot \frac{1}{1 + \frac{x+2}{3}} = \frac{1}{3} \cdot \frac{1}{1 - \left(-\frac{x+2}{3}\right)}$$

利用几何级数 $\frac{1}{1-r} = \sum_{n=0}^{\infty} r^n$，其中 $r = -\frac{x+2}{3}$：

$$f(x) = \frac{1}{3} \sum_{n=0}^{\infty} \left(-\frac{x+2}{3}\right)^n = \sum_{n=0}^{\infty} \frac{(-1)^n}{3^{n+1}} (x+2)^n$$

收敛条件：$\left|\frac{x+2}{3}\right| < 1$，即 $|x + 2| < 3$，$R = 3$。

端点检验：$x = 1$ 和 $x = -5$ 时，级数变为 $\sum \frac{(\pm 1)^n}{3}$（或 $\sum \frac{(-1)^n (\mp 1)^n}{3}$），通项不趋于零，发散。

收敛区间为 $(-5, 1)$。$\blacksquare$

## 📝 本周知识点总结

1. 幂级数的收敛区间通过比值判别法或根值判别法求收敛半径 $R$，端点需单独检验
2. 已知级数可通过**代入**、**逐项求导**、**逐项积分**和**乘法**得到新的幂级数表示
3. 求导和积分不改变收敛半径，但可能改变端点的敛散性
4. Taylor 级数收敛到原函数的充要条件是余项 $R_n(x) \to 0$
5. Taylor 不等式 $|R_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$ 是估计近似误差的主要工具
6. 常见 Maclaurin 级数（$e^x$、$\sin x$、$\cos x$、$\frac{1}{1-x}$、$\ln(1+x)$、$\arctan x$）是基础工具，应熟练掌握
7. 利用恒等式（如 $\sin^2 x = \frac{1 - \cos 2x}{2}$）可简化 Taylor 级数的推导
