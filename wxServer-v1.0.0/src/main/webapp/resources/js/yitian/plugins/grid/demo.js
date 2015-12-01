$(function(){
	$('#data-grid').grid({
		fn:[{
			column:'projectName',
			formatter:	function(row,index,val){	//插件支持字段的格式化
				return '<a href="m/project/projectAdd?id='+row.id+'">'+val+'</a>';
			}
		}],
		 data:[		       		
		       		       		{"projectCode":"YTZJ-201504-001","projectName":"曹建明20150420审核类型 终审","projectManager":"caojm","id":"5","buildingArea":"20亩"},
		    		       		{"projectCode":"YTZJ-201504-012","projectName":"yxl周末系统测试业务数据","projectManager":"caojm","id":"6","buildingArea":"4000平米"},
		    		       		{"projectCode":"YTZJ-201504-039","projectName":"中建三局","projectManager":"caojm","id":"7","buildingArea":"规划60亩地"}]
	});

});
