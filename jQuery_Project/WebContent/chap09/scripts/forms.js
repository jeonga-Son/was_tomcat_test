$(function(){
	$('.quantity input').change(function(){
		var subtotal = 0;
		var totalQuantity = 0;
		var tax = 0;
		var shipping = 0;
		var total = 0;
		
		$('table tbody tr').each(function(index){
			var price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/, ''));
			price = isNaN(price) ? 0 : price;
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			var cost = price * quantity;
			$(this).find('.cost').text('$' + cost.toFixed(2)); 
			
			subtotal += cost;
			totalQuantity += quantity;
			tax = (subtotal * 0.06).toFixed(2);
			shipping = (totalQuantity * 2).toFixed(2);
			total = subtotal + tax + shipping;
		});
		
		$('.subtotal .cost').text('$' + subtotal.toFixed(2));
		$('.shipping .quantity').text(totalQuantity);s
		$('.shipping .cost').text('$' + shipping);
		$('.tax .cost').text('$' + tax);
		$('.total .cost').text('$' + total.toFixed(2));
	});
	
});