$(function(){
// Variables:

// array of the 6 image sources to loop through



// Functions:

// function to change image baced on index

// length of the array? stop next button at end of images



//Set up an array of image paths for the carousel
var images = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg"]

// variable to hold the index position - index for 0- 5 sources

var i = 0;

// function to go back 

function previousImage(){
	i--;
	changeImage();
}

// function to skip 

function nextImage(){
	i++;
	changeImage();
}

//change image after button click
// using .attr, select the src, update it to images[i]
function changeImage() {
	if (i < 6) {
		$("img#image-to-vote-on").attr("src", images[i]);
	} else {
		

}



// Bind a click event to the next image btn & previous img btn, each one calls the relevant function
	$("#buttons-wrapper .btn[value='Skip']").on("click", nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click", previousImage);







});




