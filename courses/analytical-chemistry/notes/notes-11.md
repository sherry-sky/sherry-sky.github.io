# Lecture 11: Electroanalysis Techniques

> 📄 原始文件：11L-Electroanalysis techniques 2023.pdf

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
| | **Electroanalysis** | **L₁₁** |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## 2.5 Electroanalytical Techniques

### Example: Lead-Acid Battery

**Electrolysis:** A process in which external potential is used for forcing a reaction.

**Discharging (spontaneous direction):**

$$\text{Pb}(s) + \text{PbO}_2(s) + 2\text{H}_2\text{SO}_4 \rightleftharpoons 2\text{PbSO}_4 + 2\text{H}_2\text{O}$$

| Electrode | Reaction | $E^\circ$ |
|-----------|----------|-----------|
| **Cathode** | $\text{PbO}_2(s) + 4\text{H}^+ + \text{SO}_4^{2-} + 2e^- \rightleftharpoons \text{PbSO}_4 + 2\text{H}_2\text{O}$ | $+1.685\ \text{V}$ |
| **Anode** | $\text{Pb}(s) + \text{SO}_4^{2-} \rightleftharpoons \text{PbSO}_4(s) + 2e^-$ | $+0.355\ \text{V}$ |
| **Net** | $\text{Pb}(s) + \text{PbO}_2(s) + 2\text{H}_2\text{SO}_4 \rightleftharpoons 2\text{PbSO}_4 + 2\text{H}_2\text{O}$ | $E^\circ_{\text{cell}} = 2.040\ \text{V}$ |

**Charging (applying external potential):**

$$2\text{PbSO}_4 + 2\text{H}_2\text{O} \rightleftharpoons \text{PbO}_2(s) + \text{Pb}(s) + 2\text{H}_2\text{SO}_4 \quad E^\circ = -1.458\ \text{V}$$

**Applying external potential higher than 1.5 V reverses the reaction and produces PbO₂ and Pb precipitates.**

---

### Contents:
1. **2.5-1** Voltammetry analysis
2. **2.5-2** Electrogravimetric analysis
3. **2.5-3** Coulometric analysis

---

## 2.5-1 Voltammetry

**Definition:** Electroanalytical methods in which the analyte concentration is found by measuring the current as a function of applied potential under the conditions of concentration polarization.

**Key characteristic:** Only a minor portion of the analyte is consumed, and its concentration is thought to be unchanged.

---

### Experimental Setup

**Three electrodes in analyte solution:**

| Electrode | Function |
|-----------|----------|
| **(1) Working electrode** | Variable potential |
| **(2) Reference electrode** | Constant potential (no current passes) |
| **(3) Counter electrode** | Pt or Hg for passing current to/from the working electrode |

**Supporting electrolyte:** Inert electrolyte, in excess

---

### Circuit Diagram

- **Variable voltage supply**
- **Ammeter** (measures current)
- **Potentiometer** (measures potential)

---

### Linear Scan Voltammetry

- **Applied potential** as a function of time (linear increase)
- **Measured current** as a function of potential

---

### Concentration Profile

**Reaction at electrode surface:**
$$\text{Fe}^{3+} + e^- \rightarrow \text{Fe}^{2+}$$

**Three ways to help ions reach the working electrode surface:**

| Method | Description |
|--------|-------------|
| **1. Diffusion** | Through a concentration gradient |
| **2. Convection** | By physical means (e.g., stirring or boiling) |
| **3. Migration** | By charged surface (electrostatic attraction or repulsion) |

---

### Before and After Application of Potential

**Before:**
- Uniform concentration of Fe³⁺ throughout solution

**After:**
- Concentration gradient forms near electrode
- Fe³⁺ is reduced to Fe²⁺ at electrode surface

---

### Principles of Voltammetry

**In voltammetry, the current is determined by the rate of ion migration to working electrode surfaces.**

- **Selectivity** to analyte is obtained by setting the potential on working electrode
- Ions are attracted to the working electrode, where electroactive ions undergo redox reactions
- The resulting current is **proportional to the analyte concentration**

---

### Example: Voltammetric Analysis of Pb²⁺

**Setup:**
- **Working electrode:** Pt at -1.0 V vs SCE
- **Reference electrode:** SCE
- **Counter electrode:** Ag at 0.0 V
- **Solution:** $x\ M$ PbCl₂ and 0.1 M KCl

**Reactions:**

| Reaction | $E^\circ$ |
|----------|-----------|
| $\text{Pb}^{2+} + 2e^- \rightarrow \text{Pb}$ | $-0.13\ \text{V}$ |
| $\text{K}^+ + e^- \rightarrow \text{K}$ | $-2.93\ \text{V}$ |

**Process:**
1. Pb²⁺ migrates to electrode by diffusion, against electrostatic repulsion
2. K⁺ layer around the electrode repulses Pb²⁺ ions and almost stops their migration
3. Concentration gradient is formed between the electrode and solution bulk
4. Current ∝ diffusion rate ∝ concentration gradient

---

### Rotating Disk Electrode (RDE)

**If the potential is great enough:**
- The reaction is fast
- $C_s$ at $x = 0$ is nearly 0

