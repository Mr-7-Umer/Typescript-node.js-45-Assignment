// 45 Assignment
/* 
29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


let favFruits = ["Mango","Orange","Pineapple"];
 
 if (favFruits.includes("Banana")){
    console.log("You really like Banana.");
 }
 else if (favFruits.includes(" Peach")){
    console.log("You really like Peach.");
    
}
else if (favFruits.includes("Mango")){
     console.log("You really like Mango.");
             
}
else if (favFruits.includes("Apricot")){
     console.log("You really like Apricot.");
             
}
else if (favFruits.includes("Watermelon")){
     console.log("You really like Watermelon.");
             
}else{
    console.log("Fruits are not Available!");
    
}
// Completed
