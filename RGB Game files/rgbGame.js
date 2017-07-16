// six square colors
var colors = [
	"rgb(255, 0, 0)", 
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

// select the squares 
var squares = document.querySelectorAll(".square");
// the target color in h1
var pickedColor = colors[3];
// select ^ the h1 target color
var colorDisplay = document.getElementById("colorDisplay");
// select the message (try again/correct display)
var messageDisplay = document.querySelector("#message");

// update color display to say the picked color
colorDisplay.textContent = pickedColor;

// loop through the squares
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct! Well Done";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// function to change all the squares to the correct color
function changeColors(color){
	// loop through all the squares
	for(var i = 0; i < squares.length; i++){
	// change each color to match given color
	squares[i].style.backgroundColor = color;
	}
	
}