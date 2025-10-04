// FUNCTIONS
//function declaration
function getSum(a, b) {
  return a + b;
}

//function call
const result = getSum(60, 9);
console.log(result); //69

//assignment
function concat(str1, str2) {
  return str1 + str2;
}

console.log(concat("Elvis, ", "happy birthday!"));
console.log(concat("Noami, ", "can you call me?"));
console.log(concat("Juliette, ", "where did you go?"));


//FUNCTION HOISTING
console.log(getLabel(3)); //prints 'awful'

function getLabel(numStars) {
  if (numStars > 7) {
    return "great";
  } else if (numStars > 3) {
    return "okay";
  } else {
    return "awful";
  }
}


// UNIT TESTS
function getMonthlyPrice(tier) {
  switch(tier) {
    case "basic" :
      return 10000;
    case "premium" :
      return 15000;
    case "enterprise" :
      return 50000;
    default :
      return 0;
  }
}

console.log(getMonthlyPrice("premium"));


//MULTIPLE RETURN VALUES
//simple functions
function add (x, y) {
  return x + y;
}

function mul (x, y) {
  return x * y;
}

//aggregate function
function aggregate (a, b, c, arithmetic) {
  const firstResult = arithmetic (a, b);
  const secondResult = arithmetic (firstResult, c);
  return secondResult;
}

function main() {
  const sum = aggregate(2, 3, 4, add); //sum is 9
  const product = aggregate(2, 3, 4, mul); //product is 14
}


// SCOPE
/*
Global Scope:
- variables declared globally have the highest level of scope
  and can be accessed from anywhere in your code.
- in browsers, globals variables are properties of the "window" object.
  For example: window.myGlobalVar = 'hello world'
- in Node.js global variables are properties of the "global" object.
  For example: global.myGlobalVar = 'hello world'
*/
/*
Modular Scope:
- ES modules (both Node.js and modern browsers), variables declared at the
  top level of a module are scoped to the module.
- In the browser, using <script type="module"> creates a module scope for
  that script
*/
/*
Function Scope:
- Variables declared with var (we try to avoid this) are limited to the
  function scope. They are accessible only within that function and any
  nested functions.
*/
/*
Block Scope:
- ES6 introduced block scope with the let and const keywords. A block is
  typically defined by curly braces {}, like in if statements, loops and
  other blocks of code.
- Variables declared with let and const are confined to their block,
  making them more predictable and reducing chances of accidental variable
  hoisting.
*/


// ANONYMOUS FUNCTIONS
/*
  Anonymous functions have no name. They're useful when defining a
  function that will only be used once or to create a quick closure.
*/

//Let's say we have a function "conversions" that accepts another
//function, "converter" as input:
function conversions(converter, x, y, z) {
  const convertedX = converter(x);
  const convertedY = converter(y);
  const convertedZ = converter(z);
  console.log(convertedX, convertedY, convertedZ);
}

//using a named function
function double(a) {
  return a + a;
}

conversions(double, 1, 2, 3); //2 4 6

//using an anonymous function
conversions(
  function (a) {
    return a + a;
  },
  1,
  2,
  3
); //2 4 6

// assignment
function printReports(intro, body, outro) {
  printCostReport(
    function (intro){
      return intro.length * 2;
    },
    intro
  );
  printCostReport(
    function (body){
      return body.length * 3;
    },
    body
  );
  printCostReport(
    function (outro){
      return outro.length * 4;
    },
    outro
  );
}

function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);


//DEFAULT PARAMETERS
function getGreeting(email, name = "there") {
  console.log(`Hello ${name},
    welcome! You've registered your email: ${email}`);
}

getGreeting("elvis@email.com", "Elvis");
//Hello Elvis, welcome! You've registered your email: elvis@email.com

getGreeting("elvis@email.com");
//Hello there, welcome! You've registered your email: elvis@email.com


//PASSING BY VALUE
/*
  Variables in JS are passed by value (except for Objects and Arrays, they
  are passed by reference). "Pass by value" means when the variable is
  passed into a function, that function receives a copy of the variable.
  The function cannot mutate the caller's original data.
*/
let x = 5;
increment(x);
console.log(x); // 5

function increment (x) {
  x++;
  console.log(x); // 6
}


//IMMEDIATE INVOCATION
/*
  You can immediately invoke a function after defining it using "IIFE"
  (Immediately Invoked Function Expression).
*/
/*
  Scope: it has its own scope
  Expression: can conveniently compute a value as a single expression
  Async: can be used to quickly run code in an async function
*/
(function () {
  console.log("JavaScript: at least it's not Java.");
})(); //JavaScript: at least it's not Java.

const results = (function (a, b) {
  return a + b;  
})(1 + 2);
console.log(results); // 3

//assignment
const total = (function (numMessages, bytesPerMessage) {
  return numMessages * bytesPerMessage;
})(100, 24);

console.log("Total message cost:", total);
