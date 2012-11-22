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

### 算法优化1 - 减少对 dst 指针变量的存取次数
	#include <stdio.h>

	char * my_strcpy(char * dst, const char * src)
	{
		assert(dst != NULL && src != NULL);

		char *s = (char *)src;
		int delt = dst - src;

		while ((s[delt] = *s++) != '\0');

		return dst;
	}

出处: 林锐《高质量程序设计指南》<http://www.360doc.com/content/11/0426/13/6845720_112422873.shtml>

### 算法优化2 - 内联函数和内嵌汇编
	extern inline void * memcpy(void * dest,const void * src, int n)
	{
		__asm__("cld\n\t"
		        "rep\n\t"
		        "movsb"
		        ::"c" (n),"S" (src),"D" (dest)
		        :"cx","si","di");
		return dest;
	}
	
出处: Linux 0.0.1 源码 <http://lxr.linux.no/linux-old+v0.01/include/string.h>

### 算法优化3 - 基于 PAGE/WORD/BYTE 对齐拷贝
	#include <string.h>
	#include <memcopy.h>
	#include <pagecopy.h>
	
	#undef memcpy
	
	void *
	memcpy (dstpp, srcpp, len)
	     void *dstpp;
	     const void *srcpp;
	     size_t len;
	{
	  unsigned long int dstp = (long int) dstpp;
	  unsigned long int srcp = (long int) srcpp;
	
	  /** Copy from the beginning to the end.  */
	
	  /** If there not too few bytes to copy, use word copy.  */
	  if (len >= OP_T_THRES)
	    {
	      /** Copy just a few bytes to make DSTP aligned.  */
	      len -= (-dstp) % OPSIZ;
	      BYTE_COPY_FWD (dstp, srcp, (-dstp) % OPSIZ);
	
	      /** Copy whole pages from SRCP to DSTP by virtual address manipulation,
		 as much as possible.  */
	
	      PAGE_COPY_FWD_MAYBE (dstp, srcp, len, len);
	
	      /** Copy from SRCP to DSTP taking advantage of the known alignment of
		 DSTP.  Number of bytes remaining is put in the third argument,
		 i.e. in LEN.  This number may vary from machine to machine.  */
	
	      WORD_COPY_FWD (dstp, srcp, len, len);
	
	      /** Fall out and copy the tail.  */
	    }
	
	  /** There are just a few bytes to copy.  Use byte memory operations.  */
	  BYTE_COPY_FWD (dstp, srcp, len);
	
	  return dstpp;
	}
	libc_hidden_builtin_def (memcpy)

出处：glibc 库函数实现 
* <http://www.oschina.net/code/explore/glibc-2.9/string/strcpy.c>
* <http://www.oschina.net/code/explore/glibc-2.9/string/memcpy.c> 


### 尚未看懂的优化实现 - 内核3.6.7代码实现	
* <http://lxr.linux.no/linux+v3.6.7/arch/arm/lib/copy_template.S>
* <http://lxr.linux.no/linux+v3.6.7/arch/arm/lib/memcpy.S>


### 知识点
* 指针
	- 字符指针
* 字符指针 vs 字符数组


### 课堂讨论
* 当拷贝函数参数 dst 和 src 内容重叠时应该怎么办呢？
	- 参考阅读 <http://blog.csdn.net/hzgdiyer/article/details/6163767>
* 考虑到内存数据总线是32位，每4字节进行读写内存时候的效率最高，程序应该怎么改？
	- 参考阅读 <http://blog.csdn.net/wind19/article/details/7539027>
	- <http://blog.sina.com.cn/s/blog_6ba6e53b010145bz.html>
* char s[32] = "Hello World";  修改为 char * s = "Hello World";  有何区别？
	- 思路提示: 从两者的存储分配，读写权限，初始化实现，执行时效率进行分析
* 怎样写出一个标准规范的strcpy函数？
	- 编程风格
	- 出错处理
	- 算法效率（用于提高性能）
	
### 课后练习
* 请用指针实现对一个数组的调整，要求奇数在左边，偶数在右边。 要求： 尽可能不占用额外的存储空间。	


# 新浪微博大讨论
## @Tan_yb
对@亚嵌李明老师 说：老师我发现一个问题：内核和glibc的memcpy比我们自已写的性能高这么多。

Tan_yb：参考http://t.cn/zjyVHFq 进行了优化http://t.cn/zjyVHFG memcpy执行效率果然快了很多，我发现定义的结构体size达到64个字节就应该是效率执行的最大化。 

## @亚嵌李明老师
glibc 里面对内存的读写考虑了对齐问题，一般是以字WORD对齐进行整块拷贝，效率应该能够提高4倍左右。另外也考虑了以页为单位进行整页拷贝。 详见 http://t.cn/zjyyuF5 http://t.cn/zjyyuFt 


## @Stanley文威
memcpy可是软件优化和CPU架构相结合的典型例子。WORD对齐，cacheline对齐，预取等等都在里面，我记得我有好几个同事优化memcpy优化了好久。属于计算机里的微雕艺术。//@翁恺BA5AG: 呵呵，昨天求计的C课正好讲到这个，要强迫他们养成凡事尽量使用现成代码的习惯 

