<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="New_hy.aspx.cs" Inherits="COMMCHINA.chanpi.New_hy" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>新闻中心-行业资讯</title>
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
   
      <div class="ui-headview" style="background-image: url(img/page_img/new_bg.jpg);"></div>
      <div class="menui">
          <div class="menu">
              <ul class="menu-new">
                  <li><a href="New_dt.aspx#about-con">企业动态</a></li>
                  <li><a href="New_mt.aspx#about-con">媒体报道</a></li>
                  <li><a href="New_hy.aspx#about-con" class="on">行业资讯</a></li>
                  <div class="clearfix"></div>
              </ul>
          </div>
      </div>
      <div class="ui-fullpart" id="about-con">
           <div class=" ht20"></div>
            <%=newsStr.ToString() %>
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



