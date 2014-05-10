/**
* @param {string} task
* @param {date} date 
* @param {number} id 
*/
var ToDo = function(task, date, id) {

	this.task = task;

	this.date = date;

	this.id = id;

	this.template = function() {
		var list_item = document.createElement("li");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		list_item.innerHTML += checkbox.outerHTML + this.task;
		return list_item;
	};

};
