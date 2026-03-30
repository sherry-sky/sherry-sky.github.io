# Lecture 5: Linear Regression Analysis

> 📄 原始文件：5L-Linear regression analysis.pdf

---

## Framework of this course

| Section | Topic | Lecture |
|---------|-------|---------|
| Introduction | Introduction | L₁ |
| **Section I: Chemical Measurements** | | |
| | Basic knowledge | L₂ |
| | Error and estimation | L₃ & L₄ |
| | **Linear regression** | **L₅** |
| **Section II: Chemical Equilibrium** | | |
| | pH and buffer solutions | L₆ |
| | Titrations | L₇ & L₈ |
| | Potentiometry in titrations | L₉ |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 1.3 Linear Regression Analysis

**Contents:**
1. **1.3-1** Least squares method
2. **1.3-2** Calibration methods
   - External standard
   - Standard addition
   - Internal standard

---

### Linear Regression Analysis

**Example:**
- $x_i$ – Concentration
- $y_i$ – Signal reading
- **Target:** Find $k$ and $c$

We measure couples of interconnected variables $\{x_i, y_i\}$:
- Calculate $y$ at any given $x$
- $k$ and $c$ have physical meaning

**Linear equation:** $y = kx + c$

| $x_i$ | $y_i$ |
|-------|-------|
| 6 | 8 |
| 7 | 18 |
| 8 | 32 |
| 9 | 37 |
| 10 | 54 |
| 11 | 58 |
| 12 | 66 |

---

### Option A: Solve 2 Equations with 2 Unknowns

Using two points to solve for $k$ and $c$:
```
8 = 6k + c
18 = 7k + c
```

**Result:** $y = 10x - 58$

**Problem:** This method only uses 2 data points and ignores the rest!

---

### Option B: Linear Regression

Find "the best straight line" fitting the experimental data points.

**The best line:** The line proving the maximum probability of getting the actual experimental results.

**Linear equation:** $y = kx + c$
- $k$ is slope
- $c$ is y-intercept

---

### Assumptions for Linear Regression

1. **$y$ is normally distributed**
2. **No errors in $x$**
3. **Each $y_i$ result is independent of the others**

**Probability of result $y_i$ at given $k$ and $c$:**
$$\xi_i = y_i - (a + bx_i)$$

---

### 1.3-1 Method of Least Squares

The slope and intercept of the "best" straight line are found by calculus (in form of determinant):

**Slope ($k$ or $b$):**
$$k = \frac{N\sum x_i y_i - \sum x_i \sum y_i}{N\sum x_i^2 - (\sum x_i)^2}$$

**Intercept ($c$ or $a$):**
$$c = \frac{\sum x_i^2 \sum y_i - \sum x_i \sum x_i y_i}{N\sum x_i^2 - (\sum x_i)^2}$$

**Where:**
$$D = N\sum x_i^2 - (\sum x_i)^2$$

---

### Least Squares Result

**Example result:**
- $y = 9.9x - 49.7$
- $R^2 = 0.98$

**Correlation coefficient ($R$):**
$$R^2 = \frac{[\sum(x_i - \bar{x})(y_i - \bar{y})]^2}{\sum(x_i - \bar{x})^2 \sum(y_i - \bar{y})^2}$$

**Comparison:**
| Method | Equation |
|--------|----------|
| Option A (2 points) | $y = 10x - 58$ |
| Least squares (all points) | $y = 9.9x - 49.7$ |

---

### 1.3-2 Calibration Methods

It is a method to measure the unknown quantity from the known quantities of analyte (standards).

**Three calibration methods:**
1. **External standard**
2. **Standard addition**
3. **Internal standard**

---

### External Standard Method

**Procedure:**
1. Prepare multiple solutions containing different concentrations of analyte with known quantities
2. Measure signals for each concentration
3. Make the calibration curve
4. Find the unknown concentration through the calibration curve

