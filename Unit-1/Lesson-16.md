## Lesson 16 Bit-Field 位域操作
	#include <stdio.h>

	struct flag
	{
		unsigned int is_keyword : 1;
		unsigned int is_extern : 1;
		unsigned int is_static : 1;
		unsigned int is_mid : 4;
		unsigned int is_high : 1;
		unsigned int is_highest : 30;
	} flags;

	int main( int argc, char * argv[] )
	{
		printf( "hello, Cruel World! \n" );

		flags.is_keyword = 1;
		flags.is_extern = 1;
		flags.is_high = 1;

		flags.is_mid = 2;

		printf( "flags = 0x%x \n", flags );
		printf( "sizeof flags = 0x%x \n",sizeof(flags) );

		return 0;
	}

	

### 知识点
* 位域	