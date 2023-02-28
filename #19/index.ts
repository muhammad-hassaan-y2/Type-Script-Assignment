let gues = ["Muhammad", "Hassaan", "Shaukat"];
console.log(gues[0] + " is not comming")
gues.slice(0,1);
gues[0] = "Moiz";

/*for(let i=0; i<guest.length; i++) {
    console.log(guest[i] + ", " + "Thanks! for coming to the dinner");
};*/

console.log("We have got a bigger dinner table");
gues.unshift("Jack");
gues.splice(2,0, "Hamza")
gues.push("Nouman")
console.log(gues.length + " " + "People are coming to the dinner");