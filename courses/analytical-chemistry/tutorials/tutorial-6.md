# Tutorial 6 - 酸碱与缓冲溶液习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **弱酸 pH 计算**：
  - 当 $f/K_a > 10^2$ 时，可使用简化公式：$[\text{H}^+] = \sqrt{f \cdot K_a}$
  - 当 $f/K_a < 10^2$ 时，需使用精确公式：$[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4fK_a}}{2}$
- **解离分数**：$\alpha(\text{Ac}^-) = \frac{K_a}{[\text{H}^+] + K_a}$
- **凯氏定氮法**：通过测定氨的量来确定样品中的氮含量
- **Henderson-Hasselbalch 方程**：$\text{pH} = \text{p}K_a + \log\frac{[\text{B}]}{[\text{BH}^+]}$
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T6-1" -->
**T6-1.** 计算下列溶液的 pH 值：
a. CH₃COOH 溶液 (Ka=1.8×10⁻⁵)，浓度为 0.010 mol/L；
b. Cl₂CHCOOH 溶液 (Ka=10⁻¹·²⁶)，浓度为 0.20 mol/L。
<!-- QUESTION_END -->

<!-- QUESTION_START id="T6-2" -->
**T6-2.** 求 HAc (Ka=1.75×10⁻⁵) 在下列 pH 值下的解离分数 α：

| pH | α |
|----|---|
| 2.00 | |
| 2.50 | |
| 3.50 | |
| 4.00 | |
| 4.76 | |
| 5.76 | |
| 6.00 | |
| 7.00 | |
| 8.00 | |
<!-- QUESTION_END -->

<!-- QUESTION_START id="T6-3" -->
**T6-3.** 凯氏定氮法是测定蛋白质、牛奶、谷物等中氮含量的重要方法。

在一次实验中，将 1.8 克偏钒酸铵 [(NH₄)₆V₁₀O₂₈·6H₂O] (1173.7 g/mol) 放入凯氏烧瓶中，与过量 NaOH 一起加热得到氨。将氨蒸馏并收集到装有 50 mL 0.1M H₂SO₄ 的吸收瓶中。反应结束后，用 28 mL 0.05M NaOH 滴定溶液。

求样品中氮的质量百分比？并将测得值与根据分子量计算的理论值进行比较。
<!-- QUESTION_END -->

<!-- QUESTION_START id="T6-4" -->
**T6-4.** 向 1.00L 含有 12.43g "tris"（三羟甲基氨基甲烷，B）(121.135 g/mol) 和 4.67g 其共轭酸 BH⁺ (157.596 g/mol) 的溶液中加入 15.0 mL 1.50M HCl 后，缓冲溶液的 pH 是多少？已知 tris 的 pKa 为 8.072。
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T6-1" -->
**T6-1.** 计算溶液的 pH 值

**注意：** pH 值保留到小数点后两位（0.01），这是为了保持一致性，也因为 0.01 接近 pH 测量的准确度极限。

#### a. CH₃COOH 溶液 (0.010 M)

**判断条件：**
- $f \cdot K_a = 0.010 \times 1.8 \times 10^{-5} = 1.8 \times 10^{-4} \gg 10K_w (10^{-13})$
- $f/K_a = 0.010 / (1.8 \times 10^{-5}) = 5.56 \times 10^2 > 10^2$

由于 $f/K_a > 10^2$，可以使用简化公式计算：

$$[\text{H}^+] = \sqrt{f \cdot K_a} = \sqrt{0.01 \times 1.8 \times 10^{-5}} = 4.24 \times 10^{-4}\ \text{M}$$

$$\text{pH} = -\log(4.24 \times 10^{-4}) = \mathbf{3.37}$$

**验证：** 若使用精确公式：
$$[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4fK_a}}{2} = 4.15 \times 10^{-4}\ \text{M}$$
$$\text{pH} = 3.38$$

两种方法结果非常接近，说明当 $f/K_a > 10^2$ 时，使用简化公式是安全的。

#### b. Cl₂CHCOOH 溶液 (0.20 M)

**判断条件：**
- $f \cdot K_a = 10^{-1.26} \times 0.20 = 0.011 \gg 10K_w (10^{-13})$
- $f/K_a = 0.20 / 10^{-1.26} = 3.64 < 10^2$

由于 $f/K_a < 10^2$，**不能使用简化公式**，必须使用精确公式：

$$[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4fK_a}}{2}$$

