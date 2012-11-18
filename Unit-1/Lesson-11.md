## Lesson 11 Calculate the distance between 2 point 求两个坐标点之间的距离
	#include <stdio.h>
	#include <math.h>

	struct point
	{
		int x;
		int y;
	};

	typedef struct point point_t;

	double calc_distance(point_t p1, point_t p2)
	{
		int dx = p1.x - p2.x;
		int dy = p1.y - p2.y;
		
		return sqrt(dx * dx + dy * dy);
	}

	int main(int argc, char * argv[])
	{
		double length;
		
		point_t p1;
		point_t p2 = {200, 100};
		
		p1.x = 100;
		p1.y = 200;
		
		length = calc_distance(p1, p2);
		
		printf("length = %f\n", length);

		return 0;
	}

### 语法知识点
* 结构体 struct
* 结构体传参数
* typedef 类型定义
	
### 课堂讨论
* 在 calc_distance 调用时传入的 p1 ，和在 函数实现中出现的 p1 是不是同一个 p1？
* 如果结构体的变量是一个字符数组，那么结构体的赋值，是否会进行一次字符串拷贝？

### 课后练习
* 给定一个结构体 point_t 的数组，求出这一组点中，离原点距离最远的那个点。


