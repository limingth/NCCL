## Lesson 19 Shell command parser 命令解释器
	#include <stdio.h>

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
			
			
			if (*buf == ' ' && state == 1)
			{
				*buf = '\0';
				state = 0;
			}
			
			buf++;	
		}
		
		return argc;
	}

	int main(void)
	{
		char buf[64];
		int argc = 0;
		char * argv[10];
		int i = 0;
		
		printf("$ ");
		gets(buf);
		
		argc = shell_parse(buf, argv);
		printf("argc = %d\n", argc);
		
		for (i = 0; i < argc; i++)
			printf("argv[%d]: <%s>\n", i, argv[i]);	

		return 0;
	}

### 语法知识点
* 指针数组
* main(argc, argv)
	
### 课堂讨论
* 
	
### 课后练习
* 		