var CommonUtil = new Object();

// 根据一个日期获取该日期所在周的周一和周日,返回的数据格式是:json字符串,后台接收startTime和endTime
CommonUtil.twoDate = function(time) {
	var s="";
	var e="";

	if (time == "" || time == null) {
		var formdata = {
			startTime : s,
			endTime : e
		};
		return formdata;
	}else{
		time = time.replace(/-/g, "/");
		var t = new Date(time);
		var start = new Date(time);
		var end = new Date(time);
		var day = t.getDay()-1;
		if(day<0){
			day=6;
		}
		start.setDate((t.getDate()) - day);
		end.setDate((t.getDate()) - day + 6);
		 s = start.getFullYear() + "/" + (start.getMonth() + 1) + "/"+ start.getDate();
		 e = end.getFullYear() + "/" + (end.getMonth() + 1) + "/"+ end.getDate();
	
		var formdata = {
			startTime : s,
			endTime : e
		};
		return formdata;
	}

}

CommonUtil.isImageFile = function(name) {
	var imageFilePromiss = "gif,jpg,bmp,png";
	return (imageFilePromiss.indexOf(getFileType(name)) >= 0);
};
CommonUtil.isInteger = function(num) {
	var isInteger = /^\d+$/;
	return isInteger.test(num);
};
// 是否是数字
CommonUtil.isNum = function(num) {
	var isDouble = /^[+]?\d+(\.\d+)?$/;
	return isDouble.test(num);
};

CommonUtil.isUrl = function(url) {
	var reg = new RegExp("^[a-zA-z]+://*");
	return reg.test(url);
};
CommonUtil.isEmail = function(email) {
	var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return reg.test(email);
};
// wangxu只能由中文、字母、数字以及下划线组成
CommonUtil.isKeyWord = function(key) {
	var reg = /^[0-9a-zA-Z_\u0391-\uFFE5]+$/;
	return reg.test(key);
};
CommonUtil.trim = function(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
// wangxu验证时间 格式为YYYY-MM-DD hh:mm:ss
CommonUtil.isDateTime = function(str) {
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if (r == null)
		return false;
	var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
	return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3]
			&& d.getDate() == r[4] && d.getHours() == r[5]
			&& d.getMinutes() == r[6] && d.getSeconds() == r[7]);
};
// wangxu验证时间 格式为YYYY-MM-DD hh:mm:ss
CommonUtil.isDate = function(str) {
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
	var r = str.match(reg);
	if (r == null) {
		return false;
	}
	return true;
};

CommonUtil.parseDate = function(strDate) {
	var date = eval('new Date('
			+ strDate.replace(/\d+(?=-[^-]+$)/, function(a) {
						return parseInt(a, 10) - 1;
					}).match(/\d+/g) + ')');
	return date;

};
// 格式化金额
CommonUtil.money = function(s, n) {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";// 更改这里n数也可确定要保留的小数位
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
	t = "";
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("") + "." + r.substring(0, 2);// 保留2位小数
																	// 如果要改动
																	// 把substring
																	// 最后一位数改动就可
};

// 此方法解决绩效指标合并行的问题，rowFildNames传两个节点“,”分割开，第二个节点的合并根据第一个来计算
function mergeGridColCells(grid, rowFildNames) {
	var rows = grid.datagrid('getRows');
	if (rows.length < 1) {
		return;
	}
	var rowFildList = rowFildNames.split(",");
	for (var i = 0; i < rowFildList.length; i++) {
		var startIndex = 0;
		var endIndex = 0;
		var rowFildName = rowFildList[i];
		$.each(rows, function(i, row) {
					if (row[rowFildList[0]] == rows[startIndex][rowFildList[0]]
							&& row[rowFildList[0]] != null) {
						endIndex = i;
					} else {
						grid.datagrid('mergeCells', {
									index : startIndex,
									field : rowFildName,
									rowspan : endIndex - startIndex + 1
								});
						startIndex = i;
						endIndex = i;
					}
				});
		grid.datagrid('mergeCells', {
					index : startIndex,
					field : rowFildName,
					rowspan : endIndex - startIndex + 1
				});
	}
}

// --------------以下：禁用backspace键----------------
$(document).keydown(function(e) {
	var doPrevent;
	// for IE && Firefox
	var varkey = (e.keyCode) || (e.which) || (e.charCode);
	if (varkey == 8) {
		var d = e.srcElement || e.target;
		if (d.tagName.toUpperCase() == 'INPUT'
				|| d.tagName.toUpperCase() == 'TEXTAREA') {
			doPrevent = d.readOnly || d.disabled;
			// for button,radio and checkbox
			if (d.type.toUpperCase() == 'SUBMIT'
					|| d.type.toUpperCase() == 'RADIO'
					|| d.type.toUpperCase() == 'CHECKBOX'
					|| d.type.toUpperCase() == 'BUTTON') {
				doPrevent = true;
			}
		} else {
			doPrevent = true;
		}
	} else {
		doPrevent = false;
	}
	if (doPrevent) {
		e.preventDefault();
	}
});


//字符全文替换
String.prototype.replaceAll= function(s1,s2){    
	return this.replace(new RegExp(s1,"gm"),s2);    
} ;
//无数据操作
var myview = $.extend({}, $.fn.datagrid.defaults.view, {
	onAfterRender : function(target) {
		$.fn.datagrid.defaults.view.onAfterRender.call(this, target);
		var opts = $(target).datagrid('options');
		var vc = $(target).datagrid('getPanel').children(
				'div.datagrid-view');
		vc.children('div.datagrid-empty').remove();
		if (!$(target).datagrid('getRows').length) {
			var d = $('<div class="datagrid-empty"></div>').html(
					opts.emptyMsg || 'no records').appendTo(vc);
			d.css({
				position : 'absolute',
				left : 20,
				top : 50,
				color : "818181",
				width : '100%',
				textAlign : 'left'
			});
		}
	}
});