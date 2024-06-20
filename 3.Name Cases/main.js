"use strict";
// 45 Assignment
/* 3.Name Cases: Store a person’s name in a variable, and
 then print that person’s name in lowercase, uppercase, and titlecase.*/
const personName = "Umer";
// lowerCase
console.log(personName.toLowerCase());
// upperCase
console.log(personName.toUpperCase());
// titleCase
let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);
