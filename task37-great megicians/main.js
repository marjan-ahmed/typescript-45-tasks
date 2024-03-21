"use strict";
let magicians = ["Marjan", "Sufyan", "Shuraim"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The great";
    }
}
make_great(magicians);
show_magicians(magicians);
