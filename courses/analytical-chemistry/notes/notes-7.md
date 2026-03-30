# Lecture 7: Let Titration Begin (Part 1)

> 📄 原始文件：7L-Let Titration begin-1.pdf

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
| | **Titrations** | **L₇ & L₈** |
| | Potentiometry in titrations | L₉ |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 2.2 Titration

### Contents:
1. **2.2-1** Titration curve
2. **2.2-2** Titration error
3. **2.2-3** Find the end point
4. **2.2-4** Titration types

---

### Principles of Titration

**In a titration**, increments of titrant are added to analyte until their reaction is complete. From the quantity of titrant required, the quantity of analyte can be calculated.

**Requirements:** Large equilibrium constant ($K$) and reaction proceeds rapidly.

**Types of titration:**
- Acid-base titration
- Precipitation titration
- Redox titration

---

### Key Concepts

| Term | Definition |
|------|------------|
| **Titration curve** | A graph showing how the concentration of a reactant varies as titrant is added |
| **End point** | Point near the equivalence point at which a sudden change in a physical property occurs |
| **Equivalence point** | Point at which stoichiometric amounts of reactants (titrant and analyte) have been mixed |
| **Titration error** | The difference between the end point and the equivalence point |

**Important notes:**
- Equivalence point is ideal (theoretical); what we actually measure is the end point
- Titration error is inescapable, but can be minimized by:
  - Choosing a physical property whose change is easily observed (e.g., color change of an indicator)
  - Blank titration (carrying out the same procedure without analyte)

**Volume notation:**
- $V_e$: volume of titrant at equivalence point
- $V_a$: volume of titrant added (acid)
- $V_b$: volume of titrant added (base)

---

## 2.2-1 Titration Curve

### 2.2-1(A) Titration Curve of Strong Base with Strong Acid

**Three regions for titration curve:**

1. **Before equivalence point** ($0 < V_a < V_e$)
   - pH is determined by excess OH⁻
   - $[\text{OH}^-] = \frac{c_{\text{OH}^-} \cdot V_{\text{OH}^-} - c_{\text{H}^+} \cdot V_{\text{H}^+}}{V_{\text{H}^+} + V_{\text{OH}^-}}$

2. **At equivalence point** ($V_a = V_e$)
   - Maximum $\frac{dpH}{dV_a}$ (steepest point)
   - pH is determined by dissociation of H₂O
   - $[\text{H}^+] = [\text{OH}^-] = 10^{-7.00}$ (at 25°C)

3. **After equivalence point** ($V_a > V_e$)
   - pH is determined by excess H⁺
   - $[\text{H}^+] = \frac{c_{\text{H}^+} \cdot V_{\text{H}^+} - c_{\text{OH}^-} \cdot V_{\text{OH}^-}}{V_{\text{H}^+} + V_{\text{OH}^-}}$

---

### Example: Titration of 20.00 mL 0.1000 mol·L⁻¹ HCl with 0.1000 mol·L⁻¹ NaOH

| NaOH (mL) | T% | Excess HCl (mL) | Excess NaOH (mL) | pH | [H⁺] Calculation |
|-----------|-----|-----------------|------------------|-----|------------------|
| 0.00 | 0 | 20.00 | - | 1.00 | Before titration: $[\text{H}^+] = c(\text{HCl})$ |
| 18.00 | 90.0 | 2.00 | - | 2.28 | $[\text{H}^+] = \frac{c_{\text{H}^+}V_{\text{H}^+} - c_{\text{OH}^-}V_{\text{OH}^-}}{V_{\text{H}^+} + V_{\text{OH}^-}}$ |
| 19.80 | 99.0 | 0.20 | - | 3.30 | |
| 19.98 | 99.9 | 0.02 | - | 4.30 | |
| 20.00 | 100.0 | 0.00 | 0.00 | 7.00 | $[\text{H}^+] = [\text{OH}^-] = 10^{-7.00}$ |
| 20.02 | 100.1 | - | 0.02 | 9.70 | $[\text{OH}^-] = \frac{c_{\text{OH}^-}V_{\text{OH}^-} - c_{\text{H}^+}V_{\text{H}^+}}{V_{\text{H}^+} + V_{\text{OH}^-}}$ |
| 20.20 | 101.0 | - | 0.20 | 10.70 | |
| 22.00 | 110.0 | - | 2.00 | 11.68 | |
| 40.00 | 200.0 | - | 20.00 | 12.52 | |

---

### 2.2-1(B) Titration Curve of Weak Acid with Strong Base

**Reaction:** HAc + NaOH ⇌ A⁻ + Na⁺ + H₂O

**Four regions for titration curve:**

1. **Before any base added** ($V_b = 0$)
   - HA ⇌ H⁺ + A⁻ ($K_a$)
   - $[\text{H}^+] = \sqrt{K_a \cdot c}$ (when $f \geq 100 K_a$)

