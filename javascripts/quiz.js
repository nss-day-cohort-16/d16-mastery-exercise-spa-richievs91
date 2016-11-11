 "use strict";

  // Loop over the inventory and populate the page
function populatePage (inventory) {
	inventory.forEach(function(currentvalue, index) {
		var newDiv = document.createElement("div")
		var output = document.getElementById("container");
		var cars = `<div id="car-${index}" class="col-sm-4"><br>
					${currentvalue.make}<br>
					${currentvalue.model}<br>${currentvalue.year}<br>
					${currentvalue.price}<br>${currentvalue.description}<br>
					</div>`
		newDiv.innerHTML = cars;
		output.appendChild(newDiv);				
		

  // Now that the DOM is loaded, establish all the event listeners needed
 
  // document.getElementById(`car-${index}`).addEventListener("click", function (){
  // 	document.getElementById(`car-${index}`).classList.toggle("border");

});

};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);


// console.log("CarLot", CarLot);











































