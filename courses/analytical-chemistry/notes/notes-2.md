# Lecture 2: Fundamental Knowledge

> 📄 原始文件：2L-Fundamental knowledge 2025.pdf

---

## Framework of this course

| Section | Topic | Lecture |
|---------|-------|---------|
| Introduction | Introduction | L₁ |
| **Section I: Chemical Measurements** | | |
| | **Basic knowledge** | **L₂** |
| | Error and estimation | L₃ & L₄ |
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

### 1.1 Basic Knowledge

1. **1.1-1** Common prefixes and SI units
2. **1.1-2** Chemical concentration
3. **1.1-3** Preparing solutions
4. **1.1-4** Stoichiometry calculations for limiting reagents

---

### Oops! Mars Climate Orbiter Story

In 1999, the $125 million Mars Climate Orbiter spacecraft was lost when it entered the Martian atmosphere **100 km lower** than planned. This navigation error would have been avoided if people had written their units of measurement.

- Engineers who built the spacecraft calculated thrust in the English unit: **pounds of force**
- Jet propulsion laboratory engineers thought they were receiving the information in the metric unit: **Newtons**
- Nobody caught this error.

**Lesson:** This story tells us it is **veeeery necessary** to carry units along with the numbers when you do any calculation!

---

### 1.1-1 SI Units (International System / Metric System)

**SI Base Units:**

| Quantity | Unit | Symbol |
|----------|------|--------|
| Length | meter | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |

**Common Prefixes:**

| Prefix | Symbol | Factor |
|--------|--------|--------|
| kilo- | k | 10³ |
| centi- | c | 10⁻² |
| milli- | m | 10⁻³ |
| micro- | μ | 10⁻⁶ |
| nano- | n | 10⁻⁹ |

**Derived Quantities:**

| Quantity | Unit | Symbol | Relation |
|----------|------|--------|----------|
| Force | Newton | N | 1 N = 1 kg·m/s² |
| Pressure | Pascal | Pa | 1 Pa = 1 N/m² |
| Energy | Joule | J | 1 J = 1 N·m |
| Volume | Liter | L | 1 L = 0.001 m³ |

**Unit Conversions:**

- **Volume:**
  - 1 L = 1 dm × 1 dm × 1 dm = 0.1 m × 0.1 m × 0.1 m = 0.001 m³
  - 1 mL = 0.001 L = 1 cm × 1 cm × 1 cm = 1 cm³

- **Temperature:**
  - 0°C = 273.15 K
  - K = 273.15 + °C

- **Pressure:**
  - 1 atm = 101325 Pa = 760 mm Hg = 760 torr
  - 1 bar = 10⁵ Pa

- **Energy:**
  - 1 J = 1 N·m = 1 N·m³/m² = 1 Pa·m³ = 1000 Pa·L

---

### 1.1-2 Chemical Concentration

- A great deal of chemical analyses take place in solution
- It is imperative to know the concentration of solution
- Concentration is an **intrinsic characteristic** of a solution
- Solutions are homogeneous mixtures. So, it doesn't change when the solution is divided into several portions (in contrast to weight and volume)

**Concentration Units:**

| Unit | Expression | Description |
|------|------------|-------------|
| Molarity (M) | mol/L | moles of solute per liter of solution |
| % (weight/weight) | g solute / 100 g solution | percentage by weight |
| % (weight/volume) | g solute / 100 mL solution | percentage by weight/volume |
| ppm | mg/L = μg/mL | parts per million |
| ppb | μg/L = ng/mL | parts per billion |

**For aqueous solution:**
- 1 g H₂O equates to 1 mL H₂O
- ρ(H₂O) = 1.0 g/mL

**Notes:**
- ppm means parts per million (0.001‰)
- % means part per hecto (a factor of one hundred)
- ppm is dimensionless if the solution density is 1 g/mL

**Example:**
```
TEST YOURSELF: How many ppm of C₂₉H₆₀ are in 23 μM C₂₉H₆₀?
Answer: 9.4 ppm
```

---

### 1.1-3 Preparing Solutions

**Dilution Formula:**

$$M_{conc} \cdot V_{conc} = M_{dil} \cdot V_{dil}$$

Moles taken from concentrated solution = Moles placed in dilute solution

---

### 1.1-4 Stoichiometry Calculations for Limiting Reagents

**Example: Iron from dietary supplement tablet measured by gravimetric method**

**Process:**
1. Dissolving tablet and converting dissolved iron into solid Fe₂O₃
2. Mass of Fe₂O₃ tells us the mass of iron in the original tablet

**Reaction Steps:**

| Step | Process | Reaction |
|------|---------|----------|
| ① | Dissolve & Oxidize | 2Fe²⁺ + H₂O₂ + 2H⁺ → 2Fe³⁺ + 2H₂O |
| ② | Precipitate | Fe³⁺ + 3OH⁻ + (x-1)H₂O → FeOOH·xH₂O(↓) |
| ③ | Sinter | FeOOH·xH₂O(s) → Fe₂O₃(s) |
| ④ | Weigh | - |

**Calculation Example:**

Each tablet provides ~15 mg of iron, how many tablets we need to obtain 0.25 g of Fe₂O₃ product?

**Solution:**

0.25 g of Fe₂O₃ (MW = 160 g/mol) product contains:

$$\text{Fe mass} = 0.25 \text{ g} \times \frac{56 \times 2 \text{ g/mol}}{160 \text{ g/mol}} = 0.175 \text{ g Fe}$$

Each tablet provides about 15 mg of Fe

$$\text{Number of tablets} = \frac{0.175 \text{ g}}{0.015 \text{ g}} = 11.67 \text{ tablets}$$

**Result:** 12 tablets need to be dissolved to obtain 0.25 g of Fe₂O₃ product.

---

### To Decide Which Reagent is the Limiting Reagent:

a. Find the number of moles of each available reactant
b. Compare the number of moles present to the number of moles required for a complete reaction
c. Determine the limiting one (who is inadequate)

---

## Summary

- **SI base units:** m, kg, s, A, K and mol
- **Derived quantities:** N, Pa, J, L...
- **Units should be carried along with numbers**
- **Prefixes** (kilo-, milli-, micro-) denote multiples of units
- **Make solution:** M_conc·V_conc = M_dil·V_dil with equal mole
- **Stoichiometry calculation for limiting reagent**

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*