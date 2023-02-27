//step1
/*$(function(){
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});
});*/


//step2 : Large Print -> large, Narrow Column -> narrow
//removeClass('');  , Default -> 처음 상태
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
});*/


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

//step7 : hover 이벤트 주입
$(function(){
	$('#switcher .button').hover(function(){
		$(this).addClass('hover');	
	}, function(){
		$(this).removeClass('hover');
	});
});

//step8: <h3>스타일 변환기</h3> 클릭했을 때 => 버튼 3개가 화면에서 사라지게 하자.
/*$(function(){
	$('#switcher h3').click(function(){
		$('#switcher .button').toggleClass('hidden'); //toggle클래스와 remove 클래스를 합쳐놓은 것
	});
	
	$('#switcher .button').click(function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}
	});
});*/

// step 9: 이벤트 버블링을 방지시켜보자
/*$(function(){
	$('#switcher').click(function(){
		$('#switcher .button').toggleClass('hidden'); //toggle클래스와 remove 클래스를 합쳐놓은 것
	});
	
	$('#switcher .button').click(function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}
	});
});*/


// step 10
$(function(){
	// name스페이스를 달 수 있다.
	$('#switcher h3').on('click.kosa', function(){
		$('#switcher .button').toggleClass('hidden'); //toggle클래스와 remove 클래스를 합쳐놓은 것
	});
	
/*	$('#switcher').on('click.metanet', function(){
		alert('다른 이벤트 내용');
	});*/
	
	$('#switcher .button').click(function(event){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large'){
			$('body').removeClass('narrow').addClass('large');
		} else if(this.id == 'switcher-narrow'){
			$('body').removeClass('large').addClass('narrow');
		}
		event.stopPropagation();
	});
	
	// 두 집합을 하나로 만든다.
	$('#switcher-large, #switcher-narrow').click(function(){
		$('switcher').off('click.kosa');
	});
	
	$('switcher').trigger('click.kosa'); // 해당하는 이벤트를 자동으로 발생시킴
	 /*$('#switcher).click(); */// 개별적으로 click이벤트 발생되도록 해도 됨. 
});
