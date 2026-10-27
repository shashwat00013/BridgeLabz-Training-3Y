// Q1: Async Coffee Maker (Promise chaining)

// 1 se 2 second ke beech random delay (milliseconds mein)
function getRandomDelay() {
  return 1000 + Math.random() * 1000;
}

// Math.random() se failure simulate: 20% chance ki step fail ho jaye
function shouldFail() {
  return Math.random() < 0.2;
}

// Step 1: Paani ubalna
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Kettle kharab ho gayi, paani nahi ubla"));
      console.log("Step 1: Water boiled");
      resolve("boiled water");
    }, getRandomDelay());
  });
}

// Step 2: Coffee brew karna
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Coffee beans khatam ho gaye"));
      console.log("Step 2: Coffee brewed");
      resolve("brewed coffee");
    }, getRandomDelay());
  });
}

// Step 3: Cup mein daalna
function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject(new Error("Cup toot gaya"));
      console.log("Step 3: Coffee poured into cup");
      resolve("coffee in cup");
    }, getRandomDelay());
  });
}

console.log("Coffee process started...");

// Promise chaining: ek step khatam hone par hi agla step chalta hai
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => console.log("Coffee ready for the team!"))
  // Chain mein kisi bhi step ka reject yahan aakar pakda jaata hai
  .catch((error) => console.log("Coffee process failed:", error.message));