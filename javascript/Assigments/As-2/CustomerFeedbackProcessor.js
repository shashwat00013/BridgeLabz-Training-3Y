
"use strict";

// Customer feedback
let feedback =
    "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for case-insensitive checking
let lowerFeedback = feedback.toLowerCase();

// Split feedback into words
let words = lowerFeedback.split(/\s+/);

// Check for negative words
let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

// Display feedback report
console.log("===== Customer Feedback Report =====");
console.log("Feedback:", feedback);
console.log("Word Count:", words.length);

if (!containsBad && !containsPoor) {
    console.log("Result: Positive Feedback");
} else {
    console.log("Result: Needs Improvement");
}

console.log("====================================");
