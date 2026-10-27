// Q8: Custom myMap() method, built-in map() jaisa

// Object.defineProperty use kiya taaki myMap enumerable na bane
// (warna for...in loop mein array ke saath ye bhi dikhta)
Object.defineProperty(Array.prototype, "myMap", {
  value: function (callback, thisArg) {
    // callback function hona zaroori hai
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    const result = [];
    for (let index = 0; index < this.length; index++) {
      // Khaali slots (sparse array) skip karte hain, jaise built-in map karta hai
      if (index in this) {
        // Built-in map ki tarah callback ko (element, index, poora array) milta hai
        result[index] = callback.call(thisArg, this[index], index, this);
      }
    }
    return result; // original array change nahi hota, naya array return hota hai
  },
  writable: true,
  configurable: true,
  enumerable: false,
});

// ---------- Demo ----------
const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2));              // [2, 4, 6]
console.log(numbers.myMap((num, i) => `${i}: ${num}`));    // ['0: 1', '1: 2', '2: 3']
console.log(["a", "b"].myMap((s) => s.toUpperCase()));     // ['A', 'B']

// Built-in map se same result?
console.log(
  JSON.stringify(numbers.myMap((n) => n * n)) === JSON.stringify(numbers.map((n) => n * n))
); // true
console.log("Original array:", numbers); // [1, 2, 3] (change nahi hua)