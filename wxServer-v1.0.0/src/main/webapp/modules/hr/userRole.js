$(function(){
	$.post("http://119.57.117.117:7788/wxServer/yt/getUserInfo",{
		username:$('#wxUserName').val()
	},function(data,status){
		$("#imgUser").attr('src',data.imgUrl+"64");
	},'json');
	
	$.post("http://119.57.117.117:7788/wxServer/yt/getUserRoles",{
		username:$('#wxUserName').val()
	},function(data,status){
		$('#data-grid').grid({
			fn:[],
			 data:data
		});


	},'json');

	
$('#btnPushMessage').click(function(){
	$.post("http://119.57.117.117:7788/wxServer/yt/todo/list",{},function(data,status){},'json');
});
});