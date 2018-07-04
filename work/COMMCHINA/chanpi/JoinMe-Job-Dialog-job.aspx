<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JoinMe-Job-Dialog-job.aspx.cs"
    Inherits="COMMCHINA.chanpi.JoinMe_Job_Dialog_job" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>加入我们-招聘职位</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="robots" content="index, follow" />
    <link rel="shortcut icon" href="img/bitbug_favicon.ico" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap-customize.css">

    <script src="js/html5.js" type="text/javascript"></script>
    <style>
        /*-----------------------------招聘职位  弹窗 ---------------------------*/#Dialog-job
        {
            width: 300px;
            height: 360px;
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 999;
            margin-left: -150px;
            margin-top: -200px;
        }
        #Dialog-job .job-top
        {
            background: #e60012;
            height: 40px;
        }
        #Dialog-job .job-top h3
        {
            color: #FFFFFF;
            font-size: 24px;
            text-align: center;
            font-size: 24px;
            line-height: 40px;
        }
        #Dialog-job .Dialog-jobIn .p1
        {
            font-size: 14px;
            color: #b4b4b4;
            text-align: center;
            margin: 10px auto;
        }
        #Dialog-job .Dialog-jobIn .group
        {
            position: relative;
            color: #FFFFFF;
            width: 270px;
            height: 44px;
            margin: 0 auto;
        }
        #Dialog-job .Dialog-jobIn .group span
        {
            text-align: left;
            font-size: 16px;
            color: #000;
            line-height: 30px;
            display: block;
            float: left;
        }
        #Dialog-job .Dialog-jobIn .group input
        {
            display: block;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            background: #fff;
            border: 1px solid #c9c9c9;
            color: #333333;
            padding-left: 4px;
            width: 160px;
            float: right;
        }
        #Dialog-job .Dialog-jobIn .groupa
        {
            position: relative;
            color: #FFFFFF;
            width: 280px;
            height: 44px;
            margin: 0 auto;
        }
        #upload-form
        {
            display: inline-block;
        }
        #Dialog-job .Dialog-jobIn .groupa input
        {
            display: inline-block;
            font-size: 16px;
            height: 30px;
            width: 160px;
            color: #000000;
            position: absolute;
            left: 106px;
            top: 4px;
        }
        #Dialog-job .Dialog-jobIn .groupa span
        {
            text-align: left;
            font-size: 16px;
            color: #000;
            line-height: 30px;
        }
        #Dialog-job .btn
        {
            width: 140px;
            height: 30px;
            background-color: #e60012;
            font-size: 18px;
            color: #FFFFFF;
            text-align: center;
            line-height: 10px;
            display: block;
            margin: 10px auto;
        }
        .ui-dialog-close
        {
            position: relative;
            _position: absolute;
            float: right;
            top: -13px;
            right: -13px;
            _height: 26px;
            padding: 0 4px;
            font-size: 21px;
            font-weight: bold;
            line-height: 1;
            color: #000;
            text-shadow: 0 1px 0 #FFF;
            opacity: .2;
            filter: alpha(opacity=20);
            cursor: pointer;
            background: transparent;
            _background: #FFF;
            border: 0;
            -webkit-appearance: none;
        }
    </style>

    <script type="text/javascript">
        function CloseWebPage() {
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                    window.opener = null;
                    window.close();
                } else {
                    window.open('', '_top');
                    window.top.close();
                }
            }
            else if (navigator.userAgent.indexOf("Firefox") > 0) {
                window.location.href = 'about:blank ';
            } else {
                window.opener = null;
                window.open('', '_self', '');
                window.close();
            }
        }
        //验证
        function Validate() {
            var phone_reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            var mail_reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            var name = document.getElementById("name").value;
            var mobile = document.getElementById("mobile").value;
            var email = document.getElementById("email").value;
            if (name == null || name == "") {
                alert("姓名不能为空");
                return false;
            }
            if (mobile == null || mobile == "") {
                alert("手机号不能为空");
                return false;
            }
            if (!phone_reg.test(mobile)) {
                alert("手机号码格式不正确，请重新输入");
                return false;
            }
            if (email == "" || email == null) {
                alert("邮箱不能为空!");
                return false;
            }
            if (!mail_reg.test(email)) {
                alert("邮箱格式不正确，请重新输入!");
                return false;
            }
            document.getElementById("btn").click();
        }
    </script>

</head>
<body>
    <main style="background-color: #000; width: 100%; height: 100%">
<div></div>
    <div id="Dialog-job">
       <!-- <div class="job-top">
	     <!-- <button class="ui-dialog-close" onclick="closePop()">×</button>
	      <h3>我 有 意 向</h3>
        </div>-->
        <form id="form1" runat="server">
        <div class="Dialog-jobIn">
	        <p class="p1">
		        请填写以下信息
	        </p>

	        <div class="group">
		        <span style="margin-left:32px">姓名：</span><asp:TextBox id="name" runat="server" class="input2" name="name"></asp:TextBox>
	        </div>
	        <div class="group">
		        <span>应聘职位：</span><asp:TextBox id="jobname" class="input2" runat="server" name="jobname"></asp:TextBox>
	        </div>
	        <div class="group">
		        <span>联系方式：</span><asp:TextBox id="mobile" class="input2" runat="server"   name="mobile"></asp:TextBox>
	        </div>
	        <div class="group">
		        <span style="margin-left:32px">邮箱：</span><asp:TextBox id="email" runat="server" class="input2" name="email"></asp:TextBox>
	        </div>
	        <div class="groupa">
		        <span>上传简历：</span>
		 <%--       <form id="upload-form" action="upload.php" method="post" enctype="multipart/form-data">--%>
			　　　        <%--<input type="file" id="upload" name="upload">--%>
			　<asp:FileUpload ID="upload" runat="server" name="upload"/>
	        </div>
	        <div class="group">
		        <span style="margin-left:32px">说明：</span><asp:TextBox id="tipNote" runat="server" class="input2" name="tipNote"></asp:TextBox>
	        </div>
        </div>
        <input id="submit" class="btn" type="button" value="提交" onclick="Validate()" />
        <asp:Button ID="btn" class="btn" runat="server" Text="提 交" onclick="btn_Click" style="display:none" ></asp:Button>
        </form>
    </div>
</main>
</body>
</html>
