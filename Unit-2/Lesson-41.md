
## Lesson 41 - BSearch 实现

### 课程任务
在 [《C程序设计语言》](https://www.dropbox.com/s/qer3va6rtq8o1dj/C%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80%EF%BC%88%E7%AC%AC2%E7%89%88%C2%B7%E6%96%B0%E7%89%88%EF%BC%89.pdf)书中，介绍了一个折半查找函数 binsearch()，如下所示：

	/* binsearch: find x in v[0] <= v[1] <= ... <= v[n-1] */  
	int binsearch(int x, int v[], int n)
	{
	        int low, high, mid;
	        low = 0;
	        high = n - 1;
	        while (low <= high) {
	                mid = (low+high)/2; 
	                if (x < v[mid])
	                        high = mid + 1; 
	                else if (x > v[mid])
	                        low = mid + 1;
	                else /* found match */
	                        return mid;
	        }   
	        return -1; /* no match */  
	}

请参照这个算法思想，实现标准库函数中 bsearch 函数。

	#include <stdlib.h>

	void *
	bsearch(const void *key, const void *base, size_t nel, size_t width,
			int (*compar) (const void *, const void *));

### 参考资料
* 把二分查找算法写正确需要注意的地方 <http://www.cppblog.com/converse/archive/2014/01/28/96893.html>
* 