> **📎 源文件：** `旧资料/02 Workshop/workshop 12.jpg`

---

# Workshop 12 - 级数收敛性深入：Abel 变换与三角级数

##  知识点梳理
- Abel 变换（求和的分部积分）
- Lagrange 三角恒等式
- Dirichlet 判别法
- 三角级数 $\sum \dfrac{(-1)^n \cos(2n)}{2n}$ 的收敛性证明
- 级数收敛性的综合应用

---

### 题目 1
**题目：** 证明级数 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n \sin^2(n)}{n}$ 收敛。

<details>
<summary>参考答案</summary>

**解：**

**第一步：三角恒等式分解**

利用 $\sin^2(n) = \dfrac{1 - \cos(2n)}{2}$：

$$\sum_{n=1}^{+\infty} \frac{(-1)^n \sin^2(n)}{n} = \sum_{n=1}^{+\infty} \frac{(-1)^n}{2n} - \sum_{n=1}^{+\infty} \frac{(-1)^n \cos(2n)}{2n}$$

**第二步：第一个级数收敛**

$\displaystyle\sum_{n=1}^{+\infty} \dfrac{(-1)^n}{2n}$ 是交错级数，$a_n = \dfrac{1}{2n}$ 递减趋于 0，由莱布尼茨判别法收敛。

**第三步：第二个级数收敛（Abel 变换）**

需要证明 $\displaystyle\sum_{n=1}^{+\infty} \dfrac{(-1)^n \cos(2n)}{2n}$ 收敛。

令 $a_n = \dfrac{(-1)^n}{2n}$，$b_n = \cos(2n) = B_n - B_{n-1}$，其中：

$$B_n = \sum_{k=1}^n \cos(2k)$$

由 Lagrange 三角恒等式：

$$B_n = \sum_{k=1}^n \cos(2k) = -\frac{1}{2} + \frac{\sin(2n+1)}{2\sin 1}$$

因此 $|B_n| \leq \dfrac{1}{2} + \dfrac{1}{2|\sin 1|}$，即 $\{B_n\}$ **有界**。

**Abel 变换（求和的分部积分）：**

$$S_N = \sum_{n=1}^N a_n b_n = a_N B_N - a_1 B_0 + \sum_{n=1}^{N-1}(a_n - a_{n+1})B_n$$

Wait, let me redo this more carefully. The standard Abel transformation is:

$$S_N = \sum_{n=1}^N a_n b_n = a_N B_N - \sum_{n=1}^{N-1}(a_{n+1} - a_n)B_n$$

where $B_n = \sum_{k=1}^n b_k$ and $B_0 = 0$.

Actually, using $b_n = B_n - B_{n-1}$:

$$S_N = \sum_{n=1}^N a_n(B_n - B_{n-1}) = \sum_{n=1}^N a_n B_n - \sum_{n=1}^N a_n B_{n-1}$$

$$= \sum_{n=1}^N a_n B_n - \sum_{n=0}^{N-1} a_{n+1} B_n = a_N B_N - a_1 B_0 + \sum_{n=1}^{N-1}(a_n - a_{n+1})B_n$$

Since $B_0 = 0$:

$$S_N = a_N B_N + \sum_{n=1}^{N-1}(a_n - a_{n+1})B_n$$

**分析各项：**

1. $a_N B_N = \dfrac{(-1)^N}{2N} B_N \to 0$（因为 $B_N$ 有界，$a_N \to 0$）

2. $\sum_{n=1}^{N-1}(a_n - a_{n+1})B_n$：

$$a_n - a_{n+1} = \frac{(-1)^n}{2n} - \frac{(-1)^{n+1}}{2(n+1)} = \frac{(-1)^n}{2n} + \frac{(-1)^n}{2(n+1)} = \frac{(-1)^n(2n+1)}{2n(n+1)}$$

$$|a_n - a_{n+1}| = \frac{2n+1}{2n(n+1)} \sim \frac{1}{n}$$

Hmm, this doesn't give absolute convergence directly. Let me reconsider.

Actually, let me use a cleaner approach. We have $a_n = \dfrac{(-1)^n}{2n}$ and we want to show $\sum a_n \cos(2n)$ converges.

Write $(-1)^n \cos(2n) = \cos(n\pi)\cos(2n) = \dfrac{1}{2}[\cos(n(\pi+2)) + \cos(n(\pi-2))]$.

