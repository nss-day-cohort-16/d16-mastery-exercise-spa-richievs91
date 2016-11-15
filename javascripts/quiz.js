  "use strict";

// Loop over the inventory and populate the page
function populatePage (inventory) {
  	//define the variables
  	let container = document.getElementById("container"); 

	let carDiv = '';
	
	for(var i = 0; i < inventory.length; i++) {
	
	let getInfo = inventory[i]; 
	
	if (i % 3 === 0) {
          carDiv += `<div class="row">`;
    }

	carDiv += 
	`<div class="col-md-3 carCard" id="col${i}">
	<h3>${getInfo.make}</h3>
	 <h2>${getInfo.model}</h2>
	 <h3>${getInfo.year}</h3>
	 <h2>${getInfo.price}</h2>
	 <h3 class="description">${getInfo.description}</h3>
	 </div>`;

	if ((i + 1) % 3 === 0) {
          carDiv += `</div>`;
	}
}

	container.innerHTML += carDiv;

    CarLot.activateEvents();

};

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
CarLot.loadInventory(populatePage);













































