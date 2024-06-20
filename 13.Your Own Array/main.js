"use strict";
// 45 Assignment
/* 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let favTrans = ["Car", "Bike", "Bus", "Train", "Aeroplane"];
for (let i = 0; i < favTrans.length; i++) {
    console.log(`I would like to own a ${favTrans[i]}`);
}
// we can also use this method :
// favTrans.map((i)=>{
//     console.log(`I would like to own a ${i}`);
// })
