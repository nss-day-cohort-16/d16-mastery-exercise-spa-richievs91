"use strict";

var CarLot = (function () {
var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "data/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(this.responseText).cars;
      	callback(inventory);
      	// console.log(inventory);
      });
    },
    getInventory: function() {
    	return inventory;
    }
  };

})();


// console.log("CarLot", CarLot);





























