function colorChanger(element, bgColor, txtColor) {
    element.style.backgroundColor = bgColor;
    element.style.color = txtColor;
}



window.onload = function() {

  var body = document.getElementById('background');
  var greyButton = document.getElementById('grey');
  var blueButton = document.getElementById('blue');
  var yellowButton = document.getElementById('yellow');

  greyButton.onclick = function() {
  colorChanger(body, "grey", "white")
  }

  blueButton.onclick = function() {
  colorChanger(body, "blue", 'white';
  }

  yellowButton.onclick = function() {
  colorChanger(body, "yellow", 'black';
  }

}
