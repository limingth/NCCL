
## Lesson 30 - sort (sort命令实现)

### 课程任务
实现Linux下 sort 命令的基本功能，要求能够支持以下三个参数。

* -u 在输出行中去除重复行
* -r 升序改成降序
* -n 以数值来排序

#### sort 命令运行示例

	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt 
	red
	black
	blue
	green 
	yello
	blue
	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt | sort
	black
	blue
	blue
	green 
	red
	yello
	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt | sort -u
	black
	blue
	green 
	red
	yello
	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt | sort -r
	yello
	red
	green 
	blue
	blue
	black

sort -n 效果

	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt 
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt | sort 
	1 red
	15 blue
	17 yello
	2 blue
	30 green 
	5 black
	limingth@gmail ~/Github/NCCL.codes/Lesson-30$ cat test.txt | sort -n
	1 red
	2 blue
	5 black
	15 blue
	17 yello
	30 green 

### 重要知识点
* 学习 qsort 函数，弄懂快速排序的原理
* 加强对函数指针知识点的巩固和应用
* 掌握 sort 命令的参数和常见应用场景

### 参考资料
* sort命令用法 http://roclinux.cn/?p=1350
* qsort 函数的几种用法 http://www.cnblogs.com/pang123hui/archive/2011/01/28/1947003.html





