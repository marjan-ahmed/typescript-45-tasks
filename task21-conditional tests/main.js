"use strict";
let car = "ferrari";
let car2 = "lamborgini";
//test#1
console.log(`Is car === 'ferrari'? I predict True.`);
console.log(car === "ferrari");
console.log("\n");
//test#2
console.log("Is car is === 'nissan'? I predict false");
console.log(car === "nissan");
console.log("\n");
//test#3
console.log("Is car > 'lamborgini'? I predict false");
console.log(car > car2);
console.log("\n");
//test#4
console.log("Is car !== cartoUpperCase()? I predict true");
console.log(car !== car.toUpperCase());
console.log("\n");
//test#5
console.log("Is car === car2.toLowerCase()? I predict false");
console.log(car === car2.toLowerCase());
console.log("\n");
//test#6
console.log("Is car < car2 || car === car2? i predict true");
console.log(car < car2 || car === car2);
console.log("\n");
//test#7
console.log("car !== car2 && car2 < car? I predict false");
console.log(car !== car2 && car2 < car);
console.log("\n");
//test#8
console.log("car + car2 === 'ferrarilamborgini? I predict true");
console.log(car + car2 === 'ferrarilamborgini');
console.log("\n");
//test#9
console.log("car === 'number'? I predict false");
console.log(car === 'number');
console.log("\n");
//test#10
console.log("car !== 'number'? I predict false");
console.log(car !== 'number');
