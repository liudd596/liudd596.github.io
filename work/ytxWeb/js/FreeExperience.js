

function content_Dialog1() {
    $("#yhb").html("");
    $("#yhb").append("<a href=\"javascript:void(0);\"><img id='yhbimg' src=\"../validates.ashx?f=yhb\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=yhb&ra='+rn;\" height=\"32\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog1").show();
}
function closePop1() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog1").hide();
    yhbclear()
}

function content_Dialog2() {
    $("#yyyzm").html("");
    $("#yyyzm").append("<a href=\"javascript:void(0);\"><img id='yyyzmimg' src=\"../validates.ashx?f=yyyzm\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=yyyzm&ra='+rn;\" height=\"32\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog2").show();
}
function closePop2() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog2").hide();
    yyyzmclear();
}

function content_Dialog3() {
    $("#sxhj").html("");
    $("#sxhj").append("<a href=\"javascript:void(0);\"><img id='sxhjimg' src=\"../validates.ashx?f=sxhj\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=sxhj&ra='+rn;\" height=\"32\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog3").show();
}
function closePop3() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog3").hide();
    sxhjclear();
}

function content_Dialog4() {
    $(".modal-backdrop").css("display", "block");;
    $(".content_Dialog4").show();
}
function closePop4() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog4").hide();
   
}

function content_Dialog5() {
    $("#dxyzm").html("");
    $("#dxyzm").append("<a href=\"javascript:void(0);\"><img id='dxyzmimg' src=\"../validates.ashx?f=dxyzm\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=dxyzm&ra='+rn;\" height=\"32\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog5").show();
}
function closePop5() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog5").hide();
    dxyzmclear();
}

function content_Dialog6() {
    $("#dfth").html("");
    $("#dfth").append("<a href=\"javascript:void(0);\"><img id='dfthimg' src=\"../validates.ashx?f=dfth\" style=\"border-radius: 4px;border: 1px solid #898989;\" width=\"95\" onclick=\"javascript:var rn=Math.random();this.src='../validates.ashx?f=dfth&ra='+rn;\" height=\"32\"/></a>");
    $(".modal-backdrop").css("display", "block");
    $(".content_Dialog6").show();
}
function closePop6() {
    $(".modal-backdrop").css("display", "none");
    $(".content_Dialog6").hide();
    dfthclear()
}

