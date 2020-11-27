$(document).ready(function(){
	
	//toggle button
	$('.btn').click(function(){
		$('.nav-links').slideToggle(3000);
		$('.btn').toggleClass('change');
	})
})