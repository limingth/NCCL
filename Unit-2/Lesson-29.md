
## Lesson 29 - more command (more命令实现)

### 课程任务
实现Linux下 more 命令的基本功能，要求能够支持以下四个快捷键。

* j 下移一行
* k 上移一行
* 空格/f 下翻页
* b 上翻页。 

提示：可以从文件中读到的每一行动态分配行缓冲区，将缓冲区内存指针写入到一个行指针数组中，通过用户操作显示不同的区域内容。

### 参考资料
* http://zh.wikipedia.org/wiki/More_(命令)
* Linux 终端概念 http://blog.csdn.net/jifengszf/article/details/4228183
* 自己编写more命令 http://www.cnblogs.com/zhangchaoyang/articles/2293910.html

### 重要知识点
* 学习内存动态分配函数 malloc 
* 加强对于指针变量的管理和使用
* 了解Linux关于终端 tty 的配置和编程

#### 常用 API

* 内存控制函数

		calloc(); 配置内存空间
		free(); 释放原先配置的内存
		malloc(); 配置内存空间
		realloc(); 重新分配主存

