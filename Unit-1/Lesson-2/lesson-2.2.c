#include <stdio.h>

extern int __executable_start;
extern int _start;

extern char etext[];
extern char edata[];

int global = 100;

int main(void)
{
	printf("hello, everyone!\n");

	printf("__executable_start= %p\n", &__executable_start);
	printf("_start = %p\n", &_start);
	printf("main = %p\n", main);
	printf("text segment end at %p\n\n", etext);

	printf("global at %p\n", &global);
	printf("data segment end at %p\n", edata);

	return 0;
}
