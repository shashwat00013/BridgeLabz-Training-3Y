
"use strict";

// Given number
let x = 16.75;

// Perform mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary using template literals
console.log(`
===== Math Utility Dashboard =====
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${powerValue}
Random Number (10-50): ${randomNumber}
=================================
`);
