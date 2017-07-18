// six square colors
var colors = generateRandomColors(6);
// select the squares 
var squares = document.querySelectorAll(".square");
// the target color in h1
var pickedColor = pickColor();
// select the h1 target color
var colorDisplay = document.getElementById("colorDisplay");
// select the message (try again/correct display)
var messageDisplay = document.querySelector("#message");
// select h1 (to set background color)
var h1 = document.querySelector("h1");
// change colors/reset button
var resetButton = document.querySelector("#reset");


// the reset and change color button
resetButton.addEventListener("click", function(){ 
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

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
			resetButton.textContent = "Play Again"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
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

// function to randomly select a color from the colors array
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// function to generate random colors in the colors array
function generateRandomColors(num){
	//make an array
	var arr = []
	// add num random colors to array
	// repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

// function to get random color
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}