# Tutorial 7 - 酸碱滴定习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **弱酸滴定**：使用 Henderson-Hasselbalch 方程计算缓冲区域的 pH 值
- **化学计量点**：酸碱完全中和的点，此时溶液可能呈酸性、中性或碱性
- **滴定误差**：实际终点与理论化学计量点之间的差异
- **一阶导数法**：通过计算 ΔpH/ΔV 确定滴定终点
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T7-1" -->
**T7-1.** 用 0.1M NaOH 溶液滴定 100 mL 0.05M 醋酸 (CH₃COOH) 溶液 (pKa = 4.76)。计算下列各点的 pH 值：
a. 滴定前（未加碱）
b. 滴定至 20%
c. 滴定至 50%
d. 滴定至 99%
e. 化学计量点
f. 化学计量点后过量 0.5 mL NaOH
g. 化学计量点后过量 10 mL NaOH
h. 绘制 pH 随加入碱体积变化的曲线
<!-- QUESTION_END -->

<!-- QUESTION_START id="T7-2" -->
**T7-2.** 用 HCl 滴定 50 mL 0.042M 甲胺 (CH₃NH₂) 溶液，结果如下：

| V(HCl) /mL | pH | V(HCl) /mL | pH | V(HCl) /mL | pH |
|------------|-----|------------|-----|------------|-----|
| 0 | 11.959 | 10 | 10.686 | 20 | 9.344 |
| 1 | 11.946 | 11 | 10.604 | 21 | 6.087 |
| 2 | 11.623 | 12 | 10.52 | 22 | 2.556 |
| 3 | 11.423 | 13 | 10.434 | 23 | 2.386 |
| 4 | 11.273 | 14 | 10.344 | 24 | 2.267 |
| 5 | 11.15 | 15 | 10.247 | 25 | 2.176 |
| 6 | 11.043 | 16 | 10.14 | 26 | 2.103 |
| 7 | 10.946 | 17 | 10.017 | 27 | 2.041 |
| 8 | 10.856 | 18 | 9.867 | 28 | 1.989 |
| 9 | 10.77 | 19 | 9.667 | 29 | 1.943 |

已知反应：CH₃NH₂ + HCl → CH₃NH₃⁺ + Cl⁻

a. CH₃NH₃⁺ 的 Ka 是多少？（甲胺 CH₃NH₂ 的 Kb 是多少？）
b. HCl 的浓度是多少？
<!-- QUESTION_END -->

<!-- QUESTION_START id="T7-3" -->
**T7-3.** 用 0.10M NaOH 溶液滴定 V₀ = 50.0 mL、C₀ = 0.10M 的 HA 溶液 (Ka = 5×10⁻⁵)。若在终点 pH = 7.52 时停止滴定，而不是理论 pH = 8.50，计算滴定误差。
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T7-1" -->
**T7-1.** 醋酸滴定过程中各点 pH 计算

**已知条件：**
- CH₃COOH：V₀ = 100 mL，C₀ = 0.05 M，pKa = 4.76
- NaOH 滴定剂：C = 0.1 M

**化学计量点体积计算：**
$$V_e = \frac{C_0 V_0}{C} = \frac{0.05\ \text{M} \times 100\ \text{mL}}{0.1\ \text{M}} = 50\ \text{mL}$$

#### a. 滴定前（未加 NaOH）

**判断条件：**
$$\frac{f}{K_a} = \frac{0.05}{1.74 \times 10^{-5}} = 2.87 \times 10^3 \gg 10^2$$

由于 f/Ka >> 10²，可以使用简化公式：

$$[\text{H}^+] = \sqrt{C_0 \cdot K_a} = \sqrt{0.05 \times 1.74 \times 10^{-5}} = 9.33 \times 10^{-4}\ \text{M}$$

$$\text{pH} = -\log(9.33 \times 10^{-4}) = \mathbf{3.03}$$

#### b. 滴定至 20%

加入 NaOH 体积：V = 0.2 × 50 mL = 10 mL

此时溶液为缓冲体系，使用 Henderson-Hasselbalch 方程：

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]} = 4.76 + \log\frac{20\%}{80\%} = 4.76 + \log(0.25) = \mathbf{4.16}$$

