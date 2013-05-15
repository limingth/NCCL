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
* 二维数组
* 函数指针
* 二维函数指针数组
* 结构体数组
* debug 调试宏
	
### 课堂讨论
* 用 if-else 的结构实现状态机有什么好处？ 能否有 switch-case 来实现？
* 请讨论有多少种判别注释的例外情况，考虑有单引号，双引号，转移字符，反斜杠等因素。
	
### 课后练习
* 在C语言去注释的问题中，对于双引号字符串中的 /*  */ 注释没有进行判别，请重新设计状态机实现之。
* 在宏定义替换问题中，对于带参数的宏没有进行处理，请重新设计状态机实现之。
* 在条件编译替换问题中，对于 #else 的情况没有判别，请重新设计状态机实现之。
* 预处理问题中还有一个 #include 没有实现，请参考 #if/#endif 状态机的构造方法，自行实现之。



