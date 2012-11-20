## Lesson 17 Find how many words in an artitle 统计单词个数
	#include <stdio.h>
	#include <stdlib.h>
	#include <string.h>

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
		char pre[] = "4213657";
		char in[] = "1234567";
		char str[] = "Don't ask what your country can do for you, but ask what you can do for your country.\n";

		int i = 0;
		int pos = 0;

		int state = 0;	// init state
		int input = 0;	// 0: space		1: alpha

		printf("hello, search word from string:\n");
		printf("<%s> \n", str);

		while (1)
		{
			char c;
			char wordbuf[32];

			c = str[pos++];
			if (c == '\0')
				break;

			input = get_input_type(c);
			//printf("state = %d ", state);

			if (state == 0 && input == 1)
			{
				state = 1;
				//printf("word begin with <%c>\n", c);
				i = 0;
				wordbuf[i++] = c;
			} else if (state == 1 && input == 0)
					{
						wordbuf[i] = '\0';
						printf("find a word = <%s>\n", wordbuf);
				
						state = 0;
					} else if (state == 1 && input == 1)
						wordbuf[i++] = c;
		}

		return 0;
	}

### 知识点
* 指向指针的指针
* char * strtok_r(char * s, const char * delim, char **saveptr);
* 可重入和不可重入函数
	
### 课堂讨论
*
	
### 课后练习
* 	