/**
* Created by rtttr on 2017/4/10.
*/
function blurqyNumber(value, dom) {
    var mobile = /^1(3[0-9]|5[0-9]|7[2-9]|8[0-9]|66|9[8-9])\d{8}$/;
    if (value == '') {
        errorTip(dom, "请输入您的手机号码");
        return true;
    }
    else if (value.length != 11 || !mobile.test(value)) {
        errorTip(dom, "请输入正确的手机号码");
        return true;
    }

}
function content_Dialog1() {
    var phone = $('#flowPhone').val();
    if (blurqyNumber(phone, "#error1")) {
        return;
    }
    $("#flowPhone").siblings("#error1").css("display", "none");
    return true;
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
