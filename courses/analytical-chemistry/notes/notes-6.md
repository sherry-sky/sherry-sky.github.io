# Lecture 6: pH and Buffer Solutions

> 📄 原始文件：6L-pH and Buffer solutions 2023.pdf

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
| | **pH and buffer solutions** | **L₆** |
| | Titrations | L₇ & L₈ |
| | Potentiometry in titrations | L₉ |
| | Gran plot in titrations | L₁₀ |
| | Electroanalysis | L₁₁ |
| | Gravimetric analysis | L₁₂ |
| Summary | Summary | L₁₃ |

---

## Section II: Chemical Equilibrium

### Targets

1. Principles of Chemical Equilibrium: Equilibrium constant
2. pH calculation: strong/weak acid and base
3. Buffer solution: conjugate acids and bases, Henderson-Hasselbalch Equation, buffer capacity

---

### Principles of Chemical Equilibrium

**Reaction:**
$$a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$$

**Equilibrium constant:**
$$K = \frac{[\text{C}]^c [\text{D}]^d}{[\text{A}]^a [\text{B}]^b}$$

**Standard unit of concentration:**
- Solutes: M (mol/L)
- Gases: Atm
- Pure solid, liquid and solvent are omitted

**Properties of K:**
- If the direction of a reaction is reversed: $K' = 1/K$
- If two reactions are added: $K_3 = K_1 \times K_2$

---

### Equilibrium Constant of Water ($K_w$)

$$\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-$$

$$K_w = [\text{H}^+][\text{OH}^-] \approx 10^{-14} \text{ at } 25.0^\circ\text{C}$$

**Example 1:** Calculate $[\text{H}^+]$ and $[\text{OH}^-]$ in pure water at 25.0°C

$$\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-$$
$$x \times x = 10^{-14}$$
$$x = 1.0 \times 10^{-7}\ M$$

**Example 2:** Find $[\text{H}^+]$ in pure water at 0°C ($K_w = 1.15 \times 10^{-15}$)
$$[\text{H}^+] = 3.4 \times 10^{-8}\ M$$

**Example 3:** Calculate $[\text{OH}^-]$ if $[\text{H}^+] = 1.0 \times 10^{-3}\ M$
$$1.0 \times 10^{-3} \times [\text{OH}^-] = 10^{-14}$$
$$[\text{OH}^-] = 10^{-11}\ M$$

**Note:** As $[\text{H}^+]$ increases, $[\text{OH}^-]$ necessarily decreases (and vice versa), because $K_w$ is constant at a given temperature.

---

## 2.1 pH and Buffer Solutions

### Contents:
1. **2.1-1** pH for different solutions (Strong/weak acids & bases in H₂O)
2. **2.1-2** Buffer solutions (Henderson-Hasselbalch equation, Buffer capacity β)

---

### Terms to Understand

| Term | Symbol | Description |
|------|--------|-------------|
| Acid dissociation constant | $K_a$ | Measure of acid strength |
| Base dissociation constant | $K_b$ | Measure of base strength |
| Conjugate acid-base pair | - | Related by proton transfer |
| Fraction of dissociation | $\alpha$ | Ratio of dissociated form |
| Henderson-Hasselbalch equation | - | pH calculation for buffers |
| Buffer capacity | $\beta$ | Resistance to pH change |

---

### 2.1-1 pH for Different Solutions

#### The pH Scale

$$\text{pH} \approx -\log[\text{H}^+]$$

| pH Range | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|----------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|
| Nature | ← acidic | | | | | | | Neutral | | | | | | | alkaline → |

**Relationships at 25.0°C:**
- $\text{pH} + \text{pOH} = -\log(K_w) = 14.00$
- $\text{pOH} \approx -\log[\text{OH}^-]$
- Acidic: $[\text{H}^+] > [\text{OH}^-]$, pH < 7
- Basic: $[\text{H}^+] < [\text{OH}^-]$, pH > 7
- Neutral: pH = 7.00

**Note:** When measuring pH with a pH meter, we measure the negative log of H⁺ **activity**, not concentration.

---

