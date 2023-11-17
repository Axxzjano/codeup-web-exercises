"use strict"

// let num = 2;
// let output = "";
//
// while (num <= 65536) {
//     output += `${num} `;
//     num *= 2
//     console.log(num)
// }

let num = 2;
let output = "";

while (num <= 65536) {
    output += `${num}\n`;
    num *= 2;
}

console.log(output);


let allCones = Math.floor(Math.random() * 50) + 50; // Random number between 50 and 100

do {
    let conesBought = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5

    if (conesBought <= allCones) {
        console.log(conesBought + " cones sold...");
        allCones -= conesBought;
    } else {
        console.log("Cannot sell you " + conesBought + " cones. I only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");

