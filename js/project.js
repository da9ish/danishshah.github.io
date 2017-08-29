jQuery(document).ready(function($) {
	
	$('#main-content').hide();

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();

});

$(window).on('load', function() {
	$('#loader').hide();
	$('#main-content').show();
});
