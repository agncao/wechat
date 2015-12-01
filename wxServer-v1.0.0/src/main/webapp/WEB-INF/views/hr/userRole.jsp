<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/meta.jsp"%>
<script type="text/javascript"	src="<%=basePath%>modules/hr/userRole.js?<%=Math.random() * 1000%>"></script>
<title>用户角色</title>
</head>
<body>
	<div id="data-grid-panel" class="yt-panel">
	<br/>
    <table class="edittable" style="width:100%;" id="data-grid">
      <tr>
         <th height="40" align="center"><input type="hidden" id="wxUserName" value="${username}"><img alt="" src="" id="imgUser"> </th>
      </tr>
      <tr data-key="id">
         <th data-field="roleName">&nbsp; </th>
      </tr>
     </table>
    <table class="edittable" style="width:100%;">
      <tr>
      <td height=80><input type="button" id="btnPushMessage" value="业务系统向微信推送消息" style="height:67px; width:200px;"/> </td>
      </tr>
    </table>
</div>
</body>
</html>