$(document).ready(function () {

	$("#form1").validate({
		errorElement : "span",
		errorClass : "error",

		rules : {
			txtname : {
				required : true,
				isEmailOrMobile : true
			},
			txtpwd : {
				required : true
			},
			txtcode : {
				required : true,
				remote : {
					url : "/validates.ashx?f=validateCode",
					type : "POST",
					cache : false,
					data : {
						p : function () {
							return $("#txtcode").val();
						}
					}
				}
			}
		},
		messages : {
			txtname : {
				required : "请输入账号"
			},
			txtpwd : {
				required : "请输入密码"
			},
			txtcode : {
				required : "请输入验证码",
				remote : "验证码错误"
			}
		},
		highlight : function (element, errorClass) {
			$(element).css('border', '1px solid red');

		},

		unhighlight : function (element, errorClass) {
			$(element).css('border', '1px solid #ccc');

		},

		errorPlacement : function (error, element) {
			if (element.is("#txtname")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtpwd")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtcode")) {
				error.appendTo(element.parent());
			}

		},
		submitHandler : function (form) {
			form.submit();
		}
	});

	// 手机或邮箱可以登录
	jQuery.validator
	.addMethod(
		"isEmailOrMobile",
		function (value, element, params) {
		var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		var email = /^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9_\.\-])+\.[a-zA-Z]{2,4}$/;
		return (email.test(value) || mobile.test(value));
	}, "输入错误");
});
