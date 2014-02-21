
## Lesson 42 - QSort 实现

### 课程任务

快速排序采用了一种分治策略，学术上称之为分治法（Divide-and-Conquer Method）。

分治的基本思想是将原问题分解成若干个规模更小但是结构跟原问题相似的子问题。递归的解决这些子问题，然后将这些子问题的解合并为原问题的解。

在 [《C程序设计语言》](https://www.dropbox.com/s/qer3va6rtq8o1dj/C%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80%EF%BC%88%E7%AC%AC2%E7%89%88%C2%B7%E6%96%B0%E7%89%88%EF%BC%89.pdf)书中，介绍了一个快速排序函数 qsort()，如下所示：

	/* swap: interchange v[i] and v[j] */ 
	void swap(int v[], int i, int j)
	{
		int temp;
		temp = v[i]; 
		v[i] = v[j]; 
		v[j] = temp;
	}

	/* qsort: sort v[left]...v[right] into increasing order */ 
	void qsort(int v[], int left, int right)
	{
		int i, last;
		void swap(int v[], int i, int j);
		if (left >= right) /* do nothing if array contains */ 
			return; /* fewer than two elements */

		swap(v, left, (left + right)/2); /* move partition elem */ 
		last = left; /* to v[0] */
		for (i = left + 1; i <= right; i++) /* partition */
			if (v[i] < v[left]) 
				swap(v, ++last, i);
		swap(v, left, last); 
		qsort(v, left, last-1); 
		qsort(v, last+1, right);
		/* restore partition elem */
	}

请参照这个算法思想，实现标准库函数中 qsort 函数。

	#include <stdlib.h>

	void
	qsort(void *base, size_t nel, size_t width,
			int (*compar)(const void *, const void *));

### 参考资料
* 快速排序 <http://blog.csdn.net/wzy_1988/article/details/8043168>