2. **Before equivalence point** ($0 < V_b < V_e$)
   - Buffer zone (HA + A⁻)
   - Maximum buffer capacity (β) at $V_b = \frac{1}{2}V_e$
   - pH = pKa when $V_b = \frac{1}{2}V_e$
   - Henderson-Hasselbalch equation: $\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$

3. **At equivalence point** ($V_b = V_e$)
   - A⁻ + H₂O ⇌ HA + OH⁻ ($K_b$)
   - Basic pH (hydrolysis)
   - $K_b = \frac{K_w}{K_a}$
   - $[\text{OH}^-] = \sqrt{K_b \cdot c(\text{A}^-)}$ (when $c(\text{A}^-) \geq 100 K_b$)

4. **After equivalence point** ($V_b > V_e$)
   - $[\text{OH}^-] = c(\text{NaOH}) + [\text{HA}]$

---

### Example: Titration of 20.00 mL 0.10 mol·L⁻¹ HA/HAc with 0.10 mol·L⁻¹ NaOH

| NaOH (mL) | T% | Composition | pH (HAc) | pH (HA) | [H⁺] Calculation |
|-----------|-----|-------------|----------|---------|------------------|
| 0 | 0 | HA | 2.88 | 4.00 | $[\text{H}^+] = \sqrt{K_a \cdot c}$ |
| 10.00 | 50.0 | HA + A⁻ | 4.76 | 7.00 | Henderson-Hasselbalch (buffer) |
| 18.00 | 90.0 | HA + A⁻ | 5.71 | 7.95 | |
| 19.80 | 99.0 | HA + A⁻ | 6.67 | 9.00 | |
| 19.96 | 99.8 | HA + A⁻ | 7.46 | 9.56 | |
| 19.98 | 99.9 | HA + A⁻ | 7.76 | 9.70 | |
| 20.00 | 100.0 | A⁻ | 8.73 | 9.85 | Hydrolysis: $[\text{OH}^-] = \sqrt{K_b \cdot c(\text{A}^-)}$ |
| 20.02 | 100.1 | A⁻ + OH⁻ | 9.70 | 10.00 | $[\text{OH}^-] = c(\text{NaOH}) + [\text{HA}]$ |
| 20.04 | 100.2 | A⁻ + OH⁻ | 10.00 | 10.13 | |
| 20.20 | 101.0 | A⁻ + OH⁻ | 10.70 | 10.70 | |
| 22.00 | 110.0 | A⁻ + OH⁻ | 11.68 | 11.68 | |

**Parameters:**
- $K_a(\text{HAc}) = 10^{-4.76}$
- $K_a(\text{HA}) = 10^{-7.00}$

---

### Titration Curve Features (Weak Acid with Strong Base)

**At $V_b = V_e$:**
- $\frac{dpH}{dV_b}$ is maximum (curve is steepest)

**At $V_b = \frac{1}{2}V_e$:**
- pH = pKa
- Minimum slope, maximum β
- Buffer is most effective in resisting pH changes

**Buffer capacity (β):**
1. β increases with buffer concentration [C]
2. At pH = pKa: $\beta_{\text{max}} = 0.575c$
3. Effective range: pKa - 1 < pH < pKa + 1

---

### Titration Break (Titration Jump)

**Comparison of different acids (0.10 mol·L⁻¹) titrated with 0.10 mol·L⁻¹ NaOH:**

| Acid | $K_a$ | Titration Break (pH range) | pH at Equivalence Point |
|------|-------|---------------------------|------------------------|
| HCl | → ∞ | 4.3 - 9.7 | 7.00 |
| HAc | $10^{-4.76}$ | 7.76 - 9.7 | 8.73 |
| HA | $10^{-7.00}$ | 9.7 - 10.0 | 9.85 |

**Key points:**
- Titration break is larger with increasing $K_a$ of acid
- Titration break is larger at higher concentration [C] of weak acid

**Effect of concentration on titration break (HAc):**
| [HAc] | Titration Break |
|-------|-----------------|
| 0.01 M | 7.76 - 8.70 |
| 0.10 M | 7.76 - 9.70 |
| 1.00 M | 7.76 - 10.70 |

For [HAc] increase 10 times, the titration break becomes larger by one pH unit.

---

## 2.2-2 Titration Error

### Titration Function Derivation

**For weak acid (HA) with strong base (NaOH):**

**Mass balance:**
$$\frac{C_0 V_0}{v + V_0} = [\text{HA}] + [\text{A}^-]$$

**Charge balance:**
$$[\text{H}^+] + [\text{Na}^+] = [\text{OH}^-] + [\text{A}^-]$$

**Equilibrium:**
$$[\text{H}^+][\text{OH}^-] = K_w$$

**Titration function ($\phi$):**
$$\phi = \frac{Cv}{C_0 V_0}$$

