// Q2: Array par callback se operation apply karna

// numbers array ke har element par operation (callback) apply karta hai
function applyOperation(numbers, operation) {
  const result = [];
  for (const number of numbers) {
    result.push(operation(number)); // callback har number par chalta hai
  }
  return result;
}

// Callback 1: number ko double karta hai
const doubleNumber = (num) => num * 2;

// Callback 2: number ka square karta hai
const squareNumber = (num) => num * num;

const numbers = [1, 2, 3, 4];

console.log("Original:", numbers);
console.log("Doubled :", applyOperation(numbers, doubleNumber)); // [2, 4, 6, 8]
console.log("Squared :", applyOperation(numbers, squareNumber)); // [1, 4, 9, 16]