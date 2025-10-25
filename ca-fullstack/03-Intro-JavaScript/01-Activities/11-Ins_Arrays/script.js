// 🏀 Team Roster Example
// So far, we've been storing a single piece of data in each variable.
const playerName = "Avery";
const playerScore = 23;
const isCaptain = true;

// 🧱 To store multiple values together, we can use an array.
const teamRoster = ["Avery", "Jordan", "Taylor", "Morgan"];

// 🧾 Logging the entire array
console.log(teamRoster); // ["Avery", "Jordan", "Taylor", "Morgan"]

// 🎯 Accessing a single value by index (arrays are zero-indexed)
console.log(teamRoster[1]); // "Jordan"
console.log(teamRoster[0]); // "Avery"

// 🔄 Using an index to update a value
console.log(teamRoster[3]); // "Morgan"

// Replace the fourth player with a new name
teamRoster[3] = "Riley";

// Logs "The fourth player is Riley."
console.log(`The fourth player is ${teamRoster[3]}.`);

// 🧮 Using the array's length property to get how many players are on the team
console.log(`The team has ${teamRoster.length} players.`);
