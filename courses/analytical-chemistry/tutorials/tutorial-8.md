# Tutorial 8 - 沉淀/氧化还原滴定习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **沉淀滴定**：利用沉淀反应进行的滴定分析
  - 化学计量点前：由过量的被滴定离子浓度计算
  - 化学计量点：由 Ksp 计算
  - 化学计量点后：由过量的滴定剂浓度计算
- **莫尔法**：用铬酸钾作指示剂的银量法，用于测定 Cl⁻
- **返滴定法**：先加入过量标准溶液，再用另一种标准溶液滴定剩余的量
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T8-1" -->
**T8-1.** 用 0.2M AgNO₃ 溶液滴定 50 mL 0.1M KBr 溶液：
$$\text{Ag}^+ + \text{Br}^- \rightarrow \text{AgBr(s)} \quad K_{sp}(\text{AgBr}) = 5.0 \times 10^{-13}$$

计算下列滴定剂体积下的 p[Ag⁺] = -log[Ag⁺]：
a. 15 mL
b. 25 mL
c. 30 mL
<!-- QUESTION_END -->

<!-- QUESTION_START id="T8-2" -->
**T8-2.** 在莫尔法滴定下列卤化物时，应加入的 CrO₄²⁻ 指示剂浓度是多少？

已知：
- Ksp(AgCl) = 1.8×10⁻¹⁰
- Ksp(AgBr) = 5.0×10⁻¹³
- Ksp(AgI) = 8.3×10⁻¹⁷
- Ksp(Ag₂CrO₄) = 1.2×10⁻¹²
<!-- QUESTION_END -->

<!-- QUESTION_START id="T8-3" -->
**T8-3.** 将 30 mL 含未知浓度 Cl⁻ 的溶液加入到 50 mL 0.365M AgNO₃ 溶液中。然后过滤除去 AgCl 沉淀。向滤液中加入 Fe³⁺ 指示剂，用 0.287M KSCN 溶液滴定。加入 37.6 mL 滴定剂后，溶液变为淡玫瑰色。求原溶液中 Cl⁻ 的浓度。

反应：
$$\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl(s)} \quad K_{sp}(\text{AgCl}) = 1.8 \times 10^{-10}$$

过量 Ag⁺ 用 KSCN 滴定：
$$\text{Ag}^+ + \text{SCN}^- \rightarrow \text{AgSCN(s)} \quad K_{sp}(\text{AgSCN}) = 1.2 \times 10^{-12}$$
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T8-1" -->
**T8-1.** KBr 与 AgNO₃ 沉淀滴定

**已知条件：**
- KBr：V₀ = 50 mL，[Br⁻]₀ = 0.1 M
- AgNO₃：[Ag⁺] = 0.2 M
- Ksp(AgBr) = 5.0×10⁻¹³

**化学计量点体积计算：**
$$V_e = \frac{[\text{Br}^-]_0 V_0}{[\text{Ag}^+]} = \frac{0.1\ \text{M} \times 50\ \text{mL}}{0.2\ \text{M}} = 25\ \text{mL}$$

#### a. V = 15 mL（化学计量点前）

此时 Br⁻ 过量：

**剩余 Br⁻ 浓度：**
$$[\text{Br}^-] = \frac{[\text{Br}^-]_0 V_0 - [\text{Ag}^+] V}{V_0 + V} = \frac{0.1 \times 50 - 0.2 \times 15}{50 + 15} = \frac{5 - 3}{65} = 0.0308\ \text{M}$$

**由 Ksp 计算 [Ag⁺]：**
$$[\text{Ag}^+] = \frac{K_{sp}}{[\text{Br}^-]} = \frac{5.0 \times 10^{-13}}{0.0308} = 1.62 \times 10^{-11}\ \text{M}$$

$$\text{p[Ag}^+] = -\log(1.62 \times 10^{-11}) = \mathbf{10.79}$$

#### b. V = 25 mL（化学计量点）

此时 [Ag⁺] = [Br⁻]，由 Ksp 决定：

$$[\text{Ag}^+] = \sqrt{K_{sp}} = \sqrt{5.0 \times 10^{-13}} = 7.07 \times 10^{-7}\ \text{M}$$

$$\text{p[Ag}^+] = -\log(7.07 \times 10^{-7}) = \mathbf{6.15}$$

#### c. V = 30 mL（化学计量点后）

此时 Ag⁺ 过量：

**过量 Ag⁺ 浓度：**
$$[\text{Ag}^+] = \frac{[\text{Ag}^+] V - [\text{Br}^-]_0 V_0}{V_0 + V} = \frac{0.2 \times 30 - 0.1 \times 50}{50 + 30} = \frac{6 - 5}{80} = 0.0125\ \text{M}$$

