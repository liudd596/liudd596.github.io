String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
String.prototype.ltrim = function () {
	return this.replace(/(^\s*)/g, "");
};
String.prototype.rtrim = function () {
	return this.replace(/(\s*$)/g, "");
};

function closeMe() {
	// $("#cboxClose").click();
	$.fn.colorbox.close();
}

function closeMeWithinIframe() {
	parent.$.fn.colorbox.close();
}

function IsURL(str_url) {
	var strRegex = "^((https|http|ftp|rtsp|mms)://)"
		// + "(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?"
		// //ftp的user@
		 + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
		 + "|" // 允许IP和DOMAIN（域名）
		 + "([0-9a-zA-Z_!~*'()-]+\.)*" // 域名- www.
		 + "([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\." // 二级域名
		 + "[a-zA-Z]{2,6})" // first level domain- .com or .museum
		 + "(:[0-9]{1,4})?" // 端口- :80
		 + "((/?))";
	var re = new RegExp(strRegex);
	// re.test()
	if (re.test(str_url)) {
		return (true);
	} else {
		return (false);
	}
}
function isTelOrMobel(number) {
	var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var tel = /^0+\d{10,11}$/;
	return (tel.test(number) || mobile.test(number));
}

/**
 * 判断是否包含全角字符
 *
 * @param str
 * @returns {Boolean}
 */
function chkHalf(str) {
	for (var i = 0; i < str.length; i++) {
		strCode = str.charCodeAt(i);
		if ((strCode > 65248) || (strCode == 12288)) {
			/*
			 * alert("有全角字符"); break;
			 */
			return false;
		}
	}
	return true;
}

// 全角转换为半角函数
function toCDB(str) {
	var tmp = "";
	for (var i = 0; i < str.length; i++) {
		if ("，。！".indexOf(str.charCodeAt(i)) < 0 && str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
			tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
		} else {
			tmp += String.fromCharCode(str.charCodeAt(i));
		}
	}
	return tmp;
}
function showyzyimgdialog(obj) {
	var d = dialog({
			title : '验证页截图示例',
			height : 505,
			content : "<img height='500' width='400' src='../../images/yzy.png'></img>",
			lock : true
		});
	d.show();
}

function showcpmimgdialog(obj) {
	var d = dialog({
			title : '产品名截图示例',
			height : 505,
			content : "<img height='500' width='400' src='../../images/cpm.png'></img>",
			lock : true
		});
	d.show();
}

function showUpFile() {
	$("#p_file").hide();
	$("#p_up").show();
}