### pH for Strong Acid/Base

| Concentration Range | Method |
|---------------------|--------|
| $[C] > 10^{-6}\ M$ | pH directly from formal concentration |
| $[C] \approx 10^{-7}\ M$ | Use systematic treatment of equilibrium |
| $[C] < 10^{-8}\ M$ | pH = 7 (neutral) |

---

### Systematic Treatment for Strong Acid/Base

**For strong acid (HA → H⁺ + A⁻):**

$$[\text{H}^+] = \frac{f + \sqrt{f^2 + 4K_w}}{2}$$

Where $f$ is the formal concentration of acid.

**For strong base:**

$$[\text{H}^+] = \frac{-f + \sqrt{f^2 + 4K_w}}{2}$$

**Example 1:** What is the pH of 0.10 M HBr solution?

Since HBr is a strong acid (Ka → ∞):
$$[\text{H}^+] = \frac{0.10 + \sqrt{0.10^2 + 4 \times 10^{-14}}}{2} = 0.10\ M$$
$$\text{pH} = -\log(0.10) = 1.00$$

**Example 2:** What is the pH of $1.0 \times 10^{-7}\ M$ HBr solution?
$$\text{pH} = 6.79$$

**Example 3:** What is the pH of $1.0 \times 10^{-8}\ M$ NaOH solution?

$$[\text{H}^+] = \frac{-1.0 \times 10^{-8} + \sqrt{(1.0 \times 10^{-8})^2 + 4 \times 10^{-14}}}{2} = 9.5 \times 10^{-8}\ M$$
$$\text{pH} = -\log(9.5 \times 10^{-8}) = 7.02$$

---

### Strong vs Weak Acids & Bases

| Strong Acids | Strong Bases |
|--------------|--------------|
| HCl | LiOH |
| HBr | NaOH |
| HI | KOH |
| HNO₃ | RbOH |
| HClO₄ | CsOH |
| H₂SO₄* | |

*H₂SO₄: only the first proton ionization is complete.

**Comparison:**
- **Strong acid:** Dissociated completely, Ka → ∞
- **Weak acid:** Partially dissociated, Ka is "small"

**Examples:**
- HBr: $K_a = 10^{5.8}$ (strong)
- Acetic acid: $K_a = 10^{-4.8}$ (weak)

---

### Weak Acids & Bases in H₂O

**For weak acid (HA ⇌ H⁺ + A⁻):**

$$x^2 + K_a \cdot x - K_a \cdot f = 0$$

$$[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4K_a f}}{2}$$

**Approximation** (when $f \cdot K_a > 10 K_w$):
$$[\text{H}^+] \approx \sqrt{f \cdot K_a}$$

**Example:** What is the pH of 0.1 M acetic acid solution?

$K_a$ of CH₃COOH = $1.75 \times 10^{-5}$

$$[\text{H}^+] = 1.32 \times 10^{-3}\ M$$
$$\text{pH} = 2.88$$
$$\alpha(\text{A}^-) = 1.32\%$$
$$\alpha(\text{HA}) = 98.68\%$$

**Fraction of dissociation:**
$$\alpha(\text{A}^-) = \frac{[\text{A}^-]}{[\text{A}^-] + [\text{HA}]} = \frac{x}{f}$$

---

### Summary: pH Calculation

#### Strong Acids
$$[\text{H}^+] = \frac{f + \sqrt{f^2 + 4K_w}}{2}$$

**Approximation:** If $f \geq 10^{-6}\ M$, then $[\text{H}^+] = f$

#### Weak Acids
$$[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4K_a f}}{2}$$

**Approximation:** If $f/K_a \geq 100$, then $[\text{H}^+] = \sqrt{f \cdot K_a}$

**Decision tree:**
1. Check concentration $f$ first
2. If $f \geq 10^{-6}\ M$: $[\text{H}^+] = f$ (strong acid full dissociation)
3. If $f/K_a \geq 100$: $[\text{H}^+] = \sqrt{f \cdot K_a}$ (weak acid)

---

### 2.1-2 Buffer Solutions

