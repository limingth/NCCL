## Lesson 16 How to strcpy 字符串拷贝
	#include <stdio.h>
	#include <assert.h>

	#if 1
	char * my_strcpy(char * dst, const char * src)
	{
		assert(dst != NULL && src != NULL);

		char * ret = dst;

		while ((*dst++ = *src++) != '\0');

		return ret;
	}
	#else
	char * my_strcpy(char * dst, const char * src)
	{
		char * ret = dst;

		while((*dst++ = *src++) != '\0');

		return ret;
	}
	#endif

	int main(int argc, char *argv[])
	{
		char d[32];
		char s[32] = "Hello World";

		printf("s = %s\n", s);

	//	my_strcpy(d, s);
		printf("d = %s\n", my_strcpy(d, s));
		
		return 0;
	}

### 算法优化-减少对 dst 指针变量的存取次数
	#include <stdio.h>

	char * my_strcpy(char * dst, const char * src)
	{
		assert(dst != NULL && src != NULL);

		char *s = (char *)src;
		int delt = dst - src;

		while ((s[delt] = *s++) != '\0');

		return dst;
	}

### 算法优化2-内联函数和内嵌汇编
	extern inline void * memcpy(void * dest,const void * src, int n)
	{
		__asm__("cld\n\t"
		        "rep\n\t"
		        "movsb"
		        ::"c" (n),"S" (src),"D" (dest)
		        :"cx","si","di");
		return dest;
	}
	
出处: <http://lxr.linux.no/linux-old+v0.01/include/string.h>

### 知识点
* 指针
	- 字符指针
* 字符指针 vs 字符数组


### 课堂讨论
* 当拷贝函数参数 dst 和 src 内容重叠时应该怎么办呢？
* 考虑到内存数据总线是32位，每4字节进行读写内存时候的效率最高，程序应该怎么改？
* char s[32] = "Hello World";  修改为 char * s = "Hello World";  有何区别？
* 怎样写出一个标准规范的strcpy函数？
	- 编程风格
	- 出错处理
	- 算法效率（用于提高性能）
	
### 课后练习
* 请用指针实现对一个数组的调整，要求奇数在左边，偶数在右边。 要求： 尽可能不占用额外的存储空间。	

### 参考资料
* glibc 库函数实现 
	- <http://www.oschina.net/code/explore/glibc-2.9/string/strcpy.c>
	- <http://www.oschina.net/code/explore/glibc-2.9/string/memcpy.c> 
	- 实现分析 <http://blog.csdn.net/wind19/article/details/7539027>
* 内核3.6.7代码实现	
	- <http://lxr.linux.no/linux+v3.6.7/arch/arm/lib/copy_template.S>
	- <http://lxr.linux.no/linux+v3.6.7/arch/arm/lib/memcpy.S>


	