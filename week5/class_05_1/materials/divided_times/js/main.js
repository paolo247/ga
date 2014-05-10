$(function(){

	$(".nav-item").on("click", function(event) {
		event.preventDefault();
		$(".nav-item, .nav-content").removeClass("current");
		$("this").addClass("current");
	});

	$("#politics").on("click", function() {
		$("#politics-content").addClass("current");
	});


	$("#international").on("click", function() {
		$("#international-content").addClass("current");
	});
			

	$("#business").on("click", function() {
		$("#business-content").addClass("current");
	});

});