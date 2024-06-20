"use strict";
// 45 Assignment
/*
t-shirt: Write a function called make_shirt()
 that accepts a size and the text of a message that should be printed on the shirt.
  The function should print a sentence summarizing the size of the shirt and the message printed on it.
 Call the function.
*/
function make_shirt(size, label) {
    return `My shirt size is ${size} and label is ${label} .`;
}
let result = make_shirt(36, "Umer Fabrics");
console.log(result);
let myFunc = (size, label) => {
    return size + label;
};
console.log(myFunc(36, " umer fabrics"));
