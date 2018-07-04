<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="New_Details.aspx.cs" Inherits="COMMCHINA.chanpi.New_Details" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>新闻中心-企业动态详情页</title>
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
                  <a href="AboutUs_fz.html">发展历程</a>
                  <a href="AboutUs_ry.html">资质荣誉</a>
                  <a href="AboutUs_gs.html">企业文化</a>
                  <a href="AboutUs_lx.html">联系我们</a>
                </p>
              </div>
            </li>
            <li>
              <div class="i on"><a href="callcenter.html">新闻中心</a>
                <p>
                  <a href="New_dt.aspx">企业动态</a>
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
                <li><a href="New_dt.aspx#about-con" class="<%=this.dtON%>">企业动态</a></li>
                <li><a href="New_mt.aspx#about-con" class="<%=this.mtON%>">媒体报道</a></li>
                <li><a href="New_hy.aspx#about-con" class="<%=this.hyON%>">行业资讯</a></li>
                <div class="clearfix"></div>
            </ul>
        </div>
    </div>
    <div class="ui-fullpart" id="about-con">
    <div class=" ht20"></div>
        <div class="container container_shadow">
            <div class="ht50"></div>
            <div class="ui-title"><h3><%=this.contentTitle%></h3></div>
            <div class="ht30"></div>
            <div class="page_msg">
                <a href="<%=this.newCidPage%>" class="return-ico">返回目录</a>
                <p class="time"><%=this.contentCrdate%></p>
            </div>
            <div class="ui-text style3">
             <%=this.contentText%>
               <%-- <p>2017年5月27日，以“凝聚资源、助力双创”为主题的中小企业创业投资引导基金10年回顾与展望活动，在中关村国家自主创新示范区展示中心隆重召开。活动同时评选出十大“北京市最具成长性企业”，讯众通信、赤子城移动科技等十家企业成功入选。</p>
                <img src="img/News_tap/New_dt_page1.jpg" alt=""/>
                <p class="center">（图为最具成长性企业颁奖仪式）</p>
                <p>北京市中小企业创业投资引导基金（下称“引导基金”），作为国内首支省级中小企业创业投资引导基金，自2008年设立以来，始终坚持“政府引导、市场运作”，带动创投机构共同支持本市中小企业发展，成绩得到了工信部、财政部的高度认可。10年来，该引导基金先后吸引了九批45家创投机构签约合作，累计投资项目超过500项，目前协议出资总规模近90亿元，已成为全国最具影响力的政府创投引导基金之一。</p>
                <p>此次奖项评选，是由北京市中小企业公共服务平台、引导基金，从数百个投资案例中筛选出来。本次荣获“最具成长性投资机构”的华盖资本，致力于“做中国最好的引导基金”，成立不到五年，基金管理规模已破百亿。通过精准的投资方向及阶段设计，华盖资本有力推动了一批创新能力强、市场前景好的小企业迅速成长为行业领军企业。讯众通信就是其在TMT领域的成功投资案例。</p>
                <img src="img/News_tap/New_dt_page2.jpg" alt=""/>
                <p>活动期间，工信部中小企业局局长马向晖、北京市财政局副局长王婴，以及市各委办局的相关领导，欣然走访了创投成功案例展示区。讯众股份作为唯一受邀的云通信行业代表，向上级领导汇报了云通信的商业模式、企业优势及经营状况。据朴圣根董事长介绍：讯众股份已于2015年6月挂牌新三板，2016年，公司整体创收约1.8亿元， 2017年有望达到5亿营业额；从公司规模和市值上，已进入国内前三的云通信企业队列。</p>
                <img src="img/News_tap/New_dt_page3.jpg" alt=""/>
                <p class="center">（图为工信部中小企业局局长马向晖走访讯众展位）</p>
                <p>十年树木，在各级政府、引导基金，以及华盖资本的大力支持下，讯众通信由一家创业公司，成功晋级为新三板创新层以及行业领军企业。今后，讯众通信也必将以更优质的企业通信服务，回馈国家、反哺社会！</p>--%>
                <div class="ht30"></div>
                <div class="page_share">
                    <p class="share">分享到</p>
                    <ul>
                        <li class="hr1"><hr></li>
                        <li class="weixin"><img src="img/News_tap/weixin.jpg" alt=""></li>
                        <li><a href=""><img src="img/News_tap/kongj.jpg" alt=""></a></li>
                        <li><a href=""><img src="img/News_tap/weib.jpg" alt=""></a></li>
                        <li><a href=""><img src="img/News_tap/tengx.jpg" alt=""></a></li>
                        <li class="hr2"><hr></li>
                        <div class="clearfix"></div>
                    </ul>
                    <div class="share_hidden" style="display: none"><img class="close" src="images/close1.png" alt=""></div>
                </div>
                <div class="ht30"></div>
            </div>
        </div>
        <div class="ht30"></div>
        <div class="container container_shadow">
            <div class="page_tab">
                <%--<a href="" class="a1">上一篇: 怎样选择一家靠谱的短信服务商？看完这篇就知道了</a>
                <a href="" class="a2">下一篇: 流量消费激增 三网流量成移动营销首选</a>--%>
                <%=this.previousString%>
                <%=this.nextString%>
            </div>
        </div>
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



