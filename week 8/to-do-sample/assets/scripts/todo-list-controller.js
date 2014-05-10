/**
* @desc This thing controls the todos
* @param {HTMLElement} form
* @param {HTMLElement} list
* @constructor
*/
var ToDoController = function(form, list) {

	var self = this;

	this.form = form;

	this.list = list;

	this.todos = [];

	this.form.onsubmit = function(e) {
		e.preventDefault();
		var task = this.task.value;
		var date = this.due_date.value || new Date();
		var id = self.todos.length + 1;
		var todo = new ToDo(task, date, id);
		self.todos.push(todo);
		self.addToDoToList(todo);
	};

	this.addToDoToList = function(todo) {
		var template = todo.template();
		self.list.innerHTML += template.outerHTML;
		this.addEvents();
	};

	this.completeToDo = function(e) {
		// true or false
		if(e.target.checked) {
			e.target.parentElement.classList.add("finished");

		}
	};

	this.addEvents = function () {
		var inputs = document.getElementsByTagName("input");
		
		Array.prototype.slice.call(inputs)
			.forEach(function(input) {

				if (input.type == "checkbox") {
					input.onclick = self.completeToDo;
				};

			});

	}

};
















