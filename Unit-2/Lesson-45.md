
Lesson 45 - 最长公共子序列(LCS)问题

### 课程任务

LCS：又称最长公共子序列(Longest Common Subsequences)。 其中子序列(subsequence)的概念不同于串的子串。它是一个不一定连续但按顺序取自字符串X中的字符序列。 

一个序列 S，如果分别是两个或多个已知序列的子序列，且是所有符合此条件序列中最长的，则 S 称为已知序列的最长公共子序列。

参考 [动态规划](http://zh.wikipedia.org/wiki/动态规划) ，给定2个字符串，求它们的最长公共子序列。

例如

	a = "ABCBDAB"
	b = "BDCBA"

	LCS => "BCBA"

* 提示：转移方程：

		dp[i,j] = 0                                 i=0 || j=0

		dp[i,j] = dp[i-1][j-1]+1                    i>0,j>0, a[i] = b[j]       

		dp[i,j] = max(dp[i-1][j],dp[i][j-1])        i>0,j>0, a[i] != b[j]

		a串长度为0，b串长度为0，两者的公共子序列长度为0

		若两序列的最后一个字符相同，那么公共子序列长度为去掉这最后一个字符后新生成的两个串的公共子序列长度+1

		若两序列最后一个字符不同，那么他们最大子序列的长度为c[ i - 1][j]和c[i][j-1]中较大的一个

### 参考资料
* 最长公共子序列 <http://blog.csdn.net/zmazon/article/details/8247015>
* diff 原理初探 <http://www.2maomao.com/blog/how-windiff-works/>
* Dynamic Programming <http://www.avatar.se/molbioinfo2001/dynprog/dynamic.html>
* 最长公共子序列问题 <http://babylzu.blog.163.com/blog/static/81258022008867534445/>
