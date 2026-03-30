# Homework 5 - 课后作业

> 📚 分析化学 1 课程作业

---

## 📋 作业题目


<!-- 第 1 页 -->

Analytical chemistry 1 for engineers  
 
Homework 5 – Linear regression 
姓名：                 Name:                       ID number:                       Major:     
H5-1. The sulfate ion concentration in natural water can be determined by measuring 
the turbidity that results when an excess of BaCl2 is added to a measured quantity of 
the sample. A turbidimeter, the instrument used for this analysis, is calibrated with a 
series of standard Na2SO4 solutions. The following data were obtained in the 
calibration. Assume that a linear relationship exists between the instrument reading 
and the concentration.  
a. Calculate the slope and intercept for the best straight line among these points 
by use of least squares method. 
b. Obtain the concentration of sulfate in the unknown sample yielding a 
turbidimeter reading of 2.84. 
 
SO42- (mg/L) 
Turbidimeter reading 
0.00 
0.06 
5.00 
1.48 
10.00 
2.28 
15.00 
3.98 
20.00 
4.61 
 
 
H5-2. A 10.00 g sample containing an analyte is transferred to a 250 mL volumetric 
flask and diluted to the volume using water. When a 10.00 mL aliquot of the resulting 
solution is diluted to 25.00 mL and it gives a signal of 0.235 (arbitrary unit). A second 
10.00 mL aliquot of the solution is spiked with 10.00 mL of a 1.00 ppm standard 


<!-- 第 2 页 -->

solution of analyte and diluted to 25.00 mL. the signal for the spiked sample is 0.502. 
Calculate how much the weight percent of analyte in the original sample?  
 
H5-3. To determine the concentration of analyte in a sample, a standard addition was 
performed. A 5.00 mL portion of sample was analyzed and then successive 0.10 mL 
spiked of a 600.0 mg/L standard of the analyte were added. The following table shows 
the results of each spike. 
Vs (mL) 
0.00 
0.10 
0.20 
0.30 
IX+S (Arbitrary unit) 
0.119 
0.231 
0.339 
0.442 
 
Construct an appropriate standard addition calibration curve and use a linear 
regression analysis to determine the concentration of analyte in the original sample. 
 
H5-4. An experiment was carried out to determine the concentration of sodium ion 
(Na+) in a blood sample. Five calibration bottles with 20 mL of the blood sample were 
added varying amounts of standard NaCl with the concentration of 5.640 M. Then, 
water was added to obtain in each calibrating bottle with 100 mL solutions. The 
atomic emission measurement of each solution yielded the signals listed in the table. 
The question is how much the concentration of the sodium in the blood? 
Added standard 
solution (mL) 
Final volume (mL) 
Signal (mV) 
0 
100 
3.13 
1 
100 
5.40 
2 
100 
7.89 
3 
100 
10.30 
4 
100 
12.48 
 


---

## ✅ 参考答案


<!-- 第 1 页 -->

Analytical chemistry 1 for engineers  
 
Homework 5 – Linear regression 
姓名：                 Name:                       ID number:                       Major:     
H5-1. The sulfate ion concentration in natural water can be determined by measuring 
the turbidity that results when an excess of BaCl2 is added to a measured quantity of 
the sample. A turbidimeter, the instrument used for this analysis, is calibrated with a 
series of standard Na2SO4 solutions. The following data were obtained in the 
calibration. Assume that a linear relationship exists between the instrument reading 
and the concentration.  
a. Calculate the slope and intercept for the best straight line among these points 
by use of least squares method. 
b. Obtain the concentration of sulfate in the unknown sample yielding a 
turbidimeter reading of 2.84. 
 
SO42- (mg/L) 
Turbidimeter reading 
0.00 
0.06 
5.00 
1.48 
10.00 
2.28 
15.00 
3.98 
20.00 
4.61 
 
