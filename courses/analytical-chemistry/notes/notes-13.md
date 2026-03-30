# Lecture 13: Summary of Analytical Chemistry 1

> 📄 原始文件：13L-Summary on Analytical Chemistry 1 2025.pdf

---

## Framework of this course

| Section | Topic | Lecture |
|---------|-------|---------|
| Introduction | Introduction | L₁ |
| **Section I: Chemical Measurements** | | |
| | Basic knowledge | L₂ |
| | Error and estimation | L₃ & L₄ |
| | Linear regression | L₅ |
| **Section II: Chemical Equilibrium** | | |
| | pH and buffer solutions | L₆ |
| | Titrations | L₇ & L₈ |
| | Potentiometry in titrations | L₉ |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| **Summary** | Summary | **L₁₃** |

---

## What is Analytical Chemistry (AC)?

**Definition:** Analytical Chemistry develops and applies methods, instruments, and strategies to obtain information on the nature and composition of matter in space and time.

### Key Components:

| Component | Description |
|-----------|-------------|
| **Methods** | Titration, Electroanalysis, Gravimetry |
| **Instruments** | Various analytical instruments |
| **Strategies** | Approaches for qualitative and quantitative analysis |

### Questions Answered:
- **Qualitative:** What is it?
- **Quantitative:** How much is it?

### Data Flow:
$$\text{Data} \xrightarrow{\text{Chemical Measurement}} \text{Information} \xrightarrow{\text{Chemical Equilibrium}} \text{Knowledge}$$

---

## Section I: Chemical Measurements

### Chemical Measurement Fundamentals

**Format:** Digits + Units

**Example:** 4.72 (sure) ± 0.01 (not sure)

---

### Significant Figures (S.F.)

**Definition:** Minimum number of digits without loss of precision.

---

### Statistics for Measurements

**For a group of numbers:** $x_1, x_2, \dots, x_{n-1}, x_n$

**Report as:** $\bar{x} \pm s,\ N = n$

| Symbol | Meaning | Measure of |
|--------|---------|------------|
| $\bar{x}$ | Average | Accuracy |
| $s$ | Standard deviation | Precision |
| $s_m$ | Standard deviation of mean | Precision of mean |

**Accuracy and precision** are best explained by the darts throwing game.

---

### Propagation of Error

**For:** $(\bar{x}_1 \pm s_1) + / - / \times / \div (\bar{x}_2 \pm s_2) = (\bar{x}_3 \pm s_3)$

| Operation | Rule for S.F. of $s_3$ |
|-----------|------------------------|
| **+ / -** | Fewest decimal places |
| **× / ÷** | Smallest number of S.F. |
| **log** | Special rules apply |

**Error Types:**
- **Absolute error ($s$)**
- **Relative error (%s)**
- **Random Error** vs. **Systematic Error**

---

### Concentration Units

| Unit | Definition |
|------|------------|
| **ppm** | 1 μg/mL |
| **ppb** | 1 ng/mL |

---

### Making Solutions

**Limiting reagent:** Who is consumed first?

---

### Calibration Methods (Linear Regression)

**Purpose:** Use the known to evaluate the unknown.

| Method | Description |
|--------|-------------|
| **1. External standard** | Direct calibration curve |
| **2. Internal standard** | Standard added to all samples |
| **3. Standard addition** | For complex matrices |

**Standard Addition Variants:**

| Variant | x-intercept |
|---------|-------------|
| **Successive addition** ($V$ increases) | $[X]_i$ (initial concentration) |
| **Multiple addition** ($V$ fixed) | $[X]_f$ (final concentration) |

**Relationship:**
$$[X]_i = \frac{V}{V_0}[X]_f$$

---

## Section II: Chemical Equilibrium

### 1. Titration

**Key Concepts:**

| Concept | Description |
|---------|-------------|
| **Equivalence point** | Stoichiometric calculation (theoretical) |
| **End point** | Sudden change in measurement (measured) |
| **Error** | Difference between end point and equivalence point |

**End Point Detection Methods:**
1. Indicator
2. First derivative
3. Gran plot

---

### Types of Titration

| Type | Description |
|------|-------------|
| **Acid-base** | Proton transfer reactions |
| **Precipitation** | Formation of insoluble product |
| **Redox** | Electron transfer reactions |

---

### Acid-Base Titration

