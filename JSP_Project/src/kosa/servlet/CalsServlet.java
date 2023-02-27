package kosa.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalsServlet
 */
@WebServlet("/CalsServlet")
public class CalsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CalsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    // 서블릿은 비지니스 처리 용도. 화면에 출력하는 것은 jsp
	
//	 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { 
//	  
//	 int num1 = Integer.parseInt(request.getParameter("num1")); int num2 =
//	 Integer.parseInt(request.getParameter("num2"));
//	 
//	 String name = "Hong"; int result = num1 + num2;
//	 
//	 request.setAttribute("result", result); request.setAttribute("name", name);
//	  
//	 // 1. Redirect : 기존 요청과 다른 새로운 요청 response.sendRedirect("result.jsp");
//	 
//	 // 2. Dispatcher : 기존 요청의 연장선
//	 
//	 RequestDispatcher re = request.getRequestDispatcher("/result.jsp"); 
//	 re.forward(request, response);
//	  
//	  }
    
    
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
	}

    
}
