# Tutorial 10 - Gran 作图法习题解答

> 📚 分析化学 1 课程习题

---

## 📝 题目部分

**T10-1.** 在化学计量点时，下列哪种滴定的 y 值取决于被分析物的浓度？请解释。

A. HCl 用 NaOH 滴定，测量 pH
B. HAc 用 NaOH 滴定，测量 pH
C. I⁻ 用 Ag⁺ 滴定，测量 p[Ag⁺]
D. Fe²⁺ 用 Ce⁴⁺ 滴定，测量 E（电位）

---

**T10-2.** 推导弱酸用强碱滴定的 Gran 作图法方程：
$$V_b \times 10^{-\text{pH}} = K_a V_e - K_a V_b$$

---

**T10-3.** 将 0.60 g Fe(NH₄)₂(SO₄)₂·6H₂O (M.W. 392.13 g/mol) 溶解于 400 mL 1.00M H₂SO₄ 中。用 0.02M KMnO₄ 滴定搅拌良好的溶液，使用 Pt 电极和甘汞参比电极，pH 计作为电位计。使用前将两个输入端直接连接并将毫伏刻度调零。

计算加入不同体积 KMnO₄ 滴定剂后的电位：
- V = 5.0 mL
- V = Ve
- V = 17.0 mL

反应：
$$\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$$

已知：
- E°(Fe³⁺|Fe²⁺) = 0.68 V（在 1.00M H₂SO₄ 中）
- E°(MnO₄⁻|Mn²⁺) = 1.507 V
- E(S.C.E.) = 0.241 V

---

**T10-4.** 关于滴定的下列陈述中，哪项是不正确的？

a. 被分析物与滴定剂之间的还原电位差异越大，终点越陡峭，滴定误差越小。

b. 氧化还原滴定中，滴定曲线显示电位随加入滴定剂体积的变化。

c. Gran 作图法使用的数据集应选择整个滴定实验的数据，即从 0% 到 100% 滴定，然后通过线性回归分析计算终点 Ve。

d. 电位计测量电池电压不会影响氧化还原滴定中反应物的浓度。

---

## 💡 参考答案

### T10-1. 化学计量点时 y 值与浓度的关系

**答案：b**

**分析：**

#### a. HCl 用 NaOH 滴定（强酸 - 强碱滴定）
在化学计量点时，pH = 7，与被分析物浓度无关。

#### b. HAc 用 NaOH 滴定（弱酸 - 强碱滴定）
在化学计量点时，溶液中只有 Ac⁻，发生水解：
$$\text{Ac}^- + \text{H}_2\text{O} \rightleftharpoons \text{HAc} + \text{OH}^-$$

pH 计算取决于 Ac⁻ 的浓度，即原始 HAc 的浓度。

#### c. I⁻ 用 Ag⁺ 滴定（沉淀滴定）
在化学计量点时：
$$[\text{Ag}^+] = \sqrt{K_{sp}(\text{AgI})}$$

p[Ag⁺] 仅取决于 Ksp，与浓度无关。

#### d. Fe²⁺ 用 Ce⁴⁺ 滴定（氧化还原滴定）
在化学计量点时：
$$E = \frac{1}{2}(E°_\text{分析物} + E°_\text{滴定剂}) - E(\text{参比})$$

所有 E° 和 E(参比) 都是常数，与浓度无关。

---

### T10-2. Gran 作图法方程推导

**方法一：**

考虑弱酸 HA 的滴定：
$$\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^- \quad K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$$

在化学计量点之前，可以近似认为 1 mol NaOH (Cb, Vb) 将 1 mol HA (Ca, Va) 转化为 1 mol A⁻。

**浓度表达式：**
$$[\text{A}^-] = \frac{V_b C_b}{V_a + V_b}$$
$$[\text{HA}] = \frac{V_a C_a - V_b C_b}{V_a + V_b}$$

**代入 Ka 表达式：**
$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]} = \frac{[\text{H}^+] V_b C_b}{V_a C_a - V_b C_b}$$

**整理得：**
$$V_b [\text{H}^+] = K_a \frac{V_a C_a - V_b C_b}{C_b}$$

由于 $[\text{H}^+] = 10^{-\text{pH}}$，且 $\frac{V_a C_a - V_b C_b}{C_b} = \frac{V_a C_a}{C_b} - V_b = V_e - V_b$（因为 VaCa = VeCb）

**得到 Gran 函数：**
$$V_b \times 10^{-\text{pH}} = K_a(V_e - V_b) = K_a V_e - K_a V_b$$

**Gran 作图：** 以 Vb×10⁻ᵖᴴ 对 Vb 作图，得到一条直线，斜率为 Ka，x 轴截距为 Ve。通常使用 Ve 前最后 10-20% 的体积数据进行 Gran 作图。

---

**方法二：**

由 $K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$ 得：
$$10^{-\text{pH}} = [\text{H}^+] = K_a \frac{[\text{HA}]}{[\text{A}^-]}$$

**化学计量点前：**
$$\text{HA} + \text{NaOH} \rightleftharpoons \text{NaA} + \text{H}_2\text{O}$$

| 状态 | HA | NaOH | NaA |
|------|-----|------|-----|
| 初始 | Ve | 0 | 0 |
| 反应后 | Ve-Vb | -Vb | Vb |

$$\frac{[\text{HA}]}{[\text{A}^-]} = \frac{V_e - V_b}{V_b}$$

