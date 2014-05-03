$(function() {

	// var bmw = new Car("BMW", "1 Series", 2013);
	// var ferrari = new Car("Ferrari", "Enzo", 2010);

	// addCarToList(bmw);
	// addCarToList(ferrari);

// });

// 	var cars = [
// 	new Car("BMW", "1 Series", 2013),
// 	new Car("Ferrari", "Enzo", 2010)
// ];

// $.each(cars, function(index, car) {
// 	addCarToList(car);
// 	});

$("#car-form").on("submit", function(event) {
	event.preventDefault();

	var make = $("#make").val(),
		model = $("#model").val(),
		year = $("#year").val();

	var car = new Car(make, model, year);

	addCarToList(car);

	});


});

var addCarToList = function(car) {
	$("#stock").append("<li>" + car.make +  " " + car.model + " " + car.year + "</li>");

};

var Car = function(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.beepHorn = function() {
		console.log(this.model + " beeped its horn!");

	};

}

















