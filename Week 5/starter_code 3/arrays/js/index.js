$(function() {

	var myArr = ["Hello", , 54.3, true];

	console.log(myArr);

	console.log(myArr[0]);
	console.log(myArr[1]);

	myArr[1] = "Stuff";

	console.log(myArr[1]);

	var fruits = ["Apples", "Oranges", "Pears"];

	myArr = fruits;

	console.log(myArr[1]);

	// Return number of items in array - .length

	console.log(myArr.length);

	//

	myArr.push("Strawberries");
	console.log(myArr);

	myArr.pop();
	console.log(myArr);

	myArr.splice(2, 0, "Mango");

	console.log(myArr);

	// Attributes

	var className = $( "h1" ).attr("class");
	console.log(className);

	className = $( "h1" ).attr( "class", "new-heading");

	// forEach loops

	var names = ["Daniel", "James", "CJ"];

	names.forEach(function(element, index) {
		console.log(element, index);
	});


   
});




















