"use strict";
const animals = ["Lion", "Leopard", "Tiger"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    switch (animal) {
        case "Lion":
            console.log('Lion is the king of Forest');
            break;
        case "Leopard":
            console.log("Leopard runs very fast");
            break;
        case "Tiger":
            console.log("Tiger is strong");
            break;
    }
}
console.log("all animals have four legs");
