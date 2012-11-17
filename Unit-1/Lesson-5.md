## Lesson 5 Summarize all numbers from 1 to 100 从1加到100求和
	#include <stdio.h>

	int main(void)
	{
		int sum = 0;

		for (int i = 0; i <= 100; i++)
		{
			sum += i;
		}

		printf("sum = %d\n", sum);

		return 0;
	}

	
### 知识点
* 循环语句 for
* 自动变量 i
* 赋值运算符 +=

### 扩展参考
	#ifdef DEBUG
	#define PRINTD printf
	#else
	#define PRINTD(format, args...) ((void)0)
	#endif
	
	#ifdef DBG_MSG 
	#define DEBUG_PRINTF(format,args...) \ 
	do { fprintf(stderr,"%s(%d):" format, __FUNCTION__, __LINE__,##args); } while (0) 
	#else 
	#define DEBUG_PRINTF(format,args...) 
	#endif

[LinkedIn 上的讨论](http://www.linkedin.com/groupItem?view=&srchtype=discussedNews&gid=87910&item=182474373&type=member&trk=eml-anet_dig-b-pop_ttl-hdp&ut=3tEjHOeHiH0lw1)

### 课堂讨论
* 在 for 循环内部修改循环变量 i 的值，可以吗？
* 循环跳出的时候，i++ 是否还会执行？ 最终 i 的值是多少？
* 与 while 循环相比，for 循环适用于哪些场合？

### 课后练习
* 用户输入5个数，计算它们的平均数，并打印。
* 用户输入5个数，将其中最大的数找出来，并打印。
* 已知11月1日是星期四，请打印出11月份的月历。
