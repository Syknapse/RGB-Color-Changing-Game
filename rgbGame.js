// number of squares (3) easy or (6) hard
var numSquares = 6;
// six square colors
var colors = [];
// the target color in h1 (variable with no value)
var pickedColor;
// select the squares 
var squares = document.querySelectorAll(".square");
// select the h1 target color
var colorDisplay = document.getElementById("colorDisplay");
// select the message (try again/correct display)
var messageDisplay = document.querySelector("#message");
// select h1 (to set background color)
var h1 = document.querySelector("h1");
// change colors/reset button
var resetButton = document.querySelector("#reset");
// select easy and hard buttons
var modeButtons = document.querySelectorAll(".mode");

//run intitial function on load
init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

//function for mode buttons easy/hard event listeners
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			//give clicked button "selected" class for highlight
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//toggle number of square between easy and hard modes
			//using a ternary operator:
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

// function for setting up the squares and correct/incorrect answer
function setupSquares(){
	// loop through the squares
	for(var i = 0; i < squares.length; i++){
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

}

//RESET function
function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//revert back to "change color" message after "play again"
	resetButton.textContent = "Change colors";
	//reset messageDisplay span to empty
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			// show all squares
			squares[i].style.display = "block";
			// give them the colors of the color array
			squares[i].style.backgroundColor = colors[i];
		} else {
			// when retrieving only 3 squares, hide the other 3
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// the reset and change color button
resetButton.addEventListener("click", function(){ 
	reset();
});

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