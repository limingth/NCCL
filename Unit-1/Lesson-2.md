## Lesson 2 Let's say hello to world 打印输出
	#include <stdio.h>

	int main(void)
	{
		printf("hello, world!\n");
		return 0;
	}

* 语法知识点
	- 预处理 include
	- 头文件 stdio.h
	- 标准库函数 printf
	- 字符串
	- 转义字符 \n


### 扩展语法
* 链接脚本 link script
* 内置变量 
* 代码段和数据段 text/data
* 程序入口 _start
* 变量 variable
* 局部变量 local
* 全局变量 global
* 地址 address
* 变量的地址
* 函数的地址
* 强制类型转换

### 范例代码
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

###
	input: 無
	output:
	hello, everyone!
	__executable_start= 0x8048000
	_start = 0x8048450
	main = 0x8048530
	text segment end at 0x80486b8
	
	global at 0x804a01c
	data segment end at 0x804a020