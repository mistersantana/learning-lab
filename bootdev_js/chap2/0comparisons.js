// CONDITIONALS
// if (height > 4) {
//   console.log("You are tall enough!");
// }

// if (height > 6) {
//   console.log("You are super tall!");
// } else if (height > 4) {
//   console.log("You are tall enough!");
// } else {
//   console.log("You are not tall enough!");
// }

// COMMON OPERATORS
// === equal to
// !== not equal to
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to


// COMPARISON OPERATORS
5 < 6; // evaluates to true
5 > 6; // evaluates to false
5 >= 6; // evaluates to false
5 <= 6; // evaluates to true

// strict equality operators
5 === 6; // evaluates to false
5 !== 6; // evaluates to true

// normal equality operators
5 == 6; // evaluates to false
5 == "5"; // evaluates to true

5 != 6; // evaluates to true
5 != "5"; // evaluates to false


// LOGICAL OPERATORS
// && (and) - returns true if both conditions are true
// || (or) - returns true if either of the conditions are true
// ! (not) - returns true only if the input is false

true && true; // true
true && false; // false
true || false; // true
false || false; // false
!false; // true
!true; // false


// SWITCH
const os = "mac";
let creator;

switch (os) {
  case "linux":
    creator = "Linus Torvalds";
    break;
  case "windows":
    creator = "Bill Gates";
    break;
  case "mac":
    creator = "Steve Jobs";
    break;
  default:
    creator = "Unknown";
    break;
}

console.log(creator);


// TERNARY OPERATOR
const price = isMember ? "$2.00" : "$10.00";
//If isMember is true, evaluate to $2.00, otherwise evaluate to $10.00

let prices;
if (isMembers) {
  price = "$2.00";
} else {
  price = "$10.00";
}

// WHEN TO TERNARY
// example of bad
const vehicleName = isTruck
  ? "truck"
  : isCar
    ? "car"
    : isScooter
      ?"scooter"
      :"vehicle";

//example of good
let vehiclesName = "vehicle";
if (isTruck) {
  vehiclesName = "truck";
} else if (isCar) {
  vehiclesName = "car";
} else if (isScooter) {
  vehiclesName = "scooter";
}

//example in a function
function getVehicleName (isTruck, isCar, isScooter) {
  if (isTruck) {
    return "truck";
  }
  if (isCar) {
    return "car";
  }
  if (isScooter) {
    return "scooter";
  }
  return "vehicle";
}


//TRUTHY AND FALSY
if ("hello") {
  console.log("hello is truthy");
}
if (42) {
  console.log("42 is truthy");
}

if (0) {
  console.log("0 is falsy");
}
if (null) {
  console.log("null is falsy");
}
if (undefined) {
  console.log("undefined is falsy")
}

//common truthy values:
// True
// 42 (any number that isn't 0)
// "hello" (any non-empty string)
// [] (an empty array)
// {} (an empty object)
// function () {} (an empty function)

//common falsy values:
// false
// 0
// "" (an empty string)
// null
//NaN (not a number)


//NULLISH COALESCING
let myName = null;
console.log(myName ?? "Anonymous"); //"Anonymous"

myName = "Elvis";
console.log(myName ?? "Anonymous"); // "Elvis"
