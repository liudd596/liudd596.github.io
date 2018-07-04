
function chBtn(obj) {
	var d = dialog({
			title : '填写发票信息',
			content : '<iframe src="InvoiceInfo.aspx?id=' + obj + '" id="test" name="test" height="380" width="500" frameborder="0"></iframe>',
			ok : function () {
				this.close();
				this.remove();
			},
			okValue : '关闭',
		});
	d.addEventListener('close', function () {
		location.reload();
	});
	d.show();
}
function btnreceive(obj){
    $.ajax({
        url: "/User.ashx?method=UpInvoiceSts",
        type: "post",
        data: {
            "InvoiceID": obj
        },
        dataType: "json"
    }).done(function(data) {
         alert(data.state);
         location.reload();
    });
}

$(document).ready(function () {
	var id = "dllist";
	$.each($('#' + id + ' input[type=checkbox]'), function (index, value) {
		//$(this).prop("checked", true);//全选中
		$(this).on('click', function () {
			var sum = 0;
			$.each($('#' + id + ' input[type=checkbox]'), function (i, val) {
				if ($(this).is(":checked")) {
					sum += parseFloat($(this).next().text());
				}
			});
			$("#txtmoney").val(sum.toFixed(2));
			//$("#txtmoney").attr("value",sum.toFixed(4));
			if (sum == 0 || sum == 0.0000 || sum == 0.00) {
				$("#btnSave").attr("disabled", true);
				$("#btnSave").css("background", "gray");
			} else {
				$('#btnSave').removeAttr("disabled");
				$("#btnSave").css("background", "#e70000");
			}

		});
	});
	$('#rbl').change(function () {
		if ($("input[name='rbl']:checked").val() == "1") {
			$('#divTax').hide();
		} else {
			$('#divTax').show();
		}
	});
	
	jQuery.validator
			.addMethod(
					"Isfullamount",
					function(value, element) {
						var returnVal = false;  
                        var money = $("#txtmoney").val();
                        var rbl=$("input[name='rbl']:checked").val();
                        if((rbl=="2"&&money>=10000) || (rbl=="1"&&money>=1000)){  
                            returnVal = true;  
                        }  
                        else{
                        $("#Text1").focus();
                        }
                        return returnVal;  
					}, "不满足开票条件,请修改后再提交");

	//	// 表单验证

	$("#frmInvoice").validate({
		errorElement : "span",
		errorClass : "error",
		rules : {

			txtmoney : {
				required : true,
				Isfullamount:true
			},
			txtReceiveAddr : {
				required : true
			},
			txtRecierver : {
				required : true
			},
			txtphone : {
				required : true
			},
			txtTaxpayerID : {
				required : true
			},
			txtTaxpayerBankCard : {
				required : true
			},
			txtTaxpayerBank : {
				required : true
			},
			txtTaxpayerAddr : {
				required : true
			},
			txtTaxpayerPhone : {
				required : true
			}
		},
		messages : {
			txtmoney : {
				required : "开票金额不能为空",
				Isfullamount:"不满足开票条件,请修改后再提交"
			},
			txtReceiveAddr : {
				required : "请输入收取地址"
			},
			txtRecierver : {
				required : "请输入收件人"
			},
			txtphone : {
				required : "请输入收件人电话"
			},
			txtTaxpayerID : {
				required : "请输入纳税人识别号"
			},
			txtTaxpayerBankCard : {
				required : "请输入银行账号"
			},
			txtTaxpayerBank : {
				required : "请输入开户行"
			},
			txtTaxpayerAddr : {
				required : "请输入注册地址"
			},
			txtTaxpayerPhone : {
				required : "请输入企业电话"
			}
		},
		highlight : function (element, errorClass) {
			$(element).css('border', '1px solid red');

		},

		unhighlight : function (element, errorClass) {
			$(element).css('border', '1px solid #ccc');

		},
		errorPlacement : function (error, element) {
			if (element.is("#txtmoney")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtReceiveAddr")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtRecierver")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtphone")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtTaxpayerID")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtTaxpayerBankCard")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtTaxpayerBank")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtTaxpayerAddr")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtTaxpayerPhone")) {
				error.appendTo(element.parent());
			}
		},
		submitHandler : function (form) {
		
			if ($("input[name='rbl']:checked").val()=="2" && $("#taxpayer").val()  == "") {
				alert("您未上传一般纳税人证明照或上传失败！");
				return false;
			}
			
			form.submit();
		}
	});

	$("#frmInfo").validate({
		errorElement : "span",
		errorClass : "error",
		rules : {

			ddlExpress : {
				required : true
			},
			txtExpressNo : {
				required : true
			}
		},
		messages : {
			ddlExpress : {
				required : "请选择快递公司"
			},
			txtExpressNo : {
				required : "请输入快递单号"
			}
		},
		highlight : function (element, errorClass) {
			$(element).css('border', '1px solid red');

		},

		unhighlight : function (element, errorClass) {
			$(element).css('border', '1px solid #ccc');

		},
		errorPlacement : function (error, element) {
			if (element.is("#ddlExpress")) {
				error.appendTo(element.parent());
			}
			if (element.is("#txtExpressNo")) {
				error.appendTo(element.parent());
			}

		},
		submitHandler : function (form) {
			form.submit();
		}
	});

});

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?99ef9c2d601974d74571342618754e4c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