**Matrix Effect:**
- **Matrix:** Everything in the sample, except analyte
- **Matrix effect:** The change in the analytical signal caused by anything in the sample other than analyte

**Impact of Matrix Effect:**
- Matrix affects the magnitude of analytical signal
- Calibration curve of pure analyte does not work!
- Slope becomes less or larger

---

### Standard Addition Method

**When to use:**
- Linear response
- Sample matrix is unknown or complex
- It is impossible to create standards or blanks whose composition matches the unknown sample
- Samples are made in almost the same matrix

**Principle:** Method based on addition of known quantities of analyte to the unknown. From the increase of signal, deduce how much analyte is in the original.

**Basic equations:**
$$I_X = k[X]_i$$
$$I_{(X+S)} = k([X]_f + [S]_f)$$

Where:
- $[X]_i$: initial concentration of unknown
- $I_X$: $X_i$ gives a signal intensity
- $I_{(X+S)}$: signal intensity after standard addition
- $[X]_f$: final concentration of unknown in the solution
- $[S]_f$: final concentration of standard in the solution

**Key assumption:** Small volume of concentrated standard addition doesn't change the matrix too much, so matrix composition is thought to be approximately the same, which means $k$ is constant.

$$\frac{I_X}{I_{(X+S)}} = \frac{[X]_i}{[X]_f + [S]_f}$$

**Dilution factors:**
$$[X]_f = [X]_i \frac{V_o}{V}$$
$$[S]_f = [S]_i \frac{V_s}{V}$$

Where:
- $V_o$ is initial volume of unknown
- $V_s$ is added volume of standard
- $V$ is the total volume ($V = V_o + V_s$)

---

### Standard Addition: Three Approaches

#### 1. One Point of Standard Addition

**Example:**
- Na⁺ in serum gave a signal of 4.27 mV
- 5.00 mL of 2.08 M NaCl added to 95.0 mL serum sample
- The spiked serum gave a signal of 7.98 mV

**Find the concentration of Na⁺ in serum:**

$$[S]_f = [S]_i \frac{V_s}{V} = 2.08\ M \times \frac{5.00\ mL}{100.0\ mL} = 0.104\ M$$

$$[X]_f = [X]_i \frac{V_o}{V} = [X]_i \frac{95.0\ mL}{100.0\ mL} = 0.950[Na^+]_i$$

$$\frac{[X]_i}{[X]_f + [S]_f} = \frac{I_X}{I_{(X+S)}}$$

$$\frac{[Na]_i}{0.950[Na]_i + 0.104\ M} = \frac{4.27\ mV}{7.98\ mV}$$

$$[Na^+]_i = 0.113\ M$$

---

#### 2. A Solution with Successive Additions

**Equation:**
$$I_{(X+S)}\left(\frac{V}{V_o}\right) = I_X + \frac{I_X}{[X]_i}[S]_i\left(\frac{V_s}{V_o}\right)$$

Let:
- $y = I_{(X+S)}\left(\frac{V}{V_o}\right)$
- $x = [S]_i\left(\frac{V_s}{V_o}\right)$

**Plot:** $I_{(X+S)}\left(\frac{V}{V_o}\right)$ vs. $[S]_i\left(\frac{V_s}{V_o}\right)$

**Note:** Successive standard addition should linearly increase the analytical signal to 1.5~3 times its original value ($B = 1.5A \sim 3A$)

**The x-intercept is $[X]_i$**

---

#### 3. Multiple Solutions with Same Final Volume

**Procedure:**
- Add $V_o = 5\ mL$ of unknown to each flask
- Add standard of analyte with increasing $V_s$
- Fill all to $V = 50\ mL$

**Equation:**
$$I_{(X+S)} = \frac{I_X}{[X]_i}[X]_f + \frac{I_X}{[X]_i}[S]_f$$

**Plot:** $I_{(X+S)}$ vs. $[S]_f$

