// Q4: Constructor function + prototype method

// Constructor function: har car object ki apni brand aur model property hogi
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Method prototype par add kiya: memory mein sirf ek copy banti hai,
// aur saare Car objects isse share karte hain
Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails(); // Car: Toyota Fortuner
car2.getDetails(); // Car: Hyundai Creta

// Proof: dono objects ek hi function share kar rahe hain
console.log("Same method shared?", car1.getDetails === car2.getDetails); // true

// getDetails objects ki apni property nahi hai, prototype se aa raha hai
console.log("car1 ki apni property hai getDetails?", car1.hasOwnProperty("getDetails")); // false
console.log("Prototype same hai?", Object.getPrototypeOf(car1) === Car.prototype); // true