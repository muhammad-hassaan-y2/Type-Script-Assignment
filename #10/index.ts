/* This the 5th assignent that I 
have added */
let famous_person = "Allama Muhammad Iqbal once said,";
let Quote = "The wing of the Falcon brings to the king, the wing if the crow brings him to the cemetery.";
let famous_quote = famous_person + " " + Quote;
console.log(famous_quote);

// This is assign # 3

"use strict";
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
