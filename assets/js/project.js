// Initialize Foundation
jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
});

// Initialize sliders
jQuery( function( $ ) {

	$( '.js-slider' ).slick({
		dots: true,  
		infinite: false,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 2,
		adaptiveHeight: false
	});

});