#### c. 滴定至 50%（半中和点）

加入 NaOH 体积：V = 0.5 × 50 mL = 25 mL

此时 [A⁻] = [HA]，pH = pKa：

$$\text{pH} = \text{p}K_a = \mathbf{4.76}$$

#### d. 滴定至 99%

加入 NaOH 体积：V = 0.99 × 50 mL = 49.5 mL

$$\text{pH} = \text{p}K_a + \log\frac{99\%}{1\%} = 4.76 + \log(99) = 4.76 + 1.996 = \mathbf{6.76}$$

#### e. 化学计量点（100%）

加入 NaOH 体积：V = 50 mL

此时溶液中只有 CH₃COO⁻，发生水解：
$$\text{CH}_3\text{COO}^- + \text{H}_2\text{O} \rightleftharpoons \text{CH}_3\text{COOH} + \text{OH}^-$$

**计算醋酸根浓度：**
$$[\text{CH}_3\text{COO}^-] = \frac{0.05\ \text{M} \times 100\ \text{mL}}{100\ \text{mL} + 50\ \text{mL}} = 0.0333\ \text{M}$$

**计算 Kb：**
$$K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.74 \times 10^{-5}} = 5.75 \times 10^{-10}$$

**判断条件：**
$$\frac{f}{K_b} = \frac{0.0333}{5.75 \times 10^{-10}} = 5.79 \times 10^7 \gg 10^2$$

可以使用简化公式：
$$[\text{OH}^-] = \sqrt{[\text{CH}_3\text{COO}^-] \cdot K_b} = \sqrt{0.0333 \times 5.75 \times 10^{-10}} = 4.38 \times 10^{-6}\ \text{M}$$

$$\text{pOH} = -\log(4.38 \times 10^{-6}) = 5.36$$

$$\text{pH} = 14 - 5.36 = \mathbf{8.64}$$

#### f. 化学计量点后过量 0.5 mL NaOH

加入 NaOH 总体积：V = 50.5 mL

**过量 OH⁻ 浓度：**
$$[\text{OH}^-]_\text{过量} = \frac{0.1\ \text{M} \times 0.5\ \text{mL}}{100\ \text{mL} + 50.5\ \text{mL}} = \frac{0.05\ \text{mmol}}{150.5\ \text{mL}} = 3.32 \times 10^{-4}\ \text{M}$$

**验证：** 醋酸根水解产生的 OH⁻ 可以忽略
$$[\text{OH}^-]_\text{水解} \approx 5.18 \times 10^{-8}\ \text{M} \ll 3.32 \times 10^{-4}\ \text{M}$$

$$\text{pOH} = -\log(3.32 \times 10^{-4}) = 3.48$$

$$\text{pH} = 14 - 3.48 = \mathbf{10.52}$$

#### g. 化学计量点后过量 10 mL NaOH

加入 NaOH 总体积：V = 60 mL

**过量 OH⁻ 浓度：**
$$[\text{OH}^-] = \frac{0.1\ \text{M} \times 10\ \text{mL}}{100\ \text{mL} + 60\ \text{mL}} = \frac{1\ \text{mmol}}{160\ \text{mL}} = 0.00625\ \text{M}$$

$$\text{pOH} = -\log(0.00625) = 2.20$$

$$\text{pH} = 14 - 2.20 = \mathbf{11.80}$$

#### h. 滴定曲线

| 滴定点 | V(NaOH) /mL | pH |
|--------|-------------|-----|
| 滴定前 | 0 | 3.03 |
| 20% | 10 | 4.16 |
| 50% | 25 | 4.76 |
| 99% | 49.5 | 6.76 |
| 100% | 50 | 8.64 |
| 101% | 50.5 | 10.52 |
| 120% | 60 | 11.80 |
<!-- ANSWER_END -->

<!-- ANSWER_START for="T7-2" -->
**T7-2.** 甲胺滴定分析

#### a. 求 Ka 和 Kb

**确定化学计量点：**

通过一阶导数法（ΔpH/ΔV）确定终点：

| V̅ /mL | ΔpH/ΔV |
|-------|--------|
| 19.5 | 0.323 |
| 20.0 | 1.79 |
| 20.5 | 3.257 |
| 21.0 | 3.394 |
| 21.5 | 3.531 (最大值) |
| 22.0 | 1.850 |
| 22.5 | 0.170 |

