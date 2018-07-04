<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JoinMe-Job.aspx.cs" Inherits="COMMCHINA.chanpi.JoinMe_Job" %>

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
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-customize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/pages.css">
    <link rel="stylesheet" type="text/css" href="css/media.css">
    <script type="text/javascript">
        function my0ver(item) {
            $(".ui-list-jobli" + item).hover(function() {
                $(".ui-job-textbg" + item).show();
                $(".ui-list-jobli" + item + " .ui-job-text").hide();
            }, function() {
                $(".ui-job-textbg" + item).hide();
                $(".ui-list-jobli" + item + " .ui-job-text").show();
            });
        }
    </script>

    <script src="js/html5.js" type="text/javascript"></script>
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
                <li><a href="JoinMe-Job.aspx#about-con" class="on">招聘职位</a></li>
                <li><a href="JoinMe-fits.html#about-con">公司福利</a></li>
                <li><a href="JoinMe-team.html#about-con">团队风采</a></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    </div>
    <div class="ui-fullpart"  style="background-color: #f4f4f4" id="about-con">
        <div class="ui-list-job">
             <%=newsStr.ToString() %>
             <%--<ul>
                    <li class="ui-list-jobli1"  onmouseover="my0ver(1)">
                        <img src="img/page_img/ui-list-job1.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-1.html">
                           <div class="ui-job-text"><h3>C++客户端工程师</h3></div>
                           <div class="ui-job-textbg ui-job-textbg1">
                              <h3>C++客户端工程师</h3>
                              <span class="span1">岗位职责：1、负责客户端音视频编解码；</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli2"  onmouseover="my0ver(2)">
                        <img src="img/page_img/ui-list-job2.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-2.html">
                           <div class="ui-job-text"><h3>C++服务器工程师</h3></div>
                           <div class="ui-job-textbg ui-job-textbg2">
                              <h3>C++服务器工程师</h3>
                              <span class="span1">岗位职责：1、负责客户端音视频编解码；</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli3"  onmouseover="my0ver(3)">
                        <img src="img/page_img/ui-list-job3.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-3.html">
                           <div class="ui-job-text"><h3>音视频服务器开发工程师</h3></div>
                           <div class="ui-job-textbg ui-job-textbg3">
                              <h3>音视频服务器开发工程师</h3>
                              <span class="span1">岗位职责：1、负责音视频编解码;</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli4"  onmouseover="my0ver(4)">
                        <img src="img/page_img/ui-list-job4.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-4.html">
                           <div class="ui-job-text"><h3>合作经理</h3></div>
                           <div class="ui-job-textbg ui-job-textbg4">
                              <h3>合作经理</h3>
                              <span class="span1">岗位职责：1、从事过电信行业工作者优先</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li class="ui-list-jobli5"  onmouseover="my0ver(5)">
                        <img src="img/page_img/ui-list-job5.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-5.html">
                           <div class="ui-job-text "><h3>大客户经理</h3></div>
                           <div class="ui-job-textbg ui-job-textbg5">
                              <h3>大客户经理</h3>
                              <span class="span1">岗位职责：1、负责公司通讯`产品的市场</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli6"  onmouseover="my0ver(6)">
                        <img src="img/page_img/ui-list-job6.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-6.html">
                           <div class="ui-job-text"><h3>渠道客户经理</h3></div>
                           <div class="ui-job-textbg ui-job-textbg6">
                              <h3>渠道客户经理</h3>
                              <span class="span1">岗位职责：1.跟进公司所给予线索，</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli7"  onmouseover="my0ver(7)">
                        <img src="img/page_img/ui-list-job7.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-7.html">
                           <div class="ui-job-text"><h3>客服专员</h3></div>
                           <div class="ui-job-textbg ui-job-textbg7">
                              <h3>客服专员</h3>
                              <span class="span1">岗位职责：1、负责400电话接听、</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli8"  onmouseover="my0ver(8)">
                        <img src="img/page_img/ui-list-job8.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-8.html">
                           <div class="ui-job-text"><h3>商务经理</h3></div>
                           <div class="ui-job-textbg ui-job-textbg8">
                              <h3>商务经理</h3>
                              <span class="span1">岗位职责：1、负责草拟、制定、</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li class="ui-list-jobli9"  onmouseover="my0ver(9)">
                        <img src="img/page_img/ui-list-job9.jpg" alt=""/>
                        <a class="ui-job" href="JoinMe-Job-9.html">
                           <div class="ui-job-text"><h3>销售助理</h3></div>
                           <div class="ui-job-textbg ui-job-textbg9">
                              <h3>销售助理</h3>
                              <span class="span1">岗位职责：1、协助销售部进行合</span>
                              <span class="span-btn">立即申请</span>
                            </div>
                        </a>
                    </li>
                    <li class="ui-list-jobli10">
                        <img src="img/page_img/ui-list-job10.jpg" alt=""/>
                    </li>
                </ul>--%>
        </div>
    </div>
    <div class="ui-fullpart"  style="background-image:url(img/page_img/ui-list-job-bg2.jpg);height: 482px;"></div>
</main>
<!-------------------------------------- 内容结束 -------------------------------------->
<!-------------------------------------- 尾部开始 -------------------------------------->
<div id="footer"></div>
<footer></footer><div id="stickey_footer"></div>
<!-------------------------------------- 尾部结束 -------------------------------------->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/topandfooter.js?version=1.0"></script>
<script type="text/javascript" src="js/menui.js"></script>
<!----------------------移动端导航栏---------------->
    <script src="js/main.js"></script>
</body>
</html>




