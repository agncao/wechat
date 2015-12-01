<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="Cache-Control" content="no-store" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />


<link rel="stylesheet" type="text/css" href="<%=basePath%>resources/css/yitian/yitianUI.css?<%=Math.random() * 1000%>">
<script type="text/javascript"	src="<%=basePath%>resources/js/ui/jquery-easyui-1.4/jquery.min.js"></script>

<!---- 倚天自定义 库和插件 ---->
<script type="text/javascript"	src="<%=basePath%>resources/js/yitian/util/utils.js?<%=Math.random() * 1000%>"></script>
<script type="text/javascript"	src="<%=basePath%>resources/js/yitian/plugins/grid/plugin/grid.js?<%=Math.random() * 1000%>"></script>
<script type="text/javascript"	src="<%=basePath%>resources/js/yitian/util/formatter.js?<%=Math.random() * 1000%>"></script>
<script type="text/javascript"	src="<%=basePath%>resources/js/yitian/plugins/jquery.urlGet.js?<%=Math.random() * 1000%>"></script>

<!-- 其他插件 -->
<script type="text/javascript"	src="<%=basePath%>resources/js/common/dwr.util.js"></script>


