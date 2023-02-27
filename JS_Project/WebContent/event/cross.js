var cross = {};
cross.Event = {}; //cross.Event가 하나의 고유한 이름이 되는 것.

// 표준 브라우저에도 돌아가고, 기존의 구형 익스플로어에서도 돌아가도록 구현.
// 크로스 브라우징
cross.Event.addListner = function(element, name, handler, capture){
	capture = capture | false;
	
	//표준 브라우저는 addEventListener를 알고있다.
	
	if(element.addEventListener) { //표준브라우저
		element.addEventListener(name, handler, capture);
	} else{ //구현IE
		element.attachEvent('on' + name, handler); //capture 지원 x
	}
};

// 자식에서 부모르 흘러가기 때문에 자식에서 처리해야됨.
cross.Event.stopBubble = function(event) {
	if(event.stopPropagation){ // 표준 브라우저일 때
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}
}