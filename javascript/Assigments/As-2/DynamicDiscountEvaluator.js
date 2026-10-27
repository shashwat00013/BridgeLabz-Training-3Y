
"use strict";

// Shopping cart
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate total cart value before discounts
let subtotal = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

let discountedTotal = 0;

console.log("===== Discount Report =====");
console.log("Original Cart Value: Rs.", subtotal);

// Apply category-specific discounts
for (let product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 10;
    } else if (product.category === "fashion") {
        discountRate = 5;
    }

    let discountAmount = product.price * discountRate / 100;
    let finalPrice = product.price - discountAmount;

    discountedTotal += finalPrice;

    console.log("\nItem:", product.item);
    console.log("Original Price: Rs.", product.price);
    console.log("Discount:", discountRate + "%");
    console.log("Final Price: Rs.", finalPrice);
}

// Apply extra discount if original cart value exceeds Rs. 50,000
if (subtotal > 50000) {
    let extraDiscount = discountedTotal * 5 / 100;
    discountedTotal -= extraDiscount;

    console.log("\nExtra Cart Discount: 5%");
} else {
    console.log("\nExtra Cart Discount: Not Applicable");
}

// Display final amount
console.log("Final Cart Total: Rs.", discountedTotal);
console.log("============================");
