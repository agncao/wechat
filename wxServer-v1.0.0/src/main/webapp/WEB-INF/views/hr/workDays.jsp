<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <script type="text/javascript" src="<%=basePath%>/resources/js/My97DatePicker/WdatePicker.js"></script>
    <link href="<%=basePath%>/resources/js/jqueryUI/jquery-ui-1.10.3.custom.min.css" rel="stylesheet">
    <script type="text/javascript" src="<%=basePath%>/resources/js/jquery/jquery-1.8.3.min.js"></script>
    <script src="<%=basePath%>/resources/js/jqueryUI/jquery-ui-1.10.3.custom.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>/resources/js/jqueryUI/jquery.blockUI.js"></script>
    <script type="text/javascript" src="<%=basePath%>/resources/js/modules/hr/workDays.js"></script>
    <script type="text/javascript" src="<%=basePath%>/resources/js/extjs/ext-all.js"></script>
    <script type="text/javascript" src="<%=basePath%>/resources/js/extjs/locale/ext-lang-zh_CN.js"></script>
    <script type="text/javascript" src="<%=basePath%>/app/common/msg/CusMsg.js"></script>
    <script type="text/javascript" src="http://github.com/jonleighton/date_input/raw/master/jquery.date_input.js"></script>
    <script type="text/javascript" src="http://github.com/jonleighton/date_input/raw/master/date_input.css"></script>
    <link href="<%=basePath%>/app/common/msg/CusMsg.css" rel="stylesheet">
  <script><!--
  	
