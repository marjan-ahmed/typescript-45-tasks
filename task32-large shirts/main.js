"use strict";
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`Making a ${size} t-shirt with message "${message}" printed on it.`);
}
make_shirt(); //It will be carried out(the commands)
make_shirt("medium");
make_shirt("small", "Coding is fun");
