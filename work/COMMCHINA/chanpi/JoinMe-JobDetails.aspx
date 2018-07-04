<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JoinMe-JobDetails.aspx.cs" Inherits="COMMCHINA.chanpi.JoinMe_JobDetails" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>加入我们-招聘职位</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="robots" content="index, follow" />
    <link rel="shortcut icon" href="img/bitbug_favicon.ico" />
       <script src="js/jquery-1.10.1.min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-customize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/pages.css">
    <link rel="stylesheet" type="text/css" href="css/media.css">
   <script type="text/javascript" src="js/jquery.js"></script>
 
      <link href="css/ui-dialog.css" rel="stylesheet" type="text/css" />

    <script src="js/dialog-min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/topandfooter.js?version=1.0"></script>

    <script src="js/html5.js" type="text/javascript"></script>
<style>
   .ui-dialog-close {
    position: relative;
    _position: absolute;
    float: right;
    top: -13px;
    right: -63px;
    _height: 26px;
    padding: 0 4px;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #FFF;
    opacity: .2;
    filter: alpha(opacity=20);
    cursor: pointer;
    background: transparent;
    _background: #FFF;
    border: 0;
    -webkit-appearance: none;
}
</style>
        
</head>
<body>
<!-------------------------------------- 头部开始 -------------------------------------->
<div id="floating_window"></div>
<header></header>
<div class="navi"></div>
<!-------------------------------------- 头部结束 -------------------------------------->
<!-------------------------------------- 内容开始 -------------------------------------->
<main>
    <div class="ui-headview" style="background-image: url(img/page_img/ui-list-job-bg1.jpg);"></div>
    <div class="menui">
        <div class="menu">
            <ul class="menu-new">
                <li><a href="JoinMe-JobDetails.aspx#about-con" class="on">招聘职位</a></li>
                <li><a href="JoinMe-fits.html#about-con">公司福利</a></li>
                <li><a href="JoinMe-team.html#about-con">团队风采</a></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    </div>
    <div class="ui-fullpart"  style="background-color: #f5f5f5" id="about-con">
        <div class=" ht30"></div>
        <div class="container">
              <div class="tabbox-b tabbox-job">
                <div class="tabs-a" id="tabs">
                    <li><a href="" tab="tab1">技 术</a></li>
                    <li><a href="" tab="tab2">管 理</a></li>
                    <li><a href="" tab="tab3">职 能</a></li>
                </div>
                <div class="tab_conbox">
                    <div id="tab1" class="tab_con">
                        <div class="tab_con_div">
				              <%=this.contentText%>
                        </div>
                    </div>
                    <div id="tab2" class="tab_con">
                        <div class="tab_con_div">
				           <%=this.contentText1%>
                        </div>
                    </div>
                    <div id="tab3" class="tab_con">
                        <div class="tab_con_div">
                           <%=this.contentText2%>
                        </div>
                    </div>

                </div>
            </div>
        
        
        
        
        
        
        
        
           <%-- <div class="ui-title"><h3><%=this.contentTitle%></h3></div>
            <div class="ht30"></div>
            <div class="page_msg">
                <a href="JoinMe-JobDetails.aspx#about-con" class="return-icoa">返回目录</a>
            </div>
            <div class="ui-text-join">
            <%=this.contentText%>
                <p class="p-tile">岗位职责：</p>
                <p>1、负责客户端音视频编解码；</p>
                <p>2、负责客户端音视频采集和传输；</p>
                <p>3、负责视频会议客户端开发。</p>
                <p class="p-tile">任职资格：</p>
                <p>1、计算机相关专业本科及以上；</p>
                <p>2、熟悉C/C++开发，有音视频、流媒体播放开发经验；</p>
                <p>3、熟悉常用的数据结构和算法；</p>
                <p>4、能独立完成模块设计和编码；</p>
                <p>5、工作责任心强，沟通相处融洽；</p>
                <p>6、熟悉sip/rtp协议者优先；</p>
                <p>7、熟悉linphone/pjsip者优先。</p>
                <div class="ht60"></div>
                <p><a href="javascript:void(0)" onclick="alertjob('<%=this.contentTitle%>')">申请职位</a></p>
            </div>
        </div>--%>
    </div>
    <div class="ui-fullpart ui-fullpartjob-bg"  style="background-image:url(img/page_img/ui-list-job-bg2.jpg);height: 482px;"></div>
</main>
<!-------------------------------------- 内容结束 -------------------------------------->
<!-------------------------------------- 尾部开始 -------------------------------------->
<div id="footer"></div>
<footer></footer><div id="stickey_footer"></div>
<script type="text/javascript" src="js/menui.js"></script>
<script src="js/mySystem.js"></script>
<!----------------------移动端导航栏---------------->
    <script src="js/main.js"></script>
<!-------------------------------------- 尾部结束 -------------------------------------->

</body>
</html>





