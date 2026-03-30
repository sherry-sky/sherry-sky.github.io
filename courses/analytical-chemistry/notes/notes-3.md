# Lecture 3: Experimental Errors and Their Estimation

> 📄 原始文件：3L-Experimetal error and its estimation.pdf

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

## Section I: Chemical Measurement

### 1.2 Experimental Errors & Their Estimation

**Reference:** Tang S S, Talanta, 155 235–244, 2016

**Contents:**
1. **1.2-1** Precision and accuracy
2. **1.2-2** Significant figure & Keep S.F. in arithmetic
3. **1.2-3** Experimental error & Propagation of errors
4. **1.2-4** Standard deviation
5. **1.2-5** Presentation of results

---

### Targets

1. To know how to keep significant figures
2. To distinguish between various kinds of error
3. To calculate "propagation of errors"
4. To estimate the experimental random error
5. To know how to report experimental results

---

### Experimental Error

- There is an error associated with every measurement
- Repetition of one method several times tells us the reproducibility
- There is no way to measure the "true" value of analyte
- If the results of measuring same quantity by different methods agree with each other, it means the results are near to the "true" value

---

### 1.2-1 Precision and Accuracy

**Definitions:**

| Term | Definition |
|------|------------|
| **Trueness** | Ideal value, however, it is objective existence. We can obtain it by infinite measurements |
| **Standard** | Closeness of agreement between the average value obtained from a large series of tests or an accepted reference value |
| **Precision** | Closeness between independent results obtained under stipulated conditions |
| **Accuracy** | Closeness between a quantity value obtained by finite measurement and the "true" value |

**Visual representation:**
- True value: 37.40 m
- Measurements: x₁=36.50 m, x₂=37.00 m, x₃=37.50 m, x₄=38.00 m

**Precision vs Accuracy:**
- **Low precision, low accuracy**: scattered measurements far from true value
- **High precision, low accuracy**: clustered measurements far from true value
- **Low precision, high accuracy**: scattered measurements around true value
- **High precision, high accuracy**: clustered measurements around true value

---

### 1.2-2 Significant Figures

**Definition:** The number of significant figures is the minimum number of digits needed to write a given value in scientific notation without loss of information.

**Examples:**

| Number | Significant Figures |
|--------|---------------------|
| 9.25 × 10⁴ | 3 significant figures |
| 9.250 × 10⁴ | 4 significant figures |
| 9.2500 × 10⁴ | 5 significant figures |
| 92 500 | Ambiguous - should use scientific notation |

**How to keep S.F. in arithmetic:**

1. **Addition and Subtraction**
2. **Multiplication and Division**
3. **Logarithm**
4. **Antilogarithm / Exponent**

---

### Rules for Significant Figures in Calculations

#### Addition and Subtraction

The result should have the same number of **decimal places** as the measurement with the fewest decimal places.

#### Multiplication and Division

The result should have the same number of **significant figures** as the measurement with the fewest significant figures.

#### Logarithm

**Number of digits in mantissa of log x = Number of significant figures (SF) in x**

Example:
```
log (x = 5.403 × 10⁻⁸) = -7.2674
- Mantissa: 4 digits
- x has: 4 SF
```

#### Antilogarithm (Exponent)

Example:
```
antilog (-3.42) = 10⁻³·⁴² = 3.8 × 10⁻⁴
- 2 digits in mantissa → 2 SF in result
```

**Practice:**
```
log 0.001237 = -2.9076      (4 SF → 4 digits in mantissa)
log 1237 = 3.0924           (4 SF → 4 digits in mantissa)
log 3.2 = 0.51              (2 SF → 2 digits in mantissa)
antilog 4.37 = 2.3 × 10⁴    (2 digits in mantissa → 2 SF)
10⁴·³⁷ = 2.3 × 10⁴          (2 digits in mantissa → 2 SF)
10⁻²·⁶⁰⁰ = 2.51 × 10⁻³      (3 digits in mantissa → 3 SF)
```

**pH Calculation Example:**
```
What is the pH of a solution that is 0.026 M of H⁺?
pH = -log [0.026]
pH = -log [H⁺]
pH = 1.59  (2 SF in 0.026 → 2 digits in mantissa)
```

---

### Rounding Rules

**Example:** If 43.45001 should be rounded to 43.5, not 43.4, due to there being digits after 5 which are NOT zero.

---

### 1.2-3 Experimental Errors

There are two types of errors:

#### Systematic Errors (Determinate Errors)

- Also called **determinate error**
- Arises from a flaw in equipment or the design of an experiment
- Can be corrected

**Examples:**
- Dilution with impure solvent
- Too narrow burette (at a specific spot)
- Incorrect inspection angle (Parallax error)

#### Random Errors (Indeterminate Errors)

- Also called **indeterminate error**
- Arises from uncontrolled variables in the measurement
- Has an equal chance of being positive and negative
- **Cannot** be corrected

