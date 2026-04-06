# Homework 4 - 课后作业

> 📚 分析化学 1 课程作业

---

## 背景知识点

<!-- BACKGROUND_START -->
- **准确度 (Accuracy)**：包含正确度和精密度，描述总误差
- **正确度 (Trueness)**：大量测量值的平均值与真值之间的一致性
- **精密度 (Precision)**：重复测量结果之间的一致性，是随机误差的度量
- **测量不确定度**：定义围绕测量值的区间，真值以一定概率落在此区间内
- **标准偏差**：表征重复测量值的离散程度
- **平均值的标准偏差**：$s_m = \frac{s}{\sqrt{n}}$
<!-- BACKGROUND_END -->

## 📋 作业题目

<!-- QUESTION_START id="H4-1" -->
**H4-1.** Choose which statements are correct in the following:
a. Reference value and true value are synonyms.
b. Precision refers to the agreement between a measurement result and the reference value.
c. Trueness is an estimate of the difference between the mean of a large number of measured values and the true value.
d. Accuracy embraces both trueness and precision and be considered as describing the total error.
e. Precision is the measure of random error, which characterizes the scatter distribution of the replicate measurement results.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H4-2" -->
**H4-2.** Which of the following statements about measurement uncertainty, random effects and systematic effects are correct?
a. Systematic effects can in principle be corrected and thereby minimized or even eliminated.
b. Uncertainty sources are the cause of deviation of the measured value from the true value.
c. Systematic effects can be minimized (or even eliminated) by performing the measurement in large number of repetitions.
d. Correctly estimated measurement uncertainty takes into account both random and systematic effects.
e. It is often possible in practice to eliminate all uncertainty sources so that measurement results will have no uncertainty.
f. Random effects can never be entirely eliminated but their influence on the result can be decreased by making multiple repeated measurements.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H4-3" -->
**H4-3.** Choose which statements are False.
a. Measurement uncertainty defines an interval around the measured value within which the true value lies with some probability.
b. Measured value can be corrected by subtracting measurement uncertainty from it.
c. A measured value can be regarded as an estimate of the true value.
d. If a measurement result has uncertainty then it means that the measurement was not performed correctly.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H4-4" -->
**H4-4.** Choose which statements are False in the following:
a. Standard deviation characterizes the scatter of the values obtained from repeated measurements.
b. The distribution function is known according to the repeated measurements, then it is possible to exactly predict the value of every next measured value.
c. Results of repeated measurements of the same measurand are often normally (Gaussian) distributed.
d. The maximum of the normal distribution curve corresponds to the mean value of the repeated measurement results if a large number of repetitions are made.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H4-5" -->
**H4-5.** Bicarbonate in blood sample was measured four times with the following results (mmol/L). Please find the mean, standard deviation, and standard deviation of mean for these measurements.

| Test 1 | Test 2 | Test 3 | Test 4 |
|--------|--------|--------|--------|
| 31.40 | 31.24 | 31.18 | 31.43 |
<!-- QUESTION_END -->

<!-- QUESTION_START id="H4-6" -->
**H4-6.** In the campaign against smallpox a doctor inquired into the number of times 150 people aged 16 and over in an Ethiopian village had been vaccinated. He obtained the following figures. What is the mean number of times for those people had been vaccinated? What is the standard deviation?

| Never | 12 people | Once | 24 people | Twice | 42 people |
|-------|-----------|------|-----------|-------|-----------|
| Three times | 38 people | Four times | 30 people | Five times | 4 people |
<!-- QUESTION_END -->

---

## ✅ 参考答案

<!-- ANSWER_START for="H4-1" -->
**H4-1.** Answer: **cde**

**分析：**
- a. 错误 - Reference value 有不确定度，而 true value 没有，所以不是同义词
- b. 错误 - Precision 指的是重复测量结果之间的一致性，不是与参考值的一致性
- c. 正确 - Trueness 是大量测量值平均值与真值差异的估计
- d. 正确 - Accuracy 包含 trueness 和 precision，描述总误差
- e. 正确 - Precision 是随机误差的度量，表征重复测量结果的离散分布
<!-- ANSWER_END -->

<!-- ANSWER_START for="H4-2" -->
**H4-2.** Answer: **abdf**

**分析：**
- a. 正确 - 系统效应原则上可以被校正从而最小化或消除
- b. 正确 - 不确定度来源是测量值偏离真值的原因
- c. 错误 - 重复测量不能最小化系统效应，因为所有重复测量结果都会以相同的幅度和方向偏离真值
- d. 正确 - 正确估计的测量不确定度同时考虑了随机效应和系统效应
- e. 错误 - 不可能消除所有不确定度来源
- f. 正确 - 随机效应永远不能完全消除，但可以通过多次重复测量减小其对结果的影响
<!-- ANSWER_END -->

<!-- ANSWER_START for="H4-3" -->
**H4-3.** Answer: **bd**

**分析：**
- a. 正确 - 测量不确定度定义围绕测量值的区间，真值以一定概率落在此区间内
- b. 错误 - 测量不确定度不表示测量值与真值之间差异的大小或符号，只定义差异可能存在的范围
- c. 正确 - 测量值可以视为真值的估计
- d. 错误 - 不确定度是任何测量结果固有的，即使是高精度测量也存在不确定度
<!-- ANSWER_END -->

<!-- ANSWER_START for="H4-4" -->
**H4-4.** Answer: **b**

**分析：**
- a. 正确 - 标准偏差表征重复测量值的离散程度
- b. 错误 - 分布函数不能用于预测任何单个测量值，只能用于预测下一个值落在某个区间的概率
- c. 正确 - 同一被测物的重复测量结果通常服从正态分布
- d. 正确 - 当重复次数足够多时，正态分布曲线的最大值对应于重复测量结果的平均值
<!-- ANSWER_END -->

<!-- ANSWER_START for="H4-5" -->
**H4-5.** 血液中碳酸氢盐测定

**Mean (平均值):**
$$\bar{x} = \frac{31.40+31.24+31.18+31.43}{4}\ \text{mmol/L} = 31.31\ \text{mmol/L}$$

**Standard deviation (标准偏差):**
$$s = \sqrt{\frac{(31.40-31.31)^2+(31.24-31.31)^2+(31.18-31.31)^2+(31.43-31.31)^2}{4-1}}\ \text{mmol/L} = 0.12\ \text{mmol/L}$$

**Standard deviation of mean (平均值的标准偏差):**
$$s_m = \frac{s}{\sqrt{n}} = \frac{0.12\ \text{mmol/L}}{\sqrt{4}} = 0.06\ \text{mmol/L}$$
<!-- ANSWER_END -->

<!-- ANSWER_START for="H4-6" -->
**H4-6.** 疫苗接种次数统计

**Mean (平均值):**
$$\bar{x} = \frac{12\times0+24\times1+42\times2+38\times3+30\times4+4\times5}{150} = 2.41$$

**Standard deviation (标准偏差):**
$$s = \sqrt{\frac{12\times(0-2.41)^2+24\times(1-2.41)^2+42\times(2-2.41)^2+38\times(3-2.41)^2+30\times(4-2.41)^2+4\times(5-2.41)^2}{150-1}} = 1.27$$
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [4H - Homework.pdf](HW-PDF/4H - Homework.pdf)
- **答案 PDF**: [4H-Answer of Homework for Analy Chem1.pdf](HW-PDF/4H-Answer of Homework for Analy Chem1.pdf)
<!-- PDF_LINKS_END -->