// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount * 0.9; // 10% discount
//         case 2:
//             return totalAmount * 0.75; // 25% discount
//         case 3:
//             return totalAmount * 0.65; // 35% discount
//         case 4:
//             return totalAmount * 0.5; // 50% discount
//         case 5:
//             return 0; // Everything for free
//         default:
//             return "Invalid lucky number";
//     }
// }
// // Terms
// // Harry Potter
// // Hermione
// // Granger
// // Ron Weasley. ...
// // Hufflepuff
// // Ravenclaw
// // Slytherin
// // Gryffindor
//
let pickNumber = prompt("Pick a number 1-4")
let chooseColor = prompt('Choose a color')
let chooseObject = prompt('Choose an object')
let chooseCreature = prompt("Choose a creature")
let chooseHobby = prompt("Choose a hobby")


function pickNumber(number){
    switch (pickNumber){
        case isNaN(number):
            return "Invalid Number"
        case (number == 1):
            return "Harry Potter"
        case (number == 2):
            return "Hermione"
        case (number == 3):
            return "Granger"
        case (number == 4):
            return "Ron Weasley"

    }

}
alert(pickNumber(3))
console.log(pickNumber(3)
)

// function convertGrade(grade){
//     let letterGrade;
//     if(grade >= 90){
//         letterGrade = 'A';
//     } else if (grade < 80);{
//         letterGrade = 'B';
//     } else if (grade < 70);{
//         letterGrade = 'C';
//     } else if (grade < 60);{
//         letterGrade = 'D';
//     }

//     return;
// }