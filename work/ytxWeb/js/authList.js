function showmore(obj)
{
    var d = dialog({
        content: obj
    });
    d.show();
    setTimeout(function () {
        d.close().remove();
    }, 2000);
}
function setspdialog(obj)
{
    var d = dialog({
        title: '设置服务提供商',
        content:$('#tb_sp').html(),
        ok: function () {
            var value = getCheckBoxChs('funcs');
            this.close(value);
            this.remove();
        }
    });
    d.addEventListener('close', function () {
        //alert(this.returnValue);
        settingsp(obj,this.returnValue);
    });
    d.show();
}
function showtemplateimgdialog(obj)
{
    var d = dialog({
        title: '证件图片',
        content:"<img src='"+obj+"'></img>",
        lock: true
    });
    d.show();
}
function settingsp(authid,accountsid,sts,msg)
{
$.post("/Services.ashx?method=userInfoView", { "authid": authid,"sts":sts,"msg":msg,"accountsid":accountsid},
   function(data){
     alert(data.msg);
   }, "json");
}

function showAuthDialog(authid,accountsid)
{
    var d = dialog({
        button: [{
            value: '通过认证',
            callback: function () {
            
            settingsp(authid,accountsid,1,$('#authmsg').val());
//                location.href="/Account/authenInfo.aspx";
//                return true;
            },
            autofocus: true
            },
            {
            value: '拒绝通过',
            callback: function () {
            
            settingsp(authid,accountsid,-1,$('#authmsg').val());
//                location.href="/Account/authenInfo.aspx";
//                return true;
            },
            autofocus: true
            }
            
            ],
        title: '认证提醒',
        content:"<p>原因:<input type='text' id='authmsg' name='authmsg' /></p>"
    });
    d.show();
}