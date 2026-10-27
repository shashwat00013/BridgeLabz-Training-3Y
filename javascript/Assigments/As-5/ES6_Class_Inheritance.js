// Q9: Person -> Student: prototype version vs ES6 class version

// ================= Version 1: Prototype (Q5 wala) =================
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
StudentProto.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

// ================= Version 2: ES6 Classes =================
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(`Name: ${this.name}`);
  }
}

// extends se inheritance, super() se parent constructor call hota hai
class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name); // parent constructor (this use karne se pehle super() zaroori hai)
    this.branch = branch;
  }
  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
  printDetails() {
    this.printName();   // parent ka method
    this.printBranch(); // apna method
  }
}

// ================= Dono ko compare karna =================
const protoStudent = new StudentProto("Shashwat", "Computer Science");
const classStudent = new StudentClass("Shashwat", "Computer Science");

console.log("--- Prototype version ---");
protoStudent.printDetails();

console.log("\n--- ES6 class version ---");
classStudent.printDetails();

console.log("\n--- Comparison ---");
// Dono ke objects ki properties same hain
console.log("Same own properties?",
  JSON.stringify(protoStudent) === JSON.stringify(classStudent)); // true

// Dono mein instanceof same kaam karta hai
console.log("Proto instanceof Person :", protoStudent instanceof PersonProto); // true
console.log("Class instanceof Person :", classStudent instanceof PersonClass); // true

// Dono mein methods prototype par rakhe hote hain, object par nahi
console.log("Proto: printBranch own property?", protoStudent.hasOwnProperty("printBranch")); // false
console.log("Class: printBranch own property?", classStudent.hasOwnProperty("printBranch")); // false

// Prototype chain dono ki same shape ki hai
console.log("Proto chain OK?",
  Object.getPrototypeOf(StudentProto.prototype) === PersonProto.prototype); // true
console.log("Class chain OK?",
  Object.getPrototypeOf(StudentClass.prototype) === PersonClass.prototype); // true

// Note: ES6 class asal mein prototype inheritance ka hi cleaner syntax hai (syntactic sugar)