a. Calculate the slope and intercept for the best straight line using the data above: 
We calculate the sums we need firstly:  
∑𝐶𝑖= 0.00 + 5.00 + 10.00 + 15.00 + 20.00 = 50.00 
∑𝑅𝑖 = 0.06 + 1.48 + 2.28 + 3.98 + 4.61 = 12.41 
∑𝐶𝑖𝑅𝑖 = 0.00 + 7.40 + 22.80 + 59.70 + 92.20 = 182.10 
∑(𝐶𝑖)2= 0.00 + 25.0 + 100.0 + 225.0 + 400.0 =750.0 


<!-- 第 2 页 -->

For the slope and intercept for the best straight line, we can use the following formula 
to calculate k and c: 
 
k = 
5  182.10 − 50.00  12.41
5  750.0 − 50.002
 = 0.232 
 
c = 
750.0  12.41 − 50.00  182.10
5  750.0 − 50.002
 = 0.162 
 
b. Find the concentration of sulfate yielding a turbidimeter reading of 2.84, 
Now we have determined the mathematical relationship between the R and C, we 
can use it to calculate the sulfate concentration of the sample at a given turbidimeter 
reading, 
y = kx + c  ⟹ R = 0.232C + 0.162      ⟹  R = 2.84     
C = 11.54 mg/L (keep the same decimal places as the Ci in the table) 
 
* You also can get the equation from Spreadsheets in Excel 
 
 
H5-2. A 10.00 g sample containing an analyte is transferred to a 250 mL volumetric 
flask and diluted to the volume using water. When a 10.00 mL aliquot of the resulting 
solution is diluted to 25.00 mL and it gives a signal of 0.235 (arbitrary unit). A second 
10.00 mL aliquot of the solution is spiked with 10.00 mL of a 1.00 ppm standard 
solution of analyte and diluted to 25.00 mL. the signal for the spiked sample is 0.502. 
Calculate how much the weight percent of analyte in the original sample?  


<!-- 第 3 页 -->

[X]f = [𝑋]𝑖
𝑉𝑜
𝑉= [𝑋]𝑖
10.00 𝑚𝐿
25.00 𝑚𝐿 
            = 0.40000 [Ni2+]𝑖 
[S]f = [𝑆]𝑖
𝑉𝑠
𝑉= 1.00
10.00 𝑚𝐿
25.00 𝑚𝐿 
= 0.4000 ppm 
Here, for the signal of 0.235, it comes from the dilution solution of [X]f. So, the 
formula should be 
[𝑋]𝑓
[𝑋]𝑓+ [𝑆]𝑓
=
𝐼[𝑋]
𝐼[𝑋+𝑆)
 
0.40000[𝑋]𝑖
0.40000 [𝑋]𝑖+ 0. 4000 ppm = 0.235 
0.502 
[𝑋]𝑖= 0.8801 ppm 
So, the mass of analyte in the sample is  
0.8801 ppm  250 mL = 0.8801 mg/L  0.250 L  
= 0.2200 mg 
As a result, the weight percent of analyte in the original sample is  
w% = 
0.2200 mg
10.00 g 100% = 2.2010-3 % 
 
H5-3. To determine the concentration of analyte in a sample, a standard addition was 
performed. A 5.00 mL portion of sample was analyzed and then successive 0.10 mL 
spiked of a 600.0 mg/L standard of the analyte were added. The following table shows 
the results of each spike. 
Vs (mL) 
0.00 
0.10 
0.20 
0.30 
IX+S (Arbitrary unit) 
0.119 
0.231 
0.339 
0.442 
 
Construct an appropriate standard addition calibration curve and use a linear 
regression analysis to determine the concentration of analyte in the original sample. 
 


<!-- 第 4 页 -->

Let’s write down all the given data: Vo = 5.00 mL; [S]i = 600.0 mg/L 
First, we need to calculate the values of X-Y. For successive standard addition to a 
single solution of unknown, the value of Y is 𝑰(𝑿+𝑺)(
𝑽
𝑽𝒐)and X is [𝑺]𝒊(
𝑽𝒔
𝑽𝒐). The results 
are listed as below. 
 
 
[𝑺]𝒊(
𝑽𝒔
𝑽𝒐)]/ppm 
Signal
V
VO 
0 
0.119 
12 
0.236 
24 
0.352 
36 
0.468 
 
