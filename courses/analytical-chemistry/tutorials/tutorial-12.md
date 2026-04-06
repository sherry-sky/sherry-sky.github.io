# Tutorial 12 - 重量分析习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **重量分析**：通过称量沉淀的质量来确定被测组分含量的分析方法
- **沉淀洗涤**：少量多次的洗涤方式比一次性用大量洗涤液更有效
  - 洗涤 n 次后残留污染物分数：$\frac{x_n}{x_0} = \left(\frac{\mu}{\mu + V/n}\right)^n$
  - 其中 μ 为沉淀液体积，V 为洗涤液总体积
- **化学计量关系**：利用反应的摩尔比进行计算
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T12-1" -->
**T12-1.** 一个 0.649 g 样品含有 K₂SO₄ (M.W. 174.27 g/mol) 和 (NH₄)₂SO₄ (M.W. 132.14 g/mol)，将其溶于水并用 Ba(NO₃)₂ (M.W. 233.39 g/mol) 处理，使所有 SO₄²⁻ 沉淀为 BaSO₄。若得到 0.977 g 沉淀，求样品中 K₂SO₄ 的质量百分比。
<!-- QUESTION_END -->

<!-- QUESTION_START id="T12-2" -->
**T12-2.** 在重量分析中，一个摩尔质量为 417 g/mol 的有机化合物通过以下反应分析乙氧基 (CH₃CH₂O—)：

$$\text{CH}_3\text{CH}_2\text{OR} + \text{HI} \rightarrow \text{ROH} + \text{CH}_3\text{CH}_2\text{I}$$
$$\text{CH}_3\text{CH}_2\text{I} + \text{Ag}^+ + \text{OH}^- \rightarrow \text{AgI(↓)} + \text{CH}_3\text{CH}_2\text{OH}$$

25.42 mg 该化合物样品产生 29.03 mg AgI。每个分子中有多少个乙氧基？
<!-- QUESTION_END -->

<!-- QUESTION_START id="T12-3" -->
**T12-3.** 测定钢中的镍 (Ni) 含量时，将合金溶于 12M HCl 中，并在柠檬酸根离子存在下中和。将微碱性溶液加热，加入醇性丁二酮肟 (DMG) 溶液，定量沉淀红色 DMG-Ni 配合物。将产物过滤，用冷水洗涤，在 110°C 下干燥。

a. 若已知 Ni 含量约为 3 wt%，你希望分析 1.0 g 钢。为了使 DMG 过量 50%，应使用多少体积的 1.0 wt% 醇性 DMG 溶液？DMG 的密度为 0.79 g/mL。

b. 若 1.1634 g 钢产生 0.1795 g 沉淀，钢中 Ni 的百分比是多少？

已知：
- M.W.(Ni) = 58.69 g/mol
- M.W.(DMG) = 116.12 g/mol
- M.W.(配合物) = 288.91 g/mol
<!-- QUESTION_END -->

<!-- QUESTION_START id="T12-4" -->
**T12-4.** 沉淀液是指残留在沉淀中并含有污染物的液体。若沉淀液体积为 1 mL，洗涤液为 20 mL，请计算洗涤 n 次（n = 1, 2, 3）后沉淀液中残留的污染物。若洗涤液增加到 60 mL，你的答案将如何变化？从结果中可以得出什么结论？
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T12-1" -->
**T12-1.** 混合物中 K₂SO₄ 含量测定

**已知条件：**
- 样品质量：0.649 g
- 沉淀 BaSO₄ 质量：0.977 g
- M.W.(K₂SO₄) = 174.27 g/mol
- M.W.((NH₄)₂SO₄) = 132.14 g/mol
- M.W.(BaSO₄) = 233.39 g/mol

**设：** 样品中 K₂SO₄ 质量为 x g，(NH₄)₂SO₄ 质量为 y g

**方程组：**
$$x + y = 0.649\ \text{g} \quad \text{(1)}$$

两种硫酸盐都产生 BaSO₄ 沉淀：
$$\frac{x}{174.27} + \frac{y}{132.14} = \frac{0.977}{233.39} \quad \text{(2)}$$

**代入 y = 0.649 - x 到方程 (2)：**
$$\frac{x}{174.27} + \frac{0.649 - x}{132.14} = 0.004186$$

解得：
$$x = 0.397\ \text{g}$$

**K₂SO₄ 质量百分比：**
$$w(\text{K}_2\text{SO}_4) = \frac{0.397\ \text{g}}{0.649\ \text{g}} \times 100\% = \mathbf{61.1\%}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T12-2" -->
**T12-2.** 乙氧基数目测定

**已知条件：**
- 有机化合物摩尔质量：417 g/mol
- 样品质量：25.42 mg
- AgI 沉淀质量：29.03 mg
- M.W.(AgI) = 234.77 g/mol

**反应计量关系：**
1 mol 乙氧基 → 1 mol CH₃CH₂I → 1 mol AgI

**计算：**
$$n(\text{AgI}) = \frac{29.03\ \text{mg}}{234.77\ \text{g/mol}} = 0.12365\ \text{mmol}$$

$$n(\text{化合物}) = \frac{25.42\ \text{mg}}{417\ \text{g/mol}} = 0.06090\ \text{mmol}$$

