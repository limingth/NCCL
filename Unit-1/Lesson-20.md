## Lesson 20 Preprocessor 预处理器实现
### delcomment.c
	
	#include <stdio.h>
	
	/* abcd */
	// abcd
	
	int get_input_type(char c)
	{
		// deal with /*  */
		if (c == '/')
			return 1;
	
		if (c == '*')
			return 2;
	
		// deal with //
		if (c == '\n')
			return 3;
	
		// deal with '/'
		if (c == '\'')
			return 4;
	
		// deal with '\\'
		if (c == '\\')
			return 5;
	
		return 0;
	}
	
	#define debug(fmt, args...)	fprintf(stderr, fmt, ##args)
	
	int main(void)
	{
		int state = 0;
		
		while (1)
		{
			char c;
			int input;
	
			c = getchar();
			input = get_input_type(c);
	
			if (c == EOF)
				break;
	
			debug("%c", c);
	
			/* ABCD */
			if (state == 0 &&  input == 1)	// "/
			{
				state = 1;
			}
			else	
			if (state == 0 &&  input == 4)	// "abc'
			{
				state = 5;
				putchar(c);
			}
			else	
			if (state == 1 &&  input == 1)	// "//
			{
				state = 4;
			}
			else	
			if (state == 1 &&  input == 2)	// "/*
			{
				state = 2;
			}
			else	
			if (state == 2 &&  input == 0)	// "/*abc
			{
				state = 2;
			}
			else	
			if (state == 2 &&  input == 2)	// "/*abc*
			{
				state = 3;
			}
			else	
			if (state == 3 &&  input == 1)	// "/*abc*/
			{
				state = 0;
			}
			else	
			if (state == 3 &&  input == 0)	// "/*abc*abc
			{
				state = 2;
			}
			else	
			if (state == 4 &&  input == 3)	// "// abcd \n
			{
				state = 0;
				putchar(c);
			}
			else
			if (state == 5 &&  input == 4)	// "abc'/'
			{
				state = 0;
				putchar(c);
			}
			else
			if (state == 5 &&  input == 5)	// "abc'\/
			{
				state = 6;
				putchar(c);
			}
			else
			if (state == 6 &&  input == 4)	// "abc'\'
			{
				state = 5;
				putchar(c);
			}
			else
			if (state == 6 &&  input == 5)	// "abc'vv
			{
				state = 5;
				putchar(c);
			}
			else
			if (state == 6 &&  input == 0)	// "abc'\'
			{
				state = 5;
				putchar(c);
			}
			else	
			if (state == 0 || state == 5)
				putchar(c);
	
			debug(" input=%d, /* abcd */ state=%d\n", input, state);
		}
	
	
		return 0;
	}
### 语法知识点
* 函数指针数组
* 枚举变量和结构体
* 数学库 (三角函数)
* 带参数的宏
	
### 课堂讨论
* 结构体作为参数在传递过程中，是传值，还是传址？ 
* 如何修改上述程序可以提高效率？
* 如果不用上面的方法声明函数指针数组，改用 typedef，应该如何修改？
	
### 课后练习
* 通过函数指针数组，可以实现命令解释器的命令自动匹配和执行，请实现这个想法。提示：采用结构体数组来实现。


