//Q3. Monthly Expense Tracker
 // Monthly expenses for five categories
let expenses = [5000, 2000, 10000, 1500, 1000];

let total = 0;

// Calculate total expenses
for (let expense of expenses) {
    total += expense;
}

// Calculate average and add 10% tax
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display results with two decimal places
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);