关于体系架构和软件优化，还有个故事。以前某天某公司的某个加速库就要发布了，大家发现性能降了20%，大家都抓狂了。这种加速库被优化了n年，各个边边角角被优化了好几遍，20%的性能下降简直是不可想像的，于是大家郁闷的加班找原因。

最后发现玄机在Makefile里，Makefile里最关键的一句就是$(CC) -o xxx.a a.o b.o c.o ... z.o, 一个工程师顺手把这行改成$(CC) -o xxx.a a.o c.o b.o ... z.o !?! 原来这样一行修改改变了某几个函数的内存位置，恰巧让他们占用了同几个I$的slot，于是I$ miss飙高，性能下降。（continue）

这时候大家才知道为了避免不必要的i$ miss，第一个写这个Makefile的姐姐花了很长时间来人肉调整object文件的次序。这可是全排列哦。这JJ当时已经离开公司了，只留下美丽的传说。。。。再后来我们好像在gcc里做了这种优化，再具体的细节我也忘了，你懂的


## @宋宝华Barry
memcpy非常讲究,要充分考虑指令集,cacheline,word对齐等.可看arch/arm/lib/memcpy.S和copy_template.S//@翁恺BA5AG: //@Stanley文威: memcpy可是软件优化和CPU架构相结合的典型例子。WORD对齐，cacheline对齐，预取等等都在里面，我记得我有好几个同事优化memcpy优化了好久。属于计算机里的微雕艺术。 (11月21日 22:07)

宋宝华Barry：回复@Tan_yb: 方法错. memcpy没人拿C语言搞的，都是根据每个arch写汇编。你用C，就依赖于toolchain是否能转化为正确指令集。//@Tan_yb：参考http://t.cn/zjyVHFq 进行了优化http://t.cn/zjyVHFG memcpy执行效率果然快了很多，我发现定义的结构体size达到64个字节就应该是效率执行的最大化

宋宝华Barry：前一段很准确，后一段属误解。内核dma的memcpy发生于io与mem或者GPU等的mem与mem，不发生于典型memcpy，而且目的也不是cache miss更少，更不一定是加速。//@翁恺BA5AG: //@CSK_: x86上的memcpy库函数会使用SSE指令加速，arm上的会用NEON指令加速。内核态甚至会用DMA加速，同时cache miss也小 


## @CSK_
x86上的memcpy库函数会使用SSE指令加速，arm上的会用NEON指令加速。内核态甚至会用DMA加速，同时cache miss也小//@翁恺BA5AG: 不同的CPU实现肯定不同，x86的和ARM不会一样 //@宋宝华Barry:memcpy非常讲究,要充分考虑指令集,cacheline,word对齐等.可看arch/arm/lib/memcpy.S和copy_template.S

## @蔡华林CHL
回复@亚嵌李明老师:可以找找cache miss和false sharing相关的文章看看，当你的程序有大量循环时一不小心就会遇上，可以通过vtune之类工具发现。现在cpu是很快，显得内存访问的latency越来越无法忍受了，貌似是几乎上百纳秒级别，一次内存装载到cache的时间够执行很多语句了

但是一般人写程序不会注意到这个问题吧，前段时间想改进hash join，每次算好哈希入口去访问都会引起一次cache miss，性能就只有遍历的1/10，于是想显式发预取指令，这样得弄个窗口处理当前项时预取下一项，由于之前设计问题缓存会增加额外的memcpy和组装开销，抵消掉大部分预取带来的好处…

我以前还专门被叫去研究过这个函数，在某些特殊情况下能做到自己写的更快，因为可以被inline掉，前提是对齐之类要注意，改写成word的赋值语句，还有些情况下应该使用gcc内置的builtin的memcpy或者vc的intrinsic，这样编译器也能帮省掉函数调用开销

## @ChongHead
X86的glibc memcpy大致有4k行汇编代码，性能差别不是一点点的，牛人作者在上海 //@CSK_: x86上的memcpy库函数会使用SSE指令加速，arm上的会用NEON指令加速。内核态甚至会用DMA加速，同时cache miss也小//@翁恺BA5AG: 不同的CPU实现肯定不同，x86的和ARM不会一样 //@宋宝华Barry:memcpy

## @曦图吴昊
我们以前做这种优化都是根据CPU的cycle设计算法的 //@CSK_:x86上的memcpy库函数会使用SSE指令加速，arm上的会用NEON指令加速。内核态甚至会用DMA加速，同时cache miss也小 //@翁恺BA5AG: 不同的CPU实现肯定不同，x86的和ARM不会一样

## @孙志岗Sunner
从memcpy到filecopy的优化，足够学到好大一箩筐了//@Stanley文威: memcpy可是软件优化和CPU架构相结合的典型例子。WORD对齐，cacheline对齐，预取等等都在里面，我记得我有好几个同事优化memcpy优化了好久。属于计算机里的微雕艺术。//@翁恺BA5AG: 要强迫他们养成凡事尽量使用现成代码的习惯

