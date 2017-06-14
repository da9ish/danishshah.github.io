$(document).ready(function(){
	// Activate the side menu 
	$(".button-collapse").sideNav();
});

var options = [{
	selector: '.about', offset: 400, callback: function() {
		changeNavbartoBlack();
    } },
    {
	selector: '.landing_div', offset: 100, callback: function() {
		changeNavbartoTransparent();
    }
    }];

Materialize.scrollFire(options);

function changeNavbartoBlack(){
	var nav = document.getElementsByTagName('nav')[0];
	var logo = document.getElementsByClassName('logo_nav')[0];
	var title = document.getElementsByClassName('brand_logo')[0];

	nav.className = "grey darken-4 z-depth-2 ";
	logo.setAttribute('src', 'images/logo_nav_white.png');
	title.className += " text-lighten-5 ";


}

function changeNavbartoTransparent(){
	var nav = document.getElementsByTagName('nav')[0];
	var logo = document.getElementsByClassName('logo_nav')[0];
	var title = document.getElementsByClassName('brand_logo')[0];
	nav.className = "transparent z-depth-0 ";
	logo.setAttribute('src', 'images/logo_nav.png');

}