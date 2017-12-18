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


//
var offers = [];
console.log(offers);

$.ajax({
	type : 'GET',
	dataType : 'json',
	url: '/assets/js/offers.json',
	success : function(data) {
		console.log(data); 
		$.each(data.offers, (x, obj) => {
			offers.push({
				a: obj.plans,
				b: obj.category
			}); 
		});
		// $('#leader').tmpl(topics).appendTo('#top3');
	} 
});

// var prices = $.each(offers[0], (i, obj) => {
// 	return ('<span>' + obj.plans.price + '</span>')
// });

// var prices = $.each(offers, (i, obj) => {
// 	return obj.plans.price.price;
// });

var prices = $.each(offers, (obj, i) => {
	return obj[i].a;
});

console.log(prices);



