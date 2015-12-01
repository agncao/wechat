(function($) {
	$.fn.grid = function(opt){
		var grid = $(this);
		var params = {
				data:	[],
				fn:	[]
				};
		var fn={
				init:	function(opt){		//对各个属性进行初始化
					if(typeof(opt.data!=undefined)){
						params.data = opt.data;
					}
					if(typeof(opt.fn)!=undefined){
						params.fn = opt.fn;
					}
				},
				load:	function(opt){
//					alert('start to load....');
					this.init(opt);
					//根据数据集的 数量构造每一个repeater
					var tbody = grid.find("tr[data-key]:eq(0)").parent();
					for(var i=0; i<params.data.length; i++){	
						var row =params.data[i];		//每一行数据
						//创建一数据行DOM
						var item = grid.find("tr[data-key]:eq(0)").clone();
						item.css("display","");
						//遍历每个td
						item.children().each(function(k,ele){
							if(typeof($(ele).attr("data-serial"))!="undefined"){	//如果要求显示序号
								if($(ele).attr("data-serial")=="true"){
									$(ele).html(i+1); 
								}
							}
							 if(typeof($(ele).attr("data-field"))!="undefined") {
								 var field = $(ele).attr("data-field");
								 var cellValue = eval("row."+field+";");	//获得字段的值
								 var filterfn = $.grep(params.fn,function(value){//该字段有没有要调用的方法
									 return value.column==field;
								});
								if(typeof(filterfn)!=undefined && filterfn.length>0){		//调用自定义的格式化函数
//									alert(filterfn[0].hasOwnProperty('formatter'));
									if(filterfn[0].hasOwnProperty('formatter')){		//调用用户端的formatter方法
										cellValue = filterfn[0].formatter(row,i,cellValue);
									}
								}
								$(ele).html(cellValue);
							 }
						});
						tbody.append(item);
					}
					grid.find("tr[data-key]:eq(0)").css("display","none");
				}
		} ;
		$(this).find("tr[data-key]:gt(0)").remove();
		fn.load(opt);
	};
})(jQuery);
