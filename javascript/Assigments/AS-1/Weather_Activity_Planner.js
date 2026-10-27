// Q5. Weather Activity Planner

 // Weather details
let temperature = 28;
let isRaining = false;
let windSpeed = 10;

// Recommend an activity based on weather
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining && and || operators
if ((temperature > 35 && !isRaining) || windSpeed > 40) {
    console.log("Weather requires extra caution.");
}
