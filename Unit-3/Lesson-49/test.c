#include <stdio.h>
/*
 * state.c - using FSM to find (+/-)number strings in buf
 *
 * Copyright (C) 2010	li ming <limingth@akaedu.org>
 *
 *//*8123*///

/* the string buffer to deal with */
char ch = '\''/*test* /00000*/;	char buf[1024] = "abc /*test*/ 1234";

/* the result number string buffer to save the result */
char cc = '\"'/*abc*/; /*test* /222*/  

