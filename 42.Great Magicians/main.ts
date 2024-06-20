// 45 Assignment
/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

let magiciansName :string[] = ["Abrar","Afaq","Isham","Affan"];

function show_magicians(greet:string){
    for(let elements of magiciansName){ // of extract elements
     console.log(greet,elements);

    }
}
show_magicians("Hello, How are you Mr.");

// Completed