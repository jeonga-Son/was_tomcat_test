//step1
/*$(function(){
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});
});*/

//step2 : Large Print -> large, Narrow Column -> narrow
//removeClass('');  , Default -> 처음 상태
$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
});

//step3 : 클릭한 버튼만 selected 스탕일 적용되도록 하자.
/*$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
});*/

//step4 : selected 관련된 중복된 코드를 최적화 하자.
/*$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
	
	$('#switcher .button').on('click', function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
});*/

//step5 : 전체적으로 중복된 코드를 좀더 최적화 하자.
/*$(function(){	
	$('#switcher .button').on('click', function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}		
	});
});*/

//step6 : 이벤트 통합 함수 => 개별 이벤트 함수 변경
/*$(function(){	
	$('#switcher .button').click(function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}		
	});
});*/
















