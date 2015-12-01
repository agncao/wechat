(function($) {//{templet:obj,data:[{},{},{}],loadSubContainer:function(){},[fn]}	
	String.prototype.replaceAll= function(s1,s2){    
		return this.replace(new RegExp(s1,"gm"),s2);    
	} ;
	$.fn.repeater = function(opt){
		var params = {
				parentId:	'',
				templateId:	'',
				templet:	undefined,
				data:	[],
				fields:	[],
				loadSubContainer:function(){},
				fn:	[]
				};
		var repeater={
				init:	function(opt){		//对各个属性进行初始化
//					alert('start to init....');
					if(typeof(opt.templet!=undefined)){
						params.templet = opt.templet;
					}
					if(typeof(opt.data!=undefined)){
						params.data = opt.data;
					}
					//需要加载的字段
					params.fields = this.getFields();
					//初始化父类容器的id
					params.parentId = params.templet.parent().attr('id');
					if($.isFunction(opt.loadSubContainer)){
						params.loadSubContainer = opt.loadSubContainer;
					}
					if(typeof(opt.fn)!=undefined){
						params.fn = opt.fn;
					}
					//删除已经生成的子元素
					params.templateId = params.templet.attr('id');
					$('#'+params.parentId+'>div[id!="'+params.templateId+'"]').remove();
//					alert('删除后的子元素数量：'+$('#'+params.parentId).children().length);
				},
				load:	function(opt){
//					alert('start to load....');
					this.init(opt);
					//根据数据集的 数量构造每一个repeater
					for(var i=0; i<params.data.length; i++){	
						var row =params.data[i];		//每一行数据
						
						//创建一数据行DOM
						var item = params.templet.clone();
						if(params.templateId!=undefined && params.templateId!=''){
							item.attr('id',params.templateId+'-'+ i);
						}else{
							item.attr('id','item-'+i);
						}
						item.css("display","block");
//						alert(item.attr('id'));
						var fields = params.fields;		//从模板中查找需加载的字段名
						var elements =item.find('*[id]');		//需要植入字段或者参数的 元素
						//开始根据字段名加载数据到新创建的 item
						elements.each(function(index,element){
							var elementId = $(this).attr('id');		//当前元素id
//							alert(elementId);
							//读取data-params属性的。例如<a href='#'id='btnDetail' data-params={field0,field1,field3} onclick=loadDetail('{field1}',{field0},'{field2}') >查看详细</a>
							if(typeof($(this).attr('data-params'))=='string'){
//								alert(element.attributes[0].nodeValue);

//								alert($(this).attr('data-params').replace('{','').replace('}','').split(',').length);
								var data_params = $(this).attr('data-params').replace('{','').replace('}','');	//得到参数
								var paramsJson = "{";
								var paramArray = data_params.split(',');
								for(var k=0;k<paramArray.length;k++){	//植入参数值
									var cellValue = $.trim(paramArray[k])=='index'?i:eval("row."+$.trim(paramArray[k])+";");	//获得字段的值
									if(k!=paramArray.length-1){
										paramsJson +=paramArray[k] +":'"+cellValue+"',";
									}else	{
										paramsJson +=paramArray[k] +":'"+cellValue+"'";
									}
									//获取要植入 的属性
									var attrs = $.grep(element.attributes,function(value){	
										//支持 onclick=loadDetail('{field1}',{field0},'{field2}'，也支持 onclick=loadDetail('{1}',{0},'{2}')
										return (value.nodeValue.indexOf('{'+$.trim(paramArray[k])+'}')>=0 || value.nodeValue.indexOf('{'+k+'}')>=0)
												&& value.nodeName!='data-params';
									});
									//将数据植入属性中		
									for(var j=0; j<attrs.length; j++){
//										alert('正在植入的元素:'+elementId+'; 植入前的属性值'+attrs[j].nodeValue+'; 置入的字段：'+'{'+$.trim(paramArray[k])+'}');
										attrs[j].nodeValue = attrs[j].nodeValue.replaceAll('{'+$.trim(paramArray[k])+'}',cellValue);
										attrs[j].nodeValue = attrs[j].nodeValue.replaceAll('{['+k+']}',cellValue);
//										alert(attrs[j].nodeValue);
									}
								}
								paramsJson +="}";
//								paramsJson = eval('('+paramsJson+')'); 
								$(this).attr("data-params",paramsJson);
							}

//							alert($(this).parent().html());
							
							//如果当前元素是以字段名命名，植入当前字段值，例如<label id='{contractBill}' >120,000.00</label>
							var field = $.trim(elementId.replace('{','').replace('}',''));
							if($.inArray(field,fields)>=0){
								$(this).attr('id',field+'-'+i);	//重新定义id，是它成为唯一的DOM元素
								//加载字段数据
								var cellValue = eval("row."+field+";");	//获得字段的值
//								alert("field："+field+"；value="+cellValue);
								var filterfn = $.grep(params.fn,function(value){//该字段有没有要调用的方法
						            return value.column==field;
						        });
								if(typeof(filterfn)!=undefined && filterfn.length>0){		//调用自定义的格式化函数
//									alert(filterfn[0].column);
										cellValue = filterfn[0].formatter(row,i,cellValue);
									}
								$(this).html(cellValue);
							}else{	//如果当前元素不是以字段名命名
								$(this).attr('id',elementId+"-"+i);		//重新定义id，是它成为唯一的DOM元素
							}
						});


						$('#'+params.parentId).append(item);
						params.loadSubContainer(row, i);
					}
//					params.templet.css("display","none");
					params.templet.remove();
				},
				getFields:		function(){
					var html = params.templet.html();
//					alert(html);
					var regex =/{[a-zA-z]*}/gi;
					var fields = [];
					var arrMatches = html.match(regex);
					 $.each(arrMatches,function(index){
					 	var data = arrMatches[index];
					 	data=data.replace("{","");
					 	data=data.replace("}","");
//					 	alert(data);
					 	fields.push(data);
					 });
					return fields;
				}
		} ;
		repeater.load(opt);
	};
})(jQuery);
