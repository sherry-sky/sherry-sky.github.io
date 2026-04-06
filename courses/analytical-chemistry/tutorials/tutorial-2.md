# Tutorial 2 - 习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **ppm (parts per million)**: 百万分之一，表示溶液浓度的无量纲单位，$1\ \text{ppm} = 10^{-6} = \frac{1\ \text{mg}}{\text{kg}}$，当溶液密度为 $1\ \text{g/mL}$ 时，$1\ \text{ppm} = 1\ \text{mg/L}$
- **质量分数 (w/w)**: 溶质质量与溶液总质量的比值，通常以百分比表示，$\text{质量分数} = \frac{\text{溶质质量}}{\text{溶液总质量}} \times 100\%$
- **摩尔浓度 (M)**: 单位体积溶液中溶质的摩尔数，$M = \frac{n}{V}$（单位：mol/L 或 M）
- **稀释公式**: $M_1V_1 = M_2V_2$，用于计算溶液稀释前后浓度与体积的关系
- **限制试剂**: 在化学反应中首先被完全消耗的试剂，决定了反应的最大产率
- **理想气体定律**: $PV = nRT$，描述理想气体状态的方程，其中 $P$ 为压强，$V$ 为体积，$n$ 为摩尔数，$R$ 为气体常数，$T$ 为温度
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T2-1" -->
**T2-1.** 计算密度为 $\rho = n\ \text{g/mL}$、浓度为 1 ppm 的稀溶液的浓度（单位：$\text{mg/L}$）。
<!-- QUESTION_END -->

<!-- QUESTION_START id="T2-2" -->
**T2-2.** 需要多少 mL 浓盐酸来配制 500 mL 浓度为 0.250 M 的 HCl 溶液？已知浓盐酸的质量分数为 37.2% (w/w)，密度为 1.188 $\text{g/cm}^3$。($MW_{\text{HCl}} = 36.46\ \text{g/mol}$)
<!-- QUESTION_END -->

<!-- QUESTION_START id="T2-3" -->
**T2-3.** 限制试剂是在化学反应中首先被消耗的试剂。一旦限制试剂耗尽，反应就停止。确定限制试剂的方法：
a. 找出每个反应物的摩尔数。
b. 比较现有摩尔数与完全反应所需摩尔数。
c. 确定限制试剂（提供摩尔数较少或产生产物较少的试剂）。

确定 1.00 g $\text{CaCl}_2$ (110.98 $\text{g/mol}$) 与 1.15 g $\text{Na}_2\text{C}_2\text{O}_4$ (134.00 $\text{g/mol}$) 在水中反应的限制试剂。计算未反应试剂的百分比？
<!-- QUESTION_END -->

<!-- QUESTION_START id="T2-4" -->
**T2-4.** 验证以下陈述的有效性："在我们每次呼吸中，我们至少吸入了一个来自凯撒大帝临终呼吸的分子"。做出以下假设：
a. 空气粒子均匀分布在整个大气层中。
b. 没有粒子被创造或销毁。
c. 地球半径为 6400 km。
d. 大气层高度为 10 km。
e. 单次呼吸的平均空气体积为 0.5 L。
f. 空气遵循理想气体定律 ($PV = nRT$，$R = 0.082\ \frac{\text{L}\cdot\text{atm}}{\text{mol}\cdot\text{K}} = 0.08314\ \frac{\text{L}\cdot\text{bar}}{\text{mol}\cdot\text{K}}$)。
g. 地球处于标准条件下 ($T = 298\ \text{K}$，$P = 1\ \text{atm}$)。
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T2-1" -->
**T2-1.** 计算浓度为 1 ppm、密度为 $\rho = n\ \text{g/mL}$ 的溶液的浓度（单位：$\text{mg/L}$）。

**解：**
$$
\begin{aligned}
1\ \text{ppm} &= \frac{\text{溶质质量}}{\text{溶液质量}} \times 10^6 \\
\rho &= \frac{\text{溶液质量}}{\text{溶液体积}} \\
\text{ppm} \times \rho &= \frac{\text{溶质质量}}{\text{溶液质量}} \times \frac{\text{溶液质量}}{\text{溶液体积}} = \frac{\text{溶质质量}}{\text{溶液体积}} = \text{浓度}
\end{aligned}
$$

因此，1 ppm、$\rho = n\ \text{g/mL}$ 的溶液浓度为：
$$
\begin{aligned}
1\ \text{ppm} \times \rho &= 1\ \text{ppm} \times n\ \text{g/mL} \\
&= 10^{-6} \times n \times 10^3\ \text{mg} / 10^{-3}\ \text{L} \\
&= n\ \text{mg/L}
\end{aligned}
$$

当 $\rho = 1\ \text{g/mL}$ 时，1 ppm 等于 1 $\text{mg/L}$。

**总结：** 由于 ppm、ppb 和%是无量纲的，因此在转换为有量纲单位时需要乘以密度。
简而言之：$1\ \text{ppm} \cdot 1\ \text{g/mL} = 1 \times 10^{-6}\ \text{g/mL} = 1\ \mu\text{g/mL} = 1\ \text{mg/L}$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T2-2" -->
**T2-2.** 需要多少 mL 浓盐酸来配制 500 mL 浓度为 0.250 M 的 HCl 溶液？

**解：**

首先，计算浓盐酸的摩尔浓度：
- 质量分数 37.2% (w/w) 表示：$\frac{37.2\ \text{g HCl}}{100\ \text{g 溶液}}$
- 密度 $\rho = 1.188\ \text{g/cm}^3 = 1.188\ \text{g/mL}$
- 摩尔质量 $MW_{\text{HCl}} = 36.46\ \text{g/mol}$

