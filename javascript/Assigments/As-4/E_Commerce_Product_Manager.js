// Q1: E-Commerce Product Manager

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Discount apply karta hai (percent mein)
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // Formatted string return karta hai
  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Headphones", 2499, "Electronics"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Keyboard", 1500, "Accessories"),
];

console.log("--- All Products ---");
products.forEach((p) => console.log(p.getDetails()));

// 10% discount ek product par
products[0].applyDiscount(10);
console.log("\n--- Laptop after 10% discount ---");
console.log(products[0].getDetails());

// price > 1000 wale products (filter)
const expensiveProducts = products.filter((p) => p.price > 1000);
console.log("\n--- Products with price > 1000 ---");
expensiveProducts.forEach((p) => console.log(p.getDetails()));