"use strict";

// Q6: Pyramid Pattern Generator
// Default limit is 5. Change this value to test a different height.
const userInput = ""; // Enter a number as a string, e.g. "4"; blank uses default.
const parsedLimit = userInput.trim() === "" ? 5 : Number(userInput);
const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

console.log(`=== Pyramid Pattern (${limit} rows) ===`);
for (let row = 1; row <= limit; row++) {
  let pattern = "";
  for (let column = 1; column <= row; column++) {
    pattern += "* ";
  }
  console.log(pattern.trimEnd());
}

// var version observation:
// var is function-scoped, while let is block-scoped. Reusing var in nested loops
// can make the same binding visible outside the loop. Strict mode does not forbid var;
// it catches undeclared assignments such as "i = 0" when no declaration exists.

// Debug tip: put breakpoints on both loops and watch row, column, and pattern.
