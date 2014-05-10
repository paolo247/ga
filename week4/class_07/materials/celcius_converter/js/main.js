window.onload = function() {
  
  	var celsius = document.getElementById("celsius"),
		result = document.getElementById("result"),
		button = document.getElementById("submit");

		button.onclick = function () {
			var sum = (9/5)*celsius.value + 32	
			sum = sum.toFixed(2);
			result.innerHTML = sum;
		}
}