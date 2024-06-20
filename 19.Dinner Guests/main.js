"use strict";
// 45 Assignment
// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Hamzah Syed", "Daniyal", "Ameen Alam", "Muhammad Qasim", "Imran", "Ali"];
console.log(`I am inviting ${guestList.length} guests for dinner which are following:\n`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`${i + 1}.Mr.${guestList[i]}`);
}
;
