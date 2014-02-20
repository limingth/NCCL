
## Lesson 39 - 构造符号表

### 课程任务
[符号表](http://zh.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E8%A1%A8)是一种用于语言翻译器（例如编译器和解释器）中的数据结构。

在符号表中，程序源代码中的每个标识符都和它的声明或使用信息绑定在一起，比如其数据类型、作用域以及内存地址。

参考 [一个C语言实现的哈希表](http://hi.baidu.com/thinkingroom/item/ceed1103c3d3d9e935990234)，实现对 a.out 中符号地址的查询功能。

* 提示：可以通过 nm a.out 输出符号表信息，或者通过对 a.out ELF 格式的解析获取符号表信息。

### 参考资料
* 散列表 <http://zh.wikipedia.org/wiki/哈希表>
* 散列表（哈希表）工作原理 <http://blog.csdn.net/ilibaba/article/details/3960142>
* 散列表(Hash Table)全解析 <http://blog.csdn.net/linj_m/article/details/15503241>
* 语法制导翻译 <http://web.xidian.edu.cn/ctian/files/20130527_041137.ppt>
* [《数据抽象和问题求解：C++语言描述》](http://books.google.com.hk/books?id=LniK4hrQagUC&pg=PP13&lpg=PP13&dq=%E6%95%B0%E6%8D%AE%E6%8A%BD%E8%B1%A1%E5%92%8C%E9%97%AE%E9%A2%98%E6%B1%82%E8%A7%A3&source=bl&ots=N1Mx3DwnL0&sig=4C-zNvCjDmvsFQ6dnZ0iRZb5B94&hl=zh-CN&sa=X&ei=MkIFU-KvAoeiigev24CwDw&ved=0CGYQ6AEwCA#v=onepage&q=%E6%95%B0%E6%8D%AE%E6%8A%BD%E8%B1%A1%E5%92%8C%E9%97%AE%E9%A2%98%E6%B1%82%E8%A7%A3&f=false)
