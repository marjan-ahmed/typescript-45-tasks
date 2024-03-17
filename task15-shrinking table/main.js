"use strict";
//list of all the guests:
let guests = ['Mustafa', 'Mubashir', 'Hasan', "Sufyan"];
//removing the guest
while (guests.length > 2) {
    let remove_guest = guests.pop();
    console.log(`Sorry ${remove_guest}, I can't invite you to my dinner party.`);
}
//Invite all the guests
guests.forEach(guests => {
    console.log(`Dear ${guests}, You can get access to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); //empty list
