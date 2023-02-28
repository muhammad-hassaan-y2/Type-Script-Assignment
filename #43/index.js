"use strict";
let arr = ["Magician A", "Magician B", "Magician C", "Magician D"];
function show_magicians(arrayInput) {
    arrayInput.map((value) => console.log(value));
}
function make_great(arrayInput) {
    let newArray = arrayInput.map((value) => {
        return `The Great ${value}`;
    });
    arr = newArray;
}
// Pritning Array before adding "The Great"
show_magicians(arr);
// Adding "The Great to each array value"
make_great(arr);
// Printing Array after adding "The Great"
show_magicians(arr);
