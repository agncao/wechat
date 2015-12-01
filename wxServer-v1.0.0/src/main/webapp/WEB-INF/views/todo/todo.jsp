<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/meta.jsp"%>
<script type="text/javascript"	src="<%=basePath%>modules/todo/todo.js?<%=Math.random() * 1000%>"></script>
<title>登录用户信息</title>
</head>
<body>
<input type="button" onclick="todo();" value="发送代办数据测试">
</body>
</html>