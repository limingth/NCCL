# 构建在线学习环境

网络课堂在线学习可以通过PC主机，也可以通过 iPhone 或者 Android 手机进行。

其中主讲老师的语音播放采用 YY 语音会议，编程演示采用 GoMeetNow 桌面共享。

目前这2个软件，都支持 iPhone 和 Android 手机的客户端安装。

(因为目前YY语音只支持Windows安装，因此还不能通过Linux主机来学习。)

## 授课平台

### YY 语音会议
* [YY语音](http://www.yy.com/)  
安装文件： <http://yydl.duowan.com/4/setup/YYSetup-5.0.0.8-zh-CN.exe>

### GoMeetNow 桌面共享
* [GoMeetNow](http://cn.gomeetnow.com/)  
安装文件： <http://cn.image.gomeetnow.com/GoMeetNow.zip>  
GoMeetNow 的优点在于学员端无需安装，只需浏览器中打开课程地址即可，但有40分钟的免费试用时间。

### 其他工具
* [TeamViewer](http://www.teamviewer.com/zhcn/download/linux.aspx)  
安装文件：<http://www.teamviewer.com/download/version_8x/TeamViewer_Setup_zhcn.exe>   
TeamViewer 的优点在于音频和桌面共享的效果好，而且支持不限时间的免费试用，但最多允许25人同时在线参加。

* [mikogo](http://www.mikogo.net.cn/)  
下载页面：<http://www.mikogo.net.cn/download/>

## 编码环境

对于没有安装过开发环境的学员，可以通过以下网络远端编译器来运行和测试程序；

### ideone
* <http://ideone.com>  
ideone 的优点是支持代码编辑框中的Tab输入（缩进），并且支持用户的数据输入。推荐使用。

### codepad
* <http://codepad.org> 
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
<http://github.com/>

### Git for Windows 工具  
* msysgit
<http://msysgit.github.com/>

安装文件：<http://msysgit.googlecode.com/files/Git-1.8.0-preview20121022.exe>

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
<https://help.github.com/articles/set-up-git>

* Generating SSH Keys
<https://help.github.com/articles/generating-ssh-keys>

* Create a repo  
<https://help.github.com/articles/create-a-repo>

* Now you can push your code to github and enjoy it!


#### 视频学习推荐
* Git Init  
<http://happycasts.net/episodes/4>

* Github Init  
<http://happycasts.net/episodes/7>

* Github Pages  
<http://happycasts.net/episodes/6>

## 班级交流
* [qqlist邮件列表](http://list.qq.com/cgi-bin/qf_invite?id=b68932ed4e953f875c5881b28c5fe117556db52cc97ca23d)  
邮件列表是我们每天互相交流的重要工具。群论坛里面，有一条申请加入邮件列表的链接，请自行申请加入。  
请使用自己的常用邮箱，有关《新概念C语言》课程的参考资料，作业布置，都会通过邮件列表进行，最好是每天都能检查一下邮箱。

* QQ群 (群号：186779103  名称：新概念C语言在线学习)  
在这个群里，我们采用实名制交流，大家把群名片中的昵称改成自己的真实姓名加城市 例如 李明-北京  