| System | Equivalence Point pH |
|--------|---------------------|
| **Strong acid + NaOH** | pH = 7 |
| **Weak acid ($K_a$) + NaOH** | pH = ? (Buffer region) |

**Key points to calculate:**
- $V_{\text{NaOH}} = 0$
- $V_{\text{NaOH}} = \frac{1}{2}V_e$
- $V_{\text{NaOH}} = V_e$
- $V_{\text{NaOH}} > V_e$

---

### Precipitation Titration

**Potential at equivalence point:**
$$E = f(\text{p[Ag}^+]) \text{ at } V_e\ (K_{sp})$$

**Nernst equation:**
$$E = E^\circ(\text{Ag}^+|\text{Ag}) - \frac{0.05916}{n}\log\frac{1}{[\text{Ag}^+]}$$

**Methods:**
- Mohr Titration
- Fajans Titration
- Volhard Titration

---

### Redox Titration

**Standard potentials:**
- $E^\circ$ (Reductant pair)
- $E^\circ$ (Oxidant pair)

**Calculate E at:**
- $V_{\text{oxidant}} = \frac{1}{2}V_e$
- $V_{\text{oxidant}} = V_e$
- $V_{\text{oxidant}} = 2V_e$

**Cell potential difference:**
$$\Delta E = E^\circ(\text{O.}) - E^\circ(\text{R.})$$

---

### Titration Error Factors

| Factor | Effect on Error ($e$) |
|--------|----------------------|
| **[Analyte]↑** | $e↓$ |
| **$K_a↑$** | $e↓$ |
| **$K_{sp}↓$** | $e↓$ |
| **$\Delta E↑$** | $e↓$ |

---

### Potentiometric Titration

**Measures:** $E = f(\text{p[Ag}^+])$ at $V_e$ ($K_{sp}$)

---

## 2. Electroanalysis

### Spontaneous vs. Non-spontaneous

| Type | Energy Flow | Example |
|------|-------------|---------|
| **Spontaneous** | Chemical → Electrical | Galvanic cell |
| **Non-spontaneous** | Electrical → Chemical | Electrolysis |

---

### Nernst Equation

$$E = E^\circ - \frac{0.05916}{n}\log Q$$

**Applications:**
- Potentiometric titration
- Electroanalytical techniques (with external potential)

---

### Electroanalytical Techniques

| Technique | Principle |
|-----------|-----------|
| **Voltammetry** | Current vs. potential |
| **Electrogravimetric** | Mass deposition on electrode |
| **Coulometric** | Charge measurement |

---

## 3. Gravimetric Analysis

### Precipitation Factors

| Factor | Consideration |
|--------|---------------|
| ✓ | Reagent concentration |
| ✓ | How to mix the solution |
| ✓ | Reaction temperature |
| ✓ | Digestion / aging time |
| ✓ | Washing liquid, cycle & removal |
| ✓ | Drying temperature |

---

## Final Exam Information

### Course: 125101 Analytical Chemistry 1

| Term | Date & Time |
|------|-------------|
| **Term A** | 14:00-17:00, June 24 (Tues.), 2025 |
| **Term B** | 14:00-17:00, July 9 (Wed.), 2025 |

**Final course grade:**
$$\text{Final grade} = \text{Final exam grade} \pm e$$

Where "$e$" includes:
- Addition for good questions
- Deduction for homework missing
- $e \leq 10$ scores

---

### Exam Instructions

**Allowed materials:**
- Calculator (checked by invigilator)
- Hardcopy dictionary (checked by invigilator)

**Prohibited:**
- Books
- Other materials
- Devices with large alphanumeric memory
- Devices with broadcasting capabilities

**Format:**
- Multiple Choice Questions (MCQ)
- One correct answer per question
- 10-20 items

---

## Course Summary

### Key Takeaways:

1. **Chemical Measurements:**
   - Significant figures and units
   - Error analysis (accuracy vs. precision)
   - Propagation of error
   - Calibration methods

2. **Chemical Equilibrium:**
   - Acid-base equilibria
   - Precipitation equilibria
   - Redox equilibria

3. **Analytical Techniques:**
   - Titration (acid-base, precipitation, redox)
   - Potentiometry
   - Electroanalysis (voltammetry, electrogravimetry, coulometry)
   - Gravimetric analysis

4. **End Point Detection:**
   - Indicators
   - Derivative methods
   - Gran plot

---

**May all of you make success in the Final exams!**

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*