> **📎 源文件：** `旧资料/06 Tutorial/Tutorial-Week9.pdf`

---

# Tutorial 9 - 分部积分、三角积分、三角换元与部分分式

## 📌 知识点梳理
- 分部积分法（Integration by Parts）
- 三角函数的积分（$\sin$-$\cos$ 幂次、$\tan$-$\sec$ 幂次）
- 三角换元法
- 有理函数的部分分式分解

---

### 题目 1（核心题）

**题目：** 用分部积分法求下列不定积分。

**(a)** $\int x\sin x\,dx$

**(b)** $\int x \cdot 2^{-x}\,dx$

**(c)** $\int x^2 e^{2x}\,dx$

**(d)** $\int x\tan^{-1}x\,dx$

**(e)** $\int \sqrt{x}\ln x\,dx$

**(f)** $\int e^{\alpha x}\cos(\beta x)\,dx$

**(g)** $\int \ln x\,dx$

**(h)** $\int \tan^{-1}x\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $u = x$，$dv = \sin x\,dx$，$du = dx$，$v = -\cos x$：

$$\int x\sin x\,dx = -x\cos x + \int \cos x\,dx = \boxed{-x\cos x + \sin x + C}$$

**(b)** $u = x$，$dv = 2^{-x}\,dx$，$du = dx$，$v = -\frac{2^{-x}}{\ln 2}$：

$$\int x \cdot 2^{-x}\,dx = -\frac{x \cdot 2^{-x}}{\ln 2} + \frac{1}{\ln 2}\int 2^{-x}\,dx = -\frac{x \cdot 2^{-x}}{\ln 2} - \frac{2^{-x}}{(\ln 2)^2} + C$$

$$= \boxed{-\frac{2^{-x}}{\ln 2}\left(x + \frac{1}{\ln 2}\right) + C}$$

**(c)** 第一次分部：$u = x^2$，$dv = e^{2x}\,dx$：

$$= \frac{x^2 e^{2x}}{2} - \int xe^{2x}\,dx$$

第二次分部：$u = x$，$dv = e^{2x}\,dx$：

$$\int xe^{2x}\,dx = \frac{xe^{2x}}{2} - \frac{e^{2x}}{4}$$

综合：$\boxed{\frac{e^{2x}}{4}(2x^2 - 2x + 1) + C}$

**(d)** $u = \tan^{-1}x$，$dv = x\,dx$：

$$= \frac{x^2}{2}\tan^{-1}x - \int \frac{x^2}{2(1 + x^2)}\,dx = \frac{x^2}{2}\tan^{-1}x - \frac{1}{2}\int\left(1 - \frac{1}{1 + x^2}\right)\,dx$$

$$= \boxed{\frac{x^2}{2}\tan^{-1}x - \frac{x}{2} + \frac{1}{2}\tan^{-1}x + C}$$

**(e)** $u = \ln x$，$dv = \sqrt{x}\,dx = x^{1/2}\,dx$：

$$= \frac{2}{3}x^{3/2}\ln x - \frac{2}{3}\int x^{1/2}\,dx = \frac{2}{3}x^{3/2}\ln x - \frac{4}{9}x^{3/2} + C$$

$$= \boxed{\frac{2}{9}x^{3/2}(3\ln x - 2) + C}$$

**(f)** 设 $I = \int e^{\alpha x}\cos(\beta x)\,dx$。两次分部后得：

$I = \frac{e^{\alpha x}}{\alpha^2 + \beta^2}(\alpha\cos(\beta x) + \beta\sin(\beta x)) + C$

$$\boxed{I = \frac{e^{\alpha x}(\alpha\cos\beta x + \beta\sin\beta x)}{\alpha^2 + \beta^2} + C}$$

**(g)** $u = \ln x$，$dv = dx$：

$$\int \ln x\,dx = x\ln x - \int dx = \boxed{x\ln x - x + C}$$

**(h)** $u = \tan^{-1}x$，$dv = dx$：

