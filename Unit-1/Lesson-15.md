## Lesson 15 Count bit 1 in a number 统计一个数二进制表示中1的个数
	#include <stdio.h>

	int count_bit_1(int n)
	{
		unsigned int i;
		int result = 0;
		
		for(i = 0; i < sizeof(int) * 8; i++)
		{
			if((n >> i) & 0x01)
				result++;
		}
		return result;
	}

	int main(int argc, char *argv[])
	{
		int num;
		
		printf("please input a number:");
		scanf("%d", &num);
		printf("number in hex is 0x%x\n", num);
		
		printf("%d bit '1' in %d\n", count_bit_1(num), num);
		
		return 0;
	}

### 算法优化
	#include <stdio.h>

	int count_bit_1(int n)
	{
		int counter;	
		
		for (counter = 0; n; counter++)
			n &= n-1;
			
		return counter;
	}

	int main(int argc, char *argv[])
	{
		int num;
		
		printf("please input a number:");
		scanf("%d", &num);
		printf("number in hex is 0x%x\n", num);
		
		printf("%d bit '1' in %d\n", count_bit_1(num), num);
		
		return 0;
	}

### 第三种算法--二进制数内的加法
	#include <stdio.h>

	//types and constants used in the functions below
	typedef unsigned int uint32;  //assume this gives 32-bits
	const uint32 m1  = 0x55555555; //binary: 0101...
	const uint32 m2  = 0x33333333; //binary: 00110011..
	const uint32 m4  = 0x0f0f0f0f; //binary:  4 zeros,  4 ones ...
	const uint32 m8  = 0x00ff00ff; //binary:  8 zeros,  8 ones ...
	const uint32 m16 = 0x0000ffff; //binary: 16 zeros, 16 ones ...
	const uint32 h01 = 0x01010101; //the sum of 256 to the power of 0,1,2,3...
	 
	//This is a naive implementation, shown for comparison,
	//and to help in understanding the better functions.
	//It uses 24 arithmetic operations (shift, add, and).
	int count_bit_1(unsigned int x) {
		x = (x & m1 ) + ((x >>  1) & m1 ); //put count of each  2 bits into those  2 bits 
		x = (x & m2 ) + ((x >>  2) & m2 ); //put count of each  4 bits into those  4 bits 
		x = (x & m4 ) + ((x >>  4) & m4 ); //put count of each  8 bits into those  8 bits 
		x = (x & m8 ) + ((x >>  8) & m8 ); //put count of each 16 bits into those 16 bits 
		x = (x & m16) + ((x >> 16) & m16); //put count of each 32 bits into those 32 bits 
		
		return x;
	}

	int main(int argc, char *argv[])
	{
		int num;
		
		printf("please input a number:");
		scanf("%d", &num);
		printf("number in hex is 0x%x\n", num);
		
		printf("%d bit '1' in %d\n", count_bit_1(num), num);
		
		return 0;
	}
	
### 语法知识点
* 位操作 &, |, ~, ^
* 优化算法效率 <http://hi.baidu.com/bobchennan/item/169952dc515045e4795daa10>
	- n & n-1 妙用
	- 二进制数内的加法
	
### 课堂讨论
* 与第1个算法相比，第2个算法有什么优点？
* 第3个算法的时间复杂度是多少？ 它背后的思想是什么？

### 课后练习
* 请写出可以进行位操作的 set_bit, get_big 接口
	- set_bit(int num, int pos, int v);
	- get_bit(int num, int pos);
	
	
	