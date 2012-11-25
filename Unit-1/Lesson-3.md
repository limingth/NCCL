## Lesson 3 Count how many fingers do you have? 循环打印
	#include <stdio.h>
	
	int main(void)
	{
		int counter;
	
		printf("hello, NCCL!\n");
		
		counter =  0;
		while (counter < 10)
		{
			counter++;
			printf("counter = %d\n", counter);
		}
	
		return 0;
	}

### do-while 用法
	#include <stdio.h>
	
	int main(void)
	{
		int counter;
	
		printf("hello, NCCL!\n");
		
		counter = 0;
		do 
		{
			counter++;
			printf("counter = %d\n", counter);
		} while (counter < 10);
	
		return 0;
	}

### 第3种写法
	#include <stdio.h>
	
	int main(void)
	{
		int counter;
	
		printf("hello, NCCL!\n");
		
		counter = 1;
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


### 课堂讨论
* 第1种和第2种写法，都能得到正确结果，哪种更好？为什么？
* 第3种写法，运行也正确，为什么说它是不好的写法？
* 把 counter++ 写到 printf 语句中，是否是好的写法？
* counter 的初值为什么不在定义时就赋值，写在循环外面有什么好处？
* 在 while 循环里面，可以定义变量吗？ 变量名字可以重名吗？

### 课后练习
* 将这个程序改为倒着从10数到0，应该怎么改最好？
* 新增一个变量 sum，对从1加到10进行求和，打印出最后结果。
* 使用 do-while 结构，实现上面2个要求。
* __打印一个数字的个位，十位，百位... 直到最高位。__

### 名人名言
* Ken Thompson  (Unix 之父)
	- When in doubt, use brute force. 
