<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
 
<%
    String number = request.getParameter("number");
    String id = request.getParameter("id");
    String comment = request.getParameter("comment");
%>
 
글번호 : <%=number %><br>
아이디 : <%=id %><br>
댓글 : <%=comment %><br>
 
</body>
</html>
