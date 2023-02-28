function carmanu(model:string,color:string,manufacturer:string,options:{}){
    let cars = {model,color,manufacturer,...options};
    return cars;
}
let cars = carmanu("2020","white","Honda",{transmission:"automatic",condition:"good"})
console.log(cars);

