$(document).ready(function() {
    $('nav li').mouseenter(function () {
			$(this).children('.submenu').slideToggle('fast');
			 /*$('nav li').mouseleave(function() {
			  $(this).children('.submenu').slideToggle('slow'); 
			 });*/
		});
});
var interval;
    var rotation = 5;
    var rotObj;
    
    function doRotation() {
        rotObj.rotate(rotation);
        rotation *= -1;
    }
    
$('.logo img').mouseenter(function() {
rotation = 3;
        rotObj = $(this);
        interval = setInterval(doRotation, 100);
});
    
    $('.logo img').mouseleave(function() {
        clearInterval(interval);
    });