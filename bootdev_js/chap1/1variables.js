// BASIC TYPES
var smsSendingLimit;
var hasPermission;
var username;
var nothing;

var isTall = true;
var isCool = false;

var name = "Elvis"

var age = 35;

var weight = 196.7;

var brainSize = undefined;


// LET AND CONST
let mySkillIssues = 42;
const mySkillTssues = 42;

mySkillIssues = 43;


// NUMBERS IN JS
let x = 2; // this is a number
x = 5.69; // this is also a number
x = -5.42; // yup, still a number

let sum = 2 + 3 + 7; // 12
let difference = 5.3 - 2.1; // 3.2
let product = 2 * 3; // 6
let quotient = 6 / 2 // 3


// INCREMENT AND DECREMENT
let bootdevCourseRating = 4;
bootdevCourseRating++;
console.log(bootdevCourseRating); // 5

bootdevCourseRating += 5;
console.log(bootdevCourseRating); // 10

bootdevCourseRating = 11;
bootdevCourseRating--;
console.log(bootdevCourseRating); // 10

bootdevCourseRating -= 5;
console.log(bootdevCourseRating); // 5


// UNDEFINED AND UNDECLARED
let favoriteSandersonCharacter; // undefined
console.log(typeof favoriteSandersonCharacter); // undefined

//console.log(favoriteRothfussCharacter); // undeclared

//const unfavoriteSandersonCharacter;
const unfavoriteSandersonCharacter = undefined;


// NULL VS UNDEFINED
let myName;
console.log(myName); // undefined

let unName = null;
console.log(unName); // null

console.log(typeof null); // object


// DYNAMIC AND WEAK
let answerToLife = 42;
let answerToTheUniverse = "42";

const answerToEverything = answerToLife + answerToTheUniverse;

console.log (answerToEverything); // "4242"


// SAME LINE DECLARATION
let miles = 80276, org = "Tesla";

//let miles = 80276;
//let org = "Tesla";


// STRING
const greeting = "Hello";
greeting[0]; // 'H'
greeting[1]; // 'E'
greeting[2]; // 'L'
greeting[3]; // 'L'
greeting[4]; // 'O'
// you can also get the last char at length-1
greeting[greeting.length - 1]; // 'O'


// TEMPLATE LITERALS
const shadeOfRed = 101;
console.log(`The shade is ${shadeOfRed}`); // The shade is 101

