function showPic(obj) {
	let source = obj.getAttribute("href");
	let placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	
	let newTitle = obj.getAttribute("title");
	let description = document.getElementById("description")
	
	if(description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = newTitle;
	}
}


function prepareGallery(){
	let imagegallery = document.getElementById("imagegallery"); // ul
	let links = imagegallery.getElementsByTagName("a"); // a들
	
	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e){ // 기본 이벤트를 취소하기 위해서는 이벤트 객체가 필요하다.
			e.preventDefault(); // 기본 이벤트를 취소
			showPic(this); // 이벤트 핸들러 안에서의 this는 이벤트 대상이다. => links[i]
		}, false);
	}
}


window.onload = prepareGallery;