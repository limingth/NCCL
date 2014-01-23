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

### 参考资料
* [sed和正则表达式](http://learn.akae.cn/media/ch32s03.html)
* [文本处理流编辑器sed命令用法](http://www.1987.name/306.html)
* [字符串库函数范例代码](http://www.tutorialspoint.com/c_standard_library/string_h.htm)

### 重要知识点
* 字符串的分割 strtok
	- s/unix/linux
* 字符串的查找 strstr
* 字符串的拼接 strcat

#### 常用 API
	
	strlen(); 计算字符串长度
	strcmp(); 比较字符串
	strcpy(); 拷贝字符串
	strcat(); 连接两字符串

	strchr(); 查找字符串中第一个出现的指定字符
	strstr(); 在一字符串中查找指定的字符串
	strspn(); 返回字符串连续不含指定字符的字符数
	strtok(); 分割字符串

	strpbrk(); 查找字符串中第一个出现的指定字符
	strrchr(); 查找字符串中最后出现的指定字符
	strcspn(); 返回字符连续不含指定字符的字符数
	strcoll(); 采用目前区域的字符排列比较字符串

	strncmp(); 比较2个字符串的前N个字符
	strncpy(); 拷贝字符串
	strncat(); 连接两字符串
	
	strerror(); 返回错误原因的描述字符串
	strxfrm(); 转换字符串