**Concentration gradient** (0 μm < x < 100 μm) is by diffusion alone.

---

### Diffusion Current

**Key relationships:**
- Diffusion current is governed by the rate of analyte diffusion to working electrode surface
- Current ∝ diffusion rate ∝ $(C_0 - C_s) \approx C_0$

**"∝" means "in proportion to"**

**Current is proportional to $C_0$** - This is the basis for quantitative analysis by Voltammetry.

---

### Current as a Function of Applied Potential (Qualitative)

**Example:** 0.001 M Cd²⁺ in 0.1 M KNO₃ supporting electrolyte

| Region | Description |
|--------|-------------|
| **Initial** | Working electrode cannot reduce Cd²⁺, current ≈ 0 |
| **Onset** | Electrode becomes more reductive, Cd²⁺ → Cd, current starts |
| **Rising** | Current increases as more Cd²⁺ ions near electrode are reduced; diffusion rate does not limit reaction |
| **Limiting** | All Cd²⁺ around electrode are reduced; current is limited by Cd²⁺ diffusion rate; current stabilizes at $i_d$ value |

**Half-wave potential:** $(E_{1/2}, \frac{i_d}{2})$

**Reaction:** $\text{Cd}^{2+} + 2e^- \rightarrow \text{Cd} \quad E^\circ = -0.402\ \text{V}$

---

### Voltammetry Summary

- **Relation between current and voltage** during electrochemical processes
- **Current intensity is proportional to concentration** of analyte (e.g., Fe²⁺)

**Current regions:**
- **Residual current** (baseline)
- **Increased current** (exponential rise)
- **Limiting current** ($i_d$)

---

## 2.5-2 Electrogravimetric Analysis

**Definition:** Quantitative analysis based on precipitating all the analyte on an electrode; the electrode is weighed before and after deposition.

**How do we know that precipitation is completed?**
- Disappearance of color
- No deposition on freshly exposed electrode surface
- Qualitative analysis of the solution

---

### Electrolytic Precipitation

**Example: Copper Analysis**

**Nernst equation for required applied potential:**
$$E_{\text{applied}} = E^\circ(\text{Cu}^{2+}/\text{Cu}) + E(\text{H}_2\text{O}/\text{O}_2) - \frac{0.05916}{4}\log\frac{[\text{H}^+]^4 p_{\text{O}_2}}{[\text{Cu}^{2+}]^2}$$

**Reactions:**

| Electrode | Reaction | $E^\circ$ |
|-----------|----------|-----------|
| **Cathode** | $\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}(s)$ | $+0.342\ \text{V}$ |
| **Anode** | $2\text{H}_2\text{O} \rightarrow \text{O}_2(g) + 4\text{H}^+ + 4e^-$ | $-1.23\ \text{V}$ |
| **Net** | $2\text{Cu}^{2+} + 2\text{H}_2\text{O} \rightarrow \text{Cu}(s) + \text{O}_2(g) + 4\text{H}^+$ | |

---

## 2.5-3 Coulometric Analysis

**Definition:** Quantitative analysis based on reacting all analyte and measuring the total charges consumed.

---

### A. Constant Potential Method

**Formula:**
$$Q = \int_0^t i\,dt$$

**Drawback:** Time-consuming (current decreases exponentially as analyte is reacted)

**Solutions:**
- Small sample volume
- Large electrode area
- Efficient mixing
- Use constant current method

---

### B. Constant Current Method

**Advantages:**
- Shorter analysis time
- Simpler integration

**Formula:**
$$Q = I \times t = n_e \times F$$

Where:
- $Q$: Amount of charge (Coulombs)
- $I$: Current (Amperes)
- $t$: Time (seconds)
- $n_e$: Moles of electrons participating in the reaction
- $F$: Faraday constant = $96,485\ \text{C/mol}$

---

### Example: Analysis of Cu²⁺

**Reaction:** $\text{Cu}^{2+}(aq) + 2e^- \rightleftharpoons \text{Cu}(s)$

**Selecting constant potential:**
- The electrode must be sufficiently **negative** to deliver electrons to Cu ions
- $E^\circ = +0.34\ \text{V}$

**How negative may the electrode be?**
- Until hydronium ions are reduced to H₂
- At this point, current is not solely attributed to reduction of Cu ions

---

## Comparison of Electroanalysis Methods

| Method | Measurement | Principle |
|--------|-------------|-----------|
| **Voltammetry** | Current as function of potential | Measures current under concentration polarization |
| **Electrogravimetry** | Mass change | Analyte deposited as solid on electrode; weight increase measures analyte amount |
| **Coulometry** | Current as function of time | Counts number of electrons participating in reaction |

**All these methods are for quantitative analysis.**

---

## Summary of Electroanalytical Techniques

1. **Voltammetry Analysis**
   - Based on measuring current intensity under concentration polarization
   - Current ∝ analyte concentration

2. **Electrogravimetric Analysis**
   - Analyte deposited as solid on electrode
   - Increase in electrode weight directly measures analyte amount

3. **Coulometric Analysis**
   - Based on counting electrons participating in reaction
   - $Q = I \times t = n_e \times F$

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*