// Q4. Academic Performance Evaluator

 // Marks obtained in five subjects
let marks = [85, 90, 78, 88, 92];

let total = 0;
let detained = false;

// Calculate total and check minimum passing marks
for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        detained = true;
    }
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// Evaluate academic performance
if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
