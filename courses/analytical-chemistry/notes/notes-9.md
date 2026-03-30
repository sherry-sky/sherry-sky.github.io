# Lecture 9: Potentiometry in Titrations

> 📄 原始文件：9L-Potentiometry in titrations 2.pdf

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
| | **Potentiometry in titrations** | **L₉** |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 2.3 Potentiometry in Titrations

### Contents:
1. **2.3-1** Galvanic cell
2. **2.3-2** Standard reduction potential ($E^\circ$)
3. **2.3-3** Nernst equation
4. **2.3-4** Electrodes types

---

## 2.3-1 Galvanic Cell

### Electroanalysis

**Electroanalytical methods** are based on redox reactions performed through an electrical circuit.

### Redox Reactions

A reaction in which an electron is transferred between atoms/ions. The reaction is based on differences in electron affinity.

**Example:**
$$\text{Fe}^{3+} + \text{V}^{2+} \rightarrow \text{Fe}^{2+} + \text{V}^{3+}$$

- $\text{Fe}^{3+}$ takes an electron (oxidant)
- $\text{V}^{2+}$ donates an electron (reductant)

**Oxidation:** Loss of electrons, oxidation state ↑
$$\text{V}^{2+} \rightarrow \text{V}^{3+} + e^-$$

**Reduction:** Gain of electrons, oxidation state ↓
$$\text{Fe}^{3+} + e^- \rightarrow \text{Fe}^{2+}$$

---

### Galvanic Cell

**Characteristics:**
- Utilizes a spontaneous chemical reaction to produce electricity
- One component is oxidized and the other is reduced
- The two components must be separated so that electrons must pass through the electrical circuit

**Example: Cadmium-Silver Cell**

**Without separation:**
- Almost no current flows
- Ag⁺ in solution directly reacts on the Cadmium (Cd) electrode surface

**With separation:**
- Short-time current flows
- The right cell becomes negative and the left cell becomes positive
- Electrons are repelled/prevented and current stops
- Current stops when electrostatic repulsion equals electrochemical force

---

### Salt Bridge

**Purpose:** Ions from the salt bridge migrate to the cells and neutralize the charges, resulting in continuous current in the electrical circuit.

**Cell notation:**
$$\text{Cd}(s) \mid \text{Cd(NO}_3)_2(aq) \parallel \text{AgNO}_3(aq) \mid \text{Ag}(s)$$

| Symbol | Meaning |
|--------|---------|
| $\mid$ | Phase interface |
| $\parallel$ | Salt bridge |

**Salt bridge:** Connects two half-cells

---

## 2.3-2 Standard Reduction Potentials ($E^\circ$)

The potential measured in a cell is different between electrodes. We place a **standard half-cell** on one side so that we can compare the potentials of various reactions in the other half-cell.

**Potential is a relative concept, like height.**

### Standard Hydrogen Electrode (S.H.E.)

The standard reference cell is assigned to the left side (e.g., S.H.E.).

**Example: Silver electrode**
- The measured potential for Ag⁺|Ag is assigned to the right side
- The measured potential is: **+0.799 V** (compared to S.H.E.)

**Standard reduction reaction:**
$$\text{Ag}^+ + e^- \rightarrow \text{Ag}(s) \quad E^\circ = 0.799\ \text{V (vs. S.H.E.)}$$

---

### Cadmium Electrode

**Replacing the right half-cell with Cd/Cd²⁺:**

**Reaction:**
$$\text{Cd}^{2+} + 2e^- \rightleftharpoons \text{Cd}(s)$$

**Measured reduction potential:** **-0.402 V**

The negative sign indicates that electrons move in the opposite direction, leaving from the Cd electrode.

**Oxidation reaction** (opposite direction):
$$\text{Cd}(s) \rightleftharpoons \text{Cd}^{2+} + 2e^- \quad (E^\circ = +0.402\ \text{V})$$

---

### Standard Reduction Potential Table

**Note:** The standard potentials in the table are against S.H.E., when all concentrations are unit 1 M.

---

## 2.3-3 Nernst Equation

Describes the effect of concentration on cell potential.

**For reaction:** $a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$

$$E = E^\circ - \frac{RT}{nF}\ln\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$$

Where:
- $E^\circ$: Standard reduction potential (when all concentrations are 1.0 M)
- $n$: Number of electrons passing through the circuit
- $R = 8.314\ \text{J/(K·mol)}$
- $T = 298.15\ \text{K}$
- $F = 96490\ \text{C/mol}$ (Faraday constant, $F = e \cdot N_A$)

**At 25°C, converting natural log to base-10 log:**
$$E = E^\circ - \frac{0.05916}{n}\log\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$$

---

## 2.3-4 Electrode Types

### Reference Electrode

**Definition:** The half-cell of constant potential (with fixed composition). Used for measuring cell potential.

