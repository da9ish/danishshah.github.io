jQuery(document).ready(function($) {
	
	$('#main-content').hide();

	var $grid = $('.grid').masonry({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		// use element for option
		columnWidth: '.grid-sizer',
		percentPosition: true,
		resize: true
	})
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});  

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();
});

$(window).on('load', function() {
	// $('#loader').hide();
	// $('#main-content').show();
});
