// 45 Assignment

/* 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at 
least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guestList: string[] = [
  "Hamzah Syed",
  "Zia Khan",
  "Ameen Alam",
  "Muhammad Qasim",
];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    `\nMr.${guestList[i]}, I would like to invite you at dinner on Saturday.\n`
  );
}