### Indicator / Working Electrode

**Definition:** Used for passing electrons to/from analyte and responds to concentrations.

**Cell potential:**
$$E_{\text{cell}} = E_{\text{indicator}} - E_{\text{reference}} = f(C)$$

The whole cell potential is the difference between the analyte half-cell (varies with concentration) and the constant potential of the reference electrode.

---

### Reference Electrode Construction

**Example:** Silver-silver chloride reference electrode

- Dip a platinum wire and connect via a salt bridge to a half-cell of constant potential of Ag/Ag⁺
- Cl⁻ concentration is constant since the solution is saturated with solid KCl

**Available as packaged reference electrodes on the market.**

---

### Example: Iron Ion Concentration Measurement

**Unknown:** Concentration of iron ions

**Half-reactions (written as reductions):**

| Electrode | Reaction | $E^\circ$ |
|-----------|----------|-----------|
| **Cathode (Right)** | $\text{Fe}^{3+} + e^- \rightleftharpoons \text{Fe}^{2+}$ | $+0.767\ \text{V}$ |
| **Anode (Left)** | $\text{AgCl}(s) + e^- \rightleftharpoons \text{Ag}(s) + \text{Cl}^-$ | $+0.222\ \text{V}$ |

**Nernst equations:**

**Cathode:**
$$E_+ = 0.767 - \frac{0.05916}{1}\log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]}$$

**Anode:**
$$E_- = 0.222 - \frac{0.05916}{1}\log[\text{Cl}^-]$$

**Cell potential:**
$$E_{\text{cell}} = E_+ - E_- = \left\{0.767 - 0.05916\log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]}\right\} - \left\{0.222 - 0.05916\log[\text{Cl}^-]\right\}$$

This can be used to measure the quotient of $\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]}$.

---

### Indicator Electrode Types

#### 1. Metal Indicator Electrode

- Inert electrodes made of Pt, Au, Ag, Cd, etc. (transmit electrons only)
- Used for measuring potential resulting from redox reaction on the metal surface

#### 2. Ion Selective Electrode

- Measures the potential resulting from ions passing through the membrane
- Based on a membrane with selective affinity to specific ions

---

### Metal Indicator Electrode Example

**Measuring [Ag⁺] using Ag and calomel electrodes:**

**Reaction at Ag indicator electrode:**
$$\text{Ag}^+ + e^- \rightleftharpoons \text{Ag}(s) \quad E^\circ_+ = 0.799\ \text{V}$$

**Reference Saturated Calomel Electrode (S.C.E.):**
$$\text{Hg}_2\text{Cl}_2(s) + 2e^- \rightleftharpoons 2\text{Hg}(l) + 2\text{Cl}^- \quad E_- = 0.241\ \text{V}$$

**Nernst equation for entire cell:**
$$E_{\text{cell}} = E_+ - E_- = \left(0.799 - 0.05916\log\frac{1}{[\text{Ag}^+]}\right) - 0.241$$
$$E_{\text{cell}} = 0.558 + 0.05916\log[\text{Ag}^+]$$

---

## Application: Argentometric Titration

**Titration with Ag⁺**

**Apparatus:**
- Silver electrode responds to change in [Ag⁺]
- S.C.E. provides reference potential
- Potentiometer monitors cell potential

**Example:** 100 mL 0.1 M NaCl titrated with 0.1 M AgNO₃ ($K_{sp} = 1.8 \times 10^{-10}$)

**Calculate potential after addition of:**
- a) 65 mL
- b) 100 mL
- c) 135 mL of AgNO₃

---

### Calculations

#### a) At 65 mL (Before equivalence)
- 65% AgNO₃ has precipitated, 35% remains
- $[\text{Cl}^-] = 35\% \times 0.1\ \text{M} \times \frac{100\ \text{mL}}{100\ \text{mL} + 65\ \text{mL}} = 0.0212\ \text{M}$
- $[\text{Ag}^+] = \frac{K_{sp}}{[\text{Cl}^-]} = 8.5 \times 10^{-9}\ \text{M}$
- $E_+ = 0.558 + 0.05916\log[\text{Ag}^+] = 0.081\ \text{V}$

#### b) At 100 mL (At equivalence)
- 100% AgNO₃ has precipitated
- $[\text{Ag}^+] = \sqrt{K_{sp}} = 1.34 \times 10^{-5}\ \text{M}$
- $E_+ = 0.558 + 0.05916\log[\text{Ag}^+] = 0.27\ \text{V}$

#### c) At 135 mL (After equivalence)
- Excess of 35 mL AgNO₃
- $[\text{Ag}^+] = \frac{35\ \text{mL} \times 0.1\ \text{mol/L}}{100\ \text{mL} + 135\ \text{mL}} = 0.0149\ \text{M}$
- $E_+ = 0.558 + 0.05916\log[\text{Ag}^+] = 0.450\ \text{V}$

