
## Lesson 32 - Bash Clone (Bash项目)

### 参考资料

* [GNU Bash 源码下载](http://ftp.gnu.org/gnu/bash/)

* [bash-4.1 源代码在线浏览](http://www.oschina.net/code/explore/bash-4.1)

* [GNU bash实现机制与源代码简析](http://www.cnblogs.com/napoleon_liu/archive/2011/04/01/2001886.html)

### Bash 项目设计

* 整个项目新建一个目录 bashclone

* 每个命令单独建一个目录，目录名就是生成的可执行文件名
    - mycp
    - cat
    - readelf
    - file

* 根目录下的主要文件
    - main.c shell.c 
    - Makefile 

* make all
  - 编译整个项目

* make test
  - 单独测试每个命令

* ./mybash 执行程序
        
        # mycp /usr/include/stdio.h stdio.h
        # cat stdio.h
        # mycp /bin/ls ls
        # readelf -a file
        # file ls
  
