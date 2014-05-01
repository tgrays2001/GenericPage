$(document).ready(function() {
    $('nav li').mouseenter(function() {
			$(this).children('.submenu').slideToggle('fast');
		});
});