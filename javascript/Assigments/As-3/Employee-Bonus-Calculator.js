"use strict";

// Q2: Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (const employee of employees) {
  try {
    if (!employee || !employee.name || employee.salary === undefined ||
        employee.years === undefined) {
      throw new Error("Missing employee property");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
      throw new Error("Salary or years is not a valid non-negative number");
    }

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;
    console.log(
      `${employee.name}: Salary = ₹${salary.toFixed(2)}, Experience = ${years} years, ` +
      `Bonus = ₹${bonus.toFixed(2)} (${bonusRate * 100}%)`
    );
  } catch (error) {
    console.log(`Employee error: ${error.message}`);
  }
}

// "use strict" prevents accidental assignments to undeclared variables.
