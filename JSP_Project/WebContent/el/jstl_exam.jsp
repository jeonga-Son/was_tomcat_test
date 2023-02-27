<%@page import="java.util.ArrayList" %>
<%@page import="kosa.bean.Person" %>
<%@page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!-- 태그 라이브러리 지시자 -->
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>
<%
    String hello = "Hello!!!";
%>
<!-- c => jstl이 가지고 있는 custom tag  -->
<!--따라서 태그 라이브러리 지시자를 무조건 입력해야한다.  -->
<c:set var="msg" value="Hello2!!!"/>
<c:set var="msg2" value="<%= hello %>"/>
<c:out value="${msg2 }"/>

<!-- forEach =>구구단 4단 -->
<ul>
    <c:forEach var="i" begin="1" end="9">
        <li>4 * ${i } = ${4*i }</li>
    </c:forEach>
</ul>

<%
    List<Person> list = new ArrayList<Person>();
    list.add(new Person("홍길동"));
    list.add(new Person("박길동"));
    list.add(new Person("김길동"));

    request.setAttribute("list2", list);
%>

<table border="1">
    <tr>
        <td>이름</td>
    </tr>
    <!-- 자바의 객체를 무조건 request.setAttribute에 담아야 한다. list객체를 넣은 것 과 같다. -->
    <!-- p는 person 객체  -->
    <c:forEach var="p" items="${list2 }">
        <tr>
            <td>${p.name }</td>
        </tr>
    </c:forEach>
</table>

</body>
</html>















