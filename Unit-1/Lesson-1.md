---
layout: post
title: 新概念C语言 NCCL - Lesson 0
---


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

	int global = 1;

	int main(void)
	{
		int local = 2;

		// we return these two varible' summary 
		return local + global;
	}
	
### 知识点
* 变量 variable
	- 局部变量 local
	- 全局变量 global
* 运算符 operator
	- 双目运算符 ’+,-,*,/‘
	- 赋值运算符 =
* 注释 comment 
	- 不能嵌套 /* */
	- 能嵌套 //
* 基本数据类型 
	- 字符 char
	- 短整型 short
	- 浮点 float 
	- 双精度浮点 double 

### 课堂讨论
* main 函数名是 C 语言的关键字吗? 
* 注释可以写在某一行代码的里面吗?
* 全局变量和局部变量取名可以重名吗? 
* 所有代码可以写在一行里面吗? 
* 把源程序中的空格去掉可以吗? 

### 知识点
* 数据类型 int 
* 函数 main 
* 函数参数 void 
* 函数返回值 return

### 课后练习
* 修改代码，使得编译不通过，并举出常见的错误提示和出错原因，越多越好。 

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

