// Q3: Arrow function vs normal function (this ka behaviour)

// ---------- Galat version: arrow function ----------
const userWithArrow = {
  name: "Shashwat",
  // Arrow function ka apna 'this' nahi hota.
  // Wo 'this' apne bahar wale (lexical) scope se leta hai.
  showName: () => {
    console.log("Arrow function:", this.name);
  },
};

userWithArrow.showName(); // undefined

/*
Explanation: this.name undefined kyun aaya?
- Arrow function object ke 'this' ko bind nahi karta.
- Ye 'this' wahi leta hai jo uske bahar (file ke top level) par hai.
- Node.js mein file ke top level par 'this' = module.exports (ek khaali object {}),
  us par 'name' property nahi hai, isliye undefined aata hai.
- Browser mein 'this' = window hota hai, aur window.name by default "" (empty) hota hai,
  isliye wahan empty string dikhegi. Dono cases mein user.name nahi milta.
*/

// ---------- Sahi version: normal function ----------
const userWithNormal = {
  name: "Shashwat",
  // Normal function mein 'this' us object ko point karta hai jisne method call kiya
  showName: function () {
    console.log("Normal function:", this.name);
  },
};

userWithNormal.showName(); // Shashwat (kyunki userWithNormal.showName() call hua, to this = userWithNormal)
