$(function () {
    //设置弹框垂直用水平居中
    $(window).resize();
    //调取地理位置
    //getLocationFun();
    $('.playbtn').attr('onclick', 'turnplateStart()');//初始化取消事件

    //根据当前位置经纬度与后台对比
    // var res='{"latitude":39.98493,"longitude":116.4752,"speed":-1,"accuracy":65,"errMsg":"getLocation:ok"}';
    // var arrdata = JSON.parse(res);
    // var latitude = 39.99555833;// arrdata.latitude;
    // var longitude = 116.39050556;// arrdata.longitude;
    // //setTimeout(function () {
    //     $.ajax({
    //         url: "../turnplate/Location",
    //         data: { latitude: latitude, longitude: longitude },
    //         type: "POST",
    //         success:
    //             function (data) {
    //                 if (data.status == "LocationNo") {
    //                     $('#mask').remove();
    //                     $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
    //                     $('.pityBox').show();
    //                     $('.title-tip').text('对不起');
    //                     $('.content-tip').html('<p>不在活动范围内，</p><p>请去展会现场参与抽奖!</p>');
    //                     $('.playbtn').removeAttr("onclick");
    //                 }
    //             }
    //     });
    //// }, 5000)
   // is_weixn();
});
//判断是否是微信中打开页面
//function is_weixn() {
//    var ua = navigator.userAgent.toLowerCase();
//    if (ua.match(/MicroMessenger/i) == "micromessenger") {
//        return true;
//    } else {
//        $('#mask').remove();
//        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
//        $('.pityBox').show();
//        $('.title-tip').text('对不起');
//        $('.content-tip').html('<p>请通过手机微信进入活动页面，</p><p>如有疑问请询问现场工作人员！</p>');
//        $('.playbtn').removeAttr("onclick");
//        return;
//    }
//}
$(window).resize(function () {
    $(".popBox").css({
        position: "absolute",
        left: ($(window).width() - $(".popBox").outerWidth()) / 2,
        top: ($(window).height() - $(".popBox").outerHeight()) / 2
    });
    $(".popColouBar").css({
        position: "absolute",
        left: ($(window).width() - $(".popColouBar").outerWidth()) / 2,
        top: ($(window).height() - $(".popColouBar").outerHeight()) / 2
    });
});
function shareFun() {

}
function turnplateStart() {
    var $btn = $('.playbtn');

    var clickfunc = function () {
         var data = [1, 2, 3, 4, 5, 6];
        //data为随机出来的结果，根据概率后的结果
        data = data[Math.floor(Math.random() * data.length)];
        var id;
//        $.ajax({
//            type: "POST",
//            url: "../turnplate/RandomHB",
//            async: false,
//            success: function (data) {
//                id = data;
//            }
//        });
         id = '6';
        switch (id) {
            case '1':
                rotateFunc(1, 0, '恭喜抽中1G流量,额的神，网炸了!');
                break;
            case '2':
                rotateFunc(2, 60, '恭喜抽中500M流量，亲，运气碉堡了!');
                break;
            case '3':
                rotateFunc(3, 120, '恭喜抽中300M流量，手气不错嘛!');
                break;
            case '4':
                rotateFunc(4, 180, '恭喜您获得100M流量，愿你每天都有小惊喜！');
                break;
            case '5':
                rotateFunc(5, 240, '恭喜抽中500分钟电话会议时长，哦，开会滴走起！');
                break;
            case '6':
                rotateFunc(6, 300, '恭喜您获得58元云通讯平台（www.ytx.net）无门槛代金券!');
                break;
            case '-1':
                $('#mask').remove();
                $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                $('.pityBox').show();
                $('.title-tip').text('对不起');
                $('.content-tip').text('今天的活动已经结束，请您明天再来！');
                break;
        }
    };
    var dateNow = getDateStr(0);//今天
    var dateExpired = getDateStr(1);//过期日明天
    //var distance = getLocationFun();//获取参会者地理位置

    var distance = 240;
    var isPassDate = dateCompare(dateNow, dateExpired);
    if (playNum == 1 && isPassDate == 3 && distance <= 500 || playNum == 1 && isPassDate == 2 && distance <= 500) {
        //后端判断，是否调取开启转盘
        clickfunc();
        playNum = 0;
    } else {
        //提示只能参与一次抽奖
        $('#mask').remove();
        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
        $('.pityBox').show();
        $('.title-tip').text('对不起');
        $('.content-tip').html('<p>每个手机号码或是微信</p><p >只能参加一次活动</P>');
    };
    //提示活动已经结束
    if (isPassDate == 1) {
        $('#mask').remove();
        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
        $('.pityBox').show();
        $('.title-tip').text('对不起');
        $('.content-tip').text('今天的活动已经结束，<br/>请您明天再来！');
    }
    //提示不在范围内
//    if (distance > 500) {
//        $('#mask').remove();
//        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
//        $('.pityBox').show();
//        $('.title-tip').text('对不起');
//        $('.content-tip').html('<p>不在活动范围内，</p><p>请去展会现场参与抽奖!</p>');
//    }
}
var actId;
function rotateFunc(awards, angle, text) {
    actId = awards;
    var $btn = $('.playbtn');
    isture = true;
    $btn.stopRotate();
    $btn.rotate({
        angle: 0,
        duration: 4000, //旋转时间
        animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
        callback: function () {
            isture = false; // 标志为 执行完毕
            popBox(text)
        }
    });
}
var playNum = 1;//可转次数
//获取日期
function getDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期 
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}
//判断日期是否已经过期
function dateCompare(date1, date2) {
    date1 = date1.replace(/\-/gi, "/");
    date2 = date2.replace(/\-/gi, "/");
    var time1 = new Date(date1).getTime();
    var time2 = new Date(date2).getTime();
    if (time1 > time2) {
        return 1;
    } else if (time1 == time2) {
        return 2;
    } else {
        return 3;
    }
}
//中奖提示框
function popBox(text) {
    $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
    $('.popBox').show();
    $('.popColouBar').show();
    $('.popText').empty();
    switch (text) {
        case '恭喜抽中1G流量,额的神，网炸了!':
        {
            $('.popText').append('<p>恭喜您抽中1G流量，</p><p>额的神，网炸了!</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(1)');
        };
            break;
        case '恭喜抽中500M流量，亲，运气碉堡了!':
        {
            $('.popText').append('<p>恭喜您抽中500M流量，</p><p>亲，运气碉堡了!</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(1)');
        };
            break;
        case '恭喜抽中300M流量，手气不错嘛!':
        {
            $('.popText').append('<p>恭喜您抽中300M流量，</p><p>手气不错嘛!</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(1)');
        };
            break;
        case '恭喜您获得100M流量，愿你每天都有小惊喜！':
        {
            $('.popText').append('<p>恭喜您抽中100M流量，</p><p>愿你每天都有小惊喜！</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(1)');
        };
            break;
        case '恭喜抽中500分钟电话会议时长，哦，开会滴走起！':
        {
            $('.popText').append('<p>恭喜您</p><p>抽中500分钟电话会议</p><p>通话时长，</p><p>开会滴走起！</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(3)');
        };
            break;
        case '恭喜您获得58元云通讯平台（www.ytx.net）无门槛代金券!':
        {
            $('.popText').append('<p>恭喜您</p><p>58元云通讯平台（www.ytx.net）</p><p>无门槛代金券！</p>');
            $('#turnplate-getbtn').attr('onclick', 'immediateGetFun(2)')
        };
            break;
    };
}
//立即领取功能按钮
function immediateGetFun(flag) {
    $(window).resize();
    //背景置灰，取消点击事件
    $('#turnplate-getbtn').removeAttr('onclick');
    $('#turnplate-getbtn').css({
        background: '#ee2963',
        filter: 'alpha(opacity=50)',
        mozOpacity: '0.5',
        opacity: '0.5'
    });
    //flag  1.表示输入手机号加短信提示  2.表示输入手机号 3.表示找工作人员领取
    if (flag == 1) {
        var addHtml = $("<p class='phoneArea'>"
            + "<input type='text' id='phoneVal' placeholder='请输入手机号码' maxlength='11' class='btnPublic'/>"
            + "<label class='tip'></label></p>"
            + "<p class='codeArea'>"
            + "<input type='text' id='codeVal' placeholder='请输入验证码' maxlength='6' class='btnPublic fl'/>"
            + "<input type='button' value='获取验证码' style='-webkit-appearance : none ;' id='getcode' onclick='getCode()' class='btnPublic fr' />"
            + "<label class='tip'></label></p>"
            + "<p class='confirmBtnArea'>"
            + "<input type='button' value='确定' id='sureBtn' onclick='Submit()' class='btnPublic'/></p>");
        $('.popMesArea').append(addHtml);

    } else if (flag == 2) {
        var addHtml = $("<p class='phoneArea'>"
            + "<input type='text' id='phoneVal' placeholder='请输入手机号码' maxlength='11' class='btnPublic'/>"
            + "<label class='tip'></label></p>"
            + "<p class='codeArea'>"
            + "<input type='text' id='codeVal' placeholder='请输入验证码' maxlength='6' class='btnPublic fl'/>"
            + "<input type='button' value='获取验证码' style='-webkit-appearance : none ;' id='getcode' onclick='getCode()' class='btnPublic fr' />"
            + "<label class='tip'></label></p>"
            + "<p class='confirmBtnArea'>"
            + "<input type='button' value='确定' id='sureBtn'  onclick='Submit(2)' class='btnPublic'/></p>");
        $('.popMesArea').append(addHtml);
        //  $('#sureBtn').attr('onclick', 'sureBtnFun("无提示")');
    } else if (flag == 3) {
        var addHtml = $("<p class='phoneArea'>请找现场工作人员领取！</p>"
            + "<p class='confirmBtnArea'>"
            + "<input type='button' value='确定' id='sureBtn'  onclick='Submit(1)' class='btnPublic'/></p>");
        $('.popMesArea').append(addHtml);
        //   $('#sureBtn').attr('onclick', 'sureBtnFun("现场")');
    };

}
//提交
function Submit(flag) {
    if (flag == 1) {
        var openid = $("#openid").val();
        $.ajax({
            url: "../turnplate/ActData",
            data: {
                actId: actId,openid: openid
            },
            type: "POST",
            success:
                function (data) {
                    $("#uo").val(data.openid);
                    if (data.status == "ok") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>领取成功</p><<p>请联系现场工作人员</p></p>')
                    }
                    else if (data.status == "no3") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>提交失败</p><p>只能在手机微信参与此活动！</p>')
                    }
                    else if (data.status == "no2") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>领取失败</p><p>您的微信号已参与过此活动!</p>')
                    }
                    else if (data.status == "no1") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>请使用微信打开活动页!</p>')
                    }
                    else if (data.status == "no") {
                        alert("提交失败，请联系现场工作人员！");
                    }
                }

        });
    } else {
        var phoneTest = /^1[34578]\d{9}$/;
        //请求接口
        var phoneVal = $('#phoneVal').val();
        var codeVal = $('#codeVal').val();
        var openid = $("#openid").val();
        if (phoneVal == '') {
            $('#phoneVal').next().show().text('请输入手机号');
        } else if (phoneTest.test(phoneVal) != true) {
            $('#phoneVal').next().show().text('请输入正确的手机号码');
        }
        $.ajax({
            url: "../turnplate/Index",
            data: {
                phone: phoneVal, actId: actId, code: codeVal, openid: openid
            },
            type: "POST",
            success:
                function (data) {
                    $("#uo").val(data.openid);
                    if (data.status == "ok") {

                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        if (flag == 2) {
                            $('.popText').append('<p>注册云平台后，</p><p>自动为您送上一张58代金券，请您关注!</p>')
                        } else {
                            $('.popText').append('<p>流量到账后，</p><p>会有短信提示，请您关注!</p>')
                        }

                    } else if (data.status == "no") {
                        alert("提交失败，请联系现场工作人员！");
                    } else if (data.status == "no1") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>提交失败</p><p>同一手机或微信号只能参与一次活动！</p>')
                    } else if (data.status == "no2") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>提交失败</p><p>同一手机或微信号只能参与一次活动！</p>')
                    } else if (data.status == "no3") {
                        alert("手机号不正确！");
                    }
                    else if (data.status == "no4") {
                        alert("验证码不能为空");
                    }
                    else if (data.status == "no5") {
                        alert("验证码错误");

                    }
                    else if (data.status == "no6") {
                        $('#mask').remove();
                        $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                        $('.popText,.popMesArea').empty();
                        $('#turnplate-getbtn').hide();
                        $('#turnplate-sharebtn').removeClass('fr')
                        $('.popText').append('<p>提交失败</p><p>只能在手机微信参与此活动！</p>')
                    }
                }

        });
    }

}
//领取输入手机号
function sureBtnFun(tipFlag) {
    if (tipFlag == "短信提示" || tipFlag == '无提示') {
        var phoneTest = /^1[34578]\d{9}$/;
        var phoneVal = $('#phoneVal').val();
        var codeVal = $('#phoneCode').val();
        if (phoneVal == '') {
            $('#phoneVal').next().text('请输入手机号');
        } else if (phoneTest.test(phoneVal) != true) {
            $('#phoneVal').next().text('请输入正确的手机号码');
        } else if (codeVal == '') {
            $('#phoneCode').next().next().text('请输入验证码');
        } else {
            console.log(tipFlag)
            if (tipFlag == '短信提示') {
                //接口请求success成功后执行
                $('#mask').remove();
                $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
                $('.popText,.popMesArea').empty();
                $('#turnplate-getbtn').hide();
                $('#turnplate-sharebtn').removeClass('fr')
                $('.popText').append('<p>流量到账后，</p><p>会有短信提示，请您关注!</p>')
            };
            if (tipFlag == '无提示') {
                //接口请求success成功后执行
                $('#mask').remove();
                $('.popColouBar').hide();
                $('.popBox').hide();
            };
        }
    } else {
        $('#mask').remove();
        $('.popBox').hide();
    }
}
//中奖信息轮播
$(function () {
    var num = $('.notice_active').find('li').length;
    if (num > 1) {
        var time = setInterval('carousel(".notice_active")', 3000);
        $('.gg_more a').mousemove(function () {
            clearInterval(time);
        }).mouseout(function () {
            time = setInterval('carousel(".notice_active")', 3000);
        });
    };
    $(".news_ck").click(function () {
        location.href = $(".notice_active .notice_active_ch").children(":input").val();
    })
});
function carousel(opj) {
    $(opj).find('ul').animate({
        marginTop: "-4rem"
    }, 500, function () {
        $(this).css({ marginTop: "0rem" }).find("li:first").appendTo(this);
    })
}
//普通手机号验证
function phoneTestBlur(obj) {
    var phone = Number($.trim($(obj).val()));
    var phoneTest = /^1[34578]\d{9}$/;
    if (phone == '') {
        $(obj).next().css('display', 'block').text('请输入手机号！');
    } else if (phoneTest.test(phone) != true) {
        $(obj).next().css('display', 'block').text('手机号格式错误，请重新输入！');
    } else {
        $(obj).next().css('display', 'none');
    };
}
//发送验证码倒计时函数
var countdown = 60;
function getCodeFun(val) {
    if (countdown == 0) {
        $(val).attr('value', '获取验证码');
        $(val).removeAttr('disabled');
        $(val).css('background', '#212b3a');
        countdown = 60;
    } else {

        $(val).css({
            background: '#ee2963',
            filter: 'alpha(opacity=50)',
            mozOpacity: '0.5',
            opacity: '0.5'
        });
        $(val).attr('value', countdown + '秒');
        $(val).attr('disabled', 'true');
        countdown--;
        setTimeout(function () {
            getCodeFun(val);
        }, 1000);
    };

}
//关闭弹出框
function closePopbox() {
    $('.popBox').hide();
    $('.popColouBar').hide();
    $('#mask').remove();
    window.location = location;
}
//关闭遗憾弹出框
function closeRegretbox() {
    $('.pityBox').hide();
    $('#mask').remove();
}

//获取地理位置
function getLocationFun() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(latitude, longitude) {
    //用户定位
    //var userlat1 = position.coords.latitude;
    //var userlng1 = position.coords.latitude;
    //展会方位置
    var lat2 = 22.833907999999996;//后端获取
    var lng2 = 108.31353299999998;//后端获取
    var distance = getDistance(latitude, longitude, lat2, lng2);
    return distance;
};
//依据经纬度获取两地距离
function Rad(d) {
    return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
}
function getDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;// EARTH_RADIUS;
    s = Math.floor(s * 10000) / 10000;  //输出为公里
    s = parseInt(s);
    return s;
}
