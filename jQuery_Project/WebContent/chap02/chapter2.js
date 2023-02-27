$(function(){
	$('#selected-plays > li').addClass('horizontal');
	$('li:not(.horizontal)').addClass('sub-level');
	$('a[href $= pdf]').addClass('pdflink');
	$('a[href ^= mailto]').addClass('mailto');
/*	$('a[href *= henry]:not(.mailto)').addClass('henrylink'); //포함하는 관계  //select(선택자)**/
	$('a[href *= henry]').not('.mailto').addClass('henrylink'); // 함수는 팩토리함수 밖에서 사용하는 것.
	
//	odd는 우리가 알기로는 홀수인데 실제로는 짝수로 보임
//	$('tr:odd').addClass('alt'); // 짝수번째
//	$('tr:nth-child(odd)').addClass('alt'); //홀수번째
	$('tr').filter(':odd').addClass('alt'); // 짝수번 째 (짝수번 째만 필터링하여 css 적용)

//	$('td:contains(Henry)').addClass('highlight');
//	$('td:contains(Henry)').nextAll().addClass('highlight'); // 오른쪽 형제들에게 스타일이 옮겨짐
//	$('td:contains(Henry)').nextAll().andSelf().addClass('highlight'); // andSelf()로 집합을 포함한다. (이거 안하면 전 집합은 사라짐.)
//	$('td:contains(Henry)').parent().find('td').addClass('highlight'); // 집합이 부모로 가서 그 안에 있는 부모에 있는 모든 자식(td)에게 적용

	// end()는 뒤의 집합으로 돌아가기
	$('td:contains(Henry)').parent().find('td:eq(0)').addClass('highlight')
	.end().find('td:eq(1)').addClass('highlight');
});