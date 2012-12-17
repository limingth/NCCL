## Lesson 17 Find how many words in an artitle 统计单词个数
	#include <stdio.h>
	
	int get_input_type(char c)
	{
		if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')
			return 1;
	
		if (c >= '0' && c <= '9')
			return 2;
	
		return 0;
	}
	
	int main(void)
	{
		char * str = "Don't ask what your country can do for you, but ask what you can do for your country.";
	
		int i = 0;
		char c;
	
		int state = 0;	// init state
		int input = 0;	// 0: space		1: alpha
		int counter = 0;
	
		printf("hello, count word from string:\n");
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
		
		printf("find %d word\n", counter);
		
		return 0;
	}

### 知识点
* 指向指针的指针
* char * strtok_r(char * s, const char * delim, char **saveptr);
* 
	
### 课堂讨论
* 如果不需要把统计的单词进行保存和输出，只需要计算出有多少个单词，则程序可以怎样简化？
* 如果不引入 state 变量，则程序写出来可能会是什么样的结构？与之相比是简单了还是复杂了？
	
### 课后练习
* 
