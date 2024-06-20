// 45 Assignment 

/* 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 
• Print a second set of invitation messages, one for each person who is still in your list. */

let guestList: string[] = [
    "Hamzah Syed",
    "Zia Khan",
    "Ameen Alam",
    "Muhammad Qasim",
  ];

  for(let i = 0; i < guestList.length; i++) {
    console.log(
      `\nMr.${guestList[i]}, I would like to invite you on dinner at Saturday.\n`
    );
  }
  console.log("New GuestList :\n");
  let notPresent = "Zia Khan";
let newGuest = guestList[1] = "Daniyal";

  for(let i=0 ; i<guestList.length;i++){
    console.log(`${i + 1}.Mr.${guestList[i]}, I would like to invite you on dinner at Saturday.\n`);
    
  }
   

  console.log(`Due to some reasons ${notPresent} will not coming on dinner at Saturday.\n`);
  







