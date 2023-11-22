// const bankTransactions = [ /* ... */ ];

function showMenu() {
    console.log('1. Check account balance');
    console.log('2. Total of all debits');
    console.log('3. Total of all credits');
    console.log('4. Get all transactions for a date');
    console.log('5. Exit');
}

function handleOption(userChoice) {
    switch (userChoice) {
        case '1':
            // check account balance
            break;
        case '2':
            // total of debits
            break;
        case '3':
            // total of credits
            break;
        case '4':
            // Date of the transaction
            const userDate = prompt('Enter a date (YYYY-MM-DD):');
            // Implement logic to get transactions for the given date
            break;
        case '5':
            console.log('Exiting program. Goodbye!');
            break;
        default:
            console.log('Invalid option. Please enter a valid option (1-5).');
    }
}

let userOption;
do {
    showMenu();
    userOption = prompt('Enter your choice (1-5):');
    handleOption(userOption);
} while (userOption !== '5');

const bankTransactions = [
    { id: 1, date: '2023-01-01', description: 'Deposit', amount: 1000.00, type: 'credit' },
    { id: 2, date: '2023-01-05', description: 'Grocery shopping', amount: -50.00, type: 'debit' },
    { id: 3, date: '2023-01-10', description: 'ATM withdrawal', amount: -100.00, type: 'debit' },
    { id: 4, date: '2023-01-15', description: 'Paycheck', amount: 2000.00, type: 'credit' },
    { id: 5, date: '2023-01-20', description: 'Utilities bill', amount: -150.00, type: 'debit' },
    { id: 6, date: '2023-01-25', description: 'Dinner out', amount: -30.00, type: 'debit' },
    { id: 7, date: '2023-02-01', description: 'Deposit', amount: 500.00, type: 'credit' },
    { id: 8, date: '2023-02-05', description: 'Gasoline', amount: -40.00, type: 'debit' },
    { id: 9, date: '2023-02-10', description: 'ATM withdrawal', amount: -80.00, type: 'debit' },
    { id: 10, date: '2023-02-15', description: 'Paycheck', amount: 2200.00, type: 'credit' },
    { id: 11, date: '2023-02-20', description: 'Rent payment', amount: -800.00, type: 'debit' },
    { id: 12, date: '2023-02-25', description: 'Shopping spree', amount: -120.00, type: 'debit' },
    { id: 13, date: '2023-03-01', description: 'Deposit', amount: 700.00, type: 'credit' },
    { id: 14, date: '2023-03-05', description: 'Medical expenses', amount: -75.00, type: 'debit' },
    { id: 15, date: '2023-03-10', description: 'ATM withdrawal', amount: -60.00, type: 'debit' },
    { id: 16, date: '2023-03-15', description: 'Paycheck', amount: 1800.00, type: 'credit' },
    { id: 17, date: '2023-03-20', description: 'Subscription renewal', amount: -10.00, type: 'debit' },
    { id: 18, date: '2023-03-25', description: 'Lunch with friends', amount: -25.00, type: 'debit' },
    { id: 19, date: '2023-04-01', description: 'Deposit', amount: 1200.00, type: 'credit' },
    { id: 20, date: '2023-04-05', description: 'Electronics purchase', amount: -200.00, type: 'debit' },
];