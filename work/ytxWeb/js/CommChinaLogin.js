
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数
//timer处理函数
function setRemainTime() {
    if (curCount == 0) {
        $("#txtpiccode").val("");
        $("#imgcode").click();
        window.clearInterval(InterValObj); //停止计时器
        $(".remove").remove();
        $("#sendMsg").append('<span class="get-vcode2 remove"><a href="javascript:void(0);" onclick=sendVoice() class="getlink getlinker">没收到短信？点此获取语音验证码</a></span>');
    } else {
        curCount--;
        $(".remove").remove();
        $("#sendMsg").append('<span class="get-vcode2 remove"><a href="javascript:void(0);" class="getlink">没收到短信？' + curCount + '秒后点此获取语音验证码</a></span>');
    }
}
function sendMessage() {
    if ($("#txtmobile").val() == "") {
        alert("请先输入手机号!");
        return;
    }
    if ($("#txtmobile").next().text() == "手机号已存在" && $("#txtmobile").next().is(":visible")) {
        alert("手机号已存在,请重输手机号!");
        return;
    }
    if ($("#txtpiccode").val() == "") {
        alert("请先输入图形验证码!");
        return;
    }
    if ($("#txtpiccode").next().text() == "验证码不正确" && $("#txtpiccode").next().is(":visible")) {
        alert("图形验证码输入不正确!");
        return;
    }
    if ($("#txtmobile").next().text() == "手机号不正确" && $("#txtmobile").next().is(":visible")) {
        alert("手机号输入不正确!");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/validates.ashx",
        data: {
            f: "sendCode",
            p: function() {
                return $("#txtmobile").val();
            },
            m: function() {
                return $("#txtpiccode").val();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { },
        success: function(msg) {
            curCount = count;
            InterValObj = window.setInterval(setRemainTime, 1000); //启动计时器，1秒执行一次
        }
    });

}
function sendVoice() {
    if ($("#txtmobile").val() == "") {
        alert("请先输入手机号!");
        return;
    }
    if ($("#txtmobile").next().text() == "手机号已存在" && $("#txtmobile").next().is(":visible")) {
        alert("手机号已存在,请重输手机号!");
        return;
    }
    if ($("#txtpiccode").val() == "") {
        alert("请先输入图形验证码!");
        return;
    }
    if ($("#txtpiccode").next().text() == "验证码不正确" && $("#txtpiccode").next().is(":visible")) {
        alert("图形验证码输入不正确!");
        return;
    }
    if ($("#txtmobile").next().text() == "手机号不正确" && $("#txtmobile").next().is(":visible")) {
        alert("手机号输入不正确!");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/validates.ashx",
        data: {
            f: "sendVoice",
            p: function() {
                return $("#txtmobile").val();

            },
            m: function() {
                return $("#txtpiccode").val();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { },
        success: function(msg) {
            $(".remove").remove();
            $("#sendMsg").append('<span class="error">请耐心等待，您将会接到电话为您播报验证码</span>');
        }
    });

}
$(document).ready(function() {
    var chk = document.getElementById('cbk1');
    chk.checked = true;
    $("#form1").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {

            txtname: {
                required: true,
                isEmailOrMobile: true
            },
            txtmail: {
                required: true,
                isEmail: true,
                remote: { //验证邮箱
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validateMail",
                        p: function() {
                            return $("#txtmail").val();
                        }
                    }
                }
            },
            txtPwd: {
                required: true,
                minlength: 6
            },
            txtPrepwd: {
                required: true,
                minlength: 6,
                equalTo: "#txtPwd"
            },
            txtmobile: {
                required: true,
                isMobile: true,
                remote: { //验证手机
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validateMobile",
                        p: function() {
                            return $("#txtmobile").val();
                        }
                    }
                }
            },
            txt_phonecode: {
                required: true,
                remote: { //验证手机验证码
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validatePhoneCode",
                        p: function() {
                            return $("#txt_phonecode").val();
                        }
                    }
                }
            },
            txtpiccode: {
                required: true,
                remote: { //验证码
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validateCode",
                        p: function() {
                            return $("#txtpiccode").val();
                        }
                    }
                }
            }
        },
        messages: {
            txtname: {
                required: "请输入账号"
            },
            txtmail: {
                required: "请输入邮箱",
                email: "邮箱格式不正确",
                remote: "邮箱已存在"
            },
            txtPwd: {
                required: "请输入新密码",
                rangelength: "密码不能小于6个字符"
            },
            txtPrepwd: {
                required: "请重复输入新密码",
                rangelength: "密码不能小于6个字符",
                equalTo: "两次输入密码不一致"
            },
            txtmobile: {
                required: "请输入手机号",
                isMobile: "手机号不正确",
                remote: "手机号已存在"
            },
            txt_phonecode: {
                required: "请输入手机验证码",
                remote: "手机验证码不正确"
            },
            txtpiccode: {
            required: "请输入校验码",
            remote: "校验码不正确"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');
        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');
        },
        errorPlacement: function(error, element) {
            if (element.is("#txtname")) {
                //error.appendTo(element.parent());
                $(element).siblings("span").html(error);

            }
            if (element.is("#txtmail")) {
                //error.appendTo(element.parent());
                $(element).siblings("span").html(error);
            }
            if (element.is("#txtPwd")) {
                //error.appendTo(element.parent());
                $(element).siblings("span").html(error);
            }
            if (element.is("#txtPrepwd")) {
                // error.appendTo(element.parent());
                $(element).siblings("span").html(error);
            }
            if (element.is("#txtmobile")) {
                //error.appendTo(element.parent());
                $(element).siblings("span").html(error);
            }
            if (element.is("#txt_phonecode")) {
                //error.appendTo(element.parent());
                $(element).siblings("span").html(error);
            }
            if (element.is("#txtpiccode")) {
                //error.appendTo(element.parent());
                $("#span_err").html(error);
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $("#frmpwd").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {
            txtname: {
                required: true,
                isEmailOrMobile: true,
                remote: { //验证是否存在
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validateMailOrMobile",
                        p: function() {
                            return $("#txtname").val();
                        }
                    }
                }
            },
            txtpiccode: {
                required: true,
                remote: { //验证码
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validateCode",
                        p: function() {
                            return $("#txtpiccode").val();
                        }
                    }
                }
            }
        },
        messages: {
            txtname: {
                required: "请输入邮箱/手机号",
                remote: "邮箱/手机号不存在"
            },
            txtpiccode: {
                required: "请输入验证码",
                remote: "验证码不正确"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');

        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');

        },
        errorPlacement: function(error, element) {
            if (element.is("#txtname")) {
                $("#loginbg1").attr("style", "width:430px; height:270px; margin:auto; padding-top:140px;");
                $(".wid821").attr("style", "width:82px; height:36px; padding-left:16px; position:absolute;left:711px;");
                error.appendTo(element.parent());
            }
            if (element.is("#txtpiccode")) {
                $("#loginbg1").attr("style", "width:430px; height:270px; margin:auto; padding-top:140px;");
                $(".wid821").attr("style", "width:82px; height:36px; padding-left:16px; position:absolute;left:711px;");
                error.appendTo(element.parent());
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#frmSetPwd").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {

            txtPwd: {
                required: true,
                minlength: 6
            },
            txtPrepwd: {
                required: true,
                minlength: 6,
                equalTo: "#txtPwd"
            }
        },
        messages: {

            txtPwd: {
                required: "请输入新密码",
                rangelength: "密码不能小于6个字符"
            },
            txtPrepwd: {
                required: "请重复输入新密码",
                rangelength: "密码不能小于6个字符",
                equalTo: "两次输入密码不一致"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');
        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');
        },
        errorPlacement: function(error, element) {

            if (element.is("#txtPwd")) {
                error.appendTo(element.parent());
            }
            if (element.is("#txtPrepwd")) {
                error.appendTo(element.parent());
            }

        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#frmphone").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {

            txtcode: {
                required: true,
                remote: { //验证码
                    type: "POST",
                    url: "/validates.ashx",
                    data: {
                        f: "validatePhoneCode",
                        p: function() {
                            return $("#txtcode").val();
                        }
                    }
                }
            }
        },
        messages: {
            txtcode: {
                required: "请输入手机验证码",
                remote: "手机验证码不正确"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');
        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');
        },
        errorPlacement: function(error, element) {
            if (element.is("#txtcode")) {
                error.appendTo(element.parent());
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    // 手机或邮箱可以登录
    jQuery.validator
	.addMethod(
		"isEmailOrMobile",
		function(value, element, params) {
		    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		    var email = /^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9_\.\-])+\.[a-zA-Z]{2,4}$/;
		    return (email.test(value) || mobile.test(value));
		}, "输入错误");
    $("#txtPwd").keyup(function() {
        CheckIntensity($(this).val());
    });
    jQuery.validator
			.addMethod(
					"isEmail",
					function(value, element) {
					    var length = value.length;
					    var email = /^([a-zA-Z0-9_\.\-])+[_\.\-]*([a-zA-Z0-9])+@([a-zA-Z0-9_\.\-])+\.[a-zA-Z]{2,4}$/;
					    return (email.test(value));
					}, "邮箱格式不正确");
    function CheckIntensity(pwd) {
        //	1. 如果输入的密码位数少于5位，那么就判定为弱。
        //2. 如果输入的密码只由数字、小写字母、大写字母或其它特殊符号当中的一种组成，则判定为弱。
        //3. 如果密码由数字、小写字母、大写字母或其它特殊符号当中的两种组成，则判定为中。
        //4. 如果密码由数字、小写字母、大写字母或其它特殊符号当中的三种以上组成，则判定为强。
        var Mcolor,
		Wcolor,
		Scolor;
        var m = 0;
        var Modes = 0;
        for (i = 0; i < pwd.length; i++) {
            var charType = 0;
            var t = pwd.charCodeAt(i);
            if (t >= 48 && t <= 57) {
                charType = 1;
            } else if (t >= 65 && t <= 90) {
                charType = 2;
            } else if (t >= 97 && t <= 122) {
                charType = 4;
            } else {
                charType = 4;
            }
            Modes |= charType;
        }
        for (i = 0; i < 4; i++) {
            if (Modes & 1) {
                m++;
            }
            Modes >>>= 1;
        }
        if (pwd.length <= 4) {
            m = 1;
        }
        if (pwd.length <= 0) {
            m = 0;
        }
        switch (m) {
            case 1: //弱
                $("#p1").attr("class", "on");
                $("#p2").removeAttr("class");
                $("#p3").removeAttr("class");
                break;
            case 2: //中
                $("#p1").attr("class", "on");
                $("#p2").attr("class", "on");
                $("#p3").removeAttr("class");
                break;
            case 3: // 强
                $("#p1").attr("class", "on");
                $("#p2").attr("class", "on");
                $("#p3").attr("class", "on");
                break;
            default:
                $("#p1").removeAttr("class");
                $("#p2").removeAttr("class");
                $("#p3").removeAttr("class");
                break;
        }
    }
    jQuery.validator
			.addMethod(
					"isMobile",
					function(value, element) {
					    var length = value.length;
					    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
					    return this.optional(element)
								|| (length == 11 && mobile.test(value));
					}, "请正确填写手机号码");
});



function isNumber(value, tt) {
   
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (tt == 'speed') {
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
    else if (tt == 'regist') {
        if (value == '请输入手机号码') {
            $('#error9').html('请输入手机号码');
            return true;
        }
        else if (value.length != 11 || !mobile.test(value)) {
            $('#error9').html('输入错误');
            return true;
        } else {
            $('#error9').attr('style', 'display:none');
            return false;
        }
    }
}

var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数
var code; //当前剩余秒数
var pp; //登录手机号
function sendMessage(type, tt, imgCodeIdStr) {
    
    curCount = count;
    setCountdown(tt);
    if (tt == 'speed') {
        InterValObj = window.setInterval(setRemainTimespeed, 1000); //启动计时器，1秒执行一次
        pp = $('#phone').val();
        if (pp == '' || pp == '请输入您的手机号码') {
            $('#error').removeAttr('style');
            curCount = -1;
            return;
        }
        if (isNumber(pp,tt)) {
            curCount = -1;
            return;
        }
    }
    else if (tt == 'regist') {
        InterValObj = window.setInterval(setRemainTimeregist, 1000); //启动计时器，1秒执行一次
        pp = $('#txtmobile').val();
        if (pp == '' || pp == '请输入手机号码') {
            $('#error9').html('请输入手机号码');
            $('#error9').attr('color', 'red');
            curCount = -1;
            return;
        }
        if (isNumber(pp, tt)) {
            curCount = -1;
            return;
        }
    }
    if ($('#' + imgCodeIdStr).val() == undefined || $('#' + imgCodeIdStr).val() == '' || $('#' + imgCodeIdStr).val() == '请输入校验码') {
        $('#error_jym' + imgCodeIdStr).removeAttr('style');
        //alert('请输入校验码');
        curCount = -1;
        return;
    }else{
      $('#error_jym' + imgCodeIdStr).attr('style', 'display:none');
    }
    window.clearInterval(InterValObj); 
    $.ajax({
        type: 'POST',
        url: '/newloginvalidates.ashx',
        data: {
            f: type,
            p: pp,
            tuwenCode: function() { return $('#' + imgCodeIdStr).val(); }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { },
        success: function(msg) {
            if (msg == 'true') {
                if (tt == 'speed') {
                    if (type == 'sendCode') {
                        $('#error2').attr('style', 'display:none');
                        //$('#error3').attr('style', 'display:none');
                        $('#error1').html('验证码已发送到' + pp.replace(pp.substring(3, 7), '****') + '手机，请输入验证码');
                        $('#error1').removeAttr('style');
                        $('#error_jym').attr('style', 'display:none');
                    } else if (type == 'sendVoice') {
                        $('#error1').attr('style', 'display:none');
                        //$('#error3').attr('style', 'display:none');
                        $('#error2').removeAttr('style');
                    }
                    reloadCode();
                }
                else if (tt == 'regist') {
                    if (type == 'sendCode') {
                        $('#error6').attr('style', 'display:none');
                        //$('#error3').attr('style', 'display:none');
                        $('#error3').html('验证码已发送到' + pp.replace(pp.substring(3, 7), '****') + '手机，请输入验证码');
                        $('#error3').attr('color', 'red');
                        $('#error3').removeAttr('style');
                    } else if (type == 'sendVoice') {
                        $('#error3').attr('style', 'display:none');
                        $('#error6').html('语音验证码已发送，60s内输入有效。');
                        $('#error6').removeAttr('style');
                        $('#error6').attr('color', 'red');
                    }
                    reloadCode();
                }
            }
            else {
                $('#error_jym').removeAttr('style');
                curCount = 0;
                if (tt == 'speed') {
                    $('#error1').attr('style', 'display:none');
                    $('#error2').attr('style', 'display:none');
                    $('#Span4').html(msg.split('_')[1]);
                    if (msg.split('_')[0] > 2) {
                        $('[class="group clearfix"]').removeAttr('style');
                        $('#smscodeinput').removeAttr('disabled');
                        $('#smscodeinput').css('background-color', '#3ea3ff');
                    }
                }
                else if (tt == 'regist') {
                    $('#error3').attr('style', 'display:none');
                    $('#error6').attr('style', 'display:none');
                    $('#Span4').html(msg.split('_')[1]);
                    if (msg.split('_')[0] > 2) {
                        $('[class="group clearfix"]').removeAttr('style');
                        $('#smscode').removeAttr('disabled');
                        $('#smscode').css('background-color', '#3ea3ff');
                    }
                }
            }
        }
    });
}

//timer处理函数
function setRemainTimespeed() {
    if (curCount > 0) {
        setCountdown('speed');
        curCount--;
    } else if (curCount == 0) {
        window.clearInterval(InterValObj); //停止计时器
        clearCountdown('重新发送', 'speed');
    } else {
        clearCountdown('获取验证码', 'speed');
    }
}
//timer处理函数
function setRemainTimeregist() {
    if (curCount > 0) {
        setCountdown('regist');
        curCount--;
    } else if (curCount == 0) {
        window.clearInterval(InterValObj); //停止计时器
        clearCountdown('重新发送', 'regist');
    } else {
        clearCountdown('获取验证码', 'regist');
    }
}

function setCountdown(tt) {
    if (tt == 'speed') {
        $('#error7').attr('style', 'display:none');
        $('#smscodeinput').css('background-color', '#CCCCCC');
        $('#smscodeinput').attr('disabled', 'disabled');
        $('#smscodeinput').val('重新发送(' + curCount + '）');
    }
    else {
        $('#error4').attr('style', 'display:none');
        $('#smscode').css('background-color', '#CCCCCC');
        $('#smscode').attr('disabled', 'disabled');
        $('#smscode').val('重新发送(' + curCount + '）');
    }
}
function clearCountdown(msgTipTitle, tt) {
    if (tt == 'speed') {
        $('#smscodeinput').val(msgTipTitle);
        $('#smscodeinput').removeAttr('disabled');
        $('#smscodeinput').css('background-color', '#3ea3ff');
        $('#error7').removeAttr('style');
        $('#error3').attr('style', 'display:none');
    }
    else {
        $('#smscode').val(msgTipTitle);
        $('#smscode').removeAttr('disabled');
        $('#smscode').css('background-color', '#3ea3ff');
        $('#error4').removeAttr('style');
        $('#error6').attr('style', 'display:none');
    }
}