## Lesson 13 Sorry, your car is restricted today 对不起，你的车今天限行
	#include <stdio.h>
	#include <string.h>

	enum 
	{ 
		MONDAY=1, 
		TUESDAY, 
		WEDNESDAY, 
		THURSDAY, 
		FRIDAY,
		SATURDAY,
		SUNDAY
	};

	int is_restricted(int num, int today)
	{
		int ret;
		
		switch (num)
		{
			case 0:
			case 5:
				ret = (today == MONDAY) ? 1 : 0;
				break;
				
			case 1:
			case 6:
				ret = (today == TUESDAY) ? 1 : 0;
				break;
				
			case 2:
			case 7:
				ret = (today == WEDNESDAY) ? 1 : 0;
				break;
				
			case 3:
			case 8:
				ret = (today == THURSDAY) ? 1 : 0;
				break;
				
			case 4:
			case 9:
				ret = (today == FRIDAY) ? 1 : 0;
				break;	
				
			default:	
				ret = 0;
				break;	
		}			

		return ret;
	}

	int main(int argc, char *argv[])
	{
		char car_num_str[8] = "N2LG20";
		int tail_num;
		int result;
		
		printf("Please input your car number : \n");
		scanf("%s", car_num_str);
		
		printf("Your car number is <%s> \n", car_num_str);
		tail_num = car_num_str[strlen(car_num_str)-1] - '0';

		printf("the tail number is %d\n", tail_num);
		printf("Today is %s\n", __DATE__);
		
		result = is_restricted(tail_num, MONDAY);
		printf("Total your car is %s \n", result? "restricted" : "permitted");
		
		return 0;
	}

### 语法知识点
* 枚举 enum
* 分支语句 switch-case