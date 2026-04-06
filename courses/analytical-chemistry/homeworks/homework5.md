# Homework 5 - 课后作业

> 📚 分析化学 1 课程作业

---

## 背景知识点

<!-- BACKGROUND_START -->
- **最小二乘法线性回归**：用于拟合标准曲线
  - 斜率：$k = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}$
  - 截距：$c = \frac{\sum x_i^2 \sum y_i - \sum x_i \sum x_i y_i}{n\sum x_i^2 - (\sum x_i)^2}$
- **标准加入法**：用于消除基体效应的定量分析方法
  - 单点标准加入法：$\frac{[X]_f}{[X]_f + [S]_f} = \frac{I_X}{I_{(X+S)}}$
  - 多点标准加入法：通过绘制响应值与加入浓度的关系图，外推至 y=0，x 截距的绝对值即为原始浓度
<!-- BACKGROUND_END -->

## 📋 作业题目

<!-- QUESTION_START id="H5-1" -->
**H5-1.** The sulfate ion concentration in natural water can be determined by measuring the turbidity that results when an excess of BaCl2 is added to a measured quantity of the sample. A turbidimeter, the instrument used for this analysis, is calibrated with a series of standard Na2SO4 solutions. The following data were obtained in the calibration. Assume that a linear relationship exists between the instrument reading and the concentration.

a. Calculate the slope and intercept for the best straight line among these points by use of least squares method.
b. Obtain the concentration of sulfate in the unknown sample yielding a turbidimeter reading of 2.84.

| SO4²⁻ (mg/L) | Turbidimeter reading |
|--------------|---------------------|
| 0.00 | 0.06 |
| 5.00 | 1.48 |
| 10.00 | 2.28 |
| 15.00 | 3.98 |
| 20.00 | 4.61 |
<!-- QUESTION_END -->

<!-- QUESTION_START id="H5-2" -->
**H5-2.** A 10.00 g sample containing an analyte is transferred to a 250 mL volumetric flask and diluted to the volume using water. When a 10.00 mL aliquot of the resulting solution is diluted to 25.00 mL and it gives a signal of 0.235 (arbitrary unit). A second 10.00 mL aliquot of the solution is spiked with 10.00 mL of a 1.00 ppm standard solution of analyte and diluted to 25.00 mL. the signal for the spiked sample is 0.502. Calculate how much the weight percent of analyte in the original sample?
<!-- QUESTION_END -->

<!-- QUESTION_START id="H5-3" -->
**H5-3.** To determine the concentration of analyte in a sample, a standard addition was performed. A 5.00 mL portion of sample was analyzed and then successive 0.10 mL spiked of a 600.0 mg/L standard of the analyte were added. The following table shows the results of each spike.

| Vs (mL) | I(X+S) (Arbitrary unit) |
|---------|------------------------|
| 0.00 | 0.119 |
| 0.10 | 0.231 |
| 0.20 | 0.339 |
| 0.30 | 0.442 |

Construct an appropriate standard addition calibration curve and use a linear regression analysis to determine the concentration of analyte in the original sample.
<!-- QUESTION_END -->

<!-- QUESTION_START id="H5-4" -->
**H5-4.** An experiment was carried out to determine the concentration of sodium ion (Na+) in a blood sample. Five calibration bottles with 20 mL of the blood sample were added varying amounts of standard NaCl with the concentration of 5.640 M. Then, water was added to obtain in each calibrating bottle with 100 mL solutions. The atomic emission measurement of each solution yielded the signals listed in the table. The question is how much the concentration of the sodium in the blood?

| Added standard solution (mL) | Final volume (mL) | Signal (mV) |
|-----------------------------|-------------------|-------------|
| 0 | 100 | 3.13 |
| 1 | 100 | 5.40 |
| 2 | 100 | 7.89 |
| 3 | 100 | 10.30 |
| 4 | 100 | 12.48 |
<!-- QUESTION_END -->

---

## ✅ 参考答案

<!-- ANSWER_START for="H5-1" -->
**H5-1.** 硫酸根离子浓度测定

**a. 计算斜率和截距：**

首先计算所需的和：
$$\sum C_i = 0.00 + 5.00 + 10.00 + 15.00 + 20.00 = 50.00$$
$$\sum R_i = 0.06 + 1.48 + 2.28 + 3.98 + 4.61 = 12.41$$
$$\sum C_i R_i = 0.00 + 7.40 + 22.80 + 59.70 + 92.20 = 182.10$$
$$\sum C_i^2 = 0.00 + 25.0 + 100.0 + 225.0 + 400.0 = 750.0$$

使用最小二乘法公式计算斜率 k 和截距 c：
$$k = \frac{5 \times 182.10 - 50.00 \times 12.41}{5 \times 750.0 - 50.00^2} = 0.232$$
$$c = \frac{750.0 \times 12.41 - 50.00 \times 182.10}{5 \times 750.0 - 50.00^2} = 0.162$$

