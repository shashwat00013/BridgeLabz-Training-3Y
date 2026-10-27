"use strict";

// Q10: Nested Hoisting and Closures
function outer() {
  console.log(count); // undefined: outer's var declaration is hoisted
  var count = 5;

  function inner() {
    console.log(count); // undefined: inner has its own hoisted local count
    var count = 10;
  }

  inner();
  console.log("Outer count:", count);
}

outer();

// Expected output:
// undefined
// undefined
// Outer count: 5
//
// Each function call has its own execution context. inner's local var count shadows
// outer's count, so the first inner log is undefined.
//
// Arrow-function comparison:
function outerWithArrow() {
  const count = 5;

  const inner = () => {
    // No local count is declared here, so the arrow reads count from outer scope.
    console.log("Arrow sees outer count:", count);
  };

  inner();
}

outerWithArrow();

// Debug tip: break at both console.log statements. The Call Stack shows inner
// above outer; expand Local/Closure scopes to see each function's variables.
