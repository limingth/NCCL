## Lesson 2 Let's say hello to world 打印输出
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
* 转义字符 \n \r \t \b 

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

#### 输出结果
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
