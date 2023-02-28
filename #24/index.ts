// • Tests for equality and inequality with strings
console.clear()
let student= "brilliant";
console.log("Is student =='brilliant'? |predict true.");
console.log(student =='brilliant');
// programme2
let  coding = "exciting";
console.log("Is coding=='boring'? |predict false.");
console.log(coding == 'boring');
// • Tests using the lower case function
let name11 ="ABduLLah";
if(name11.toLowerCase() !== name11){
    console.log(false);
}else{
    console.log(name11)
   
}
// programme2
let name2= "pakistan";
if(name2.toLowerCase() == name2){
    console.log(true);

}else{
    console .log(name2);
}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// inequality test
let x = 7
let y = 3 

console.log("x != y | true" );
console.log(x !== y);

let i = 3 ;
let j = "3";
console.log("x =y |'false'");
console.log(x === y)
 
let x1 = 8;
let y1 = 8
if (x1 == y1) {
    console.log(true)
}
console.log(x1 === y1)

let x2 = 4;
let y2 = 5;
if(x2 ==y2){
    console.log(false)
}
console.log(x2 === y2)


let ca =44 ;
let da = 45;
if(ca<da){
    console.log(true);
}
console.log(ca<da)

if(ca>da){
    console.log(false)

}
console.log(ca>da)
if(ca<= da){
    console.log(true);
}
console.log(ca<= da)
if(ca>=da){
    console.log(false)
}
console.log(ca>=da)
if(da<=ca){
    console.log(false)
}
console.log(da<=ca)

if(da>=ca)
{
    console.log(true)
}
console.log(da>=ca)

// • Tests using "and" and "or" operators
if(ca >1 && da > 1){
    console.log(true)
}
console.log(ca>1&& da>1)
if(ca>1 && da<1){
    console.log(false)
}
 console.log(ca>1 && da<1)

 let k=7;
 let l = 9;
 if(k == 7 || l==9){
    console.log(true)
 } 
 console.log(k ==7 || l==9)


 if(k == 8 || l== 11){
console.log(false)
 } else {
    console.log(true)
 }

 console.log(k == 8 || l==11)


//  Test whether an item is in a array
let arrrr = [1,2,3,4,5,6,7];
for(i=0;i<=arrrr.length;i++){
    if (arrrr[i] === 5){
        console.log(true)
}
}

// • Test whether an item is not in a array
let fruits = ["apple","banana","coconut","melon"]
    for(i =0 ;i<= arrrr.length ;i++) {
        if("arr[i] === water melon"){
            console.log(false);
        }

    }