So $\sum \dfrac{(-1)^n \cos(2n)}{2n} = \dfrac{1}{4}\sum \dfrac{\cos(n(\pi+2))}{n} + \dfrac{1}{4}\sum \dfrac{\cos(n(\pi-2))}{n}$.

Each is of the form $\sum \dfrac{\cos(\alpha n)}{n}$ with $\alpha = \pi \pm 2$. Since $\pi + 2$ and $\pi - 2$ are not multiples of $2\pi$, by Dirichlet's test these converge.

**Dirichlet 判别法：** 若 $\sum b_n$ 的部分和有界，$a_n$ 单调趋于 0，则 $\sum a_n b_n$ 收敛。

这里 $a_n = \dfrac{1}{n}$ 单调趋于 0，$b_n = \cos(\alpha n)$ 的部分和 $\sum_{k=1}^n \cos(\alpha k) = -\dfrac{1}{2} + \dfrac{\sin((2n+1)\alpha/2)}{2\sin(\alpha/2)}$ 有界（当 $\alpha$ 不是 $2\pi$ 的整数倍时）。

因此两个级数都收敛，原级数**收敛**。$\blacksquare$

**知识点：** Abel 变换是级数的"分部积分"；Dirichlet 判别法处理有界部分和与单调趋于零序列的乘积。

</details>

---

### 题目 2
**题目：** 证明 Lagrange 三角恒等式：$\displaystyle\sum_{k=1}^n \cos(k\theta) = -\frac{1}{2} + \frac{\sin\left(\left(n + \frac{1}{2}\right)\theta\right)}{2\sin\frac{\theta}{2}}$（$\theta \neq 2m\pi$）。

<details>
<summary>参考答案</summary>

**证明：**

利用积化和差公式：$2\sin\dfrac{\theta}{2}\cos(k\theta) = \sin\left(k\theta + \dfrac{\theta}{2}\right) - \sin\left(k\theta - \dfrac{\theta}{2}\right)$

$$= \sin\left(\left(k + \frac{1}{2}\right)\theta\right) - \sin\left(\left(k - \frac{1}{2}\right)\theta\right)$$

对 $k = 1, 2, \ldots, n$ 求和（telescoping）：

$$2\sin\frac{\theta}{2}\sum_{k=1}^n \cos(k\theta) = \sin\left(\left(n + \frac{1}{2}\right)\theta\right) - \sin\frac{\theta}{2}$$

$$\sum_{k=1}^n \cos(k\theta) = \frac{\sin\left(\left(n + \frac{1}{2}\right)\theta\right)}{2\sin\frac{\theta}{2}} - \frac{1}{2}$$

$$\boxed{\sum_{k=1}^n \cos(k\theta) = -\frac{1}{2} + \frac{\sin\left(\left(n + \frac{1}{2}\right)\theta\right)}{2\sin\frac{\theta}{2}}} \quad \blacksquare$$

**知识点：** 积化和差是证明三角求和公式的基本工具；telescoping 使中间项全部抵消。

</details>

---

### 题目 3
**题目：** 陈述并证明 Abel 变换公式。

<details>
<summary>参考答案</summary>

**Abel 变换（求和的分部积分）：**

设 $\{a_n\}$ 和 $\{b_n\}$ 是两个数列，$B_n = \sum_{k=1}^n b_k$（$B_0 = 0$）。则：

$$\sum_{n=1}^N a_n b_n = a_N B_N - \sum_{n=1}^{N-1}(a_{n+1} - a_n)B_n$$

**证明：**

因为 $b_n = B_n - B_{n-1}$：

$$\sum_{n=1}^N a_n b_n = \sum_{n=1}^N a_n(B_n - B_{n-1}) = \sum_{n=1}^N a_n B_n - \sum_{n=1}^N a_n B_{n-1}$$

第二个求和换指标（$m = n-1$）：

$$\sum_{n=1}^N a_n B_{n-1} = \sum_{m=0}^{N-1} a_{m+1} B_m = a_1 B_0 + \sum_{m=1}^{N-1} a_{m+1} B_m = \sum_{n=1}^{N-1} a_{n+1} B_n$$

（因为 $B_0 = 0$）

所以：

$$\sum_{n=1}^N a_n b_n = \sum_{n=1}^N a_n B_n - \sum_{n=1}^{N-1} a_{n+1} B_n = a_N B_N + \sum_{n=1}^{N-1}(a_n - a_{n+1})B_n \quad \blacksquare$$

