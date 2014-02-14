
## Lesson 34 - Josephus Ring 约瑟夫环问题

### 课程任务
通过循环链表 circular list 这种特殊的数据结构（简称 clist），实现 Lesson 10 要求的约瑟夫环问题。

### 重要知识点
* 循环链表的生成，插入，删除等操作
* cursor 游标的使用

### 数据结构和接口设计

	struct node
	{
		void *data;
		struct node * next;
	};

	typedef struct node * link;

	link make_node(void *data);
	int *make_data(int data);

	void print_int_data(void *data);

	link clist_new(void);
	void clist_print(link cur, void (*pf)(void *));
	link clist_insert_after(link cur, link item);
	link clist_delete(link cur, link item);
	int clist_length(link cur);

### 主程序流程

	#include <stdio.h>
	#include "clist.h"

	int main(void)
	{
		link cursor = NULL;
		int i = 0;

		clist_print(cursor, print_int_data);

		for (i = 0; i < 100; i++)
		{
			int *p = make_data(i+1);
			link item = make_node(p);
			cursor = clist_insert_after(cursor, item);
		}

		cursor = cursor->next;
		clist_print(cursor, print_int_data);
		printf("ring list length = %d\n", clist_length(cursor));

		int step = 0;
		while (cursor != NULL)
		{
			print_int_data(cursor->data);
			step++;

			if (step == 3)	
			{
				printf("-> %d out\n", *(int *)(cursor->data));
				cursor = clist_delete(cursor, cursor);
				printf("length = %d\n", clist_length(cursor));
				step = 0;
			}
			else
				cursor = cursor->next;

			//getchar();
			//sleep(1);
		}

		return 0;
	}

