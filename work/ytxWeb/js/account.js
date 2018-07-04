$(document).ready(function() {
    //	var trade = ["所属行业", "互联网金融", "游戏", "教育培训", "银行/保险", "电商", "社交", "零售/贸易",
    //		"交通/物流", "房地产", "政府/企事业单位", "医疗健康", "物联网/智能硬件", "门户/论坛/网站", "生活服务", "文化传媒",
    //		"农业/能源/电气", "IT/系统集成/软件外包", "企业软件服务", "其他"];
    //	var i = 0;

    //	for (i = 0; i < trade.length; i++) {
    //		$("#ddltrade").append($("<option></option>").val(trade[i]).html(trade[i]));
    //	}
    var href = location.href;
    var ID = href.split("=")[1];
    if (ID == "on") {
        $("#personInfo").addClass("hidden");
        $("#companyinfo").removeClass("hidden");
        alert("提交成功，等待审核");
    }
    if ($("input[name='rb2']:checked").val() == "2") {
        $("#personInfo").addClass("hidden");
        $("#companyinfo").removeClass("hidden");    }
    else {
        $("#companyinfo").addClass("hidden");
        $("#personInfo").removeClass("hidden");
    }
    $('#rb2').change(function() {
        if ($("input[name='rb2']:checked").val() == "1") {
            //$('#pageTo').attr("src", "personInfo.aspx");
            // $("#pageTo").height("846px");
            $("#companyinfo").addClass("hidden");
            $("#personInfo").removeClass("hidden");
        } else {

            //$('#pageTo').attr("src", "compInfo.aspx");
            //$("#pageTo").height("1358px");
            $("#personInfo").addClass("hidden");
            $("#companyinfo").removeClass("hidden");
        }
    });

    $.each($('.mypic'), function(index, value) {
        if (!($("div[role='dialog']").length > 0)) {
            var d;
            $(this).mouseover(function() {

                var obj = $(this).attr("src");
                //alert(obj)
                d = dialog({
                    content: "<img src='" + obj + "' height='500' width='500' ></img>",
                    lock: true
                });
                d.show();
            }).mouseout(function() {
                d.close();
            });
        }
    });

    //	var mainheight = $(this).contents().find("body").height() + 30;
    //	alert(mainheight);
    //	if (mainheight>30) {
    //	$("#pageTo").height(mainheight);
    //	}
    //	$("#pageTo").load(function () {
    //		var mainheight = $(this).contents().find("body").height() + 30;
    //		$(this).height(mainheight);
    //	});
    //	
    //个人表单验证
        $("#form1").validate({
            errorElement: "span",
            errorClass: "error",
            rules: {

                txtname: {
                    required: true
                },
                txtIdentityNo: {
                    required: true,
                    rangelength: [15, 18]
                },
                txtCompName: {
                    required: true
                },
                txtCompAddr: {
                    required: true
                },
                ddltrade: {
                    required: true
                },
                txtorgNo: {
                    required: true
                    //rangelength : [1, 9]
                },
                txtbusinessNo: {
                    required: true
                    //rangelength : [1, 15]
                },
                txtLegalPerson: {
                    required: true,
                    rangelength: [0, 25]
                },
                txtTax: {
                    required: true
                    //rangelength : [1, 15]
                },
                txtCompPhone: {
                    required: true,
                    rangelength: [0, 20]
                },
                txtCompUri: {
                    url: true
                }               
            },
            messages: {
                txtname: {
                    required: "请输入真实姓名"
                },
                txtIdentityNo: {
                    required: "请输入证件号码",
                    rangelength: "请输入15-18位证件号"
                },
                txtCompName: {
                    required: "请输入公司名称"
                    //remote : "公司名称已存在"
                },
                txtCompAddr: {
                    required: "请输入公司地址"
                },
                ddltrade: {
                    required: "请选择行业"
                },
                txtorgNo: {
                    required: "请输入组织机构证号"
                    //rangelength : "请输入9位组织结构证号"
                },
                txtbusinessNo: {
                    required: "请输入营业执照号"
                    //rangelength : "请输入15位营业执照号"
                },
                txtLegalPerson: {
                    required: "请填写公司的法人代表姓名",
                    rangelength: "法人代表姓名长度在25字符以内"
                },
                txtTax: {
                    required: "请输入税务登记号"
                    //rangelength : "请输入15位税务登记号"
                },
                txtCompPhone: {
                    required: "请输入公司电话",
                    rangelength: "公司电话长度在20字符以内"
                },
                txtCompUri: {
                    url: "请输入正确的网址,以【http://】开始"
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
                    error.appendTo(element.parent());
                }
                if (element.is("#txtIdentityNo")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtCompName")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtCompAddr")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtorgNo")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtbusinessNo")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtLegalPerson")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtTax")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtCompPhone")) {
                    error.appendTo(element.parent());
                }
                if (element.is("#txtCompUri")) {
                    error.appendTo(element.parent());
                }
            },
            submitHandler: function(form) {

                var Imageidentity = $("#identity").val();
                if ($("input[name='rb2']:checked").val() == "1") {
                    if (Imageidentity == "") {
                        alert("您未上传证件照或证件照上传失败！");
                        return false;
                    }
                }
                var org = $("#org").val();
                var business = $("#business").val();
                var tax = $("#tax").val();
                var compyTrade = $("#ddltrade").val();
                if ($("input[name='rb2']:checked").val() == "2") {

                    if (compyTrade == '0' || compyTrade == "所属行业") {
                        alert("请选择所属行业");
                        return false;
                    }
                    if ($('input[name="rbl"]:checked').val() == "3") {
                        if (org == "") {
                            alert("您未上传组织机构证件照或组织机构证件照上传失败!");
                            return false;
                        }
                        if (tax == "") {
                            alert("您未上传税务登记证件照或税务登记证件照上传失败!");
                            return false;
                        }
                        if (business == "") {
                            alert("您未上传营业执照证件照或营业执照证件照上传失败!");
                            return false;
                        }
                    } else {
                        if (business == "") {
                            alert("您未上传营业执照证件照或营业执照证件照上传失败!");
                            return false;
                        }
                    }
                }   
                form.submit();
            }
        });
    $("#frmPwd").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {

            txtOldpwd: {
                required: true,
                remote: { //验证密码是否正确
                    type: "POST",
                    url: "validate.ashx",
                    data: {
                        f: "validatePwd",
                        p: function() {
                            return $("#txtOldpwd").val();
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
            }
        },
        messages: {
            txtOldpwd: {
                required: "请输入原密码",
                remote: "输入的密码错误"
            },
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
            if (element.is("#txtOldpwd")) {
                error.appendTo(element.parent());
            }
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
    $("#txtPwd").keyup(function() {
        CheckIntensity($(this).val());
    });
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
                Wcolor = "mimaqd3";
                Mcolor = "mimaqd2";
                Scolor = "mimaqd2";
                break;
            case 2: //中
                Wcolor = "mimaqd3";
                Mcolor = "mimaqd3";
                Scolor = "mimaqd2";
                break;
            case 3: // 强
                Wcolor = "mimaqd3";
                Mcolor = "mimaqd3";
                Scolor = "mimaqd3";
                break;
            default:
                Wcolor = "mimaqd2";
                Mcolor = "mimaqd2";
                Scolor = "mimaqd2";
                break;
        }
        document.getElementById('p1').className = Wcolor;
        document.getElementById('p2').className = Mcolor;
        document.getElementById('p3').className = Scolor;
    }
});
