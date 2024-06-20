"use strict";
// 45 Assignment
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt1(label, size = "Large") {
    return size + label;
}
let func1 = make_shirt1(" , I love Typescript \n");
console.log(func1);
// large and medium shirt with default message.
function make_shirt2(size, label = "I love Typescript") {
    return size + label;
}
let func2 = make_shirt2("Large , ");
console.log(func2);
function make_shirt3(size, label = "I love Typescript") {
    return size + label;
}
let func3 = make_shirt3("\nMedium , ");
console.log(func3);
// Any size with different message
function make_shirt4(size, label = "Progranmmers Vibe") {
    return size + label;
}
let func4 = make_shirt4("\n37 , ");
console.log(func4);
