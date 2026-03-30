# Lecture 8: Let Titration Begin (Part 2) - Precipitation Titration

> 📄 原始文件：8L-Let Titration begin-2.pdf

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

## 2.2-4 Titration Types

**Types of titration:**
- Acid-base titration
- **Precipitation titration**
- Redox titration

---

## Precipitation Titration

### Solubility Product ($K_{sp}$)

**Methods:**
- Mohr titration
- Volhard titration
- Fajans titration
- Potentiometric titration

---

### Solubility Product ($K_{sp}$)

**Example: Ag⁺ + I⁻ ⇌ AgI↓**

$$K_{sp} = [\text{Ag}^+][\text{I}^-]$$

**Problem:** Find $[\text{Ag}^+]$ as a function of the volume $V$ added to the solution.

**Given:**
- $[\text{I}^-]_0 = C_I$, Volume = $V_0$
- $[\text{Ag}^+] = C_{\text{Ag}^+}$, Titrated volume = $v$

**Solution approach:**
1. First calculate $[\text{I}^-]$
2. Then find $[\text{Ag}^+] = K_{sp} / [\text{I}^-]$

**Mass balance:**
$$[\text{I}^-] = \frac{C_I V_0 - C_{\text{Ag}^+} v}{V_0 + v} + [\text{Ag}^+]$$

Where:
- $\frac{C_I V_0 - C_{\text{Ag}^+} v}{V_0 + v}$: I⁻ moles that reacted
- $[\text{Ag}^+]$: I⁻ from dissolution of AgI precipitate (equals $[\text{Ag}^+]$)

**Quadratic equation for $[\text{I}^-]$:**
$$[\text{I}^-] = \frac{C_I V_0 - C_{\text{Ag}^+} v}{2(V_0 + v)} + \sqrt{\left(\frac{C_I V_0 - C_{\text{Ag}^+} v}{2(V_0 + v)}\right)^2 + K_{sp}}$$

**Finding $[\text{Ag}^+]$:**
$$[\text{Ag}^+] = \frac{K_{sp}}{[\text{I}^-]}$$

---

### Precipitation Titration Curve

**Example:** Titration of 25 mL 0.1 M I⁻ with 0.05 M Ag⁺

**$K_{sp}(\text{AgI}) = 8.3 \times 10^{-17}$**

**Three regions for titration curve:**

| Region | Condition | p[Ag⁺] Determined by |
|--------|-----------|---------------------|
| **Before equivalence** | $0 < V < V_e$ | AgI redissolution |
| **At equivalence** | $V = V_e$ | $K_{sp}$ |
| **After equivalence** | $V > V_e$ | Excess Ag⁺ |

**At equivalence point ($V = V_e$):**
$$\text{p[Ag}^+]_f = -\log\sqrt{K_{sp}} = 8.04$$

**Example calculations:**
- At $V = 10\ \text{mL}$: $\text{p[Ag}^+]_f = 14.84$
- At $V = 52\ \text{mL}$: $\text{p[Ag}^+]_f = 2.89$

---

### Effect of Concentration and $K_{sp}$ on Titration Accuracy

**Questions:**
1. Which titration is more accurate: Ag⁺ with I⁻ or with Cl⁻?
2. Which titration is more accurate: high or low reagent concentrations?

**Answers:**

| Factor | Effect on Titration Error |
|--------|--------------------------|
| **Higher concentration** | Less error (more accurate) |
| **Smaller $K_{sp}$** | Less error (more accurate) |

**Comparison:**
- $K_{sp}(\text{AgI}) < K_{sp}(\text{AgCl})$
- Therefore: Titration of I⁻ is more accurate than Cl⁻

**Example:**
| Solution | Concentration | Accuracy |
|----------|---------------|----------|
| A | 50 mL 0.05 M Cl⁻ + 0.1 M Ag⁺ | Higher accuracy |
| B | 50 mL 0.005 M Cl⁻ + 0.01 M Ag⁺ | Lower accuracy |

---

### Titration Curve Characteristics

**For different halides [X⁻] = [I⁻], [Br⁻], [Cl⁻]:**

| Point | Depends on |
|-------|------------|
| **Initial p[Ag⁺]** | Higher when $K_{sp}$ is lower |
| **At equivalence point** | Depends only on $K_{sp}$ (independent of concentration and volume) |
| **Final p[Ag⁺]** | Depends on $[\text{Ag}^+]$ (independent of $K_{sp}$) |