**Definition:** A solution that only slightly changes its pH upon addition of acid, base, or dilution.

**Preparation:**
- (a) Weak acid + its conjugate base
- (b) Weak base + its conjugate acid

**Function:** To control the pH at a certain range, which is important for chemical/biological reactions.

**Examples:**

| Weak Acid | + | Conjugate Base |
|-----------|---|----------------|
| HOCl | + | NaOCl |
| HA | + | A⁻ |

| Conjugate Acid | + | Weak Base |
|----------------|---|-----------|
| BH⁺ | + | B |
| C(CH₂OH)₃NH₃⁺Cl⁻ | + | C(CH₂OH)₃NH₂ |

---

### Conjugate Acids and Bases (Brønsted-Lowry)

**Acid:** Can donate a proton and become a base

**Base:** Can accept a proton to become an acid

**Example:**
$$\text{CH}_3\text{COOH} + \text{CH}_3\text{NH}_2 \rightleftharpoons \text{CH}_3\text{COO}^- + \text{CH}_3\text{NH}_3^+$$

| Acid | Base | Conjugate Base | Conjugate Acid |
|------|------|----------------|----------------|
| CH₃COOH | CH₃NH₂ | CH₃COO⁻ | CH₃NH₃⁺ |

---

### Henderson-Hasselbalch Equation

**Derivation:**
$$\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$$
$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$$

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

**Approximation:** $[\text{HA}]_0, [\text{A}^-]_0 \gg [\text{H}^+], [\text{OH}^-]$

**Key points:**
- pH depends on concentration **ratio**, not absolute concentrations
- pH doesn't change much by dilution

---

### Effect of [A⁻]/[HA] on pH

| [A⁻]/[HA] | pH |
|-----------|-----|
| 100:1 | pKa + 2 |
| 10:1 | pKa + 1 |
| 1:1 | pKa |
| 1:10 | pKa - 1 |
| 1:100 | pKa - 2 |

**When [A⁻] = [HA]: pH = pKa**

For every power of 10 change in the ratio [A⁻]/[HA], the pH changes only by one unit.

---

### Buffer Capacity (β)

**Definition:** A quantity that represents the resistance of pH upon addition of strong acid/base.

$$\beta = \frac{dC_b}{dpH} = -\frac{dC_a}{dpH}$$

Where $C_a$ and $C_b$ are the moles of strong acid/base per 1 L to produce a unit change in pH.

**Large β → More resistant pH change**

---

### Calculation of Buffer Capacity

**General equation:**
$$\beta = 2.3\left([\text{H}^+] + \frac{K_w}{[\text{H}^+]} + \frac{CK_a[\text{H}^+]}{(K_a + [\text{H}^+])^2}\right)$$

**Simplified for buffer (HA-A⁻):**
$$\beta_{\text{HA-A}^-} = 2.3 \cdot C \cdot \alpha_{\text{HA}} \cdot \alpha_{\text{A}^-}$$

Where:
- $\alpha_{\text{HA}} = \frac{[\text{HA}]}{[\text{HA}] + [\text{A}^-]} = \frac{[\text{H}^+]}{K_a + [\text{H}^+]}$
- $\alpha_{\text{A}^-} = \frac{[\text{A}^-]}{[\text{HA}] + [\text{A}^-]} = \frac{K_a}{K_a + [\text{H}^+]}$

---

### Buffer Capacity at Different pH

| pH | α(HA) | α(A⁻) | β |
|----|-------|-------|---|
| pH = pKa | 0.5 | 0.5 | β_max = 0.575C |
| pH = pKa - 1 | 0.9 | 0.1 | β = 0.36β_max = 0.207C |
| pH = pKa + 1 | 0.1 | 0.9 | β = 0.36β_max = 0.207C |
| pH = pKa - 2 | 0.99 | 0.01 | β = 0.04β_max = 0.023C |
| pH = pKa + 2 | 0.01 | 0.99 | β = 0.04β_max = 0.023C |

**Maximum buffer capacity:** When pH = pKa, α(HA) = α(A⁻) = 0.5

---

