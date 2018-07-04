
$(function() {
    var href = location.href;
    var ID = href.split("=")[1];
    changeradio()
    //添加与修改
    $("#btn_Telephone").click(function() {
        var reporttype = $("input[name='rb2']:checked").val();
        var cumstomtype = $("input[name='T_cumstomtype']:checked").val();
        var cumstomtype1 = $("input[name='P_cumstomtype']:checked").val();
        var gongsitype = $("input[name='AttributionType']:checked").val();
        var TagUserName = "";
        var personName = "";
        //报备固话手机
        var reportnum = new Array();
        var reportlen = new Array();
        var T_reportnum = document.getElementsByName("txtNum")
        var T_reportlen = document.getElementsByName("txtLen")
        var P_reportnum = document.getElementsByName("txtNum1")
        //固话0,公司0,直签1
        if (reporttype == "0") {
            for (var i = 0; i < T_reportnum.length; i++) {
                reportnum.push(T_reportnum[i].value)
                reportlen.push(T_reportlen[i].value)
            }
            TagUserName = $("#txtT_cumstomtype2Name").val();
        }
        else if (reporttype == "1") {
            for (var i = 0; i < P_reportnum.length; i++) {
                reportnum.push(P_reportnum[i].value)
            }
            TagUserName = $("#txtP_cumstomtype2Name").val();
            if (gongsitype == "1") {
                //个人
                personName = $("#txtRealName").val();
                TagUserName = $("#txtP_attributiontype2Name").val();
            }
        }
        var CredentSrc = $("#createurl").val();
        if (fromvalidate()) {
            $.ajax({
                url: "numberReportRoute.ashx?method=TelReport",
                type: "post",
                traditional: true,
                data: {
                    reporttype: reporttype,
                    cumstomtype: cumstomtype,
                    TagUserName: TagUserName,
                    reportnum: reportnum,
                    reportlen: reportlen,
                    gongsitype: gongsitype,
                    personName: personName,
                    cumstomtype1: cumstomtype1,
                    CredentSrc: CredentSrc
                },
                dataType: "json"
            }).done(function(data) {
                console.info(data)
                if (data.state == "-1") {
                    alert("号码段不能为空");

                } else if (data.state == "1") {
                    alert("操作成功");
                    window.location.href = "../Account/numberReportList.aspx";

                } else if (data.state == "-2") {
                    alert("操作失败");
                }
            });
        }
    });
    //修改显示
    if (ID != undefined) {
        $.ajax({
            url: "numberReportRoute.ashx?method=showReport",
            type: "post",
            data: {
                ReportId: ID
            },
            dataType: "json"
        }).done(function(data) {
            //固话/手机
            $("input[name='rb2'][value='" + data.ds[0].NumType + "']").attr("checked", true);
            if (data.ds[0].NumType == "0") {
                $("input[name='T_cumstomtype'][value='" + data.ds[0].CustomType + "']").attr("checked", true);
                $("#txtT_cumstomtype2Name").val(data.ds[0].TagUserName);
            }
            else {
                $("input[name='P_cumstomtype'][value='" + data.ds[0].CustomType + "']").attr("checked", true);
                $("input[name='AttributionType'][value='" + data.ds[0].OwnType + "']").attr("checked", true);
                $("#txtP_cumstomtype2Name").val(data.ds[0].TagUserName);
                $("#txtP_attributiontype2Name").val(data.ds[0].TagUserName);
                $("#txtRealName").val(data.ds[0].OwnName);
            }
            changeradio();

            for (var i = 0; i < data.ds.length; i++) {
                if (data.ds[0].NumType == "0") {
                    if (i == 0) {
                        $("#txtNum").val(data.ds[i].NumSections);
                        $("#txtLen").val(data.ds[i].NumLenght);
                    }
                    else {
                        var option = $("<ul class=\"fuline\"><li class=\"fuline_in\"><p class=\"fuline_title2\">报备号码：</p><p class=\"fuline_kuang\" style=\"width:200px;\"><input type='text' class='wbk_198z' value='" + data.ds[i].NumSections + "' name='txtNum' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'报备号码不能为空')\"  /></p><p class=\"fuline_title23\"> 位长：</p><p class=\"fuline_kuang\" style=\"width:200px;\"> <input type='text' value='" + data.ds[i].NumLenght + "' name='txtLen' class='wbk_198z' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'位长不能为空')\"  /></p><p style=\" font-size:18px; cursor:pointer;\"><a onclick=\"minus(this)\">【-】</a></p></li></ul> ");
                        $("#Num .len").append(option);
                    }
                }
                else {
                    if (i == 0) {
                        $("#txtNum1").val(data.ds[i].NumSections);
                    } else {
                    var option = $("<ul class=\"fuline\"><li class=\"fuline_in\"><p class=\"fuline_title2\">报备号码：</p><p class=\"fuline_kuang\" style=\"width:200px;\"><input  type='text' class='wbk_198z' value='" + data.ds[i].NumSections + "' name='txtNum1' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'报备号码不能为空')\"  /></p><p style=\" font-size:18px; cursor:pointer;\"><a onclick=\"minus(this)\">【-】</a></p></li></ul> ");
                        $("#Num1 .len").append(option);
                    }
                }
            }
        });
    }
})
        //显示详细说明
        function showdetail(data) {
            var content = "";
            if (data == "1") {
                T_content = "1、如您报备的号码尾数为0~9的连续号码，如：01088589900~01088589999，共100个号码，则需要在【报备号码】输入框中输入【010885899】，在【位长】输入框中输入【11】。或如：075588589980~075588589989，共10个号码，则需要在【报备号码】输入框中输入【07558858998】，在【位长】输入框中输入【12】。<br/><br/>2、如您报备的号码尾数非0~9的连续号码，如：01088589901~01088589909，共9个号码，则需要点击【+】增加号码行数，并按照独立的9个号码分别输入，此时每个【报备号码】输入框中需要输入【01088589901或01088589902……】，在【位长】输入框中输入【11】。<br/><br/>3、多个号段或多个号码，请点击【+】增加号码行数进行输入。<br/><br/>4、如所报备号码归属于不同客户，则需要分批报备。";
            }
            else {
                T_content = "1、多个号码，请点击【+】增加号码行数进行输入。<br/><br/>2、如所报备号码归属于不同客户，则需要分批报备。";
            }
            if (!($("div[role='dialog']").length > 0)) {
                var d = dialog({
                    title: '号码填写说明',
                    width: "500",
                    content: T_content
                });
                d.addEventListener('close', function() {
                });
                d.show();
            }
        }
        //查看示例
        function showimg(data) {

            if (!($("div[role='dialog']").length > 0)) {
                var d = dialog({
                    title: '查看示例',
                    width: "400",
                    content: "<img src='" + data + "' width=\"400\" height=\"450\"/>"
                });
                d.addEventListener('close', function() {
                });
                d.show();
            }
        }
        //添加位长和报备号码
        function add(id) {
            if (id == "Num") {
                var option = $("<ul class=\"fuline\"><li class=\"fuline_in\"><p class=\"fuline_title2\">报备号码：</p><p class=\"fuline_kuang\" style=\"width:200px;\"><input type='text' class='wbk_198z' name='txtNum' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'报备号码不能为空')\" /></p><p class=\"fuline_title23\"> 位长：</p><p class=\"fuline_kuang\" style=\"width:200px;\"> <input type='text' name='txtLen' class='wbk_198z' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'位长不能为空')\" /></p><p style=\" font-size:18px; cursor:pointer;\"><a onclick=\"minus(this)\">【-】</a></p></li></ul> ");
                $("#" + id + " .len").append(option);
            }
            else if (id == "Num1") {
            var option = $("<ul class=\"fuline\"><li class=\"fuline_in\"><p class=\"fuline_title2\">报备号码：</p><p class=\"fuline_kuang\" style=\"width:200px;\"><input  type='text' class='wbk_198z' name='txtNum1' onkeyup=\"this.value=this.value.replace(/\D/g,'')\" onBlur=\"check(this,'报备号码不能为空')\" /></p><p style=\" font-size:18px; cursor:pointer;\"><a onclick=\"minus(this)\">【-】</a></p></li></ul> ");
                $("#" + id + " .len").append(option);
            }
        }
        //减少报备号码和位长
        function minus(data) {
            $(data).parent().parent().parent().remove();
        }
        //初始化
        function inti() {
            $("#Num .len").html(" ");
            $("#Num1 .len").html(" ");
            $("#txtT_cumstomtype2Name").val("");
            $("#txtT_cumstomtype2Name").siblings("span").remove();
            $("#txtT_cumstomtype2Name").attr("style", "border:1px solid #ccc");
            $("#txtNum").val("");
            $("#txtLen").val("");
            $("#txtNum").siblings("span").remove();
            $("#txtNum").attr("style", "border:1px solid #ccc");
            $("#txtLen").siblings("span").remove();
            $("#txtLen").attr("style", "border:1px solid #ccc");
            $("#txtNum1").val("");
            $("#txtNum1").siblings("span").remove();
            $("#txtNum1").attr("style", "border:1px solid #ccc");
            $("#txtP_cumstomtype2Name").val("");
            $("#txtP_cumstomtype2Name").siblings("span").remove();
            $("#txtP_cumstomtype2Name").attr("style", "border:1px solid #ccc");
            $("#txtP_attributiontype2Name").val("");
            $("#txtP_attributiontype2Name").siblings("span").remove();
            $("#txtP_attributiontype2Name").attr("style", "border:1px solid #ccc");
            $("#txtRealName").val("");
            $("#txtRealName").siblings("span").remove();
            $("#txtRealName").attr("style", "border:1px solid #ccc");
           
        }
        //显示上传的各种资质
        function show() {
            var NumType = $("input[name='rb2']:checked").val();
            var CustomType; var OwnType;
            if (NumType == "0") {
                //固话
                CustomType = $("input[name='T_cumstomtype']:checked").val();
                OwnType = 0;
            }
            else {
                OwnType = $("input[name='AttributionType']:checked").val();
                if (OwnType == "0") {
                    CustomType = $("input[name='P_cumstomtype']:checked").val();
                }
                else {
                    CustomType = 0;
                }
            }
            $.ajax({
                url: "numberReportRoute.ashx?method=numberReportZZ",
                type: "post",
                data: {
                    NumType: NumType,
                    CustomType: CustomType,
                    OwnType: OwnType
                },
                dataType: "html"
            }).done(function(haha) {
                $("#fileUpZiZhi").html(haha);

            });
        }

         //验证
        function fromvalidate() {
            var temp = true;
            if ($($("#imgfile1").children()).attr("src") == undefined) {
                temp = false;
                alert("上传资质不全!")
                return temp
            }
            if ($($("#imgfile2").children()).attr("src") == undefined) {
                temp = false;
                alert("上传资质不全!")
                return temp
            }
            if ($($("#imgfile3").children()).attr("src") == undefined) {
                temp = false;
                alert("上传资质不全!")
                return temp
            }
            if ($($("#imgfile4").children()).attr("src") == undefined) {
                temp = false;
                alert("上传资质不全!")
                return temp
            } 
            //固话
            if ($("input[name='rb2']:checked").val() == "0") {
                if ($("input[name='txtNum']").val() == "" || $("input[name='txtLen']").val() == "") {
                    temp = false;
                    alert("报备号码和位长都不能为空!")
                    return temp
                } 
                if ($("input[name='T_cumstomtype']:checked").val() == "1")
               {
                   if ($($("#imgfile5").children()).attr("src") == undefined) {
                       temp = false;
                       alert("上传资质不全!")
                       return temp
                   } 
               }else
               {
                   //代理
                   if ($("#txtT_cumstomtype2Name").val() == "") {
                       temp = false;
                       alert("终端客户名称不能为空!")
                       return temp
                   }
                   
                   if ($($("#imgfile5").children()).attr("src") == undefined) {
                       temp = false;
                       alert("上传资质不全!")
                       return temp
                   }
                   if ($($("#imgfile6").children()).attr("src") == undefined) {
                       temp = false;
                       alert("上传资质不全!")
                       return temp
                   }
                   if ($($("#imgfile7").children()).attr("src") == undefined) {
                       temp = false;
                       alert("上传资质不全!")
                       return temp
                   }
               }
            }
            else {
                //手机
                if ($("input[name='txtNum1']").val() == "" || $("input[name='txtLen1']").val() == "") {
                    temp = false;
                    alert("报备号码不能为空!")
                    return temp
                } 
                if ($("input[name='AttributionType']:checked").val() == "0") {

                    if ($("input[name='P_cumstomtype']:checked").val() == "0") {
                        //直接
                        if ($($("#imgfile5").children()).attr("src") == undefined) {
                            temp = false;
                            alert("上传资质不全!")
                            return temp
                        }
                         if ($("#txtP_cumstomtype2Name").val() == "") {
                            temp = false;
                            alert("终端客户名称不能为空!")
                            return temp
                        }
                    }   
                } else {
                //个人
                if ($("#txtP_attributiontype2Name").val() == "") {
                    temp = false;
                    alert("终端客户名称不能为空!")
                    return temp
                }
                if ($("#txtRealName").val() == "") {
                    temp = false;
                    alert("机主名称不能为空!")
                    return temp
                }
                if ($($("#imgfile5").children()).attr("src") == undefined) {
                    temp = false;
                    alert("上传资质不全!")
                    return temp
                }
                }
            }
            return temp;
        }
        //验证文本框
        function check(obj, data) {
            if (jQuery.trim($(obj).val()) == "") {
                if ($(obj).siblings("span").length == 0)
                {
                    $(obj).attr("style", "border:1px solid red");
                    $(obj).after("<span  style=\"color:Red;\">" + data + "</span>");
                }
            } else {
                    $(obj).siblings("span").remove();
                    $(obj).attr("style", "border:1px solid #ccc");
            }
            
        }


        function changeradio() {

            //0固话1手机
            if ($("input[name='rb2']:checked").val() == "1") {
                $("#personInfo").addClass("hidden");
                $("#companyinfo").removeClass("hidden");
                show();
            }
            else {
                $("#companyinfo").addClass("hidden");
                $("#personInfo").removeClass("hidden");
                show();
            }
            $('#rb2').change(function() {
                if ($("input[name='rb2']:checked").val() == "0") {
                    $("#companyinfo").addClass("hidden");
                    $("#personInfo").removeClass("hidden");
                    inti();
                    show();
                } else {
                    $("#personInfo").addClass("hidden");
                    $("#companyinfo").removeClass("hidden");
                    inti();
                    show();
                }
            });
            //0代理1直接
            if ($("input[name='T_cumstomtype']:checked").val() == "1") {
                $("#T_cumstomtype2_1").addClass("hidden");

                show();
            } else {
                $("#T_cumstomtype2_1").removeClass("hidden");
                show();
            }

            $('#T_cumstomtype').change(function() {
                if ($("input[name='T_cumstomtype']:checked").val() == "1") {
                    $("#T_cumstomtype2_1").addClass("hidden");
                    inti();
                    show();
                } else {
                    $("#T_cumstomtype2_1").removeClass("hidden");
                    inti();
                    show();
                }
            });
            if ($("input[name='P_cumstomtype']:checked").val() == "1") {
                $("#P_cumstomtype2_1").addClass("hidden");
                   show();
            } else {
            $("#P_cumstomtype2_1").removeClass("hidden");
                   show();
            }
            $('#P_cumstomtype').change(function() {
                if ($("input[name='P_cumstomtype']:checked").val() == "1") {
                    $("#P_cumstomtype2_1").addClass("hidden");
                    inti();
                    show();
                } else {
                    $("#P_cumstomtype2_1").removeClass("hidden");
                    inti();
                    show();
                }
            });
            //0公司1个人
            if ($("input[name='AttributionType']:checked").val() == "0") {
                $("#P_attributiontype2").addClass("hidden");
                $("#P_attributiontype1").removeClass("hidden");
                show();
            } else {
                $("#P_attributiontype1").addClass("hidden");
                $("#P_attributiontype2").removeClass("hidden");
                show();
            }
            $('#AttributionType').change(function() {
                if ($("input[name='AttributionType']:checked").val() == "0") {
                    $("#P_attributiontype2").addClass("hidden");
                    $("#P_attributiontype1").removeClass("hidden");
                    inti();
                    show();
                } else {
                    $("#P_attributiontype1").addClass("hidden");
                    $("#P_attributiontype2").removeClass("hidden");
                    inti();
                    show();
                }
            });
        }