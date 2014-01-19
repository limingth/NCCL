## Lesson 27 - sed simple (简单流处理器实现和正则表达式)

### 课程任务
* 实现 sed 命令中最简单的字符串替换功能，从标准输入 stdin 读入字符流，然后经过处理后，从标准输出 stdout 显示。
	- sed 命令例子参考 http://www.folkstalk.com/2012/01/sed-command-in-unix-examples.html

		$ echo "unix is great os. unix is opensource. unix is free os." | sed 's/unix/linux/'
		linux is great os. unix is opensource. unix is free os.

		$ echo "unix is great os. unix is opensource. unix is free os." | sed 's/unix/linux/g'
		linux is great os. linux is opensource. linux is free os.

		$ echo "unix is great os. unix is opensource. unix is free os." | sed 's/unix/linux/3'
		unix is great os. unix is opensource. linux is free os.
		
		  
* 在完成上述功能的基础上，实现正则表达式中最简单的 ^ （行首）替换功能。
	- 正则表达式学习可参考 http://learn.akae.cn/media/ch32s02.html

		$ echo "unix is great os. unix is opensource. unix is free os." | sed 's/^unix/linux/'
		linux is great os. unix is opensource. unix is free os.

		$ echo "unix is great os. unix is opensource. unix is free os." | sed 's/^unix/linux/g'
		linux is great os. unix is opensource. unix is free os.

