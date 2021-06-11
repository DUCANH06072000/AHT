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
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
	$('.nen-mo').click(function(event) {
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
});