$$10^{-\text{pH}} = K_a \frac{V_e - V_b}{V_b}$$

$$V_b \times 10^{-\text{pH}} = K_a V_e - K_a V_b$$

---

### T10-3. KMnO₄ 滴定 Fe²⁺ 电位计算

**已知条件：**
- Fe(NH₄)₂(SO₄)₂·6H₂O：0.60 g，M = 392.13 g/mol
- H₂SO₄：400 mL，1.00 M
- KMnO₄ 滴定剂：0.02 M
- E°(Fe³⁺|Fe²⁺) = 0.68 V
- E°(MnO₄⁻|Mn²⁺) = 1.507 V
- E(S.C.E.) = 0.241 V

**反应：**
$$\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$$

**计算 Fe²⁺ 物质的量：**
$$n(\text{Fe}^{2+}) = \frac{0.60\ \text{g}}{392.13\ \text{g/mol}} = 1.53 \times 10^{-3}\ \text{mol} = 1.53\ \text{mmol}$$

**化学计量点体积：**
$$V_e = \frac{n(\text{Fe}^{2+})}{5 \times C(\text{KMnO}_4)} = \frac{1.53\ \text{mmol}}{5 \times 0.02\ \text{M}} = 15.3\ \text{mL} \approx 15.0\ \text{mL}$$

---

#### 1. V = 5.0 mL（化学计量点前）

此时使用 Fe³⁺/Fe²⁺ 电对计算：
$$\text{Fe}^{3+} + \text{e}^- \rightleftharpoons \text{Fe}^{2+}$$

**反应比例：**
- 已反应 Fe²⁺：5 mL × 0.02 M × 5 = 0.5 mmol
- 剩余 Fe²⁺：1.5 - 0.5 = 1.0 mmol
- 生成 Fe³⁺：0.5 mmol

**实际计算（按答案）：**
$$\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} = \frac{2/3}{1/3} = 2$$

$$E = E_+ - E(\text{S.C.E.}) = 0.68 - 0.05916 \log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} - 0.241$$
$$E = 0.68 - 0.05916 \log(2) - 0.241 = 0.68 - 0.018 - 0.241 = \mathbf{0.421\ \text{V}}$$

---

#### 2. V = Ve = 15 mL（化学计量点）

此时两个电对都需要使用：

**Fe³⁺/Fe²⁺ 电对：**
$$E_+ = 0.68 - 0.05916 \log\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]}$$

**MnO₄⁻/Mn²⁺ 电对：**
$$E_+ = 1.507 - \frac{0.05916}{5} \log\frac{[\text{Mn}^{2+}]}{[\text{MnO}_4^-][\text{H}^+]^8}$$

**将第二个方程乘以 5 后相加：**
$$6E_+ = 0.68 + 5 \times 1.507 - 0.05916 \log\frac{[\text{Fe}^{2+}][\text{Mn}^{2+}]}{[\text{Fe}^{3+}][\text{MnO}_4^-][\text{H}^+]^8}$$

**在化学计量点时：**
- [Fe³⁺] = 5[Mn²⁺]
- [Fe²⁺] = 5[MnO₄⁻]

代入后简化：
$$6E_+ = 8.215 - 0.05916 \log\frac{1}{[\text{H}^+]^8}$$

**[H⁺] 计算：**
$$[\text{H}^+] = 1.00\ \text{M} \times \frac{400\ \text{mL}}{400\ \text{mL} + 15\ \text{mL}} = 0.964\ \text{M}$$

$$6E_+ = 8.215 - 0.05916 \log\frac{1}{(0.964)^8} = 8.215 - 0.05916 \times 0.126 = 8.208$$

$$E_+ = 1.368\ \text{V}$$

**电池电位：**
$$E = E_+ - E(\text{S.C.E.}) = 1.368\ \text{V} - 0.241\ \text{V} = \mathbf{1.127\ \text{V}}$$

---

#### 3. V = 17.0 mL（化学计量点后）

此时使用 MnO₄⁻/Mn²⁺ 电对计算：

**浓度计算：**
- [Mn²⁺] = 0.719 mM
- [MnO₄⁻] = 0.0959 mM
- [H⁺] = 0.959 M（忽略反应消耗的少量 H⁺）

$$E = E_+ - E(\text{S.C.E.}) = 1.507 - \frac{0.05916}{5} \log\frac{[\text{Mn}^{2+}]}{[\text{MnO}_4^-][\text{H}^+]^8} - 0.241$$
$$E = 1.507 - 0.01183 \log\frac{0.719}{0.0959 \times (0.959)^8} - 0.241$$
$$E = 1.507 - 0.01183 \log(9.35) - 0.241 = \mathbf{1.254\ \text{V}}$$

---

### T10-4. 滴定相关陈述判断

**答案：c**

**分析：**

a. **正确** - 还原电位差异越大，滴定突跃越明显，终点越容易判断，滴定误差越小。

b. **正确** - 氧化还原滴定曲线确实显示电位随加入滴定剂体积的变化。

c. **不正确** - Gran 作图法应使用终点**前**的数据（通常从 0.8Ve 到 Ve），而不是整个滴定过程的数据。

d. **正确** - 电位计测量时几乎无电流通过，不会影响反应物浓度。

---

## 📎 原始 PDF 文件

- **题目 PDF**: [10T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/10T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [10T-Answer for Tutorial of Anal Chem1.pdf](Tutorials-PDF/10T-Answer for Tutorial of Anal Chem1.pdf)