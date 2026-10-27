"use strict";

// Q4: Debugging Mystery
function showMessage() {
  // greeting = "Welcome"; // ReferenceError: undeclared variable in strict mode
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Scope explanation:
// const declares greeting inside showMessage's local scope.
// Watch variable: greeting
// VS Code debug: set a breakpoint on console.log, press F5, inspect Locals/Watch.
// Call stack: showMessage -> program/script entry.
