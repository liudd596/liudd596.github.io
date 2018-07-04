$(document).ready(function() {

$('#floating_window').html('<div class="infloating"><a href="#top" class="floating6"></a></div>');

$('header').html('<div class="container"><div class="logo"><a href="../../index.html"><img src="img/logo.png" alt=""></a></div><div class="menu"><ul><li><a href="../../index.html">首页</a></li><li class="menu_li3"><a><span>产品服务</span></a><div class="menu_box menu_box3" style="display:none"><div class="hidden_content hidden_content3"><div class="hidden_title">我们的服务</div><div class="hidden_serve1"><div class="title"><a href="../BG-cloudPaaS.html"><span>云通信PaaS开放平台</span></a></div><div class="hidden_sercon1"><p class="yuyin"><语音></p><p><a href="voice_inform.html">语音通知</a></p><p><a href="voice_code.html">语音验证码</a></p><p><a href="two-way_calls.html">双向呼叫</a></p><p><a href="voice_calls.html">语音通话</a></p></div><div class="hidden_sercon2"><p class="yuyin"><短信></p><p><a href="sms_notify.html">短信通知</a></p><p><a href="verification_code.html">短信验证码</a></p></div><div class="hidden_sercon3"><p class="yuyin"><流量></p><p><a href="flow_distribution.html">流量分发</a></p></div><hr></div><div class="hidden_serve1 hidden_serve_cs" style="left:350px"><div class="title"><a href="../BG-hidden.html"><span>云通信行业SaaS解决方案</span></a></div><div class="hidden_sercon1"><p><a href="../BG-hidden.html">隐号宝</a></p></div><div class="hidden_sercon2"><p><a href="../BG-cloudSaaS.html">流量营销</a></p></div><hr></div><div class="hidden_serve1 hidden_serve_hs" style="left:580px"><div class="title"><a href="../BG-SaaS.html"><span>呼叫中心全产业链SaaS服务</span></a></div><div class="hidden_sercon1"><p><a href="../ZM-chanpi/yixiaoxinghujiaozhongxin.html">营销型呼叫中心</a></p><p><a href="../BG-SaaS.html">混合云呼叫中心</a></p><p><a href="../ZM-chanpi/zhinengyuyindaohang.html">智能语音导航</a></p></div><div class="hidden_sercon2"><p><a href="../ZM-chanpi/kefuxinghujiaozhongxin.html">客服型呼叫中心</a></p><p><a href="../ZM-chanpi/zhinengyuyinzhijian.html">智能语音质检</a></p><p><a href="../ZM-chanpi/zhinengyuyindaohang.html">智能语音机器人</a></p></div><hr></div><div class="hidden_serve1 hidden_serve_jsh" style="left:860px"><div class="title"><a href="../BG-jsh.html"><span>及时会电话会议/视频会议</span></a></div><div class="hidden_sercon1"><p><a href="../JSH-chanpi/phoneMeeting.html">电话会议</a></p><p><a href="../JSH-chanpi/teamWork.html">集成合作</a></p></div><div class="hidden_sercon2"><p><a href="../JSH-chanpi/netmeeting.html">视频会议</a></p><p><a href="../JSH-chanpi/download.html">下载中心</a></p></div></div></div></div></li><li class="menu_li1"><a><span>关于讯众</span></a><div class="menu_box menu_box1" style="display:none"><div class="hidden_content hidden_content1"><a href="../AboutUs_qy.html"><span>企业简介</span></a> <a href="../AboutUs_zzh.html"><span>产业布局</span></a> <a href="../AboutUs_fz.html"><span>发展历程</span></a> <a href="../AboutUs_ry.html"><span>资质荣誉</span></a> <a href="../AboutUs_gs.html"><span>企业文化</span></a> <a href="../AboutUs_lx.html"><span>联系我们</span></a></div></div></li><li class="menu_li2"><a><span>新闻中心</span></a><div class="menu_box menu_box2" style="display:none"><div class="hidden_content hidden_content2"><a href="../New_dt.aspx"><span>企业动态</span></a> <a href="../New_mt.aspx"><span>媒体报道</span></a> <a href="../New_hy.aspx"><span>行业资讯</span></a></div></div></li><li class="menu_li4"><a href="../TZi_mt.aspx"><span>投资者关系</span></a></li><li class="menu_li5"><a><span>加入我们</span></a><div class="menu_box menu_box5" style="display:none"><div class="hidden_content hidden_content5"><a href="../JoinMe-JobDetails.aspx"><span>招聘职位</span></a> <a href="../JoinMe-fits.html"><span>公司福利</span></a> <a href="../JoinMe-team.html"><span>团队风采</span></a></div></div></li><li class="menu_li6"><a><span>立即登录</span></a><div class="menu_box menu_box6" style="display:none"><div class="hidden_content hidden_content6"><a href="../LoginFree.html" target=_blank><span>免费试用</span></a> <a href="http://crm.commchina.net/" target=_blank><span>用户登录</span></a> <a href="http://agent.commchina.net/" target=_blank><span>代理商登录</span></a></div></div></li></ul></div><a href="javascript:;" class="mbtn js-menu"></a><div class="mask"></div></div>');

$('.navi').html('<div class="mask"></div><div class="hd"><p><a href="javascript:;" onclick="$(&quot;#subm-1&quot;).toggle()">语音</a><i></i></p><div class="subm" id="subm-1"><p><a href="voice_inform.html">语音通知</a></p><p><a href="voice_code.html">语音验证码</a></p><p><a href="two-way_calls.html">双向呼叫</a></p><p><a href="voice_calls.html">语音通话</a></p></div><p><a href="javascript:;" onclick="$(&quot;#subm-2&quot;).toggle()">短信</a><i></i></p><div class="subm" id="subm-2"><p><a href="sms_notify.html">短信通知</a></p><p><a href="verification_code.html">短信验证码</a></p></div><p><a href="javascript:;" onclick="$(&quot;#subm-3&quot;).toggle()">流量</a><i></i></p><div class="subm" id="subm-3"><p><a href="flow_distribution.html">流量分发</a></p></div><p><a href="javascript:;" onclick="$(&quot;#subm-4&quot;).toggle()">呼叫中心</a><i></i></p><div class="subm" id="subm-4"><p><a href="../ZM-chanpi/yixiaoxinghujiaozhongxin.html">营销型呼叫中心</a></p><p><a href="../ZM-chanpi/kefuxinghujiaozhongxin.html">客服型呼叫中心</a></p><p><a href="../ZM-chanpi/dianjihujiao.html">点击呼叫</a></p><p><a href="../ZM-chanpi/zhinengyuyindaohang.html">智能语音导航</a></p><p><a href="../ZM-chanpi/zhinengyuyinzhijian.html">智能语音质检</a></p></div><p><a href="javascript:;" onclick="$(&quot;#subm-5&quot;).toggle()">多方会议</a><i></i></p><div class="subm" id="subm-5"><p><a href="../JSH-chanpi/phoneMeeting.html">电话会议</a></p><p><a href="../JSH-chanpi/netmeeting.html">视频会议</a></p></div><div class="hd-ul"><ul><li><a href="../AboutUs_qy.html">企业简介</a>|</li><li><a href="../AboutUs_zzh.html">产业布局</a>|</li><li><a href="../AboutUs_ry.html">资质荣誉</a></li></ul><div class="clearfix"></div><ul><li><a href="../AboutUs_gs.html">企业文化</a>|</li><li><a href="../AboutUs_lx.html">联系我们</a></li></ul><div class="clearfix"></div></div><p><span class="m-xiangq">查看更多详情，请打开电脑浏览器<br>“http://www.commchina.net/”</span></p></div>');


$('#footer').html('<div id="footeri"><div class="infooteri"><ul><li><p>关于我们</p></li><li><a href="../AboutUs_qy.html">企业简介</a></li><li><a href="../AboutUs_zzh.html">产业布局</a></li><li><a href="../AboutUs_ry.html">资质荣誉</a></li><li><a href="../AboutUs_gs.html">企业文化</a></li><li><a href="../AboutUs_lx.html">联系我们</a></li></ul><ul><li><p>新闻中心</p></li><li><a href="../New_dt.html">企业动态</a></li><li><a href="../New_mt.html">媒体报道</a></li><li><a href="../New_hy.html">行业资讯</a></li></ul><ul><li><p>集团业务</p></li><li><a href="../BG-cloudPaaS.html">云通信PaaS开放平台</a></li><li><a href="../BG-hidden.html">云通信行业SaaS解决方案</a></li><li><a href="../BG-SaaS.html">呼叫中心全产业链SaaS服务</a></li><li><a href="../BG-jsh.html">及时会电话会议/视频会议</a></li></ul><ul><li><p>投资者关系</p></li><li><a href="../TZi_mt.aspx#tzi-g">股票信息</a></li><li><a href="../TZi_mt.aspx#tzi-x">信息披露</a></li><li><a href="../TZi_mt.aspx#tzi-j">机构研报</a></li></ul><ul><li><p>加入我们</p></li><li><a href="../JoinMe-JobDetails.aspx">招聘职位</a></li><li><a href="../JoinMe-fits.html">公司福利</a></li><li><a href="../JoinMe-team.html">团队风采</a></li></ul><ul class="erweima"><li><img src="img/footer_erweima.jpg" alt=""></li><br><br><br><li><p style="font-size:16px;text-align:center">关注讯众官微</p></li></ul><div class="clearfix"></div></div></div><div id="footer_bottom"><div class="infonnter_bottom"><p>电信与信息服务业务经营许可证编号：京ICP备11004874号-1工信部增值电信业务经营许可牌照号：B2-20090483</p></div><div id="footer_bot"><div><p>版权所有：北京讯众通信技术股份有限公司</p></div></div></div>');

    $('footer').html('<div class="container"><div class="foot-con1"><p>市场合作：linfan@commchina.net</p><p>客服电话：400-681-2008</p></div><div class="foot-con2"><h3>产品服务</h3><hr class="foot-con2hr1"><div class="foot-con2in"><ul><li><a href="../BG-cloudPaaS.html">云通信PaaS服务平台</a></li><li><a href="../BG-hidden.html">云通信行业SaaS解决方案</a></li></ul><ul><li><a href="../BG-SaaS.html">呼叫中心全产业链SaaS服务</a></li><li><a href="../BG-jsh.html">电话会议/视频会议</a></li></ul><div class="clearfix"></div></div><hr class="foot-con2hr2"><div class="foot-con2out"><ul><li><p>关于我们</p></li><li><a href="../AboutUs_qy.html">企业简介</a></li><li><a href="../AboutUs_zzh.html">产业布局</a></li><li><a href="../AboutUs_ry.html">资质荣誉</a></li><li><a href="../AboutUs_gs.html">企业文化</a></li><li><a href="../AboutUs_lx.html">联系我们</a></li></ul><ul><li><p>新闻中心</p></li><li><a href="../New_dt.aspx">企业动态</a></li><li><a href="../New_mt.aspx">媒体报道</a></li><li><a href="../New_hy.aspx">行业资讯</a></li></ul><ul><li><p>投资者关系</p></li><li><a href="../TZi_mt.aspx#tzi-x">信息披露</a></li><li><a href="../TZi_mt.aspx#tzi-j">机构研报</a></li></ul><ul><li><p>加入我们</p></li><li><a href="../JoinMe-JobDetails.aspx">招聘职位</a></li><li><a href="../JoinMe-fits.html">公司福利</a></li><li><a href="../JoinMe-team.html">团队风采</a></li></ul><div class="clearfix"></div></div><div class="foot-con2yanzm"><img src="img/footer_erweima.jpg" alt=""><p>关注讯众官微</p></div></div><div class="foot-con3"><p>版权所有：北京讯众通信技术股份有限公司</p></div></div>');
    $('#stickey_footer').html('<ul><li class="stickey_footerli1"><a href="tel:400-681-2008" onclick="_hmt.push([&quot;_trackEvent&quot;,&quot;手机网&quot;,&quot;click&quot;,&quot;底部菜单_本层_内页_按钮_联系电话&quot;])"><img src="img/stickey_footer1.png" alt=""> <span>联系电话</span></a></li><li class="stickey_footerli3"><a href="../M-LoginTotals.html"><img src="img/stickey_footer3.png" alt=""><span> 立即登录</span></a></li></ul>');
});
document.write('<script type="text/javascript" charset="utf-8" src="http://lead.soperson.com/10005095/10005350.js"></script>');
//顶部导航栏自动跟随
t = $('header').offset().top;
fh = $('header').height();
$(window).scroll(function(e){
    s = $(document).scrollTop();
    if(s >1&& s<440){
        $('header').css('position','fixed');
        $('header').css('top','0');
        $('header').css('left','0');
        $('header').css('background-color','#fff');
        $('header').css('width','100%');
        $('header').css('text-align','center');
    }else{
        $('header').css('position','relative');

    }
});
//导航栏隐藏部分
$(document).ready(function() {
    $(".menu_li1").hover(function(){
        $(".menu_box1").show();
    },function(){
        $(".menu_box1").hide();
    });
    $(".menu_li2").hover(function(){
        $(".menu_box2").show();
    },function(){
        $(".menu_box2").hide();
    });
    $(".menu_li3").hover(function(){
        $(".menu_box3").show();
    },function(){
        $(".menu_box3").hide();
    });
    $(".menu_li4").hover(function(){
        $(".menu_box4").show();
    },function(){
        $(".menu_box4").hide();
    });
    $(".menu_li5").hover(function(){
        $(".menu_box5").show();
    },function(){
        $(".menu_box5").hide();
    });
    $(".menu_li6").hover(function(){
        $(".menu_box6").show();
    },function(){
        $(".menu_box6").hide();
    });
});

