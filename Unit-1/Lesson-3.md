## Lesson 3 Count how many fingers do you have? 循环打印
	#include <stdio.h>

	int main(void)
	{
		int counter;

		printf("hello, NCCL!\n");
		
		counter =  0;
		while (counter <= 10)
		{
			printf("counter = %d\n", counter);
			counter++;
		}

		return 0;
	}

* 语法知识点
	- 局部变量
	- 定义和声明
	- 循环语句 while
	- 比较表达式 <=
	- 自增运算符 ++
	- 格式化输出 %d
