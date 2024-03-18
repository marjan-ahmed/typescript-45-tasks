let currentUsers:string[] = ["user1","user2","user3","user4","user5"];

let newUsers:string[] = ["Uer6","user7","admin","user8","User9"];

newUsers.forEach(newUser => {
    if(currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase()))
    {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is availble.`);
    }
});