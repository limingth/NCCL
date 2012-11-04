NCCL - New Concept C Language
=============================


# Unit One
Unit 1 是《新概念C语言》系列课程的第一部分，共有24个Lesson，包含以下4个阶段的学习内容：

1. Beginning Lessons (Lesson 1-7)  
    以变量为核心，运用循环语句和条件分支，讲解C程序的基本结构。

2. Intermediate Lessons (Lesson 8-14)  
    以数组为核心，分析常用数据结构（字符串，结构体，联合），讲解C程序的函数设计。
  
3. Advanced Lessons (Lesson 15-21)  
    以指针为核心，结合数组，位操作和函数指针，讲解C程序的状态机编程思想。

4. Homework Projects (Lesson 22-24)  
    以任务为核心，通过趣味题，综合使用学习过的知识和技能，实现项目需求功能。

# Beginning Lessons

## Lesson 1 [What is a simplest C program?](Lesson-1.md) 最简单的C程序
### 基本概念讲解
* C 程序 Language
	- 库函数 Library
* 编译器 Compiler
	- 链接器 Linker
* 操作系统 OS
	- 加载器 Loader

## Lesson 2 [Let's say hello to world](Lesson-2.md) 打印输出
### 基本概念讲解
* 程序和进程 Program & Process
	- 程序的执行流程 Execution Sequence
* 程序的结构 Program Structure
	- 链接脚本 Link Script
* 系统调用 System Call
	- 虚拟地址空间 Vitual Memory Address

## Lesson 3 [Count how many fingers do you have?](Lesson-3.md) 循环打印
### 基本概念讲解
* while 循环 和 do-while 用法
	- 比较和跳转指令 Compare and Jump Instruction
* 变量的初始化 Variable Initialization
	- 变量的存储布局 Data & BSS Section
* 相对跳转 Relative Jump 
	- 位置无关代码 PIC (Position Independent Code)

## Lesson 4 [Judge a number odd or even](Lesson-4.md) 判断奇偶
### 基本概念讲解
* 条件分支 Condition 
	- 表达式求值  Expression Value
* 编码风格 Coding Style
	- 标识符命名规则 symbol naming
* 函数的传值和传址 Parameter's value and address
	- 程序二进制接口规范 ABI (Application Binary Interface)

## Lesson 5 [Summarize all numbers from 1 to 100](Lesson-5.md) 从1加到100求和
### 基本概念讲解
* for 循环 
	- 两种循环用法比较
* 自动变量 auto variable
	- C 语言的发展变迁 Old Style C/C89/C99/GNU C
* 函数栈 Function Stack
	- 栈帧 Stack Frame

## Lesson 6 [Print 9*9 multiplication table](Lesson-6.md) 乘法表
### 基本概念讲解
* 循环嵌套
	- 两重循环的典型用法

		
## Lesson 7 [Find a max prime number within 100](Lesson-7.md) 求100以内的最大素数
### 基本概念讲解
* 循环中的条件分支 
	- break 和 goto 用法	
* 数学库函数 math library
	- 静态链接和动态链接 static & dynamic linkage
* 算法效率 
	- 时间复杂度分析 O(n) 

# Intermediate Lessons

## Lesson 8 Convert a number to a string 整型转字符串
### 基本概念讲解
* 字符数组 String and Character Array
	- ASCII 码表
* 字符串逆序 String Reverse 
	- 带参数的宏 SWAP
* 递归 Recursive 
	- 循环和递归

## Lesson 9 Josephus ring 约瑟夫环
### 基本概念讲解
* 一维数组 Array
* 数据结构和算法 DS & AL
	- 数据驱动编程 Data-Driven
* 链表思想 

## Lesson 10 Calculate the distance between 2 point 求两个坐标点之间的距离
### 基本概念讲解
* 结构体 Struct
* 数组和结构体
* 类型声明 typedef 

## Lesson 11 Does your machine use little-endian? 判断机器存储是否小尾端
### 基本概念讲解
* 联合 Union

* 预处理符 # 


## Lesson 12 Find how many 9 in number 1 to 100 1到100有多少个9
### 基本概念讲解
* 函数 Function
	- 函数的入口和出口
* 分解和分层
	- 小即是美
* 接口设计
	- 可复用的代码

## Lesson 13 Sorry, your car is restricted today 对不起，你的车今天限行
### 基本概念讲解
* 分支语句 Switch


## Lesson 14 Is there a way out? 判断地图上某点是否有出路
### 基本概念讲解
* 数组、循环和分支
	
# Advanced Lessons

## Lesson 15 Count how many bit 1 in a number 统计一个数bit 1的个数
### 基本概念讲解
* 位操作
	- 移位 >>
	- 与 &
* 算法效率
	
## Lesson 16 Bit-Field 位域操作
### 基本概念讲解
* 位域
* 结构体的位域操作
	
## Lesson 17 How to strcpy 字符串拷贝
### 基本概念讲解
* 指针
* assert 宏


## Lesson 18 Find how many words in an artitle 统计一个文本中的单词个数
### 基本概念讲解
* 指针数组
* 状态机思想的简单应用
	- state 

## Lesson 19 Shell command parser 命令解释器
### 基本概念讲解
* 函数指针
	
* main 函数之参数 
	- argc, argv
* 进程的环境变量
	- env

## Lesson 20 RECTANGULAR and POLAR直角坐标和极坐标互换
### 基本概念讲解
* 函数指针数组
* 复杂类型声明 typedef

## Lesson 21 Is this number a float? 浮点数判别
### 基本概念讲解
* 多维数组 
* FSM 有限状态机

# Homework Projects
	
**The next 3 lessons are projects you should do it by yourself.**

## Lesson 22 Guess what number in my hand 猜数游戏
### 问题描述
猜数游戏：电脑随机产生4位数，然后用户输入4位数，电脑告诉你是?A?B，请你最后猜出电脑的4位数是多少？	
(4位数字互不重复，A表示位置和数字都对，B表示位置不对，数字对)

## Lesson 23 Five-Chess game 五子棋
### 问题描述
五子棋：在一个9x9的棋盘上通过两人对弈的形式，依次在棋盘上放置两种颜色的棋子，哪一方先让五个棋子形成一条直线（包括横、竖、对角线3个方向），即为获胜。
(实现一个计算机下棋算法，让你的同组成员无法胜出，则算你赢)

## Lesson 24 Build a simple Search Engenine 简单搜索引擎
### 问题描述
从网页文件中抓取正文文本 (例如 "\<p\>akaedu is set up in 2004.\<\/p\>" )，并搜索是否存在用户输入的关键字 akaedu，并返回相关段落正文。



