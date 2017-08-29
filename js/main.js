jQuery(document).ready(function($) {
	$('#main-content').hide();
	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 100 ){
            $(".nav-card").css("visibility", "visible");
            $(".nav-card").css("opacity", "1");
        } else {
        	$(".nav-card").css("visibility", "hidden");
        	$(".nav-card").css("opacity", "0");
        	$(".nav-card").css("transition", "visibility .3s, opacity 0.3s ease-in;");
        }
	});

	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$(".scrollspy").scrollSpy();
});

$(window).on('load', function() {
	$('#loader').hide();
	$('#main-content').show();
});
