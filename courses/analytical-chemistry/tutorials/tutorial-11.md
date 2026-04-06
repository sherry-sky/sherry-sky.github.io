# Tutorial 11 - 电分析习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **极谱法**：扩散电流与被分析物的本体浓度成正比，半波电位（E₁/₂）可用于定性分析
- **电重量分析**：通过电解沉积测定物质含量
- **法拉第定律**：$Q = I \times t = n \times F$，其中 F = 96485 C/mol
- **库仑滴定**：通过电解产生的滴定剂进行滴定分析
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T11-1" -->
**T11-1.** 药物 Librium 在 0.05M H₂SO₄ 中给出极谱波，E₁/₂ = -0.265 V（相对于 S.C.E.）。50.0 mL 含 Librium 的样品给出波高 0.37 μA。当向样品中加入 2.00 mL 3.00 mM Librium（溶于 0.05M H₂SO₄）后，波高增加到 0.8 μA。求未知样品中 Librium 的摩尔浓度。
<!-- QUESTION_END -->

<!-- QUESTION_START id="T11-2" -->
**T11-2.** 能与 Ag⁺ 反应的离子可以通过在银工作阳极上沉积进行电重量分析测定：
$$\text{Ag(s)} + \text{X}^- \rightarrow \text{AgX(s)} + \text{e}^- \quad \text{X} = \text{Cl}^-, \text{Br}^-, \text{I}^-, \text{SCN}^-$$

a. 若阳极初始质量为 12.4683 g，电解 75.00 mL 0.02380M KSCN（SCN⁻ 的摩尔质量为 58.078 g/mol）后，银阳极的最终质量是多少？

b. 从 0.10M Br⁻ 中沉积 AgBr(s) 需要的电解电压（相对于 S.C.E.，E = 0.241 V）是多少？
$$\text{AgBr(s)} + \text{e}^- \rightleftharpoons \text{Ag(s)} + \text{Br}^- \quad E° = 0.071\ \text{V}$$
（考虑可忽略的电流，因此没有欧姆电位、浓度极化或过电位）

c. 通过控制电位电解，理论上能否将 99.99% 的 0.1M KI 从 0.10M KBr 中分离出来？
- Ksp(AgI) = 8.3×10⁻¹⁷
- Ksp(AgBr) = 5.0×10⁻¹³
<!-- QUESTION_END -->

<!-- QUESTION_START id="T11-3" -->
**T11-3.** 在电解池中，用 0.800 A 的恒定电流在阴极沉积铜并在阳极释放氧气。计算 15.2 分钟内形成的每种产物的质量（克）。假设不发生其他氧化还原反应，使用以下反应：
$$\text{Cu}^{2+}(\text{aq}) + 2\text{e}^- \rightleftharpoons \text{Cu(s)}$$
$$\text{O}_2(\text{g}) + 4\text{H}^+(\text{aq}) + 4\text{e}^- \rightleftharpoons 2\text{H}_2\text{O(l)}$$
<!-- QUESTION_END -->

<!-- QUESTION_START id="T11-4" -->
**T11-4.** 使用与 T11-3 相同的装置进行库仑滴定。在阳极室中加入几滴溴百里酚蓝指示剂（pKa = 7.1，pH 范围 6.0-7.6，颜色从黄色变为蓝色）和 1.00 mL 未知浓度的 KOH。按下启动按钮，通过 0.800 A 恒定电流在阳极室中产生酸。当观察到溶液颜色从黄色变为蓝色时，关闭电流并记录反应时间为 15.2 分钟。计算 KOH 的浓度。
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T11-1" -->
**T11-1.** 极谱法测定 Librium 浓度

**原理：** 在伏安法中，若有足够浓度的支持电解质，扩散电流与被分析物的本体浓度成正比。半波电位（E₁/₂，最大电流一半时的电位）是特定被分析物在特定介质中的特征值，可用于定性分析。

**已知条件：**
- 样品体积：V₀ = 50.0 mL
- 初始波高：y₁ = 0.37 μA
- 加入标准液：Vs = 2.00 mL，Cs = 3.00 mM
- 加入后波高：y₂ = 0.8 μA

**设未知样品浓度为 x mM：**

加入前：
$$y_1 = k \cdot x = 0.37\ \mu\text{A}$$

加入后：
$$y_2 = k \cdot \frac{V_0 x + V_s C_s}{V_0 + V_s} = k \cdot \frac{50.0x + 2.00 \times 3.00}{50.0 + 2.00} = 0.8\ \mu\text{A}$$

**联立方程：**
$$\frac{y_2}{y_1} = \frac{50.0x + 6.00}{52.0x} = \frac{0.8}{0.37}$$

解得：
$$x = \mathbf{0.096\ \text{mM}}$$

**说明：** 本题结合了伏安法和标准加入法。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T11-2" -->
**T11-2.** 电重量分析

#### a. 银阳极最终质量计算

**已知条件：**
- KSCN：V = 75.00 mL，C = 0.02380 M
- 阳极初始质量：12.4683 g
- SCN⁻ 摩尔质量：58.078 g/mol

**反应：**
$$\text{Ag(s)} + \text{SCN}^- \rightarrow \text{AgSCN(s)} + \text{e}^-$$

**计算：**
$$n(\text{SCN}^-) = 0.02380\ \text{M} \times 0.07500\ \text{L} = 1.785\ \text{mmol}$$

1 mol SCN⁻ 产生 1 mol AgSCN，沉积在阳极上：
$$m(\text{SCN}) = 1.785\ \text{mmol} \times 58.078\ \text{g/mol} = 103.67\ \text{mg} = 0.1037\ \text{g}$$

**最终质量：**
$$m_\text{最终} = 12.4683\ \text{g} + 0.1037\ \text{g} = \mathbf{12.5720\ \text{g}}$$