---

### Titration Curves by Different Methods

| Method | Measurement | Relationship |
|--------|-------------|--------------|
| **Potentiometric** | Potential on Cathode | $E \uparrow = 0.558 - 0.05916 \times \text{p[Ag}^+] \downarrow$ |
| **p[Ag⁺]** | p[Ag⁺] | Direct measurement |

**At equivalence point (100 mL):**
- Potential: 0.27 V
- p[Ag⁺]: 4.87

**Key points:**
- Before $V_e$: Potential near $E^\circ(\text{Fe}^{3+}|\text{Fe}^{2+}) - E_{\text{ref}}$
- Near $V_e$: Rapid rise in voltage
- After $V_e$: Levels off near $E^\circ(\text{Ce}^{4+}|\text{Ce}^{3+}) - E_{\text{ref}}$

---

## Redox Titration Example

**Reaction:**
$$\text{Ce}^{4+} + \text{Fe}^{2+} \rightarrow \text{Ce}^{3+} + \text{Fe}^{3+}$$

**Setup:**
- 25 mL of Fe²⁺ solution titrated with 0.1091 M Ce⁴⁺
- Solvent: 1 M HClO₄
- Cell monitored potentiometrically with Pt and calomel electrodes

**Question:** What is the potential during titration at 10%, 25%, 50%, 100%, 120%, and 200%?

---

### At the Pt Working Electrode

**Two reactions come to equilibrium:**

1. $\text{Fe}^{3+} + e^- \rightleftharpoons \text{Fe}^{2+} \quad E^\circ = 0.767\ \text{V}$
2. $\text{Ce}^{4+} + e^- \rightleftharpoons \text{Ce}^{3+} \quad E^\circ = 1.70\ \text{V}$

**Final cell potential:**
$$E_{\text{cell}} = E_+ - E_-$$

Where $E_-$ is the reference electrode potential (0.241 V for S.C.E.)

---

### Four Regions for Titration Curve

#### 1. Before Equivalence Point ($0 < V < V_e$)

There is almost no Ce⁴⁺, so it's better to use the iron element for potential calculation.

**Example at 10% titration:**
- We know how much Ce⁴⁺ we add, which gives how much [Fe³⁺]
- $[\text{Ce}^{4+}] = 1.95 \times 10^{-16}\%$ (very tiny)

**Example at 25% titration:**
- Use Fe³⁺/Fe²⁺ ratio for calculation

**At 50% titration ($V = \frac{1}{2}V_e$):**
- $[\text{Fe}^{3+}] = [\text{Fe}^{2+}]$
- $E_+ = E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} = 0.767\ \text{V}$

---

#### 2. At Equivalence Point ($V = V_e$, 100% titration)

Since the reaction is in equilibrium, a tiny amount of Fe²⁺ may be formed, which equals the amount of Ce⁴⁺. We need to use both equations.

**Using:** $\log a + \log b = \log ab$

**Indicator potential at equivalence point:**
$$E_+ = \frac{1}{2}(E^\circ_{\text{analyte}} + E^\circ_{\text{titrant}})$$

**This is independent of concentrations and volumes of reactants.**

**For Ce⁴⁺/Fe²⁺ titration:**
$$E_+ = \frac{1}{2}(0.767 + 1.70) = 1.234\ \text{V}$$
$$E_{\text{cell}} = 1.234 - 0.241 = 0.993\ \text{V}$$

---

#### 3. After Equivalence Point ($V > V_e$)

We don't know [Fe²⁺] (has been "used up"). There is excess Ce⁴⁺ and we know the quotient of [Ce³⁺]/[Ce⁴⁺].

**Example at 120% titration:**
- $[\text{Ce}^{3+}]/[\text{Ce}^{4+}] = 5$

**Example at 200% titration:**
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

2. **Near $V_e$:** Rapid rise in voltage

3. **After $V_e$:** Levels off near $E^\circ(\text{Ce}^{4+}|\text{Ce}^{3+}) - E_{\text{ref}}$

4. **Titration accuracy:** The larger $\Delta E$ between $E^\circ_{\text{analyte}}$ and $E^\circ_{\text{titrant}}$, the less titration error and higher accuracy.

---

## Summary

- **Galvanic cell:** Converts chemical energy to electrical energy
- **Standard reduction potential:** Measured relative to S.H.E.
- **Nernst equation:** Relates concentration to cell potential
- **Reference electrode:** Constant potential (e.g., S.C.E., Ag/AgCl)
- **Indicator electrode:** Responds to analyte concentration
- **Potentiometric titration:** Monitors potential change during titration
- **Equivalence point potential:** Average of analyte and titrant standard potentials

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*