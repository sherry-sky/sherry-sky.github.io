# Lecture 10: Gran Plot in Titrations

> 📄 原始文件：10L-Gran plot in titrations.pdf

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
| | **Gran plot in titrations** | **L₁₀** |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 2.4 How to Find the End Point in Titration

### Methods:
1. **Indicator method**
2. **Mathematics methods:**
   - **2.4-1** Derivative method
   - **2.4-2** Gran plot method

---

## Review: Redox Titration Example

**Reaction:**
$$\text{Ce}^{4+} + \text{Fe}^{2+} \rightarrow \text{Ce}^{3+} + \text{Fe}^{3+}$$

**Setup:**
- 25 mL of Fe²⁺ solution titrated with 0.1091 M Ce⁴⁺
- Solvent: 1 M HClO₄
- Cell monitored potentiometrically with Pt and calomel electrodes

**Question:** What is the potential during titration at 10%, 25%, 50%, 100%, 120%, and 200%?

---

### Cell Potential Calculation

**At the Pt working electrode, two reactions occur:**

1. $\text{Fe}^{3+} + e^- \rightleftharpoons \text{Fe}^{2+} \quad E^\circ = 0.767\ \text{V}$
2. $\text{Ce}^{4+} + e^- \rightleftharpoons \text{Ce}^{3+} \quad E^\circ = 1.70\ \text{V}$

**Final cell potential:**
$$E_{\text{cell}} = E_+ - E_-$$

Where $E_-$ is the reference electrode potential (0.241 V for S.C.E.)

---

### Four Regions for Titration Curve

#### 1. Before Equivalence Point ($0 < V < V_e$)

There is almost no Ce⁴⁺, so it's better to use the iron element for potential calculation.

**At 10% titration:**
- $[\text{Ce}^{4+}] = 1.95 \times 10^{-16}\%$ (very tiny)

**At 25% titration:**
- Use Fe³⁺/Fe²⁺ ratio for calculation

**At 50% titration ($V = \frac{1}{2}V_e$):**
- $[\text{Fe}^{3+}] = [\text{Fe}^{2+}]$
- $E_+ = E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} = 0.767\ \text{V}$

---

#### 2. At Equivalence Point ($V = V_e$, 100% titration)

Since the reaction is in equilibrium, a tiny amount of Fe²⁺ may be formed, which equals the amount of Ce⁴⁺. We need to use both equations.

**Using:** $\log a + \log b = \log(ab)$

**Indicator potential at equivalence point:**
$$E_+ = \frac{1}{2}(E^\circ_{\text{analyte}} + E^\circ_{\text{titrant}})$$

**This is independent of concentrations and volumes of reactants.**

**For Ce⁴⁺/Fe²⁺ titration:**
$$E_+ = \frac{1}{2}(0.767 + 1.70) = 1.234\ \text{V}$$
$$E_{\text{cell}} = 1.234 - 0.241 = 0.993\ \text{V}$$

---

#### 3. After Equivalence Point ($V > V_e$)

We don't know [Fe²⁺] (has been "used up"). There is excess Ce⁴⁺ and we know the quotient of [Ce³⁺]/[Ce⁴⁺].

**At 120% titration:**
- $[\text{Ce}^{3+}]/[\text{Ce}^{4+}] = 5$

**At 200% titration:**
- $[\text{Ce}^{3+}]/[\text{Ce}^{4+}] = 1$

---

### Titration Data Summary

| Titration % | Potential (V) | Region |
|-------------|---------------|--------|
| 10% | 0.47 | Before $V_e$ |
| 25% | 0.498 | Before $V_e$ |
| 50% | 0.526 | Before $V_e$ ($E = E^\circ_{\text{analyte}} - E_{\text{ref}}$) |
| 75% | 0.551 | Before $V_e$ |
| 100% | 0.993 | At $V_e$ ($E = \frac{1}{2}(E^\circ_{\text{analyte}} + E^\circ_{\text{titrant}}) - E_{\text{ref}}$) |
| 120% | 1.428 | After $V_e$ |
| 150% | 1.44 | After $V_e$ |
| 200% | 1.459 | After $V_e$ ($E = E^\circ_{\text{titrant}} - E_{\text{ref}}$) |

**Standard potentials:**
- $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = 0.767\ \text{V}$
- $E^\circ(\text{Ce}^{4+}/\text{Ce}^{3+}) = 1.70\ \text{V}$
- $E_{\text{ref}} = 0.241\ \text{V}$ (S.C.E.)

---

### Key Observations

