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

### 知识点
* 局部变量
* 循环语句 while
* 关系运算符 <=, >=
* 自增加运算符 ++
* 比较表达式求值
	