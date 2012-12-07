## Lesson 11 Calculate the distance between 2 point 求两个坐标点之间的距离
	#include <stdio.h>
	#include <math.h>

	struct point
	{
		int x;
		int y;
	};

	typedef struct point point_t;

	double calc_distance(point_t p1, point_t p2)
	{
		int dx = p1.x - p2.x;
		int dy = p1.y - p2.y;
		
		return sqrt(dx * dx + dy * dy);
	}

	int main(int argc, char * argv[])
	{
		double length;
		
		point_t p1;
		point_t p2 = {200, 100};
		
		p1.x = 100;
		p1.y = 200;
		
		length = calc_distance(p1, p2);
		
		printf("length = %f\n", length);

		return 0;
	}
	
### 扩展用法
	struct a {
		int b;
		int c;
	};

	struct a a1 = {
		.b = 1,
		.c = 2
	};

	struct a a1 = {
		b : 1,
		c : 2
	};

	struct a a1 = {1, 2};

### 经典范例
	/* linux/drivers/char/raw.c */
	static const struct file_operations raw_fops = {
		.read		= do_sync_read,
		.aio_read	= generic_file_aio_read,
		.write		= do_sync_write,
		.aio_write	= blkdev_aio_write,
		.fsync		= blkdev_fsync,
		.open		= raw_open,
		.release	= raw_release,
		.unlocked_ioctl = raw_ioctl,
		.llseek		= default_llseek,
		.owner		= THIS_MODULE,
	};

	static const struct file_operations raw_ctl_fops = {
		.unlocked_ioctl = raw_ctl_ioctl,
	#ifdef CONFIG_COMPAT
		.compat_ioctl	= raw_ctl_compat_ioctl,
	#endif
		.open		= raw_open,
		.owner		= THIS_MODULE,
		.llseek		= noop_llseek,
	};
	
	
### 知识点
* 结构体 struct
	- 结构体的初始化 
* 传结构体参数
	- 整体赋值(复制)
* typedef 类型定义

### 课堂讨论
* 在 calc_distance 调用时传入的 p1 ，和在 函数实现中出现的 p1 是不是同一个 p1？
* 如果结构体的变量是一个字符数组，那么结构体的赋值，是否会进行一次字符串拷贝？

### 课后练习
* 给定一个结构体 point_t 的数组，求出这一组点中，离原点距离最远的那个点。
* 求出上面这一组点中，距离最远的2个点以及它们之间的距离。
* 有5个学生，每个学生有3门课的成绩，从键盘输入以上数据（包括学号，姓名，三门课成绩），请计算出每位学生的总分和平均成绩，并打印输出。

### 参考资料
* C99 中关于结构体的初始化方法
	- <http://blog.csdn.net/adaptiver/article/details/7494081>
