## Lesson 1 What is a simplest C program? (最简单的C程序)
	int main(void)
	{
		return 0;
	}

### 知识点
* 数据类型 int 
* 函数 main 
* 函数参数 void 
* 函数返回值 return

### 扩展练习

	/* this is a simplest c program */

	int global = 100;

	int main(void)
	{
		int local = 100;

		// we return these two varible' summary 
		return local + global;
	}
	
### 知识点
* 变量 variable
	- 局部变量 local
	- 全局变量 global
* 注释 comment /* */, //
* 更多数据类型 char, float 

### 参考资料
* C语言的 BNF 范式
	- <http://www.cs.man.ac.uk/~pjj/bnf/c_syntax.bnf>
* BNF 范式
	- <http://www.cs.man.ac.uk/~pjj/bnf/bnf.html>
	- <http://zh.wikipedia.org/wiki/巴科斯范式>
* glibc 库
	- <http://zh.wikipedia.org/wiki/Glibc>
	- <http://ftp.gnu.org/gnu/glibc>
* gcc 编译器
	－ <http://ftp.gnu.org/gnu/gcc/>
* ld 链接器
	- <>