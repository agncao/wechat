(function($) {	
	$.fn.calandar = function(opt){
		var params = {
				uniqueField:	'',
				date:	new Date(),
				grid:				$('<table></table>'),
				grid_head_thead:	$('<thead></thead>'),
				grid_rows_tbody:	$('<tbody></tbody>'),
				style:{},			//样式
				cssClass:{		//样式类
					grid:		"calandar",
					cell_highlight:		'calandar-cell-highlight',
					grid_head_thead:	 'calandar-thead',
					grid_rows_tbody:		'calandar-tbody',
				},
				category: 'weekly',
				prefixCols: [],		//要 在开始位置额外增加的表头
				columns:	[],
				days:7,
				week:	['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
				month:	['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		};
		var 	fn ={
				init:	function(opt){		
					if(typeof(opt.uniqueField) != "undefined") {
						params.uniqueField = opt.uniqueField;		//唯一键字段
					}

					if(typeof(opt.date) != "undefined") {
						params.date = new Date(Date.parse( opt.date.replace(/-/g,   "/")));		//唯一键字段
					}
					//初始化表头
					params.prefixCols =$.grep(opt.columns,function(col,i){		//过滤出要在开始位置额外增加的表头
						 return col.prefixCol == 'true';
						 },false);
//					alert(params.prefixCols.length);				
					if(typeof(opt.category) != "undefined") {
						params.category = opt.category;
					}
					params.columns = opt.columns;
					var cells = 7;		//默认创建星期
					if(params.category=='monthly'){		//月份的天数
						cells = this.daysOfMonth();
					}else if(params.category=='yearly'){
						cells = 12;
					}
					params.days = cells;				
			        var grid_head_tr = $('<tr></tr>'); 
			        for(var i=0;i<params.prefixCols.length;i++){		//创建额外增加的表头
			            var grid_head_td = $('<td>'+params.prefixCols[i].title+'</td>'); 
			            grid_head_tr.append(grid_head_td); 
			        }
//			        alert(grid_head_tr.html());
					for(var i=0;i<params.days;i++){			//创建日历表头单元格
						if(params.category=='weekly'){
//							alert('今天是'+params.week[i]);
				            var grid_head_td = $('<td>'+params.week[i]+'</td>').attr('width','13%'); 
				            grid_head_tr.append(grid_head_td); 
			            }else if(params.category=='monthly'){
				            var grid_head_td = $('<td>'+(i+1)+'</td>'); 
				            grid_head_tr.append(grid_head_td); 
			            }else{		//年份表头单元格
				            var grid_head_td = $('<td>'+params.month[i]+'</td>'); 
				            grid_head_tr.append(grid_head_td); 
			            }
					}
//			        alert(grid_head_tr.html());
					params.grid_head_thead.append(grid_head_tr);
					params.grid_head_thead.attr('class',params.cssClass.grid_head_thead);
//		            alert(params.grid_head_thead.html());
		            params.grid.append(params.grid_head_thead); 
//		            alert(params.grid.html());
		            params.grid.attr('class',params.cssClass.grid);
				},
				load:	function(opt){		//加载数据
					/*
					 * category:weekly,
					 * columns:[{field:'realName',title:'姓名',prefixCol:'true'},{field:'workDate',title:'加班日',prefixCol:'false',valType:'date'},{field:'content',title:'加班内容',prefixCol:'false',valType:'string'}]
					 * data:[
					 * 		{'realName':'曹建明','workDate':'2015/3/17','content':'为了计算工资'},
					 * 		{'realName':'曹XX','workDate':'2015/3/19','content':'为了计算rtrt资'}
					 * ]
					 * */
					this.init(opt);		//初始化表头
					
					//加载数据
					var uniqueValues = [];
					for(var i=0; i<opt.data.length; i++){	//表示有多少行数据
				        var row = opt.data[i];		//读取一条json数据

						//计算要填充数据的日期
				        var dayid =	-1;	//要把数据显示到到第几个单元格
						var day =new Date(Date.parse( row.workDate.replace(/-/g,   "/")));
		    			if(params.category=="weekly"){
		    				//计算星期几
		    				dayid = day.getDay();  	//要显示内容的索引
		    				if(dayid == 0) 
		    					dayid = 6;	//英文中周日是开始时间，我们以周日作为结束时间
		    				else
		    					dayid -= 1;
		    			}else if(params.category=="monthly"){
		    				dayid = day.getDate();  	//要显示内容的索引
		    				dayid -=1;
		    			}else{
		    				dayid = day.getMonth();  	//要显示内容的索引
		    			}
		    			if(typeof(params.prefixCols)!=undefined){
			    			dayid += params.prefixCols.length;
		    			}
		    			
				        var uniqueValue = eval("row."+params.uniqueField+";");
				        var rowIndex = $.inArray(uniqueValue,uniqueValues);		//表格的第几行
//				        alert(rowIndex);
				        //----------------判断是否已经创建新的一行数据
						if(rowIndex<0){	//没创建的情况
							uniqueValues.push(uniqueValue);
							rowIndex = uniqueValues.length-1;	//重新计算rowIndex
							var grid_row_tr = $('<tr></tr>'); 				        
							for(var k=0;k<params.prefixCols.length;k++){	//填充额外增加的字段所对应的数据
					        	var col = params.prefixCols[k];		//字段项
				        		var colName = col.field;
					        	if(col.prefixCol == 'true'){	//如果是在开始位置额外增加的字段
					        		//取出该字段项的值
						            var grid_row_td = $('<td>'+eval("row."+colName+";")+'</td>'); 
						            grid_row_tr.append(grid_row_td); 
					        	}
				        	}
							
							//创建单元格
					        for(var k=0; k<params.days; k++){
				        		var grid_row_td = $('<td>&nbsp;</td>').css({"color":"#fff"}); 
				        		grid_row_tr.append(grid_row_td); 
					        }
							params.grid_rows_tbody.append(grid_row_tr);
//					        alert(params.grid_rows_tbody.html());
						}
				        //-------------以上：判断是否已经创建新的一行数据
						//加载数据
						params.grid_rows_tbody.find("tr:eq("+rowIndex+") td:eq("+dayid+")").attr('class',params.cssClass.cell_highlight);
						if(params.category == "weekly"){
							params.grid_rows_tbody.find("tr:eq("+rowIndex+") td:eq("+dayid+")").html(row.content);
						}
					}
//			        alert(params.grid_rows_tbody.html());
					params.grid_rows_tbody.attr('class',params.cssClass.grid_rows_tbody);
				    params.grid.append(params.grid_rows_tbody);
//			        alert(params.grid.html());
				},
				daysOfMonth: function(){
					y = params.date.getFullYear(), m = params.date.getMonth();
//					var firstDay = new Date(y, m, 1);
					var lastDay = new Date(y, m + 1, 0);
					var days = lastDay.getDate();
					return days;
				}
		};
		$(this).children().remove();
		fn.load(opt);
		$(this).append(params.grid);
		
	};
})(jQuery);
