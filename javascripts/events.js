"use strict";
 
var CarLot = (function (oldCarLot) {
  //Define activateEvents
	oldCarLot.activateEvents = function() {
        //Make a single var that grabs all cards by class and puts them in an array
		var carCards = document.getElementsByClassName("carCard");
        //Define input bar from Bootstrap 
        var input = document.getElementById("input");
          //create a loop so that the handlers are applied to each card 
		for (var j = 0; j < carCards.length; j++) {
          //Call all functions to be applied to mouse click within this loop. Some of them will be defined in the borders file
			carCards[j].addEventListener("click", function() {
                    oldCarLot.removeBorder(carCards);
                    
                    CarLot.addBorder(this, "#4286f4");  
                    oldCarLot.clearInput();
                    oldCarLot.bind(this);
                 });		
		}
		
		oldCarLot.clearInput = function() {
			input.value = "";
		}
    
        oldCarLot.bind = function(element) {
            input.addEventListener("keyup", function () {
                if (element.classList.contains("isClicked")) {
                  element.querySelector(".description").innerHTML = input.value;
                }
                });
            }
        }
	return oldCarLot; 

})(CarLot || {});

 




















