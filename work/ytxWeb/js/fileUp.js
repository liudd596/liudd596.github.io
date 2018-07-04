
Date.prototype.pattern = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份           
        "d+": this.getDate(), //日           
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时           
        "H+": this.getHours(), //小时           
        "m+": this.getMinutes(), //分           
        "s+": this.getSeconds(), //秒           
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度           
        "S": this.getMilliseconds() //毫秒           
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

var date = new Date();
 

function validateImage(obj) {
	var tmpFileValue = $("#" + obj).val();
	if (tmpFileValue != "") {
		//校验图片格式
		if (/^.*?\.(gif|png|jpg|jpeg|bmp)$/.test(tmpFileValue.toLowerCase())) {
			return true;
		} else {
			alert("只能上传jpg、jpeg、png、bmp或gif格式的图片！");
			return false;
		}
	} else {
		alert("请选择要上传的图片文件!");
		return false;
	}

}

function validateWav(obj) {
    var tmpFileValue = $("#" + obj).val();
    if (tmpFileValue != "") {
        //校验图片格式
        if (/^.*?\.(wav)$/.test(tmpFileValue.toLowerCase())) {
            return true;
        } else {
            alert("只能上传wav格式的音频！");
            return false;
        }
    } else {
    alert("请选择要上传的音频文件!");
        return false;
    }

}

function FileUpload(obj, imgtype) {
	//identity 身份证
	//org 组织机构证
	//tax 税务登记证
	//business 营业执照
	if (validateImage(obj)) {
		$.ajaxFileUpload
		({
			url : '/FileUp.ashx', //用于文件上传的服务器端请求地址
			type : 'post',
			data : {
				'imgtype' : imgtype
			},
			secureuri : false, //一般设置为false
			fileElementId : obj, //文件上传空间的id属性  <input type="file" id="file" name="file" />
			dataType : 'JSON', //返回值类型 一般设置为json
			success : function (data, status) //服务器成功响应处理函数
			{
				var jsonObj = eval("(" + data + ")");
				$("#"+imgtype).val(jsonObj.imgurl) ;
				$("#" + obj).parent().append($("<span class='error'>上传成功</span>"));
			},
			error : function (data, status, e) //服务器响应失败处理函数
			{
				//alert(e);
			}
		})

		return false;
	}
}

function FileUpSize(obj) { 
    
    
    
     return true;
 }

function FileUploadZZ(obj,filename,imgtype) {
    //obj 上传文件id
    //文件夹filename
    var fname = "";
    var tenp = false;
    
    if (filename == "终端客户名称") {
        if ($("input[name='rb2']:checked").val() == "0") {
            fname = $("#txtT_cumstomtype2Name").val();
            tenp = false;
        }
        else {
            if ($("input[name='AttributionType']:checked").val() == "0")
            {
            //公司
                fname = $("#txtP_cumstomtype2Name").val();
                tenp = false;
            }else
           {
            //个人
               fname = $("#txtP_attributiontype2Name").val();
               tenp = false;
           }
       }
    } else {
            fname = "";
            tenp = true;
       }


       if (validateImage(obj)) {
           $.ajaxFileUpload
		({
		    url: '/Account/numberReportFileUp.ashx', //用于文件上传的服务器端请求地址
		    type: 'post',
		    data: {
		        'imgtype': imgtype,
		        'filename': fname,
		        'tenp': tenp
		    },
		    secureuri: false, //一般设置为false
		    fileElementId: obj, //文件上传空间的id属性  <input type="file" id="file" name="file" />
		    dataType: 'JSON', //返回值类型 一般设置为json
		    success: function(data, status) //服务器成功响应处理函数
		    {
		        var jsonObj = eval("(" + data + ")");
		        console.info(jsonObj.imgurl);
		        if (jsonObj.status == "1") {
		            $("#createurl").val(jsonObj.createsrc)
		            $("#" + obj).parent().append($("<span class='error'>上传成功</span>"));
		            var select = $("<img src='" + jsonObj.imgurl + "' width=\"300\"; height=\"200\" style=\"margin-left:155px;\"/>");
		            if ($("input[name='T_cumstomtype']:checked").val() == "0" || $("input[name='P_cumstomtype']:checked").val() == "0") {
		                select = $("<img src='" + jsonObj.imgurl + "' width=\"300\" height=\"200\" style=\"margin-left:195px;\"/>");
		            }
		            $("#img" + obj).append(select);
		        }
		        else {
		            alert(jsonObj.msg);
		        }
		    },
		    error: function(data, status, e) //服务器响应失败处理函数
		    {
		        //alert(e);
		    }
		})

        return false;
    }
}


