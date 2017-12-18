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
// var offers = [];
// console.log(offers);

// $.ajax({
// 	type : 'GET',
// 	dataType : 'json',
// 	url: '/assets/js/offers.json',
// 	success : function(data) {
// 		console.log('data', data); 
// 		$.each(data.offers, (x, obj) => {
// 			offers.push({
// 				a: obj.plans,
// 				b: obj.category
// 			}); 
// 		});	} 
// });

var $plansContainer = $('.js-plans-container');

var plansMarkup = ``;
// var offers; 

var basicChannels = `
<li>
	<div class="columns large-6">
		<img class="plans__showtime-logo" alt="ShowTime logo" src="assets/img/svg2.svg">
	</div>
</li>
<li>
	<div class="columns large-6">
		<p class="plans__TV--items">SHOWTIME® included for 2 years.</p>    
		<p class="plans__TV--reg-price">(reg. $15/mo.)<sup>1</sup></p>      
	</div><!--columns-->
</li>`;


var premiumChannels = `
<li>
	<div class="columns large-6">
		<img class="plans__showtime-logo" alt="ShowTime logo" src="assets/img/svg2.svg">
	</div>
</li>
<li>
	<div class="columns large-6">
		<p class="plans__TV--items">HBO included for 10 years.</p>    
		<p class="plans__TV--reg-price">(reg. $150/mo.)<sup>1</sup></p>      
	</div><!--columns-->
</li>`;


var planBuilder = (plan) => {

	var tvSection = ``;

	if(plan.tv) {
		tvSection = `<ul>
			<li class="plans__TV--options">Pick a package that fits your lifestyle.</li>
			<li class="plans__TV--channel-lineup"><a class="link" href="#">View channel lineup</a></li>
			<div class="rows">${plan.tv.premiumChannels ? premiumChannels : basicChannels}</div>
			<li class="plans__TV--options">Multi-room DVR Enhanced  Service free for 2 years.<sup>1</sup></li>
		</ul>`;
	}

	return `<div class="plans__single-plan--section  columns large-3 medium-6">
	<h2 class="plans__single-plan--heading">${plan.description}</h2>
	<span class="plans__price">${plan.price}</span>
	<p class="plans__t-and-cs">${plan.legal}</p>
	<h3 class="plans__internet-speed">${plan.internet.label}</h3>
	<ul>
	<li class="plans__internet-speed--items">${plan.internet.sublabel}</li>
	<li class="plans__internet-speed--items  plans__internet-speed--margin-bottom">${plan.internet.detail}</li>                        
	</ul>
	<h3 class="plans__TV">Custom</h3>
	${tvSection}
	<div class="plans__home-phone">
		<h3 class="plans__home-phone--heading">Home Phone</h3>
		<p class="plans__home-phone--item">Unlimited nationwide calling</p>
	</div><!--plans__home-phone-->
	<p class="plans__price-guarantee">2-year price guarantee</p>
</div>`;
};

var $tabs = $('.js-tabs');
var tabControls = ``;

$.ajax({
	type : 'GET',
	dataType : 'json',
	url: '/assets/js/offers.json',
	success : function(data) {
		console.log('data', data); 

		$.each(data.offers, (index, offer) => {
			console.log('offer category: ', offer.category);
			console.log('offer plans: ', offer.plans);
			tabControls += `<li><a class="packages__options" href="#">${offer.category}</a></li>`;
			$.each(offer.plans, (indexPlans, plan) => { 

				plansMarkup += planBuilder(plan);

			});

			$plansContainer.html(plansMarkup);
		});

		$tabs.html(tabControls);

		// $.each(data.offers, (x, obj) => {
		// 	offers.push({
		// 		a: obj.plans,
		// 		b: obj.category
		// 	}); 
		// });	} 
	}
});

var price = "";

for (var i = 0; i > offers.length; i++) {
	price += "<span class='plans__price'>" + offers[i].plans.price + "</span>";
}

$('#price1').HTML(price);
console.log(price);



