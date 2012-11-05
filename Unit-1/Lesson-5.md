## Lesson 5 Summarize all numbers from 1 to 100 从1加到100求和
	#include <stdio.h>

	int main(void)
	{
		int sum = 0;

		for (int i = 0; i <= 100; i++)
		{
			sum += i;
		}

		printf("sum = %d\n", sum);

		return 0;
	}

	
### 知识点
* 循环语句 for
* 自动变量 i
* 赋值运算符 +=