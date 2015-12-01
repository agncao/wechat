<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="shortcut icon" href="resources/imgs/common/favicon.ico" />
<title>【登录失败】-重新登录</title>
<!-- session过期跳转到登陆页面并跳出iframe框架  -->
<script type="text/javascript">
	if (window != top)
		top.location.href = location.href;
</script>
<!-- 加载EXT -->
<!--样式设置id为 theme 用来做主题切换 -->
<!-- <link id="theme" rel="stylesheet" type="text/css"
	href="resources/css/neptune.css" /> -->
<link id="theme" rel="stylesheet" type="text/css"
	href="resources/css/blue.css" />
<script type="text/javascript" src="resources/js/extjs/ext-all.js"></script>
<script type="text/javascript"
	src="resources/js/extjs/locale/ext-lang-zh_CN.js"></script>
<link rel="stylesheet" type="text/css" href="resources/css/login.css" />
<script type="text/javascript" src="app/view/login.js"></script>
</head>
<body>
	<div id="floater"></div>
	<div id="loginDiv"></div>
</body>
</html>
