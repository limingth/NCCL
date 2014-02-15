
## Lesson 33 - 动态数组实现

### 课程任务
模拟高级语言中动态数组 Array 的特性，例如 [Ruby Array](http://ruby-doc.org/core-2.0/Array.html)，用链表实现动态数组所需要的相关接口。

### 提高要求
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

### Ruby Array 学习实践
登录下面的Ruby在线编程网站 <http://www.compileonline.com/execute_ruby_online.php>

#### 输入代码

	#!/usr/local/bin/ruby -w

	puts "Hello World!";

	samples = ['a', 'c', 'd'];
	puts samples.first 
	puts samples.last
	puts samples.length

	samples.insert(1, 'b')
	print samples
	puts

	samples.insert(5, 'f')
	print samples
	puts

	puts samples.index('f')

	puts samples.at(3)

	samples.delete_at(3)
	print samples
	puts

	samples.delete_at(3)
	print samples
	puts

	samples.reverse!
	print samples
	puts

	samples.sort!
	print samples
	puts

	samples.clear
	print samples
	puts

#### 观察结果

	Executing the program....
	$ruby main.rb
	Hello World!
	a
	d
	3
	["a", "b", "c", "d"]
	["a", "b", "c", "d", nil, "f"]
	5
	d
	["a", "b", "c", nil, "f"]
	["a", "b", "c", "f"]
	["f", "c", "b", "a"]
	["a", "b", "c", "f"]
	[]

### API 设计

	struct node;
	typedef struct node * link;
	typedef link Array;
	typedef link Item;

	Array array_new(void);		// return the Array name 
	Item array_first(Array name);	// get the first Item of Array 
	Item array_last(Array name);	// get the last Item of Array
	int array_length(Array name);	// count the size of Array elements
	void array_insert(Array name, int index, char data);	// Inserts the given values before the element with the given index. -1 is the last element.
	void array_delete_at(int index, Array name);	// Deletes the element at the specified index, returning that element, or nil if the index is out of range.
	void array_clear(Array name); 	// Removes all elements from Array name.
	int array_index(char data);	// Returns the index of the first object in ary such that the object is == to obj.
	Array array_reverse(Array name);	// Returns a new array containing self‘s elements in reverse order.	

	Array array_sort(Array name, int (*compar)(Item n1, Item n2));	// Sort the array by function pointed to compar

### 重要知识点
* 链表的生成，插入，删除，查找，逆序等操作
* 链表的冒泡排序
