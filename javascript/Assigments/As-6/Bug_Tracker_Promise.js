// Q3: Callback se Promise migration

// ---------- Original (callback wala) ----------
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// ---------- Promise-based version ----------
// simulateFailure = true karne par API failure simulate hota hai
function getBugs(simulateFailure) {
  return new Promise((resolve, reject) => {
    // Purana fetchBugs hi andar use kiya, bas callback ko resolve/reject se badal diya
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API failure: bugs fetch nahi ho paye"));
      } else {
        resolve(bugs);
      }
    });
  });
}

// Boolean se control: true = failure, false = success
// Isse random banane ke liye: const isApiDown = Math.random() < 0.3;
const isApiDown = false;

getBugs(isApiDown)
  .then((bugs) => {
    // console.table ko objects ka array dena table ko neat banata hai
    const bugTable = bugs.map((bug, index) => ({ id: index + 1, bug }));
    console.table(bugTable);
  })
  .catch((error) => console.log("Error:", error.message));

// Failure dekhne ke liye upar isApiDown = true kar do