"use strict";
const usernames = ["admin", "client1", "client2", "client3", "client4"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello Admin, would you like to see the status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
