
## Lesson 25 - mycp (cp命令实现)

### 课程任务
完成 Linux 下的 cp 命令，实现文件的复制功能。

#### cp 命令格式

	NAME
	     cp -- copy files

	SYNOPSIS
	     cp source_file target_file


### 预备知识

* [文件的基本概念](http://learn.akae.cn/media/ch25s02.html)

* [C标准函数库](http://zh.wikipedia.org/zh-cn/C%E6%A8%99%E6%BA%96%E5%87%BD%E5%BC%8F%E5%BA%AB)

* [Standard C 语言标准函数库速查](http://ganquan.info/standard-c/)

* [The C Library Reference Guide](http://www.acm.uiuc.edu/webmonkeys/book/c_guide/)

### 重要知识点

* FILE struct

		typedef struct __sFILE {
			unsigned char *_p;      /* current position in (some) buffer */
			int     _r;             /* read space left for getc() */
			int     _w;             /* write space left for putc() */
			short   _flags;         /* flags, below; this FILE is free if 0 */
			short   _file;          /* fileno, if Unix descriptor, else -1 */
			struct  __sbuf _bf;     /* the buffer (at least 1 byte, if !NULL) */
			int     _lbfsize;       /* 0 or -_bf._size, for inline putc */

			/* operations */
			void    *_cookie;       /* cookie passed to io functions */
			int     (*_close)(void *);
			int     (*_read) (void *, char *, int);
			fpos_t  (*_seek) (void *, fpos_t, int);
			int     (*_write)(void *, const char *, int);

			/* separate buffer for long sequences of ungetc() */
			struct  __sbuf _ub;     /* ungetc buffer */
			struct __sFILEX *_extra; /* additions to FILE to not break ABI */
			int     _ur;            /* saved _r when _r is counting ungetc data */

			/* tricks to meet minimum requirements even when malloc() fails */
			unsigned char _ubuf[3]; /* guarantee an ungetc() buffer */
			unsigned char _nbuf[1]; /* guarantee a getc() buffer */

			/* separate buffer for fgetln() when line crosses buffer boundary */
			struct  __sbuf _lb;     /* buffer for fgetln() */

			/* Unix stdio files get aligned to block boundaries on fseek() */
			int     _blksize;       /* stat.st_blksize (may be != _bf._size) */
			fpos_t  _offset;        /* current lseek offset (see WARNING) */
		} FILE;

* stdio/stdout/stderr

		#define stdin   __stdinp
		#define stdout  __stdoutp
		#define stderr  __stderrp

		extern FILE *__stdinp;
		extern FILE *__stdoutp;
		extern FILE *__stderrp;

* 两个常用的宏定义

		#define EOF     (-1)
		#define NULL	((void *)0)

* 几个常见的 typedef 
	* size_t 
	* fpos_t
	* va_list

#### 常用 API

	fopen(); 打开文件
	fclose(); 关闭一个流。

	feof(); 检测文件结束符
	fread(); 从文件流读取数据
	fwrite(); 将数据写至文件流
	fprintf(); 格式化输出数据至文件
	fscanf(); 格式化字符串输入
	fflush(); 更新缓冲区

	fgetc(); 由文件中读取一个字符
	fgets(); 文件中读取一字符串
	fputc(); 将一指定字符写入文件流中
	fputs(); 将一指定的字符串写入文件内

	fseek(); 移动文件流的读写位置
	fsetpos(); 定位流上的文件指针
	fgetpos(); 移动文件流的读写位置
	ftell(); 取得文件流的读取位置
	rewind(); 重设读取目录的位置为开头位置

	fileno(); 获取文件描述符
	ferror(); 检查流是否有错误

	freopen(); 打开文件
	remove(); 删除文件
	rename(); 更改文件名称或位置
	tmpfile(); 以wb+形式创建一个临时二进制文件
	tmpnam(); 产生一个唯一的文件名

### mycp 命令实现

* [系统调用实现参考](http://blog.csdn.net/buaa_shang/article/details/9146793)

* [标准库实现参考](http://book.51cto.com/art/200903/114931.htm)

