<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	// request => 내장객체 // (9개의 내장 객체 중 request, response, out, session, application을 가장 많이 씀.)
	// request 객체를 통해 session을 구할 수 있다.
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="board" class="kosa.model.Board"></jsp:useBean> 
<jsp:setProperty property="*" name="board"/>

<%
	request.setAttribute("name", board.getWriter());
%>

<jsp:forward page="result2.jsp"></jsp:forward>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	out.println(board.toString());
%>
</body>
</html>