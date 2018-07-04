$(document).ready(function () {
    $.ajax({
     　　type : "POST",
					url : "/validates.ashx",
					data : {
						f : "validateIsLogin",
						p : "000"
					},
    　　 error: function (XMLHttpRequest, textStatus, errorThrown) { },
     　　success: function (msg){
     　    if(msg=="true"){
     　     $(".menu_user").html("<a href=\"/ytx.htm\">进入后台</a>");
     　    }
     　　 }
     });
});
