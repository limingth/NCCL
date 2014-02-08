
## Lesson 34 - Josephus Ring 约瑟夫环问题

### 课程任务
通过环形链表这种特殊的数据结构，实现 Lesson 10 要求的约瑟夫环问题。

### 重要知识点
* 环形链表的生成，插入，删除等操作

### 主程序流程和接口设计

	#include <stdio.h>
	#include "list.h"

	int main(void)
	{
		link cursor = NULL;
		int i = 0;

		list_print(cursor, print_int_data);

		for (i = 0; i < 100; i++)
		{
			int *p = make_data(i+1);
			link item = make_node(p);
			cursor = list_insert_after(cursor, item);
		}

		cursor = cursor->next;
		list_print(cursor, print_int_data);
		printf("ring list length = %d\n", list_length(cursor));

		int step = 0;
		while (cursor != NULL)
		{
			print_int_data(cursor->data);
			step++;

			if (step == 3)	
			{
				printf("-> %d out\n", *(int *)(cursor->data));
				cursor = list_delete(cursor, cursor);
				printf("length = %d\n", list_length(cursor));
				step = 0;
			}
			else
				cursor = cursor->next;

			//getchar();
			//sleep(1);
		}

		return 0;
	}
