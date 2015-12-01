function test(){
	$('#projectDocList').repeater({
		templet:$('#projectDocList > div[id="item"]'),
		fn:[{
			column:'contractBill',
			formatter:	function(row,index,val){	//插件支持字段的格式化
				return "￥"+val;
			}
		}],
		 data:[
		       		{"contractBill":11.0000,"createTime":"2015-04-01 15:41:02","endCheckData":"2015-04-10 15:41:02","id":5,"paidBill":0.0000,"reportCode":"yt-r-150105-bdcz-sh-0011","state":"编制"},
		       		{"contractBill":0.0000,"createTime":"2015-04-01 15:58:18","endCheckData":"2015-04-10 15:58:18","id":6,"paidBill":0.0000,"reportCode":"yt-r-150105-bdcz-s3333h-001","state":"编制"},
		       		{"contractBill":0.0000,"createTime":"2015-04-01 16:27:37","endCheckData":"2015-04-07 16:27:37","id":7,"paidBill":0.0000,"reportCode":"yt-r-150105-bdcz-sh-001","state":"编制"}],
		loadSubContainer:	function(row,index){	//可能需要在容器中加载第三方插件，例如本项目中报告进度条
			var containerId='sub-'+index;
			loadProgressbar(containerId);	
//			alert(item.html());
		}
	});

}

function 	loadDetail(ele){
	var paramsJson = $('#'+ele.id).attr("data-params");
	paramsJson = eval('('+paramsJson+')'); 
	alert("当前数据id："+paramsJson.id);
}
function loadProgressbar(containerId){
	var dom = $('<p class="ass_jd_01">第三方插件</p>');	//第三方插件对象
	$('#'+containerId).append(dom);
	//$('#'+containerId).progress({});		//一般第三方插件的加载方式
	return $('#'+containerId);
}

