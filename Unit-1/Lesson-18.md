## Lesson 18 My printf 实现 printf
	#include <stdio.h>

	void putchar_hex(char c)
	{
		const char * hex = "0123456789ABCDEF";	// good
		//char hex[] = "0123456789ABCDEF";	bad!

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

	#if 0
	#include <stdarg.h>
	#else
	typedef int * my_va_list;
	#define my_va_start(ap, A)		(ap = (int *)&(A) + 1)
	#define my_va_arg(ap, T)		(*(T *)ap++)
	#define my_va_end(ap)		((void)0)
	#endif

	static int myputs(const char * s)
	{
		while (*s)
			putchar(*s++);

		return 0;
	}

	int myprintf(const char * format, ...)
	{
		char c;	
		my_va_list ap;

		my_va_start(ap, format);

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
						char buf[100];

						case 'c':
							ch = my_va_arg(ap, int);
							putchar(ch);
							break;
						case 's':
							p = my_va_arg(ap, char *);
							myputs(p);
							break;					
						case 'x':
							a = my_va_arg(ap, int);
							putint_hex(a);
							break;		
						case 'd':
							a = my_va_arg(ap, int);
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
* 
* 
* 栈帧
	
### 课堂讨论
*
	
### 课后练习
* 	