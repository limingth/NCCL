
## Lesson 28 - math calculator (数学计算器实现)

### 课程任务
实现在 Bash 提示符下面的数学函数计算功能，要求调用不少于 3 种数学函数。
	
	double sqrt(double x); 开平方
	double pow(double x, double y); 计算以x为底数的y次幂 
	double sin(double x); 正弦

* 运行示例

		limingth@gmail ~/Github/NCCL.codes/Lesson-32$ ./bashclone 
		NCCL# math sin 1
		result = 0.841471
		NCCL# math sqrt 81
		result = 9.000000
		NCCL# 

### 参考资料
* http://ganquan.info/standard-c/
* http://wiki.ubuntu.org.cn/跟我一起写Makefile:使用函数

### 重要知识点
* 数学函数接口 sin, sqrt, pow, modf，fmod 等
* 字符串和数值类型的转换 atoi, atof, strtol, strtof 等

#### 常用 API

* 转换函数

		atof(); 将字符串转换成浮点型数
		atoi(); 将字符串转换成整型数
		atol(); 将字符串转换成长整型数
		strtod(); 将字符串转换成浮点数
		strtol(); 将字符串转换成长整型数
		strtoul(); 将字符串转换成无符号长整型数

* 三角函数

		double sin(double x); 正弦
		double cos(double x); 余弦
		double tan(double x); 正切
		*cot 三角函数，可以使用tan(PI/2-x)来实现。

* 反三角函数

		double asin(double x); 结果介于[-PI/2, PI/2] 
		double acos(double x); 结果介于[0, PI]
		double atan(double x); 反正切(主值), 结果介于[-PI/2, PI/2] 
		double atan2(double y,double); 反正切(整圆值), 结果介于[-PI, PI]

* 双曲三角函数

		double sinh(double x); 计算双曲正弦
		double cosh(double x); 计算双曲余弦
		double tanh(double x); 计算双曲正切

* 指数与对数
		double exp(double x); 求取自然数e的幂
		double sqrt(double x); 开平方
		double log(double x); 以e为底的对数
		double log10(double x); 以10为底的对数
		double pow(double x, double y); 计算以x为底数的y次幂 
		float powf(float x, float y); 与pow一致，输入与输出皆为浮点数

* 取整
		double ceil(double); 取上整
		double floor(double); 取下整

* 标准化浮点数
	double frexp(double f, int *p); 标准化浮点数, f = x * 2^p, 已知f求x, p ( x介于[0.5, 1] ) 
	double ldexp(double x, int p); 与frexp相反, 已知x, p求f

* 取整与取余
		double modf(double, double*); 将参数的整数部分通过指针回传, 返回小数部分 
		double fmod(double, double); 返回两参数相除的余数
