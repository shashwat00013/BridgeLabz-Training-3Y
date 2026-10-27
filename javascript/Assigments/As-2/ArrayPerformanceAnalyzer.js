
"use strict";

// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Find highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Count students who passed (score >= 50)
let passedStudents = scores.filter(score => score >= 50);

// Use map() to create a result for every student
let studentResults = scores.map((score, index) => {
    return `Student ${index + 1}: ${score}`;
});

// Display summary
console.log("===== Student Performance Report =====");
console.log("Scores:", scores);
console.log("Student Details:", studentResults);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Passed Students:", passedStudents.length);
console.log("Failed Students:", scores.length - passedStudents.length);
console.log("======================================");
