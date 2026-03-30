# Lecture 4: Random Error and Its Estimation

> 📄 原始文件：4L-Random error and its estimation.pdf

---

## Framework of this course

| Section | Topic | Lecture |
|---------|-------|---------|
| Introduction | Introduction | L₁ |
| **Section I: Chemical Measurements** | | |
| | Basic knowledge | L₂ |
| | **Error and estimation** | **L₃ & L₄** |
| | Linear regression | L₅ |
| **Section II: Chemical Equilibrium** | | |
| | pH and buffer solutions | L₆ |
| | Titrations | L₇ & L₈ |
| | Potentiometry in titrations | L₉ |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 1.2 Experimental Errors & Their Estimation

**Contents:**
1. **1.2-1** Precision and Accuracy
2. **1.2-2** Significant figure & Keep S.F. in arithmetic
3. **1.2-3** Experimental error & Propagation of errors
4. **1.2-4** Standard deviation
5. **1.2-5** Presentation of results

---

### Targets

1. To know how to keep the significant figures
2. To distinguish between various kinds of error
3. To calculate "propagation of errors"
4. To estimate the experimental random error
5. To know how to report experimental results

---

### The Characteristics of Random Errors

- Also called **indeterminate error**, arises from uncontrolled variables in the measurement
- Has an equal chance of being positive and negative, which **cannot** be corrected
- From the result of statistics

---

### 1.2-4 Standard Deviation (SD, s)

**SD** is the measure for precision.

**SD**: A measure used to quantify the amount of variation (dispersion) for a set of data in statistics.

---

### Deviation in Random Error

**Individual Deviation:**
$$d_i = x_i - \bar{x}$$

The difference between the value ($x_i$) in one set and some fixed value, usually the mean ($\bar{x}$).

**Average Deviation:**
$$\bar{d} = \frac{1}{n}\sum_{i=1}^{n} |x_i - \bar{x}|$$

---

### Normal (Gaussian) Distribution

Most random errors follow a **Normal (Gaussian) distribution**:

$$y = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

Where:
- $\mu$ = function center (population mean)
- $\sigma$ = function width (population standard deviation)
- $\int_{-\infty}^{\infty} y dx = 1$

---

### Distribution of Population vs Measurement Results

| Distribution of Population | Distribution of Measurement Results |
|---------------------------|-------------------------------------|
| Results: The average cow's weight $\mu$ | Results: Average = the cow's weight |
| Results: Distribution of weight of cows | Results: Distribution width = instrument quality |

---

### Normal Distribution of Experimental Results

**Example: Cow Weight Distribution**

| Range (kg) | No. of cows |
|------------|-------------|
| 690 – 710 | 3 |
| 710 – 730 | 6 |
| 730 – 750 | 5 |
| 750 – 770 | 9 |
| 770 – 790 | 16 |
| 790 – 810 | 18 |
| 810 – 830 | 25 |
| 830 – 850 | 16 |
| 850 – 870 | 14 |
| 870 – 890 | 7 |

**Probability Interpretation:**
- The probability of observed value within a certain interval is proportional to the area of that interval
- Q: What is the probability to obtain a result in the range 750 to 770?
- A: Proportional to the column area

---

### The Area Under the Bell-Shaped Curve

| Interval | Probability |
|----------|-------------|
| $\mu \pm 1\sigma$ | 68.3% (~2/3) |
| $\mu \pm 2\sigma$ | 95.5% |
| $\mu \pm 3\sigma$ | 99.7% |

**Q:** What is the probability that a measurement result is exactly $\mu$?

---

### Estimation of $\mu$ and $\sigma$ from a Finite Number of Measurements

**Estimation of $\mu$ (population mean):**

$$\mu = \lim_{N \to \infty} \frac{\sum x_i}{N} = \bar{x}$$

The number of measurements is $N$.

**Estimation of $\sigma$ (population standard deviation):**

If $\mu$ is known and only the distribution width is of interest:
$$\sigma = \sqrt{\frac{\sum (x_i - \mu)^2}{N}}$$

If average is calculated from data in finite measurements, only $N-1$ independent deviations:
$$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{N-1}} \quad (\text{as } N \to \infty, s \to \sigma)$$

- $N-1$ is the **degree of freedom**
- $s$ is the sample standard deviation (estimate of $\sigma$)

---

### The Difference in $s$ on the Curve

