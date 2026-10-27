// Q7: Promise.allSettled() se multiple modules load karna

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

async function loadDashboard() {
  const startTime = Date.now(); // loading shuru hone ka time

  const moduleNames = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];

  // Random ek module choose kiya jo reject hoga (0, 1 ya 2)
  const failingIndex = Math.floor(Math.random() * loaders.length);

  // Chuna hua module apna delay poora karke phir reject hota hai
  const promises = loaders.map((loader, index) => {
    if (index === failingIndex) {
      return loader().then(() => {
        throw new Error(`${moduleNames[index]} failed to load`);
      });
    }
    return loader();
  });

  // allSettled kabhi reject nahi hota: sab ke khatam hone ka wait karta hai
  // aur har promise ka status ({status, value/reason}) deta hai
  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ ${moduleNames[index]}: ${result.value}`);
    } else {
      console.log(`❌ ${moduleNames[index]}: ${result.reason.message}`);
    }
  });

  const endTime = Date.now(); // loading khatam hone ka time
  console.log(`\nTotal time taken: ${endTime - startTime} ms`);
  // Total time ~2000ms hoga, kyunki teeno parallel chalte hain
  // aur sabse slow module (Profile, 2s) ka wait hota hai
}

loadDashboard();