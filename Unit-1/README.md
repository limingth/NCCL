NCCL - New Concept C Language
=============================

please use <http://codepad.org/> to run/test these C programs!

# Unit One
## Lesson 1 [What is a simplest C program?](Unit-1/Lesson-1.md) 最简单的C程序
	int main(void)
	{
		return 0;
	}

	
## Lesson 2 [Let's say hello to world](Unit-1/Lesson-2.md) 打印输出
	#include <stdio.h>

	int main(void)
	{
		printf("hello, world!\n");
		return 0;
	}

	
## Lesson 3 [Count how many fingers do you have?](Unit-1/Lesson-3.md) 循环打印
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

	
## Lesson 4 [Judge a number odd or even](Unit-1/Lesson-4.md) 判断奇偶
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


## Lesson 5 [Summarize all numbers from 1 to 100](Unit-1/Lesson-5.md) 从1加到100求和
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


## Lesson 6 [Print 9*9 multiplication table](Unit-1/Lesson-6.md) 乘法表
	#include <stdio.h>

	int main(void)
	{
		int sum;
		int i, j;

		for (i = 1; i < 10; i++)
		{	
			for (j = 1; j <= i; j++)
			{
				printf("%d*%d=%d\t", j, i, i * j);
			}
			printf("\n");
		}

		return 0;
	}
	

## Lesson 7 [Find a max prime number within 100](Unit-1/Lesson-7.md) 求100以内的最大素数
	#include <stdio.h>
	#include <math.h>

	int main(void)
	{
		int sum;
		int i, j;
		int max = 0;
		int tmp;

		for (i = 1; i <= 100; i++)
		{
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


## Let's have a break here!

## Lesson 8 Josephus ring 约瑟夫环
	/* to be continued... */
	
## Lesson 9 Find how many 9 in number 1 to 100 1到100有多少个9
	/* to be continued... */

## Lesson 10 Calculate the distance between 2 point 求两个坐标点之间的距离
	/* to be continued... */

## Lesson 11 Does your machine use little-endian? 判断机器存储是否小尾端
	/* to be continued... */	

## Lesson 12 Sorry, your car is restricted today 对不起，你的车今天限行
	/* to be continued... */

## Lesson 13 Is there a way out? 判断地图上某点是否有出路
	/* to be continued... */
	
## Lesson 14 Convert a number to a string 整型转字符串
	/* to be continued... */
	
## Let's have a break here!

## Lesson 15 Count how many bit 1 in a number 统计一个数二进制表示中1的个数
	/* to be continued... */
	
## Lesson 16 Bit-Field 位域操作
	/* to be continued... */
	
## Lesson 17 My printf 我的printf实现
	/* to be continued... */

## Lesson 18 Find how many words in an artitle 统计一个文本中的单词个数
	/* to be continued... */

## Lesson 19 Shell command parser 命令解释器
	/* to be continued... */

## Lesson 20 Install IRQ handler 安装中断处理程序
	/* to be continued... */
	
## Lesson 21 RECTANGULAR and POLAR直角坐标和极坐标互换
	/* to be continued... */

## Let's have a break here! 
## The next 3 lessons are projects you should do it by yourself.

## Lesson 22 Guess what number in my hand 猜数游戏
	/* to be continued... */

## Lesson 23 Five-Chess game 五子棋
	/* to be continued... */

## Lesson 24 Hyperlink analysis 超链接分析器
	/* to be continued... */