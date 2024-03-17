"use strict";
//declaring the person's age to get output of life stage
let personAge = 15;
if (personAge < 2) {
    console.log("the person is a baby.");
}
else if (personAge === 2 || personAge < 4) {
    console.log("the person is a toddler.");
}
else if (personAge === 4 || personAge < 13) {
    console.log("the person is a kid.");
}
else if (personAge === 13 || personAge < 20) {
    console.log("the person is a teenager.");
}
else if (personAge === 20 || personAge < 65) {
    console.log("the person is an adult.");
}
else if (personAge === 65) {
    console.log("the person is a elder.");
}