1. **Before $V_e$:** Potential is near $E^\circ(\text{Fe}^{3+}|\text{Fe}^{2+}) - E_{\text{ref}}$

2. **Near $V_e$:** Rapid rise in potential

3. **After $V_e$:** Levels off near $E^\circ(\text{Ce}^{4+}|\text{Ce}^{3+}) - E_{\text{ref}}$

4. **Titration accuracy:** The larger $\Delta E$ between $E^\circ_{\text{analyte}}$ and $E^\circ_{\text{titrant}}$, the larger titration break, the less error, and the better accuracy.

---

## Questions About Titration

1. **Why does the titration curve go up?**
2. **How about the E when titration is 0% (point A)?**
3. **Will the potentiometry influence the titration?**
4. **How to find the end point by Gran plot?**

---

### 1. Why Does the Titration Curve Go Up?

**Before equivalence point ($V < V_e$):**
$$E = E^\circ(\text{Fe}^{3+}|\text{Fe}^{2+}) - 0.05916\log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} - E_{\text{ref}}$$

As titrant is added, [Fe³⁺] increases and [Fe²⁺] decreases, causing the potential to rise.

**After equivalence point ($V > V_e$):**
$$E = E^\circ(\text{Ce}^{4+}|\text{Ce}^{3+}) - 0.05916\log\frac{[\text{Ce}^{3+}]}{[\text{Ce}^{4+}]} - E_{\text{ref}}$$

As more Ce⁴⁺ is added, the ratio changes and potential continues to rise.

---

### 2. How About the Titration at 0% (Point A)?

**The voltage at $V = 0\ \text{mL}$ (point A) cannot be calculated**, because we don't know how much [Fe³⁺].

**If [Fe³⁺] = 0 M, the voltage is $-\infty$.**

**Reality:** There must be some Fe³⁺, either as an impurity or from oxidation of Fe²⁺ by atmospheric oxygen. The voltage could never be lower than that needed to reduce the solvent:
$$\text{H}_2\text{O} + e^- \rightarrow \frac{1}{2}\text{H}_2 + \text{OH}^-$$

---

### 3. Will Potentiometry Influence the Titration?

**Answer: No.**

**Cell potential is measured under conditions of negligible current flow.**

**The resistance of potentiometer is $10^{13}\ \Omega$.** If a cell produces 1 V, the current through the circuit is:
$$I = \frac{E}{R} = 10^{-13}\ \text{A}$$

**This produces:**
- Negligible oxidation and reduction of reagents in the cell
- No effect on concentration of reactants

**From Faraday constant ($F = 96490\ \text{C/mol}$):** The electron flow is negligible.

**Note:** If we replaced the potentiometer with a wire, there would be much more current and concentration would change until the cell reached equilibrium. At that point, $E$ would be 0 V (the battery is "dead").

---

## 2.4-2 Gran Plot Method

### Why Use Gran Plot?

**Common methods to find end point:**
- Indicator and electrode are commonly used
- End point is the maximum of the first derivative ($\frac{\Delta E}{\Delta V}$) or zero crossing of the second derivative

**Problem with derivatives:**
- Titration data are less accurate near the end point
- Electrode response is sluggish nearby the equivalence point

**Gran plot advantage:**
- Uses data from **before** the end point (typically from 0.8$V_e$ to $V_e$)
- More accurate than derivative methods

---

### Gran Plot Derivation (Redox Titration)

**Before equivalence point ($V < V_e$):**

$$E = E^\circ(\text{Fe}^{3+}|\text{Fe}^{2+}) - 0.05916\log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} - E_{\text{ref}}$$

**If the titrant volume is $V$ and the reaction goes "to completion":**
$$\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} = \frac{V_e - V}{V}$$

**Substituting and rearranging:**
$$0.05916\log\frac{V_e - V}{V} = E^\circ - E_{\text{ref}} - E$$

**Eventually we obtain a linear equation of the form $y = kx + c$:**
$$V \times 10^{-E/0.05916} = V_e \times 10^{(E_{\text{ref}} - E^\circ)/0.05916} - V \times 10^{(E_{\text{ref}} - E^\circ)/0.05916}$$

Where:
- $y = V \times 10^{-E/0.05916}$
- $x = V$
- $k = -10^{(E_{\text{ref}} - E^\circ)/0.05916}$
- $c = V_e \times 10^{(E_{\text{ref}} - E^\circ)/0.05916}$

---

### Finding the End Point

**A graph of $V \times 10^{-E/0.05916}$ versus $V$ should be a straight line with:**
- **x-intercept = $V_e$** (equivalence point volume)

