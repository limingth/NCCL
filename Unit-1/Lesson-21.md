## Lesson 21 Is this number a float? 浮点数判别
	/*
	 * state.c - using FSM to find (+/-)float number strings in buf
	 *
	 * Copyright (C) 2010	li ming <limingth@gmail.com>
	 *
	 * find number string such as 123, +1, -03.708 in "ab123+1--03.708"
	 *
	 */
	#include <stdio.h>

	//#define DEBUG
	#ifdef DEBUG
		#define DPRINT(fmt, args...)	printf(fmt, ##args)
	#else
		#define DPRINT(fmt, args...)	
	#endif

	/* the string buffer to deal with */
	//char buf[1024] = "ad.+-0askjf908234jsda;dfj;asd907324kjw";
	char buf[1024] = "a+..abc123-.-34aa3.4-+.3..";
	//char buf[1024] = "+";

	/* the result number string buffer to save the result */
	char numstr[32][64];

	/*
	 * get_input_type - get the input char TYPE ID
	 *
	 * 0: [a-z]
	 * 1: [+/-]
	 * 2: [0-9]
	 * 3: [.]
	 * 4: '\0' - string end
	 *
	 */
	int get_input_type( char ch )
	{
		if ( ch == '+' || ch == '-' )
			return 1;

		if ( ch >= '0' && ch <= '9' )
			return 2;

		if ( ch == '.' )
			return 3;

		if ( ch == '\0' )
			return 4;

		return 0;
	}

	/* input TYPE ID which is return from get_input_type */
	int input;

	/*
	 * FSM state 
	 *
	 * 0: (a) start state or restart state without digit 
	 * 1: (a+/+) get sign +/-
	 * 2: (+9/9) get digit before point 
	 * 3: (+9./9.) get point after digit
	 * 4: (+9.9/9.9) get digit after point
	 * 5: (+./.) get point directly
	 * -1: end state
	 *
	state transition table:
	    input
	S	0  1  2  3  4
	0	0, 1, 2, 5, -1,
	1	0, 1, 2, 5, -1,
	2	0, 1, 2, 3, -1,
	3	0, 1, 4, 5, -1,
	4	0, 1, 4, 5, -1,
	5	0, 1, 4, 5, -1,
	 *
	 */
	int state;

	/* record how many number string found */
	int counter = 0;

	int i = 0;
	int pos = 0;

	void action_save(void)
	{
	    numstr[counter][pos] = buf[i];
	    pos++;
	}

	void action_zero(void)
	{
		pos = 0;
	}

	void action_zero_save(void)
	{
		action_zero();
		action_save();
	}

	void action_found(void)
	{
		numstr[counter][pos] = '\0';
		printf( "number %d found!  -> %s \n", counter+1, numstr[counter] );
		pos = 0;
		counter++;
	}

	void action_found_save(void)
	{
		action_found();
		action_save();
	}

	void action_null(void)
	{
	}

	int state_table[6][5] = 
	{
		0, 1, 2, 5, -1,
		0, 1, 2, 5, -1,
		0, 1, 2, 3, -1,
		0, 1, 4, 5, -1,
		0, 1, 4, 5, -1,
		0, 1, 4, 5, -1,
	};

	void (*action[6][5])(void) =
	{
		action_null, action_save, action_save, action_save, action_null,
		action_zero, action_zero_save, action_save, action_save, action_zero,
		action_found, action_found_save, action_save, action_save, action_found,
		action_found, action_found_save, action_save, action_found_save, action_found,
		action_found, action_found_save, action_save, action_found_save, action_found,
		action_zero, action_zero_save, action_save, action_zero_save, action_zero,
		//action_found, action_found_save, action_save, action_found_save, action_found,
	};

	int main(void)
	{
		int new_state;
		//	printf( "please input a string : " );
		//	scanf( "%s", buf );
		printf( "your input string is: %s \n", buf );
		DPRINT( "%s\n", buf );

		i = 0;
		state = 0;
		while( state != -1 )
		{
			input = get_input_type( buf[i] );
			DPRINT( "(%d)%d \n", state, input );

			/* get new state from state transition table */
			new_state = state_table[state][input];
			DPRINT( "new state: %d \n", input );
			//getchar();

			/* call action to do something */
			action[state][input]();

			state = new_state;

			i++;
		}

		return 0;
	}


### 语法知识点
* 二维数组
* 二维函数指针数组
* 状态机编程之“机制和策略的分离”
	
### 课堂讨论
* new_state 变量是否是必须的，如果去掉程序应该怎么改？
	
### 课后练习
* C语言去注释问题。给定一个C语言的文本文件，内部包含 /*  */ 和 // 的注释，请去掉这些注释。

