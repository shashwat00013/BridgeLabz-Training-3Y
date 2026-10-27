
"use strict";

// Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", salary);

    // Change local variable
    isPermanent = false;

    console.log("\nAfter changing isPermanent:");

    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", salary);

    // Demonstrate global variable scope
    console.log("Global Bonus:", bonus);
}

// Call the function
calculateSalary();

// Global bonus remains unchanged
console.log("Bonus outside function:", bonus);
