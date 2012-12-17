## Lesson 18 My printf 实现 printf
	#include <stdio.h>
	
	void putchar_hex(char c)
	{
		const char * hex = "0123456789ABCDEF";  // good
		//char hex[] = "0123456789ABCDEF";  bad!
	
		putchar(hex[(c & 0xf0)>>4]);
		putchar(hex[(c & 0x0f)>>0]);
		//putchar(' ');
	}
	
	void putint_hex(int a)
	{
		putchar_hex( (a>>24) & 0xFF );
		putchar_hex( (a>>16) & 0xFF );
		putchar_hex( (a>>8) & 0xFF );
		putchar_hex( (a>>0) & 0xFF );
	}
	
	char * itoa(int num, char * buf)
	{   
		int i = 0;
		int len = 0;
	
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
	
		return buf; 
	}
	
	static int myputs(const char * s)
	{
		while (*s)
			putchar(*s++);
	
		return 0;
	}
			
	#if 0
	#include <stdarg.h>
	#else
	typedef int * va_list;
	#define va_start(ap, A)      (ap = (int *)&(A) + 1)
	#define va_arg(ap, T)        (*(T *)ap++)
	#define va_end(ap)       ((void)0)
	#endif	

	static char buf[100]; 
	
	int myprintf(const char * format, ...)
	{
		char c;
	
		va_list ap;
	
		va_start(ap, format);
	
		while ((c = *format++) != '\0')
		{
			switch (c)
			{
				case '%':
					c = *format++;
	
					switch (c)
					{
						char ch;
						char * p;
						int a;
	
						case 'c':
							ch = va_arg(ap, int);
							putchar(ch);
							break;
						case 's':
							p = va_arg(ap, char *);
							myputs(p);
							break;                  
						case 'x':
							a = va_arg(ap, int);
							putint_hex(a);
							break;      
						case 'd':
							a = va_arg(ap, int);
							itoa(a, buf);
							myputs(buf);
							break;  
						default:
							break;
					}               
					break;      
	
				default:
					putchar(c);
					break;
			}
		}
	
		return 0;   
	}
	
	int main(void)
	{
		myprintf("test: %c, %s, %d, 0x%x\n", 'A', "abcdef", 11, 0x23);
	
		return 0;
	}

### 语法知识点
* printf 的函数原型
* typedef 类型声明的用法
* va_start, va_arg, va_end 3个宏的实现
* switch-case 语句的嵌套用法
* 指针的指针 用法
	
### 课堂讨论
* printf 的原型，参数和返回值各是什么？
* 为何用 %c 打印时，传入 my_va_arg 的参数是一个 int 类型？
* 当前栈帧的位置是如何判别的？ 它和哪些因素有关？
	
### 课后练习
* 请实现一个可变长度参数的 max 函数，可以求出任意多传入参数中的最大值。  
例如 max(3, 100, 200, 300) 返回 300； max(6, 10, 20, 30, 40, 50, 60) 返回 60
* 请在 myprintf 的基础上，实现一个 mysprintf 函数。
