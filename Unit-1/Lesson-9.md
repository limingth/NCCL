## Lesson 9 Convert a number to a string 整型转字符串
	#include <stdio.h>

	int main(void)
	{	
		int num;
		int i = 0;
		int len = 0;
		char buf[100];
		
		printf("Please input a number: ");
		scanf("%d", &num);
		
		do 
		{
			buf[i++] = num % 10 + '0';
			num /= 10;		
		} while (num);
		buf[i] = '\0';
		
		len = i;
		for (i = 0; i < len/2; i++)
		{
			char tmp;
			tmp = buf[i];
			buf[i] = buf[len-i-1];
			buf[len-i-1] = tmp;
		}
		
		printf("number string = %s\n", buf);
		
		return 0;	
	}

### 知识点
* 数组 array
* 函数式的宏定义
* 进制表示 oct, dec, hex
* 三元表达式 a > b ? a : b
* 字符串逆序 reverse()
* 字符串库函数 itoa 
	
### 课堂讨论
* do-while 的循环可以用 while 循环替换吗？ 为什么？
* 如果要将输入数字，按照16进制，或者2进制转换成字符串，如何修改？
* 为了交换两个字节的内容，示例中引入了一个 tmp 变量，这个是必须的吗？


### 课后练习
* 

