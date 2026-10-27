"use strict";

// Q5: Hoisting Lab — corrected version
// Original console.log(score) prints undefined because var is hoisted and initialized
// with undefined. Calling announce works because function declarations are hoisted.
// Accessing let status before its declaration would throw a ReferenceError (TDZ).

var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";

console.log(score);
announce();

function startGame() {
  console.log(status);
}
startGame();

// Arrow functions are not hoisted like function declarations.
// Define the arrow function before calling it.
const announceArrow = () => console.log("Game started using arrow function");
announceArrow();

// Debug tip: breakpoint on each console.log and inspect score/status in Locals.
