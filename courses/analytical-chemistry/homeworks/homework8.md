# Homework 8 - 课后作业

> 📚 分析化学 1 课程作业

---

## 背景知识点

<!-- BACKGROUND_START -->
- **沉淀滴定**：利用沉淀反应进行的滴定分析
- **溶度积 (Ksp)**：沉淀溶解平衡的平衡常数，Ksp 越小，沉淀越完全
- **化学计量点**：滴定剂与被滴定物按化学计量比完全反应的点
- **莫尔法滴定误差**：终点与化学计量点之间的差异，可通过空白滴定减小
- **氧化还原滴定**：利用氧化还原反应进行的滴定分析
<!-- BACKGROUND_END -->

## 📋 作业题目

<!-- QUESTION_START id="H8-1" -->
**H8-1.** Calculation concentration during a precipitation titration

25.00 mL of 0.04132 M Hg₂(NO₃)₂ were titrated with 0.05789 M KIO₃. The reaction is following:
$$\text{Hg}_2^{2+} + 2\text{IO}_3^- \rightarrow \text{Hg}_2(\text{IO}_3)_2\downarrow \quad K_{sp}[\text{Hg}_2(\text{IO}_3)_2] = 1.3 \times 10^{-18}$$

Find the [Hg₂²⁺] in the solution after addition of:
a. 34.00 mL of KIO₃
b. 36.00 mL of KIO₃
c. At the equivalence point
<!-- QUESTION_END -->

<!-- QUESTION_START id="H8-2" -->
**H8-2.** Which statements about the precipitation titration is incorrect (Single choice question)?
a. Detecting the sudden change in the voltage or current between pair of electrodes.
b. Observing an indicator color change.
c. Monitoring absorption of light.
d. Ksp of the generated precipitate has no effect on the slope of curve nearby the end point.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H8-3" -->
**H8-3.** Which statements is NOT correct about the titration error in Mohr titration (Single choice question)?
a. Titration error is the difference between the end point and the equivalence point.
b. We can reduce the titration error by performing a blank titration, in which the same procedures are carried out without analyte.
c. Titration error is escapable.
d. We cannot observe the color change until the unreacted titrant accumulates enough to react with indicator after the equivalence point.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H8-4" -->
**H8-4.** 5.00 mL urine sample with Ca²⁺ was precipitated with oxalate H₂C₂O₄ and redissolved. Then, 16.17 mL of standard permanganate MnO₄⁻ solution (8.794×10⁻⁴ M) was required at the end point for this redox titration. How much the concentration of Ca²⁺ in the urine sample?

The precipitation of Calcium is:
$$\text{Ca}^{2+} + \text{C}_2\text{O}_4^{2-} \rightarrow \text{CaC}_2\text{O}_4\downarrow$$

The reaction for the redox titration is following:
$$5\text{HO}_2\text{C-CO}_2\text{H} + 2\text{MnO}_4^- + 6\text{H}^+ \rightarrow 10\text{CO}_2 + 2\text{Mn}^{2+} + 8\text{H}_2\text{O}$$
<!-- QUESTION_END -->

---

## ✅ 参考答案

<!-- ANSWER_START for="H8-1" -->
**H8-1.** 沉淀滴定过程中浓度计算

**首先计算化学计量点体积：**
$$V_e = 2 \times \frac{25.00\ \text{mL} \times 0.04132\ \text{M}}{0.05789\ \text{M}} = 35.69\ \text{mL}$$

**a. 当 V = 34 mL 时 (V < Ve)：**

Hg₂²⁺ 沉淀未完全，剩余浓度为：
$$[\text{Hg}_2^{2+}] = \frac{25.00\ \text{mL} \times 0.04132\ \text{M} - (34.00\ \text{mL} \times 0.05789\ \text{M}) \div 2}{25\ \text{mL} + 34\ \text{mL}} = 8.283 \times 10^{-4}\ \text{M}$$

**b. 当 V = 36 mL 时 (V > Ve)：**