代入数据：
$$[\text{H}^+] = \frac{-10^{-1.26} + \sqrt{(10^{-1.26})^2 + 4 \times 0.20 \times 10^{-1.26}}}{2} = 0.0809\ \text{M}$$

$$\text{pH} = -\log(0.0809) = \mathbf{1.09}$$

**错误示例：** 若错误使用简化公式 $[\text{H}^+] = \sqrt{f \cdot K_a}$，会得到 [H⁺] = 0.105 M，pH = 0.98，这是不正确的。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T6-2" -->
**T6-2.** 解离分数 α 的计算

**公式推导：**

对于弱酸 HAc ⇌ H⁺ + Ac⁻，解离分数 α(Ac⁻) 定义为：

$$\alpha(\text{Ac}^-) = \frac{[\text{Ac}^-]}{[\text{Ac}^-] + [\text{HAc}]}$$

由 $K_a = \frac{[\text{H}^+][\text{Ac}^-]}{[\text{HAc}]}$，可得：

$$\alpha(\text{Ac}^-) = \frac{K_a}{[\text{H}^+] + K_a}$$

**计算结果：**

| pH | [H⁺] (M) | α(Ac⁻) | α(HAc) |
|----|----------|--------|--------|
| 2.00 | 1.0×10⁻² | 0.00175 | 0.998 |
| 2.50 | 3.16×10⁻³ | 0.00550 | 0.995 |
| 3.50 | 3.16×10⁻⁴ | 0.0524 | 0.948 |
| 4.00 | 1.0×10⁻⁴ | 0.149 | 0.851 |
| 4.76 | 1.74×10⁻⁵ | 0.502 | 0.498 |
| 5.76 | 1.74×10⁻⁶ | 0.910 | 0.090 |
| 6.00 | 1.0×10⁻⁶ | 0.946 | 0.054 |
| 7.00 | 1.0×10⁻⁷ | 0.994 | 0.006 |
| 8.00 | 1.0×10⁻⁸ | 0.999 | 0.001 |

**说明：**
- 当 pH = pKa = 4.76 时，α(Ac⁻) ≈ α(HAc) ≈ 0.5
- 当 pH < pKa 时，主要以 HAc 形式存在
- 当 pH > pKa 时，主要以 Ac⁻ 形式存在
<!-- ANSWER_END -->

<!-- ANSWER_START for="T6-3" -->
**T6-3.** 凯氏定氮法测定氮含量

**已知条件：**
- 样品质量：1.8 g (NH₄)₆V₁₀O₂₈·6H₂O
- 摩尔质量：1173.7 g/mol
- 吸收液：50 mL 0.1M H₂SO₄
- 滴定消耗：28 mL 0.05M NaOH

**反应原理：**
1. 氨的生成：(NH₄)₆V₁₀O₂₈·6H₂O + NaOH → NH₃↑ + 其他产物
2. 氨的吸收：2NH₃ + H₂SO₄ → (NH₄)₂SO₄
3. 剩余酸滴定：H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O

**计算步骤：**

**1. 计算 H₂SO₄ 的总物质的量：**
$$n(\text{H}_2\text{SO}_4)_\text{总} = 0.1\ \text{M} \times 0.050\ \text{L} = 0.005\ \text{mol}$$

**2. 计算与 NaOH 反应的 H₂SO₄ 物质的量：**
$$n(\text{NaOH}) = 0.05\ \text{M} \times 0.028\ \text{L} = 0.0014\ \text{mol}$$
$$n(\text{H}_2\text{SO}_4)_\text{剩余} = \frac{1}{2} \times n(\text{NaOH}) = 0.0007\ \text{mol}$$

**3. 计算与 NH₃ 反应的 H₂SO₄ 物质的量：**
$$n(\text{H}_2\text{SO}_4)_\text{反应} = n(\text{H}_2\text{SO}_4)_\text{总} - n(\text{H}_2\text{SO}_4)_\text{剩余} = 0.005 - 0.0007 = 0.0043\ \text{mol}$$

**4. 计算 NH₃ 的物质的量：**
$$n(\text{NH}_3) = 2 \times n(\text{H}_2\text{SO}_4)_\text{反应} = 2 \times 0.0043 = 0.0086\ \text{mol}$$

