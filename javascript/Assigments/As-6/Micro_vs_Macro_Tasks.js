// Q2: Microtask vs Macrotask

console.log("Start"); // 1) synchronous

// Macrotask: callback task queue mein jaata hai (0ms ke baad bhi)
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: callback microtask queue mein jaata hai
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log"); // 2) synchronous

console.log("End"); // 3) synchronous
