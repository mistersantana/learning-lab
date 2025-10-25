// Imagine this is part of a user profile system for a web app.
const userID = 64;
const userPIN = "656302";
const isVerified = false;
const accountStatus = null;
let userScore = 64.55;
let greetingMessage = "Howdy!";
let lastLogin;

// 🧠 Insert comments to explain what each console.log() below will log to the console
console.log(typeof userID);  // this is a number
console.log(typeof userPIN);  // this is a string
console.log(typeof isVerified);  // this is a boolean
console.log(typeof accountStatus);  // this is null
console.log(typeof userScore);  // this is a number/float/double
console.log(typeof greetingMessage);  // this is a string
console.log(typeof lastLogin);  // this is undefined

// ⏩ Variables can be reassigned to hold different types
userScore = "Hello!";
greetingMessage = false;
lastLogin = 23;

// 🧠 Insert comments again to predict the output after reassignment
console.log(typeof userScore);  // changed to a string
console.log(typeof greetingMessage);  // changed to a boolean
console.log(typeof lastLogin);  // defined as a boolean
