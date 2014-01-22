
## Lesson 31 - ll (ls -l命令实现)

### 课程任务
实现Linux下 ls -l 命令的基本功能，要求能够支持以下三个参数。

* -i 在输出行中显示 inode 节点号
* -s 显示每个文件占用的块数
* -T 显示完整的时间信息，包含年月日时分秒信息


### 重要知识点
* 学习使用 Linux 系统调用 stat 函数，了解有关 struct stat 中的关键数据结构。
* 加强对结构体指针的使用，结合 Lesson 26 课的 file 命令获得关于文件系统的初步认识。
* 掌握库函数中关于 time 部分的函数接口。

### 参考资料

* `man 2 stat`

		struct stat { /* when _DARWIN_FEATURE_64_BIT_INODE is NOT defined */
		     dev_t    st_dev;    /* device inode resides on */
		     ino_t    st_ino;    /* inode's number */
		     mode_t   st_mode;   /* inode protection mode */
		     nlink_t  st_nlink;  /* number of hard links to the file */
		     uid_t    st_uid;    /* user-id of owner */
		     gid_t    st_gid;    /* group-id of owner */
		     dev_t    st_rdev;   /* device type, for special file inode */
		     struct timespec st_atimespec;  /* time of last access */
		     struct timespec st_mtimespec;  /* time of last data modification */
		     struct timespec st_ctimespec;  /* time of last file status change */
		     off_t    st_size;   /* file size, in bytes */
		     quad_t   st_blocks; /* blocks allocated for file */
		     u_long   st_blksize;/* optimal file sys I/O ops blocksize */
		     u_long   st_flags;  /* user defined flags for file */
		     u_long   st_gen;    /* file generation number */
		 };

#### 常用 API

* 重要数据结构 /usr/include/time.h

		struct tm {
		        int     tm_sec;         /* seconds after the minute [0-60] */
		        int     tm_min;         /* minutes after the hour [0-59] */
		        int     tm_hour;        /* hours since midnight [0-23] */
		        int     tm_mday;        /* day of the month [1-31] */
		        int     tm_mon;         /* months since January [0-11] */
		        int     tm_year;        /* years since 1900 */
		        int     tm_wday;        /* days since Sunday [0-6] */
		        int     tm_yday;        /* days since January 1 [0-365] */
		        int     tm_isdst;       /* Daylight Savings Time flag */
		        long    tm_gmtoff;      /* offset from CUT in seconds */
		        char    *tm_zone;       /* timezone abbreviation */
		};

* 时间函数

		time(); 取得目前的时间

		asctime(); 将时间和日期以字符串格式表示
		clock(); 确定处理器时间
		ctime(); 把日期和时间转换为字符串
		difftime(); 计算两个时刻之间的时间差
		gmtime(); 把日期和时间转换为(GMT)时间
		localtime(); 取得当地目前时间和日期
		mktime(); 将时间结构数据转换成经过的秒数
		strftime(); 将时间格式化





