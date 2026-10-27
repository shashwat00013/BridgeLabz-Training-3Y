
"use strict";

// Create an array containing numbers 1 to 30
let numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Store classification results
let results = [];

for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(number + " - FizzBuzz");
    } else if (number % 2 === 0) {
        results.push(number + " - Even");
    } else {
        results.push(number + " - Odd");
    }
}

// Display all results
console.log("===== Odd-Even Number Analyzer =====");

for (let result of results) {
    console.log(result);
}

console.log("Total Numbers:", results.length);
console.log("====================================");
