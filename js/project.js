jQuery(document).ready(function($) {
	
	if($('#main-content').css("display") == "none"){
		$('#main-content').css("display", "block");
	}else{
		$('#main-content').css("display", "none");
	}

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();

});

$(window).on('load', function() {
	$('#loader').css("display", "none");
	$('#main-content').css("display", "block");

	window.sr = ScrollReveal();

	sr.reveal('.project_display_laptop', { duration: 800, opacity: 0, useDelay: 'always', origin: 'left', distance: '10%', scale: 1});
	sr.reveal('.project_display_laptop_r', { duration: 800, opacity: 0, useDelay: 'always', origin: 'right', distance: '10%', scale: 1});
	sr.reveal('.btn', { duration: 1000, opacity: 0, useDelay: 'always'});


});
