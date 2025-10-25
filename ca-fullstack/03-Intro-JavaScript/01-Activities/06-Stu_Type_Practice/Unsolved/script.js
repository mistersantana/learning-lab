// Imagine this is part of a user profile system for a web app.

const userID = 64;
const userPIN = "656302";
const isVerified = false;
const accountStatus = null;
let userScore = 64.55;
let greetingMessage = "Howdy!";
let lastLogin;

// 🧠 Insert comments to explain what each console.log() below will log to the console
console.log(typeof userID);
console.log(typeof userPIN);
console.log(typeof isVerified);
console.log(typeof accountStatus);
console.log(typeof userScore);
console.log(typeof greetingMessage);
console.log(typeof lastLogin);

// ⏩ Variables can be reassigned to hold different types
userScore = "Hello!";
greetingMessage = false;
lastLogin = 23;

// 🧠 Insert comments again to predict the output after reassignment
console.log(typeof userScore);
console.log(typeof greetingMessage);
console.log(typeof lastLogin);
