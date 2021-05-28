$(document).ready(function() {
	
	
	$('.next').click(function(){
		const imgselect = $('img.anh_1:visible');
		let img = parseInt(imgselect.attr('number'));
		let eqnumber = img-1 ;
		$('img.anh_1').eq(eqnumber).fadeIn();
		imgselect.fadeOut();
		})

	$('.prev').click(function(){
		const imgselect = $('img.anh_1:visible');
		let img = parseInt(imgselect.attr('number'));
		let eqnumber = img - 1;
		$('img.anh_1').eq(eqnumber).fadeIn();
		imgselect.fadeOut();
		})


	
	
	
	


})


