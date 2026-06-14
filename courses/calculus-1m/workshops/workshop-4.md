> **📎 源文件：** `旧资料/02 Workshop/Workshop 4.pdf`

---

# Workshop 4 - 隐函数求导与双曲函数

## 📌 知识点梳理
- 隐函数求导法
- 重要极限 $\lim_{x \to 0}(1+x)^{1/x} = e$ 和 $\lim_{t \to \pm\infty}\left(1+\dfrac{1}{t}\right)^t = e$ 的应用
- 双曲函数的定义与导数
- 反函数求导
- 中间值定理的应用

---

### 题目 1
**题目：** 求曲线 $e^{2x+3y} = e^5\left(x^2 - \ln(xy^3)\right)$ 在点 $(1, 1)$ 处的切线斜率。

<details>
<summary>参考答案</summary>

**解：**

对等式两边关于 $x$ 求导（$y$ 是 $x$ 的函数）：

左边：$\dfrac{d}{dx} e^{2x+3y} = e^{2x+3y} \cdot (2 + 3y')$

右边：$\dfrac{d}{dx}\left[e^5\left(x^2 - \ln(xy^3)\right)\right] = e^5\left(2x - \dfrac{d}{dx}\ln(xy^3)\right)$

计算 $\dfrac{d}{dx}\ln(xy^3)$：

$$\ln(xy^3) = \ln x + 3\ln y$$

$$\frac{d}{dx}(\ln x + 3\ln y) = \frac{1}{x} + \frac{3y'}{y}$$

所以右边为 $e^5\left(2x - \dfrac{1}{x} - \dfrac{3y'}{y}\right)$。

代入点 $(1, 1)$：

左边：$e^{2+3} \cdot (2 + 3y') = e^5(2 + 3y')$

右边：$e^5\left(2 - 1 - 3y'\right) = e^5(1 - 3y')$

消去 $e^5$：

$$2 + 3y' = 1 - 3y' \implies 6y' = -1 \implies y' = -\frac{1}{6}$$

切线斜率为 $\boxed{-\dfrac{1}{6}}$。

**知识点：** 隐函数求导——对等式两边同时关于 $x$ 求导，将 $y$ 视为 $x$ 的函数，利用链式法则。

</details>

---

### 题目 2
**题目：** 利用极限 $\lim_{x \to 0}(1+x)^{1/x} = e$ 和 $\lim_{t \to \pm\infty}\left(1+\dfrac{1}{t}\right)^t = e$，证明：

(a) $\lim_{x \to \infty} \left(\dfrac{x+8}{x}\right)^{x/3} = e^{8/3}$

(b) $\lim_{x \to 3} (x^2 - 8)^{4/(x-3)} = e^{24}$

(c) $\lim_{x \to \infty} \left(\dfrac{2^x - 3}{2^x + 3}\right)^{5x} = 0$

<details>
<summary>参考答案</summary>

**(a) 证明：**

$$\left(\frac{x+8}{x}\right)^{x/3} = \left(1 + \frac{8}{x}\right)^{x/3}$$

令 $t = \dfrac{x}{8}$，则 $x = 8t$，当 $x \to \infty$ 时 $t \to \infty$：

$$\left(1 + \frac{1}{t}\right)^{8t/3} = \left[\left(1 + \frac{1}{t}\right)^t\right]^{8/3} \to e^{8/3}$$

$$\boxed{\lim_{x \to \infty} \left(\frac{x+8}{x}\right)^{x/3} = e^{8/3}} \quad \blacksquare$$

**(b) 证明：**

当 $x \to 3$ 时，$x^2 - 8 \to 1$，这是 $1^\infty$ 型极限。

$$\ln L = \lim_{x \to 3} \frac{4}{x-3} \ln(x^2 - 8)$$

令 $u = x - 3$，则 $x = u + 3$，$x^2 - 8 = (u+3)^2 - 8 = u^2 + 6u + 1$：

$$\ln L = \lim_{u \to 0} \frac{4\ln(1 + 6u + u^2)}{u}$$

利用 $\ln(1+v) \approx v$（$v \to 0$）：

$$\ln L = \lim_{u \to 0} \frac{4(6u + u^2)}{u} = \lim_{u \to 0} 4(6 + u) = 24$$

所以 $L = e^{24}$。

$$\boxed{\lim_{x \to 3} (x^2 - 8)^{4/(x-3)} = e^{24}} \quad \blacksquare$$

**(c) 证明：**

$$\frac{2^x - 3}{2^x + 3} = 1 - \frac{6}{2^x + 3}$$

当 $x \to \infty$ 时，$\dfrac{6}{2^x + 3} \to 0$，这是 $1^\infty$ 型。

$$\ln L = \lim_{x \to \infty} 5x \ln\left(1 - \frac{6}{2^x + 3}\right)$$

利用 $\ln(1+v) \approx v$（$v \to 0$）：

$$\ln L = \lim_{x \to \infty} 5x \cdot \left(-\frac{6}{2^x + 3}\right) = \lim_{x \to \infty} \frac{-30x}{2^x + 3} = 0$$

（因为指数增长远快于线性增长）

所以 $L = e^0 = 1$。

**注意：** 重新审视题目。当 $x \to \infty$ 时：

$$\frac{2^x - 3}{2^x + 3} \to 1^-$$

但底数始终小于 1，指数 $5x \to +\infty$。

更精确地：$\dfrac{2^x - 3}{2^x + 3} = 1 - \dfrac{6}{2^x + 3}$

$$\left(1 - \frac{6}{2^x+3}\right)^{5x}$$

取对数：$5x \ln\left(1 - \dfrac{6}{2^x+3}\right) \approx 5x \cdot \left(-\dfrac{6}{2^x+3}\right) = \dfrac{-30x}{2^x+3} \to 0$

所以极限为 $e^0 = 1$，而非 0。

**修正：** 题目给出的答案为 0，但实际计算结果为 1。若题目确实要求证明极限为 0，则可能题目有误，或者应理解为：

$$\lim_{x \to \infty} \left(\frac{2^x - 3}{2^x + 3}\right)^{5x} = 1$$

$$\boxed{\text{实际极限为 } 1}$$

**知识点：** $1^\infty$ 型极限的标准处理方法——取对数后利用 $\ln(1+v) \sim v$。

</details>

---

### 题目 3
**题目：** 定义双曲正弦和双曲余弦函数：

$$\sinh(x) = \frac{e^x - e^{-x}}{2}, \quad \cosh(x) = \frac{e^x + e^{-x}}{2}$$

(a) 证明 $\sinh'(x) = \cosh(x)$ 和 $\cosh'(x) = \sinh(x)$。

(b) 求函数 $f(x) = \dfrac{5}{(2 - \sinh(x))^5}$ 的定义域。

(c) 求 $f'(x)$。是否存在 $c$ 使得 $f'(c) = 2$？请仔细论证（提示：使用中间值定理）。

(d) 求 $f^{-1}$ 在点 $(c, f^{-1}(c))$ 处的切线方程，其中 $c = f(\ln 3)$。

<details>
<summary>参考答案</summary>

**(a) 证明：**

$$\sinh'(x) = \frac{d}{dx}\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh(x) \quad \blacksquare$$

$$\cosh'(x) = \frac{d}{dx}\left(\frac{e^x + e^{-x}}{2}\right) = \frac{e^x - e^{-x}}{2} = \sinh(x) \quad \blacksquare$$

**(b) 解：**

$f(x)$ 有定义当且仅当 $2 - \sinh(x) \neq 0$，即 $\sinh(x) \neq 2$。

$\sinh(x) = 2 \implies \dfrac{e^x - e^{-x}}{2} = 2 \implies e^x - e^{-x} = 4$

令 $u = e^x$：$u - \dfrac{1}{u} = 4 \implies u^2 - 4u - 1 = 0 \implies u = 2 \pm \sqrt{5}$

因为 $u = e^x > 0$，所以 $u = 2 + \sqrt{5}$，即 $x = \ln(2 + \sqrt{5})$。

$$\text{Dom}(f) = \mathbb{R} \setminus \{\ln(2 + \sqrt{5})\}$$

**(c) 解：**

$$f(x) = 5(2 - \sinh x)^{-5}$$

$$f'(x) = 5 \cdot (-5)(2 - \sinh x)^{-6} \cdot (-\cosh x) = \frac{25\cosh x}{(2 - \sinh x)^6}$$

是否存在 $c$ 使 $f'(c) = 2$？

注意 $f'(x) = \dfrac{25\cosh x}{(2 - \sinh x)^6}$。

- $\cosh x \geq 1$ 对所有 $x$ 成立
- $(2 - \sinh x)^6 > 0$（在定义域内）

当 $x \to \ln(2+\sqrt{5})$ 时，$(2 - \sinh x) \to 0$，所以 $f'(x) \to +\infty$。

当 $x \to +\infty$ 时，$\sinh x \to +\infty$，$\cosh x \to +\infty$：

$$f'(x) \approx \frac{25 \cdot \frac{e^x}{2}}{(\sinh x)^6} \approx \frac{25 \cdot \frac{e^x}{2}}{\frac{e^{6x}}{64}} = \frac{800}{e^{5x}} \to 0$$

$f'$ 在 $(\ln(2+\sqrt{5}), +\infty)$ 上连续，且 $f'(x) \to +\infty$（$x \to \ln(2+\sqrt{5})^+$），$f'(x) \to 0$（$x \to +\infty$）。

由中间值定理，对任意 $L \in (0, +\infty)$，存在 $c$ 使 $f'(c) = L$。特别地，存在 $c$ 使 $f'(c) = 2$。

**(d) 解：**

首先计算 $c = f(\ln 3)$：

$$\sinh(\ln 3) = \frac{e^{\ln 3} - e^{-\ln 3}}{2} = \frac{3 - \frac{1}{3}}{2} = \frac{8/3}{2} = \frac{4}{3}$$

$$c = f(\ln 3) = \frac{5}{\left(2 - \frac{4}{3}\right)^5} = \frac{5}{\left(\frac{2}{3}\right)^5} = \frac{5}{\frac{32}{243}} = \frac{5 \times 243}{32} = \frac{1215}{32}$$

反函数在 $(c, f^{-1}(c))$ 处的切线斜率：

$$(f^{-1})'(c) = \frac{1}{f'(f^{-1}(c))} = \frac{1}{f'(\ln 3)}$$

计算 $f'(\ln 3)$：

$$\cosh(\ln 3) = \frac{3 + \frac{1}{3}}{2} = \frac{5}{3}$$

$$f'(\ln 3) = \frac{25 \cdot \frac{5}{3}}{\left(\frac{2}{3}\right)^6} = \frac{\frac{125}{3}}{\frac{64}{729}} = \frac{125}{3} \cdot \frac{729}{64} = \frac{125 \times 243}{64} = \frac{30375}{64}$$

$$(f^{-1})'(c) = \frac{64}{30375}$$

切线方程（过点 $(c, \ln 3) = \left(\dfrac{1215}{32}, \ln 3\right)$）：

$$y - \ln 3 = \frac{64}{30375}\left(x - \frac{1215}{32}\right)$$

**知识点：** 双曲函数的导数与三角函数类似但符号不同；反函数求导公式 $(f^{-1})'(y) = \dfrac{1}{f'(x)}$。

</details>

---

##  本次知识点总结

本次 Workshop 涵盖了微分学的重要进阶内容：

1. **隐函数求导**：对等式两边同时关于 $x$ 求导，$y$ 视为 $x$ 的函数，利用链式法则处理含 $y$ 的项。
2. **$1^\infty$ 型极限**：标准方法是取对数，利用 $\ln(1+v) \sim v$（$v \to 0$）化简。
3. **双曲函数**：$\sinh x = \dfrac{e^x - e^{-x}}{2}$，$\cosh x = \dfrac{e^x + e^{-x}}{2}$；导数关系 $\sinh' = \cosh$，$\cosh' = \sinh$（注意与三角函数的符号差异）。
4. **反函数求导**：$(f^{-1})'(b) = \dfrac{1}{f'(a)}$，其中 $b = f(a)$。
5. **中间值定理**：连续函数取遍端点值之间的所有值，可用于证明方程有解。
