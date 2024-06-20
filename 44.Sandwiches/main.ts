//45 Assignment
/*
sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.*/

function makeSandwich(...items:string[]){
     return `I want a Sandwich of ${items}`
};
let collection1 = makeSandwich("Lettuce "," Tomato"," Bacon");
let collection2 = makeSandwich("Turkey "," Swiss");
let collection3 = makeSandwich("Cheese "," Mustard"," Pickles");

console.log(collection1);
console.log(collection2);
console.log(collection3);

// Completed


