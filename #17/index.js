"use strict";
let guestssss = ["Muhammad", "Hassaan", "Shaukat"];
console.log(guestssss[0] + " is not comming");
guestssss.slice(0, 1);
guestssss[0] = "Moiz";
/*for(let i=0; i<guest.length; i++) {
    console.log(guest[i] + ", " + "Thanks! for coming to the dinner");
};*/
console.log("We have got a bigger dinner table");
guestssss.unshift("Jack");
guestssss.splice(2, 0, "Hamza");
guestssss.push("Nouman");
console.log("Oh sorry! table will not be available so we cannot invite everyone");
while (guestssss.length > 2) {
    let delUser = guestssss.pop();
    console.log(delUser + " " + "we are sorry we can't invite you.");
}
for (let i = 0; i < guestssss.length; i++) {
    console.log(guestssss[i] + " " + "you are still invited.");
}
guestssss.splice(0, 2);
console.log(guestssss);
