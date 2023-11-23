// // // // // // //  'use strict'
// // // // // // // // // // // function calculateTotal(luckyNumber, totalAmount) {
// // // // // // // // // // //     switch (luckyNumber) {
// // // // // // // // // // //         case 0:
// // // // // // // // // // //             return totalAmount;
// // // // // // // // // // //         case 1:
// // // // // // // // // // //             return totalAmount * 0.9; // 10% discount
// // // // // // // // // // //         case 2:
// // // // // // // // // // //             return totalAmount * 0.75; // 25% discount
// // // // // // // // // // //         case 3:
// // // // // // // // // // //             return totalAmount * 0.65; // 35% discount
// // // // // // // // // // //         case 4:
// // // // // // // // // // //             return totalAmount * 0.5; // 50% discount
// // // // // // // // // // //         case 5:
// // // // // // // // // // //             return 0; // Everything for free
// // // // // // // // // // //         default:
// // // // // // // // // // //             return "Invalid lucky number";
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // // Terms
// // // // // // // // // // // // Harry Potter
// // // // // // // // // // // // Hermione
// // // // // // // // // // // // Granger
// // // // // // // // // // // // Ron Weasley. ...
// // // // // // // // // // // // Hufflepuff
// // // // // // // // // // // // Ravenclaw
// // // // // // // // // // // // Slytherin
// // // // // // // // // // // // Gryffindor
// // // // // // // // // // //
// // // // // // // // // // // let pickNumber = prompt("Pick a number 1-4")
// // // // // // // // // // // let chooseColor = prompt('Choose a color')
// // // // // // // // // // // let chooseObject = prompt('Choose an object')
// // // // // // // // // // // let chooseCreature = prompt("Choose a creature")
// // // // // // // // // // // let chooseHobby = prompt("Choose a hobby")
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // // function pickNumber(number){
// // // // // // // // // // //     switch (pickNumber){
// // // // // // // // // // //         case isNaN(number):
// // // // // // // // // // //             return "Invalid Number"
// // // // // // // // // // //         case (number == 1):
// // // // // // // // // // //             return "Harry Potter"
// // // // // // // // // // //         case (number == 2):
// // // // // // // // // // //             return "Hermione"
// // // // // // // // // // //         case (number == 3):
// // // // // // // // // // //             return "Granger"
// // // // // // // // // // //         case (number == 4):
// // // // // // // // // // //             return "Ron Weasley"
// // // // // // // // // // //
// // // // // // // // // // //     }
// // // // // // // // // // //
// // // // // // // // // // // }
// // // // // // // // // // // alert(pickNumber(3))
// // // // // // // // // // // let hp=(pickNumber(3)
// // // // // // // // // // // )
// // // // // // // // // // // console.log(hp);
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // // for (i = 20; i <= 100; i++) {
// // // // // // // // // // //     // body
// // // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // // let chooseNumber = prompt("Pick a number 1-4");
// // // // // // // // // // // let chooseColor = prompt('Choose a color');
// // // // // // // // // // // let chooseObject = prompt('Choose an object');
// // // // // // // // // // // let chooseCreature = prompt("Choose a creature");
// // // // // // // // // // // let chooseHobby = prompt("Choose a hobby");
// // // // // // // // // // //
// // // // // // // // // // // function pickNumber() {
// // // // // // // // // // //     switch (Number(number)) {
// // // // // // // // // // //         case 1:
// // // // // // // // // // //             return "Harry Potter";
// // // // // // // // // // //         case 2:
// // // // // // // // // // //             return "Hermione";
// // // // // // // // // // //         case 3:
// // // // // // // // // // //             return "Granger";
// // // // // // // // // // //         case 4:
// // // // // // // // // // //             return "Ron Weasley";
// // // // // // // // // // //         default:
// // // // // // // // // // //             return "Invalid Number";
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // //
// // // // // // // // // // // let hp = pickNumber(3);
// // // // // // // // // // // alert(hp);
// // // // // // // // // // // console.log(hp);
// // // // // // // // // // //
// // // // // // // // // // // for (let i = 100; i >= 5; i-=5){
// // // // // // // // // // //     console.log(i)
// // // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // //
// // // // // // // // // // // let chooseNumber = prompt("Pick a number 1-4");
// // // // // // // // // // // let chooseColor = prompt('Choose a color');
// // // // // // // // // // // let chooseObject = prompt('Choose an object');
// // // // // // // // // // // let chooseCreature = prompt("Choose a creature");
// // // // // // // // // // // let chooseHobby = prompt("Choose a hobby");
// // // // // // // // // //
// // // // // // // // // // // function pickNumber(number) {
// // // // // // // // // // //     switch (Number(number)) {
// // // // // // // // // // //         case 1:
// // // // // // // // // // //             return "Harry Potter";
// // // // // // // // // // //         case 2:
// // // // // // // // // // //             return "Hermione";
// // // // // // // // // // //         case 3:
// // // // // // // // // // //             return "Granger";
// // // // // // // // // // //         case 4:
// // // // // // // // // // //             return "Ron Weasley";
// // // // // // // // // // //         default:
// // // // // // // // // // //             return "Invalid Number";
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // //
// // // // // // // // // // // let chosenCharacter = pickNumber(chooseNumber);
// // // // // // // // // // // alert(`You picked ${chosenCharacter}.`);
// // // // // // // // // // // console.log(chosenCharacter);
// // // // // // // // // // for (let i = 0; i<10; i++){
// // // // // // // // // //     console.log("this is i: " + i)
// // // // // // // // // //     for (let j=0; j<10; j++){
// // // // // // // // // //         console.log("this is j: " + j)
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // // function hello(){
// // // // // // // // // //     return console.log("Hello World");
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // hello();
// // // // // // // // //
// // // // // // // // // // function sum(num1, num2){
// // // // // // // // // //     return(num1 + num2)
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(sum(3,4))
// // // // // // // // //
// // // // // // // // //
// // // // // // // // // // function evenOrOdd(number){
// // // // // // // // // //     if(number %2 == 0){
// // // // // // // // // //         return true
// // // // // // // // // //     }
// // // // // // // // // //     else{
// // // // // // // // // //         return false
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(evenOrOdd(3))
// // // // // // // // //
// // // // // // // // // function helloName(name){
// // // // // // // // //     return (`Hello ${name}!`)
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(helloName('Kumar'))
// // // // // // // // //
// // // // // // // // // function sum(num1, num2){
// // // // // // // // //     return (num1+num2)
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(sum(1, 3))
// // // // // // // // //
// // // // // // // // // function square(number){
// // // // // // // // //     return Math.sqrt(number).toFixed(2)
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(square(78))
// // // // // // // // //
// // // // // // // // // function evenOrOdd(number){
// // // // // // // // //     if (number %2 == 0){
// // // // // // // // //         return true
// // // // // // // // //     }else{
// // // // // // // // //         return false
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(evenOrOdd(2))
// // // // // // // // //
// // // // // // // // // // let userTemp=prompt("Enter the temperature outside:");
// // // // // // // // // // let temp = parseFloat(userTemp)
// // // // // // // // // // function weather(temp){
// // // // // // // // // //     if (temp < 0){
// // // // // // // // // //         return "It's cold!"
// // // // // // // // // //     }if (temp >= 0 && temp <= 20 ){
// // // // // // // // // //         return "It's warm!"
// // // // // // // // // //     }if (temp > 20){
// // // // // // // // // //         return "It's hot!"
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // console.log(weather(temp))
// // // // // // // // //
// // // // // // // // //
// // // // // // // //
// // // // // // // //
// // // // // // // // // let userNumber=prompt("Type a number:")
// // // // // // // // // let num=parseFloat(userNumber)
// // // // // // // // //
// // // // // // // // // for (let i = num; i > 0 ; i--) {
// // // // // // // // //     console.log(i)
// // // // // // // // // }
// // // // // // // //
// // // // // // // // // let names=[3, 2, 1, 4]
// // // // // // // // //
// // // // // // // // // function calculateTotal(teamNumber){
// // // // // // // // //     let total = 0
// // // // // // // // //     for (let number of teamNumber) {
// // // // // // // // //          total += number;
// // // // // // // // //     }
// // // // // // // // //     return total;
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(calculateTotal(names))
// // // // // // // //
// // // // // // // // // let powerLevelsArray=[15,12,13,21,12,32]
// // // // // // // // //
// // // // // // // // // function calculatePowerLevels(level){
// // // // // // // // //     let total= 0
// // // // // // // // //     for (let levelElement of level) {
// // // // // // // // //         total += levelElement;
// // // // // // // // //     }
// // // // // // // // //     return total;
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(calculatePowerLevels(powerLevelsArray))
// // // // // // // //
// // // // // // // //
// // // // // // // // // let powerLevels=[35, 45, 65, 75, 80]
// // // // // // // // // function calculateTotalPowerLevel(power){
// // // // // // // // //     let total= 0
// // // // // // // // //     for (let powerElement of power) {
// // // // // // // // //         total += powerElement
// // // // // // // // //     }return total;
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(calculateTotalPowerLevel(powerLevels))
// // // // // // // //
// // // // // // // let hero ={
// // // // // // //     name: "Spiderman",
// // // // // // //     age: 35,
// // // // // // //     height:"5'10",
// // // // // // //     bio: function(){
// // // // // // //         console.log(hero.name, hero.age,hero.height)
// // // // // // //     }
// // // // // // // }
// // // // // // // // //
// // // // // // // // // hero.bio()
// // // // // // // //
// // // // // // // //
// // // // // // // // function info(name,age,job){
// // // // // // // //     return{
// // // // // // // //         name:name,
// // // // // // // //         age:age,
// // // // // // // //         job:job,
// // // // // // // //         intro: function(){
// // // // // // // //             return `Hello, my name is ${this.name} I am ${this.age} years old and I am a ${this.job}!`;
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // let bioIntro = info("Axxzjavon", 27, 'Java Developer');
// // // // // // // // console.log(bioIntro.intro())
// // // // // // // //
// // // // // // // // // function greeting(name, time){
// // // // // // // // //     return `Good ${time}, ${name}!`;
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(greeting("John", "morning"));
// // // // // // // // // function answer(base, exponent){
// // // // // // // // //     return base**exponent;
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // console.log(answer(2, 4));
// // // // // // // //
// // // // // // // // function positiveOrNegative(num){
// // // // // // // //     if (num %2===0){
// // // // // // // //         return "Positive!"
// // // // // // // //     }else {
// // // // // // // //         return "Negative!";
// // // // // // // //     }
// // // // // // // // }
// // // // // // // //
// // // // // // // // console.log(positiveOrNegative(7))
// // // // // // // //
// // // // // // // //
// // // // // // // // 1. Write a JavaScript function that reverses a number.
// // // // // // // //     Example x = 32243;
// // // // // // // // Expected Output : 34223
// // // // // // //
// // // // // // //  function reversedNumber(num){
// // // // // // //     num = num + '';
// // // // // // //     return num.split('').reverse().join('');
// // // // // // //  }
// // // // // // //
// // // // // // //  console.log(Number(reversedNumber(987654321)));
// // // // // // //
// // // // // // //  function palindrome(str) {
// // // // // // //      return true;
// // // // // // //  }
// // // // // // //  palindrome("eye");
// // // // // // //  console.log()
// // // // // // //
// // // // // //
// // // // // // (function() {
// // // // // //     "use strict";
// // // // // //
// // // // // //     let person = {
// // // // // //         firstName: "Axxzjavon",
// // // // // //         lastName: "Sampson",
// // // // // //     };
// // // // // //
// // // // // //     console.log(person.firstName);
// // // // // //     console.log(person.lastName);
// // // // // //
// // // // // //     let person1 = {
// // // // // //         firstName: "Axxzjavon",
// // // // // //         lastName: "Sampson",
// // // // // //         sayHello: function() {
// // // // // //             console.log(`Hello from ${this.firstName} ${this.lastName}!`);
// // // // // //         },
// // // // // //     };
// // // // // //
// // // // // //     console.log(person1.sayHello());
// // // // // //
// // // // // //     var shoppers = [
// // // // // //         { name: "Cameron", amount: 180 },
// // // // // //         { name: "Ryan", amount: 250 },
// // // // // //         { name: "George", amount: 320 },
// // // // // //     ];
// // // // // //
// // // // // //     shoppers.forEach((shopper) => {
// // // // // //         let discount = shopper.amount > 200 ? 0.12 * shopper.amount : 0;
// // // // // //         let totalAmount = shopper.amount - discount;
// // // // // //
// // // // // //         console.log(
// // // // // //             `${shopper.name} bought $${shopper.amount.toFixed(2)}, ${
// // // // // //                 discount > 0 ? "gets a 12% discount of $" + discount.toFixed(2) : "no discount"
// // // // // //             }, so the total amount is $${totalAmount.toFixed(2)}.`
// // // // // //         );
// // // // // //     });
// // // // // //
// // // // // //     let books = [
// // // // // //         {
// // // // // //             title: "The Salmon of Doubt",
// // // // // //             author: { firstName: "Douglas", lastName: "Adams" },
// // // // // //         },
// // // // // //         {
// // // // // //             title: "Walkaway",
// // // // // //             author: { firstName: "Cory", lastName: "Doctorow" },
// // // // // //         },
// // // // // //         {
// // // // // //             title: "A Brief History of Time",
// // // // // //             author: { firstName: "Stephen", lastName: "Hawking" },
// // // // // //         },
// // // // // //         // Add more books as needed
// // // // // //     ];
// // // // // //
// // // // // //     function createBook(title, authorFirstName, authorLastName) {
// // // // // //         return {
// // // // // //             title: title,
// // // // // //             author: { firstName: authorFirstName, lastName: authorLastName },
// // // // // //         };
// // // // // //     }
// // // // // //
// // // // // //     function showBookInfo(book, index) {
// // // // // //         console.log(`Book # ${index + 1}`);
// // // // // //         console.log(`Title: ${book.title}`);
// // // // // //         console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
// // // // // //         console.log("---");
// // // // // //     }
// // // // // //
// // // // // //     // Display information about each book
// // // // // //     books.forEach(showBookInfo);
// // // // // // })();
// // // // // //
// // // // // //
// // // // //
// // // // // // var i = 0;
// // // // // // while (i <= 10) {
// // // // // //     console.log(i);
// // // // // //     i++;
// // // // // // }
// // // // //
// // // // // // for (var i = 0; i <= 10; i++){
// // // // // //     console.log(i);
// // // // // // }
// // // // //
// // // // // // // console.log(10 % 3);
// // // // // // i=="true"
// // // // // // var i = 0;
// // // // // // while(i <= 10) {
// // // // // //     console.log(i);
// // // // // //     i++;
// // // // // // }
// // // // //
// // // // //
// // // // // Conversation opened. 1 unread message.
// // // //
// // // // 'use strict';
// // // //
// // // // // Create an array of months for printing dates
// // // // let months = [
// // // //     'January', 'February', 'March', 'April', 'May', 'June',
// // // //     'July', 'August', 'September', 'October', 'November', 'December'
// // // // ];
// // // //
// // // // // Create the date corresponding to your birthday using the JavaScript Date object.
// // // // let jsBirthday = new Date('2014-01-01');
// // // //
// // // // // Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// // // // console.log('Here is my birthday using JavaScript: ' + months[jsBirthday.getMonth()] + ' ' + jsBirthday.getDate() + ', ' + jsBirthday.getFullYear());
// // //
// // //
// // //
// // // // Bank Transactions
// // // //
// // // // Given the array of bank transactions below, ask the user with a prompt to choose from one of the following options:
// // // //
// // // // - Enter 1 to check account balance
// // // // - Enter 2 for the total of all debits
// // // // - Enter 3 for the total of all credits
// // // // - Enter 4 to enter a date to get all transactions for that date
// // // //
// // // // If the user enters any inputs other than 1 - 4, continue to prompt them to enter a valid input. If the user chooses 4, prompt them
// // // // again for a given date, in the format of 'YYYY-MM-DD'.
// // // //
// // // //     As a bonus, you can allow the user to keep going until they select 5 to exit the program.
// // // //
// // //     const bankTransactions = [
// // //     { id: 1, date: '2023-01-01', description: 'Deposit', amount: 1000.00, type: 'credit' },
// // //     { id: 2, date: '2023-01-05', description: 'Grocery shopping', amount: -50.00, type: 'debit' },
// // //     { id: 3, date: '2023-01-10', description: 'ATM withdrawal', amount: -100.00, type: 'debit' },
// // //     { id: 4, date: '2023-01-15', description: 'Paycheck', amount: 2000.00, type: 'credit' },
// // //     { id: 5, date: '2023-01-20', description: 'Utilities bill', amount: -150.00, type: 'debit' },
// // //     { id: 6, date: '2023-01-25', description: 'Dinner out', amount: -30.00, type: 'debit' },
// // //     { id: 7, date: '2023-02-01', description: 'Deposit', amount: 500.00, type: 'credit' },
// // //     { id: 8, date: '2023-02-05', description: 'Gasoline', amount: -40.00, type: 'debit' },
// // //     { id: 9, date: '2023-02-10', description: 'ATM withdrawal', amount: -80.00, type: 'debit' },
// // //     { id: 10, date: '2023-02-15', description: 'Paycheck', amount: 2200.00, type: 'credit' },
// // //     { id: 11, date: '2023-02-20', description: 'Rent payment', amount: -800.00, type: 'debit' },
// // //     { id: 12, date: '2023-02-25', description: 'Shopping spree', amount: -120.00, type: 'debit' },
// // //     { id: 13, date: '2023-03-01', description: 'Deposit', amount: 700.00, type: 'credit' },
// // //     { id: 14, date: '2023-03-05', description: 'Medical expenses', amount: -75.00, type: 'debit' },
// // //     { id: 15, date: '2023-03-10', description: 'ATM withdrawal', amount: -60.00, type: 'debit' },
// // //     { id: 16, date: '2023-03-15', description: 'Paycheck', amount: 1800.00, type: 'credit' },
// // //     { id: 17, date: '2023-03-20', description: 'Subscription renewal', amount: -10.00, type: 'debit' },
// // //     { id: 18, date: '2023-03-25', description: 'Lunch with friends', amount: -25.00, type: 'debit' },
// // //     { id: 19, date: '2023-04-01', description: 'Deposit', amount: 1200.00, type: 'credit' },
// // //     { id: 20, date: '2023-04-05', description: 'Electronics purchase', amount: -200.00, type: 'debit' },
// // // ];
// //
// //
// // // let age= 28
// // // console.log(typeof(age));
// // //
// // // let firstName= "Axxzjavon";
// // // let lastName= "Sampson";
// // //
// // // let fullName = firstName +' '+ lastName;
// // // console.log(fullName);
// // //
// // // let num1 = 31
// // // let num2= 21
// // // let num3= 78
// // //
// // // console.log(num1+num2+num3)
// // // console.log(num3-num2-num1)
// // // console.log(num1*num2*num3)
// // // console.log((num3/num2/num1).toFixed(2))
// // //
// // // let userAge =Number(prompt("What is your age?"))
// // //
// // // function ageCheck(num){
// // //     if(num<= 25 && num>=18){
// // //         return "User age is between 18 and 25"
// // //     }else{
// // //         return "User age does not meet criteria"
// // //     }
// // // }
// // // console.log(ageCheck(userAge))
// // //
// // // let count = 5;
// // //
// // // for (let i = count; i < 10; i++) {
// // //     console.log(i)
// // // }
// //
// //
// // let num1=Number(prompt("Input your first number:"))
// // let num2=Number(prompt("Input your second number:"))
// //
// // function compareNum(num1, num2){
// //     if (num1 > num2){
// //         return console.log(`${num1} is greater than ${num2}`)
// //     }
// //     if (num1 < num2){
// //         return console.log(`${num1} is less than ${num2}`)
// //     }
// //     if (num1 === num2){
// //         return console.log(`${num1} is equal to ${num2}`)
// //     }
// //     else{
// //         return console.log("Invalid input. Please try again.")
// //     }
// // }
// //
// // (compareNum(num1, num2))
// //
// // function age(num1, num2){
// //     let time= 4
// //     console.log(num1+num2)
// //     }
// //
// // let time = 3
// // // function age (num1, num2){
// // //     if (num1>num2){
// // //         return `${num1} is greater`
// // //     }
// // // }
// //
// // age(3,4)
// //
// // console.log(time)
//
//
// // const pi= 3.14159
// //
// // pi = 34
// //
// // console.log(pi)
//
// // let flash="Hello"
// //
// // function reverseL(string){
// //     return string.split("").reverse().join("")
// // }
// //
// // let rev = reverseL(flash)
// //
// // console.log(rev)
//
// // let userInput = prompt("Input a number to convert:")
// // let parseFloat = convertedInput(userInput)
// //
// //     function convertedInput(string){
// //         console.log("Type before the conversion:", typeof userInput)
// //         let convertedValue = Number(userInput);
// //
// //         if (!isNaN(convertedValue)){
// //             return `${userInput} is now a number`;
// //         }
// //     }
// //
// // console.log(parseFloat)
// let num= 35
// function square(number){
//     return number * number
// }
//
// let numSquare = square(num)
//
// console.log(numSquare)
//
//
// let multiply = function(num1, num2){
//     return console.log(num1*num2)
// }
//
// multiply(23,5)
//
// let add = function(num1, num2){
//     return console.log(num1+num2)
// }
//
// add(23,5)
//
// let userInput=prompt("Input a number:")
//
// let evenOrOdd = function(number){
//     if(isNaN(number)){
//         return "Invalid Input"
//     }
//     if(number %2!==0 ){
//         return "The number is odd"
//     }
//
//     if (number %2==0){
//         return "The number is even"
//     }
// }
// let result = evenOrOdd(userInput)
// console.log(result)
//
//
// function weekdayOrWeekend(){
//
// }
//
//
// let day = prompt("Enter the day of the week:");
//
// switch (day.toLowerCase()) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("It's a weekday!");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Invalid day");
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
let count = 5
while (count >= 1){
    console.log(count);
    count--
}


let colors=["Blue", "Yellow","Green"]
colors.push("Red");
console.log("Updated colors array");
console.log(colors);

for (let color of colors) {
    console.log(color)
}


let carInfo ={
    Make:"Toyota",
    Year:"2013",
    Model:"Venza",
    Info:
        function (){
        console.log(`This is a ${this.Year} ${this.Make} ${this.Model}`)
    }
}
carInfo.Info()


let string = "Axxzjavon"


console.log(string.length)


let pizza = true
let ice = false

console.log(pizza && ice)
console.log(pizza || ice)
console.log(pizza === ice)
console.log(pizza && !ice)

let time;
console.log(typeof time)
time = null
console.log(time)

let number = 10

console.log(++ number)
number = 10
console.log(number ++)


let userAge = prompt("Enter your age:")
let age = userAge >= 18 ? "Adult":"Minor";

console.log(age)

let longName = prompt("Enter your name")
let nameLength = longName.length > 5? "You have a long name":"You have a short name"
console.log(nameLength)
alert(nameLength)


let ex1 = 31
let ex2 = "31"
let ex3 = true

console.log(typeof ex1)
console.log(typeof ex2)
console.log(typeof ex3)

