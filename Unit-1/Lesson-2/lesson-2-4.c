char * str = "hello, everyone!\n";

int main(void)
{
	asm("movl $20, %%edx \n\t"
		"movl %0, %%ecx \n\t"
		"movl $1, %%ebx \n\t"
		"movl $4, %%eax \n\t"
		"int $0x80 \n\t"
		::"r"(str):"edx","ecx","ebx");

	asm("movl $42, %ebx \n\t"
		"movl $1, %eax \n\t"
		"int $0x80 \n\t");

	return 0;
}