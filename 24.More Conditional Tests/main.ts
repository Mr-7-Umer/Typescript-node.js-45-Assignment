// 45 Assignment

/* 
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/ 


//equality and inequality
let myName = "Umer";
console.log(myName == "Umer"); // true
console.log(myName !== "umer"); // true

//Numerics
let myNum = 7;
console.log(myNum == 7); // true
console.log(myNum !== 7); // false
console.log(myNum < 5); // false
console.log(myNum > 10); // false
console.log(myNum <= 7);// true
console.log(myNum >= 4); // true

// "and" and "or"

let num1 = 10;
let num2 = 7;

console.log(num1 > 9 && num2 < 5); // false

console.log(num1 > 9 || num2 < 5); // true


// Array
let myArray = [7,9,"Umer"];
let myString = "Ali";

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false













