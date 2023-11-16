"use strict"


let userInput;

do {
    userInput = parseInt(prompt("Enter an odd number between 1 and 50:"));

    if (userInput >= 0 && userInput <= 50 && userInput % 2 !== 0) {
        break;
    }

} while (true);

console.log(`Number to skip is: ${userInput}`);

for (let i = 1; i <= 50; i += 2) {
    if (i === userInput) {
        console.log(`Yikes! Skipping number: ${userInput}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}

