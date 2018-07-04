$(document).ready(function () {

	$.ajax({
		data : {
			Method : 'singleTJ',
			flag : 1,
			type : 1,
			app : '',
			times : '',
			compares : ''
		},
		url : 'DataJson.ashx',
		type : 'POST',
		dataType : 'json',
		success : function (res) {
			$('#container2').highcharts({
				title : {
					text : '<b>消费额统计(近15天)</b>',
					x : -20 //center
				},
				xAxis : {
					gridLineWidth : 0,
					lineColor : "#808080", //X轴的颜色
					lineWidth : 1, //X轴的宽度
					tickColor : '#808080',
					categories : res.x
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
				credits:{
				enabled: false
				},				
				tooltip : {
					valueSuffix : '元'
				},
				
				series : res.y,
				plotOptions : {
						line : {
							events : {

								legendItemClick : function (event) { //return false 即可禁用LegendIteml，防止通过点击item显示隐藏系列
									return false;
								}
							}
						}
					}

			});

			$.ajax({
				data : {
					Method : 'AppTJ'
				},
				url : 'DataJson.ashx',
				type : 'POST',
				dataType : 'json',
				success : function (re) {
					$('#container3').highcharts({
						title : {
							text : '<b>应用消费统计</b>',
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
						credits:{
				enabled: false
				},
						legend: {
		            align: 'right',
		            x: -100,
		            verticalAlign: 'top',
		            y: 20,
		            floating: true,
		            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
		            borderColor: '#CCC',
		            borderWidth: 1,
		            shadow: false
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
					}
					});
				},
				error : function (data, status, e) {
					alert(data + "  " + status + "  " + e);
				}

			});
		},
		error : function (data, status, e) {
			alert(data + "  " + status + "  " + e);
		}

	});

});
