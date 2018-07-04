<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="New_dt.aspx.cs" Inherits="COMMCHINA.chanpi.New_dt" %>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>新闻中心-企业动态</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="robots" content="index, follow" />
    <link rel="shortcut icon" href="img/bitbug_favicon.ico" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-customize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/pages.css">
    <link rel="stylesheet" type="text/css" href="css/media.css">

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
    <%--<div class="ui-path">
          <ul>
           <li>
              <div class="i"><a href="sms_verifycode.html">产品服务</a>
                <p>
                  <a href="">云通信PaaS开放平台</a>
                  <a href="">隐号宝</a>
                  <a href="">流量</a>
                </p>
              </div>
            </li>
            <li>
              <div class="i"><a href="voice_verifycode.html">关于讯众</a>
                <p>
                  <a href="AboutUs_qy.html">企业简介</a>
                  <a href="AboutUs_zzh.html">产业布局</a>
                  <a href="AboutUs_fz.html" class="on">发展历程</a>
                  <a href="AboutUs_ry.html">资质荣誉</a>
                  <a href="AboutUs_gs.html">企业文化</a>
                  <a href="AboutUs_lx.html">联系我们</a>
                </p>
              </div>
            </li>
            <li>
              <div class="i on"><a href="callcenter.html">新闻中心</a>
                <p>
                  <a href="New_dt.aspx" class="on">企业动态</a>
                  <a href="New_mt.aspx">媒体报道</a>
                  <a href="New_hy.aspx">行业资讯</a>
                </p>
              </div>
            </li>
            <li>
              <div class="i"><a href="flow.html">加入我们</a>
                <p>
                  <a href="JoinMe-Job.aspx">招聘职位</a>
                  <a href="JoinMe-fits.html">公司福利</a>
                  <a href="JoinMe-team.html">团队风采</a>
                </p>
              </div>
            </li>
          </ul>
          <div class="clearfix"></div>
      </div>--%>
      <div class="ui-headview" style="background-image: url(img/page_img/new_bg.jpg);"></div>
      <div class="menui">
          <div class="menu">
              <ul class="menu-new">
                  <li><a href="New_dt.aspx#about-con" class="on">企业动态</a></li>
                  <li><a href="New_mt.aspx#about-con">媒体报道</a></li>
                  <li><a href="New_hy.aspx#about-con">行业资讯</a></li>
                  <div class="clearfix"></div>
              </ul>
          </div>
      </div>
        <div class="ui-fullpart" id="about-con">
        <div class=" ht20"></div>
      <%=newsStr.ToString()%>
       <%-- <div class="page">
            <ul>
                <li><img src="img/News_tap/page_pre.png" alt=""/></li>
                <li class="on"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><img src="img/News_tap/page_next.png" alt=""/></li>
            </ul>
        </div>--%>
            </div>
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