**Formula:**
$$\text{p[Ag}^+] = -\log[\text{Ag}^+] = -\log\frac{K_{sp}}{[\text{X}^-]}$$

---

## End Point Detection Methods

### (a) Indicators Methods (Color Change)

1. **Mohr titration**
2. **Volhard titration**
3. **Fajans titration**

### (b) Optical Methods

- Turbidimetry
- Nephelometry

### (c) Potentiometric Methods

- Follow p[Ag⁺]

---

## Mohr Titration

**Titration reaction:**
$$\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl}↓$$

**Reaction at end point:**
$$2\text{Ag}^+ + \text{CrO}_4^{2-} \rightarrow \text{Ag}_2\text{CrO}_4↓$$

**Indicator:** Chromate ion ($\text{CrO}_4^{2-}$), yellow color

**Color changes:**
| Stage | Color |
|-------|-------|
| Starting point | Yellow |
| During titration | Milky white (AgCl) |
| End point | Pink (Ag₂CrO₄) |

---

### Indicator Concentration Calculation

**Question:** What should be the indicator's concentration so that it precipitates at equivalence point?

**At equivalence point:**
$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgCl})} = 1.3 \times 10^{-5}\ \text{M}$$

**For Ag₂CrO₄ precipitation:**
$$K_{sp}(\text{Ag}_2\text{CrO}_4) = [\text{Ag}^+]^2[\text{CrO}_4^{2-}]$$
$$1.2 \times 10^{-12} = (1.3 \times 10^{-5})^2[\text{CrO}_4^{2-}]$$
$$[\text{CrO}_4^{2-}] = 0.0071\ \text{M} \approx 0.01\ \text{M}$$

**Effect of indicator concentration:**
- **Higher concentration:** Pink color appears before equivalence point
- **Lower concentration:** Pink color appears after equivalence point

---

### Difficulties with Mohr Titration

1. **Large quantity of Ag₂CrO₄ precipitate** is needed for observing the pink color (requires partial correction: titration without Cl⁻)

2. **$K_{sp}$ depends on temperature** (differently for each compound). Standard procedure is for room temperature.

3. **Accuracy depends on indicator's concentration**

4. **pH ≈ 8 must be maintained:**
   - At more acidic pH: indicator provides HCrO₄⁻
   - At more basic pH: AgOH precipitates

---

## Volhard Titration

**Analyte:** Cl⁻, I⁻, Br⁻

**Procedure (Back titration):**

1. Add known excess quantity of Ag⁺ to analyte
2. Precipitate forms + excess Ag⁺ remains
3. Add indicator (Fe³⁺)
4. Titrate excess Ag⁺ with SCN⁻

**Reactions:**

| Step | Reaction |
|------|----------|
| **Titration reaction** | Ag⁺ + SCN⁻ → AgSCN↓ |
| **End point reaction** | Fe³⁺ + SCN⁻ → FeSCN²⁺ (red complex) |

**End point:** Appearance of red color (in acidic solution, 0.2 M HNO₃)

---

### Key Concepts

| Term | Definition |
|------|------------|
| **Direct Titration** | Add titrant to analyte until reaction is complete |
| **Back Titration** | Add known excess of one standard reagent to analyte, then titrate excess with second standard |
| **Volumetric Analysis** | Procedures measuring volume of reagent needed to react with analyte |

---

### Problem with Volhard Titration for Cl⁻

**Problem:** AgCl is more soluble than AgSCN

$$K_{sp}(\text{AgSCN}) = 1.03 \times 10^{-12}$$
$$K_{sp}(\text{AgCl}) = 1.8 \times 10^{-10}$$

**Side reaction:**
$$\text{AgCl}↓ + \text{SCN}^- \rightleftharpoons \text{AgSCN}↓ + \text{Cl}^-$$

This causes quantity of SCN⁻ to become larger.

**Solutions:**
1. Filter the AgCl precipitate and titrate Ag⁺ in the filtrate
2. Add nitrobenzene that coats/isolates the AgCl precipitates

**Note:** AgBr and AgI do not have this problem.

---

## Fajans Titration

**Indicator:** Adsorption indicator (anionic dyes)

**Example:** Dichlorofluorescein (DCF)

**Mechanism:**
- Adsorption of negatively charged dye on positively charged precipitate surface
- Color change indicates end point

**Color change:** From greenish yellow to pink

**Process:**
| Stage | Precipitate Surface | Indicator Color |
|-------|--------------------|-----------------|
| Before end point | Negative (Cl⁻ excess) | Greenish yellow |
| After end point | Positive (Ag⁺ excess) | Pink |

