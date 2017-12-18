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


//looping over offers.json file
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
		});	} 
});

var price = "";

for (var i = 0; i > offers.length; i++) {
	price += "<span class='plans__price'>" + offers[i].plans.price + "</span>";
}
$('#price1').HTML(price);
console.log(price);



