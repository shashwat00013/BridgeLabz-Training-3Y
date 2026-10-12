//Q2. Multi-Type Data Summary
 // Declare variables of different data types
let userName = "Shashwat";
let age = 20;
let isStudent = true;
let subjects = ["Java", "JavaScript", "DBMS"];
let user = { name: "Shashwat", city: "Mathura" };
let address = null;
let phoneNumber;

// Create a formatted report
let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: user, Type: typeof user },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Phone Number", Value: undefined, Type: typeof phoneNumber }
];

// Print the report in one table
console.table(report);
