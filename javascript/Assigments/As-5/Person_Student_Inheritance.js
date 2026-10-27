// Q5: Person -> Student inheritance (prototype se)

// Parent constructor
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
  Person.call(this, name); // parent constructor ko call kiya taaki name set ho jaye
  this.branch = branch;
}

// Student.prototype ko Person.prototype se link kiya (inheritance)
Student.prototype = Object.create(Person.prototype);
// Object.create se constructor property badal jaati hai, isliye wapas set ki
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// Name aur branch dono print karne wala method
Student.prototype.printDetails = function () {
  this.printName();   // Person.prototype se mila hua method
  this.printBranch(); // Student.prototype ka apna method
};

const student1 = new Student("Shashwat", "Computer Science");
student1.printDetails();

// Prototype chain demo
console.log("\n--- Prototype chain ---");
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
console.log(Object.getPrototypeOf(student1) === Student.prototype); // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
// Chain: student1 -> Student.prototype -> Person.prototype -> Object.prototype -> null