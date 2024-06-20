"use strict";
// 45 Assignment
/*
magicians: Make a array of magician's names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
let magiciansName = ["Abrar", "Afaq", "Isham", "Affan"];
function show_magicians() {
    for (let elements of magiciansName) {
        console.log(elements);
    }
}
show_magicians();