$$\int \tan^{-1}x\,dx = x\tan^{-1}x - \int \frac{x}{1 + x^2}\,dx = \boxed{x\tan^{-1}x - \frac{1}{2}\ln(1 + x^2) + C}$$

**知识点：** 分部积分 $\int u\,dv = uv - \int v\,du$；对 $\ln x$、$\tan^{-1}x$ 等反函数，取 $dv = dx$。

</details>

---

### 题目 2（核心题）

**题目：** 求下列三角积分。

**(a)** $\int \sin^3 x\cos^2 x\,dx$

**(b)** $\int \sin^2 x\cos^3 x\,dx$

**(c)** $\int \sin^4 x\cos^4 x\,dx$

**(d)** $\int \tan^3 x\sec^3 x\,dx$

**(e)** $\int \tan^4 x\sec^4 x\,dx$

**(f)** $\int \sin 7x\cos 5x\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** $\sin^3 x = \sin x(1 - \cos^2 x)$，令 $u = \cos x$：

$$-\int (1 - u^2)u^2\,du = -\frac{u^3}{3} + \frac{u^5}{5} + C = \boxed{-\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C}$$

**(b)** $\cos^3 x = \cos x(1 - \sin^2 x)$，令 $u = \sin x$：

$$\int u^2(1 - u^2)\,du = \frac{u^3}{3} - \frac{u^5}{5} + C = \boxed{\frac{\sin^3 x}{3} - \frac{\sin^5 x}{5} + C}$$

**(c)** $\sin^4 x\cos^4 x = (\sin x\cos x)^4 = \left(\frac{\sin 2x}{2}\right)^4 = \frac{\sin^4 2x}{16}$

$\sin^4 2x = \left(\frac{1 - \cos 4x}{2}\right)^2 = \frac{1 - 2\cos 4x + \cos^2 4x}{4} = \frac{1 - 2\cos 4x + \frac{1 + \cos 8x}{2}}{4} = \frac{3 - 4\cos 4x + \cos 8x}{8}$

$$\int \frac{\sin^4 2x}{16}\,dx = \frac{1}{128}\int (3 - 4\cos 4x + \cos 8x)\,dx = \boxed{\frac{3x}{128} - \frac{\sin 4x}{128} + \frac{\sin 8x}{1024} + C}$$

**(d)** $\tan^3 x\sec^3 x = \tan^2 x\sec^2 x \cdot \tan x\sec x = (\sec^2 x - 1)\sec^2 x \cdot \tan x\sec x$

令 $u = \sec x$，$du = \sec x\tan x\,dx$：

$$\int (u^2 - 1)u^2\,du = \frac{u^5}{5} - \frac{u^3}{3} + C = \boxed{\frac{\sec^5 x}{5} - \frac{\sec^3 x}{3} + C}$$

**(e)** $\tan^4 x\sec^4 x = \tan^4 x\sec^2 x \cdot \sec^2 x = \tan^4 x(1 + \tan^2 x)\sec^2 x$

令 $u = \tan x$，$du = \sec^2 x\,dx$：

$$\int u^4(1 + u^2)\,du = \frac{u^5}{5} + \frac{u^7}{7} + C = \boxed{\frac{\tan^5 x}{5} + \frac{\tan^7 x}{7} + C}$$

**(f)** 积化和差：$\sin 7x\cos 5x = \frac{1}{2}[\sin(12x) + \sin(2x)]$

$$\int \frac{1}{2}[\sin 12x + \sin 2x]\,dx = \boxed{-\frac{\cos 12x}{24} - \frac{\cos 2x}{4} + C}$$

**知识点：** 三角积分的核心策略——奇数次幂提取一个因子做 $du$，偶数次幂用恒等式降幂。

</details>

---

### 题目 4

**题目：** 求下列积分（涉及三角换元）。

**(a)** $\int x^2\sqrt{3 + 2x - x^2}\,dx$

**(c)** $\int \frac{x^2}{(x^2 + a^2)^2}\,dx$

**(d)** $\int \sqrt{x}\sqrt[4]{1 - x^4}\,dx$... 注：原题可能为 $\int x\sqrt{1 - x^4}\,dx$ 等。

