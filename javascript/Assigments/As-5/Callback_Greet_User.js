// Q1: Callback function demo

// Ye callback hai: greetUser ke kaam khatam hone ke baad chalega
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser pehle greeting print karta hai, phir callback ko call karta hai
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // callback yahan execute hota hai
}

// Callback flow:
// 1. greetUser("Shashwat", showEndMessage) call hota hai
// 2. "Hello Shashwat" print hota hai
// 3. callback() se showEndMessage chalta hai
// 4. "Welcome to the course!" print hota hai
console.log("--- Flow start ---");
greetUser("Shashwat", showEndMessage); // yahan showEndMessage ko () ke bina pass karte hain
console.log("--- Flow end ---");