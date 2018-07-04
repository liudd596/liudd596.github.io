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
	var objYN=''; // 是否有選擇
	var i;
	for (i = 0; i < objLen; i++) {
		if (obj[i].checked == true) {
            objYN+=obj[i].value+',';
		}
	}
	return objYN;
}
function showmore(obj)
{
 if (!($("div[role='dialog']").length>0)) {
    var d = dialog({
        content: obj
    });
    d.show();
    setTimeout(function () {
        d.close().remove();
    }, 2000);
    }
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
        title: '短信模板图片',
        content:"<img src='"+obj+"'></img>",
        lock: true
    });
    d.show();
}
//$(document).ready(function () {

//});
function settingsp(templateid,splist)
{
$.post("/Services.ashx?method=SetSPIDToSmsTemplate", { "TemplateId": templateid,"SPIDList":splist},
   function(data){
     alert(data.msg);
   }, "json");
}