var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
$(window).scroll(function(){
    var Yoffset=window.pageYOffset || document.documentElement.scrollTop;
    if (Yoffset> 2* h) {
        $("#arrow_up").fadeIn(100);
    }else{
        $("#arrow_up").fadeOut(100);
    };
});
$("#arrow_up").bind("click",function(e){
    e.preventDefault();
    $("body").animate({"scrollTop":"0"},1000);

});


//menui副导航栏
t = $('.menui').offset().top;
fh = $('.menui').height();
$(window).scroll(function(e){
    s = $(document).scrollTop();
    if(s>440){
        $('.menui').css('position','fixed');
        $('.menui').css('top','0');
        $('.menui').css('left','0');
        $('.menui').css('background-color','#fff');
        $('.menui').css('width','100%');
        $('.menui').css('text-align','center');
    }else{
        $('.menui').css('position','relative');
    }
});
function alertjob() {
    $(".modal-backdrop").css("display", "block");
    $("#Dialog-job").show();
}
function closePop() {
    $(".modal-backdrop").css("display", "none");
    $("#Dialog-job").hide();
}
/*---------------动态Tab切换---------*/
$(document).ready(function() {
    jQuery.jqtab = function(tabtit,tabcon) {
        $(tabcon).hide();
        $(tabtit+" li:first").addClass("thistab").show();
        $(tabcon+":first").show();
        $(tabtit+" li").click(function() {
            $(tabtit+" li").removeClass("thistab");
            $(this).addClass("thistab");
            $(tabcon).hide();
            var activeTab = $(this).find("a").attr("tab");
            $("#"+activeTab).fadeIn();
            return false;
        });
    };
    /*调用方法如下：*/
    $.jqtab("#tabs",".tab_con");
});



