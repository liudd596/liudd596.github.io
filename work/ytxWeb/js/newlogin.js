function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
function blurqyNumber(value) {
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(166)|(17[0-9]{1})|(18[0-9]{1})|(19[8-9]{1}))+\d{8})$/;
    if (value == '请输入手机号码') {
        $('#error').attr('style', 'display:none');
        return true;
    }
    else if (value.length != 11 || !mobile.test(value)) {
    $('.input1').css('border', '1px solid #ff0000');
    $('#error').removeAttr('style');
    return true;
    } else {
    $('#error').attr('style', 'display:none');
    $('#duigou').attr('style', 'display:block');
    $('.input1').css('border', '1px solid #3ea3ff');
    return false;
    }
}
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数
var code; //当前剩余秒数
var pp; //登录手机号
function sendMessage(type) {
    curCount = count;
    setCountdown();
    InterValObj = window.setInterval(setRemainTime, 1000); //启动计时器，1秒执行一次
    pp = $('#phone').val();
    if (pp == '') {
        $('#error').removeAttr('style');
        curCount =-1;
      //  $('.input1').css('border', '1px solid #ff0000');
        //$('.input1').attr('style', 'border:1px solid #ff0000');
        return;
    }
    if (blurqyNumber(pp)) {
        curCount =-1;
        return;
    }
    $.ajax({
        type: 'POST',
        url: '/newloginvalidates.ashx',
        data: {
            f: type,
            p: pp,
            tuwenCode: function() { return $('#imgCode').val(); }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { },
        success: function(msg) {
            if (msg == 'true') {
                if (type == 'sendCode') {
                    $('#error2').attr('style', 'display:none');
                    $('#error3').attr('style', 'display:none');
                    $('#error1').html('你的验证码已发送到' + pp.replace(pp.substring(3, 7), '****') + '手机，请输入验证码登录');
                    $('#error1').removeAttr('style');
                    //$('#error7').removeAttr('style');
                } else if (type == 'sendVoice') {
                    $('#error1').attr('style', 'display:none');
                    $('#error3').attr('style', 'display:none');
                    $('#error2').removeAttr('style');
                }
                reloadCode();
            }
            else {
                curCount = 0;
                $('#error1').attr('style', 'display:none');
                $('#error2').attr('style', 'display:none');
                $('#error3').attr('style', 'display:none');
                $('#Span4').html(msg.split('_')[1]);
                $('#error3').removeAttr('style');
                $('.input2').css('border', '1px solid #3ea3ff');
                if (msg.split('_')[0] > 2) {
                    $('[class="group clearfix"]').removeAttr('style');
                    $('#smscodeinput').removeAttr('disabled');
                    $('#smscodeinput').css('background-color', '#3ea3ff');
                }
            }
        }
    });
}
//timer处理函数
function setRemainTime() {
    if (curCount > 0) {
        setCountdown();
        curCount--;
    } else if (curCount == 0) {
        window.clearInterval(InterValObj); //停止计时器
        clearCountdown('重新发送');
    } else {
        clearCountdown('获取验证码');
    }
}
function setCountdown() {
    $('#error7').attr('style', 'display:none');
    $('#smscodeinput').css('background-color', 'gray');
    $('#smscodeinput').attr('disabled', 'disabled');
    $('#smscodeinput').val('重新发送(' + curCount + '）');
}
function clearCountdown(msgTipTitle) {
    $('#smscodeinput').val(msgTipTitle);
    $('#smscodeinput').removeAttr('disabled');
    $('#smscodeinput').css('background-color', '#3ea3ff');
    $('#error7').removeAttr('style');
}

function Gethref(id, href) {
    var Ascription = getQueryStringByName("Ascription");
    document.getElementById(id).href = href + "?Ascription=" + Ascription;
}

function Getloginhref(id, href) {
    var Ascription = getQueryStringByName("Ascription");
    document.getElementById(id).href = href + "&Ascription=" + Ascription;
}

function myonchange(e, msg) {
    if (e.value == '') {
        e.value = msg;
        e.style.color = '#666';
    }
    $("#error5").css("display", "none");
    $('.input3').css('border', '1px solid #3ea3ff');
}
function myonfocus(e, msg) {
    if (e.value == msg) { e.value = '' };
    e.style.color = '#666';
}
function reloadCode() {
    var rn = Math.random();
    $('.js-load-code').attr('src', 'newloginvalidates.ashx?f=getTuWenCode&ra=' + rn);
}

function loginOrRegister(herf) {
    if (herf == 'commchina') {
        if (document.getElementById("Checkbox1").checked == false) {
            alert("您没有接受本站协议,不能免费试用!");
            return false;
        }
    }
    if ($('input[name="cbk"]').prop("checked")) {
        $('.read').css('color', '#000');
    }
    else {
        $('.read').css('color', '#ff0000');
        return;
    };
 
    //alert(getQueryStringByName("type"));return;
    pp = $('#phone').val();
    var vcode = $('#inputmovecode').val();
    if (pp == '') {
        $('#error').attr('style', 'display:none');
        $('#error1').attr('style', 'display:none');
        $('#error2').attr('style', 'display:none');
        return;
    }
    if (blurqyNumber(pp)) {
        return;
    }
   
    if (vcode == '请输入动态密码' || vcode == '') {
        $("#Span2").html('动态密码为空，请输入!');
        $('#error5').removeAttr('style');
        $('#error7').attr('style', 'display:none');
        $('.input3').css('border', '1px solid #ff0000');
        $('#error1').attr('style', 'display:none');
        return;
    }
    var Ascription = getQueryStringByName("Ascription");
    var Referer = getQueryStringByName("Referer");
    console.info("Ascription=" + Ascription + ";Referer=" + Referer);
    $.ajax({
        type: 'POST',
        url: '/newloginvalidates.ashx',
        data: {
            f: 'logins',
            movecode: vcode,
            p: pp,
            Ascription: Ascription,
            Referer: Referer
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { },
        success: function(msg) {
            if (msg == 'true') {
                $(document.body).css({
                    "overflow-x": "auto",
                    "overflow-y": "auto"
                });
                $(".modal-backdrop").css("display", "none");
                if (herf == 'commchina') {
                    window.parent.location.href = 'ytx.htm';
                }
                if (getQueryStringByName("type") == "") {
                    window.location.href = 'ytx.htm';
                }
                else {
                    window.location.href = 'ytx.htm?type=' + getQueryStringByName("type");
                }
            }
            else if (msg == 'false') {
                //$("#Span2").html('异常！');
                $('#error5').removeAttr('style');
                $('.input3').css('border', '1px solid #ff0000');
                $('#error7').removeAttr('style');
                $('#error1').attr('style', 'display:none');
            }
            else if (msg == 1) {
                $("#Span2").html('动态密码错误，请重新输入');
                $('#error5').removeAttr('style');
                $('.input3').css('border', '1px solid #ff0000');
                $('#error7').removeAttr('style');
                $('#error1').attr('style', 'display:none');
            }
            else if (msg == 2) {
                $("#Span2").html('动态密码过期，请重新获取');
                $('#error5').removeAttr('style');
                $('.input3').css('border', '1px solid #ff0000');
                $('#error7').attr('style', 'display:none');
                $('#error1').attr('style', 'display:none');
            }
        }
    });
   
}