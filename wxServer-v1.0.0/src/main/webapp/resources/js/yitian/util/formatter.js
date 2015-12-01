/**
 * 日期时间脚本库方法列表：
 * （1）Date.isValiDate：日期合法性验证
 * （2）Date.isValiTime：时间合法性验证
 * （3）Date.isValiDateTime：日期和时间合法性验证
 * （4）Date.prototype.isLeapYear：判断是否闰年
 * （5）Date.prototype.format：日期格式化
 * （6）Date.parseDate：字符串转成日期类型
 * （7）Date.daysBetween：计算两个日期的天数差
 * （8）Date.prototype.dateAdd：日期计算，支持正负数
 * （9）Date.prototype.dateDiff：比较日期差：比较两个时期相同的字段，返回相差值
 * （10）Date.prototype.toArray：把日期分割成数组：按数组序号分别为：年月日时分秒
 * （11）Date.prototype.datePart：取得日期数据信息
 */

//--------------------------------------------------- 
// 判断闰年 
//--------------------------------------------------- 
Date.prototype.isLeapYear = function() 
{ 
return (0==this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0))); 
} ;

Date.prototype.format = function(format){ 
	var o = { 
		"M+" : this.getMonth()+1, //month 
		"d+" : this.getDate(), //day 
		"h+" : this.getHours(), //hour 
		"m+" : this.getMinutes(), //minute 
		"s+" : this.getSeconds(), //second 
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
		"S" : this.getMilliseconds() //millisecond 
	};

	if(/(y+)/.test(format)) { 
		format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	} 

	for(var k in o) { 
		if(new RegExp("("+ k +")").test(format)) { 
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
		} 
	} 
	return format; 
};

/**
 * 字符串转成日期类型：
 * dateStr：必选，日期字符串，如果无法解析成日期类型，返回null
 * 格式：
 * （1）yyyy/MM/dd：IE和FF通用
 * （2）MM/dd/yyyy：IE和FF通用
 * （3）MM-dd-yyyy：仅IE
 * （4）yyyy-MM-dd：非IE，且时钟被解析在8点整
 */
Date.parseDate = function(dateStr)
{
    if(!dateStr){
        alert("字符串无法解析为日期");
        return null;
    }else{
        if(Date.isValiDate(dateStr,"yyyy/MM/dd")||Date.isValiDate(dateStr,"MM/dd/yyyy")){
            return new Date(Date.parse(dateStr));
        }else{
            if((!-[1,])){//IE
                if(Date.isValiDate(dateStr,"MM-dd-yyyy")){
                    return new Date(Date.parse(dateStr));
                }else{
                    alert("字符串无法解析为日期");
                    return null;
                }
            }else{//非IE
                if(Date.isValiDate(dateStr,"yyyy-MM-dd")){
                    return new Date(Date.parse(dateStr));
                }else{
                    alert("字符串无法解析为日期");
                    return null;
                }
            }
        }
    }
    return null;
};

/** 
 * 日期合法性验证：判断dataStr是否符合formatStr指定的日期格式 
 * 示例： 
 * （1）alert(Date.isValiDate('2008-02-29','yyyy-MM-dd'));//true 
 * （2）alert(Date.isValiDate('aaaa-58-29','yyyy-MM-dd'));//false 
 * dateStr：必选，日期字符串 
 * formatStr：可选，格式字符串，可选格式有：(1)yyyy-MM-dd(默认格式)或YYYY-MM-DD (2)yyyy/MM/dd或YYYY/MM/DD (3)MM-dd-yyyy或MM-DD-YYYY (4)MM/dd/yyyy或MM/DD/YYYY 
 */  
