## Lesson 21 Is this number a float? 浮点数判别
	
	#include <stdio.h>
	#include "yy_nxt.c"
	#include "yy_accept.c"
	
	#define debug(fmt, args...)	fprintf(stderr, fmt, ##args)
	
	int main(void)
	{
		int state = 1;
		char buf[64];
		int i = 0;
	
		while (1)
		{
			char c;
	
			c = getchar();
			if (c == EOF)
				break;
	
			buf[i++] = c;
	
			debug("\tstate = %d, ", state);
	
			state = yy_nxt[state][c];
	
			debug("c = <%c>, new state = %d\n", c, state);
	
			if (state < 0)
			{
				int act = 0;
	
				state = -state;
				act = yy_accept[state];
				buf[i-1] = '\0';
	
				// 1: \n   21: space
				if (!(act == 1 || act == 21))
					printf("Pattern %d found! <%s>\n", act, buf);
				i = 0;
	
				state = 1;
				ungetc(c, stdin);
			}
		}
	
		return 0;
	}

约减转换表格，原来二维的转换表to一维数组 base/default/check/next  
<http://www.codingboy.com/zlog/post/32.html>

<http://bbs.zixia.net/boardcon.php?bid=571&id=230&ftype=6>

<http://m20.googlecode.com/svn/trunk/cc/scanner.l>

注释flex生成代码  
<http://old.blog.edu.cn/user1/14610/archives/2005/376568.shtml>

input/output/puton 字符串匹配问题  
<http://www.cnblogs.com/zhanglanyun/archive/2012/02/16/2354686.html>  
<http://bbs.csdn.net/topics/300130885?jumpMenu=2&page=2>  

### 语法知识点
* 二维数组
* 二维函数指针数组
* 状态机编程之“机制和策略的分离”
	
### 课堂讨论
* new_state 变量是否是必须的，如果去掉程序应该怎么改？
	
### 课后练习
* C语言去注释问题。给定一个C语言的文本文件，内部包含 /*  */ 和 // 的注释，请去掉这些注释。

