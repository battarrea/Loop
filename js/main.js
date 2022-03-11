$('document').ready(function(){
	$('.text-sale__btn').click(() => {
		$('html, body').animate({
			scrollTop: $('.models').offset().top
		}, 500);
	});
});