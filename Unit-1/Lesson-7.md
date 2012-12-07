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
* 数学头文件 math.h
* 数学库函数 sqrt
* 强制类型转换 (int)
* 三层逻辑嵌套

### 课堂讨论
* 示例中的 j == tmp + 1 能否改为 j == tmp? 为什么?
* sqrt 是数学库中的函数，其他还有哪些也是数学库的函数？
* 如果没有数学库，这个程序应该如何编写效率才能最高?

### 课后练习
* 5*5 的棋盘，用户输入两个位置坐标，统计这两个位置之间有多少个子？(按从左向右的顺序数)  
0 0 0 0 0  
0 1 0 0 0  
0 0 0 1 0  
0 0 0 0 0  
0 0 0 0 0  以左图为例，(1, 1) 到 (2, 3) 之间有6个子。  
* 在上图所示的棋盘中，用户任意输入一个位置，放置国际象棋中的皇后，请输出所有皇后能够吃到的位置。
* 请打印杨辉三角形的前10行。打印输出格式可以参考 http://baike.baidu.com/view/298289.htm

### 名人名言
* Donald Ervin Knuth (现代计算机科学的鼻祖, 经典巨著《计算机程序设计的艺术》的作者)
	- “There’s always more to learn, and there are always better ways to do what you’ve done before.”

