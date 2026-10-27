"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Dynamic Data Parser Report ===");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Number.isNaN distinguishes an invalid numeric conversion from valid numbers.
  // The assignment treats whitespace strings as invalid even though Number(" ") is 0.
  const isWhitespace = typeof value === "string" && value.trim() === "";
  const isInvalid = Number.isNaN(numberValue) || isWhitespace ||
                    (typeof value === "string" && value.trim() !== "" &&
                     !Number.isFinite(numberValue));

  console.log(`Item ${i + 1}: ${String(value)}`);
  console.log(`  Number: ${numberValue}, Boolean: ${booleanValue}, String: "${stringValue}"`);

  if (isInvalid) {
    invalidNumbers.push(value);
    console.log("  Status: INVALID NUMBER");
  } else {
    validNumbers.push(numberValue);
    console.log("  Status: VALID NUMBER");
  }
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log(`Valid count: ${validNumbers.length}; Invalid count: ${invalidNumbers.length}`);

// Note: Number(true) is 1, Number(false) is 0, and Number(null) is 0.