function FileUploadWav(obj, imgtype) {
    var name = date.pattern("yyyyMMddhhmmssS") 
    if (validateWav(obj)) {
        $.ajaxFileUpload
		({
		    url: '/FileUp.ashx', //用于文件上传的服务器端请求地址
		    type: 'post',
		    data: {
		    'imgtype': name
		    },
		    secureuri: false, //一般设置为false
		    fileElementId: obj, //文件上传空间的id属性  <input type="file" id="file" name="file" />
		    dataType: 'JSON', //返回值类型 一般设置为json
		    success: function(data, status) //服务器成功响应处理函数
		    {
		        var jsonObj = eval("(" + data + ")");
		        $("#" + imgtype).val(jsonObj.imgurl);
		        $("#" + obj).parent().append($("<span class='error'>上传成功</span>"));
		    },
		    error: function(data, status, e) //服务器响应失败处理函数
		    {
		        //alert(e);
		    }
		})

        return false;
    }
}

function FileUpload2(obj, imgtype,showImgId) {
	//identity 身份证
	//org 组织机构证
	//tax 税务登记证
	//business 营业执照
	if (validateImage(obj)) {
		$.ajaxFileUpload
		({
			url : '/FileUp.ashx', //用于文件上传的服务器端请求地址
			type : 'post',
			data : {
				'imgtype' : imgtype
			},
			secureuri : false, //一般设置为false
			fileElementId : obj, //文件上传空间的id属性  <input type="file" id="file" name="file" />
			dataType : 'JSON', //返回值类型 一般设置为json
			success : function (data, status) //服务器成功响应处理函数
			{
				var jsonObj = eval("(" + data + ")");
				$("#"+imgtype).val(jsonObj.imgurl) ;
				$("#" + obj).parent().append($("<span class='error'>上传成功</span>"));
				$("#"+showImgId).attr("src",jsonObj.imgurl) ;
			},
			error : function (data, status, e) //服务器响应失败处理函数
			{
				//alert(e);
			}
		})

		return false;
	}
}
function savetextAs(fileURL) {
if (typeof fileURL == 'object')
var fileURL=window.open (fileURL,"_blank","height=0,width=0,toolbar=no,menubar=no,scrollbars=no,resizable=on,location=no,status=no");
window.win = open (fileURL);
setTimeout('win.document.execCommand("SaveAs")', 500);
}


function FileUpload3(obj, imgtype) {
    //identity 身份证
    //org 组织机构证
    //tax 税务登记证
    //business 营业执照
    //OrderRefund 订单退款凭证
    if (validateImage(obj)) {
        $.ajaxFileUpload
		({
		    url: '/FileUp.ashx', //用于文件上传的服务器端请求地址
		    type: 'post',
		    data: {
		        'imgtype': imgtype
		    },
		    secureuri: false, //一般设置为false
		    fileElementId: obj, //文件上传空间的id属性  <input type="file" id="file" name="file" />
		    dataType: 'JSON', //返回值类型 一般设置为json
		    success: function(data, status) //服务器成功响应处理函数
		    {
		        var jsonObj = eval("(" + data + ")");
		        $("#" + imgtype).val(jsonObj.imgurl);
		        $("#" + obj).parent().append($("<span class='error'>上传成功</span>"));
		        //$("#" + showImgId).attr("src", jsonObj.imgurl);
		    },
		    error: function(data, status, e) //服务器响应失败处理函数
		    {
		        //alert(e);
		    }
		})

        return false;
    }
}