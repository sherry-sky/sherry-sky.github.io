# 第 2 章 基础知识

## 2.1 溶液浓度的表示方法

### 物质的量浓度（Molarity）

**物质的量浓度**（简称浓度）用符号 `c` 或 `[ ]` 表示，单位为 mol/L 或 M。

$$c_B = \frac{n_B}{V} = \frac{m_B}{M_B \times V}$$

其中：
- $n_B$：溶质 B 的物质的量（mol）
- $V$：溶液体积（L）
- $m_B$：溶质 B 的质量（g）
- $M_B$：溶质 B 的摩尔质量（g/mol）

> 💡 **提示**：使用物质的量浓度时，必须指明基本单元。例如：$c(\text{H}_2\text{SO}_4) = 0.1\ \text{mol/L}$ 或 $c(\frac{1}{2}\text{H}_2\text{SO}_4) = 0.2\ \text{mol/L}$

### 质量浓度（Mass Concentration）

$$\rho_B = \frac{m_B}{V}$$

单位：g/L、mg/L、μg/L 等

### 质量分数（Mass Fraction）

$$w_B = \frac{m_B}{m_{\text{总}}}$$

- 无量纲，常用百分数表示
- 例如：98% 的浓硫酸

### 体积分数（Volume Fraction）

$$\phi_B = \frac{V_B}{V_{\text{总}}}$$

- 适用于液体混合物
- 例如：75% 的酒精溶液

### 摩尔分数（Mole Fraction）

$$x_B = \frac{n_B}{n_{\text{总}}}$$

- 无量纲
- 所有组分的摩尔分数之和等于 1

### 质量摩尔浓度（Molality）

$$b_B = \frac{n_B}{m_{\text{溶剂}}}$$

单位：mol/kg

> 💡 **注意**：质量摩尔浓度不随温度变化，而物质的量浓度会因溶液体积变化而改变。

## 2.2 化学平衡

### 化学平衡常数

对于可逆反应：$aA + bB \rightleftharpoons cC + dD$

**标准平衡常数**：

$$K^\ominus = \frac{(c_C/c^\ominus)^c \cdot (c_D/c^\ominus)^d}{(c_A/c^\ominus)^a \cdot (c_B/c^\ominus)^b}$$

其中 $c^\ominus = 1\ \text{mol/L}$ 为标准浓度

### 平衡常数的性质

1. **与温度有关**：温度不变，平衡常数不变
2. **与浓度无关**：改变反应物或生成物浓度，平衡常数不变
3. **与反应方向有关**：正逆反应的平衡常数互为倒数
4. **与计量系数有关**：计量系数加倍，平衡常数变为平方

### 多重平衡规则

若反应 3 = 反应 1 + 反应 2，则：

$$K_3 = K_1 \times K_2$$

若反应 3 = 反应 1 - 反应 2，则：

$$K_3 = \frac{K_1}{K_2}$$

## 2.3 活度与活度系数

### 活度（Activity）

**活度**是有效浓度，用符号 $a$ 表示：

$$a_B = \gamma_B \cdot \frac{c_B}{c^\ominus}$$

其中：
- $\gamma_B$：活度系数
- $c_B$：物质 B 的浓度

### 活度系数（Activity Coefficient）

- **稀溶液中**：$\gamma \approx 1$，活度≈浓度
- **浓溶液中**：$\gamma < 1$，活度<浓度
- **纯固体或纯液体**：$\gamma = 1$，$a = 1$

### 离子强度（Ionic Strength）

$$I = \frac{1}{2} \sum c_i z_i^2$$

其中：
- $c_i$：离子 i 的浓度
- $z_i$：离子 i 的电荷数

> 💡 **提示**：离子强度越大，离子间相互作用越强，活度系数越小。

### Debye-Hückel 公式

**极限公式**（适用于 $I < 0.01\ \text{mol/L}$）：

$$\lg \gamma_\pm = -0.509 z_+ z_- \sqrt{I}$$

**扩展公式**（适用于 $I < 0.1\ \text{mol/L}$）：

$$\lg \gamma_\pm = \frac{-0.509 z_+ z_- \sqrt{I}}{1 + B a \sqrt{I}}$$

## 2.4 酸碱质子理论

### Bronsted-Lowry 酸碱定义

- **酸**：能给出质子（H⁺）的物质
- **碱**：能接受质子的物质

### 共轭酸碱对

$$\text{酸} \rightleftharpoons \text{碱} + \text{H}^+$$

例如：
- $\text{HAc} \rightleftharpoons \text{Ac}^- + \text{H}^+$
- $\text{NH}_4^+ \rightleftharpoons \text{NH}_3 + \text{H}^+$
- $\text{H}_2\text{O} \rightleftharpoons \text{OH}^- + \text{H}^+$

> 💡 **提示**：共轭酸碱对之间只相差一个质子。酸越强，其共轭碱越弱；反之亦然。

### 酸碱反应的实质

酸碱反应的实质是**质子转移**：

$$\text{HAc} + \text{NH}_3 \rightleftharpoons \text{Ac}^- + \text{NH}_4^+$$

## 2.5 水的离子积与 pH

### 水的自递反应

$$\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-$$

### 水的离子积常数

$$K_w = [\text{H}^+][\text{OH}^-]$$

| 温度 (°C) | $K_w$ |
|-----------|-------|
| 0 | $0.11 \times 10^{-14}$ |
| 25 | $1.0 \times 10^{-14}$ |
| 50 | $5.5 \times 10^{-14}$ |
| 100 | $55 \times 10^{-14}$ |

### pH 的定义

$$\text{pH} = -\lg a_{\text{H}^+} \approx -\lg [\text{H}^+]$$

$$\text{pOH} = -\lg [\text{OH}^-]$$

$$\text{pH} + \text{pOH} = \text{p}K_w = 14\ (\text{25°C})$$

### 溶液酸碱性的判断

| 溶液性质 | [H⁺] | [OH⁻] | pH (25°C) |
|----------|------|-------|-----------|
| 中性 | $10^{-7}$ | $10^{-7}$ | 7 |
| 酸性 | $>10^{-7}$ | $<10^{-7}$ | <7 |
| 碱性 | $<10^{-7}$ | $>10^{-7}$ | >7 |

## 本章小结

1. 溶液浓度有多种表示方法，最常用的是物质的量浓度
2. 化学平衡常数只与温度有关
3. 活度是有效浓度，浓溶液中需考虑活度系数的影响
4. 酸碱质子理论认为酸碱反应是质子转移过程
5. pH 是衡量溶液酸碱性的重要参数

## 思考题

1. 物质的量浓度与质量摩尔浓度有何区别？
2. 为什么在浓溶液中需要用活度代替浓度？
3. 写出 H₂PO₄⁻ 的共轭酸和共轭碱。
4. 25°C 时，pH = 5 的溶液中 [OH⁻] 是多少？