let car : string = 'subaru';
let car2: string = "Mercedesbenz"

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("\t")

console.log("Is car == 'tesla'? I predict Fasle");
console.log(car == 'tesla');
console.log("\t")

console.log("Is car !== 'subaru? I predict False");
console.log(car !== 'subaru');
console.log("\t")

console.log("Is car !== car.toUpperCase()");
console.log(car !== car.toUpperCase());
console.log("\t")

console.log("Is car > car2 I predict True");
console.log(car > car2);
console.log("\t")

console.log("Is car === car2? I predict False");
console.log(car === car2);
console.log("\t");

console.log("Is car !== car2 && car == 'sabura'? I predict False");
console.log(car !== car2 && car === 'subaru' );
console.log("\t");

console.log("car2 === car.toLowerCase()? I prdict False");
console.log(car2 === car.toLowerCase());
console.log("\t");

console.log("car2 === 'number'? I predict false");
console.log(car2 === "number");