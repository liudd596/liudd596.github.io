$(document).ready(function() {
    $("#btnlogin").click(function() {
        if ($("#txtname").val() != "" && $("#txtpwd").val() != "") {
            $.ajax({
                type: "POST",
                async: false,
                url: "/validates.ashx",
                data: {
                    f: "logins",
                    p: $("#txtname").val(),
                    pwd: $("#txtpwd").val()
                },
                dataType: 'JSON',

                success: function(data, status) {
                    if (data.msgcode == "1") {
                        window.location.href="ytx.htm"
                    }
                    else if (data.msgcode == "-1") {
                        $("#txtname").val('');
                        $("#txtname").attr("placeholder", data.msg)
                    }
                    else if (data.msgcode == "-2") {
                        $("#txtpwd").val('');
                        $("#txtpwd").attr("placeholder", data.msg)
                    }
                }
            });
        } else {
            if ($("#txtname").val() == "") {
                $("#txtname").attr("placeholder", "请输入邮箱或电话")
            }
            if ($("#txtpwd").val() == "") {
                $("#txtpwd").attr("placeholder", "请输入密码")
            }
        }
    });
   
});
