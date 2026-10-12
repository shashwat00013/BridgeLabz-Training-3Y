// Progressive Discount System

 // Purchase amount
let total = 7500;
let discountPercentage = 0;

// Select discount tier
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price
let discount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discount);

// Display the results
console.log(`Original Total: ₹${total}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${Math.round(discount)}`);
console.log(`Final Price: ₹${finalPrice}`);
