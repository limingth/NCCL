/*
 * state.c - using FSM to delete comment in a C source file
 *
 * Copyright (C) 2010	li ming <limingth@akaedu.org>
 *
 * delete comment in C code of single line and multiple lines
 *
 */
#include <stdio.h>
#include <string.h>
#include <errno.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

#ifdef DEBUG
	#define DPRINT	printf
#else
	#define DPRINT	//
#endif

/* enough memory size for a whole C file < 100K */
char buf[102400];
/* record how many number string found */
int counter = 0;

int i = 0;
int pos = 0;

char *begin, *end;

void act_null(void)
{
}

void act_print(void)
{
	printf("%c", buf[i]);
}

void act_print2(void)
{
	printf("%c", *begin);
	act_print();
}

void act_mark(void)
{
	begin = buf + i;
}

void act_print_mark(void)
{
	printf("%c", *begin);
	act_mark();
}

void act_print_space(void)
{
	end = buf + i;

	while (begin != end)
	{
		if (*begin != '\n')
			printf(" ");
		else
			printf("\n");

		begin++;
	}
}

void act_end(void)
{
	printf("\n");
}

/*
 * get_input_type - get the input char TYPE ID
 *
 * 0: [a-z]
 * 1: [/]
 * 2: [*]
 * 3: [']
 * 4: ["]
 * 5: '\0' - string end
 *
 */
int get_input_type( char ch )
{
	if (ch == '/')
		return 1;
	else if (ch == '*')
		return 2;
	else if (ch == '\'')
		return 3;
	else if (ch == '\"')
		return 4;
	else if (ch == '\0')
		return 5;

	return 0;
}

/* input TYPE ID which is return from get_input_type */
int input;


/*
 * FSM state 
 *
 * 0: (a) start state or restart state without digit 
 * 1: (/) get / 
 * 2: (/ *) get / and *
 * 3: (/ * *) get / and * and *
 * 4: (') get '
 * 5: (") get "
 * 6: (' ') get ' and '
 * -1: end state
 *
 */
int state;

/* state transition table */
int state_table[7][6] = 
{// a  /  *  '  "  \0 
	0, 1, 0, 4, 5, -1,
	0, 1, 2, 4, 5, -1,
	2, 2, 3, 2, 2, -1,
	2, 0, 3, 2, 2, -1,
	4, 4, 4, 6, 4, -1,
	5, 5, 5, 5, 0, -1,
	0, 1, 0, 0, 0, -1,
};

void (*action[7][6]) (void) = 
{
	act_print,	act_mark,		act_print,	act_print,	act_print,	act_end,
	act_print2, act_print_mark, act_null,	act_print2, act_print2, act_end,
	act_null,	act_null,		act_null,	act_null,	act_null,	act_end,
	act_null,	act_print_space,act_null,	act_null,	act_null,	act_end,
	act_print,	act_print,		act_print,	act_print,	act_print,	act_end,
	act_print,	act_print,		act_print,	act_print,	act_print,	act_end,
	act_print,	act_mark,		act_print,	act_print,	act_print,	act_end,
};

int main(int argc, char *argv[])
{
	int new_state;
	//	printf( "please input a string : " );
	//	scanf( "%s", buf );

	if(argc < 2){
		fprintf(stderr, "Usage: %s <filename>\n", argv[0]);
		exit(1);
	}
	
	int n = read_file(argv[1], buf);
	printf("%s\n", buf);
	printf("%d bytes read from %s \n", n, argv[1]);

	DPRINT( "your input string is: %s \n", buf );
	printf("-------------------------------------------\n");

	i = 0;
	state = 0;
	while( state != -1 )
	{
		input = get_input_type( buf[i] );
		DPRINT( "(%d)%d:0x%x \n", state, input, buf[i] );

		/* get new state from state transition table */
		new_state = state_table[state][input];
		DPRINT( "new state: %d \n", input );
		//getchar();

		/* call act to do something */
		action[state][input]();

		state = new_state;

		i++;
	}

	return 0;
}
