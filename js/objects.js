(function() {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */

    let person ={
        firstName: "Axxzjavon",
        lastName: "Sampson",
        }
    console.log(person.firstName)
    console.log(person.lastName)

    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */
    let person1 = {
        firstName: "Axxzjavon",
        lastName: "Sampson",
        sayHello: function() {
            console.log(`Hello from ${this.firstName} ${this.lastName}!`);
        },
    };

    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //

let shoppers = [
    { name: "Cameron", amount: 180 },
    { name: "Ryan", amount: 250 },
    { name: "George", amount: 320 },
];

shoppers.forEach((shopper) => {
    let discount = shopper.amount > 200 ? 0.12 * shopper.amount : 0;
    let totalAmount = shopper.amount - discount;

    console.log(
        `${shopper.name} bought $${shopper.amount.toFixed(2)}, ${
            discount > 0 ? "gets a 12% discount of $" + discount.toFixed(2) : "no discount"
        }, so the total amount is $${totalAmount.toFixed(2)}.`
    );
});

function printDiscountInformation(shopperArray){

}
    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *
    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //  */

    let books = [
        {
            title: "The Salmon of Doubt",
            author: { firstName: "Douglas", lastName: "Adams" },
        },
        {
            title: "Walkaway",
            author: { firstName: "Cory", lastName: "Doctorow" },
        },
        {
            title: "A Brief History of Time",
            author: { firstName: "Stephen", lastName: "Hawking" },
        },
        // Add more books as needed
    ];

    // /**
    //  * TODO:
    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */
    //
    // /**
    //  * Bonus:
    //  * - Create a function named `createBook` that accepts a title and author
    //  *   name and returns a book object with the properties described
    //  *   previously. Refactor your code that creates the books array to instead
    //  *   use your function.
    //  * - Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.
    //  */


    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: { firstName: authorFirstName, lastName: authorLastName },
        };
    }

    function showBookInfo(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");
    }

    // Display information about each book
    books.forEach(showBookInfo);

})();


let movies=[
    {
        Movie:"Fast and the Furious",
        Director:{firstName:"Michael", lastName:"Scott"},
    },
    {
        Movie:"ET",
        Director:{firstName:"Katy", lastname:"Perry"},
    },
    {
        Movie:"Great Gatsby",
        Director:{firstName: "Jai", lastName:"White"},
    },
    {
        Movie:"Time Machine",
        Director:{firstName: "Russel", lastName:"Brand"},
    },
]

console.log(movies[2].Director)