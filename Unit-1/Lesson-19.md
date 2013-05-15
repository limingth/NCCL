## Lesson 19 Shell command parser 命令解释器
	#include <stdio.h>
	#include <string.h>

	int shell_parse(char * buf, char * argv[])
	{
		int argc = 0;
		int state = 0;

		while (*buf)
		{
			if (*buf != ' ' && state == 0)
			{
				argv[argc++] = buf;
				state = 1;
			}


			if ((*buf == ' ') && state == 1)
			{
				*buf = '\0';
				state = 0;
			}

			buf++;	
		}

		return argc;
	}

	int do_cmd(int argc, char ** argv)
	{
		int i;

		printf("argc = %d\n", argc);

		for (i = 0; i < argc; i++)
			printf("argv[%d]: <%s>\n", i, argv[i]);	

		return 0;
	}

	int do_add(int argc, char ** argv)
	{
		printf("help: this is a add function with %d args\n", argc - 1);

		return 0;
	}

	int do_sub(int argc, char ** argv)
	{
		printf("ls: this is a sub function with %d args\n", argc - 1);

		return 0;
	}

	int (*pf)(int argc, char ** argv);

	int main(void)
	{
		char buf[64];
		int argc = 0;
		char * argv[10];

		printf("$ ");
		fgets(buf, 64, stdin);
		buf[strlen(buf)-1] = '\0';
		printf("<%s>\n", buf);

		argc = shell_parse(buf, argv);

		pf = do_cmd;	
		if (strcmp(argv[0], "add") == 0)					
			pf = do_add;	

		if (strcmp(argv[0], "sub") == 0)
			pf = do_sub;	

		pf(argc, argv);
		//callback(pf，argc, argv);

		return 0;
	}

### 语法知识点
* 指针数组
* 指向指针的指针
* 函数指针
	
### 课堂讨论
* gets, scanf 和 fgets 在使用中有什么区别？需要注意什么？
* 函数指针类型，如果用 typedef 怎么声明？
* 指针数组 char * argv[10] 和指向指针的指针 char ** argv 有何区别？
	
### 课后练习
* 修改这个程序，使得它能够支持 add 和 sub 命令，可以实现整数的加法和减法。
* 如果把最后的注释打开，通过 callback 函数来调用 pf 函数指针所指向的函数，请实现这个回调函数。
* 分别实现整数和浮点数的加法函数 add_int() 和 add_float() ，在命令解释器利用 void * 函数指针来实现两种类型数的加法命令 add
* 通过函数指针数组，可以实现命令解释器的命令自动匹配和执行，请实现这个想法。提示：采用结构体数组来实现。


