<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/meta.jsp"%>
<script type="text/javascript"	src="<%=basePath%>modules/hr/userInfo.js?<%=Math.random() * 1000%>"></script>
<title>登录用户信息</title>
</head>
<body>
	<div id="data-grid-panel" class="yt-panel">
	<br/>
    <table class="edittable" style="width:1150px;" id="data-grid">
      <tr>
        <th width="15%" height=40>微信账号</th>
          <th width="85%">&nbsp;${username}<input type="hidden" id="wxUserName" value="${username}"></th> 
 <!--         <td width="85%">zhangbaohe<input type="hidden" id="wxUserName" value="zhangbaohe"></td>-->
      </tr>
      <tr>
         <th colspan="2" height="40"><img alt="" src="" id="imgUser"> </th>
      </tr>
      <tr>
        <th width="15%" height=40>真实姓名</th>
         <th width="85%"><label id="realname"></label> </th>
      </tr>
      <tr>
        <th width="15%" height=40>公司</th>
         <th width="85%"><label id="corpName"></label></th>
      </tr>
      <tr>
        <th width="15%" height=40>部门</th>
         <th width="85%"><label id="deptName"></label></th>
      </tr>
      <tr>
      <td colspan="2" height=80><input type="button" id="btnPushMessage" value="查看用户角色" style="height:67px; width:200px;"/> </td>
      </tr>
    </table>
</div>
</body>
</html>