<details>
<summary>参考答案</summary>

**解：**

**(a)** $3 + 2x - x^2 = 4 - (x - 1)^2$。令 $x - 1 = 2\sin\theta$，$dx = 2\cos\theta\,d\theta$：

$$\sqrt{4 - (x-1)^2} = 2\cos\theta$$

$$\int (1 + 2\sin\theta)^2 \cdot 2\cos\theta \cdot 2\cos\theta\,d\theta = 4\int (1 + 2\sin\theta)^2\cos^2\theta\,d\theta$$

展开后利用三角恒等式计算（过程较长）。

**(c)** 令 $x = a\tan\theta$，$dx = a\sec^2\theta\,d\theta$，$x^2 + a^2 = a^2\sec^2\theta$：

$$\int \frac{a^2\tan^2\theta}{a^4\sec^4\theta} \cdot a\sec^2\theta\,d\theta = \frac{1}{a}\int \frac{\tan^2\theta}{\sec^2\theta}\,d\theta = \frac{1}{a}\int \sin^2\theta\,d\theta = \frac{1}{a}\left(\frac{\theta}{2} - \frac{\sin 2\theta}{4}\right) + C$$

回代 $\theta = \tan^{-1}(x/a)$：

$$= \boxed{\frac{1}{2a}\tan^{-1}\frac{x}{a} - \frac{x}{2(x^2 + a^2)} + C}$$

**知识点：** 三角换元——$\sqrt{a^2 - u^2}$ 用 $u = a\sin\theta$，$\sqrt{a^2 + u^2}$ 用 $u = a\tan\theta$。

</details>

---

### 题目 5（核心题，选做部分）

**题目：** 求下列有理函数的积分。

**(a)** $\int \frac{x}{(x+1)(x+2)(x+3)}\,dx$

**(b)** $\int \frac{4x^2 - 15x + 15}{x^3 - 6x^2 + 11x - 6}\,dx$

**(c)** $\int \frac{2x^2 - 11x + 4}{x^2 - 5x + 6}\,dx$

**(d)** $\int \frac{x + 2}{(x + 1)^2}\,dx$

**(g)** $\int \frac{1}{x^2 + x + 2}\,dx$

**(h)** $\int \frac{1}{(2x^2 + 1)(x - 1)}\,dx$

<details>
<summary>参考答案</summary>

**解：**

**(a)** 部分分式：$\frac{x}{(x+1)(x+2)(x+3)} = \frac{A}{x+1} + \frac{B}{x+2} + \frac{C}{x+3}$

$x = -1$：$A = \frac{-1}{1 \cdot 2} = -\frac{1}{2}$

$x = -2$：$B = \frac{-2}{(-1) \cdot 1} = 2$

$x = -3$：$C = \frac{-3}{(-2)(-1)} = -\frac{3}{2}$

$$\int = -\frac{1}{2}\ln|x+1| + 2\ln|x+2| - \frac{3}{2}\ln|x+3| + C$$

**(b)** $x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$

部分分式：$\frac{4x^2 - 15x + 15}{(x-1)(x-2)(x-3)} = \frac{A}{x-1} + \frac{B}{x-2} + \frac{C}{x-3}$

$x = 1$：$A = \frac{4 - 15 + 15}{1 \cdot 2} = 2$

$x = 2$：$B = \frac{16 - 30 + 15}{1 \cdot (-1)} = -1$

$x = 3$：$C = \frac{36 - 45 + 15}{2 \cdot 1} = 3$

$$\int = 2\ln|x-1| - \ln|x-2| + 3\ln|x-3| + C$$

**(c)** 先做多项式除法：$\frac{2x^2 - 11x + 4}{x^2 - 5x + 6} = 2 + \frac{-x - 8}{x^2 - 5x + 6} = 2 + \frac{-x - 8}{(x-2)(x-3)}$

$\frac{-x - 8}{(x-2)(x-3)} = \frac{A}{x-2} + \frac{B}{x-3}$

$x = 2$：$A = \frac{-10}{-1} = 10$