**5. 计算氮的质量和百分比：**
$$m(\text{N}) = n(\text{NH}_3) \times M(\text{N}) = 0.0086\ \text{mol} \times 14.01\ \text{g/mol} = 0.1205\ \text{g}$$
$$w(\text{N}) = \frac{0.1205\ \text{g}}{1.8\ \text{g}} \times 100\% = \mathbf{6.69\%}$$

**理论值计算：**
$$n(\text{样品}) = \frac{1.8\ \text{g}}{1173.7\ \text{g/mol}} = 0.001534\ \text{mol}$$
$$n(\text{N})_\text{理论} = 6 \times n(\text{样品}) = 6 \times 0.001534 = 0.009204\ \text{mol}$$
$$m(\text{N})_\text{理论} = 0.009204\ \text{mol} \times 14.01\ \text{g/mol} = 0.1289\ \text{g}$$
$$w(\text{N})_\text{理论} = \frac{0.1289\ \text{g}}{1.8\ \text{g}} \times 100\% = \mathbf{7.16\%}$$

**结论：** 测得值 (6.69%) 与理论值 (7.16%) 接近，实验误差在可接受范围内。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T6-4" -->
**T6-4.** 缓冲溶液 pH 计算

**已知条件：**
- tris (B)：12.43 g，M = 121.135 g/mol，pKa = 8.072
- BH⁺：4.67 g，M = 157.596 g/mol
- 加入 HCl：15.0 mL，1.50 M
- 初始体积：1.00 L

**计算步骤：**

**1. 计算初始浓度：**
$$[\text{B}]_0 = \frac{12.43\ \text{g}}{121.135\ \text{g/mol} \times 1.00\ \text{L}} = 0.1026\ \text{M}$$
$$[\text{BH}^+]_0 = \frac{4.67\ \text{g}}{157.596\ \text{g/mol} \times 1.00\ \text{L}} = 0.0296\ \text{M}$$

**2. 计算加入 HCl 后的浓度（考虑体积变化）：**
总体积 = 1.00 L + 0.015 L = 1.015 L

$$[\text{B}]_f = \frac{0.1026\ \text{mol/L} \times 1.00\ \text{L}}{1.015\ \text{L}} = 0.1011\ \text{M}$$
$$[\text{BH}^+]_f = \frac{0.0296\ \text{mol/L} \times 1.00\ \text{L}}{1.015\ \text{L}} = 0.02916\ \text{M}$$
$$[\text{HCl}] = \frac{1.50\ \text{mol/L} \times 0.015\ \text{L}}{1.015\ \text{L}} = 0.02217\ \text{M}$$

**3. 计算反应后的浓度：**

HCl 与 tris (B) 反应：B + H⁺ → BH⁺

| 物质 | 初始浓度 (M) | 变化 (M) | 最终浓度 (M) |
|------|-------------|---------|-------------|
| B | 0.1011 | -0.02217 | 0.07893 |
| H⁺ | 0.02217 | -0.02217 | 0 |
| BH⁺ | 0.02916 | +0.02217 | 0.05133 |

**4. 使用 Henderson-Hasselbalch 方程计算 pH：**

$$\text{pH} = \text{p}K_a + \log\frac{[\text{B}]}{[\text{BH}^+]} = 8.072 + \log\frac{0.07893}{0.05133} = \mathbf{8.26}$$

**近似说明：**

1. **弱酸/共轭碱混合物的浓度近似**：当混合 A mol 弱酸和 B mol 其共轭碱时，酸的物质的量仍接近 A，碱的物质的量仍接近 B，因为解离程度很小。

2. **强酸与弱碱反应完全**：强酸与弱碱反应的平衡常数很大，可以认为反应进行完全。对于 tris 与 HCl 的反应：
   $$K = \frac{1}{K_a} = \frac{1}{10^{-8.072}} = 1.2 \times 10^8$$
   平衡常数非常大，反应可以认为进行 100%。

**结论：** 缓冲溶液在加入少量强酸时，pH 变化不大。本例中加入 15 mL 1.50M HCl 后，pH 从约 8.61 变为 8.26（ΔpH ≈ 0.35）。相比之下，若将同样量的 HCl 加入 1.0 L 无缓冲的水溶液（pH ≈ 7），pH 会降至约 1.93（ΔpH ≈ 5）。这充分体现了缓冲溶液的缓冲能力。
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [6T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/6T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [6T-Answer for Tutorial of Anal Chem1.pdf](Tutorials-PDF/6T-Answer for Tutorial of Anal Chem1.pdf)
<!-- PDF_LINKS_END -->