### Preparing Buffer at Maximum Capacity

**When [A⁻]₀ = [HA]₀:**
- pH = pKa
- Buffer capacity is at maximum

**Example with acetic acid:**
$$K_a = 1.75 \times 10^{-5}$$
$$\beta_{\text{max}} \approx 2.3 \times 0.025C = 0.0575C$$

---

### Summary: [H⁺] Calculation

| Type | Formula | Approximation |
|------|---------|---------------|
| **Strong acid** | $[\text{H}^+] = \frac{f + \sqrt{f^2 + 4K_w}}{2}$ | If $f \geq 10^{-6}\ M$: $[\text{H}^+] = f$ |
| **Weak acid** | $[\text{H}^+] = \frac{-K_a + \sqrt{K_a^2 + 4K_a f}}{2}$ | If $f/K_a \geq 100$: $[\text{H}^+] = \sqrt{fK_a}$ |
| **Buffer (HA-A⁻)** | $\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$ | - |

**Relationships:**
- $K_a \times K_b = K_w$
- $\alpha_{\text{HA}} \times \alpha_{\text{A}^-} = \frac{K_a[\text{H}^+]}{(K_a + [\text{H}^+])^2}$

---

### Example: Tris Buffer Calculation

**Tris** (hydroxymethylaminomethane) is a widely used buffer.
- pKa = 8.072 for conjugate acid (BH⁺)

**Problem:** What is the pH of 1.00 L solution with 12.43 g of tris (FM 121.135) plus 4.67 g of tris hydrochloride BH⁺ (FM 157.596)?

**Solution:**
$$[\text{B}] = \frac{12.43\ g/L}{121.135\ g/mol} = 0.1026\ M$$
$$[\text{BH}^+] = \frac{4.67\ g/L}{157.596\ g/mol} = 0.0296\ M$$

**Using Henderson-Hasselbalch equation:**
$$\text{pH} = 8.072 + \log\frac{0.1026}{0.0296} = 8.072 + \log(3.47) = 8.61$$

---

### Effect of Adding Acid to a Buffer

**Problem:** What is the pH after adding 12.0 mL of 1.00 M HCl to the 1 L tris buffer solution?

**Initial concentrations (after dilution):**
$$[\text{B}] = \frac{0.1026\ mol/L \times 1\ L}{1\ L + 12.0\ mL} = 0.1014\ M$$
$$[\text{BH}^+] = \frac{0.0296\ mol/L \times 1\ L}{1\ L + 12.0\ mL} = 0.0292\ M$$
$$[\text{HCl}] = \frac{1.00\ mol/L \times 12.0\ mL}{1\ L + 12.0\ mL} = 0.0119\ M$$

**Reaction:** B + H⁺ → BH⁺

| | B | H⁺ | BH⁺ |
|---|---|---|---|
| Initial | 0.1014 M | 0.0119 M | 0.0292 M |
| Final | 0.0895 M | 0 M | 0.0411 M |

**New pH:**
$$\text{pH} = 8.072 + \log\frac{0.0895}{0.0411} = 8.072 + \log(2.18) = 8.41$$

**ΔpH = -0.20** (small change demonstrates buffer action!)

---

### Why Buffers Resist pH Change

The strong acid (H⁺ from HCl) is consumed by B to produce BH⁺. As long as B is not used up, the ratio $\frac{[\text{A}^-]}{[\text{HA}]}$ does not change much.

**A buffer resists change in pH when a limited amount of strong acid or base is added.**

---

## Summary

- **Chemical equilibrium:** $K = \frac{[\text{C}]^c [\text{D}]^d}{[\text{A}]^a [\text{B}]^b}$
- **Water autoionization:** $K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}$ at 25°C
- **pH scale:** pH = -log[H⁺], neutral at 7.00
- **Strong acids/bases:** Full dissociation
- **Weak acids:** Partial dissociation, use $K_a$
- **Henderson-Hasselbalch:** $\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$
- **Buffer capacity:** Maximum at pH = pKa

---

*由 PDF to Markdown Converter 生成，并经 AI 润色校对*