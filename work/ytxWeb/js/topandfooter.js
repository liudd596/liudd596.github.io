﻿$(document).ready(function() {
    var newsDetailList = "<li><strong>2016-12-02</strong><span><a href=''>云通信：</a></span></li><li><strong>2016-12-02</strong><span><a href=''>未来已来，机遇与挑战并存</a></span></li><li><strong>2016-12-02</strong><span><a href=''>机遇与挑战并存</a></span></li>";
    $('#nav').html("<div class='innav'><div class='container'>    <ul class='nav-list fl' id='J_navList'>        <li class='css-logo j-nav-item'><a href='/index.html' class='ahover' ><div class='logo'></div></a>                     </li>                    <li class=' j-nav-item'>                        <a href='/index.html' class='ahover' >首页</a>                    </li>                    <li class='dropdown j-nav-item'>                        <a  class='ahover'>产品服务</a>                        <div class='dropdown-sub' style='display:none;'>                            <div class='dropdown-sub_box'>                                <div class='menu_nav2016'>                                    <ol class='menu_nav_ola'>                                        <h3>服务能力</h3>                                        <ul>                                            <li><p>&lt;通话&gt;</p></li>                                            <li><span class='span1'></span><a href='/New_Ytx/voice_calls.html'>语音通话</a></li>                                            <li><span class='span1'></span><a href='/New_Ytx/voice_code.html'>语音验证码</a></li>                                            <li><span class='span1'></span><a href='/New_Ytx/voice_inform.html'>语音通知</a></li>                                            <li><span class='span1'></span><a href='/New_Ytx/two-way_calls.html'>双向呼叫</a></li>                                            <li><span class='span1'></span><a href='/New_Ytx/multi_calls.html'>多方通话</a></li>                                        </ul>                                        <ul>                                            <li><p>&lt;短信&gt;</p></li>                                            <li><span class='span1'></span><a href='/New_Ytx/verification_code.html'>验证码短信</a></li>                                            <li><span class='span1'></span><a href='/New_Ytx/sms_notify.html'>通知短信</a></li>                                            <!--<li><a href=''>挂机短信</a></li>-->                                        </ul>                                        <ul>                                            <li><p>&lt;流量&gt;</p></li>                                            <li><span  class='span1'></span><a href='/New_Ytx/flow_distribution.html'>流量分发</a></li> <li><span  class='span1'></span><a href='/DirectionalFlow/DirectionalFlow.html'>定向流量</a></li>                                        </ul>                                    </ol>                                    <ol class='menu_nav_olb'>                                        <h3>产品</h3>                                        <ul>                                            <li><span class='spanicon1'></span><a href='/New_Ytx/hidden_treasure.html'>隐号宝</a></li>                                            <li><span class='spanicon2'></span><a href='/New_Ytx/center_call.html'>呼叫中心</a></li>                                            <!--<li><span class='spanicon3'></span><a href=''>流量宝</a></li>-->                                        </ul>                                    </ol>                                   <ol class='menu_nav_olc'>                                        <h3>行业解决方案</h3>                                        <ul>                                            <li><span class='spanicon4'></span><a href='/New_Ytx/Restaurant_takeaway.html'>餐饮外卖</a></li>                                            <li><span class='spanicon5'></span><a href='/New_Ytx/express_logistics.html'>快递物流</a></li>                                            <li><span class='spanicon6'></span><a href='/New_Ytx/Travel_car.html'>出行用车</a></li>                                            <li><span class='spanicon7'></span><a href='/New_Ytx/House_agent.html'>房产经纪</a></li>                                            <li><span class='spanicon8'></span><a href='/New_Ytx/solution_O2O.html'>O2O、电子商务</a></li>                                            <li><span class='spanicon9'></span><a href='/New_Ytx/Internet_Finance.html'>互联网金融</a></li>                                       </ul>              </ol>                                </div>                            </div>                        </div>                    </li>             <li  class='j-nav-item'><a href='/New_Ytx/FreeExperience.html' class='ahover'>免费体验</a> </li>                     <li class='dropdown j-nav-item'>                       <a  class='ahover' >关于我们</a>                        <div class='dropdown-sub dropdown-sub2' style='display:none;'>                            <div class='menu_nav2016'>                                <ul>                                    <li><a href='/aboutUs/company_profile.html'>公司简介</a></li>            <li><a href='/aboutUs/contact_us.html'>联系我们</a></li>                                    <li><a href='/PageNews/Page_news.aspx'>新闻动态</a></li>                                    <li><a href='/aboutUs/Recruit.html'>加入我们</a></li>                                </ul>                            </div>                        </div>                    </li> <li  class='css-word  j-nav-item'>   <a href='/New_Ytx/vipTextDownload.aspx' class='ahover' >VIP文库</a> </li> <li  class='j-nav-item'>                        <a href='/new_File/FileDetails.aspx' class='ahover' >文档中心</a>                    </li>                    <li  class=' j-nav-item'>                        <a href='/ytx.htm' class='ahover' >开发者控制台</a>                    </li>                    <li  class='css-login j-nav-item'>                        <a href='/login.html?type=Console&Ascription=ytx' class='ulogin'>登录</a>                    </li>                </ul>            </div>        </div>");

   // $('#top').html("<div class='intop'> <div class='tele'> <div class='tele1' style='display: none'><img src='images/index/top_intele.png'/></div>  <div class='tele2'><img src='images/index/top_tele.png' /></div> </div> <div class='tele telelove'>  <div class='telelove1'style='display: none'>   <div class='telelove1_left'><img src='images/index/top_love2.jpg' /></div>   <div class='telelove1_right'>      <img src='images/index/top_lovestar.jpg'/>  <div class='addto'><p onclick='addto();'> 添加收藏</p></div></div></div>   <div class='telelove2'><img src='images/index/top_love.png'/></div> </div>   <a href='#header'><div class='tele teletop'><img src='images/index/top.png'/></div></div></a>");
    $('#top').html("<div class='intop'><div class='tele'><a href='javascript:void(0)' onclick='openZoosUrl();LR_HideInvite();;return false;' title='在线咨询'><div class='floating'><img src='images/index/floating1.jpg' /></div></a><a href='javascript:void(0)' onclick='openZoosUrl();LR_HideInvite();;return false;' title='在线咨询'><div class='floating'><img src='images/index/floating2.jpg'/></div></a><a href='/New_Ytx/custom_service.html'><div class='floating'><img src='images/index/floating3.jpg'/></div></a><a href='javascript:void(0)' onclick='openZoosUrl();LR_HideInvite();;return false;' title='在线咨询'><div class='floating'><img src='images/index/floating4.jpg' /></div></a><a href='#header'><div class='floating tt'><img src='images/index/floating5.jpg'/></div></a></div></div></div>");
    createnewsDetail();
});




