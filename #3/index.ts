let person_name = "SUnnY AlI";

console.log(person_name.toLowerCase());

console.log(person_name.toUpperCase());

let case1 = person_name.slice(0, 1);
let case2 = person_name.slice(1, 5);
case1 = case1.toUpperCase();
case2 = case2.toLowerCase();
let case3 = person_name.slice(6, 7);
let case4 = person_name.slice(7);
case3 = case3.toUpperCase();
case4 = case4.toLowerCase();
let case5 = case1 + case2 + " " + case3 + case4; 
console.log(case5);

