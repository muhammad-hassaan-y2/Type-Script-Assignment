let guest = ["Muhammad", "Hassaan", "Shaukat"];
console.log(guest[0] + " is not comming")
guest.slice(0,1);
guest[0] = "Moiz";

for(let i=0; i<guest.length; i++) {
    console.log(guest[i] + ", " + "Thanks! for coming to the dinner");
};