**化学计量点体积：** Ve = 21.5 mL

**半中和点：** V₁/₂ = Ve/2 = 10.75 mL

**使用内插法计算 pH at 10.75 mL：**
- V = 10 mL 时，pH = 10.686
- V = 11 mL 时，pH = 10.604

$$\text{pH}_{10.75} = 10.686 - 0.75 \times (10.686 - 10.604) = 10.686 - 0.0615 = 10.62$$

**因此：**
$$\text{p}K_a(\text{CH}_3\text{NH}_3^+) = \mathbf{10.62}$$
$$\text{p}K_b(\text{CH}_3\text{NH}_2) = 14 - 10.62 = \mathbf{3.38}$$

#### b. 求 HCl 浓度

在化学计量点，HCl 与甲胺物质的量相等（1:1 反应）：

$$n(\text{HCl}) = n(\text{CH}_3\text{NH}_2)$$
$$C(\text{HCl}) \times V_e = C_0(\text{CH}_3\text{NH}_2) \times V_0$$
$$C(\text{HCl}) \times 21.5\ \text{mL} = 0.042\ \text{M} \times 50\ \text{mL}$$
$$C(\text{HCl}) = \frac{0.042 \times 50}{21.5} = \mathbf{0.0977\ \text{M}}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T7-3" -->
**T7-3.** 滴定误差计算

**已知条件：**
- V₀ = 50.0 mL，C₀ = 0.10 M HA，Ka = 5×10⁻⁵
- C(NaOH) = 0.10 M
- 终点 pH = 7.52，理论 pH = 8.50

**滴定误差公式：**
$$\text{Titration error} = \varphi_\text{ep} - 1 = \frac{C + C_0}{C \cdot C_0} \left( \frac{K_w}{[\text{H}^+]_\text{ep}} - [\text{H}^+]_\text{ep} \right) - \frac{[\text{H}^+]_\text{ep}}{K_a}$$

**在终点 pH = 7.52 时：**
- [H⁺]ep = 10⁻⁷·⁵² M
- Kw/[H⁺]ep = 10⁻¹⁴/10⁻⁷·⁵² = 10⁻⁶·⁴⁸ M

代入公式：
$$\text{Titration error} = \frac{0.10 + 0.10}{0.10 \times 0.10} \left( 10^{-6.48} - 10^{-7.52} \right) - \frac{10^{-7.52}}{5 \times 10^{-5}}$$
$$= 20 \times (3.31 \times 10^{-7} - 3.02 \times 10^{-8}) - 6.03 \times 10^{-4}$$
$$= 20 \times 3.01 \times 10^{-7} - 6.03 \times 10^{-4}$$
$$= 6.02 \times 10^{-6} - 6.03 \times 10^{-4} = \mathbf{-5.97 \times 10^{-4}}$$

**相对百分误差：**
$$\text{RPE} = -5.97 \times 10^{-4} \times 100\% = \mathbf{-0.06\%}$$

**结论：** 该误差小于滴定管读数误差（约 0.1%），说明选择的指示剂适合此滴定。负号表示终点提前到达（滴定不足）。

**在理论化学计量点 pH = 8.50 时：**
$$\text{Titration error} = \frac{0.10 + 0.10}{0.10 \times 0.10} \left( \frac{10^{-14}}{10^{-8.50}} - 10^{-8.50} \right) - \frac{10^{-8.50}}{5 \times 10^{-5}}$$
$$= 20 \times (3.16 \times 10^{-6} - 3.16 \times 10^{-9}) - 6.32 \times 10^{-5}$$
$$\approx 20 \times 3.16 \times 10^{-6} - 6.32 \times 10^{-5} = 6.32 \times 10^{-5} - 6.32 \times 10^{-5} \approx 0$$

在理论化学计量点，滴定误差接近于零，φep = 1，即 CVep = C₀V₀。
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [7T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/7T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [7T-Answer for Tutorial of Anal Chem1.pdf](Tutorials-PDF/7T-Answer for Tutorial of Anal Chem1.pdf)
<!-- PDF_LINKS_END -->