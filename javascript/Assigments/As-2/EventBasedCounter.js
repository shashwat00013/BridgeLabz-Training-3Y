
"use strict";

// Counter variable
let count = 0;

// Increase counter
function increment() {
    count++;
    console.log("After increment:", count);

    // Nested function accesses the outer function's scope
    function showCount() {
        console.log("Nested function count:", count);
    }

    showCount();
}

// Decrease counter
function decrement() {
    count--;
    console.log("After decrement:", count);
}

// Simulate click events manually
console.log("Initial Count:", count);

increment();
increment();
decrement();
increment();
decrement();
