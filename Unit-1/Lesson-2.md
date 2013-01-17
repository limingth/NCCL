## Lesson 2 Lets say hello to world 打印输出
### 代码
	#include <stdio.h>

	int main(void)
	{
		printf("hello, world!\n");
		return 0;
	}
	
### 知识点
* 预处理符 #
* 头文件 .h
* 字符串常量 const string
* 转义字符 \\n

### 扩展练习
	#include <stdio.h>
	
	extern int __executable_start;
	extern int _start;
	
	extern char etext[];
	extern char edata[];
	
	int global = 100;
	
	int main(void)
	{
		printf("hello, everyone!\n");
	
		printf("__executable_start= %p\n", &__executable_start);
		printf("_start = %p\n", &_start);
		printf("main = %p\n", main);
		printf("text segment end at %p\n\n", etext);
	
		printf("global at %p\n", &global);
		printf("data segment end at %p\n", edata);
	
		return 0;
	}	

### 输出结果
	input: 無
	output:
	hello, everyone!
	__executable_start= 0x8048000
	_start = 0x8048450
	main = 0x8048530
	text segment end at 0x80486b8
	
	global at 0x804a01c
	data segment end at 0x804a020

### 知识点	
* 取地址符 &
* 格式化输出 %d %x %p %c %s %%
* 可变长度参数 ...
* 外部变量 extern 
* 强制类型转换 (int)

### 课堂讨论
* 包含头文件 stdio.h 就是包含我们所说的库函数吗？
* %x 和 %p 在打印变量地址时，有何区别？
* 如果printf的参数，多于或者少于 % 的个数，会怎么样？
* 如果不包含 stdio.h 头文件，则会出错吗？ 如何解决？
* 全局变量和局部变量没有初始化值，则打印的结果会怎样？
	
### 课后练习
* 修改代码，打印连续的3个全局变量和3个局部变量的地址，看看有何规律？
* 修改代码，通过强制类型转换，打印一下 &global + 1 的值是多少？
* 修改代码，看看如果把 global 定义为 char, short, float 类型会有什么不同？