function createnewsDetail() {
    $.ajax({
        type: 'POST',
        url: '/Services.ashx?method=getTopNumNewsListTitle',
        data: { topNum:3 },
        error: function(XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); },
        success: function(msg) {
        $("#footer").html("<div class='infooter'>            <div class='footer-section1'>                <div class='footer-section11'>                    <a href='/New_Ytx/custom_service.html' target='_blank'><div class='footer-p footer-p1'><span class='icon'></span><strong class='footer-tel'>4000707600</strong></div></a>                    <a href='javascript:viod(0)'><div class='footer-p footer-p2'><span class='icon'></span><strong>在线咨询</strong></div></a>                    <a href='mailto:service@ytx.net'><div class='footer-p footer-p3'><span class='icon'></span><strong>意见反馈</strong></div></a>                    <a href='/new_File/FileDetails.aspx' target='_blank'><div class='footer-p footer-p4'><span class='icon'></span><strong>帮助支持</strong></div></a>                </div>            </div>            <div class='footer-section2'>                <div class='footer-section22'>                    <div class='sectiontitle'>                        <p class='sectiontitle1'>服务能力</p>                        <p class='sectiontitle2'>产品</p>                        <p class='sectiontitle3'>解决方案</p>                        <p class='sectiontitle4'>开发者中心</p>                        <p class='sectiontitle5'>关于我们</p>                        <p class='sectiontitle6'>新闻动态</p>                    </div>                    <div class='sectioncont'>                        <ul>                            <li><a href='/New_Ytx/voice_code.html' >语音验证码</a></li>                            <li><a href='/New_Ytx/voice_inform.html' >语音通知</a></li>                            <li><a href='/New_Ytx/two-way_calls.html' >双向呼叫</a></li>                            <li><a href='/New_Ytx/multi_calls.html' >多方通话</a></li>                            <li><a href='/New_Ytx/voice_calls.html' >语音通话</a></li>                        </ul>                        <ul class='sectioncont1'>                            <li><a href='/New_Ytx/verification_code.html' >验证码短信</a></li>                            <li><a href='/New_Ytx/sms_notify.html' >通知短信</a></li>                            <li><a href='/New_Ytx/flow_distribution.html' >流量分发平台</a></li>  <li><span  class='span1'></span><a href='/DirectionalFlow/DirectionalFlow.html'>定向流量</a></li>                            </ul>                        <ul class='sectioncont2'>                            <li><a href='/New_Ytx/hidden_treasure.html' >隐号宝</a></li>                            <li><a href='/New_Ytx/center_call.html' >呼叫中心</a></li>                        </ul>                        <ul class='sectioncont2'>                            <li><a href='/New_Ytx/Restaurant_takeaway.html' >餐饮外卖</a></li>                            <li><a href='/New_Ytx/express_logistics.html' >快递物流</a></li>                            <li><a href='/New_Ytx/Travel_car.html' >出行用车</a></li>                            <li><a href='/New_Ytx/House_agent.html' >房产经纪</a></li>                            <li><a href='/New_Ytx/Internet_Finance.html' >互联网金融</a></li>                            <li><a href='/New_Ytx/solution_O2O.html' >O2O电子商务</a></li>                        </ul>                        <ul class='sectioncont2'>            <li><a href='/New_Ytx/FreeExperience.html'>免费体验</a> </li>                                           <li><a href='/new_File/FileDetails.aspx' >文档帮助</a></li>                        </ul>                        <ul class='sectioncont2 sectioncont22'>                            <li><a href='/aboutUs/company_profile.html'  class='fontsize20'>公司简介</a></li>           <li><a href='/aboutUs/contact_us.html' >联系我们</a></li>                            <li><a href='/PageNews/Page_news.aspx'>新闻动态</a></li>                            <li><a href='/aboutUs/Recruit.html' >加入我们</a></li>                        </ul>                        <ul class='sectioncont4'></ul>                        <ul class='sectioncont3'>                            <li class='sectioncont3top1'><a href='/PageNews/Page_news.aspx'>新闻列表 &gt;&gt;</a></li>" + msg.msg + "<li class='sectioncont3top fr'><img src='/images/index/weixn.png' alt=''/></li>                        </ul>                    </div>                </div>            </div>            <div class='footer-section3'>                <div class='friendlylink'>               </div>            </div>        </div>        <div class='copyright'>            <div class='incopyright'>            <p>2011-2017 北京云讯科技有限公司 京ICP备14002087号-7</p>            </div>        </div>");
        }
    });
}

