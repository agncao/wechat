	(function($) {		
		/**     
		 * 刷新tab 
		 * @cfg  
		 *example: {tabTitle:'tabTitle',url:'refreshUrl'} 
		 *如果tabTitle为空，则默认刷新当前选中的tab 
		 *如果url为空，则默认以原来的url进行reload 
		 */  
		var refreshTab=function(cfg){
		    var refresh_tab = cfg.tabTitle?$('#tabs').tabs('getTab',cfg.tabTitle):$('#tabs').tabs('getSelected');	    
			if(refresh_tab && refresh_tab.find('iframe').length > 0){  
			var _refresh_ifram = refresh_tab.find('iframe')[0];  
			var refresh_url = cfg.url?cfg.url:_refresh_ifram.src;  
			//_refresh_ifram.src = refresh_url;  
			//_refresh_ifram.contentWindow.location.href=refresh_url;  

			$(_refresh_ifram).attr("src",refresh_url);		//caojm 2015/1/4
			}  
		};
		//ifrm:{id:'iframeId',propertyName:'propertyName',propertyid:'propertyid',src:'src'}
		$.fn.addTab = function(index,title, ifrm,icon){
			if ($(this).tabs('exists', index)){//如果tab已经存在,则选中并刷新该tab          
				$(this).tabs('select', index);  
				refreshTab({tabTitle:title,url:href});  
			} else {  
				if (ifrm){  
					var content = '<iframe  id="'+ifrm.id+'" '+ifrm.propertyName+'="'+ifrm.propertyid+'" scrolling="no" frameborder="0"  src="'+ifrm.src+'" style="width:100%;height:99.5%;"></iframe>';
//					alert(content);
				} else {  
					var content = '未实现';  
				}  
				$(this).tabs('add',{  
					title:title,  
					content:content,  
					selected:false,
					iconCls:icon||''  
				});  
			}  
		};
	})(jQuery);
