# Homework 6 - 课后作业

> 📚 分析化学 1 课程作业

---

## 背景知识点

<!-- BACKGROUND_START -->
- **弱酸解离**：$HA \rightleftharpoons H^+ + A^-$，$K_a = \frac{[H^+][A^-]}{[HA]}$
- **解离分数**：$\alpha = \frac{[A^-]}{[A^-] + [HA]} = \frac{K_a}{K_a + [H^+]}$
- **弱酸 pH 计算**：
  - 当 $f \geq 100K_a$ 时，$[H^+] \approx \sqrt{f \cdot K_a}$
  - 精确公式：$[H^+]^2 + K_a[H^+] - K_a \cdot f = 0$
- **缓冲溶液**：由弱酸及其共轭碱组成的溶液，能抵抗 pH 变化
<!-- BACKGROUND_END -->

## 📋 作业题目

<!-- QUESTION_START id="H6-1" -->
**H6-1.** What concentration of HCN (pKa = 9.40) should be prepared in water if its pH wanted to be:
a. pH = 6.20
b. pH = 5.40
<!-- QUESTION_END -->

<!-- QUESTION_START id="H6-2" -->
**H6-2.** Calculate the maximum degree of fraction of dissociation α(ClO⁻) of HClO that can be obtained by consecutive dilutions. The equilibrium constant of HClO Ka = 3.2×10⁻⁸.

$$\alpha(\text{ClO}^-) = \frac{[\text{ClO}^-]}{[\text{ClO}^-] + [\text{HClO}]}$$
$$K_a = \frac{[\text{ClO}^-][\text{H}^+]}{[\text{HClO}]}$$
<!-- QUESTION_END -->

<!-- QUESTION_START id="H6-3" -->
**H6-3.** A solution C of weak acid HX is prepared by mixing two solutions, A and B, containing the same acid with the volume ratio of 1:1. The fraction of dissociation α(X⁻) in the solutions A and B are αA = 1.34% and αB = 0.424%, respectively. Calculate the fraction of dissociation of HX in solution C, αC. (The ionization of H₂O can be considered as negligible.)
<!-- QUESTION_END -->

<!-- QUESTION_START id="H6-4" -->
**H6-4.** The pH of a 0.1000 M solution of the salt CH₃NH₃⁺Cl⁻ is higher than that of solution NH₄⁺Cl⁻ of the same concentration. Which of the following statements are true?
a. NH₃ is a stronger base than CH₃NH₂
b. The fraction degree of dissociation α of CH₃NH₃Cl is higher than that of NH₄Cl
c. CH₃NH₃⁺ is a weaker acid than NH₄⁺
d. The pH value of both solutions is independent on their concentrations
<!-- QUESTION_END -->

---

## ✅ 参考答案

<!-- ANSWER_START for="H6-1" -->
**H6-1.** HCN 溶液浓度计算

HCN 是弱酸，$K_a = 10^{-9.40}$

解离平衡：$\text{HCN} \rightleftharpoons \text{H}^+ + \text{CN}^-$

$$K_a = \frac{x^2}{f-x} \Rightarrow x^2 + K_a \cdot x - K_a \cdot f = 0$$

**a. pH = 6.20**

$$[H^+] = 10^{-6.2}$$

代入方程：
$$(10^{-6.2})^2 + 10^{-9.40} \times 10^{-6.2} - 10^{-9.40} \cdot f = 0$$

解得：$f = 1.0 \times 10^{-3}\ \text{M}$

**b. pH = 5.40**

同理可得：$f = 4.0 \times 10^{-2}\ \text{M}$

**近似计算验证：**

当 $f \geq 100K_a$ 时，可使用近似公式 $[H^+]^2 = K_a \cdot f$

$$f = \frac{[H^+]^2}{K_a}$$

- pH = 6.2：$f = \frac{10^{-12.4}}{10^{-9.40}} = 1.0 \times 10^{-3}\ \text{M}$
- pH = 5.4：$f = \frac{10^{-10.8}}{10^{-9.40}} = 0.040\ \text{M}$

**答案：** 
- a. **1.0 × 10⁻³ M**
- b. **0.040 M**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H6-2" -->
**H6-2.** HClO 最大解离度计算

由两个方程可得：
$$\alpha(\text{ClO}^-) = \frac{K_a}{K_a + [\text{H}^+]}$$

通过连续稀释获得最大 α(ClO⁻) 时，最高 pH 为中性 (pH = 7)

$$\alpha(\text{ClO}^-) = \frac{3.2 \times 10^{-8}}{3.2 \times 10^{-8} + 10^{-7}} \times 100\% = 24.2\%$$

**答案：** 最大解离度为 **24.2%**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H6-3" -->
**H6-3.** 混合溶液解离度计算

**已知条件：**
- αA = 1.34%
- αB = 0.424%
- 体积比 1:1

**计算 [H⁺]：**
$$[\text{H}^+]_A = K_a \left(\frac{1}{\alpha_A} - 1\right) = 73.63K_a$$
$$[\text{H}^+]_B = K_a \left(\frac{1}{\alpha_B} - 1\right) = 234.85K_a$$

**计算浓度：**
使用近似公式 $[H^+]^2 = K_a \cdot f$
$$f_A = 5495K_a$$
$$f_B = 55389K_a$$

**混合后浓度：**
$$f_C = \frac{f_A \cdot V + f_B \cdot V}{2V} = 30442K_a$$

**计算 [H⁺]C：**
$$[\text{H}^+]_C = \sqrt{K_a \cdot f_C} = 173.98K_a$$

**计算 αC：**
$$\alpha_C = \frac{K_a}{K_a + [\text{H}^+]_C} = \frac{K_a}{K_a + 173.98K_a} = 5.72 \times 10^{-3} = 0.572\%$$

**答案：** 溶液 C 的解离度为 **0.572%**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H6-4" -->
**H6-4.** 盐溶液 pH 比较

**答案：c**

**分析：**

已知 0.1000 M CH₃NH₃⁺Cl⁻ 溶液的 pH 高于同浓度 NH₄⁺Cl⁻ 溶液。

- **a. 错误** - CH₃NH₃⁺ 溶液 pH 更高，说明 CH₃NH₃⁺ 是更弱的酸，因此 CH₃NH₂ 是更强的碱
- **b. 错误** - CH₃NH₃⁺ 是更弱的酸，解离度更低
- **c. 正确** - CH₃NH₃⁺ 溶液的 pH 更高，说明它是更弱的酸
- **d. 错误** - 弱酸/弱碱盐的 pH 与浓度有关

**答案：** **c. CH₃NH₃⁺ is a weaker acid than NH₄⁺**
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [6H - Homework.pdf](HW-PDF/6H - Homework.pdf)
- **答案 PDF**: [6H-Answer of Homework for Analy Chem1.pdf](HW-PDF/6H-Answer of Homework for Analy Chem1.pdf)
<!-- PDF_LINKS_END -->