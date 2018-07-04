function showAuthDialog()
{
    var d = dialog({
        button: [{
            value: '前去认证',
            callback: function () {
                location.href="/Account/authenInfo.aspx";
                return true;
            },
            autofocus: true
            }],
        title: '认证提醒',
        content:"<p>未完成实名认证的应用只能在有限的环境中开发测试如需正式发布上线请先完成实名认证</p><p>帐号管理-认证信息<p>"
    });
    d.show();
}
function settingAppOnline(appid)
{
    if(!confirm('确定上线该应用?'))
    {
      return;
    }
    $.post("/Services.ashx?method=appOnline", { "appid": appid},
       function(data){
         alert(data.msg);
         if(data.status==0)
         {
          location.replace(location.href);
         }
       }, "json");
}
function deleteApp(appid)
{
if(confirm("确定删除该应用吗？")){
    $.post("/Services.ashx?method=appDelete", { "appid": appid},
       function(data){
         alert(data.msg);
         if(data.status==0)
         {
          location.replace(location.href);
         }
       }, "json");
    }
}