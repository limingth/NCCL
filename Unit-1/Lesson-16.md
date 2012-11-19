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

### 扩展应用
	/* include/linux/tcp.h */
	struct tcphdr {
		__be16	source;
		__be16	dest;
		__be32	seq;
		__be32	ack_seq;
	#if defined(__LITTLE_ENDIAN_BITFIELD)
		__u16	res1:4,
			doff:4,
			fin:1,
			syn:1,
			rst:1,
			psh:1,
			ack:1,
			urg:1,
			ece:1,
			cwr:1;
	#elif defined(__BIG_ENDIAN_BITFIELD)
		__u16	doff:4,
			res1:4,
			cwr:1,
			ece:1,
			urg:1,
			ack:1,
			psh:1,
			rst:1,
			syn:1,
			fin:1;
	#else
	#error	"Adjust your <asm/byteorder.h> defines"
	#endif	
		__be16	window;
		__sum16	check;
		__be16	urg_ptr;
	};
	
### 知识点
* 位域 bit-field
* 大端和小端 Big-Endian/Little-Endian
	
### 课堂讨论
* 位域和之前学过的结构体，有何异同之处？
* 位域在哪些场合下可以适用？
	- 码流结构 stream
	- 传输协议结构 protocal
	- 特殊功能寄存器设置 SFR

### 课后练习
* 用位域操作实现随机生成无重复的10个数字，要求不允许使用数组
	- 提示：随机数用 random() 函数，用一个整型数的bit0-bit9来记录已经产生的数字
	
	