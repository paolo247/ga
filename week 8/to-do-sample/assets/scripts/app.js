var app = {};

(function() {

	var form = document.getElementById("toDoForm");

	var list = document.getElementById("toDoList");

	app.toDoController = new ToDoController(form, list);

})();