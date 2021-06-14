	// $('.next').click(function(){
	// 	const imgselect = $('img.anh_1:visible');
	// 	let img = parseInt(imgselect.attr('number'));
	// 	let eqnumber = img-1 ;
	// 	$('img.anh_1').eq(eqnumber).fadeIn();
	// 	imgselect.fadeOut();
	// 	})

	// $('.prev').click(function(){
	// 	const imgselect = $('img.anh_1:visible');
	// 	let img = parseInt(imgselect.attr('number'));
	// 	let eqnumber = img - 1;
	// 	$('img.anh_1').eq(eqnumber).fadeIn();
	// 	imgselect.fadeOut();
	// 	})

	$(document).ready(function() {
	$('.btn').click(function(event) {
		$('.hop-thoai').addClass('hienra');
		$('.nen_1').addClass('hienra');
	});
	$('.btn-close').click(function(event) {
		$('.hop-thoai').removeClass('hienra');
		$('.nen_1').removeClass('hienra');
	});


	$('.btn_giohang').click(function(event) {
		$('.giohang').addClass('hienra_1');


	});
	$('.exit').click(function(event) {
		$('.giohang').removeClass('hienra_1');


	});
	
});




