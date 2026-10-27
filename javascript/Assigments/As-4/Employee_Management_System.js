// Q6: Employee Management System

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Annual salary = monthly * 12
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Bonus: salary ko percent se badhata hai
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "Engineering", 60000),
  new Employee(2, "Neha", "HR", 45000),
  new Employee(3, "Rahul", "Sales", 40000),
  new Employee(4, "Priya", "Marketing", 50000),
  new Employee(5, "Karan", "Engineering", 75000),
];

console.log("--- Annual Salary of each employee ---");
employees.forEach((emp) => {
  console.log(`${emp.name} (${emp.department}): ₹${emp.getAnnualSalary()}`);
});

// Total annual payout (reduce)
const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nTotal Annual Payout: ₹${totalPayout}`);

// Bonus example
employees[0].applyBonus(10);
console.log(`\nAmit ki salary after 10% bonus: ₹${employees[0].salary}`);
console.log(`Naya total payout: ₹${employees.reduce((t, e) => t + e.getAnnualSalary(), 0)}`);