var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
function check(dom) {
    if (!myreg.test($(dom).val())) {
        $(dom).siblings(".error").css("display", "block");
        return false;
    }
       $(dom).siblings(".error").css("display", "none");
    return true;

}
function step1() {
    $("#yzinfo1").css("display", "none");
    var src = $("#yhbsrc").val();
    var dst = $("#yhbdst").val();
    var yzm = $("#yhbyzm").val(); 
    if (!myreg.test(src)) {
        $("#yhbsrc").siblings(".error").css("display", "block");
        return;
    }
    if (!myreg.test(dst)) {
        $("#yhbdst").siblings(".error").css("display", "block");
        return;
    }
    if (src.trim() == dst.trim()) {
        $("#yzinfo1").css("display", "block");
        $("#yzinfo1").html("主被叫号码不能相同");
        return;
    }
    $.ajax({
        url: "FreeExperience.ashx?method=yhbtest",
        type: "post",
        traditional: true,
        data: {
            src: src,
            dst: dst,
            yzm: yzm
        },
        dataType: "json"
    }).done(function(data) {
    clickme("yhbimg")
        
        if (data.statusCode == "0") {
            alert("体验成功，谢谢参与！");
            //            $(".modal-backdrop").css("display", "block");
            //            $(document.body).css({
            //                "overflow-x": "auto",
            //                "overflow-y": "auto"
            //            });
            //            $(".step1").show();
            //            $(".content_Dialog1").hide();
            //yhbclear()
        } else if (data.statusCode == "-1") {
            alert(data.statusMsg);
           // $("#yzinfo1").css("display", "block");
           // $("#yzinfo1").html(data.statusMsg);
        } else {
            //$("#yzinfo1").css("display", "block");
            //$("#yzinfo1").html("提交失败");
            alert("提交失败！");
        }
    });
}
    function closePop_step1() {
        $(".modal-backdrop").css("display", "none");
        $(document.body).css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
        $(".step1").hide();
    }
    function yhbclear() {
        $("#yhbsrc").val("");
        $("#yhbdst").val("");
        $("#yhbyzm").val("");
        $("#yhbsrc").siblings(".error").css("display", "none");
        $("#yhbdst").siblings(".error").css("display", "none");
        $("#yzinfo1").css("display", "none");
    }


     function step2() {
         $("#yzinfo2").css("display", "none");
         var yyyzmphone = $("#yyyzmphone").val();
         var yzm = $("#yyyzmnum").val();
         if (!myreg.test(yyyzmphone)) {
             $("#yyyzmphone").siblings(".error").css("display", "block");
             return;
         }
         $.ajax({
             url: "FreeExperience.ashx?method=yyyzmtest",
             type: "post",
             data: {
                 phone: yyyzmphone,
                 yzm: yzm
             },
             dataType: "json"
         }).done(function(data) {
             clickme("yyyzmimg")
         if (data.statusCode == "0") {
             alert("体验成功，谢谢参与！");
//                 $(".modal-backdrop").css("display", "block");
//                 $(document.body).css({
//                     "overflow-x": "auto",
//                     "overflow-y": "auto"
//                 });
//                 $(".step2").show();
//                 $(".content_Dialog2").hide();
//                 yyyzmclear();

         } else if (data.statusCode == "-1") {
              alert(data.statusMsg);
//                 $("#yzinfo2").css("display", "block");
//                 $("#yzinfo2").html(data.statusMsg);
             } else {
//                 $("#yzinfo2").css("display", "block");
//                 $("#yzinfo2").html("提交失败");
              alert("提交失败！");
             }

         });


     }

     function yyyzmclear() {
         $("#yyyzmphone").val("");
         $("#yyyzmnum").val("");
         $("#yyyzmphone").siblings(".error").css("display", "none");
         $("#yyyzmnum").siblings(".error").css("display", "none");
         $("#yzinfo2").css("display", "none");
     }
function closePop_step2() {
    $(".modal-backdrop").css("display", "none");
     $(document.body).css({
         "overflow-x": "auto",
         "overflow-y": "auto"
     });
    $(".step2").hide();
}

function step3() {
    $("#yzinfo3").css("display", "none");
    var src = $("#sxhjsrc").val();
    var yzm = $("#sxhjyzm").val();
    if (!myreg.test(src)) {
        $("#sxhjsrc").siblings(".error").css("display", "block");
        return;
    }
    $.ajax({
    url: "FreeExperience.ashx?method=sxhjtest",
        type: "post",
        traditional: true,
        data: {
        src: src,
            yzm: yzm,
            zx:0
        },
        dataType: "json"
    }).done(function(data) {
    clickme("sxhjimg")
    if (data.statusCode == "0") {
//            $(".modal-backdrop").css("display", "block");
//            $(document.body).css({
//                "overflow-x": "auto",
//                "overflow-y": "auto"
//            });
//            $(".step3").show();
//            $(".content_Dialog3").hide();
//            sxhjclear()
        alert("体验成功，谢谢参与！");
            
        } else if (data.statusCode == "-1" || data.statusCode == "-2") {
//        $("#yzinfo3").css("display", "block");
//        $("#yzinfo3").html(data.statusMsg);
        alert(data.statusMsg);
    } else {
//    $("#yzinfo3").css("display", "block");
    //    $("#yzinfo3").html("提交失败");
    alert("提交失败！");
    }


    });
}
function sxhjclear() {
    $("#sxhjsrc").val("");
    $("#sxhjyzm").val("");
    $("#sxhjsrc").siblings(".error").css("display", "none");
    $("#sxhjyzm").siblings(".error").css("display", "none");
    $("#yzinfo3").css("display", "none");
}

function closePop_step3() {
    $(".modal-backdrop").css("display", "none");
    $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });
    $(".step3").hide();
}

