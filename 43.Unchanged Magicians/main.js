"use strict";
// 45 Assignment
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
let magiciansName = ["Abrar", "Afaq", "Isham", "Affan"];
// Making a copy of Array
let magiciansNameCopy = [...magiciansName];
function show_magicians(greet) {
    let withGreeting = "";
    for (let elements of magiciansNameCopy) { // of extract elements
        withGreeting += `${greet} ${elements}\n`;
    }
    return withGreeting;
}
let myGreetings = show_magicians("Hello, ");
let makeArray = myGreetings.split('\n');
console.log(makeArray);
// printing original Array 
console.log(magiciansName);
