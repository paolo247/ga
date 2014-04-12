// select the entry field - store it in a variable (going to manipulate it later)

// listen to submit of form

// fire a call to a function - ass new entry

// define the new entry function
// add a new row to the table, innerHTML of entries id

// update the total


var d = document 
var total = 0

var entryField = d.getElementById("newEntry");

d.getElementById("entry").onsubmit = 
	addNewEntry;

function addNewEntry() {
	var entry = parseFloat(entryField.value);
	total += entry;

	// update total


	d.getElementById("total").innerHTML = convertCurrency(total);
	
	var entryValue = convertCurrency(entryField.value);
	var entryRow = "<tr><td></td><td>" + entryValue + "</td></tr>";

	// update row 
	d.getElementById("entries").innerHTML += entryRow;

	clearInput();

// prevent the default behaviour of a form submission. Which is to send the data elsewhere & refresh the page

	return false; 
}

function convertCurrency(entryValue){
	var currency = parseFloat(entryValue);
	currency = currency.toFixed(2);
	currency = "£" + currency;

	return currency;
}

// d.getElementById("total").onclick =
// 	sum;

// function sum() {
// 	var sum = entries.value;
// }


var clearInput = function(){
	entryField.value = '';
}

// d.getElementById("total").onclick =
// 	sum;

// function sum() {
// 	var sum = entries.value	
// }

	