$(document).ready(function() {
    jQuery.validator
	.addMethod(
		"isMobile",
		function(value, element) {
		    var length = value.length;
		    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		    return this.optional(element)
		 || (length == 11 && mobile.test(value));
		}, "请正确填写手机号码");

    jQuery.validator
	.addMethod(
		"TelorMobile",
		function(value, element) {
		    var length = value.length;
		    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		    var tel = /^0+\d{10,11}$/;
		    // var tel = /^\d{3,4}-?\d{7,9}$/;
		    return this.optional(element)
		 || (tel.test(value) || mobile.test(value));
		}, "请正确填写您的固话或手机号码");

    jQuery.validator.addMethod("notEqualTo", function(value, element, param) {
        return value != $(param).val();
    }, $.validator.format("两次输入不能相同!"));

    jQuery.validator.addMethod("onlyLetterAndDigit", function(value, element,
			params) {
        var regex = new RegExp('^[A-Za-z0-9]+$');
        return regex.test(value);
    }, "只能输入字母或数字");
    jQuery.validator.addMethod("onlyLetterAndChinese", function(value, element,
			params) {
        var regex = new RegExp('^[\\u4E00-\\u9FA5\\uF900-\\uFA2D\\w]');
        return regex.test(value);
    }, "只能输入字母或汉字");
    jQuery.validator.addMethod("isContainDig", function(value, element) {
        var pattern = new RegExp("[`~!@%#$^&*()=|{}':;',　\\[\\]<>/? \\.；：%……+￥（）【】‘”“'。，、？]");
        return this.optional(element) || !pattern.test(value);
    }, "不允许包含特殊符号!");
    jQuery.validator.addMethod("mustContainChinese", function(value, element) {
        return /[\u4e00-\u9fa5]/g.test(value);
    }, "必须至少有一个汉字!");
    jQuery.validator.addMethod("stringCheck", function(value, element) {
        return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
    }, "只能包括中文字、英文字母、数字和下划线");
    // 电话号码验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var tel = /^\d{3,4}-?\d{7,9}$/; // 电话号码格式010-12345678
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的电话号码");
    jQuery.validator.addMethod("onlyDigit", function(value, element, params) {
        var regex = new RegExp('^[0-9]+$');
        return regex.test(value);
    }, "只能输入数字");
    jQuery.validator
	.addMethod(
		"MobileOrTel",
		function(value, element) {
		    var length = value.length;
		    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		    // var tel = /^0+\d{10,11}$/;
		    var tel = /^\d{3,4}-?\d{7,9}$/;
		    return this.optional(element)
		 || (tel.test(value) || mobile.test(value));
		}, "请正确填写您的固话或手机号码");
    jQuery.validator.addMethod("byteRangeLength", function(value, element,
			param) {
        var length = value.length;
        for (var i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) > 127) {
                length++;
            }
        }
        return this.optional(element)
		 || (length >= param[0] && length <= param[1]);
    }, jQuery.validator.format("请确保输入的值在{0}-{1}个汉字之间(一个中文字算2个字节)"));
    // 邮政编码验证
    jQuery.validator.addMethod("isZipCode", function(value, element) {
        var tel = /^[0-9]{6}$/;
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的邮政编码");
    jQuery.validator.addMethod("isMoney", function(value, element) {
        // var money=/^\d+(\.\d{1,2})$|^\d*$/;
        var money = /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/;
        return this.optional(element) || money.test(value);
    }, "请输入正确的金额");
    // 输入是否含有中文
    jQuery.validator.addMethod("isNotChinese",
		function(value, element, params) {
		    var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
		    if (!patrn.exec(value)) {
		        return true;
		    } else {
		        return false;
		    }

		}, "输入不能含有汉字");
    jQuery.validator.addMethod("validNickName",
		function(value, element, params) {
		    // var regex = new RegExp('^[A-Za-z0-9_@]+$');
		    var regex = new RegExp(
				'^[\u4e00-\u9fa5]{2,6}$|^[a-zA-Z]+[A-Za-z0-9-_@]+$');
		    return regex.test(value);
		}, "只能输入字母、数字、_和@");

    // 手机或邮箱可以登录
    jQuery.validator
	.addMethod(
		"isEmailOrMobel",
		function(value, element, params) {
		    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		    var email = /^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9_\.\-])+\.[a-zA-Z]{2,4}$/;
		    return (email.test(value) || mobile.test(value));
		}, "输入错误");
    // 后台验证邮箱的有效性
    jQuery.validator.addMethod("checkValidEmail", function(value, element,
			params) {
        var result = false;
        $.ajax({
            url: ctx + "/user/reg/checkValidEmail",
            async: false,
            type: "POST",
            data: {
                email: value
            },
            dataType: "json",
            success: function(data) {
                result = data;
            }
        });
        return result;
    });


    $("#form1").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {
            tb_AppUrl: {
                required: {
                    depends: function() {
                        //alert($("input[name='radio']:checked").val());
                        return $('input[name="productType"]:checked').val() == 0;
                        //$("input[id='cb_callback']:checked").val() == "1"
                    }
                }
            },
            tb_Ymdz: {
                required: {
                    depends: function() {
                        return $('input[name="productType"]:checked').val() == 2;
                    }
                }
            },
            tb_TemplateTitle: {
                required: true,
                onlyLetterAndChinese: true,
                byteRangeLength: [0, 24]
            },
            tb_SignName: {
                required: true,
                isContainDig: true,
                mustContainChinese: true,
                rangelength: [3, 8]
            },
            tb_TemplateContent: {
                required: true,
                byteRangeLength: [0, 400]
                /* remote: {
                url: "/member/smsTemplate/checkSmsTemplateSig",
                type: "POST",
                cache: false,
                data: {
                content:function() {
                return $("#content").val();
                }
                }
                } */
            },
            tb_CompContent: {
                required: true,
                byteRangeLength: [0, 400]
            }
        },
        messages: {
            tb_TemplateTitle: {
                required: "请输入模板标题",
                onlyLetterAndChinese: "只允许输入汉字或字母"
            },
            tb_SignName: {
                required: "请输入签名",
                rangelength: "签名长度3~8个字符"
            },
            tb_TemplateContent: {
                required: "请输入模板内容"
                //remote:"请填写短信模板签名"
            },
            tb_CompContent: {
                required: "请输入完整内容"
                //remote:"请填写短信模板签名"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');

        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');

        },
        submitHandler: function(form) {
            //				var Imageidentity = $("#identity").val();
            //				if (Imageidentity == "") {
            //					alert("您未上传证件照或证件照上传失败！");
            //					return false;
            //				}
            //return false;
            //            if($('input[name="productType"]:checked').val()==1){
            //                //if hf_ymtp hf_cptp
            //                if($('#hf_ymtp').val()==''||$('#hf_cptp').val()==''){
            //                alert("您未上传证件照或证件照上传失败！");
            //                    return false;
            //                }
        //            }
            form.submit();
        }
    });

    var productType = $('#hf_cplb').val();
    $('input[name=productType][value=' + productType + ']:radio').attr('checked', 'checked');
    if (productType == 0) {
        $("#appdz").show();
        $("#ymdz").hide();
        $("#cptp").hide();
        $("#yztp").hide();
    }
    if (productType == 1) {
        $("#appdz").hide();
        $("#ymdz").hide();
        $("#cptp").show();
        $("#yztp").show();
    }
    if (productType == 2) {
        $("#appdz").hide();
        $("#ymdz").show();
        $("#cptp").hide();
        $("#yztp").hide();
    }

    $(":radio[name='productType']").click(function() {
        var productType = $(this).val();
        if (productType == 0) {
            $("#appdz").show();
            $("#ymdz").hide();
            $("#cptp").hide();
            $("#yztp").hide();
        }
        if (productType == 1) {
            $("#appdz").hide();
            $("#ymdz").hide();
            $("#cptp").show();
            $("#yztp").show();
        }
        if (productType == 2) {
            $("#appdz").hide();
            $("#ymdz").show();
            $("#cptp").hide();
            $("#yztp").hide();
        }
    });
    var ContType = $('#voicetype').val();
    //$('input[name=ContType]').removeAttr('checked');
    $("input[name='ContType'][value=" + ContType + "]").attr("checked", "checked"); //选中
    changeConttype(ContType);

      //  var TempTypes = $('#tempfid').val();
    //    $('input[name=TempType]').removeAttr('checked');
       // $("input[name='TempType'][value=" + TempTypes + "]").attr("checked", "checked"); //选中
      //  changeTempType(TempTypes);

    $(":radio[name='ContType']").click(function() {
        var ContType = $(this).val();
        changeConttype(ContType);
    });

      //  $(":radio[name='TempType']").click(function() {
        //    var TempType = $(this).val();
       //     changeTempType(TempType)

      //  });
    if ($("input[name='TempType']:checked").val() == "1") {
        changeTempType(1)
    }
    else {
        changeTempType(8)
    }
    $('#TempType').change(function() {
        if ($("input[name='TempType']:checked").val() == "1") {
            changeTempType(1)
        } else {

            changeTempType(8)
        }
    });
   
   
});
function changeConttype(val) {
    if (val == 2) {
        $("#ul_content").show();
        $("#ul_wav").hide();
    }
    if (val == 3) {
        $("#ul_content").hide();
        $("#ul_wav").show();
    }
}
function changeTempType(val) {
    if (val == 1) {
        $("#ul_sign").show();
        $("#ul_voicetype").hide();
        $("#ul_wav").hide();
        $("#ul_content").show();
    }
    if (val == 8) {
        var type = $(":radio[name='ContType']:checked").val();
        $("#ul_sign").hide();
        $("#ul_voicetype").show();
        changeConttype(type);
    }

}
