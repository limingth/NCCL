
## Lesson 37 - 词频统计器

### 课程任务
链表的每个节点可以有一个后继，而二叉树（Binary Tree）的每个节点可以有两个后继。

排序二叉树（BST，Binary Search Tree）具有这样的性质：

对于二叉树中的任意节点，如果它有左子树或右子树，则该节点的数据成员大于左子树所有节点的数据成员，且小于右子树所有节点的数据成员。

使用排序二叉树这种数据结构，统计一个文本文件中所有英文字母的出现次数，然后按出现次数排序并打印输出。简化起见，字母不区分大小写。

### 提高要求
统计文本中英文单词的出现次数，并使用 [tree 树形打印软件](https://www.essex.ac.uk/linguistics/external/clmt/latex4ling/trees/tree/tree.tar)，打印上题中生成的二叉树。

### 重要知识点
* 空二叉树 vs 满二叉树 vs 完全二叉树
* 平衡二叉树 和 排序二叉树
* 二叉树的前序（Pre-order），中序（In-order）和后序（Post-order）遍历。
* 前序和中序遍历的结果合在一起可以唯一确定二叉树的形态，也就是说根据遍历结果可以构造出二叉树。

### 参考资料
* 二叉树的基本概念 <http://learn.akae.cn/media/ch26s02.html#id2846120>
* The `Tree' preprocessor <https://www.essex.ac.uk/linguistics/external/clmt/latex4ling/trees/tree/>