**Same average with small $s$:**
- More precise for the results
- The probability of observed value is closer to the mean
- The data are more clustered

---

### Notes

- Measurement results would not be affected by the measurement itself should be assumed
- For a finite set of data, we approximate:
  - $\mu$ by $\bar{x}$
  - $\sigma$ by $s$ (which is the measure of uncertainty)

---

### Relative Standard Deviation (RSD)

$$\text{RSD} = \frac{s}{\bar{x}} \times 100\%$$

RSD is also called **coefficient of variation**.

---

### Example Calculation

**Find the average $\bar{x}$, standard deviation (SD), and coefficient of variation (RSD) for a set of numbers: 821, 783, 834, 855**

**The average:**
$$\bar{x} = \frac{821 + 783 + 834 + 855}{4} = 823.2$$

**The standard deviation (SD):**
$$s = \sqrt{\frac{(821-823.2)^2 + (783-823.2)^2 + (834-823.2)^2 + (855-823.2)^2}{4-1}} = 30.3$$

**The coefficient of variation (RSD):**
$$\text{RSD} = \frac{s}{\bar{x}} \times 100\% = \frac{30.3}{823.2} \times 100\% = 3.7\% \approx 4\%$$

---

### Standard Deviation of the Mean ($S_m$)

**Scenario:** $N$ measurements were performed. The mean and the SD of the measurements are:
$$\bar{x} = \frac{\sum x_i}{N}$$
$$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{N-1}}$$

**Question:** What is the standard deviation of the means?

**Meaning:**
- Many sets of measurements are performed and the mean is calculated for each set
- The SD of these means is calculated for estimating the width of the distribution of the means

**Calculation of $S_m$ directly from $N$ ($N > 1$) measurements:**

$$S_m = \frac{s}{\sqrt{N}}$$

Where:
- $M$ = Mean of the means
- $m$ = Number of sets
- $N$ measurements in total
- $S_m < s$

---

### How Standard Deviation (of Mean) Changes with Increasing Number of Measurements

| Standard Deviation | Standard Deviation of the Mean |
|-------------------|-------------------------------|
| $s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{N-1}}$ | $S_m = \frac{s}{\sqrt{N}}$ |

**$S_m$ decreases by a factor of $\frac{1}{\sqrt{N}}$ through making $N$ repeated measurements.**

---

### Example: Standard Deviation of the Mean

**5 days of measurements:**

| Day | Measurements | Mean |
|-----|-------------|------|
| First day | 335, 324, 340, 337, 320 | 331.8 |
| Second day | 337, 341, 327, 334, 331 | 332.2 |
| Third day | 330, 331, 333, 335, 345 | 336 |
| Fourth day | 337, 334, 333 | 331.3 |
| Fifth day | 320, 331, 345 | 335.3 |

**Comparison:**
- $S_m(3) = 2.32$ (3 days)
- $S_m(5) = 1.78$ (5 days)
- $S_m'(15) = \frac{s(15)}{\sqrt{15}} = \frac{6.54}{\sqrt{15}} = 1.69$ (all 15 measurements)

---

### 1.2-5 Presentation of the Results

**Example:** $x = (0.15 \pm 0.02)\ M$, $N = 6$ ($M$ is mol/L)

| Experimental Result is of Interest | Instrument or Method is of Interest |
|------------------------------------|-------------------------------------|
| Mean: $\bar{x} = 0.15\ M$ | SD of measurements: $s = 0.02\ M$ |
| SD of the mean: $s_m = \frac{0.06}{\sqrt{6}}\ M = 0.02\ M$ | Number of measurements: $N = 6$ |
| Number of measurements: $N = 6$ | (Mean: $\bar{x} = 0.15\ M$) |

---

## Summary

- **Random errors**: Indeterminate, cannot be corrected, follow normal distribution
- **Standard Deviation (s)**: Measure of precision/variation
- **Normal Distribution**: 68.3% within $\mu \pm 1\sigma$, 95.5% within $\mu \pm 2\sigma$, 99.7% within $\mu \pm 3\sigma$
- **Relative Standard Deviation (RSD)**: $\frac{s}{\bar{x}} \times 100\%$
- **Standard Deviation of the Mean ($S_m$)**: $S_m = \frac{s}{\sqrt{N}}$, decreases with more measurements
- **Presentation**: Report mean, $S_m$, and $N$ for experimental results

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*