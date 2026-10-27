// Q9. Random Math Quiz Generator

 // Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

let answer;

// Calculate the correct answer using switch
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = num1 / num2;
        break;
}

// Format division answers to two decimal places
if (operator === "/") {
    answer = answer.toFixed(2);
}

// Display the question and answer
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct Answer: ${answer}`);
