var topContainer = document.querySelector(".topContainer");
var colorDisplay = document.querySelector(".colorDisplay");
var newGameBtn = document.querySelector(".newColor");
var message = document.querySelector(".messageDisplay");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");
var botContainer =document.querySelector(".botContainer");
var squares = document.querySelectorAll(".square");
var colors = [];
var numOfSquares;
var pickedColor;

  //Page start
	reset();

  //buttons setup
	easyBtn.addEventListener("click", function(){
		hardBtn.classList.remove("selected");
		this.classList.add("selected");
		reset();	
	})

	hardBtn.addEventListener("click", function(){
		easyBtn.classList.remove("selected");
		this.classList.add("selected");
		reset();
	})

	newGameBtn.addEventListener("click", function(){
			reset();
	})

  //setup squares and its color
	function setupSquares(){

		  if(hardBtn.classList.contains("selected")){
		  	numOfSquares = 6
		  } else {
		  	numOfSquares = 3;
		  }

			function colorForSquare(numOfSquares){
				for(var i = 0; i < numOfSquares; i++){
					squares[i].style.backgroundColor = randomColor();
					colors.push(squares[i].style.backgroundColor);
					//click on the square
					squares[i].addEventListener("click", function(){
						if(this.style.backgroundColor===pickedColor){
							newGameBtn.textContent = "Play Again?";
							message.textContent = "Correct";
							topContainer.style.backgroundColor = pickedColor;
							changeColor();
							console.log("right");
						} else{
							  message.textContent = "Try Again";
							 this.style.backgroundColor = "#232323";
						}
					})
				}
			}
			colorForSquare(numOfSquares);
    }

  //show all and Change Color
	function changeColor(){
		for(var i = 0; i < colors.length; i++){
			squares[i].classList.remove("hide");
			squares[i].style.backgroundColor = pickedColor;
		}
	}

  //pick a color
  	function pickColor(){
  	  pickedColor = colors[Math.floor(Math.random()*numOfSquares)];   	
  	 }

  //reset colors
  	function resetColor(){
  	 colors = [];
  	}

  // random color 
	function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	}


 function reset(){
 	
 	resetColor();
 	setupSquares();
 	pickColor();
 	
 	//hide the addition squares in easy mode
 	for(var i = 0; i < squares.length; i++){
 		if (!colors[i]){

 			squares[i].style.backgroundColor = "#232323";
 		}
 	}
 	topContainer.style.backgroundColor = "steelblue";
 	colorDisplay.textContent = pickedColor;
 	newGameBtn.textContent = "new color";
 	message.textContent = " ";
 }


