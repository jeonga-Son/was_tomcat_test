$(function(){
	$('div.label').click(function(){
		var pWidth = $('div.speech p').outerWidth();// 안쪽 너비까지 포함한 너비가 나옴.
		var divWidth = $('#switcher').outerWidth();
		
		var num = parseInt(pWidth) - parseInt(divWidth);
		
		$('#switcher')
			.fadeTo('fast', 0.5)
			.animate({marginLeft: num}, 'slow') 
			.fadeTo('fast', 1.0)
			.slideUP('slow', function(){
				$(this).css('background', 'red');
			})
			.slideDown('slow');
	});
});

// 2번째 p태그를 화면에서 숨김 eq() hide()
// a태그릉 클릭: slideUp + slideDown => slideToggle()
// read less => 클릭 => read more
// => text() : 텍스트 값을 추출하는 역할
// => text(값) : 텍스트 값을 변경

$(function(){
	$('div.speech p').eq(1).hide();
	$('a.more').click(function(){
		$('div.speech p').eq(1).slideToggle('show');
		
		var $link = $(this); // $link에서 달러표시는 jQuery 객체라는 뜻
		if ($link.text() == 'read more') {
			$link.text('read less');
		} else {
			$link.text('read more');
		}
	});
});