function step5() {
    $("#yzinfo5").css("display", "none");
    var dxyzmphone = $("#dxyzmphone").val();
    var yzm = $("#dxyzmnum").val();
    if (!myreg.test(dxyzmphone)) {
        $("#dxyzmphone").siblings(".error").css("display", "block");
        return;
    }
    
   

    $.ajax({
    url: "FreeExperience.ashx?method=dxyzmtest",
        type: "post",
        traditional: true,
        data: {
           phone: dxyzmphone,
            yzm: yzm
        },
        dataType: "json"
    }).done(function(data) {

    clickme("dxyzmimg")

    if (data.statusCode == "0") {
        var img = $('.timebox').find('img');
        img.attr('src', '../New_Ytx/images/common/djs.gif');
           // $(".modal-backdrop").css("display", "block");
           // $(document.body).css({
           //     "overflow-x": "auto",
            //    "overflow-y": "auto"
           // });
           // $(".step5").show();
           // $(".content_Dialog5").hide();
            //dxyzmclear()

    } else if (data.statusCode == "-1") {
    alert(data.statusMsg);
   //    $("#yzinfo5").css("display", "block");
   //     $("#yzinfo5").html(data.statusMsg);
           
        } else {
      //  $("#yzinfo5").css("display", "block");
    //    $("#yzinfo5").html("提交失败");
        alert("提交失败！");
        }   

    });
}

function dxyzmclear() {
    $("#dxyzmphone").val("");
    $("#dxyzmnum").val("");
    $("#dxyzmphone").siblings(".error").css("display", "none");
    $("#dxyzmnum").siblings(".error").css("display", "none");
    $("#yzinfo5").css("display", "none");
}
function closePop_step5() {
    $(".modal-backdrop").css("display", "none");
     $(document.body).css({
         "overflow-x": "auto",
         "overflow-y": "auto"
     });
    $(".step5").hide();
   //window.location.reload();
}

function step6() {
    $("#yzinfo6").css("display", "none");
    var phone1 = $("#dfthphone1").val();
    var phone2 = $("#dfthphone2").val();
    var phone3 = $("#dfthphone3").val();
    var yzm = $("#dfthyzm").val();
    if (phone1 == "" || phone2 == "" || phone3 == "") {
        $(".error6").css("display", "block");
        return false;
    }
    if (!myreg.test(phone1)) {
        $("#phone1").siblings(".error").css("display", "block");
        return;
    }
    if (!myreg.test(phone2)) {
        $("#phone2").siblings(".error").css("display", "block");
        return;
    }
    if (!myreg.test(phone3)) {
        $("#phone3").siblings(".error").css("display", "block");
        return;
    }
    if (phone1.trim() == phone2.trim() || phone1.trim() == phone3.trim() || phone3.trim() == phone2.trim()) {
        $("#yzinfo6").css("display", "block");
        $("#yzinfo6").html("号码不能相同");
        return
    }
   
    $.ajax({
        url: "FreeExperience.ashx?method=dfthtest",
        type: "post",
        data: {
            phone1: phone1,
            phone2: phone2,
            phone3: phone3,
            yzm: yzm
        },
        dataType: "json"
    }).done(function(data) {
        clickme("dfthimg")
    if (data.statusCode == "0") {
        alert("体验成功，谢谢参与！");
//            $(".modal-backdrop").css("display", "block");
//            $(document.body).css({
//                "overflow-x": "auto",
//                "overflow-y": "auto"
//            });
//            $(".step6").show();
//            $(".content_Dialog6").hide();
            //            dfthclear();

    } else if (data.statusCode == "-1") {
       alert(data.statusMsg);
//            $("#yzinfo6").css("display", "block");
//            $("#yzinfo6").html(data.statusMsg);
   } else {
        
//            $("#yzinfo6").css("display", "block");
   //            $("#yzinfo6").html("提交失败");
   alert("提交失败！");
        }

    });
}
function dfthclear() {
    $("#dfthphone1").val("");
    $("#dfthphone2").val("");
    $("#dfthphone3").val("");
    $("#dfthyzm").val("");
    $("#dfthphone1").siblings(".error").css("display", "none");
    $("#dfthphone2").siblings(".error").css("display", "none");
    $("#dfthphone3").siblings(".error").css("display", "none");
    $("#dfthyzm").siblings(".error").css("display", "none");
    $("#yzinfo6").css("display", "none");
}

function closePop_step6() {
    $(".modal-backdrop").css("display", "none");
    $(document.body).css({
        "overflow-x": "auto",
        "overflow-y": "auto"
    });

    $(".step6").hide();
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


