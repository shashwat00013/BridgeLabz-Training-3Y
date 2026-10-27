// Q10: Food Delivery Async Pipeline

// 1 se 2 second ka random delay
function getRandomDelay() {
  return 1000 + Math.random() * 1000;
}


function simulateStep(successMessage, failureMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(failureMessage));
      } else {
        resolve(successMessage);
      }
    }, getRandomDelay());
  });
}

// Har step ek Promise return karta hai
const takeOrder = () => simulateStep("Order taken", "Order could not be taken");
const prepare = () => simulateStep("Food prepared", "Kitchen failed to prepare food");
const pack = () => simulateStep("Package ready", "Packing failed");
const dispatch = () => simulateStep("Out for delivery", "No delivery partner available");
const deliver = () => simulateStep("Delivery completed!", "Delivery failed");

async function runPipeline() {
  console.log("Start Pipeline");
  try {

    console.log(`Step 1: ${await takeOrder()}`);
    console.log(`Step 2: ${await prepare()}`);
    console.log(`Step 3: ${await pack()}`);
    console.log(`Step 4: ${await dispatch()}`);
    console.log(await deliver());
  } catch (error) {
    // Kisi bhi step ka reject yahan aakar pakda jaata hai, aage ke steps nahi chalte
    console.log("Pipeline failed!");
    console.log("Reason:", error.message);
  }
}

runPipeline();

console.log("(runPipeline start ho gaya, baaki kaam background mein chal raha hai)");
