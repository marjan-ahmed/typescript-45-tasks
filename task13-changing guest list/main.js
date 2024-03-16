//list of all the guests:
let guests = ['Mustafa', 'Mubashir', 'Hasan', "Sufyan"];
let cantAttend = "Sufyan";
console.log(`${cantAttend} can't make it to dinner.`);
//replacing the guest
let newGuest = "Marjan";
guests[guests.indexOf(cantAttend)] = newGuest;
//re-new invitations
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to come in dinner?`);
});
