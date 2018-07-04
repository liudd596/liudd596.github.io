/**
* 检测是否有被选中
* 
* @param {Object}
*            objNam CheckBox的id属性
*/
function chkCheckBoxChs(objNam) { // 檢測是否有選擇多选框的至少一项
    var obj = document.getElementsByName(objNam); // 獲取多選框數組
    var objLen = obj.length; // 獲取數據長度
    var objYN; // 是否有選擇
    var i;
    objYN = false;
    for (i = 0; i < objLen; i++) {
        if (obj[i].checked == true) {
            objYN = true;
            break;
        }
    }
    return objYN;
}
function getCheckBoxChs(objNam) { // 檢測是否有選擇多选框的至少一项
    var obj = document.getElementsByName(objNam); // 獲取多選框數組
    var objLen = obj.length; // 獲取數據長度
    var objYN = ''; // 是否有選擇
    var i;
    for (i = 0; i < objLen; i++) {
        if (obj[i].checked == true) {
            objYN += obj[i].value + ',';
        }
    }
    return objYN;
}
$(document).ready(function() {

    if ($('#tb_CallBackURL').val().length > 0) {
        $("#tb_CallBackURL").parent().show();
        $('#cb_callback').attr('checked', 'checked');
    }
    if ($('#tb_WhiteList').val().length > 0) {
        $("#tb_WhiteList").parent().show();
        $('#cb_whitelist').attr('checked', 'checked');
    }

    $('#cb_callback').click(function() {
        if (this.checked) {
            $("#tb_CallBackURL").parent().show();
        }
        else {
            $("#tb_CallBackURL").parent().hide();
        }
    });
    $('#cb_whitelist').click(function() {
        if (this.checked) {
            $("#tb_WhiteList").parent().show();
        }
        else {
            $("#tb_WhiteList").parent().hide();
        }
    });
    $('.funcradio').click(function() {
        var str = "";
        $('.funcradio').each(function() {
            if ($(this).is(":checked")) {
                str += $(this).val() + ",";
            }
        });
        if ($('#appbz').val() == '1')//有其他应用不能选话聚通
        {
            if ($(this).val() == '12')//话聚通
            {
                $(this).prop("checked", false)
                alert('提示：有其他产品的应用不能再创建话聚通应用！')
            }
        }
        else if ($('#appbz').val() == '2')//有话聚通应用不能选其他
        {
            if ($(this).val() != '12')//话聚通
            {
                $(this).prop("checked", false)
                alert('提示：有话聚通应用不能再创建其他产品的应用！')
            }
        } 
//        else if ($('#appbz').val() == '4')//有话聚通应用不能选其他
//        {
//            if ($(this).val() != '12')//话聚通
//            {
//                $(this).prop("checked", false)
//                alert('提示：有话聚通应用不能再创建其他产品的应用！')
//            }
//        }
        else {
            if ($(this).val() == '12')//话聚通
            {
                if ($(this).is(":checked") == true && str.length > 3) {
                    $(this).prop("checked", false)
                    alert('提示：话聚通产品和其他产品不能同时选择！')
                }
            } else {
                if (str.indexOf('12,') > 0) {
                    $(this).prop("checked", false)
                    alert('提示：话聚通产品和其他产品不能同时选择！')
                }
            }
        }
    });
    // 表单验证
    $("#form1").validate({
        errorElement: "span",
        errorClass: "error",
        rules: {

            tb_AppName: {
                required: true
            },
            tb_CallBackURL: {
                required: {
                    depends: function() {
                        //alert($("input[name='radio']:checked").val());
                        return $('#cb_callback').is(":checked");
                        //$("input[id='cb_callback']:checked").val() == "1"
                    }
                }
            },
            tb_WhiteList: { required: {
                depends: function() {
                    return $('#cb_whitelist').is(":checked");
                }
            }
            }
        },
        messages: {
            tb_AppName: {
                required: "请输入应用名称"
            },
            tb_CallBackURL: {
                required: "请输入回调地址"
            },
            tb_WhiteList: {
                required: "请输入您服务器IP，多个IP用英文逗号分隔"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css('border', '1px solid red');
        },

        unhighlight: function(element, errorClass) {
            $(element).css('border', '1px solid #ccc');

        },
        errorPlacement: function(error, element) {
            if (element.is("#tb_AppName")) {
                error.appendTo(element.parent());
            }
            if (element.is("#tb_CallBackURL")) {
                error.appendTo(element.parent());
            }
            if (element.is("#tb_WhiteList")) {
                error.appendTo(element.parent());
            }

        },
        submitHandler: function(form) {
            //				var Imageidentity = $("#identity").val();
            //				if (Imageidentity == "") {
            //					alert("您未上传证件照或证件照上传失败！");
            //					return false;
            //				}
            if (!chkCheckBoxChs('funcs')) {
                //$("#useFuncsError").attr({"style":"display:block"});
                alert("至少选择一个使用功能");
                return false;
            }
            //return false;
            form.submit();
        }
    });
});