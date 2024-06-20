// 45 Assignment
/*

album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and 
it should return a Object containing these two pieces of information. Use the function to make three 
dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the albums Object.
 Make at least one new function call that includes the number of tracks on an album.*/

function make_album1 (artist : string , albumTitle : string){
    return {artist,albumTitle}
}
let album1 = make_album1("Talha","Karachi Riders");
    console.log(album1);

let album2 = make_album1("Arijit","Ashique");
    console.log(album2);

let album3 = make_album1("kaifi","Kahani 2.0");
    console.log(album3);
    
    // new Function with optional number of tracks

function make_album2 (artist : string , albumTitle : string , numberOfTracks?:number){
    return {artist,albumTitle,numberOfTracks}
}
let album4 = make_album2("Talha","Karachi Riders",9);
    console.log(album4);

let album5 = make_album2("Arijit","Ashique",20);
    console.log(album5);

let album6 = make_album2("kaifi","Kahani 2.0");
    console.log(album6);


    // Completed
    