**The x-intercept is $[X]_f$**

**Example:** If x-intercept is 0.25 M and dilution factor is 10 (5 mL to 50 mL):
$$[X]_i = 0.25\ M \times \frac{50\ mL}{5\ mL} = 2.5\ M$$

---

### Comparison of Standard Addition Methods

| Aspect | A Solution with Successive Additions | Multiple Solutions with Constant V |
|--------|-------------------------------------|-----------------------------------|
| **Adding standard** | Make a series of additions of standard with small $V_s$ to the unknown sample | Place equal quantities of unknown into several volumetric flasks. Add increasing standard to each flask. Dilute them to the same final V. |
| **Measuring** | Measure signal after each addition (increase signal by 1.5 to 3 times) | Measure signal for each solution |
| **x-y meaning** | Corrected signal vs. corrected $\left(\frac{V_s}{V_o}\right)[S]_i$ of added standard | Signal vs. final $[S]_f$ of added standard after dilution |
| **Find the unknown** | x-intercept is original $[X]_i$ | x-intercept is $[X]_f$ in flask, compute $[X]_i$ through dilution factor |

---

### Internal Standard Method

**Definition:** A known amount of compound (Standard, S), different from analyte (X), added to the unknown.

**Characteristics:**
- Chemically similar between internal standard and analyte, don't react with each other
- Used when uncontrolled sample loss occurs during sample preparation or analytical procedures
- Used when the instrument response varies slightly

**Basic equation:**
$$\frac{A_X}{[X]} = F\left(\frac{A_S}{[S]}\right)$$

Where:
- $A_X$: signal from analyte
- $[X]$: concentration of analyte
- $A_S$: signal from standard
- $[S]$: concentration of standard
- $F$: Correction factor

---

### Internal Standard: Example

**Preliminary experiment:**
- 0.0837 M of X and 0.0666 M of S gave peak areas of $A_X = 423$ and $A_S = 347$

**Find correction factor $F$:**
$$\frac{423}{0.0837\ M} = F\left(\frac{347}{0.0666}\right)$$
$$F = 0.9700$$

**Unknown sample:**
- 10.0 mL of 0.146 M of S were added to 10.0 mL of unknown, then diluted to 25.0 mL
- Results: $A_X = 553$ and $A_S = 582$

**Calculate:**
$$[S] = \frac{10.0\ mL}{25.0\ mL} \times 0.146\ M = 0.0584\ M$$

$$\frac{553}{[X]} = 0.9700\left(\frac{582}{0.0584}\right)$$
$$[X] = 0.05721\ M$$

$$[X]_{\text{unknown}} = 0.05721 \times \frac{25.0\ mL}{10.0\ mL} = 0.143\ M$$

---

### Multiple Solutions of Internal Standard Addition

**Linear regression affords a straight line:**
$$R = mC + b$$

Where:
- $R = \frac{\text{Area of analyte peak}}{\text{Area of standard peak}}$

**Comparison with External Standard:**
| Method | Y-axis |
|--------|--------|
| External standard | Area of analyte peak |
| Internal standard | Ratio (R): $\frac{\text{Area of analyte peak}}{\text{Area of standard peak}}$ |

---

### Comparison of Calibration Methods

| Approach | Comparison |
|----------|------------|
| **External standard** | Analyte with known [C] used to prepare a calibration curve to deduce the unknown |
| **Standard addition** | Added standard is the same substance as analyte to address matrix effect |
| **Internal standard** | Added standard is different from analyte when the quantity of analyte is not reproducible or sample losses occur |

---

## Summary

- **Least squares method:** Find the best fit line using all data points
- **External standard:** Simple calibration curve, affected by matrix effect
- **Standard addition:** Addresses matrix effect by adding known analyte to unknown
- **Internal standard:** Compensates for sample loss and instrument variation
- **Correlation coefficient ($R^2$):** Measure of how well data fits the line

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*