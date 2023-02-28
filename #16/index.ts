let guestss = ["Muhammad", "Hassaan", "Shaukat"];
console.log(guestss[0] + " is not comming")
guestss.slice(0,1);
guestss[0] = "Moiz";

/*for(let i=0; i<guest.length; i++) {
    console.log(guest[i] + ", " + "Thanks! for coming to the dinner");
};*/

console.log("We have got a bigger dinner table");
guestss.unshift("Jack");
guestss.splice(2,0, "Hamza")
guestss.push("Nouman")


for(let i=0; i<guestss.length; i++) {
    console.log(guestss[i] + ", " + "Thanks! for coming to the dinner");
};