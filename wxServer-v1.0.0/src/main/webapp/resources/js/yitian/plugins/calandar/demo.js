/*
$(function(){
	$('#calandar').calandar({
		category:'weekly',
		 columns:[
		          {field:'realName',title:'姓名',prefixCol:'true'},
		          {field:'registerDate',title:'加班日',prefixCol:'false',valType:'date'},
		          {field:'content',title:'加班内容',prefixCol:'false',valType:'string'}],
		 data:[
		 		{'realName':'曹建明','registerDate':'2015/3/17','content':'为了计算工资'},
		 		{'realName':'曹XX','registerDate':'2015/3/19','content':'为了计算rtrt资'}]
	});
});
*/


$(function(){
	$('#calandar').calandar({
		uniqueField:	'registrant',
		category:'monthly',
		date:	'2015/3/1',
		 columns:[
		          {field:'registrantName',title:'姓名',prefixCol:'true'},
		          {field:'nums',title:'总计',prefixCol:'true'},
		          {field:'workDate',title:'加班日',prefixCol:'false',valType:'date'},
		          {field:'content',title:'加班内容',prefixCol:'false',valType:'string'}],
		 data:[
			       {"content":null,"deptId":25,"id":13,"nums":1,"projectId":5,"registerTime":"2015-03-26 16:47:28","registerType":2,"registrant":"aaaaa","registrantName":"曹建明","workDate":"2015-03-11 00:00:00"},
			       {"content":null,"deptId":25,"id":17,"nums":2,"projectId":9,"registerTime":"2015-03-18 17:51:59","registerType":2,"registrant":"admin","registrantName":"管理员","workDate":"2015-03-26 00:00:00"},
			       {"content":null,"deptId":25,"id":18,"nums":2,"projectId":6,"registerTime":"2015-03-18 18:10:11","registerType":2,"registrant":"admin","registrantName":"管理员","workDate":"2015-03-20 00:00:00"},
			       {"content":null,"deptId":25,"id":40,"nums":6,"projectId":24,"registerTime":"2015-03-25 17:50:59","registerType":2,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-09 00:00:00"},
			       {"content":null,"deptId":25,"id":41,"nums":6,"projectId":20,"registerTime":"2015-03-25 17:56:18","registerType":2,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-03 00:00:00"},
			       {"content":null,"deptId":25,"id":42,"nums":6,"projectId":24,"registerTime":"2015-03-26 10:49:52","registerType":2,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-15 00:00:00"},
			       {"content":"@@@@@@@@@@@@","deptId":25,"id":43,"nums":6,"projectId":0,"registerTime":"2015-03-26 10:53:57","registerType":1,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-08 00:00:00"},
			       {"content":"eee","deptId":25,"id":46,"nums":6,"projectId":21,"registerTime":"2015-03-26 11:12:42","registerType":2,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-25 00:00:00"},
			       {"content":"www","deptId":25,"id":48,"nums":6,"projectId":22,"registerTime":"2015-03-27 18:01:46","registerType":2,"registrant":"tianxiaoyu","registrantName":"田小雨","workDate":"2015-03-19 00:00:00"}
		       ]
	});
});
/*
$(function(){
	$('#calandar').calandar({
		category:'monthly',
		 columns:[
		          {field:'realName',title:'姓名',prefixCol:'true'},
		          {field:'registerDate',title:'加班日',prefixCol:'false',valType:'date'},
		          {field:'content',title:'加班内容',prefixCol:'false',valType:'string'}],
		 data:[
		 		{'realName':'曹建明','registerDate':'2015/2/17','content':''},
		 		{'realName':'曹XX','registerDate':'2015/7/19','content':''}]
	});
});
*/