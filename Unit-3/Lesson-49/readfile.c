#include <stdio.h>
#include <string.h>
#include <errno.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

/* Test switch */
#define TEST 0

#define READ_LINE 4096

/*
 * read the file to buf
 * 
 * Return value: file's length
 *
 */
int read_file(const char *filename, char buf[])
{
	/* open the file */
	int fd = open(filename, O_RDONLY);
	if(fd < 0){
		fprintf(stderr,"Open %s:%s\n",filename, strerror(errno));
		exit(1);
	}
	fprintf(stdout, "Open %s Successed!\n", filename);

	/* read file to buf */
	int len = 0, n;
	while((n = read(fd, &buf[len], READ_LINE)) > 0)
		len += n;
	buf[len] ='\0';

	/* close file */
	close(fd);
	
	return len;
}


/* Test */

#if TEST

#define BUF_MAX 1024
/* main function */
int main(int argc, char *argv[])
{
	char buf[BUF_MAX];

	if(argc < 2){
		fprintf(stderr, "Usage: %s <filename>\n", argv[0]);
		exit(1);
	}
	
	int n = read_file(argv[1], buf);
	printf("%s\n", buf);
	printf("%d\n", n);
	
	return 0;
}
#endif
