## Lesson 4 Judge a number odd or even 判断奇偶
	#include <stdio.h>

	int main(void)
	{
		int num;

		printf("please input a number: ");
		scanf("%d", &num);

		if (num % 2 == 0)
			printf("number %d is even\n", num);
		else	
			printf("number %d is odd\n", num);

		return 0;
	}

### 知识点
* 条件语句 if/else
* 格式化输入 scanf
* 关系运算符 ==
* 标准输入函数 scanf
* 取地址符 &
* 取模运算符 %
