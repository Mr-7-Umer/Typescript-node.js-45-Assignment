// 45 Assignment
 
/* 
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */ 


let favPlaces : string[] = ["London","Dubai","Newyork","Maldives","Skardu","SaudiArab"];
console.log(favPlaces);

// Making a copy of Array
let copyOfArray = favPlaces.slice();
let sortedArray = copyOfArray.sort(); // This will print arry in Alphabetical order
console.log(sortedArray); 

// // printing original Arry
console.log(favPlaces);

// Reverse Array in Alphabetical order without changing original Array
// First we make a copy of original array
let copyOfArray2 = favPlaces.slice();
let reverseArray = copyOfArray2.reverse();
console.log(reverseArray);

// Printing original Array Again
console.log(favPlaces);

// Reversing the order of original Array

let reverseOriArray = favPlaces.reverse();
console.log(reverseOriArray);

// Reversing Again
let reverseOriArray2 = favPlaces.reverse();
console.log(reverseOriArray2); // Now it's back in it's original Form.

// sorting original Array
let sortOriArray = favPlaces.sort();
console.log(sortOriArray);

// reversing sorted Array
 let reverseSortArray = favPlaces.reverse();
 console.log(reverseSortArray); // Now it is change in reverse Alphabetical order
 
 // Completed
 
 