**This is the Gran plot method!**

---

### Example: Redox Titration

**A titration of 50.0 mL of unknown Fe²⁺ with 0.100 M Ce⁴⁺ at 25°C, monitored with Pt and calomel electrodes.**

**Data before $V_e$:**

| Titrant Volume (mL) | E (volts) |
|---------------------|-----------|
| 6.50 | 0.635 |
| 8.50 | 0.651 |
| 10.50 | 0.669 |
| 11.50 | 0.680 |
| 12.50 | 0.696 |

**Compute $V \times 10^{-E/0.05916}$:**

| Titrant Volume (mL) | E (volts) | $10^{11} \times V \times 10^{-E/0.05916}$ |
|---------------------|-----------|------------------------------------------|
| 6.50 | 0.635 | 12.003 |
| 8.50 | 0.651 | 8.4210 |
| 10.50 | 0.669 | 5.1626 |
| 11.50 | 0.680 | 3.6851 |
| 12.50 | 0.696 | 2.1488 |

**Linear regression:**
$$Y = -1.6388x + 22.508 \quad (R^2 = 0.9987)$$

**At x-intercept ($Y = 0$):**
$$V_e = \frac{22.508}{1.6388} = 13.73\ \text{mL}$$

**Calculate [Fe²⁺]:**
$$[\text{Fe}^{2+}] = \frac{0.100\ \text{M} \times 13.73\ \text{mL}}{50.0\ \text{mL}} = 27.5\ \text{mM}$$

---

## Gran Plot in Acid-Base Titration

**For weak acid titrated with strong base:**

$$V_b \times 10^{-\text{pH}} = K_a V_e - K_a V_b$$

Where:
- $V_b$: volume of base added
- $K_a$: acid dissociation constant
- $V_e$: equivalence point volume

**A graph of $V_b \times 10^{-\text{pH}}$ versus $V_b$ is the Gran plot:**
- **x-intercept = $V_e$**
- **Slope = $-K_a$**

**Data range:** The last 10-20% of volume prior to $V_e$ is used for Gran plot.

---

### Example: Finding End Point in Acid-Base Titration

**Data:**

| $x$ ($V_b$) | $\bar{x}$ | $y$ (pH) | $k$ | $10^6 \cdot x \cdot 10^{-y}$ |
|-------------|-----------|----------|-----|------------------------------|
| 23.21 | - | 7.30 | - | 1.163256 |
| 23.30 | 23.255 | 7.49 | 2.111 | 0.753973 |
| 23.35 | 23.325 | 7.74 | 5 | 0.4249 |
| 23.40 | 23.375 | 8.30 | 11.2 | 0.117278 |
| 23.46 | 23.43 | 9.21 | 15.167 | 0.014465 |
| 23.55 | 23.505 | 9.86 | 7.222 | 0.003251 |

**Linear regression (only linear portion before $V_e$):**
$$y = -5.5133x + 129.16 \quad (R^2 = 0.9918)$$

**At x-intercept:**
$$V_e = \frac{129.16}{5.5133} = 23.43\ \text{mL}$$

**Calculate $K_a$:**
$$K_a = \frac{k}{10^6} = \frac{5.5133}{10^6} = 10^{-5.26}$$

**Comparison:**
- By Gran plot: $V_e = 23.43\ \text{mL}$, $K_a = 10^{-5.26}$
- By first derivative: $V_e = 23.43\ \text{mL}$, $K_a = 10^{-5.22}$

---

## Summary of Gran Plot in Titration

**Gran plot data range:** $0.8V_e < V < V_e$

**Key points:**
- Gran plot is used to find $V_e$ (equivalence point)
- Concentration in the cell remains unchanged when measuring potential during titration
- The potential at $V = 0\ \text{mL}$ is unknown
- The titration curve rises during addition of titrant when $E^\circ_{\text{analyte}} < E^\circ_{\text{titrant}}$

---

## Important Tips in Titration

1. **Understand the theory** of acid-base, precipitation, and redox titration

2. **Calculation under given volume of titrant:**
   - $V < V_e$
   - $V = \frac{1}{2}V_e$
   - $V = V_e$
   - $V = 2V_e$

3. **Use different methods to find end point:**
   - How to choose a proper indicator
   - First (second) derivative method
   - Gran plot method

4. **Know the effects on titration error:**
   - Concentration of reactants
   - $K_a$ (acid dissociation constant)
   - $K_{sp}$ (solubility product)
   - $\Delta E^\circ$ (analyte vs. titrant)

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*