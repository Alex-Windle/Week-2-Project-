// 1. calculate average price
// access "price" key
// 			add prices 
// 			divide prices by number of items
// 			return average price in USD

var avgPrice = items.reduce(function(totalPrice, currentProduct){
	 var sum = totalPrice + currentProduct.price;
	 console.log(sum);
	return sum;
},0);

var avg = avgPrice/items.length;

var d = document.getElementById("d");
var a = avg.toFixed(2);
console.log('d:', d);
d.innerHTML = avg.toFixed(2);

console.log('Average price of items------->', avg.toFixed(2));


// 2. get an array of items costing between $14-18 USD
// look at all the item prices 
// 			determine which ones are between $14-18
// 			keep those meeting the criteria in the array
// 			what kind of array method are you using? arr.filter();

var finalList = items.filter(function(currentItem){
	
	return currentItem.price > 14 && currentItem.price < 18;

}); 

console.log('Items list----->', finalList);

// 3. Which item has GBP currency code? Display name & price. 
// "items" is an array of objects. each object has a property "currency_code" with value "USD" or "GBP".
// 			I want to target each object's property, "currency_code"
// 			If the currency value = "GBP", then return the item to the array.
// 			Use .filter to "filter out" all items that match GBP

var itemsInGBP = items.filter(function(currentItem){

	return currentItem.currency_code === "GBP";

});

console.log('Items in GBP list-------->', itemsInGBP);

// 4. Display all items made of wood. 
// I want to target each object's property, "materials".
//         Then, target the array inside "materials". 
//         Then, search each array index for value "wood". 
// 			use the .filter method on the array items to filter out all items with value wood. 

var woodItems = items.filter(function(currentItem){

	return currentItem.materials.indexOf('wood') >= 0;

});

console.log('Items made of wood------->', woodItems);

// 5. which items are made of 8+ materials? Display NAME, # OF ITEMS, and the ITEMS ITS MADE OF
// I want to target each object's property, "materials". 
// 			Then, target the array inside "materials"
//			Count the number of items in the array using arr.length
//			Return items that have an arr.length >= 8

var items8Materials = items.filter(function(currentItem){

	return currentItem.materials.length >= 8;

});

console.log('Items with 8+ materials------->', items8Materials);

// 6. how many items are made by their sellers? 
// I want to target each object's property, "who_made"
//			(possible values: "someone_else" or "i_did")
//			Then, return the items that have a value of "i_did"

var itemsBySeller = items.filter(function(currentItem){
	
	return currentItem.who_made === "i_did";

});

console.log('Items made by seller--------->', itemsBySeller);
