Hg₂²⁺ 沉淀完全，IO₃⁻ 过量，Hg₂²⁺ 来自 Hg₂(IO₃)₂ 的溶解。

首先计算 [IO₃⁻]：
$$[\text{IO}_3^-] = \frac{(36.00\ \text{mL} \times 0.05789\ \text{M}) - (25.00\ \text{mL} \times 0.04132\ \text{M}) \times 2}{25\ \text{mL} + 36\ \text{mL}} = 2.9574 \times 10^{-4}\ \text{M}$$

根据 Ksp 计算 [Hg₂²⁺]：
$$[\text{Hg}_2^{2+}] = \frac{K_{sp}}{[\text{IO}_3^-]^2} = \frac{1.3 \times 10^{-18}}{(2.9574 \times 10^{-4})^2} = 1.486 \times 10^{-11}\ \text{M}$$

**c. 在化学计量点 (V = 35.69 mL)：**

恰好有足够的 IO₃⁻ 与 Hg₂²⁺ 反应。Hg₂(IO₃)₂ 的溶解产生 2 倍 IO₃⁻：
$$\text{Hg}_2(\text{IO}_3)_2 \rightleftharpoons \text{Hg}_2^{2+} + 2\text{IO}_3^-$$
$$(x)(2x)^2 = K_{sp}$$
$$x = 6.875 \times 10^{-7}\ \text{M}$$

**答案：**
- a. **8.283 × 10⁻⁴ M**
- b. **1.486 × 10⁻¹¹ M**
- c. **6.875 × 10⁻⁷ M**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H8-2" -->
**H8-2.** 沉淀滴定陈述判断

**答案：d**

**分析：**
- a. 正确 - 可通过检测电极间电压或电流的突变来确定终点
- b. 正确 - 可通过观察指示剂颜色变化来确定终点
- c. 正确 - 可通过监测光吸收来确定终点
- d. 错误 - 溶度积 Ksp 影响终点附近曲线的斜率。Ksp 越小，滴定突跃越大，终点越敏锐

**答案：** **d**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H8-3" -->
**H8-3.** 莫尔法滴定误差陈述判断

**答案：c**

**分析：**
- a. 正确 - 滴定误差是终点与化学计量点之间的差异
- b. 正确 - 可通过空白滴定减小滴定误差
- c. 错误 - 滴定误差是不可避免的
- d. 正确 - 在化学计量点后，需要积累足够的未反应滴定剂与指示剂反应才能观察到颜色变化

**答案：** **c**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H8-4" -->
**H8-4.** 尿液中 Ca²⁺ 浓度测定

**已知条件：**
- 尿液样品体积：5.00 mL
- KMnO₄ 体积：16.17 mL，浓度：8.794×10⁻⁴ M

**计算 MnO₄⁻ 物质的量：**
$$n(\text{MnO}_4^-) = 16.17\ \text{mL} \times 8.794 \times 10^{-4}\ \text{M} = 1.422 \times 10^{-5}\ \text{mol}$$

**计算 C₂O₄²⁻ 物质的量：**
$$n(\text{C}_2\text{O}_4^{2-}) = \frac{5}{2} \times n(\text{MnO}_4^-) = 0.03555\ \text{mmol}$$

**计算 Ca²⁺ 浓度：**

由于 1 mol 草酸根与 1 mol Ca²⁺ 反应：
$$n(\text{Ca}^{2+}) = 0.03555\ \text{mmol}$$
$$[\text{Ca}^{2+}] = \frac{0.03555\ \text{mmol}}{5.00\ \text{mL}} = 0.00711\ \text{M}$$

**答案：** 尿液中 Ca²⁺ 浓度为 **0.00711 M**
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [8H-Homework for Analy Chem1.pdf](HW-PDF/8H-Homework for Analy Chem1.pdf)
- **答案 PDF**: [8H-Answer of Homework for Analy Chem1.pdf](HW-PDF/8H-Answer of Homework for Analy Chem1.pdf)
<!-- PDF_LINKS_END -->