// step1
$(function(){
	$('#letter-a a').click(function(){
		$('#dictionary').hide().load('a.html', function(){
			$(this).fadeIn();
		});
		return false; // 기본 이벤트 취소
	});
});

//step2
/*$(function(){
	$('#letter-b a').click(function(){
		// $. => 전역함수
		$.getJSON('b.json', function(data){ // data자체가 배열이 된다.
			$('#dictionary').empty(); // 안에있는 내용 모두 비우기
			
			// 결과값 : [{}, {}] => HTML
			$.each(data, function(index, item){
				var html = '<div class="entry">';
				html += '<h3 class="term">' + item.term  + '</h3>';
				html += '<div class="part">' + item.part + '</div>';
				html += '<div class="definition">' + item.definition + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html); 
			});
		});
		// callback 함수는 반드시 넣어줘야 한다.
		// 서버로 부터 오는 값이 json이기 때문에 html로 변환해줘야 한다.
	});
});
*/

//step2-1 : ajax()함수를 변환
$(function(){
	$('#letter-b a').click(function(){
		
		$('#dictionary').empty();
		
		$.ajax({
			url: 'b.json',
			type: 'post',
			dataType: 'json',
			success: function(data){
				$.each(data, function(index, item){
					var html = '<div class="entry">';
					html += '<h3 class="term">' + item.term  + '</h3>';
					html += '<div class="part">' + item.part + '</div>';
					html += '<div class="definition">' + item.definition + '</div>';
					html += '</div>';
					
					$('#dictionary').append(html); 
				});
			}
		});
		
		$('#dictionary').hide().fadeIn();
		
	});
		
});


//step3
$(function(){
	$('#letter-c a').click(function(){
		$('#dictionary').empty();
		$.getScript('c.js')
		$('#dictionary').hide().fadeIn();	
		return false;
	});
});

//step4
$(function(){
	$('#letter-d a').click(function(){
		$('#dictionary').empty();
		// xml => html
		$.get('d.xml', function(data){ // data 안에는 root element를 포함한 문서 전체가 들어와 있다.
			$(data).find('entry').each(function(index){
				$entry = $(this);
				
				var html = '<div class="entry">';
				html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
				html += '<div class="part">' + $entry.attr('part') + '</div>';
				html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html); 
			});
		});
		
		$('#dictionary').hide().fadeIn();
		
		return false;
	});
});

//step5
$(function(){
	$('#letter-e a').click(function(){
		$('#dictionary').empty();
		$.get('server3.jsp', {'term':$(this).text()}, function(data){
			$('#dictionary').text(data);
		});
		
		$('#dictionary').hide().fadeIn();
		
		return false;
	});
});

//step6
$(function(){
	$('#letter-f form').submit(function(){
		$.ajax({
			url: 'server3.jsp',
			type: 'post',
			data: $(this).serialize(),
			dataType: 'text',
			success: function(data){
				$('#dictionary').text(data); 
			}
		});
		
		$('#dictionary').hide().fadeIn();
		
		return false;
	});
});
