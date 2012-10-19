NCCL - New Concept C Language
=============================

please use <http://codepad.org/> to run/test these C programs!

# Unit One
## Lesson 1 [What is a simplest C program?](NCCL/blob/master/Unit-1/Lesson-1.md) 最简单的C程序

## Lesson 2 [Let's say hello to world](NCCL/blob/master/Unit-1/Lesson-2.md) 打印输出

## Lesson 3 [Count how many fingers do you have?](NCCL/blob/master/Unit-1/Lesson-3.md) 循环打印

## Lesson 4 [Judge a number odd or even](NCCL/blob/master/Unit-1/Lesson-4.md) 判断奇偶

## Lesson 5 [Summarize all numbers from 1 to 100](NCCL/blob/master/Unit-1/Lesson-5.md) 从1加到100求和

## Lesson 6 [Print 9*9 multiplication table](NCCL/blob/master/Unit-1/Lesson-6.md) 乘法表

## Lesson 7 [Find a max prime number within 100](NCCL/blob/master/Unit-1/Lesson-7.md) 求100以内的最大素数

## Let's have a break here!

## Lesson 8 Josephus ring (约瑟夫环)
* 语法知识点
	- 数组 array
	- 数据驱动编程
	- 复杂逻辑训练

## Lesson 9 Find how many 9 in number 1 to 100 (1到100有多少个9)
* 语法知识点
	- 函数设计 function
	- 逻辑分解

## Lesson 10 Calculate the distance between 2 point (求两个坐标点之间的距离)
* 语法知识点
	- 结构体 struct
	- 结构体传参数

## Lesson 11 Does your machine use little-endian? (判断机器存储是否小尾端)
* 语法知识点
	- 联合 union
	- 字符数组类型 char buf[4]
	- 存储格式 big/little endian	

## Lesson 12 Sorry, your car is restricted today (对不起，你的车今天限行)
* 语法知识点
	- 枚举 enum
	- 分支语句 switch-case

## Lesson 13 Is there a way out? (判断地图上某点是否有出路)
* 语法知识点
	- 二维数组 a[][]
	- 随机函数 rand()
	
## Lesson 14 Convert a number to a string (整型转字符串)
* 语法知识点
	- 进制表示 oct, dec, hex
	- 三元表达式 a > b ? a : b
	- 字符串逆序 reverse()
	- 字符串库函数 itoa 
	
## Let's have a break here!

## Lesson 15 Count how many bit 1 in a number (统计一个数二进制表示中1的个数)
* 语法知识点
	- 位操作 &, |, ~, ^
	- 优化算法效率 <http://hi.baidu.com/bobchennan/item/169952dc515045e4795daa10>
	
## Lesson 16 Bit-Field (位域操作)
* 语法知识点
	- 位域	
	
## Lesson 17 My printf (我的printf实现)
* 语法知识点
	- 指针
	- 栈帧
	- printf(fmt, ...)

## Lesson 18 Find how many words in an artitle (统计一个文本中的单词个数)
* 语法知识点
	- 指向指针的指针
	- char * strtok_r(char * s, const char * delim, char **saveptr);
	- 可重入和不可重入函数

## Lesson 19 Shell command parser (命令解释器)
* 语法知识点
	- 指针数组
	- main(argc, argv)

## Lesson 20 Install IRQ handler (安装中断处理程序)
* 语法知识点
	- 函数指针

## Lesson 21 RECTANGULAR and POLAR(直角坐标和极坐标互换)
* 语法知识点
	- 函数指针数组
	- <http://akaedu.github.com/book/ch23s08.html>

## Let's have a break here! 
## The next 3 lessons are projects you should do it by yourself.

## Lesson 22 Guess what number in my hand (猜数游戏)
	猜数游戏：电脑随机产生4位数，然后用户输入4位数，电脑告诉你是?A?B
	请你最后猜出电脑的4位数是多少？	
	(A表示位置和数字都对，B表示位置不对，数字对)

* 语法知识点
	- 基本输入输出
	- 字符串转整数
	- 一维数组
	- while/for/if/else/break
	- 函数设计
	- 二层循环
	- 位操作

## Lesson 23 Five-Chess game (五子棋)
	棋子分为黑白两色，棋盘为15×15，棋子放置于棋盘线交叉点上。
	两人对局，各执一色，轮流下一子，先将横、竖或斜线的5个或5个以上同色棋子连成不间断的一排者为胜。

