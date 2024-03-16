let guests = ['Mustafa', 'Mubashir', 'Hasan', "Sufyan"];
console.log("We have got a bigger dining table! We can invite more");
//more guests invitation
guests.unshift("Ahmed"); //add new guest in the starting of the list
guests.splice(guests.length / 2, 2, "Yasir"); //replacement at the midploint of the list
guests.push("Qasim"); // add to the last of the list
//print the whole guests
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to eat dinner?`);
});
