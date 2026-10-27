"use strict";

// Q7: Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unknown operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, first, second) {
  switch (operation) {
    case "add":
      return first + second;
    case "divide":
      if (second === 0) throw new Error("Cannot divide by zero");
      return first / second;
    case "power":
      return first ** second;
    case "root":
      if (first < 0) throw new Error("Cannot calculate the real square root of a negative number");
      return Math.sqrt(first);
    case "subtract":
      return first - second;
    default:
      throw new InvalidOperationError(operation);
  }
}

console.log("=== Smart Calculator Summary ===");
for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation}: ${num1} and ${num2} => ${result}`);
  } catch (error) {
    console.log(`${operation}: ERROR - ${error.name}: ${error.message}`);
  }
}

// Bonus invalid-operation demonstration:
try {
  calculate("multiply", num1, num2);
} catch (error) {
  console.log(`multiply: ERROR - ${error.name}: ${error.message}`);
}
