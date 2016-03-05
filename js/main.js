// 1. calculate average price
// 			access "price" key
// 			add prices 
// 			divide prices by number of items
// 			return average price in USD

var avgPrice = items.reduce(function(totalPrice, currentProduct){
	 var sum = totalPrice + currentProduct.price;
	 // console.log(sum);
	return sum;
},0);
// 			var avg = avgPrice/items.length;
// 			var a = avg.toFixed(2);

// 			var d = document.getElementById("answerOne");
// 			var a = avg.toFixed(2);
// 			console.log('d:', d);
// 			d.innerHTML = avg.toFixed(2);

var avg = avgPrice/items.length;
var avgFinal = avg.toFixed(2);

var a = document.getElementById("answerOne");
// 			console.log('Answer One:', a);
a.innerHTML = "The average price is $" + avgFinal + "."; 

console.log('1. Average price of items------->', avg.toFixed(2));


// 2. get an array of items costing between $14-18 USD
// 			look at all the item prices 
// 			determine which ones are between $14-18
// 			keep those meeting the criteria in the array
// 			what kind of array method are you using? arr.filter();

var finalList = items.filter(function(currentItem){
	
	return currentItem.price > 14 && currentItem.price < 18;

}); 

//			goals: show results in b.innerHTML= ???
//				display the name of product
//				target property "title"
//			strategy: target finalList array
//				target one object at a time
//				target object property "title": value	
//				*create a new array that shows the value*
//				*use .map to transform the finalList arr.
var fullNameList = finalList.map(function(currentObject){
	return currentObject.title;
});
			// var fullNameListBreaks = fullNameList.split(',');
// 				console.log(fullNameList);

//				*problem: line breaks btw items*
//				fullNameList arr. needs line breaks
//					*try .split method on "," ? 
//					*(NOOOPE. use .split on objs, not arrs)
//				call each object in the array with </br>
//				create a new var for display list
//				use .forEach function?
//				use .concat() method?
//				use .splice() method: removes or adds elements
//				use .join() method? No.
//				use arr.toString method?
//				use text nodes?
var b = document.getElementById("answerTwo");
b.innerHTML = fullNameList.join("\n");

// 3. Which item has GBP currency code? Display name & price. 
// "items" is an array of objects. each object has a property "currency_code" with value "USD" or "GBP".
// 			I want to target each object's property, "currency_code"
// 			If the currency value = "GBP", then return the item to the array.
// 			Use .filter to "filter out" all items that match GBP

var itemsInGBP = items.filter(function(currentItem){

	return currentItem.currency_code === "GBP";

});

var finalStatement = itemsInGBP.map(function(currentThing){
	return currentThing.title + " costs &pound" + currentThing.price + ".";
});

// console.log('3. Items in GBP list-------->', finalStatement);

var d = document.getElementById("answerThree");
d.innerHTML = finalStatement;



















// 4. Display all items made of wood. 
// I want to target each object's property, "materials".
//         Then, target the array inside "materials". 
//         Then, search each array index for value "wood". 
// 			use the .filter method on the array items to filter out all items with value wood. 

var woodItems = items.filter(function(currentItem){

	return currentItem.materials.indexOf('wood') >= 0;

});

// console.log('4. Items made of wood------->', woodItems);
//Display .title + "is made of wood."
var finalDisplay = woodItems.map(function(currentItem){
	return currentItem.title + " is made of wood.";
});

var e = document.getElementById('answerFour');
e.innerHTML = finalDisplay;

// 5. which items are made of 8+ materials? Display NAME, # OF ITEMS, and the ITEMS ITS MADE OF
// I want to target each object's property, "materials". 
// 			Then, target the array inside "materials"
//			Count the number of items in the array using arr.length
//			Return items that have an arr.length >= 8

var items8Materials = items.filter(function(currentItem){

	return currentItem.materials.length >= 8;

});

// Create new var--> materials list
// Display message
var finalDisplayMessage = items8Materials.map(function(currentItem){
	return currentItem.title + " has " + currentItem.materials.length + " materials:" + currentItem.materials.toString();
});

console.log('5. Items with 8+ materials------->', items8Materials);

var f = document.getElementById('answerFive');
f.innerHTML = finalDisplayMessage;

// 6. how many items are made by their sellers? 
// I want to target each object's property, "who_made"
//			(possible values: "someone_else" or "i_did")
//			Then, return the items that have a value of "i_did"

var itemsBySeller = items.filter(function(currentItem){
	
	return currentItem.who_made === "i_did";

});

console.log('6. Items made by seller--------->', itemsBySeller);

var messageToDisplay = itemsBySeller.length + " were made by their sellers.";

var g = document.getElementById('answerSix');
g.innerHTML = messageToDisplay;






















