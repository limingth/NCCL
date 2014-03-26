
## Lesson 44 - KMP 算法实现

### 课程任务

参考 [Knuth-Morris-Pratt 字符串查找算法](http://zh.wikipedia.org/wiki/%E5%85%8B%E5%8A%AA%E6%96%AF-%E8%8E%AB%E9%87%8C%E6%96%AF-%E6%99%AE%E6%8B%89%E7%89%B9%E7%AE%97%E6%B3%95)，实现字符串查找的 KMP 算法。

重要结论：
* 当比较过程中发生不匹配时，不需要把搜索位置移回到已经比较过的位置，可以根据前面比较过字符中所包含的部分匹配信息(partial match)，向后移动较多位置，从而提高比较效率。
* 部分匹配表的作用就是计算向后移动的位数=已匹配的字符数-对应的部分匹配值
* 最后一个元素的部分匹配值为0，表示找到一个完全匹配，跳过整个匹配字符串继续向后搜索。
* 部分匹配的本质就是字符串的头部和尾部会有重复，重复部分的长度等于最长的前缀后缀共有元素长度，每次不匹配时需要向后移动的长度就是要确保这个匹配（即前缀和后缀的最多共有元素产生相同比较）能够发生。

### 参考资料
* 字符串匹配的KMP算法 <http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html>
* 字符串匹配的Boyer-Moore算法 <http://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html>
* Knuth-Morris-Pratt string matching <http://www.ics.uci.edu/~eppstein/161/960227.html>
* Knuth-Morris-Pratt (KMP) String Search Algorithm source code <http://www.cprogramming.com/snippets/source-code/knuthmorrispratt-kmp-string-search-algorithm>
