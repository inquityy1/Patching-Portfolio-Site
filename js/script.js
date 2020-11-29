$(document).ready(function(){
	
	//toggle button
	$('.btn').click(function(){
		$('.nav-links').slideToggle(500);
		$('.btn').toggleClass('change');
	})

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
})