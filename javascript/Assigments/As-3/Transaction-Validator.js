"use strict";

// Q3: Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const transaction = transactions[i];

    if (transaction === null) {
      const error = new Error("Null transaction entry");
      error.name = "NullEntryError";
      throw error;
    }

    if (transaction.id === undefined || transaction.amount === undefined) {
      const error = new Error("Missing transaction id or amount");
      error.name = "MissingPropertyError";
      throw error;
    }

    if (transaction.amount < 0) {
      const error = new Error("Transaction amount cannot be negative");
      error.name = "NegativeAmountError";
      throw error;
    }

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id}: VALID`);
  } catch (error) {
    invalidTransactions.push({
      index: i + 1,
      type: error.name,
      message: error.message
    });
    console.log(`Transaction row ${i + 1}: ${error.name} - ${error.message}`);
    // Debug tip: set a breakpoint on the catch line and inspect i, transaction, error.
  }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);

// VS Code breakpoint: click left of a line number beside "try" or "catch".