Date.isValiDate = function(dateStr, formatStr)  
{  
    if(!dateStr){  
        return false;  
    }  
    if(!formatStr){  
        formatStr = "yyyy-MM-dd";//默认格式：yyyy-MM-dd  
    }  
    if(dateStr.length!=formatStr.length){  
        return false;  
    }else{  
        if(formatStr=="yyyy-MM-dd"||formatStr=="YYYY-MM-DD"){  
            var r1=/^(((((([02468][048])|([13579][26]))(00))|(\d{2}(([02468][48])|([13579][26]))))\-((((0[13578])|(1[02]))\-(([0-2][0-9])|(3[01])))|(((0[469])|(11))\-(([0-2][0-9])|(30)))|(02\-([0-2][0-9]))))|(\d{2}(([02468][1235679])|([13579][01345789]))\-((((0[13578])|(1[02]))\-(([0-2][0-9])|(3[01])))|(((0[469])|(11))\-(([0-2][0-9])|(30)))|(02\-(([0-1][0-9])|(2[0-8]))))))$/;  
            return r1.test(dateStr);  
        }else if(formatStr=="yyyy/MM/dd"||formatStr=="YYYY/MM/DD"){  
            var r2=/^(((((([02468][048])|([13579][26]))(00))|(\d{2}(([02468][48])|([13579][26]))))\/((((0[13578])|(1[02]))\/(([0-2][0-9])|(3[01])))|(((0[469])|(11))\/(([0-2][0-9])|(30)))|(02\/([0-2][0-9]))))|(\d{2}(([02468][1235679])|([13579][01345789]))\/((((0[13578])|(1[02]))\/(([0-2][0-9])|(3[01])))|(((0[469])|(11))\/(([0-2][0-9])|(30)))|(02\/(([0-1][0-9])|(2[0-8]))))))$/;  
            return r2.test(dateStr);  
        }else if(formatStr=="MM-dd-yyyy"||formatStr=="MM-DD-YYYY"){  
            var r3=/^((((((0[13578])|(1[02]))\-(([0-2][0-9])|(3[01])))|(((0[469])|(11))\-(([0-2][0-9])|(30)))|(02\-([0-2][0-9])))\-(((([02468][048])|([13579][26]))(00))|(\d{2}(([02468][48])|([13579][26])))))|(((((0[13578])|(1[02]))\-(([0-2][0-9])|(3[01])))|(((0[469])|(11))\-(([0-2][0-9])|(30)))|(02\-(([0-1][0-9])|(2[0-8])))))\-\d{2}(([02468][1235679])|([13579][01345789])))$/;  
            return r3.test(dateStr);  
        }else if(formatStr=="MM/dd/yyyy"||formatStr=="MM/DD/YYYY"){  
            var r4=/^((((((0[13578])|(1[02]))\/(([0-2][0-9])|(3[01])))|(((0[469])|(11))\/(([0-2][0-9])|(30)))|(02\/([0-2][0-9])))\/(((([02468][048])|([13579][26]))(00))|(\d{2}(([02468][48])|([13579][26])))))|(((((0[13578])|(1[02]))\/(([0-2][0-9])|(3[01])))|(((0[469])|(11))\/(([0-2][0-9])|(30)))|(02\/(([0-1][0-9])|(2[0-8])))))\/\d{2}(([02468][1235679])|([13579][01345789])))$/;  
            return r4.test(dateStr);  
        }else{  
            return false;  
        }  
    }  
    return false;  
};


/**
 * 日期计算：支持负数，即可加可减，返回计算后的日期
 * num：必选，必须是数字，且正数是时期加，负数是日期减
 * field：可选，标识是在哪个字段上进行相加或相减，字段见如下的约定。无此参数时，默认为d
 * 约定如下格式：
 * （1）Y/y 年

 * （2）M 月
 * （3）W/w 周
 * （4）D/d 日
 * （5）H/h 时
 * （6）m 分
 * （7）S/s 秒
 * （8）Q/q 季
 */
Date.prototype.dateAdd = function(num, field)
{
    if((!num)||isNaN(num)||parseInt(num)==0){
        return this;
    }
    if(!field){
        field = "d";
    }
    switch(field){
        case 'Y':
        case 'y':return new Date((this.getFullYear()+num), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());break;
        case 'Q':
        case 'q':return new Date(this.getFullYear(), (this.getMonth()+num*3), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());break;
        case 'M':return new Date(this.getFullYear(), this.getMonth()+num, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());break;
        case 'W':
        case 'w':return new Date(Date.parse(this) + ((86400000 * 7) * num));break;
        case 'D':
        case 'd':return new Date(Date.parse(this) + (86400000 * num));break;
        case 'H':
        case 'h':return new Date(Date.parse(this) + (3600000 * num));break;
        case 'm':return new Date(Date.parse(this) + (60000 * num));break;
        case 'S':
        case 's':return new Date(Date.parse(this) + (1000 * num));break;
        default: return this;
    }
    return this;
}

/**
 * 计算两个日期的天数差：
 * dateOne：必选，必须是Data类型的实例
 * dateTwo：必选，必须是Data类型的实例
 */
Date.daysBetween = function(dateOne,dateTwo)
{
    if((dateOne instanceof Date)==false||(dateTwo instanceof Date)==false){
        return 0;
    }else{
        return Math.abs(Math.floor((dateOne.getTime()-dateTwo.getTime())/1000/60/60/24));
    }
}


/**
 * 日期和时间合法性验证
 * 格式：yyyy-MM-dd hh:mm:ss
 */
Date.isValiDateTime = function(dateTimeStr)
{
    var dateTimeReg=/^(((((([02468][048])|([13579][26]))(00))|(d{2}(([02468][48])|([13579][26]))))-((((0[13578])|(1[02]))-(([0-2][0-9])|(3[01])))|(((0[469])|(11))-(([0-2][0-9])|(30)))|(02-([0-2][0-9]))))|(d{2}(([02468][1235679])|([13579][01345789]))-((((0[13578])|(1[02]))-(([0-2][0-9])|(3[01])))|(((0[469])|(11))-(([0-2][0-9])|(30)))|(02-(([0-1][0-9])|(2[0-8]))))))(s{1}(([0-1][0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9]))?$/;
    return dateTimeReg.test(dateTimeStr);
};
