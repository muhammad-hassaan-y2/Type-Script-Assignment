"use strict";
function carmanu(model, color, manufacturer, options) {
    let cars = Object.assign({ model, color, manufacturer }, options);
    return cars;
}
let cars = carmanu("2020", "white", "Honda", { transmission: "automatic", condition: "good" });
console.log(cars);
