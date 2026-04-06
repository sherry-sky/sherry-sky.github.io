# Tutorial 9 - 电位滴定习题解答

> 📚 分析化学 1 课程习题

---

## 背景知识点

<!-- BACKGROUND_START -->
- **电池表示法**：
  - `|` 表示相界面
  - `||` 表示盐桥
  - 阳极（氧化）在左侧，阴极（还原）在右侧
- **标准电池电位计算**：$E°_\text{cell} = E°_\text{阴} - E°_\text{阳}$
- **Nernst 方程**：$E = E° - \frac{0.05916}{n} \log Q$（25°C 时）
- **注意事项**：
  - 反应方向反转时，E° 符号也要反转
  - 半反应乘以系数时，E° 不乘以系数（电位是强度性质）
<!-- BACKGROUND_END -->

## 📝 题目部分

<!-- QUESTION_START id="T9-1" -->
**T9-1.** 给定以下电池表示：
$$\text{Fe(s)} \mid \text{Fe}^{2+} \parallel \text{Sn}^{2+} \mid \text{Sn(s)}$$

a. 写出阳极反应
b. 写出阴极反应
c. 写出总反应
<!-- QUESTION_END -->

<!-- QUESTION_START id="T9-2" -->
**T9-2.** 下列装置的标准电池电位 E°(cell) 是多少？

$$\text{Cd(s)} \mid \text{Cd}^{2+}(1.0\ \text{M}) \parallel \text{Ag}^+(1.0\ \text{M}) \mid \text{Ag(s)}$$

已知：
- E°(Ag⁺|Ag) = 0.799 V
- E°(Cd²⁺|Cd) = -0.402 V
<!-- QUESTION_END -->

<!-- QUESTION_START id="T9-3" -->
**T9-3.** 计算下图所示电池的电压，右半电池含 0.50M AgNO₃(aq)，左半电池含 0.010M Cd(NO₃)₂(aq)。

已知：
- E°(Ag⁺|Ag) = 0.799 V
- E°(Cd²⁺|Cd) = -0.402 V
<!-- QUESTION_END -->

---

## 💡 参考答案

<!-- ANSWER_START for="T9-1" -->
**T9-1.** 电池反应书写

**电池表示说明：**
- `|` 表示相界面
- `||` 表示盐桥
- 阳极（氧化）在左侧，阴极（还原）在右侧

对于 $\text{Fe(s)} \mid \text{Fe}^{2+} \parallel \text{Sn}^{2+} \mid \text{Sn(s)}$：

#### a. 阳极反应（氧化）：
$$\text{Fe(s)} \rightleftharpoons \text{Fe}^{2+} + 2\text{e}^-$$

#### b. 阴极反应（还原）：
$$\text{Sn}^{2+} + 2\text{e}^- \rightleftharpoons \text{Sn(s)}$$

#### c. 总反应：
$$\text{Fe(s)} + \text{Sn}^{2+} \rightleftharpoons \text{Fe}^{2+} + \text{Sn(s)}$$

**说明：** 不参与氧化还原反应的化合物在电池表示中可以省略。
<!-- ANSWER_END -->

<!-- ANSWER_START for="T9-2" -->
**T9-2.** 标准电池电位计算

**已知条件：**
- 阳极：Cd(s) | Cd²⁺(1.0 M)
- 阴极：Ag⁺(1.0 M) | Ag(s)
- E°(Ag⁺|Ag) = 0.799 V
- E°(Cd²⁺|Cd) = -0.402 V

#### 方法一：半反应法

**阳极（氧化）：**
$$\text{Cd(s)} \rightleftharpoons \text{Cd}^{2+} + 2\text{e}^-$$
$$E°_\text{阳} = -E°(\text{Cd}^{2+}|\text{Cd}) = -(-0.402\ \text{V}) = 0.402\ \text{V}$$

**阴极（还原）：**
$$2\text{Ag}^+ + 2\text{e}^- \rightleftharpoons 2\text{Ag(s)}$$
$$E°_\text{阴} = E°(\text{Ag}^+|\text{Ag}) = 0.799\ \text{V}$$

**总反应：**
$$\text{Cd(s)} + 2\text{Ag}^+ \rightleftharpoons \text{Cd}^{2+} + 2\text{Ag(s)}$$

**标准电池电位：**
$$E°_\text{cell} = E°_\text{阳} + E°_\text{阴} = 0.402\ \text{V} + 0.799\ \text{V} = \mathbf{1.201\ \text{V}}$$

#### 方法二：还原电位差法

电位计测量的是正极电极的还原电位减去负极电极的还原电位：

