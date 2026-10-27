// Q8. Employee Salary Projection

 // Initial salary and annual increment rate
let currentSalary = 40000;
let incrementRate = 10;

// Store yearly salary information
let salaryReport = [];

// Calculate salary for five years
for (let year = 1; year <= 5; year++) {
    currentSalary *= (1 + incrementRate / 100);

    // Round salary to the nearest rupee
    currentSalary = Math.round(currentSalary);

    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });
}

// Display the salary projection
console.table(salaryReport);
