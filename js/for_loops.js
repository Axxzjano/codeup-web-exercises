// showMultiplicationTable
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
// call the function
showMultiplicationTable(7);

// 10 random numbers between 20 and 200
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (181) + 20); // Generates a random number between 20 and 200
    console.log(`${randomNumber} is ${randomNumber % 2 === 0 ? 'even' : 'odd'}`);
}

// loops for the patterns
for (let i = 1; i <= 9; i++) {
    let output = '';
    for (let bacon = 1; bacon <= i; bacon++) {
        output += i;
    }
    console.log(output);
}



// Counting down from 100 to 5 with a step of 5
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}