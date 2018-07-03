/**
 * Created by rtttr on 2017/9/29.
 */
function content_Dialog1() {
  // $("#yhb").append("<a href=\"javascript:void(0);\"><img id='yhbimg' src=\"../validates.ashx?f=yhb\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=yhb&ra='+rn;\" height=\"39\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog1").show();
}
function closePop1() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog1").hide();
}
function content_Dialog2() {
   // $("#yyyzm").append("<a href=\"javascript:void(0);\"><img id='yyyzmimg' src=\"../validates.ashx?f=yyyzm\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=yyyzm&ra='+rn;\" height=\"39\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog2").show();
}
function closePop2() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog2").hide();
}
function content_Dialog3() {
    //$("#sxhj").append("<a href=\"javascript:void(0);\"><img id='sxhjimg' src=\"../validates.ashx?f=sxhj\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=sxhj&ra='+rn;\" height=\"39\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog3").show();
}
function closePop3() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog3").hide();
}
function content_Dialog4() {
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog4").show();
}
function closePop4() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog4").hide();
}

var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
function check(dom) {
    if (!myreg.test($(dom).val())) {
        $(dom).siblings(".error").css("display", "block");
        return false;
    }
    if (myreg.test($(dom).val())) {
        $(dom).siblings(".error").css("display", "none");
        return true;
    }
}
function step1() {
    var dst = $("#yhbdst").val();
     // var yzm = $("#sxhjyzm").val();
    if (!myreg.test(dst)) {
        $("#yhbdst").siblings(".error").css("display", "block");
        return;
    }
    if (myreg.test(dst)) {
        $(".step1").show();
        $(".content_Dialog1").hide();
    }
}
function closePop_step1() {
    $(".modal-backdrop").css("display", "none");
    $(".step1").hide();
}
function step2() {
    var yyyzmphone = $("#yyyzmphone").val();
    if (!myreg.test(yyyzmphone)) {
        $("#yyyzmphone").siblings(".error").css("display", "block");
        return;
    }
    if (myreg.test(yyyzmphone)) {
        $(".step2").show();
        $(".content_Dialog2").hide();
    }
}
function closePop_step2() {
    $(".modal-backdrop").css("display", "none");
    $(document.body).css({
        "overflow-x": "none",
        "overflow-y": "none"
    });
    $(".step2").hide();
}
function step3() {
    var src = $("#sjphone").val();
    var cks = $("#ckphone").val();
   // var yzm = $("#sxhjyzm").val();
    if (!myreg.test(src)) {
        $("#sxhjsrc").siblings(".error1").css("display", "block");
        return;
    }
    if (myreg.test(src)) {
        $(".step3").show();
        $(".content_Dialog3").hide();
    }
    if (!myreg.test(cks)) {
        $("#ckphone").siblings(".error2").css("display", "block");
        return;
    }
    if (myreg.test(cks)) {
        $(".step3").show();
        $(".content_Dialog3").hide();
    }
}
function closePop_step3() {
    $(".modal-backdrop").css("display", "none");
    $(".step3").hide();
}
function step4() {
    var jshm= $("#jshm").val();
    //var yzm = $("#dxyzmnum").val();
    if (!myreg.test(jshm)) {
        $("#jshm").siblings(".error").css("display", "block");
        return;
    }
    if (myreg.test(jshm)) {
        $(".step4").show();
        $(".content_Dialog4").hide();
    }
}
function closePop_step4() {
    $(".modal-backdrop").css("display", "none");
    $(".step4").hide();
}

//电话咨询弹窗
function alertTip() {
    $("#sxhj").html("");
    $("#sxhj").append("<a href=\"javascript:void(0);\" style=\"float: right;margin-right: 10px; margin-top:10px;\"><img id='sxhjimg' src=\"../validates.ashx?f=sxhj\" style=\"border-radius: 2px;border: 1px solid #898989;\" width=\"120\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=sxhj&ra='+rn;\" height=\"42\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $("#Dialog-con").show();
    $(".modal-back").show();
}
function closePop() {
    $(".modal-backdrop").css("display", "none");
    $("#Dialog-con").hide();
    $(".modal-back").hide();
    sxhjclear();
    var src = $("#sxhjsrc").val("");

}
function closePop_step5() {
    $(".modal-backdrop").css("display", "none");
    $(".step5").hide();
}
function closePop_step6() {
    $(".modal-backdrop").css("display", "none");
    $(".step6").hide();
}