$$
\begin{aligned}
\text{摩尔浓度} &= \frac{\text{质量分数} \times \text{密度}}{\text{摩尔质量}} \\
&= \frac{37.2\ \text{g HCl}}{100\ \text{g 溶液}} \times \frac{1.188\ \text{g 溶液}}{1\ \text{mL 溶液}} \div \frac{36.46\ \text{g HCl}}{1\ \text{mol HCl}} \\
&= 0.01212\ \text{mol/mL} = 12.12\ \text{mol/L} = 12.12\ \text{M}
\end{aligned}
$$

使用稀释公式：
$$
\begin{aligned}
M_{\text{stock}} \times V_{\text{stock}} &= M_{\text{dilut}} \times V_{\text{dilut}} \\
12.12\ \text{M} \times V_{\text{stock}} &= 0.250\ \text{M} \times 500\ \text{mL} \\
V_{\text{stock}} &= 10.3\ \text{mL}
\end{aligned}
$$

**总结：** 在计算时带上单位有助于理解复杂问题。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T2-3" -->
**T2-3.** 确定限制试剂并计算未反应试剂的百分比。

**解：**

计算摩尔数：
$$
\begin{aligned}
n(\text{Na}_2\text{C}_2\text{O}_4) &= \frac{1.15\ \text{g}}{134.00\ \text{g/mol}} = 8.58\ \text{mmol} \\
n(\text{CaCl}_2) &= \frac{1.00\ \text{g}}{110.98\ \text{g/mol}} = 9.01\ \text{mmol}
\end{aligned}
$$

写出反应方程式：
$$
\text{Na}_2\text{C}_2\text{O}_4 + \text{CaCl}_2 \rightarrow \text{CaC}_2\text{O}_4 \downarrow + 2\text{NaCl}
$$

| 阶段 | $\text{Na}_2\text{C}_2\text{O}_4$ | $\text{CaCl}_2$ | $\text{CaC}_2\text{O}_4$ | $\text{NaCl}$ |
|------|-----------------------------------|-----------------|--------------------------|---------------|
| 初始 (mmol) | 8.58 | 9.01 | 0 | 0 |
| 变化 (mmol) | -8.58 | -8.58 | +8.58 | +17.16 |
| 最终 (mmol) | 0 | 0.43 | 8.58 | 17.16 |

$\text{Na}_2\text{C}_2\text{O}_4$ 和 $\text{CaCl}_2$ 的化学计量比为 1:1。由于 $\text{Na}_2\text{C}_2\text{O}_4$ 的摩尔数较少，因此 **$\text{Na}_2\text{C}_2\text{O}_4$ 是限制试剂**。

未反应 $\text{CaCl}_2$ 的百分比：
$$
\text{未反应百分比} = \frac{0.43}{9.01} \times 100\% = 4.77\%
$$

**总结：** 确定限制试剂的步骤：
1. 计算摩尔数
2. 写出反应方程式
3. 比较摩尔数
4. 确定限制试剂
<!-- ANSWER_END -->

<!-- ANSWER_START for="T2-4" -->
**T2-4.** 验证"每次呼吸至少吸入一个凯撒大帝临终呼吸的分子"的有效性。

**解：**

**步骤 1：** 计算大气层体积
$$
\begin{aligned}
V_{\text{atm}} &= \frac{4}{3}\pi R_2^3 - \frac{4}{3}\pi R_1^3 \\
&= \frac{4}{3} \times 3.14 \times [(6410 \times 10^3)^3 - (6400 \times 10^3)^3]\ \text{m}^3 \\
&= 5.153 \times 10^{18}\ \text{m}^3 = 5.153 \times 10^{21}\ \text{L}
\end{aligned}
$$

**步骤 2：** 计算凯撒临终呼吸的分子数
$$
\begin{aligned}
PV &= nRT \Rightarrow n = \frac{PV}{RT} \\
n &= \frac{1\ \text{atm} \times 0.5\ \text{L}}{0.082\ \frac{\text{L}\cdot\text{atm}}{\text{mol}\cdot\text{K}} \times 298\ \text{K}} = 0.02\ \text{mol} \\
\text{分子数} &= 0.02\ \text{mol} \times 6.02 \times 10^{23}\ \text{molecules/mol} \\
&= 1.204 \times 10^{22}\ \text{molecules}
\end{aligned}
$$

**步骤 3：** 计算大气中分布的分子浓度
$$
\text{浓度} = \frac{1.204 \times 10^{22}\ \text{molecules}}{5.153 \times 10^{21}\ \text{L}} = 2.34\ \text{molecules/L}
$$

**步骤 4：** 计算每次呼吸吸入的凯撒分子数
设每次呼吸吸入 $x$ 个凯撒分子，根据粒子守恒：
$$
\begin{aligned}
1.204 \times 10^{22} &= \frac{5.153 \times 10^{21}\ \text{L}}{0.5\ \text{L}} \times x \\
x &= 1.17\ \text{molecules}
\end{aligned}
$$

**结论：** 陈述有效——每次呼吸确实至少吸入一个来自凯撒大帝临终呼吸的分子。
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [2T-Questions for Tutorial of Anal Chem 1.pdf](Tutorials-PDF/2T-Questions for Tutorial of Anal Chem 1.pdf)
- **答案 PDF**: [2T-Answer for Tutorial of Anal Chem 1.pdf](Tutorials-PDF/2T-Answer for Tutorial of Anal Chem 1.pdf)
<!-- PDF_LINKS_END -->