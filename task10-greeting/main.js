"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ['Ahmed', 'Abdullah', 'Yousuf', 'Abdul Samad', 'Shabeeb'];
// Print each person's name with message by accessing each element in the list one at a time
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}, would you like to drink some water?`);
}
