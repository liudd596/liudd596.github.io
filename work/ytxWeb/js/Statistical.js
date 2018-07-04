function setday(_type) {
	$("#hdtype").val(_type);
	if (_type == "2") {
		$("#tbyear").hide();
		$("#ctyear").hide();
		$("#tbmonth").show();
		if ($('#cbk').is(':checked')) {
			$("#ctmonth").show();
		}
		$('#lmonth').css("color", "Red");
		$('#lyear').css("color", "Black");

	}
	if (_type == "3") {
		$("#tbmonth").hide();
		$("#ctmonth").hide();
		$("#tbyear").show();
		if ($('#cbk').is(':checked')) {
			$("#ctyear").show();
		}
		$('#lyear').css("color", "Red");
		$('#lmonth').css("color", "Black");
	}

}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null)
		return decodeURI(r[2]);
	return null; //返回参数值
}

$(document).ready(function () {

	var _flag = getUrlParam('ff');
	var _title = "消费统计";
	if (_flag == "2") {
		_title = "充值统计";
	}
	chats(_flag);
	function chats(_flag) {
		var _type = $("#hdtype").val();
		var _app = $("#ddlapp").val();
		var _times;
		var _compares;
		//alert(_type);
		if (_type == "2") {
			_times = $("#tbmonth").val();
			_compares = $("#ctmonth").val();
		}
		if (_type == "3") {
			_times = $("#tbyear").val();
			_compares = $("#ctyear").val();
		}
		// alert(_times);
		//  alert(_compares);
		$.ajax({
			data : {
				Method : 'singleTJ',
				flag : _flag,
				type : _type,
				app : _app,
				times : _times,
				compares : _compares
			},
			url : 'DataJson.ashx',
			type : 'POST',
			dataType : 'json',
			success : function (re) {
				$('#container').highcharts({
					title : {
						text : _title,
						x : -20 //center
					},
					xAxis : {
						gridLineWidth : 0,
						lineColor : "#808080", //X轴的颜色
						lineWidth : 1, //X轴的宽度
						tickColor : '#808080',
						categories : re.x
					},
					yAxis : {
						title : {
							text : '单位(元)'
						},
						min : 0,
						lineWidth : 1,
						gridLineDashStyle : 'ShortDash',
						gridLineWidth : 1,
						lineColor : "#808080", //Y轴的颜色
						lineWidth : 1, //Y轴的宽度
						tickColor : '#808080'
					},
					tooltip : {
						valueSuffix : '元'
					},
					credits : {
						enabled : false
					},
					series : re.y,
					plotOptions : {
						line : {
							events : {

								legendItemClick : function (event) { //return false 即可禁用LegendIteml，防止通过点击item显示隐藏系列
									return false;
								}
							}
						}
					},
				});
			},
			error : function (data, status, e) {
				alert(data + "  " + status + "  " + e);
			}

		});
	}

	$('#cbk').change(function () {
		if ($('#cbk').is(':checked')) {
			if ($("#hdtype").val() == "2") {
				$("#ctmonth").show();
			} else {
				$("#ctyear").show();
			}
		} else {
			$("#ctyear").hide();
			$("#ctmonth").hide();
			$("#ctyear").val();
			$("#ctmonth").val();
		}
	});

});
