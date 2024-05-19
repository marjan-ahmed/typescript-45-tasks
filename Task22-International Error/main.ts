let friends: string[] = ["Salman", "Da'ood", "Yousuf"];

console.log(friends[3]); // Intentional error (Out Of Bound Error): Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Haziq"; // Correcting the error by accessing a valid index.