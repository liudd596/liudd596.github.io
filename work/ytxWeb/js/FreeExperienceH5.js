var mobileReg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
var phoneReg = /^(0\d{2,3})(\d{7,8})$/;
function check(dom) {
    if (!mobileReg.test($(dom).val())) {
        $(dom).siblings(".p_err").css("display", "block");
        $(dom).siblings(".p_err").html("请输入正确的手机号码");
        return false;
    }
    $(dom).siblings(".p_err").css("display", "none");
    return true;
}
function checkphone(dom) {
    if (!mobileReg.test($(dom).val()) && !phoneReg.test($(dom).val())) {
        $(dom).siblings(".p_err").css("display", "block");
        return false;
    }
    $(dom).siblings(".p_err").css("display", "none");
    return true;
}
function errMsgReSet(type) {
    $("#" + type).siblings(".p_err").css("display", "block");
    $("#" + type).siblings(".p_err").html("请输入正确的手机号码");
}
function myonfocus(dom) {
    $(dom).siblings(".p_err").css("display", "none"); 
}
function submitHidden(type) {
    var urlD = "/New_Ytx/FreeExperience.ashx?method=yhbtest";
    var src = $("#yhbsrc").val();
    var dst = $("#yhbdst").val();
    var yzm = $("#yhbimg").val();
    if (!mobileReg.test(src)) {
        errMsgReSet('yhbsrc');
        return;
    }
    if (!mobileReg.test(dst)) {
        errMsgReSet('yhbdst');
        return;
    }
    if (src.trim() == dst.trim()) {
        $("#yhbdst").siblings(".p_err").css("display", "block");
        $("#yhbdst").siblings(".p_err").html("主被叫号码不能相同");
        return;
    }
    if (yzm.trim() =='') {
        $("#yhbimg").siblings(".p_err").css("display", "block");
        $("#yhbimg").siblings(".p_err").html("验证码不能为空");
        return;
    }
    if (type == 'sxhj') {
        urlD = "/New_Ytx/FreeExperience.ashx?method=sxhjtest";
    }
    $.ajax({
        url: urlD,
        type: "post",
        traditional: true,
        data: {
            src: src,
            dst: dst,
            yzm: yzm,
            zx: 0
        },
        dataType: "json"
    }).done(function(data) {
        clickme("yhbimg");
        if (data.statusCode == "0") {
            window.location.href = '/WeiXin_experience/Exp_succeed.html';
        } else if (data.statusCode == "-1") {
            $("#yhbimg").siblings(".p_err").css("display", "block");
            $("#yhbimg").siblings(".p_err").html(data.statusMsg);
        } else {
            $("#yhbimg").siblings(".p_err").css("display", "block");
            $("#yhbimg").siblings(".p_err").html("提交失败");
        }
    });
}
function submitFlow() {
    var urlD = "/New_Ytx/FreeExperience.ashx?method=sxhjtest";
    var src = $("#yhbsrc").val();
    var yzm = $("#yhbimg").val();
    if (!mobileReg.test(src) && !phoneReg.test(src)) {
        $("#yhbsrc").siblings(".p_err").css("display", "block");
        return;
    }
    if (yzm.trim() == '') {
        $("#yhbimg").siblings(".p_err").css("display", "block");
        $("#yhbimg").siblings(".p_err").html("验证码不能为空");
        return;
    }
    $.ajax({
        url: urlD,
        type: "post",
        traditional: true,
        data: {
            src: src,
            yzm: yzm,
            zx: 0
        },
        dataType: "json"
    }).done(function(data) {
        clickme("yhbimg");
        if (data.statusCode == "0") {
            alert("提交成功！");
        } else if (data.statusCode == "-1") {
            $("#yhbimg").siblings(".p_err").css("display", "block");
            $("#yhbimg").siblings(".p_err").html(data.statusMsg);
        } else {
            $("#yhbimg").siblings(".p_err").css("display", "block");
            $("#yhbimg").siblings(".p_err").html("提交失败");
        }
    });
}
function submitDxyzm(type) {
    var urlD = "/New_Ytx/FreeExperience.ashx?method=dxyzmtest";
    var dxyzmphone = $("#phone").val();
    var yzm = $("#yzmnum").val();
    if (!mobileReg.test(dxyzmphone)) {
        errMsgReSet("phone");
        return;
    }
    if (yzm.trim() == '') {
        $("#yzmnum").siblings(".p_err").css("display", "block");
        $("#yzmnum").siblings(".p_err").html("验证码不能为空");
        return;
    }
    if (type == 'yyyzmphone') {
        urlD = "/New_Ytx/FreeExperience.ashx?method=yyyzmtest";
    }
    $.ajax({
    url: urlD,
        type: "post",
        traditional: true,
        data: {
            phone: dxyzmphone,
            yzm: yzm
        },
        dataType: "json"
    }).done(function(data) {
        clickme("yzmnum");
        if (data.statusCode == "0") {
            window.location.href = '/WeiXin_experience/Exp_succeed.html';
        } else if (data.statusCode == "-1") {
            $("#yzmnum").siblings(".p_err").css("display", "block");
            $("#yzmnum").siblings(".p_err").html(data.statusMsg);
        } else {
            $("#yzmnum").siblings(".p_err").css("display", "block");
            $("#yzmnum").siblings(".p_err").html("提交失败");
        }
    });
}
function submitDfth() {
    var phone1 = $("#dfthphone1").val();
    var phone2 = $("#dfthphone2").val();
    var phone3 = $("#dfthphone3").val();
    var yzm = $("#dfthyzm").val();
    if (!mobileReg.test(phone1)) {
        errMsgReSet("dfthphone1");
        return;
    }
    if (!mobileReg.test(phone2)) {
        errMsgReSet("dfthphone2");
        return;
    }
    if (!mobileReg.test(phone3)) {
        errMsgReSet("dfthphone3");
        return;
    }
    if (phone1.trim() == phone2.trim() || phone1.trim() == phone3.trim() || phone3.trim() == phone2.trim()) {
        $("#dfthyzm").siblings(".p_err").css("display", "block");
        $("#dfthyzm").siblings(".p_err").html("号码不能相同");
        return
    }
    if (yzm.trim() == '') {
        $("#dfthyzm").siblings(".p_err").css("display", "block");
        $("#dfthyzm").siblings(".p_err").html("验证码不能为空");
        return;
    }
    $.ajax({
        url: "/New_Ytx/FreeExperience.ashx?method=dfthtest",
        type: "post",
        data: {
            phone1: phone1,
            phone2: phone2,
            phone3: phone3,
            yzm: yzm
        },
        dataType: "json"
    }).done(function(data) {
    clickme("dfthyzm")
        if (data.statusCode == "0") {
            window.location.href = '/WeiXin_experience/Exp_succeed.html';
        } else if (data.statusCode == "-1") {
        $("#dfthyzm").siblings(".p_err").css("display", "block");
        $("#dfthyzm").siblings(".p_err").html(data.statusMsg);
        } else {
        $("#dfthyzm").siblings(".p_err").css("display", "block");
        $("#dfthyzm").siblings(".p_err").html("提交失败");
        }
    });
}
function clickme(dom) {
    //IE
    if (document.all) {
        document.getElementById(dom).click();
    }
    // 其它浏览器
    else {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        document.getElementById(dom).dispatchEvent(e);
    }
}