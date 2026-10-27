// Q7: Closure example: makeMultiplier

// Outer function: multiplier leta hai aur ek naya function return karta hai
function makeMultiplier(multiplier) {
  // Ye inner function return hota hai
  return function (number) {
    return number * multiplier; // 'multiplier' bahar wale function ka variable hai
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5));  // 15
console.log(double(5));  // 10
console.log(triple(10)); // 30

/*
Closure kaise kaam karta hai:
- makeMultiplier(3) chalke khatam ho jaata hai, normally uska variable 'multiplier' memory se hat jaana chahiye.
- Lekin return hua inner function us variable ko use kar raha hai, isliye JavaScript use yaad rakhta hai.
- Inner function + uske bahar ke variables ka ye "yaad rakhne wala" combination hi closure hai.
- triple ke paas multiplier = 3 alag se saved hai aur double ke paas multiplier = 2 alag se.
  Dono ek dusre ko affect nahi karte, kyunki har call ka apna alag scope (closure) banta hai.
*/