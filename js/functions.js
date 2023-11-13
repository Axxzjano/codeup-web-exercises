"use strict";

/**
 * Function to say hello to the passed-in name.
 * @param {string} name - The name to greet.
 * @returns {string} - The greeting message.
 */
function sayHello(name) {
    alert('Hello ' + name + '!');
}

// Call the function with a string literal argument
let helloMessage = sayHello("YourName");
console.log(helloMessage);

// Store your name in a variable and pass it to the function
let myName = "YourName";
helloMessage = sayHello(myName);
console.log(helloMessage);

// Function to check if a number is equal to 2
function isTwo(number) {
    return number === 2;
}

// Call the function 'isTwo' passing the variable 'random' as an argument
console.log(isTwo(random));

// Function to calculate tip based on tip percentage and total bill
function calculateTip(tipPercentage, totalBill) {
    return tipPercentage * totalBill;
}

// Prompt user for bill total and tip percentage, then display the tip amount
let billTotal = parseFloat(prompt("Enter the bill total:"));
let tipPercentage = parseFloat(prompt("Enter the tip percentage:")) / 100;
let tipAmount = calculateTip(tipPercentage, billTotal);
alert("You should tip: $" + tipAmount.toFixed(2));

// Function to apply a discount to the original price
function applyDiscount(originalPrice, discountPercent) {
    return originalPrice * (1 - discountPercent);
}

// Example usage of applyDiscount function
let originalPrice = 100;
let discountPercent = 0.2; // 20%
let discountedPrice = applyDiscount(originalPrice, discountPercent);
console.log(discountedPrice);