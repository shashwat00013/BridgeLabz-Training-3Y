// Q4: Promise.all() aur Promise.race()

// Ek server ka response simulate karta hai (delay ke baad resolve, kabhi kabhi fail)
function deployToServer(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Math.random() se 15% failure
      if (Math.random() < 0.15) {
        reject(new Error(`${serverName} failed to respond`));
      } else {
        resolve(`${serverName} responded in ${delayMs / 1000}s`);
      }
    }, delayMs);
  });
}

// Promises ek hi baar banaye, dono combinators inhi par kaam karenge
const serverA = deployToServer("Server A", 2000); // 2 seconds
const serverB = deployToServer("Server B", 3000); // 3 seconds

// Promise.all: saare servers complete hone ka wait karta hai (ek bhi fail to reject)
Promise.all([serverA, serverB])
  .then((results) => {
    console.log(results);
    console.log("Deployment completed for all servers");
  })
  .catch((error) => console.log("Promise.all failed:", error.message));

// Promise.race: jo sabse pehle settle ho (resolve ya reject) usi ka result
Promise.race([serverA, serverB])
  .then((fastest) => console.log("Fastest response:", fastest))
  .catch((error) => console.log("Promise.race failed:", error.message));