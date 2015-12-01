$(function(){
	$.post("http://119.57.117.117:7788/wxServer/yt/getUserInfo",{
		username:$('#wxUserName').val()
	},function(data,status){
		$("#imgUser").attr('src',data.imgUrl+"64");
		$('#realname').html(data.realname);
		$('#corpName').html(data.corpName);
		$('#deptName').html(data.deptName);
	},'json');

	
	$('#btnPushMessage').click(function(){
		window.location.href='http://119.57.117.117:7788/wxServer/hr/userRole';
	});
});