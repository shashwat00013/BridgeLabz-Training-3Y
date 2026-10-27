"use strict";

// Q8: Strict Mode Showdown
// In strict mode, duplicate parameter names are a SyntaxError, so this original
// function cannot be declared:
// function demo(a, a) { total = 10; delete total; }

// Without strict mode in a classic non-module script, duplicate parameters may be
// allowed, and assigning total may create a global variable. Deleting an identifier
// such as delete total is still invalid syntax in modern JavaScript.

// Correct ES6 version:
function demo(first, second) {
  const total = first + second;
  console.log(`First = ${first}, Second = ${second}, Total = ${total}`);
  return total;
}

demo(5, 10);

// "use strict" also prevents implicit global assignments and makes many silent
// failures throw errors. Modules are strict by default.
