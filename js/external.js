console.log("Hello from external JavaScript")

alert("Welcome to my website");

// Prompt for favorite color
let userColor = prompt('What is your favorite color?');
console.log(`The user entered: $${userColor}`);
// Agree with user
if (userColor) {
    alert('Great, ' + userColor + ' is my favorite color too!');
}
console.log(`Thanked user for great taste`);

let movie1Days = prompt('How many days did you rent The Little Mermaid for?');
console.log(`The user entered: ${movie1Days}`);
let movie2Days = prompt('How many days did you rent Brother Bear for?');
console.log(`The user entered: ${movie2Days}`);
let movie3Days = prompt('How many days did you rent Hercules for?');
console.log(`The user entered: ${movie3Days}`);

let moviePricePerDay = 3;

// Calculate total payment for movie rentals
let totalMovieCost = (movie1Days * moviePricePerDay) + (movie2Days * moviePricePerDay) + (movie3Days * moviePricePerDay);

// Display result for movie rentals
alert('Total cost for movie rentals: $' + totalMovieCost);
console.log(`Total movie cost provided to the user`);

alert("Let's check your total pay");
// Pay for work
let hoursAtGoogle = prompt('How many hours did you work for Google?');
console.log(`The user entered: ${hoursAtGoogle}`);
let hoursAtAmazon = prompt('How many hours did you work for Amazon?');
console.log(`The user entered: ${hoursAtAmazon}`);
let hoursAtFacebook = prompt('How many hours did you work for Facebook?');
console.log(`The user entered: ${hoursAtFacebook}`);

let rateForGoogle = 400;
let rateForAmazon = 380;
let rateForFacebook = 350;

// Calculate total payment for working as a contractor
let totalPayment = (hoursAtGoogle * rateForGoogle) + (hoursAtAmazon * rateForAmazon) + (hoursAtFacebook * rateForFacebook);
console.log(`Total payment provided to the user`);

// Display result for contractor work
alert('Total payment for contractor work: $' + totalPayment);