---

## Optical Methods

### Turbidimetry
- Measures light absorption/scattering
- Very sensitive, can be used at low concentrations

### Nephelometry
- Measures scattered light
- Improvement can be achieved using spectroscopy (spectrum depends on particle size)

---

## Potentiometric Titration

### Apparatus

- **Silver electrode:** Responds to change in $[\text{Ag}^+]$
- **Saturated Calomel Electrode (S.C.E.):** Provides reference potential

**Cell voltage is monitored during titration.**

---

### Nernst Equation

**For reaction:** $a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$

$$E = E^\circ - \frac{RT}{nF}\ln\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$$

Where:
- $E^\circ$: Standard reduction potential (when all concentrations are 1 M)
- $n$: Number of electrons transferred
- $R = 8.314\ \text{J/(K·mol)}$
- $T = 298.15\ \text{K}$
- $F = 96490\ \text{C/mol}$ (Faraday constant)

**At 25°C, converting to base-10 log:**
$$E = E^\circ - \frac{0.05916}{n}\log\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$$

---

### Metal Indicator Electrodes

**Example:** Ag and calomel electrodes to measure $[\text{Ag}^+]$

**Reaction at Ag indicator electrode:**
$$\text{Ag}^+ + e^- \rightleftharpoons \text{Ag}(s) \quad E^\circ_+ = 0.799\ \text{V}$$

**Reference electrode (S.C.E.):**
$$\text{Hg}_2\text{Cl}_2(s) + 2e^- \rightleftharpoons 2\text{Hg}(l) + 2\text{Cl}^- \quad E_- = 0.241\ \text{V}$$

**Nernst equation for entire cell:**
$$E = E_+ - E_- = \left(0.799 - 0.05916\log\frac{1}{[\text{Ag}^+]}\right) - 0.241$$
$$E = 0.558 + 0.05916\log[\text{Ag}^+]$$

---

### Example Calculation

**100 mL 0.1 M NaCl titrated with 0.1 M AgNO₃ ($K_{sp} = 1.8 \times 10^{-10}$)**

**Calculate voltage after addition of:**

#### a) 65 mL AgNO₃ (Before equivalence)
- 65% AgNO₃ has precipitated, 35% remains
- $[\text{Cl}^-] = 35\% \times 0.1\ \text{M} \times \frac{100\ \text{mL}}{165\ \text{mL}} = 0.0212\ \text{M}$
- $[\text{Ag}^+] = \frac{K_{sp}}{[\text{Cl}^-]} = 8.5 \times 10^{-9}\ \text{M}$
- $E = 0.558 + 0.05916\log[\text{Ag}^+] = 0.081\ \text{V}$

#### b) 100 mL AgNO₃ (At equivalence)
- Ag⁺ comes from dissolution of AgCl
- $[\text{Ag}^+] = \sqrt{K_{sp}} = 1.34 \times 10^{-5}\ \text{M}$
- $E = 0.558 + 0.05916\log[\text{Ag}^+] = 0.270\ \text{V}$

#### c) 135 mL AgNO₃ (After equivalence)
- Excess of 35 mL AgNO₃
- $[\text{Ag}^+] = \frac{3.5\ \text{mmol}}{235\ \text{mL}} = 0.0149\ \text{M}$
- $E = 0.558 + 0.05916\log[\text{Ag}^+] = 0.450\ \text{V}$

---

### Comparison of Detection Methods

| Method | Measures | Characteristics |
|--------|----------|-----------------|
| **Potentiometric** | p[Ag⁺] | $E \uparrow = 0.558 - 0.05916 \times \text{p[Ag}^+] \downarrow$ |
| **Optical** | Light scattering | Very sensitive |
| **Indicator** | Color change | Simple, visual |

**At equivalence point (100 mL):**
- Potential: 0.27 V vs. S.C.E.
- p[Ag⁺]: 4.87

---

## Summary

- **Precipitation titration:** Based on formation of insoluble precipitate
- **$K_{sp}$:** Determines titration accuracy (smaller $K_{sp}$ = more accurate)
- **Mohr method:** Chromate indicator, direct titration for Cl⁻
- **Volhard method:** Back titration with Fe³⁺ indicator
- **Fajans method:** Adsorption indicator
- **Potentiometric:** Measures $[\text{Ag}^+]$ using Ag electrode
- **Higher concentration and smaller $K_{sp}$** give less titration error

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*