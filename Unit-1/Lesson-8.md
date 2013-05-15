## Lesson 8 Find 9 in number 1 to 100 1到100有多少个9
	/*
	 * main.c - find how many digit 9 from 1 to 100
	 *
	 * Copyright (C) AKAE - li ming <limingth@gmail.com>
	 * 
	 */
	#include <stdio.h>

	/*
	 * find - calculate how many digit in num
	 * @num:	the number we want to find
	 * @digit:	the digit we search in num
	 *
	 * Return value:  how many digit in this num
	 *
	 */
	int find(int num, int digit)
	{
		int counter = 0;	/* the result of how many digit in num */

		do {
			/* get the last digit of num */
			if (num % 10 == digit)
				counter++;

			/* get rid of the last digit */
			num = num / 10;
		} while (num != 0);

		return counter;
	}

	int main(void)
	{
		int begin = 1;		/* the begin number */
		int end = 100;		/* the end number */
		int i = 0;
		int sum = 0;		/* the result of sumary */

		/* calculate how many 9 in 1 to 100 */
		for (i = begin; i <= end; i++) {
			sum += find(i, 9);
		}

		printf("sum = %d \n", sum);

		return 0;
	}
	
### 知识点
* 函数 Function
* 形参和实参
* 函数返回值
* 逻辑分解
* 注释的写法

### 课堂讨论
* 示例中的 0, 100 为何要用 begin, end 来定义，直接写在 for 循环中可以吗？
* find 中的 do-while 改成 while 可以吗？
* 为什么不写一个函数，直接就能计算出1-100中的9的个数？

### 课后练习
* 求1-100以内最大的素数，要求用设计一个函数实现。
* 用户输入两个数字，按从个位对齐的方式，找出这2个数在相同位置处数字也相同的个数。  
例如：123 和 5173 这2个数字，位置相同数字也相同的个数是 2

### 名人名言
* Brian W.Kernighan (C Programming Language 一书合作者) 
	- ”I don't think that I have any special insight, but it has always seemed to me best to do something that you really enjoy doing. If you have a job that is fun, where you are eager to start in the morning and hate to quit in the evening, that's what you want.“
	- 我不认为自己有任何特别的远见，但是对于我来说做自己喜欢的事情似乎是最好的。如果你有一份有趣的工作，在早上你非常渴望开始做，并且在傍晚的时候你又不愿停下来，那这就是你想要的。
	
