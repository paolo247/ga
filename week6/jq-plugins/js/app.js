$(document).ready(function(){

	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});

	$("body").fitVids();

	$('.flexslider').flexslider({
    	animation: "slide"
    });

    $('.classysocial').ClassySocial();

});