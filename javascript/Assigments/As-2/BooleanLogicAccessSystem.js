
"use strict";

// Security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check security
function checkSecurity() {
    // All conditions must be true
    let isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    // Use OR and NOT to identify unsafe conditions
    let isUnsafe =
        !isAlarmOn ||
        !isDoorLocked ||
        !isWindowClosed ||
        !isOwnerInside;

    console.log("\nDoor Locked:", isDoorLocked);
    console.log("Window Closed:", isWindowClosed);
    console.log("Alarm On:", isAlarmOn);
    console.log("Owner Inside:", isOwnerInside);

    if (isSecure && !isUnsafe) {
        console.log("Status: Secure");
    } else {
        console.log("Status: Unsafe");
    }
}

// Test 1: All conditions satisfied
console.log("Test 1:");
checkSecurity();

// Test 2: Alarm switched off
isAlarmOn = false;
console.log("\nTest 2:");
checkSecurity();

// Test 3: Alarm on, but window open
isAlarmOn = true;
isWindowClosed = false;
console.log("\nTest 3:");
checkSecurity();