* 语法知识点
	- 二维数组

### 参考思路

	#step 1: 画棋盘 10 * 10,  =0
		复习 for 循环 (二重 for 循环)
		复习 printf 打印 %d 的用法
	
	#step 2: 落子 =1, =2
		复习 数组变量，复习 scanf 获取用户输入，&x &y 取地址符	
	
	#step 3: 判断选手 who, step % 2 + 1
		复习 ++ 自增运算符，复习 % 取余(模)运算符
	
	#step 4: 判断落子位置是否合理 is_valid && is_empty
		复习 逻辑与，逻辑或，逻辑取反
	
	#step 5: 如何自动输入？ 
		编辑一个 step.txt 文件，记录两个人的落子位置
		运行时，使用重定向符 <  
	
		举例： ./fivechess < step.txt
	
	#step 6: 判断输赢 is_win
		从 第 0 行开始，第 0 列 到 第 4 列 一共是 5 个位置 a, b, c, d, e
		如果 a 位置的值 == who , 则 计数器加 1 : counter++
		对这 5 个位置 来一个 for 循环，依次判断，
		
			for (j = 0; j < 5; j++)
				chessboard[0][j] == who ?
		
	
		如果for循环结束的时候，counter == 5 ，则说明 win 赢了，否则 则 return 0	;
	
		把上述功能实现为一个函数 check_right(int x, int y, int who);
		完成判别向右方向是否有 5 子连珠的功能，从 x, y 这个位置向右看5个子，是否都是 who 这个人
	
		然后对棋盘二维数组里面的每一个 x, y 位置，进行循环判断，如果其中有一个位置成功，则返回成功1
		如果所有位置都判别完了，但没有返回1，则最后就返回失败 0
	
		根据上面的办法，类似实现其他3个方向的操作： 向下，向右下，向左下 斜线方向 的判别
		check_down(int x, int y, int who);
		check_down_right(int x, int y, int who);
		check_down_left(int x, int y, int who);
	
		如果对于二维棋盘的每一个点，按照 4 个方向都进行一次判别，其中有一个方向成功，则返回成功1
		如果4个方向都没有成功，则取下一个点，再按照这4个方向进行判别，直到所有的点的所有的方向都判别完毕。


## Lesson 24 Hyperlink analysis (超链接分析器)
	给定一个 html 文件，找出其中所有的超链接 URL

* 语法知识点
	- 指针
	- 指针数组
	- 字符串匹配算法，分析协议帧头帧尾
	- 输入输出重定向，获取文件内容

# Unit Two
## Lesson 25 
## Lesson 26 
## Lesson 27 
## Lesson 28 
## Lesson 29 
## Lesson 30 
## Lesson 31 
## Lesson 32 
## Lesson 33 
## Lesson 34 
## Lesson 35 
## Lesson 36 
## Lesson 37 
## Lesson 38 
## Lesson 39 
## Lesson 40 
## Lesson 41 
## Lesson 42 
## Lesson 43 
## Lesson 44 
## Lesson 45 
## Lesson 46 
## Lesson 47 
## Lesson 48 

# Unit Three
## Lesson 49 
## Lesson 50 
## Lesson 51 
## Lesson 52 
## Lesson 53 
## Lesson 54 
## Lesson 55 
## Lesson 56 
## Lesson 57 
## Lesson 58 
## Lesson 59 
## Lesson 60 
## Lesson 61 
## Lesson 62 
## Lesson 63 
## Lesson 64 
## Lesson 65 
## Lesson 66 
## Lesson 67 
## Lesson 68 
## Lesson 69 
## Lesson 70 
## Lesson 71 
## Lesson 72 

# Unit Four
## Lesson 73 
## Lesson 74 
## Lesson 75 
## Lesson 76 
## Lesson 77 
## Lesson 78 
## Lesson 79 
## Lesson 80 
## Lesson 81 
## Lesson 82 
## Lesson 83 
## Lesson 84 
## Lesson 85 
## Lesson 86 
## Lesson 87 
## Lesson 88 
## Lesson 89 
## Lesson 90 
## Lesson 91 
## Lesson 92 
## Lesson 93 
## Lesson 94 
## Lesson 95 
## Lesson 96 