$$E°_\text{cell} = E_+ - E_- = E°(\text{Ag}^+|\text{Ag}) - E°(\text{Cd}^{2+}|\text{Cd})$$
$$E°_\text{cell} = 0.799\ \text{V} - (-0.402\ \text{V}) = \mathbf{1.201\ \text{V}}$$

**注意事项：**

1. **反应方向反转时，E° 符号也要反转**
   - 例如：E°(Cd/Cd²⁺) = -E°(Cd²⁺/Cd) = -(-0.402 V) = 0.402 V

2. **半反应乘以系数时，E° 不乘以系数**
   - 例如：2Ag⁺ + 2e⁻ ⇌ 2Ag(s) 的 E° 仍然是 0.799 V，不是 2×0.799 V
   - 这是因为电位是强度性质，与物质的量无关
<!-- ANSWER_END -->

<!-- ANSWER_START for="T9-3" -->
**T9-3.** 非标准状态电池电压计算

**已知条件：**
- 右半电池（阴极）：0.50M AgNO₃
- 左半电池（阳极）：0.010M Cd(NO₃)₂
- E°(Ag⁺|Ag) = 0.799 V
- E°(Cd²⁺|Cd) = -0.402 V

#### 方法一：分别计算两个半电池电位

**阴极（还原形式）：**
$$2\text{Ag}^+ + 2\text{e}^- \rightleftharpoons 2\text{Ag(s)} \quad E°_+ = 0.799\ \text{V}$$

使用 Nernst 方程：
$$E_+ = E°_+ - \frac{0.05916}{2} \log\frac{1}{[\text{Ag}^+]^2}$$
$$E_+ = 0.799 - 0.05916 \log\frac{1}{0.50} = 0.799 - 0.0178 = 0.781\ \text{V}$$

**阳极（还原形式）：**
$$\text{Cd}^{2+} + 2\text{e}^- \rightleftharpoons \text{Cd(s)} \quad E°_- = -0.402\ \text{V}$$

$$E_- = E°_- - \frac{0.05916}{2} \log\frac{1}{[\text{Cd}^{2+}]}$$
$$E_- = -0.402 - \frac{0.05916}{2} \log\frac{1}{0.010} = -0.402 - 0.059 = -0.461\ \text{V}$$

**电池电位：**
$$E_\text{cell} = E_+ - E_- = 0.781\ \text{V} - (-0.461\ \text{V}) = \mathbf{1.242\ \text{V}}$$

#### 方法二：阳极用氧化形式计算

**阳极（氧化形式）：**
$$\text{Cd(s)} \rightleftharpoons \text{Cd}^{2+} + 2\text{e}^- \quad E' = -(-0.402\ \text{V}) = 0.402\ \text{V}$$

$$E'' = E' - \frac{0.05916}{2} \log[\text{Cd}^{2+}] = 0.402 - \frac{0.05916}{2} \log(0.010)$$
$$E'' = 0.402 - (-0.059) = 0.461\ \text{V}$$

**电池电位：**
$$E_\text{cell} = E_+ + E'' = 0.781\ \text{V} + 0.461\ \text{V} = \mathbf{1.242\ \text{V}}$$

**注意：** 在公式 E = E₊ + E″ 中，不需要将 E₊ 乘以 2。

#### 方法三：使用总反应计算

**总反应：**
$$\text{Cd(s)} + 2\text{Ag}^+ \rightleftharpoons 2\text{Ag(s)} + \text{Cd}^{2+}$$

**标准电池电位：**
$$\Delta E° = E°(\text{Ag}^+|\text{Ag}) - E°(\text{Cd}^{2+}|\text{Cd}) = 0.799 - (-0.402) = 1.201\ \text{V}$$

**Nernst 方程：**
$$E = \Delta E° - \frac{0.05916}{n} \log Q$$

其中 n = 2（转移电子数），Q 为反应商：
$$Q = \frac{[\text{Cd}^{2+}]}{[\text{Ag}^+]^2}$$

$$E = 1.201 - \frac{0.05916}{2} \log\frac{0.010}{(0.50)^2}$$
$$E = 1.201 - 0.02958 \log(0.04) = 1.201 + 0.041 = \mathbf{1.242\ \text{V}}$$
<!-- ANSWER_END -->

<!-- PDF_LINKS_START -->
---

## 📎 原始 PDF 文件

- **题目 PDF**: [9T-Tutorial for Anal Chem1.pdf](Tutorials-PDF/9T-Tutorial for Anal Chem1.pdf)
- **答案 PDF**: [9T-Answer of Tutorial for Anal Chem1.pdf](Tutorials-PDF/9T-Answer of Tutorial for Anal Chem1.pdf)
<!-- PDF_LINKS_END -->