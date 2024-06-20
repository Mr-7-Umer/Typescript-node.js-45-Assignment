// 45 Assignment 
/* 

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list.
  • Print a new set of invitation messages, one for each person in your list. */

  let guestList: string[] = [
    "Hamzah Syed",
    "Zia Khan",
    "Ameen Alam",
    "Muhammad Qasim",
  ];
  guestList[1] = "Daniyal";

  // Adding 3 more guests
  // this will print new guest in beginning
  guestList.unshift("Imran");
  
// this will print guest in middle
guestList.splice(2,0,"Ali");

// this will print guest at end
guestList.push("Sifwan");

// 3 guests are added
console.log(guestList.join(" , \n"));

console.log("We found a bigger dinner Table so, we decided to invite 3 more guests on dinner : \n\n")

console.log(" updated list : \n");

for(let i=0 ; i<guestList.length ; i++){
     console.log(`Mr.${guestList[i]}, I would like to invite you on dinner at Saturday.\n`);
     
}
  
