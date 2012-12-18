## Lesson 20 Rectangular and Polar 直角坐标和极坐标互换
	#include <stdio.h>
	#include <math.h>

	enum coordinate_type { RECTANGULAR, POLAR };

	struct complex_struct {
		enum coordinate_type t;
		double a, b;
	};

	double rect_real_part(struct complex_struct z)
	{
		return z.a;
	}

	double rect_img_part(struct complex_struct z)
	{
		return z.b;
	}

	double rect_magnitude(struct complex_struct z)
	{
		return sqrt(z.a * z.a + z.b * z.b);
	}

	double rect_angle(struct complex_struct z)
	{
		double PI = acos(-1.0);

		if (z.a > 0)
			return atan(z.b / z.a);
		else
			return atan(z.b / z.a) + PI;
	}

	double pol_real_part(struct complex_struct z)
	{
		return z.a * cos(z.b);
	}

	double pol_img_part(struct complex_struct z)
	{
		return z.a * sin(z.b);
	}

	double pol_magnitude(struct complex_struct z)
	{
		return z.a;
	}

	double pol_angle(struct complex_struct z)
	{
		return z.b;
	}

	double (*real_part_tbl[])(struct complex_struct) = { rect_real_part, pol_real_part };
	double (*img_part_tbl[])(struct complex_struct) = { rect_img_part, pol_img_part };
	double (*magnitude_tbl[])(struct complex_struct) = { rect_magnitude, pol_magnitude };
	double (*angle_tbl[])(struct complex_struct) = { rect_angle, pol_angle };

	#define real_part(z) real_part_tbl[z.t](z)
	#define img_part(z) img_part_tbl[z.t](z)
	#define magnitude(z) magnitude_tbl[z.t](z)
	#define angle(z) angle_tbl[z.t](z)

	int main(void)
	{
		struct complex_struct t1 = { RECTANGULAR, 1.5, 1.0 };
		struct complex_struct t2 = { POLAR, 1.5, 1.0 };
		
		printf("real_part(t1) = %f\n", real_part(t1));
		printf("real_part(t2) = %f\n", real_part(t2));
		
		return 0;
	}

### 语法知识点
* 函数指针数组
* 枚举变量和结构体
* 数学库 (三角函数)
* 带参数的宏
	
### 课堂讨论
* 结构体作为参数在传递过程中，是传值，还是传址？ 
* 如何修改上述程序可以提高效率？
* 如果不用上面的方法声明函数指针数组，改用 typedef，应该如何修改？
	
### 课后练习
* 通过函数指针数组，可以实现命令解释器的命令自动匹配和执行，请实现这个想法。提示：采用结构体数组来实现。


