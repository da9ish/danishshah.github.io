jQuery(document).ready(function($) {
	
	$('#main-content').css("display", "none");

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();

});

$(window).on('load', function() {
	$('#loader').css("display", "none");
	$('#main-content').css("display", "block");

	window.sr = ScrollReveal();

	sr.reveal('.display_lap_l', { duration: 800, opacity: 0, useDelay: 'always', origin: 'left', distance: '10%', scale: 1});
	sr.reveal('.display_lap_r', { duration: 800, opacity: 0, useDelay: 'always', origin: 'right', distance: '10%', scale: 1});
	sr.reveal('.display_mob', { duration: 800, opacity: 0, useDelay: 'always', origin: 'top', distance: '10%', scale: 1});
});
