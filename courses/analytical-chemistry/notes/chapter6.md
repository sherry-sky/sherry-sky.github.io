# 第 6 章 pH 与缓冲溶液

## 6.1 酸碱平衡

### 一元弱酸弱碱

**一元弱酸 HA**：

$$\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$$

酸解离常数：

$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}$$

**一元弱碱 B**：

$$\text{B} + \text{H}_2\text{O} \rightleftharpoons \text{BH}^+ + \text{OH}^-$$

碱解离常数：

$$K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$$

### 共轭酸碱对的 $K_a$ 与 $K_b$ 关系

$$K_a \times K_b = K_w$$

$$\text{p}K_a + \text{p}K_b = \text{p}K_w = 14\ (\text{25°C})$$

> 💡 **提示**：酸越强（$K_a$ 越大，$\text{p}K_a$ 越小），其共轭碱越弱。

### 多元酸碱

**二元弱酸 H₂A**：

一级解离：$\text{H}_2\text{A} \rightleftharpoons \text{H}^+ + \text{HA}^-$，$K_{a1}$

二级解离：$\text{HA}^- \rightleftharpoons \text{H}^+ + \text{A}^{2-}$，$K_{a2}$

通常 $K_{a1} \gg K_{a2}$，计算时可忽略二级解离。

## 6.2 pH 的计算

### 强酸强碱溶液

**强酸**（如 HCl）：

$$[\text{H}^+] = c_{\text{酸}}$$

**强碱**（如 NaOH）：

$$[\text{OH}^-] = c_{\text{碱}}$$

$$[\text{H}^+] = \frac{K_w}{[\text{OH}^-]}$$

### 一元弱酸溶液

**精确式**：

$$[\text{H}^+] = \sqrt{K_a \cdot c + K_w}$$

**近似式**（$c/K_a \geq 500$ 且 $c \cdot K_a \geq 20K_w$）：

$$[\text{H}^+] = \sqrt{K_a \cdot c}$$

$$\text{pH} = \frac{1}{2}(\text{p}K_a - \lg c)$$

### 一元弱碱溶液

**近似式**（$c/K_b \geq 500$）：

$$[\text{OH}^-] = \sqrt{K_b \cdot c}$$

$$\text{pOH} = \frac{1}{2}(\text{p}K_b - \lg c)$$

$$\text{pH} = 14 - \text{pOH}$$

### 两性物质溶液

**NaHCO₃ 型**（酸式盐）：

$$[\text{H}^+] = \sqrt{K_{a1} \cdot K_{a2}}$$

$$\text{pH} = \frac{1}{2}(\text{p}K_{a1} + \text{p}K_{a2})$$

> 💡 **提示**：两性物质的 pH 与浓度无关（近似）。

## 6.3 缓冲溶液

### 缓冲溶液的定义

**缓冲溶液**：能够抵抗外加少量酸、碱或稀释，而保持 pH 基本不变的溶液。

### 缓冲溶液的组成

| 类型 | 组成 | 举例 |
|------|------|------|
| 弱酸及其共轭碱 | HA + A⁻ | HAc + NaAc |
| 弱碱及其共轭酸 | B + BH⁺ | NH₃ + NH₄Cl |
| 两性物质 | H₂A⁻ | NaH₂PO₄ + Na₂HPO₄ |

### 缓冲溶液的 pH 计算

**Henderson-Hasselbalch 方程**：

$$\text{pH} = \text{p}K_a + \lg\frac{[\text{A}^-]}{[\text{HA}]}$$

或

$$\text{pH} = \text{p}K_a + \lg\frac{n_{\text{碱}}}{n_{\text{酸}}}$$

> 💡 **提示**：缓冲溶液的 pH 取决于 $\text{p}K_a$ 和酸碱比，与总体积无关。

### 缓冲容量

**缓冲容量**（Buffer Capacity）：衡量缓冲溶液缓冲能力的大小。

$$\beta = \frac{db}{d\text{pH}}$$

**影响缓冲容量的因素**：

1. **总浓度**：总浓度越大，缓冲容量越大
2. **酸碱比**：当 $[\text{HA}] = [\text{A}^-]$ 时，缓冲容量最大
3. **缓冲范围**：$\text{pH} = \text{p}K_a \pm 1$

