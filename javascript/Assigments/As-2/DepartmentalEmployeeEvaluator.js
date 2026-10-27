
"use strict";

// Department names and their performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department
console.log("===== Department Performance Report =====");

for (let department of departments) {
    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    console.log(
        "Department:", departmentName,
        "| Score:", score,
        "| Performance:", performance
    );
}

console.log("==========================================");
