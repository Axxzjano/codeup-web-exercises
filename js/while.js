"use strict"

let num = 2;
let output = "";

while (num <= 65536) {
    output += `${num} `;
    num *= 2;
}