$('document').ready(function(){
	$('.text-sale__btn').click(function(){
		$('html, body').animate({
			scrollTop: $('.models').offset().top
		}, 500);
	});
});
