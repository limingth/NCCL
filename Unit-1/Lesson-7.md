## Lesson 7 Find a max prime number within 100 求100以内的最大素数
	#include <stdio.h>
	#include <math.h>

	int main(void)
	{
		int i, j;
		int max = 0;

		for (i = 1; i <= 100; i++)
		{
			int tmp;

			tmp = (int)sqrt(i);

			for (j = 2; j <= tmp; j++)
			{
				if (i % j == 0)
					break;
			}

			if (j == tmp + 1)
				max = i;
		}

		printf("max = %d\n", max);

		return 0;
	}

### 知识点
	- 数学头文件 math.h
	- 数学库函数 sqrt
	- 强制类型转换 (int)
	- 三层逻辑嵌套

### 课堂讨论
* 示例中的 j == tmp + 1 能否改为 j == tmp? 为什么?
* sqrt 是数学库中的函数，其他还有哪些也是数学库的函数？
* 如果没有数学库，这个程序应该如何编写效率才能最高?

### 课后练习
* 5*5 的棋盘，用户输入两个子，判断这两个子是否相邻？