**每个分子中乙氧基数目：**
$$\frac{n(\text{乙氧基})}{n(\text{化合物})} = \frac{0.12365\ \text{mmol}}{0.06090\ \text{mmol}} = 2.03 \approx \mathbf{2}$$

**结论：** 每个有机化合物分子中含有 **2 个乙氧基**。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T12-3" -->
**T12-3.** 钢中镍含量测定

#### a. DMG 溶液体积计算

**已知条件：**
- 钢样品质量：1.0 g
- Ni 含量：约 3 wt%
- DMG 溶液：1.0 wt%，密度 0.79 g/mL
- 要求 DMG 过量 50%

**反应：** 1 mol Ni²⁺ 与 2 mol DMG 反应生成 Ni(DMG)₂ 沉淀

**计算 Ni 物质的量：**
$$n(\text{Ni}) = \frac{1.0\ \text{g} \times 3\%}{58.69\ \text{g/mol}} = 5.11 \times 10^{-4}\ \text{mol}$$

**所需 DMG 质量（理论量）：**
$$m(\text{DMG})_\text{理论} = 2 \times n(\text{Ni}) \times M(\text{DMG}) = 2 \times 5.11 \times 10^{-4}\ \text{mol} \times 116.12\ \text{g/mol} = 0.119\ \text{g}$$

**所需 DMG 质量（50% 过量）：**
$$m(\text{DMG})_\text{总} = 1.5 \times 0.119\ \text{g} = 0.178\ \text{g}$$

**所需 1.0 wt% DMG 溶液质量：**
$$m(\text{溶液}) = \frac{0.178\ \text{g}}{1.0\%} = 17.8\ \text{g}$$

**所需 DMG 溶液体积：**
$$V = \frac{17.8\ \text{g}}{0.79\ \text{g/mL}} = \mathbf{23\ \text{mL}}$$

#### b. 钢中 Ni 百分比计算

**已知条件：**
- 钢样品质量：1.1634 g
- 沉淀 Ni(DMG)₂ 质量：0.1795 g
- M.W.(配合物) = 288.91 g/mol

**计算：**
$$n(\text{Ni(DMG)}_2) = \frac{0.1795\ \text{g}}{288.91\ \text{g/mol}} = 6.213 \times 10^{-4}\ \text{mol}$$

1 mol 配合物对应 1 mol Ni：
$$n(\text{Ni}) = 6.213 \times 10^{-4}\ \text{mol}$$

$$m(\text{Ni}) = n(\text{Ni}) \times M(\text{Ni}) = 6.213 \times 10^{-4}\ \text{mol} \times 58.69\ \text{g/mol} = 0.03646\ \text{g}$$

**Ni 质量百分比：**
$$w(\text{Ni}) = \frac{0.03646\ \text{g}}{1.1634\ \text{g}} \times 100\% = \mathbf{3.134\%}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="T12-4" -->
**T12-4.** 沉淀洗涤效率计算

**已知条件：**
- 沉淀液体积：μ = 1.0 mL
- 洗涤液体积：V = 20 mL（或 60 mL）

**洗涤公式：**

洗涤 n 次后残留污染物分数：
$$\frac{x_n}{x_0} = \left(\frac{\mu}{\mu + V/n}\right)^n$$

#### 当 V = 20 mL 时：

**洗涤 1 次（n = 1）：**
$$\frac{x_1}{x_0} = \frac{1.0}{1.0 + 20} \times 100\% = \frac{1.0}{21.0} \times 100\% = \mathbf{4.76\%}$$

**洗涤 2 次（n = 2）：** 每次用 10 mL
$$\frac{x_2}{x_0} = \left(\frac{1.0}{1.0 + 10}\right)^2 \times 100\% = \left(\frac{1.0}{11.0}\right)^2 \times 100\% = \mathbf{0.83\%}$$

**洗涤 3 次（n = 3）：** 每次用 6.67 mL
$$\frac{x_3}{x_0} = \left(\frac{1.0}{1.0 + 6.67}\right)^3 \times 100\% = \left(\frac{1.0}{7.67}\right)^3 \times 100\% = \mathbf{0.22\%}$$

#### 当 V = 60 mL，洗涤 3 次时：

每次用 20 mL：
$$\frac{x'_3}{x_0} = \left(\frac{1.0}{1.0 + 20}\right)^3 \times 100\% = \left(\frac{1.0}{21.0}\right)^3 \times 100\% = \mathbf{0.011\%}$$

**结论：**

| 洗涤方式 | 残留污染物 |
|---------|-----------|
| 20 mL 洗 1 次 | 4.76% |
| 20 mL 分 2 次洗 | 0.83% |
| 20 mL 分 3 次洗 | 0.22% |
| 60 mL 分 3 次洗 | 0.011% |

1. **洗涤次数越多**，残留污染物越少，沉淀越纯净
2. **洗涤液总体积越大**，残留污染物越少
3. **少量多次**的洗涤方式比一次性用大量洗涤液更有效
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [12T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/12T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [12T-Answer for Tutorial of Anal Chem1.pdf](Tutorials-PDF/12T-Answer for Tutorial of Anal Chem1.pdf)
<!-- PDF_LINKS_END -->