y = 0.0097 x + 0.1193 with R² = 1 
Set y = 0, the x-intercept is 12.299 mg/L 
For a series of standard additions to a single solution of unknown, the X-
intercept is the original concentration of analyte in unknown. 
So, the analyte in the sample is 12.30 mg/L. (Keep the significant figures as the 
standard of the analyte of 600.0 mg/L) 
Vs 
(mL) 
[𝑺]𝒊(
𝑽𝒔
𝑽𝒐)] 
ppm 
I(X+S) 
(arbitrary units) 
Signal
V
VO 
(arbitrary units) 
0.00 
0.00 
0.119 
0.119
5.00 mL
5.00 𝑚𝐿 
0.10 
600
0.10
5.00 𝑚𝐿 
0.231 
0.231
(5.00+0.10) mL
5.00 𝑚𝐿
 
0.20 
600
0.20
5.00 𝑚𝐿 
0.339 
0.339
(5.00+0.20) mL
5.00 𝑚𝐿
 
0.30 
600
0.30
5.00 𝑚𝐿 
0.442 
0.442
(5.00+0.30) mL
5.00 𝑚𝐿
 


<!-- 第 5 页 -->

H5-4. An experiment was carried out to determine the concentration of sodium ion 
(Na+) in a blood sample. Five calibration bottles with 20 mL of the blood sample were 
added varying amounts of standard NaCl with the concentration of 5.640 M. Then, 
water was added to obtain in each calibrating bottle with 100 mL solutions. The 
atomic emission measurement of each solution yielded the signals listed in the table. 
The question is how much the concentration of the sodium in the blood? 
Added standard 
solution (mL) 
Final volume (mL) 
Signal (mV) 
0 
100 
3.13 
1 
100 
5.40 
2 
100 
7.89 
3 
100 
10.30 
4 
100 
12.48 
 
For it is about multiple solution with constant V, we use the formula of   
 
The X is [S]f which means the final concentration of the adding standard (5.640 M of 
NaCl) in the calibrating flask ([S]f = ([S]iVs/V) and the Y is I(X+S).  
Importing the data in the table into Excel, you can get the fitting equation and the 
squared correlation coefficient (R2). 
Y-Signal I(X+S) 
mV 
Final Volume 
mL 
Added standard 
solution mL 
X-[s]f 
M 
3.13 
100 
0 
0 
5.40 
100 
1 
1
1005.640=0.0564 
7.89 
100 
2 
2
1005.640=0.1128 
10.30 
100 
3 
3
1005.640=0.1692 
12.48 
100 
4 
4
1005.640=0.2256 


<!-- 第 6 页 -->

 
The equation determined by least squares method is: 
Y = 41.844 X + 3.12 
so, the X-intercept (when Y=0) is, 3.12/41.844= 0.07456 M 
As we known, for the multiple solution with constant V, the X-intercept is [Na+]f, which 
means the final concentration of sodium ions in the in the calibrating flask (100 mL) is 
0.07456 M. 
According to the dilution factor:  [X]f = [𝑋]𝑖  
𝑉𝑜
𝑉 
So, the concentration of sodium ions in the blood is 
[Na+]𝑖 = 
𝑉
𝑉𝑜 [Na+]f = 
100 𝑚𝐿
20 𝑚𝐿  0.077456 M = 0.3728 M  
(Keep the significant figures as the standard of NaCl 5.640 M) 
 


---

## 📎 原始 PDF 文件

- **题目 PDF**: [5H-Homework.pdf](HW-PDF/5H-Homework.pdf)
- **答案 PDF**: [5H-Answer of Homework for Analy Chem1.pdf](HW-PDF/5H-Answer of Homework for Analy Chem1.pdf)