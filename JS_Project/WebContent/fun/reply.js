let replyService = (function(){
	function create(){
		console.log('create');
	}
	
	function update(){
		console.log('update');
	}
	
	function getList(){
		let data = "결과값";
	}
	
	// 포멧은 니가가져와
	function getList(param, callback){
		let data = "결과값";
		callback(data);
	}
	
	return {
		create: create,
		update: update,
		getList: getList
	};
})();


// 중괄호는 객체, 대괄호는 배열