# Homework 11 - 课后作业

> 📚 分析化学 1 课程作业

---

## 背景知识点

<!-- BACKGROUND_START -->
- **电解分析**：通过外加电压使电活性物质在电极上发生氧化还原反应
  - 阴极：发生还原反应，金属沉积
  - 阳极：发生氧化反应，释放气体
- **外加电压**：$E_{\text{applied}} = E_{\text{cathode}} - E_{\text{anode}}$
- **伏安法**：只消耗少量被测物，用于定性分析
- **电重量分析**：全部被测物被消耗，产物沉积在电极上
- **库仑分析**：全部被测物被消耗，通过电量计算物质的量
<!-- BACKGROUND_END -->

## 📋 作业题目

<!-- QUESTION_START id="H11-1" -->
**H11-1.** Suppose we dip Cu and Pt electrodes into a Cu²⁺ solution and force electric current through to deposit copper metal at the cathode (working electrode) and to liberate O₂ at the anode. Please find how much voltage should be applied on the electrodes if we want to gather the copper on the surface of working electrode.

The reaction is:
$$\text{Cu}^{2+}\ (0.2\ \text{M}) + \text{H}_2\text{O} \rightleftharpoons \text{Cu(s)} + \frac{1}{2}\text{O}_2\ (1.0\ \text{atm}) + 2\text{H}^+\ (1.0\ \text{M})$$

E°(Cu²⁺|Cu) = 0.339 V
E°(O₂|H₂O) = 1.229 V
<!-- QUESTION_END -->

<!-- QUESTION_START id="H11-2" -->
**H11-2.** Please choose the correct answer for the analysis the following mixture (A⁺, B⁺ and C⁺ ions) (Single choice).

| 反应 | 电位 (vs S.C.E) |
|------|----------------|
| A²⁺ + e⁻ ⇌ A⁺ | E = 0.65 V |
| B⁺ + e ⇌ B↓ (precipitate) | E = 0.67 V |
| C³⁺ + e⁻ ⇌ C²⁺ | E = 2.30 V |

Please choose the optimal way for the following methods to distinguish the mixture of A⁺, B⁺ and C⁺, respectively. Each analytical method is set to be employed only once. The resolution/interval of the voltage is 0.05 V.

① Voltammetry analysis
② Electrogravimetric analysis
③ Coulometric analysis

a. ①②③
b. ①③②
c. ②①③
d. ②③①
<!-- QUESTION_END -->

---

## ✅ 参考答案

<!-- ANSWER_START for="H11-1" -->
**H11-1.** 电解沉积铜所需电压计算

**阴极反应：**
$$\text{Cu}^{2+} + 2\text{e}^- \rightleftharpoons \text{Cu(s)}$$

**阳极反应：**
$$\text{O}_2 + 4\text{H}^+ + 4\text{e}^- \rightleftharpoons 2\text{H}_2\text{O}$$

**外加电压计算：**
$$E_{\text{applied}} = E_{\text{cathode}} - E_{\text{anode}}$$

$$E_{\text{cathode}} = E^\circ(\text{Cu}^{2+}|\text{Cu}) - \frac{0.05916}{2} \log\frac{1}{[\text{Cu}^{2+}]}$$
$$= 0.339\ \text{V} - \frac{0.05916}{2} \log\frac{1}{0.2\ \text{M}} = 0.318\ \text{V}$$

$$E_{\text{anode}} = E^\circ(\text{O}_2|\text{H}_2\text{O}) - \frac{0.05916}{4} \log\frac{P_{\text{O}_2}}{[\text{H}^+]^4}$$
$$= 1.229\ \text{V} - \frac{0.05916}{4} \log\frac{1.0\ \text{atm}}{(1.0\ \text{M})^4} = 1.229\ \text{V}$$

$$E_{\text{applied}} = 0.318\ \text{V} - 1.229\ \text{V} = \mathbf{-0.911\ \text{V}}$$

**答案：** 需要施加 **-0.911 V** 的外加电压
<!-- ANSWER_END -->

<!-- ANSWER_START for="H11-2" -->
**H11-2.** 混合离子分析方案选择

**答案：a (①②③)**

**分析：**

**方案 a (①②③)：**

1. **伏安法分析**：选择 1.00 V 电位（大于 0.65 V，小于 2.30 V），可获得 A²⁺ 和 B⁺ 的总量。伏安法只消耗少量被测物，溶液中仍存在 A²⁺、B⁺ 和 C³⁺。

2. **电重量分析**：设置电位 1.0 V，B⁺ 全部转化为 B 沉淀，通过称量计算 B⁺ 的量。A²⁺ 也全部转化为 A⁺。溶液中存在 A⁺、B 和 C³⁺。

3. **库仑分析**：设置电位 2.50 V（高于 2.30 V），C³⁺ 全部转化为 C²⁺，通过电量计算 C³⁺ 的量。

**其他方案不可行的原因：**

- **方案 b (①③②)**：库仑分析在 2.5 V 时，C³⁺ 和 B⁺ 都会被还原，无法区分
- **方案 c 和 d**：电重量分析在 1.0 V 时，A²⁺ 和 B⁺ 都会被还原，后续无法单独测定 A⁺

**三种方法的特点：**
- ① **伏安法**：消耗少量被测物，A⁺ → A
- ② **电重量分析**：全部被测物被消耗，A⁺ → A（沉积）
- ③ **库仑分析**：全部被测物被消耗，A⁺ → A，通过电量计算

**答案：** **a. ①②**
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [11H-Homework of Analy Chem1.pdf](HW-PDF/11H-Homework of Analy Chem1.pdf)
- **答案 PDF**: [11H-Answer of Homework for Analy Chem1.pdf](HW-PDF/11H-Answer of Homework for Analy Chem1.pdf)
<!-- PDF_LINKS_END -->