"use strict";

var CarLot = (function () {
var inventory = [];

  return {
    //It receives the function created in quiz.js as an argument
    loadInventory: function (populatepagefromquiz) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", 'data/inventory.json');
      
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      populatepagefromquiz(inventory);

  });
  
    },
   
    getInventory: function () {
      return inventory;
    }
  };

})(CarLot || {});





























