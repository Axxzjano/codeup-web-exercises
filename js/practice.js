 'use strict'
// // // // function calculateTotal(luckyNumber, totalAmount) {
// // // //     switch (luckyNumber) {
// // // //         case 0:
// // // //             return totalAmount;
// // // //         case 1:
// // // //             return totalAmount * 0.9; // 10% discount
// // // //         case 2:
// // // //             return totalAmount * 0.75; // 25% discount
// // // //         case 3:
// // // //             return totalAmount * 0.65; // 35% discount
// // // //         case 4:
// // // //             return totalAmount * 0.5; // 50% discount
// // // //         case 5:
// // // //             return 0; // Everything for free
// // // //         default:
// // // //             return "Invalid lucky number";
// // // //     }
// // // // }
// // // // // Terms
// // // // // Harry Potter
// // // // // Hermione
// // // // // Granger
// // // // // Ron Weasley. ...
// // // // // Hufflepuff
// // // // // Ravenclaw
// // // // // Slytherin
// // // // // Gryffindor
// // // //
// // // // let pickNumber = prompt("Pick a number 1-4")
// // // // let chooseColor = prompt('Choose a color')
// // // // let chooseObject = prompt('Choose an object')
// // // // let chooseCreature = prompt("Choose a creature")
// // // // let chooseHobby = prompt("Choose a hobby")
// // // //
// // // //
// // // // function pickNumber(number){
// // // //     switch (pickNumber){
// // // //         case isNaN(number):
// // // //             return "Invalid Number"
// // // //         case (number == 1):
// // // //             return "Harry Potter"
// // // //         case (number == 2):
// // // //             return "Hermione"
// // // //         case (number == 3):
// // // //             return "Granger"
// // // //         case (number == 4):
// // // //             return "Ron Weasley"
// // // //
// // // //     }
// // // //
// // // // }
// // // // alert(pickNumber(3))
// // // // let hp=(pickNumber(3)
// // // // )
// // // // console.log(hp);
// // //
// // //
// // // // for (i = 20; i <= 100; i++) {
// // // //     // body
// // // // }
// // //
// // // // let chooseNumber = prompt("Pick a number 1-4");
// // // // let chooseColor = prompt('Choose a color');
// // // // let chooseObject = prompt('Choose an object');
// // // // let chooseCreature = prompt("Choose a creature");
// // // // let chooseHobby = prompt("Choose a hobby");
// // // //
// // // // function pickNumber() {
// // // //     switch (Number(number)) {
// // // //         case 1:
// // // //             return "Harry Potter";
// // // //         case 2:
// // // //             return "Hermione";
// // // //         case 3:
// // // //             return "Granger";
// // // //         case 4:
// // // //             return "Ron Weasley";
// // // //         default:
// // // //             return "Invalid Number";
// // // //     }
// // // // }
// // // //
// // // // let hp = pickNumber(3);
// // // // alert(hp);
// // // // console.log(hp);
// // // //
// // // // for (let i = 100; i >= 5; i-=5){
// // // //     console.log(i)
// // // // }
// // //
// // //
// // //
// // // // let chooseNumber = prompt("Pick a number 1-4");
// // // // let chooseColor = prompt('Choose a color');
// // // // let chooseObject = prompt('Choose an object');
// // // // let chooseCreature = prompt("Choose a creature");
// // // // let chooseHobby = prompt("Choose a hobby");
// // //
// // // // function pickNumber(number) {
// // // //     switch (Number(number)) {
// // // //         case 1:
// // // //             return "Harry Potter";
// // // //         case 2:
// // // //             return "Hermione";
// // // //         case 3:
// // // //             return "Granger";
// // // //         case 4:
// // // //             return "Ron Weasley";
// // // //         default:
// // // //             return "Invalid Number";
// // // //     }
// // // // }
// // // //
// // // // let chosenCharacter = pickNumber(chooseNumber);
// // // // alert(`You picked ${chosenCharacter}.`);
// // // // console.log(chosenCharacter);
// // // for (let i = 0; i<10; i++){
// // //     console.log("this is i: " + i)
// // //     for (let j=0; j<10; j++){
// // //         console.log("this is j: " + j)
// // //     }
// // // }
// //
// //
// // // function hello(){
// // //     return console.log("Hello World");
// // // }
// // //
// // // hello();
// //
// // // function sum(num1, num2){
// // //     return(num1 + num2)
// // // }
// // //
// // // console.log(sum(3,4))
// //
// //
// // // function evenOrOdd(number){
// // //     if(number %2 == 0){
// // //         return true
// // //     }
// // //     else{
// // //         return false
// // //     }
// // // }
// // //
// // // console.log(evenOrOdd(3))
// //
// // function helloName(name){
// //     return (`Hello ${name}!`)
// // }
// //
// // console.log(helloName('Kumar'))
// //
// // function sum(num1, num2){
// //     return (num1+num2)
// // }
// //
// // console.log(sum(1, 3))
// //
// // function square(number){
// //     return Math.sqrt(number).toFixed(2)
// // }
// //
// // console.log(square(78))
// //
// // function evenOrOdd(number){
// //     if (number %2 == 0){
// //         return true
// //     }else{
// //         return false
// //     }
// // }
// //
// // console.log(evenOrOdd(2))
// //
// // // let userTemp=prompt("Enter the temperature outside:");
// // // let temp = parseFloat(userTemp)
// // // function weather(temp){
// // //     if (temp < 0){
// // //         return "It's cold!"
// // //     }if (temp >= 0 && temp <= 20 ){
// // //         return "It's warm!"
// // //     }if (temp > 20){
// // //         return "It's hot!"
// // //     }
// // // }
// // //
// // // console.log(weather(temp))
// //
// //
//
//
// // let userNumber=prompt("Type a number:")
// // let num=parseFloat(userNumber)
// //
// // for (let i = num; i > 0 ; i--) {
// //     console.log(i)
// // }
//
// // let names=[3, 2, 1, 4]
// //
// // function calculateTotal(teamNumber){
// //     let total = 0
// //     for (let number of teamNumber) {
// //          total += number;
// //     }
// //     return total;
// // }
// //
// // console.log(calculateTotal(names))
//
// // let powerLevelsArray=[15,12,13,21,12,32]
// //
// // function calculatePowerLevels(level){
// //     let total= 0
// //     for (let levelElement of level) {
// //         total += levelElement;
// //     }
// //     return total;
// // }
// //
// // console.log(calculatePowerLevels(powerLevelsArray))
//
//
// // let powerLevels=[35, 45, 65, 75, 80]
// // function calculateTotalPowerLevel(power){
// //     let total= 0
// //     for (let powerElement of power) {
// //         total += powerElement
// //     }return total;
// // }
// //
// // console.log(calculateTotalPowerLevel(powerLevels))
//
// // let hero ={
// //     name: "Spiderman",
// //     age: 35,
// //     height:"5'10",
// //     bio: function(){
// //         console.log(hero.name, hero.age,hero.height)
// //     }
// // }
// //
// // hero.bio()
//
//
// function info(name,age,job){
//     return{
//         name:name,
//         age:age,
//         job:job,
//         intro: function(){
//             return `Hello, my name is ${this.name} I am ${this.age} years old and I am a ${this.job}!`;
//         }
//     }
// }
// let bioIntro = info("Axxzjavon", 27, 'Java Developer');
// console.log(bioIntro.intro())
//
// // function greeting(name, time){
// //     return `Good ${time}, ${name}!`;
// // }
// //
// // console.log(greeting("John", "morning"));
// // function answer(base, exponent){
// //     return base**exponent;
// // }
// //
// // console.log(answer(2, 4));
//
// function positiveOrNegative(num){
//     if (num %2===0){
//         return "Positive!"
//     }else {
//         return "Negative!";
//     }
// }
//
// console.log(positiveOrNegative(7))
//
//
// 1. Write a JavaScript function that reverses a number.
//     Example x = 32243;
// Expected Output : 34223

 function reversedNumber(num){
    num = num + '';
    return num.split('').reverse().join('');
 }

 console.log(Number(reversedNumber(987654321)));

 function palindrome(str) {
     return true;
 }
 palindrome("eye");
 console.log()

