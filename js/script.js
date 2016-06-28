$(document).ready(function(){

	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 125) {
	    $('.header').addClass('fixed');
	   }
	   else {
	    $('.header').removeClass('fixed');
	   }
	});

	$('.single-item').slick({
    	 dots: true,
    	 infinite: true,
    	 speed: 900,
    	 fade: true,
    	 slidesToShow: 1,
    	 autoplay: true,
    	 autoplaySpeed: 2600
  	});

});