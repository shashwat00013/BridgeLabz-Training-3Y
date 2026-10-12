// Q7. Smart Guessing Game

 // Generate a random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
let userGuess = 25;

console.log(`Your Guess: ${userGuess}`);
console.log(`Secret Number: ${secretNumber}`);

// Check the guess using nested if conditions
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (userGuess >= secretNumber - 3 &&
        userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