**知识点：** Abel 变换将 $\sum a_n b_n$ 转化为涉及 $B_n$（$b_n$ 的部分和）和 $a_n$ 的差分的表达式，是分析级数收敛性的核心工具。

</details>

---

### 题目 4
**题目：** 用 Dirichlet 判别法证明 $\displaystyle\sum_{n=1}^{+\infty} \frac{\sin n}{n}$ 收敛。

<details>
<summary>参考答案</summary>

**证明：**

令 $a_n = \dfrac{1}{n}$，$b_n = \sin n$。

- $a_n = \dfrac{1}{n}$ 单调递减趋于 0。
- $B_n = \sum_{k=1}^n \sin k$ 的部分和：

由 Lagrange 恒等式（类似题目 2 的证明）：

$$\sum_{k=1}^n \sin(k\theta) = \frac{\sin\frac{n\theta}{2}\sin\frac{(n+1)\theta}{2}}{\sin\frac{\theta}{2}}$$

取 $\theta = 1$：

$$|B_n| = \left|\frac{\sin\frac{n}{2}\sin\frac{n+1}{2}}{\sin\frac{1}{2}}\right| \leq \frac{1}{|\sin\frac{1}{2}|}$$

$B_n$ 有界。

由 Dirichlet 判别法，$\sum \dfrac{\sin n}{n}$ **收敛**。$\blacksquare$

**知识点：** Dirichlet 判别法的标准应用；$\sum \dfrac{\sin n}{n}$ 收敛但 $\sum \dfrac{|\sin n|}{n}$ 发散（条件收敛）。

</details>

---

### 题目 5
**题目：** 判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{\cos(n\alpha)}{n^p}$ 的收敛性（$\alpha$ 不是 $2\pi$ 的整数倍，$p > 0$）。

<details>
<summary>参考答案</summary>

**解：** 分情况讨论：

**情况 1：$p > 1$**

$$\left|\frac{\cos(n\alpha)}{n^p}\right| \leq \frac{1}{n^p}$$

$\sum \dfrac{1}{n^p}$ 收敛（$p$-级数，$p > 1$），由比较判别法，原级数**绝对收敛**。

**情况 2：$0 < p \leq 1$**

令 $a_n = \dfrac{1}{n^p}$，$b_n = \cos(n\alpha)$。

- $a_n = \dfrac{1}{n^p}$ 单调递减趋于 0（$p > 0$）
- $B_n = \sum_{k=1}^n \cos(k\alpha)$ 有界（由 Lagrange 恒等式，$\alpha \neq 2m\pi$）

由 Dirichlet 判别法，级数**收敛**（条件收敛，因为 $\sum \dfrac{|\cos(n\alpha)|}{n^p}$ 发散）。

**总结：**

$$\boxed{\text{当 } p > 1 \text{ 时绝对收敛；当 } 0 < p \leq 1 \text{ 时条件收敛。}}$$

**知识点：** Dirichlet 判别法将收敛范围从 $p > 1$ 扩展到 $p > 0$（对三角级数而言）。

</details>

---

### 题目 6
**题目：** 证明 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n}{n}$ 收敛，并求其和。

<details>
<summary>参考答案</summary>

**收敛性：** $a_n = \dfrac{1}{n}$ 递减趋于 0，由莱布尼茨判别法收敛。

**求和：** 利用 $\ln(1+x) = \sum_{n=1}^{+\infty} \dfrac{(-1)^{n+1} x^n}{n}$（$|x| \leq 1$，$x \neq -1$）。

取 $x = 1$：

$$\ln 2 = \sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$$

所以：

$$\sum_{n=1}^{+\infty} \frac{(-1)^n}{n} = -\ln 2$$

$$\boxed{\sum_{n=1}^{+\infty} \frac{(-1)^n}{n} = -\ln 2}$$

**知识点：** 交错调和级数的和为 $-\ln 2$；这是 $\ln(1+x)$ 在 $x=1$ 处的值。

</details>

---

### 题目 7
**题目：** 讨论级数 $\displaystyle\sum_{n=2}^{+\infty} \frac{(-1)^n}{\ln n}$ 的收敛性。它是绝对收敛还是条件收敛？

<details>
<summary>参考答案</summary>

**收敛性：** $a_n = \dfrac{1}{\ln n}$。

- $a_n > 0$
- $\ln n$ 递增，所以 $a_n$ 递减
- $\lim_{n \to \infty} \dfrac{1}{\ln n} = 0$

由莱布尼茨判别法，级数**收敛**。

