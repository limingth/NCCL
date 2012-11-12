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
	
	#ifdef DBG_MSG 
	#define DEBUG_PRINTF(format,args...) \ 
	do { fprintf(stderr,"%s(%d):" format, __FUNCTION__, __LINE__,##args);}while(0) 
	#else 
	#define DEBUG_PRINTF(format,args...) 
	#endif

[LinkedIn 上的讨论](http://www.linkedin.com/groupItem?view=&srchtype=discussedNews&gid=87910&item=182474373&type=member&trk=eml-anet_dig-b-pop_ttl-hdp&ut=3tEjHOeHiH0lw1)