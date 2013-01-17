## Lesson 12 Does your machine use little-endian? 判断机器存储是否小尾端
	#include <stdio.h>

	union u_tag 
	{
		unsigned char c[4];
		int i;
		double d;
	} u;

	#define printc( expr )	printf( #expr " = %c \n", expr )
	#define printi( expr )	printf( #expr " = %d \n", expr )
	#define printd( expr )	printf( #expr " = %f \n", expr )
	#define printx( expr )	printf( #expr " = %x \n", expr )

	int main( int argc, char * argv[] )
	{
		printf( "hello, Cruel World! \n" );

		printf( "sizeof u_tag = %d \n", sizeof(u) );
		printf( "sizeof double = %d \n", sizeof(double) );

		u.c[0] = '0';

		printf( "u.c[0] = %c \n", u.c[0] );
		printi( u.c[0] );
		printi( u.c[1] );
		printi( u.c[2] );
		printi( u.c[3] );
		printi( u.i );
		printd( u.d );
		
		//u.i = 0x11223344;
		u.i = 0x87654321;
		printf( "u.c[0] = %c \n", u.c[0] );
		printx( u.c[0] );
		printx( u.c[1] );
		printx( u.c[2] );
		printx( u.c[3] );
		printx( u.i );
		printd( u.d );

		return 0;
	}

### 知识点
* 联合 union
* 字符数组类型 char buf[4]
* 存储格式 big/little endian	
* 浮点数格式 (1.00 的存储方式 0x3f800000)

### 课堂讨论
* 联合中能够包含结构体吗？ 结构体中能够包含联合吗？
* 列举出三种能够使用联合的场合。

### 课后练习
* 请用联合定义一个 XModem 协议包。