**绝对收敛性：** $\sum \dfrac{1}{\ln n}$。

因为 $\ln n < n$（对 $n \geq 2$），所以 $\dfrac{1}{\ln n} > \dfrac{1}{n}$。

$\sum \dfrac{1}{n}$ 发散，由比较判别法 $\sum \dfrac{1}{\ln n}$ 发散。

所以原级数**条件收敛**。

**知识点：** $\dfrac{1}{\ln n}$ 比 $\dfrac{1}{n}$ 趋于 0 更慢，但仍趋于 0，使交错级数收敛。

</details>

---

### 题目 8
**题目：** 设 $f(x) = \displaystyle\sum_{n=1}^{+\infty} \frac{x^n}{n^2}$。求 $f$ 的定义域，并计算 $f(1)$ 和 $f(-1)$。

<details>
<summary>参考答案</summary>

**定义域（收敛半径）：**

$$R = \lim_{n \to \infty}\frac{n^2}{(n+1)^2} = 1$$

端点检验：
- $x = 1$：$\sum \dfrac{1}{n^2}$ 收敛（$p = 2 > 1$）
- $x = -1$：$\sum \dfrac{(-1)^n}{n^2}$ 绝对收敛

收敛域 $[-1, 1]$。

**计算 $f(1)$：**

$$f(1) = \sum_{n=1}^{+\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$$

（这是著名的 Basel 问题，由 Euler 解决。）

**计算 $f(-1)$：**

$$f(-1) = \sum_{n=1}^{+\infty}\frac{(-1)^n}{n^2} = -\frac{\pi^2}{12}$$

（因为 $\sum \dfrac{(-1)^n}{n^2} = \sum \dfrac{1}{n^2} - 2\sum \dfrac{1}{(2n)^2} = \dfrac{\pi^2}{6} - 2 \cdot \dfrac{1}{4} \cdot \dfrac{\pi^2}{6} = \dfrac{\pi^2}{6} - \dfrac{\pi^2}{12} = \dfrac{\pi^2}{12}$，取负号。）

Wait, let me recalculate:

$$\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2} = -\frac{1}{1^2} + \frac{1}{2^2} - \frac{1}{3^2} + \cdots$$

$$= \sum_{n=1}^{\infty}\frac{1}{n^2} - 2\sum_{n=1}^{\infty}\frac{1}{(2n)^2} = \frac{\pi^2}{6} - 2 \cdot \frac{1}{4}\sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6} - \frac{1}{2}\cdot\frac{\pi^2}{6} = \frac{\pi^2}{12}$$

Hmm, but the signs: $(-1)^n$ for $n=1$ is $-1$, so:

$$\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2} = -1 + \frac{1}{4} - \frac{1}{9} + \cdots = -\left(1 - \frac{1}{4} + \frac{1}{9} - \cdots\right) = -\frac{\pi^2}{12}$$

$$\boxed{f(1) = \frac{\pi^2}{6}, \quad f(-1) = -\frac{\pi^2}{12}}$$

**知识点：** $\sum \dfrac{1}{n^2} = \dfrac{\pi^2}{6}$（Basel 问题）；偶数项和奇数项的分解技巧。

</details>

---

## 📝 本次知识点总结

本次 Workshop 深入探讨了级数收敛性的高级工具：

1. **Abel 变换**：级数的"分部积分"，将 $\sum a_n b_n$ 转化为 $a_N B_N + \sum(a_n - a_{n+1})B_n$，是分析复杂级数的核心工具。
2. **Lagrange 三角恒等式**：$\sum_{k=1}^n \cos(k\theta) = -\dfrac{1}{2} + \dfrac{\sin((n+1/2)\theta)}{2\sin(\theta/2)}$，证明三角级数部分和有界的关键。
3. **Dirichlet 判别法**：若 $\sum b_n$ 部分和有界，$a_n$ 单调趋于 0，则 $\sum a_n b_n$ 收敛。适用于三角级数。
4. **三角恒等式分解**：$\sin^2 n = \dfrac{1-\cos 2n}{2}$ 将非线性三角函数化为线性组合。
5. **条件收敛与绝对收敛**：$\sum \dfrac{\cos(n\alpha)}{n^p}$ 在 $p > 1$ 时绝对收敛，$0 < p \leq 1$ 时条件收敛。
6. **Basel 问题**：$\sum \dfrac{1}{n^2} = \dfrac{\pi^2}{6}$，是级数理论中的经典结果。
