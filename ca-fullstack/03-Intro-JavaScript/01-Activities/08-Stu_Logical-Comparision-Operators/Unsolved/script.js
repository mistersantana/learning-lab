// 💰 Imagine this code helps compare your spending and savings.

const budgetGoal = "500";   // String version (e.g., from user input)
const currentSavings = 500; // Number version
const totalIncome = 1000;
const remainder = totalIncome % currentSavings;
const halfIncome = totalIncome / 2;

// === Evaluates to TRUE
const isHalfGoalMet = (currentSavings === halfIncome);

// < Evaluates to TRUE
const isHalfLessThanRemainder = (halfIncome < remainder);

// 🧮 Use comparison operators so all expressions below log to the console as true

// Strict equality (===) returns FALSE; loose equality (==) returns TRUE
console.log(budgetGoal == currentSavings); // TRUE

// Both values are the number 500 and strictly equal
console.log(currentSavings === halfIncome); // TRUE

// totalIncome is greater than currentSavings → TRUE
console.log(totalIncome > currentSavings); // TRUE

// remainder is less than 1 → TRUE
console.log(remainder < 1); // TRUE

// ⚙️ Use logical operators so all expressions below log to the console as true

// Use || (OR) → true if either expression is TRUE
console.log(isHalfGoalMet || isHalfLessThanRemainder); // TRUE

// Use ! (NOT) and && (AND) → true when both conditions are TRUE
console.log(isHalfGoalMet && !isHalfLessThanRemainder); // TRUE

// Remove (!) from one to keep at least one true expression
console.log(isHalfGoalMet || isHalfLessThanRemainder); // TRUE