**Examples:**
- Reading error (24.14 mL or 24.12 mL)
- Electronic noise

---

### Random Errors vs Systematic Errors

| | Systematic Error | Random Error |
|---|---|---|
| **Cause** | Flaw in equipment/experiment | Uncontrolled variables |
| **Direction** | Consistent (always + or -) | Equal chance + or - |
| **Correction** | Can be corrected | Cannot be corrected |
| **Detection** | By comparing with standard | By repetition |

**Visual:** Green circles denote true value, yellow circles denote measured values

---

### Accuracy, Trueness and Precision

```
Accuracy = Trueness + Precision
```

- **Trueness**: systematic error component
- **Precision**: random error component

---

### Propagation of Errors

**Our goal is always to eliminate systematic error.**

Most propagation of uncertainty computations deal with **random error**, not systematic error.

**Example:**
```
Mass: 4.635 ± 0.002 g
Volume: 1.13 ± 0.05 mL
Density (ρ): mass/volume = 4.635 g / 1.13 mL = 4.1018 ± ? g/mL

Questions:
1. How many significant figures should be used?
2. What is the uncertainty in the computed ρ?
```

---

### Uncertainty in Addition & Subtraction

```
    1.76 (±0.03)
    1.89 (±0.02)
+   0.59 (±0.02)
---------------
    3.06 (±e₄)

e₄ = √(e₁² + e₂² + e₃²)
   = √(0.03² + 0.02² + 0.02²)
   = √(0.0009 + 0.0004 + 0.0004)
   = √0.0017
   = 0.04

Result: 3.06 (±0.04)
```

---

### Relative Uncertainty

$$\text{Relative uncertainty} = \frac{\text{absolute uncertainty}}{\text{magnitude of measurement}}$$

$$\text{\% Relative uncertainty} = \text{Relative uncertainty} \times 100\%$$

**Example:**
```
3.06 (±0.04)

% Relative uncertainty = (0.04 / 3.06) × 100% = 1.307%

Result: 3.06 (±1% or ±1.3%)
```

**Note on rounding uncertainty:**
- Usually, just ONE significant figure is kept in the error
- However, if the number is between 1 and 2, we can keep one more digit
- The rule: uncertainty should change by less than 10% (relative) when rounding
- In exams, both 1% and 1.3% are considered correct

---

### Uncertainty in Multiplication & Division

**Step 1:** Convert absolute uncertainty into % relative uncertainty

```
1.76 (±0.03) × 1.89 (±0.02)
---------------------------
       0.59 (±0.02)

1.76 (±1.7%) × 1.89 (±1.1%)
---------------------------
       0.59 (±3.4%)

= 5.64 ± e₄
```

**Step 2:** Calculate combined % uncertainty

```
%e₄ = √(%e₁² + %e₂² + %e₃²)
    = √(1.7%² + 1.1%² + 3.4%²)
    = √(2.89 + 1.21 + 11.56)%
    = √15.66%
    = 4.0%

Final answer:
- 5.6 (±4%)    (relative uncertainty)
- 5.6 (±0.2)   (absolute uncertainty)
```

**Important notes:**
- The subscript digits are kept for accuracy and are NOT S.F.
- Always retain more digits than necessary during calculation and round off at the end

---

### Significant Figures with Uncertainty

**Example:**
```
0.002364 (±0.000003)
---------------------  = 0.09456 (±0.000153) = 0.0946 (±0.0002)
0.02500 (±0.00005)

%e₃ = √(%e₁² + %e₂²)

SF of quotient should be modified by the mantissa of uncertainty
```

**Rule:** The first digit (NOT zero) of absolute uncertainty is the last significant figure of magnitude in result.

---

### Summary of Equations on Uncertainty

| Operation | Absolute Uncertainty (e) | Relative Uncertainty (%e) |
|-----------|-------------------------|---------------------------|
| Addition/Subtraction | $e_4 = \sqrt{e_1^2 + e_2^2 + e_3^2}$ | - |
| Multiplication/Division | - | $\%e_4 = \sqrt{\%e_1^2 + \%e_2^2 + \%e_3^2}$ |

---

### Practice Problems

```
Problem 1:
0.821 (±0.002)
------------  = 1.02242 (±0.00356) = 1.022 (±0.004)
0.803 (±0.002)

Problem 2:
0.002664 (±0.000003)
--------------------  = 0.10656 (±0.00024) = 0.1066 (±0.0002)
0.02500 (±0.00005)
```

---

## Summary

- **Significant figures**: Keep track of precision in calculations
- **Systematic errors**: Determinate, can be corrected
- **Random errors**: Indeterminate, cannot be corrected
- **Propagation of errors**: 
  - Addition/Subtraction: $\sqrt{\sum e_i^2}$
  - Multiplication/Division: $\sqrt{\sum \%e_i^2}$
- **Reporting results**: Include uncertainty with appropriate significant figures

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*