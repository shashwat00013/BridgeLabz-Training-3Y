//Q1. Personalized Login Greeting
 // Store the user's name and current hour
let userName = "Shashwat";
let currentHour = new Date().getHours();

// Display greeting based on current time
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
