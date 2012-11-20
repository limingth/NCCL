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

### 课堂讨论
* 局部变量 num 如果没有初始化值，那么默认的值是不是0？
* scanf 函数的第2个参数，如果不用 & ，会有什么后果？
* 这个程序运行多次，打印出的 num 变量的地址是否相同？
* 如果要让用户连续输入多个数字直到0表示结束，程序应该怎么改？
* 想一想为什么 printf 打印不需要用 &num，而 scanf 需要 &

### 课后练习
* 比大小游戏，由计算机随机产生一个数字，用户输入数字来猜，计算机告诉用户是大还是小，直到最后用户猜对为止。

### 名人警句
* Ken Thompson 
	- 就我个人而言，如果局部变量太多，我倾向于拆分子程序。另一个办法是看代码行是否存在太多缩进，我几乎从来不看代码长度。 