Where:
- $C_0$: initial concentration of HA
- $V_0$: initial volume of HA
- $C$: concentration of NaOH
- $v$: volume of NaOH added

**At equivalence point:** $\phi = 1$

---

### Titration Error Formula

**Definition:**
$$\text{Titration error} = \frac{V_{ep} - V_e}{V_e} = \phi_{ep} - 1$$

Where:
- $V_{ep}$: volume titrated to the End-Point
- $V_e$: volume titrated to the Equivalence-Point

**For weak acid:**
$$\text{Titration error} \approx \frac{C + C_0}{C C_0} \left( \frac{K_w}{[\text{H}^+]_{ep}} - [\text{H}^+]_{ep} \right) + (\alpha_A - 1)$$

**For strong acid:**
$$\text{Titration error} \approx \frac{C + C_0}{C C_0} \left( \frac{K_w}{[\text{H}^+]_{ep}} - [\text{H}^+]_{ep} \right)$$

---

### Conclusions

1. **One can calculate the titration error from the pH at end-point (indicator)**
   - In titration of strong acid with strong base, using indicator at pH = 7, error = 0

2. **Titration error increases upon reagent dilution**
   - Given $C$, $C_0$: $x = \frac{C + C_0}{C C_0}$
   - Dilution by a factor of 2: $2x = \frac{\frac{C}{2} + \frac{C_0}{2}}{\frac{C}{2} \cdot \frac{C_0}{2}}$

3. **Titration error is smaller under:**
   - Larger $K_a$
   - Higher concentration [C]
   - Larger titration break

---

## 2.2-3 Find the End Point

### Methods:
1. **By indicator**
2. **By mathematical methods:**
   - First derivative (see Tutorial)
   - Gran plot (see Lecture 10)

---

### How Indicators Work

**Indicator equilibrium:**
$$\text{HIn} \rightleftharpoons \text{H}^+ + \text{In}^-$$

$$K_a = \frac{[\text{H}^+][\text{In}^-]}{[\text{HIn}]}$$

$$\frac{[\text{In}^-]}{[\text{HIn}]} = \frac{K_a}{[\text{H}^+]}$$

**Color change conditions:**
- $[\text{In}^-]/[\text{HIn}] > 10$: pH > pKa + 1 → Basic color
- $[\text{In}^-]/[\text{HIn}] < 0.1$: pH < pKa - 1 → Acidic color

**Color change range:** pH = pKa ± 1

---

### Common Indicators for Acid-Base Titration

| Indicator | Acidic Color | pKa | pH Range | Basic Color |
|-----------|--------------|-----|----------|-------------|
| Thymol blue | red | 1.7 | 1.2 - 2.8 | yellow |
| Methyl orange (MO) | red | 3.4 | 3.2 - 4.4 | yellow |
| Bromophenol blue | yellow | 3.9 | 3.0 - 4.6 | blue |
| Bromophenol green | yellow | 4.7 | 3.8 - 5.4 | blue |
| Methyl red (MR) | red | 5.0 | 4.8 - 6.0 | yellow |
| Litmus | red | 6.5 | 5.0 - 8.0 | blue |
| Bromothymol blue | yellow | 7.1 | 6.0 - 7.6 | blue |
| Phenol red | yellow | 7.9 | 6.6 - 8.0 | red |
| Thymol blue | yellow | 8.9 | 8.0 - 9.6 | blue |
| Phenolphthalein (PP) | colorless | 9.4 | 8.2 - 10.0 | pink |
| Alizarin yellow R | yellow | 11.2 | 10.1 - 12.0 | red |
| Alizarin | red | 11.7 | 11.0 - 12.4 | purple |

---

### Choosing the Right Indicator

**Example: Titration of 0.10 mol·L⁻¹ HAc with 0.10 mol·L⁻¹ NaOH**

| Indicator | pKa | pH Range | Suitable? |
|-----------|-----|----------|-----------|
| Methyl orange (MO) | 3.4 | 3.2 - 4.4 | ❌ No (changes before equivalence) |
| Methyl red (MR) | 5.0 | 4.8 - 6.0 | ❌ No (changes before equivalence) |
| Phenolphthalein (PP) | 9.4 | 8.2 - 10.0 | ✅ Yes (overlaps with titration break 7.76-9.7) |

**Rule:** The indicator transition range should overlap the steepest part of the titration curve (titration break).

---

## Summary

- **Titration curve:** Shows pH change as titrant is added
- **Equivalence point:** Theoretical stoichiometric point
- **End point:** Measured point using indicator or instrument
- **Titration error:** Difference between end point and equivalence point
- **Strong acid-strong base:** Three regions, pH = 7 at equivalence
- **Weak acid-strong base:** Four regions, buffer zone, basic pH at equivalence
- **Titration break:** Larger with higher $K_a$ and concentration
- **Indicator selection:** Must overlap with titration break

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*