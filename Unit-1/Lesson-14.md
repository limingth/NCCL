## Lesson 14 Is there a way out? 判断地图上某点是否有出路
	#include <stdio.h>

	/* define chessboard size */
	#define ROW  10
	#define COL  10

	/* define chessboard using matrix */
	int chessboard[ROW][COL] = { {0} };

	void init(int board[ROW][COL])
	{
		int i, j;
		
		srand(time(NULL));
		
		for (i = 0; i < ROW; i++) 	
			for (j = 0; j < COL; j++) 		
				board[i][j] = rand() % 2;
				
		return;
	}

	/* display chessboard using printf */
	void print(int board[ROW][COL])
	{
		int i, j;

		printf("\n");
		printf("  ");

		for (j = 0; j < COL; j++)
			printf(" %d", j);
		printf("\n");

		printf(" -");
		for (j = 0; j < COL; j++)
			printf(" -");

		printf("\n");
		for (i = 0; i < ROW; i++) {
			printf("%d| ", i);
			for (j = 0; j < COL; j++) {
				printf("%d ", board[i][j]);
			}
			printf("\n");
		}

		printf("\n");
	}

	/* test (x, y) is valid before put chess */
	int onboard(int x, int y)
	{
		if (x >= ROW || x < 0)
			return 0;

		if (y >= COL || y < 0)
			return 0;

		return 1;
	}

	int check(int x, int y)
	{
		int i = 0, j = 0;
		int counter = 1;	
		int nx, ny;		// next x y

		// up, down, left, right, 
		int dirx[4] = { -1, 1, 0, 0 };
		int diry[4] = { 0, 0, -1, 1 };

		counter = 0;
		
		// 4 directions
		for (i = 0; i < 4; i++)
		{
			nx = x;
			ny = y;
			
			nx += dirx[i];
			ny += diry[i];
			
			// if (nx, ny) is out of board, then continue;
			if (!onboard(nx, ny))
				continue;
			
			if (chessboard[nx][ny] == 0)
			{
				counter++;
				printf("there is %d direction (%d, %d) out!\n", counter, dirx[i], diry[i]);
			}
		}

		return counter;
	}

	int main(int argc, char *argv[])
	{
		int x = 4, y = 4;
		int ways = 0;
		
		print(chessboard);
		init(chessboard);	
		print(chessboard);

		printf("please input a point position: ");
		scanf("%d %d", &x, &y);
			
		ways = check(x, y);
		printf("Total is %d way out!\n", ways);
		
		return 0;
	}


### 语法知识点
* 二维数组 a[][]
* 随机函数 rand()

### 课堂讨论
* 
* 

### 课后练习
* 已知2012.1.1 是星期日，请打印出全年12个月的月历。
