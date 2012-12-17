## Lesson 17 Find how many words in an artitle 统计单词个数
	#include <stdio.h>
	
	int get_input_type(char c)
	{
		if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')
			return 1;
	
		return 0;
	}
	
	int main(void)
	{
		char * str = "Don't ask what your country can do for you, but ask what you can do for your country.";
		char c;
	
		int state = 0;	// init state
		int input = 0;	// 0: space		1: alpha
		int counter = 0;
	
		printf("hello, count how many words in string:\n");
		printf("<%s>\n", str);
	
		while ((c = *str++) != '\0')
		{
			input = get_input_type(c);			
	
			if (state == 0 && input == 1)
				state = 1;
			else if (state == 1 && input == 0)
			{
				counter++;
				state = 0;
			} 
		}
		
		printf("find %d words.\n", counter);
		
		return 0;
	}

### 知识点
* 字符串指针用法
* 状态机编程
* switch-case 用法
	
### 课堂讨论
* 为何要设计出 get_input_type() 这个函数，这样做有什么好处？
* 如果不引入 state 变量，则程序写出来可能会是什么样的结构？与之相比是简单了还是复杂了？
* 如果把输入类型和当前状态以及下一个状态做成一张表，会是什么样子？
	
### 课后练习
* 如果需要把发现的单词进行保存和输出，则程序可以怎样简化？
* 如果该程序不用 if-else 改用 switch-case ，应该如何实现？
* 如果该程序不是统计单词的个数，而是统计数字的个数，应该如何修改？

