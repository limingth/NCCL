
## Lesson 26 - ELF Header Parser (ELF文件头分析器实现)

### 课程任务
完成对 ELF 格式文件头(ELF Header)的读取，实现 readelf -a 的功能。

	$ readelf -a max.o 
	ELF Header:
	  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00 
	  Class:                             ELF32
	  Data:                              2's complement, little endian
	  Version:                           1 (current)
	  OS/ABI:                            UNIX - System V
	  ABI Version:                       0
	  Type:                              REL (Relocatable file)
	  Machine:                           Intel 80386
	  Version:                           0x1
	  Entry point address:               0x0
	  Start of program headers:          0 (bytes into file)
	  Start of section headers:          200 (bytes into file)
	  Flags:                             0x0
	  Size of this header:               52 (bytes)
	  Size of program headers:           0 (bytes)
	  Number of program headers:         0
	  Size of section headers:           40 (bytes)
	  Number of section headers:         8
	  Section header string table index: 5

### 预备知识

* [ELF文件简介](http://learn.akae.cn/media/ch18s05.html)

* [elf文件格式分析](http://blog.csdn.net/wu5795175/article/details/7657580)

* [格式化I/O函数](http://learn.akae.cn/media/ch25s02.html#id2832755)


### readelf 命令源码实现

* [readelf.h 头文件参考](http://www.oschina.net/code/explore/freebsd/contrib/file/readelf.h)

* [readelf.c 源文件参考](http://www.oschina.net/code/explore/freebsd/contrib/file/readelf.c)