| 缓冲对 | $\text{p}K_a$ | 缓冲范围 |
|--------|---------------|----------|
| HAc-NaAc | 4.74 | 3.74 ~ 5.74 |
| NaH₂PO₄-Na₂HPO₄ | 7.21 | 6.21 ~ 8.21 |
| NH₃-NH₄Cl | 9.25 | 8.25 ~ 10.25 |

### 缓冲溶液的选择

1. 选择 $\text{p}K_a$ 接近所需 pH 的缓冲对
2. 缓冲组分不应干扰测定
3. 缓冲容量应足够大
4. 缓冲组分应稳定、无毒、易得

## 6.4 酸碱指示剂

### 指示剂的变色原理

酸碱指示剂是有机弱酸或弱碱，其酸式和碱式具有不同颜色。

$$\text{HIn} \rightleftharpoons \text{H}^+ + \text{In}^-$$
$$\text{酸式色} \quad\quad\quad \text{碱式色}$$

### 指示剂的变色范围

$$\text{pH} = \text{p}K_{\text{HIn}} + \lg\frac{[\text{In}^-]}{[\text{HIn}]}$$

- 当 $[\text{In}^-]/[\text{HIn}] \geq 10$ 时，显示碱式色
- 当 $[\text{In}^-]/[\text{HIn}] \leq 0.1$ 时，显示酸式色
- **变色范围**：$\text{pH} = \text{p}K_{\text{HIn}} \pm 1$

### 常用指示剂

| 指示剂 | $\text{p}K_{\text{HIn}}$ | 变色范围 | 酸式色 | 碱式色 |
|--------|------------------|----------|--------|--------|
| 甲基橙 | 3.4 | 3.1 ~ 4.4 | 红 | 黄 |
| 甲基红 | 5.0 | 4.4 ~ 6.2 | 红 | 黄 |
| 酚酞 | 9.1 | 8.0 ~ 10.0 | 无色 | 红 |
| 百里酚酞 | 10.0 | 9.4 ~ 10.6 | 无色 | 蓝 |

## 6.5 分布分数

### 分布分数的定义

**分布分数**（$\delta$）：某型体的平衡浓度占总浓度的分数。

### 一元弱酸

$$\delta_{\text{HA}} = \frac{[\text{HA}]}{c} = \frac{[\text{H}^+]}{[\text{H}^+] + K_a}$$

$$\delta_{\text{A}^-} = \frac{[\text{A}^-]}{c} = \frac{K_a}{[\text{H}^+] + K_a}$$

### 二元弱酸

$$\delta_{\text{H}_2\text{A}} = \frac{[\text{H}^+]^2}{[\text{H}^+]^2 + K_{a1}[\text{H}^+] + K_{a1}K_{a2}}$$

$$\delta_{\text{HA}^-} = \frac{K_{a1}[\text{H}^+]}{[\text{H}^+]^2 + K_{a1}[\text{H}^+] + K_{a1}K_{a2}}$$

$$\delta_{\text{A}^{2-}} = \frac{K_{a1}K_{a2}}{[\text{H}^+]^2 + K_{a1}[\text{H}^+] + K_{a1}K_{a2}}$$

> 💡 **提示**：分布分数只与 pH 有关，与总浓度无关。

## 本章小结

1. 弱酸弱碱的 pH 计算需用解离常数
2. 缓冲溶液能抵抗少量酸碱而保持 pH 稳定
3. Henderson-Hasselbalch 方程用于计算缓冲溶液的 pH
4. 指示剂的变色范围约为 $\text{p}K_{\text{HIn}} \pm 1$
5. 分布分数描述各型体在不同 pH 下的相对含量

## 思考题

1. 计算 0.1 mol/L HAc 溶液的 pH（$K_a = 1.8 \times 10^{-5}$）
2. 如何配制 pH = 5.0 的缓冲溶液？
3. 为什么缓冲溶液的缓冲范围是 $\text{p}K_a \pm 1$？
4. 绘制 H₂CO₃ 的分布分数图，说明各 pH 区域的主要存在型体。