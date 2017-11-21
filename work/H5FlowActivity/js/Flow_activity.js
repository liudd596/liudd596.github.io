/**
* Created by rtttr on 2017/4/10.
*/
function blurqyNumber(value, dom) {
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (value == '') {
        errorTip(dom, "请输入您的手机号码");
        return true;
    }
    else if (value.length != 11 || !mobile.test(value)) {
        errorTip(dom, "请输入您的手机号码");
        return true;
    }
}
function content_Dialog1() {
    var phone = $('#flowPhone').val();
    if (blurqyNumber(phone, "#error1")) {
        return;
    }


    if (phone == "1") {
        errorTip('#error1', "本号码已领取过流量红包，感谢您的参与");
        return;
    }
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog1").show();
}
function closePop1() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog1").hide();

}
function content_Dialog2() {

    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog2").show();
}
function closePop2() {
    var phone = $('#historyPhone').val();
    if (blurqyNumber(phone, "#error2")) {
        return;
    }



    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog2").hide();
}

function errorTip(dom, errText) {
    $(dom).html(errText);
    $(dom).removeAttr('style');
}
function myonchange(e, msg) {
    if (e.value == '') {
        e.value = msg;
    }
}
function myonfocus(e, msg) {
    if (e.value == msg) { e.value = '' };
}
