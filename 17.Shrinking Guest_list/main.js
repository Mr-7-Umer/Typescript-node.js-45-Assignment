"use strict";
// 45 Assignment
/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
let guestList = ["Hamzah Syed", "Daniyal", "Ameen Alam", "Muhammad Qasim", "Imran", "Ali"];
console.log("Table is not Available I can only invite 2 guest for Dinner.\n");
// Remove 4 last Guests and print message to them 
let guest1 = guestList.pop();
console.log(`Sorry Mr.${guest1} you are not invited for dinner.`);
let guest2 = guestList.pop();
console.log(`Sorry Mr.${guest2} you are not invited for dinner.`);
let guest3 = guestList.pop();
console.log(`Sorry Mr.${guest3} you are not invited for dinner.`);
let guest4 = guestList.pop();
console.log(`Sorry Mr.${guest4} you are not invited for dinner.\n`);
// Print message to Available guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Mr.${guestList[i]} you are still invited for Dinner.\n`);
}
// remove last 2 guests
guestList.pop();
guestList.pop();
console.log(guestList); // This will print empty List 
