// 45 Assignment
/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city : string , country : string){

    return `"${city}, ${country}"`
}
let city_country1 = city_country("Karachi" , "Pakistan")
console.log(city_country1);

let city_country2 = city_country("Paris" , "France")
console.log(city_country2);

let city_country3 = city_country("Dubai" , "UAE")
console.log(city_country3);

let city_country4 = city_country("London" , "United Kingdom")
console.log(city_country4);

// Completed
 
