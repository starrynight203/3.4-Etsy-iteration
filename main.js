(function() {
  'use strict';


  var items = window.items;

// QUESTION ONE
// use map to creat an array of prices
  var priceList = items.map(function(item){
    return item.price
  });
  //console.log(priceList);
// use .reduce to sum prices
  var totalPrice = priceList.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });
  //console.log(priceList.length);
// use .length to find how many items are in the priceList array
  var average = totalPrice / priceList.length;
  console.log("The average price is $" + average.toFixed(2));

// QUESTION TWO












})();
