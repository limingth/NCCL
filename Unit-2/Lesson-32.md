
## Lesson 32 - Bash Clone (Bash项目)

### 参考资料

* [GNU Bash 源码下载](http://ftp.gnu.org/gnu/bash/)

* [bash-4.1 源代码在线浏览](http://www.oschina.net/code/explore/bash-4.1)

* [GNU bash实现机制与源代码简析](http://www.cnblogs.com/napoleon_liu/archive/2011/04/01/2001886.html)

### Bash 项目设计

* 整个项目新建一个目录 bashclone

* 每个命令单独建一个目录，目录名就是生成的可执行文件名
    - mycp
    - readelf
    - sed
    - math
    - more
    - sort
    - ll

* 根目录下的主要文件
    - main.c shell.c 
    - Makefile 

* make all
  - 编译整个项目

* make test
  - 单独测试每个命令

* ./mybash 执行程序
        
	limingth@gmail ~/Github/NCCL.codes/Lesson-32$ ./bashclone 
	demo argc & argv 
	NCCL# mycp /usr/include/stdio.h stdio.h

	NCCL# readelf shell.o
	n = 1
	HSIZE = 48
	type = 1
	Type: REL

	NCCL# readelf bashclone
	n = 1
	HSIZE = 48
	type = 2
	Type: EXEC

	NCCL# sed 's/unix/linux'
	I love unix, unix is a great os. unix is better than linux.
	I love linux', unix is a great os. unix is better than linux.

	NCCL# sed 's/unix/linux/g'
	I love unix, unix is a great os. unix is better than linux.
	I love linux', linux is a great os. linux is better than linux.

	NCCL# sed 's/unix/linux/3'
	I love unix, unix is a great os. unix is better than linux.
	I love unix', unix is a great os. linux is better than linux.

	NCCL# math sin 1
	result = 0.841471

	NCCL# math sqrt 2
	result = 1.414214

	NCCL# more test.txt
	lines = 7
	w = 89, h = 27
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	15 blue

	NCCL# sort test.txt
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	15 blue
	--- after sort ---
	1 red
	15 blue
	15 blue
	17 yello
	2 blue
	30 green 
	5 black

	NCCL# sort test.txt -n
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	15 blue
	--- after sort ---
	1 red
	2 blue
	5 black
	15 blue
	15 blue
	17 yello
	30 green 

	NCCL# sort test.txt -u
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	15 blue
	--- after sort ---
	1 red
	2 blue
	5 black
	15 blue
	17 yello
	30 green 

	NCCL# sort test.txt -r
	1 red
	5 black
	15 blue
	30 green 
	17 yello
	2 blue
	15 blue
	--- after sort ---
	5 black
	30 green 
	2 blue
	17 yello
	15 blue
	1 red

	NCCL# ll test.txt
	Access mode: 0100644
	file uid = limingth
	file size = 56
	file last modify mtime = Sat Jan 25 00:12:24 2014
	The time is 01 25 00:12:24 2014

	NCCL# ll test.txt -i
	file st_ino = 16128001

	NCCL# ll test.txt -s
	file st_blocks = 8

	NCCL# ll test.txt -T
	The time is 01 25 00:12:24 2014

	 
