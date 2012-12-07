## Lesson 10 Josephus ring 约瑟夫环
	#include <stdio.h>

	#define ALL_NUM    	100
	#define COUNT_NUM	3
	#define OUT_NUM		3

	/* people id array such as (1,2,3,4,5,6) */
	int people[ALL_NUM];

	int main(void)
	{
		int left;	/* left people number */
		int pos;	/* which pos */
		int step;	/* which step */
		int i;

		int counter = 0;

		left = ALL_NUM;
		pos = 0;
		step = 0;

		/* init id as 1,2,3,4,5,6 */
		for (i = 0; i < ALL_NUM; i++)
			people[i] = i + 1;

		/* if there is still people in queue */
		while (left > 0)
		{
			/* pos++?  step++?   left--? */
			if (people[pos] > 0)
				step++;

			if (step == OUT_NUM && people[pos] != 0)
			{
				printf("%d out \n", people[pos]);
				people[pos] = 0;
				left--;
			}
			
		#if 1
			pos = ++pos % ALL_NUM;
			step = step % COUNT_NUM;
		#else	
			pos++;
			if (pos == ALL_NUM)
				pos = 0;
			
			if (step == COUNT_NUM)
				step = 0;
		#endif
		}

		return 0;
	}

### 语法知识点
* 函数设计 function
* 数据驱动编程

### 课堂讨论
* pos 和 step 变量，每次赋值用 if 和 直接赋值，在执行效率有什么不同？ 
* 在这个算法实现中，留在环里面的人越少，无效的比较次数越多，有什么办法可以优化算法？

### 课后练习
* 增加一个变量，用来统计在算法执行过程中比较的次数。
* 实现在课堂讨论中想到的优化算法。
* 已知2012年1月1日是星期日，请打印出全年的月历。要求用到函数，数组和循环。

### 名人名言
* Rob Pike (Go语言之父，和Ken Thompson一起设计了UTF-8编码格式，现Google首席工程师。)
	- “Data dominates. If you’ve chosen the right data structures and organized things well, the algorithms will almost always be self-evident. Data structures, not algorithms, are central to programming.”
	- “数据压倒一切。如果已经选择了正确的数据结构并且把一切都组织得井井有条，正确的算法也就不言自明。编程的核心是数据结构，而不是算法。”
	- “给我看流程图而不让我看（数据）表，我仍会茫然不解；如果给我看（数据）表，通常就不需要流程图了；数据表足够说明问题了。”