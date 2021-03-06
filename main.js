(function() {
  'use strict';


  var items = window.items;

// QUESTION ONE
// use map to create an array of prices
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
// use .filter to find items with price between 14 & 18
var cheapItems = items.filter(function(item){
  if (item.price > 14.00 && item.price < 18.00 ){
    return true;
  } else {
    return false;
  }
});
console.log("Items that cost between $14.00 USD and $18.00 USD:");
console.log(cheapItems);

// QUESTION THREE
var singleItem = items.filter(function(item){
  if (item.currency_code == 'GBP'){
    return true;
  } else {
    return false;
  }
});
console.log(singleItem[0].title + 'costs £' + singleItem[0].price);

// NUMBER FOUR

items.forEach(function(item){
  if (item.materials.indexOf('wood') >= 0){
    console.log(item.title + ' is made of wood.');
  }
});

// NUMBER FIVE
// gives you all the items that meet the criteria
items.filter(function(item){
// finding items that have 8 or more materials
  if (item.materials.length >= 8){
    // for items that have 8 or more materials you are console logging the title & length
    console.log(item.title + ' has '+ item.materials.length + ' materials:');
    // for each item in the materials array you console logging
    item.materials.forEach(function(i){
    console.log(i);
    })
  }
});


// \n starts a new line

// NUMBER SIX
// maybe use a filter
 var handMadeItems = items.filter(function(item){
  if (item.who_made == 'i_did'){
    return true;
  } else {
    return false;
  }
});
console.log(handMadeItems.length + ' were made by their sellers');






})();