$$\text{p[Ag}^+] = -\log(0.0125) = \mathbf{1.90}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T8-2" -->
**T8-2.** 莫尔法指示剂浓度计算

**原理：** 在化学计量点时，Ag₂CrO₄ 开始沉淀，此时 [Ag⁺] 由卤化银的 Ksp 决定。

**化学计量点时：**
$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgX})}$$

**Ag₂CrO₄ 沉淀条件：**
$$K_{sp}(\text{Ag}_2\text{CrO}_4) = [\text{Ag}^+]^2 [\text{CrO}_4^{2-}]$$

$$[\text{CrO}_4^{2-}] = \frac{K_{sp}(\text{Ag}_2\text{CrO}_4)}{[\text{Ag}^+]^2}$$

#### 对于 I⁻ 滴定：

$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgI})} = \sqrt{8.3 \times 10^{-17}} = 9.11 \times 10^{-9}\ \text{M}$$

$$[\text{CrO}_4^{2-}] = \frac{1.2 \times 10^{-12}}{(9.11 \times 10^{-9})^2} = \mathbf{1.5 \times 10^4\ \text{M}}$$

#### 对于 Br⁻ 滴定：

$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgBr})} = \sqrt{5.0 \times 10^{-13}} = 7.07 \times 10^{-7}\ \text{M}$$

$$[\text{CrO}_4^{2-}] = \frac{1.2 \times 10^{-12}}{(7.07 \times 10^{-7})^2} = \mathbf{2.4\ \text{M}}$$

#### 对于 Cl⁻ 滴定：

$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgCl})} = \sqrt{1.8 \times 10^{-10}} = 1.34 \times 10^{-5}\ \text{M}$$

$$[\text{CrO}_4^{2-}] = \frac{1.2 \times 10^{-12}}{(1.34 \times 10^{-5})^2} = \mathbf{0.0071\ \text{M}}$$

**结论：** 在莫尔法滴定中，卤化银的 Ksp 越小，所需的指示剂 CrO₄²⁻ 浓度越高。对于 I⁻ 和 Br⁻ 滴定，所需的指示剂浓度过高，实际上不适合用莫尔法滴定。莫尔法通常用于 Cl⁻ 的滴定。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T8-3" -->
**T8-3.** 返滴定法测定 Cl⁻ 浓度

**已知条件：**
- Cl⁻ 样品：V₀ = 30 mL
- AgNO₃：V = 50 mL，C = 0.365 M
- KSCN 滴定剂：C = 0.287 M，V = 37.6 mL

**反应原理：**

1. Cl⁻ 与过量 Ag⁺ 反应：
   $$\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl(s)}$$

2. 过滤除去 AgCl 沉淀（因为 Ksp(AgCl) > Ksp(AgSCN)，若不除去 AgCl，会发生转化反应：AgCl + SCN⁻ → AgSCN + Cl⁻）

3. 剩余 Ag⁺ 用 SCN⁻ 滴定：
   $$\text{Ag}^+ + \text{SCN}^- \rightarrow \text{AgSCN(s)}$$

**计算步骤：**

**1. 计算加入的总 Ag⁺ 物质的量：**
$$n(\text{Ag}^+)_\text{总} = 0.365\ \text{M} \times 0.050\ \text{L} = 0.01825\ \text{mol}$$

**2. 计算与 SCN⁻ 反应的过量 Ag⁺ 物质的量：**
$$n(\text{Ag}^+)_\text{过量} = n(\text{SCN}^-) = 0.287\ \text{M} \times 0.0376\ \text{L} = 0.01079\ \text{mol}$$

**3. 计算与 Cl⁻ 反应的 Ag⁺ 物质的量：**
$$n(\text{Ag}^+)_\text{反应} = n(\text{Ag}^+)_\text{总} - n(\text{Ag}^+)_\text{过量} = 0.01825 - 0.01079 = 0.00746\ \text{mol}$$

**4. 计算 Cl⁻ 浓度：**
$$[\text{Cl}^-] = \frac{n(\text{Cl}^-)}{V_0} = \frac{0.00746\ \text{mol}}{0.030\ \text{L}} = \mathbf{0.249\ \text{M}}$$

**讨论：** 如果忘记过滤除去 AgCl 沉淀，SCN⁻ 会与 AgCl 反应转化为 AgSCN，导致消耗的 SCN⁻ 量增加，即 n(Ag⁺) 过量偏高，最终计算出的 Cl⁻ 浓度会偏低。
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [8T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/8T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [8T-Answer of Tutorial for Anal Chem1 2022.pdf](Tutorials-PDF/8T-Answer of Tutorial for Anal Chem1 2022.pdf)
<!-- PDF_LINKS_END -->