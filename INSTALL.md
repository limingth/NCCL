---
layout: post
title: 构建在线学习环境
---


# 构建在线学习环境

网络课堂在线学习可以通过PC主机，也可以通过 iPhone 或者 Android 手机进行。

其中主讲老师的语音播放采用 YY 语音会议，编程演示采用 Teamviewer/WebEx 桌面共享。

目前这2个软件，都支持 iPhone 和 Android 手机的客户端安装。

(因为目前YY语音只支持Windows安装，因此还不能通过Linux主机来学习。)

## 授课平台

### YY 语音会议
* [YY语音](http://www.yy.com/)  
安装文件： <http://yydl.duowan.com/4/setup/YYSetup-5.0.0.8-zh-CN.exe>

### WebEx 桌面共享
* [WebEx](http://www.webex.com.cn/)  
安装： 在线进行，通过浏览器安装
TeamViewer 的优点在于有14天的免费试用，而且占用带宽大约是几十K，桌面分享的延迟大约是100毫秒，效果非常好。

### 其他备选工具
* [TeamViewer](http://www.teamviewer.com/zhcn/download/linux.aspx)  
安装文件：<http://www.teamviewer.com/download/version_8x/TeamViewer_Setup_zhcn.exe>   
TeamViewer 的优点在于音频和桌面共享的效果好，而且支持不限时间的免费试用，但最多允许25人同时在线参加。

* [GoMeetNow](http://cn.gomeetnow.com/)  
安装文件： <https://github.com/limingth/NCCL/blob/master/GoMeetNow.zip>  
如有问题，请自己注册下载 <http://cn.gomeetnow.com/aspx/UserObject/HostMeeting.aspx>  
GoMeetNow 的优点在于学员端无需安装，只需浏览器中打开课程地址即可，但有40分钟的免费试用时间。

* [mikogo](http://www.mikogo.net.cn/)  
下载页面：<http://www.mikogo.net.cn/download/>

## 编码环境

对于没有安装过开发环境的学员，可以通过以下网络远端编译器来运行和测试程序；

### ideone
* 网址 <http://ideone.com>  
ideone 的优点是支持代码编辑框中的Tab输入（缩进），并且支持用户的数据输入。推荐使用。

### codepad
* 网址 <http://codepad.org> 
codepad 的优点在于界面简单，使用方便，不足在于不支持数据输入，也不支持编辑框中的Tab缩进。

对于安装过Linux的学员，可以通过 vi(gedit) + gcc + makefile 来学习；

### uBuntu 下的手工安装
* sudo apt-get install vim
* sudo apt-get install gcc
* sudo apt-get install make
* sudo apt-get install libc6-dev 

## 代码管理

### GitHub 远端仓库
* github  
	- 网址 <http://github.com/>
	- 准备工作: 登陆 github.com 注册一个自己的 ID （使用常用邮箱），密码和邮箱的密码无关。

### Git for Windows 工具  
* msysgit  
	- 网址 <http://msysgit.github.com/>
	- 准备工作: 下载 msysgit ，并安装，能够启动 Git Bash，运行 git 命令
	- 安装文件: <http://msysgit.googlecode.com/files/Git-1.8.0-preview20121022.exe>

### uBuntu 下的 git 命令安装  
安装方法：sudo apt-get install git
	

### Git 基本命令介绍
* git clone
* git add
* git commit
* git push
* git pull
* git merge
* git checkout 


### Git & Github 
* Set up Git  
网址 <https://help.github.com/articles/set-up-git>

* Generating SSH Keys  
网址 <https://help.github.com/articles/generating-ssh-keys>

* Create a repo  
网址 <https://help.github.com/articles/create-a-repo>

* Now you can push your code to github and enjoy it!


#### 视频学习推荐
* Git Init  
网址 <http://happycasts.net/episodes/4>

* Github Init  
网址 <http://happycasts.net/episodes/7>

* Github Pages  
网址 <http://happycasts.net/episodes/6>

## 班级交流
* [qqlist邮件列表](http://list.qq.com/cgi-bin/qf_invite?id=b68932ed4e953f875c5881b28c5fe117556db52cc97ca23d)  
邮件列表是我们每天互相交流的重要工具。群论坛里面，有一条申请加入邮件列表的链接，请自行申请加入。  
请使用自己的常用邮箱，有关《新概念C语言》课程的参考资料，作业布置，都会通过邮件列表进行，最好是每天都能检查一下邮箱。

* QQ群 (群号：186779103  名称：新概念C语言在线学习)  
在这个群里，我们采用实名制交流，大家把群名片中的昵称改成自己的真实姓名加城市 例如 李明-北京  


### Git & GitHub 操作说明 

#### 浏览器窗口
	
	1. 使用你自己的账号，登陆 GitHub.com 
	
	2. 登陆后，右上角有你的名字，旁边有3个图标。
	
	3. 点击第1个图标，Create a New Repo
	
	4. Repository name 填写 myNCCL
	Description (optional) 填写 this is my NCCL exercise
	
	5. 选中 Initialize this repository with a README 
	
	6. 点击 Create Repository
	
	7. 然后就可以看到 myNCCL 的项目和一个 Readme 文件
	
	
#### Git Bash 窗口
	
	1. 运行 ssh -T git@github.com 看是否有 hi，yourname ，如果有则成功。如果没有则执行2-9。
	
	2. cd ~
	
	3. cd .ssh
	
	4. ssh-keygen -t rsa -C "your_email@youremail.com"
	
	5. ls
	cat *.pub
	
	6. notepad *.pub
	ctrl + a 全选
	ctrl + c 复制
	
	切换到浏览器窗口	
	7. 右上角有你的名字，旁边有3个图标。点击第2个图标，Account Settting
	左侧顺数第7个选项 SSH Keys ，点击进入 Add SSH Key
	
	填写 title: git bash
	填写 key:  ctrl + v 粘贴 (就是刚才的 .pub 文件内容)
	
	密码： github 网站的密码
	
	回到 Git Bash 窗口
	8. ctrl+c 结束 notepad
	
	9. 重新 ssh -T git@github.com ，此时应该成功。
	

#### 添加自己写的 hello.c 文件进入 myNCCL 项目中
	1. cd ~

	2.1 git config  --global user.name xxx
	2.2 git config  --global user.email  xxx@xxx.com
	2.3 (这一步不是必须要做的，如果有问题可以做) git config  --global push.default simple
	
	3.1 mkdir github
	3.2 cd github

	4. git clone git@github.com:limingth/myNCCL.git
	
	5. cd myNCCL
	5.1 edit hello.c

	6. git add hello.c
	7. git commit -a -m "just add hello.c"
	7. git push
		
	此时可以修改一下 hello.c ，然后重复 6，7 两步即可
	8. 如果要添加大量代码，可以用 git add .
	9. 如果要删除某个文件，可以用 git rm a.c
