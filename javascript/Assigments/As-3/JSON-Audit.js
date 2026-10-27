"use strict";

// Q9: JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  try {
    const parsed = JSON.parse(rawData[i]);

    if (parsed.user === undefined || parsed.age === undefined) {
      throw new Error("Missing required key: user or age");
    }

    const age = Number(parsed.age);
    if (!Number.isFinite(age) || age < 0) {
      throw new Error("Age must be a valid non-negative number");
    }

    const cleanedUser = { ...parsed, age };
    cleanData.push(cleanedUser);

    if (age < 18) {
      under18Users.push(cleanedUser);
    }

    console.log(`Line ${lineNumber}: VALID`);
  } catch (error) {
    errors.push({ line: lineNumber, message: error.message });
    console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    // A thrown error skips the rest of this try block and enters catch.
  }
}

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Users under 18:", under18Users);
console.log(`Valid rows: ${cleanData.length}; Invalid rows: ${errors.length}`);

// Debug tip: breakpoint on JSON.parse and inside catch to observe control flow.
