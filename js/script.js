$(document).ready(function(){

//header resize on scroll
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 125) {
	    $('.header').addClass('fixed');
	   }
	   else {
	    $('.header').removeClass('fixed');
	   }
	});

//slick image carousel plugin
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