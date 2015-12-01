var HttpUtil ={
	request:function(url,params,callback){
		var data = "";
		if(params!=null){
			for(var key in params){
				if(typeof(params[key])=="function"){
					continue;
				}
				data+=key+"="+params[key]+"&";
			}
		}
		if(data.length>0){
			data=data.substring(0,data.length-1);
		}
		$.ajax( {
			type :"post",
			dataType: 'jsonp',
			url :url,
			data :data,
			success :function(ret){
				if(callback){
					callback(ret);
				}
			}
		});
	}
}
