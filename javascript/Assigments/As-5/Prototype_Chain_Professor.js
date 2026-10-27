// Q6: Prototype chain: Person -> Faculty -> Professor

// ---------- Level 1: Person ----------
function Person(name) {
  this.name = name; // Person ki apni property
}
Person.prototype.introduce = function () { // Person ka apna method
  console.log(`Hi, I am ${this.name}`);
};

// ---------- Level 2: Faculty (Person se inherit) ----------
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department; // Faculty ki apni property
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () { // Faculty ka apna method
  console.log(`Department: ${this.department}`);
};

// ---------- Level 3: Professor (Faculty se inherit) ----------
function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea; // Professor ki apni property
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () { // Professor ka apna method
  console.log(`Research Area: ${this.researchArea}`);
};

// ---------- Demo ----------
const professor1 = new Professor("Dr. Sharma", "CEA", "Machine Learning");

// Professor object chain ke upar ke saare methods use kar sakta hai
professor1.introduce();       // Person se mila
professor1.showDepartment();  // Faculty se mila
professor1.showResearch();    // Professor ka apna

console.log("\n--- Chain check ---");
console.log(professor1 instanceof Professor); // true
console.log(professor1 instanceof Faculty);   // true
console.log(professor1 instanceof Person);    // true
// Chain: professor1 -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype -> null