//top收藏栏
//function addto() {
    // $(".modal-backdrop").css("display", "block");
 //   alert("请刷新页面，使用快捷键  Ctrl+D 添加收藏 ");
//};

//var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
//document.write(unescape("%3Cspan id='cnzz_stat_icon_1262127904'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1262127904%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

//<!--商务通聊天软件的代码-->
document.write("<script language=\"javascript\" src=\"http://lzt.zoosnet.net/JS/LsJS.aspx?siteid=LZT19968005&float=1&lng=cn\"></script>");



//登录注册页获取网站cookie值 开始
function getcookie(objname) {//获取指定名称的cookie的值
    var arrstr = document.cookie.split("; ");
    for (var i = 0; i < arrstr.length; i++) {
        var temp = arrstr[i].split("=");
        if (temp[0] == objname)
        return unescape(temp[1]);
    }
}  
if (document.referrer.indexOf('www.baidu.com') >= 0) {
    referer = 'baidu';
}
else if (document.referrer.indexOf('www.so.com') >= 0) {
    referer = 'so';
}
else if (document.referrer.indexOf('www.yonyou.com') >= 0) {
    referer = 'yonyou';
}
else {
    referer = document.referrer.slice();
}
if (getcookie('Referer') == "undefined" || getcookie('Referer') == null || getcookie('Referer') == "") {
    document.cookie = "Referer=" + referer;
}
$("#ifrLogin").attr("src", "http://ytx.net/CommChinaLogin.aspx?Ascription=ytx&Referer=" + getcookie('Referer'));
//登录注册页获取网站cookie值 结束 