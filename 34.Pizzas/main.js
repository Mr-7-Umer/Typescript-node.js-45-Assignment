"use strict";
// 45 Assignment
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
let Favpizza = ["Malai Tikka pizza", "Pepperoni pizza", "Afghani pizza\n"];
for (let i = 0; i < Favpizza.length; i++) {
    console.log(Favpizza[i]);
}
for (let i = 0; i < Favpizza.length; i++) {
    console.log(`I really like to eat ${Favpizza[i]}.`);
}
console.log("I really love Pizzas because it's comes in a variety of flavors and also we can add some toppings like vegetables,cheese and souces.\n");