--></script>
<style>
</style>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/resources/js/extjs/resources/css/ext-all.css">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
  <form id="hiddenForm" method="post" >
	  <input type="hidden" name="hdnWwdata1" id="hdnWwdata1" value="${query.hdnWwdata1}" />  
	  <input type="hidden" name="hdnWwdata2" id="hdnWwdata2" value="${query.hdnWwdata2}" />  
	  <input type="hidden" name="hdnWwdata3" id="hdnWwdata3" value="${query.hdnWwdata3}" />  
	  <input type="hidden" name="hdnWwdata4" id="hdnWwdata4" value="${query.hdnWwdata4}" />  
	  <input type="hidden" name="hdnWwdata5" id="hdnWwdata5" value="${query.hdnWwdata5}" />  
	  <input type="hidden" name="hdnWwdata6" id="hdnWwdata6" value="${query.hdnWwdata6}" />  
	  <input type="hidden" name="hdnWwdata7" id="hdnWwdata7" value="${query.hdnWwdata7}" />  
	  <input type="hidden" name="hdnWwdata8" id="hdnWwdata8" value="${query.hdnWwdata8}" />  
	  <input type="hidden" name="hdnWwdata9" id="hdnWwdata9" value="${query.hdnWwdata9}" />  
	  <input type="hidden" name="hdnWwdata10" id="hdnWwdata10" value="${query.hdnWwdata10}" />  
	  <input type="hidden" name="hdnWwdata11" id="hdnWwdata11" value="${query.hdnWwdata11}" />  
	  <input type="hidden" name="hdnWwdata12" id="hdnWwdata12" value="${query.hdnWwdata12}" />
	  
	  <input type="hidden" name="jdata1" id="jdata1" value="${query.jdata1}" />  
	  <input type="hidden" name="jdata2" id="jdata2" value="${query.jdata2}" />  
	  <input type="hidden" name="jdata3" id="jdata3" value="${query.jdata3}" />  
	  <input type="hidden" name="jdata4" id="jdata4" value="${query.jdata4}" />  
	  <input type="hidden" name="jdata5" id="jdata5" value="${query.jdata5}" />  
	  <input type="hidden" name="jdata6" id="jdata6" value="${query.jdata6}" />  
	  <input type="hidden" name="jdata7" id="jdata7" value="${query.jdata7}" />  
	  <input type="hidden" name="jdata8" id="jdata8" value="${query.jdata8}" />  
	  <input type="hidden" name="jdata9" id="jdata9" value="${query.jdata9}" />  
	  <input type="hidden" name="jdata10" id="jdata10" value="${query.jdata10}" />  
	  <input type="hidden" name="jdata11" id="jdata11" value="${query.jdata11}" />  
	  <input type="hidden" name="jdata12" id="jdata12" value="${query.jdata12}" />
	  
	  <input type="hidden" name="wdata1" id="wdata1" value="${query.wdata1}" />  
	  <input type="hidden" name="wdata2" id="wdata2" value="${query.wdata2}" />  
	  <input type="hidden" name="wdata3" id="wdata3" value="${query.wdata3}" />  
	  <input type="hidden" name="wdata4" id="wdata4" value="${query.wdata4}" />  
	  <input type="hidden" name="wdata5" id="wdata5" value="${query.wdata5}" />  
	  <input type="hidden" name="wdata6" id="wdata6" value="${query.wdata6}" />  
	  <input type="hidden" name="wdata7" id="wdata7" value="${query.wdata7}" />  
	  <input type="hidden" name="wdata8" id="wdata8" value="${query.wdata8}" />  
	  <input type="hidden" name="wdata9" id="wdata9" value="${query.wdata9}" />  
	  <input type="hidden" name="wdata10" id="wdata10" value="${query.wdata10}" />  
	  <input type="hidden" name="wdata11" id="wdata11" value="${query.wdata11}" />  
	  <input type="hidden" name="wdata12" id="wdata12" value="${query.wdata12}" /> 
	  <input type="hidden" name="dqYear" id="dqYear" value="${query.years}" />  
  </form>
  <table width="901" height="502" border="0" align="center">
  <tr>
      <td width="150" colspan="4">
      <fieldset data-role="controlgroup" data-type="horizontal">
         <input name="txtSelectDate" type="hidden" id="txtSelectDate" class="bigInputbox" />
      	 <!-- <input class="Wdate" type="text" id="year"  style="width:130px;" readonly="readonly" onmouseover="WdatePicker({dateFmt:'yyyy',startDate: '%y'})">请选择年份</input> -->
      	&nbsp; 请选择年份:
      	 <select name="year" id="year" style="width:100px;" onchange="dataChange()">
		 </select>&nbsp;年&nbsp;&nbsp;
      	 <!-- <input class="Wdate" type="text" id="year"  style="width:130px;">请选择年份</input> -->
      	<!--  <div id="divId"  style="width:200px;"></div> -->
		 <input id="btn3" type="button" style="width:80" value="查询" onclick="findYear()"/>
		 <input type="radio" id="radio1" name="radio" value="设置为公休" onclick="setHoliday(3)"/>
	     <label for="radio1">设置为公休</label>
	     <input type="radio" id="radio2" name="radio" value="设置为节假日" onclick="setHoliday(2)"/>
	     <label for="radio2">设置为节假日</label>
	     <input type="radio" id="radio3" name="radio" value="设置为工作日" checked="checked" onclick="setHoliday(1)"/>
	     <label for="radio3">设置为工作日</label>
  		 <!--<select name="selectAge" id="selectAge" onchange="setStyle(this.value)">  
	        <option value="default">默认风格</option>  
	        <option value="whyGreen">绿色风格</option>  
	        <option value="ext">Ext风格</option> 
		</select>
		<label>日历风格</label>
		-->
		<input id="btnAddWDate1" type="button" style="width:80" value="打印/预览" onclick="print()" class="enButton" />
		<input id="btnAddWDate2" type="button" style="width:80" value="保存" onclick="f()" class="enButton" />
  </tr>
  <tr height="100" width="5" >
    <th scope="col"><div id="month1" /></th>
    <th scope="col"><div id="month2" /></th>
    <th scope="col"><div id="month3" /></th>
    <th scope="col"><div id="month4" /></th>
  </tr>
  <tr>
    <th scope="col"><div id="month5" /></th>
    <th scope="col"><div id="month6" /></th>
    <th scope="col"><div id="month7" /></th>
    <th scope="col"><div id="month8" /></th>
  </tr>
  <tr>
    <th scope="col"><div id="month9" /></th>
    <th scope="col"><div id="month10" /></th>
    <th scope="col"><div id="month11" /></th>
    <th scope="col"><div id="month12" /></th>
  </tr>
  <tr>
  	<th colspan="4">
		<div id="sumYear"></div>
	</th>
  </tr>
</table>
  </body>
</html>
