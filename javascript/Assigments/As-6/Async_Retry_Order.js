// Q8: Retry mechanism

// 50% chance par fail hone wala order API
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject(new Error("Network error"));
      }
    }, 500);
  });
}

const MAX_ATTEMPTS = 3;

async function processOrder() {
  // Loop + await se maximum 3 baar try karte hain
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed successfully"; // success par loop yahin ruk jaata hai
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
      // fail hua to loop agle attempt par chala jaayega
    }
  }
  // Teeno attempts fail hone par yahan pahunchte hain
  throw new Error("Order could not be processed");
}

// Final failure ko gracefully handle karna
async function main() {
  try {
    const message = await processOrder();
    console.log(message);
  } catch (error) {
    console.log("Final result:", error.message);
  }
}

main();