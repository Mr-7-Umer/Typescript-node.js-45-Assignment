// 45 Assignment
/* 
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let userNames : string[] = ["Fahad","Umer","Hamzah","Admin","Sifwan"];

// Removing users
userNames = []; // This is now empty Array

if (userNames.length >0){

    for(let i=0 ; i < userNames.length ; i++){
        if(userNames[i] == "Admin"){
            console.log(`\nHello ${userNames[i]} would you like to see a status report ? \n `);
            
        }else{
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
            
        }
        
    }

}else{
    console.log(" We need to find some users!");
    
}

// Completed