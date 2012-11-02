
#include <stdio.h>
#include <stdlib.h>

static void foo(void) __attribute__ ((constructor));
static void bar(void) __attribute__ ((destructor));

void test(void)
{
    printf("<test> at exit \n");
}

int main(int argc, char *argv[])
{	
	printf("<main> execution\n", foo);

	printf("foo == %p\n", foo);
	printf("bar == %p\n", bar);

	atexit(test);    
	exit(EXIT_SUCCESS);
}

void foo(void)
{
	printf("<foo> before main execution!\n");
}

void bar(void)
{
	printf("<bar> after main execution!\n");
}