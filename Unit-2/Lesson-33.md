

## Lesson 33 - Array 动态数组实现

### 课程任务
模拟高级语言中动态数组的特性，例如 [Ruby Array](http://ruby-doc.org/core-2.0/Array.html)，用链表实现动态数组所需要的相关接口。

使用以上实现的动态数组接口，模拟 qsort 函数通过函数指针 compar 作为传入参数，完成动态数组的冒泡插入排序。

* Array.new -> array_new()
* arr.first -> array_first()
* arr.last -> array_last()
* browsers.length -> array_length()
* a.insert(2, 99) -> array_insert()
* a.delete_at(2)   -> array_delete_at()
* a.clear  -> array_clear()
* a.index("b") -> array_index()
* a.reverse!  -> array_reverse()

### API 设计

	struct node;
	typedef struct node * link;

	link array_new(void);			// return the link list head
	link array_first(link head);	// get the first node of link list
	link array_last(link head);		// get the last node of link list
	int array_length(link head);	// count the size of link list elements
	void array_insert(int index, link head);	// Inserts the given values before the element with the given index. -1 is the last element.
	void array_delete_at(int index, link head);	// Deletes the element at the specified index, returning that element, or nil if the index is out of range.
	void array_clear(link head); 	// Removes all elements from link head.
	int array_index(char data);	// Returns the index of the first object in ary such that the object is == to obj.
	link array_reverse(link head);	// Returns a new array containing self‘s elements in reverse order.	

	link array_sort(link head, int (*compar)(link n1, link n2));	// Sort the array by function pointed to compar


### 重要知识点
* 链表的生成，插入，删除，查找，逆序等操作