**b. 计算浊度计读数为 2.84 时的硫酸根浓度：**

$$R = 0.232C + 0.162$$
$$2.84 = 0.232C + 0.162$$
$$C = 11.54\ \text{mg/L}$$

**答案：** 硫酸根浓度为 **11.54 mg/L**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H5-2" -->
**H5-2.** 标准加入法计算

**已知条件：**
- 样品质量：10.00 g
- 初始稀释：250 mL
- 取 10.00 mL 稀释至 25.00 mL，信号 = 0.235
- 另取 10.00 mL，加 10.00 mL 1.00 ppm 标准液，稀释至 25.00 mL，信号 = 0.502

**稀释因子计算：**
$$[X]_f = [X]_i \times \frac{10.00\ \text{mL}}{25.00\ \text{mL}} = 0.40000[X]_i$$
$$[S]_f = 1.00\ \text{ppm} \times \frac{10.00\ \text{mL}}{25.00\ \text{mL}} = 0.4000\ \text{ppm}$$

**标准加入法公式：**
$$\frac{[X]_f}{[X]_f + [S]_f} = \frac{I_X}{I_{(X+S)}}$$
$$\frac{0.40000[X]_i}{0.40000[X]_i + 0.4000\ \text{ppm}} = \frac{0.235}{0.502}$$

解得：
$$[X]_i = 0.8801\ \text{ppm}$$

**计算样品中被测物质量：**
$$m = 0.8801\ \text{mg/L} \times 0.250\ \text{L} = 0.2200\ \text{mg}$$

**质量百分比：**
$$w\% = \frac{0.2200\ \text{mg}}{10.00\ \text{g}} \times 100\% = 2.20 \times 10^{-3}\%$$

**答案：** 样品中被测物的质量百分比为 **2.20 × 10⁻³ %**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H5-3" -->
**H5-3.** 标准加入法测定

**已知条件：**
- Vo = 5.00 mL
- [S]i = 600.0 mg/L

对于连续标准加入到单一溶液中，Y = I(X+S) × (V/Vo)，X = [S]i × (Vs/Vo)

| Vs (mL) | X = [S]i × (Vs/Vo) (ppm) | I(X+S) | Y = I(X+S) × (V/Vo) |
|---------|-------------------------|--------|---------------------|
| 0.00 | 0 | 0.119 | 0.119 |
| 0.10 | 12 | 0.231 | 0.236 |
| 0.20 | 24 | 0.339 | 0.352 |
| 0.30 | 36 | 0.442 | 0.468 |

**线性回归：**
$$y = 0.0097x + 0.1193, \quad R^2 = 1$$

**令 y = 0，求 x 截距：**
$$0 = 0.0097x + 0.1193$$
$$x = -12.299\ \text{mg/L}$$

对于连续标准加入到单一溶液中，x 截距的绝对值即为样品中被测物的浓度。

**答案：** 样品中被测物浓度为 **12.30 mg/L**
<!-- ANSWER_END -->

<!-- ANSWER_START for="H5-4" -->
**H5-4.** 血样中钠离子浓度测定

**已知条件：**
- 血样体积：Vo = 20 mL
- 标准 NaCl 浓度：5.640 M
- 最终体积：100 mL

对于多溶液恒定总体积，X = [S]f = [S]i × Vs/V，Y = I(X+S)

| 加入标准液 (mL) | 最终体积 (mL) | 信号 (mV) | X = [S]f (M) |
|----------------|---------------|-----------|--------------|
| 0 | 100 | 3.13 | 0 |
| 1 | 100 | 5.40 | 0.0564 |
| 2 | 100 | 7.89 | 0.1128 |
| 3 | 100 | 10.30 | 0.1692 |
| 4 | 100 | 12.48 | 0.2256 |

**线性回归方程：**
$$Y = 41.844X + 3.12$$

**求 x 截距（当 Y=0）：**
$$0 = 41.844X + 3.12$$
$$X = -0.07456\ \text{M}$$

对于多溶液恒定总体积，x 截距是容量瓶中钠离子的最终浓度 [Na+]f = 0.07456 M

**计算血样中钠离子浓度：**
$$[Na^+]_i = \frac{V}{V_o} \times [Na^+]_f = \frac{100\ \text{mL}}{20\ \text{mL}} \times 0.07456\ \text{M} = 0.3728\ \text{M}$$

**答案：** 血样中钠离子浓度为 **0.3728 M**
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [5H-Homework.pdf](HW-PDF/5H-Homework.pdf)
- **答案 PDF**: [5H-Answer of Homework for Analy Chem1.pdf](HW-PDF/5H-Answer of Homework for Analy Chem1.pdf)
<!-- PDF_LINKS_END -->