#### b. AgBr 沉积的电解电压

**已知条件：**
- [Br⁻] = 0.10 M
- AgBr(s) + e⁻ ⇌ Ag(s) + Br⁻，E° = 0.071 V
- E(S.C.E.) = 0.241 V

**阳极电位（Nernst 方程）：**
$$E_\text{阳} = E° - 0.05916 \log[\text{Br}^-] = 0.071 - 0.05916 \log(0.10) = 0.071 + 0.05916 = 0.130\ \text{V}$$

**阴极电位（S.C.E.）：**
$$E_\text{阴} = E(\text{S.C.E.}) = 0.241\ \text{V}$$

**电解电压：**
$$E = E_\text{阴} - E_\text{阳} = 0.241\ \text{V} - 0.130\ \text{V} = \mathbf{0.111\ \text{V}}$$

#### c. KI 与 KBr 的分离可能性

**已知条件：**
- [I⁻]₀ = [Br⁻]₀ = 0.1 M
- Ksp(AgI) = 8.3×10⁻¹⁷
- Ksp(AgBr) = 5.0×10⁻¹³

**去除 99.99% I⁻ 后：**
$$[\text{I}^-] = 0.1\ \text{M} \times 0.0001 = 1.0 \times 10^{-5}\ \text{M}$$

**与 I⁻ 平衡的 [Ag⁺]：**
$$[\text{Ag}^+] = \frac{K_{sp}(\text{AgI})}{[\text{I}^-]} = \frac{8.3 \times 10^{-17}}{1.0 \times 10^{-5}} = 8.3 \times 10^{-12}\ \text{M}$$

**与 Br⁻ 平衡的 [Ag⁺]：**
$$[\text{Ag}^+]' = \frac{K_{sp}(\text{AgBr})}{[\text{Br}^-]} = \frac{5.0 \times 10^{-13}}{0.10} = 5.0 \times 10^{-12}\ \text{M}$$

**结论：** 当 [Ag⁺] 达到 8.3×10⁻¹² M 时，AgBr 也开始沉淀（因为 8.3×10⁻¹² > 5.0×10⁻¹²）。因此，**理论上无法通过控制电位电解将 99.99% 的 KI 从 KBr 中分离出来**。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T11-3" -->
**T11-3.** 电解产物质量计算

**已知条件：**
- 电流：I = 0.800 A
- 时间：t = 15.2 min = 15.2 × 60 = 912 s
- 法拉第常数：F = 96485 C/mol
- Cu 摩尔质量：63.55 g/mol
- O₂ 摩尔质量：32 g/mol

**计算通过的电量：**
$$Q = I \times t = 0.800\ \text{A} \times 912\ \text{s} = 729.6\ \text{C}$$

**电子物质的量：**
$$n_\text{e} = \frac{Q}{F} = \frac{729.6\ \text{C}}{96485\ \text{C/mol}} = 7.56 \times 10^{-3}\ \text{mol}$$

#### 阴极产物（Cu）

反应：Cu²⁺ + 2e⁻ → Cu(s)

每生成 1 mol Cu 需要 2 mol 电子：
$$n(\text{Cu}) = \frac{1}{2} n_\text{e} = \frac{1}{2} \times 7.56 \times 10^{-3} = 3.78 \times 10^{-3}\ \text{mol}$$

$$m(\text{Cu}) = n(\text{Cu}) \times M(\text{Cu}) = 3.78 \times 10^{-3}\ \text{mol} \times 63.55\ \text{g/mol} = \mathbf{0.240\ \text{g}}$$

#### 阳极产物（O₂）

反应：2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻

每生成 1 mol O₂ 需要 4 mol 电子：
$$n(\text{O}_2) = \frac{1}{4} n_\text{e} = \frac{1}{4} \times 7.56 \times 10^{-3} = 1.89 \times 10^{-3}\ \text{mol}$$

$$m(\text{O}_2) = n(\text{O}_2) \times M(\text{O}_2) = 1.89 \times 10^{-3}\ \text{mol} \times 32\ \text{g/mol} = \mathbf{0.0605\ \text{g}}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T11-4" -->
**T11-4.** 库仑滴定测定 KOH 浓度

**已知条件：**
- 电流：I = 0.800 A
- 时间：t = 15.2 min = 912 s
- KOH 样品体积：V = 1.00 mL

**电子物质的量：**
$$n_\text{e} = \frac{I \times t}{F} = \frac{0.800 \times 912}{96485} = 7.56 \times 10^{-3}\ \text{mol}$$

**阳极反应：**
$$2\text{H}_2\text{O(l)} \rightleftharpoons \text{O}_2(\text{g}) + 4\text{H}^+(\text{aq}) + 4\text{e}^-$$

每 1 mol 电子产生 1 mol H⁺：
$$n(\text{H}^+) = n_\text{e} = 7.56 \times 10^{-3}\ \text{mol}$$

**滴定反应：**
$$\text{OH}^- + \text{H}^+ \rightleftharpoons \text{H}_2\text{O(l)}$$

KOH 物质的量等于 H⁺ 物质的量：
$$n(\text{KOH}) = n(\text{H}^+) = 7.56 \times 10^{-3}\ \text{mol}$$

**KOH 浓度：**
$$C(\text{KOH}) = \frac{n(\text{KOH})}{V} = \frac{7.56 \times 10^{-3}\ \text{mol}}{0.00100\ \text{L}} = \mathbf{7.56\ \text{M}}$$
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [11T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/11T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [11T-Answer for Tutorial of Anal Chem1.pdf](Tutorials-PDF/11T-Answer for Tutorial of Anal Chem1.pdf)
<!-- PDF_LINKS_END -->