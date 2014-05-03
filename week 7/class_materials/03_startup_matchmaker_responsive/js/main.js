$(document).ready(function(){

	// console.log("Hey!");
// Listen to click of #trigger
	$("#trigger").on("click", function(){
		$("nav ul").toggleClass("slideDown");
	});

});