$x = 3$：$B = \frac{-11}{1} = -11$

$$\int = 2x + 10\ln|x-2| - 11\ln|x-3| + C$$

**(d)** $\frac{x + 2}{(x + 1)^2} = \frac{(x + 1) + 1}{(x + 1)^2} = \frac{1}{x + 1} + \frac{1}{(x + 1)^2}$

$$\int = \ln|x + 1| - \frac{1}{x + 1} + C$$

**(g)** 配方：$x^2 + x + 2 = (x + \frac{1}{2})^2 + \frac{7}{4}$

$$\int \frac{dx}{(x + 1/2)^2 + 7/4} = \frac{2}{\sqrt{7}}\tan^{-1}\frac{2x + 1}{\sqrt{7}} + C$$

**(h)** $\frac{1}{(2x^2 + 1)(x - 1)} = \frac{Ax + B}{2x^2 + 1} + \frac{C}{x - 1}$

$x = 1$：$C = \frac{1}{3}$

比较系数：$1 = (Ax + B)(x - 1) + \frac{1}{3}(2x^2 + 1)$

$x^2$：$A + \frac{2}{3} = 0 \implies A = -\frac{2}{3}$

常数：$-B + \frac{1}{3} = 1 \implies B = -\frac{2}{3}$

$$\int = -\frac{1}{3}\int\frac{2x + 2}{2x^2 + 1}\,dx + \frac{1}{3}\int\frac{dx}{x - 1}$$

$$= -\frac{1}{3}\ln(2x^2 + 1) - \frac{2}{3\sqrt{2}}\tan^{-1}(\sqrt{2}x) + \frac{1}{3}\ln|x - 1| + C$$

**知识点：** 部分分式分解是有理函数积分的核心方法——将复杂分式拆为简单分式之和。

</details>

---

### 题目 7

**题目：** 利用换元 $t = \tan\frac{x}{2}$，$\sin x = \frac{2t}{1+t^2}$，$\cos x = \frac{1-t^2}{1+t^2}$，计算：

**(a)** $\int \frac{1}{\sin x + \cos x}\,dx$

**(b)** $\int \frac{\sin x}{1 + \sin x + \cos x}\,dx$

<details>
<summary>参考答案</summary>

**解：**

$dx = \frac{2}{1 + t^2}\,dt$

**(a)** $\sin x + \cos x = \frac{2t + 1 - t^2}{1 + t^2} = \frac{-t^2 + 2t + 1}{1 + t^2}$

$$\int \frac{1 + t^2}{-t^2 + 2t + 1} \cdot \frac{2}{1 + t^2}\,dt = 2\int \frac{dt}{-t^2 + 2t + 1} = 2\int \frac{dt}{2 - (t - 1)^2}$$

令 $u = t - 1$：$2\int \frac{du}{2 - u^2} = \frac{2}{2\sqrt{2}}\ln\left|\frac{\sqrt{2} + u}{\sqrt{2} - u}\right| + C = \frac{1}{\sqrt{2}}\ln\left|\frac{\sqrt{2} + t - 1}{\sqrt{2} - t + 1}\right| + C$

回代 $t = \tan\frac{x}{2}$。

**(b)** 类似方法，代入后化为有理函数积分（过程较长，此处略）。

**知识点：** Weierstrass 换元（万能代换）$t = \tan\frac{x}{2}$ 可将三角函数积分化为有理函数积分。

</details>

---

## 📝 本次知识点总结

1. **分部积分**：$\int u\,dv = uv - \int v\,du$，选 $u$ 的优先级：LIATE（对数、反三角、代数、三角、指数）。
2. **三角积分**：奇数次幂提取因子，偶数次幂用恒等式降幂；$\tan$-$\sec$ 积分利用 $\sec^2 x = 1 + \tan^2 x$。
3. **三角换元**：根据根号下的形式选择合适的三角替换。
4. **部分分式**：有理函数积分的通用方法，将复杂分式拆分为简单分式。
5. **Weierstrass 换元**：$t = \tan\frac{x}{2}$ 是三角积分的万能方法。
