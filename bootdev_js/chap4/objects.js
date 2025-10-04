// OBJECTS
/*
  JavaScript objects are a versatile collection type. Object literals
  (POJOs, or "plain old JS objects") are often used to store data in
  key-value pairs.
*/
const apple = {
  name: "Apple",
  radius: 2,
  color: "red",
};

console.log(apple.name); //prints "Apple"
console.log(apple.radius); //prints "2"
console.log(apple.color); //prints "red"


// NO COLON
/*
  The key:value syntax is the normal way to create key-value pairs in an
  object, but if you want the key to have the same name as an existing
  variable, you can omit the colon and the value.
*/
const radius1 = 2;
const color1 = "red";
const apple1 = {
  radius1: radius,
  color: color,
};

const radius2 = 2;
const color2 = "red";
const apple3 = {
  radius, //same as radius: radius
  color //same as color: color
};


// UPDATING PROPERTIES
const apple4 = {
  name: "Apple",
  radius: 2,
  color: "red",
};

apple.numSeeds = 3; //new property
apple.color = "green" //update property
// {"name":"Apple", "radius":2, "color":"green", "numSeeds":3,}


// NESTING PROPERTIES
/*
  objects can contain other objects.
*/
const tournament = {
  referee: {
    name: "Sally",
    age: 25,
  }, prize: {
      units: "dollars",
      value: 100,
    },
};

console.log(tournament.referee.name); //Sally
console.log(tournament.prize.value); //100


// OPTIONAL CHAINING
/*
  When using the normal . operator, if the object on the left of the . is
  null or undefined, you'll get a TypeError at runtime. JS has an operator
  to make dealing with this headache easier, the optional chaining
  operator: ?.
*/
const h = tournament.referee.height; //TypeError
const h1 = tournament.referee?.height; //h is undefined, no error


// OBJECT METHODS
/*
  JS Objects can have methods. Objects in JS play the role of dictionaries
  AND classes in other languages.

  Methods are functions that are defined on an object. They access and modify
  properties of the object. In the context of an object method, the "this"
  keyword refers to the object itself.
*/
const person = {
  firstName: "Elvis",
  lastName: "Santana",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName()); //Elvis Santana


// METHODS MUTATE
/*
  Methods can change the properties of their objects.
*/
const tree = {
  height: 256,
  color: "green",
  cut() {
    this.height /= 2;
  },
};

tree.cut();
console.log(tree.height); //prints 128

tree.cut();
console.log(tree.height); //prints 64


// INITIALIZING PROPS
/*
  If a property (key) doesn't exist when we try to access with . operator,
  we'll get undefined. One way to check for this is by using the !(not)
  operator because undefined is "falsy"
*/
const balances = {
  lane: 100,
  breanna: 150,
  john: 200,
};

//if bob doesn't have a balance yet, create a new prop for him, set to 0
if (!balances.bob) {
  balances.bob = 0;
};


// STRINGS AS KEYS
/*
  
*/
const desk = {
  wood: "maple",
  width: 100,
};

console.log(desk.wood); //prints "maple"
console.log(desk["wood"]); //prints "maple"

const key = "wood";
console.log(desk[key]); //prints "maple"

//examples
function getLastName(users, firstName) {
  return users[firstName];
};

function getProviderCount(provider, counts) {
  return counts[provider] || 0;
};


// THIS
/*
  The 'this' keyword is perhaps one of the most rage-inducing parts of JS.
*/


// ARROW FUNCTIONS
//declaring a function w/o a variable
function add(x, y) {
  return x + y;
};

//declaring a function with a variable
const add1 = function add(x, y) {
  return x + y;
};

//using the fat arrow syntax
const add2 = (x, y) => {
  return x + y;
};

/*
  Differences:
  - fat arrow functions are always declared as variables - usually const,
  while the function keyword may or may not be declared as a variable
  - fat arrow functions handle object scoping in a more intuitive way
  - fat arrow functions don't work as constructors
*/


// FAT ARROWS AND THIS
/*
  One reason to choose an arrow function over a regular function or method
  is to preserve the this context. It's particularly useful when working
  with objects.
*/
const author = {
  firstName: "Lane",
  lastName: "Wagner",
  getName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(author.getName()); //prints: "Lane Wagner"
/*
  With the fat-arrow function, the this keyword refers to the same
  context as its parent. In essence, fat arrow functions "preserve" this
  context.
*/
const authors = {
  firstName: "Lane",
  lastName: "Wagner",
  getName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(authors.getName());
/*
  prints: undefined undefined
  because 'this' still refers to the global object and 'firstName' and
  'lastName' are not defined globally
*/
/*
  Developers working in some front-end (yuck) JavaScript frameworks
  (like React or Vue) tend to use fat arrow functions often.
  The this context can contain a ton of component-wide state, and it needs
  to be preserved throughout nested function calls, so fat arrows make
  the code easier to read and write.
*/

//assignment
const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    this.sentMessages++;
  },
};


// SPREAD SYNTAX
/*
  The spread syntax shallow-copies properties of the object that's spreading
  wide. If properties have the same name, the last (right-most) object's
  property will overwrite the previous ones.
*/
const engineering_dept = {
  lane: "grand magus",
  hunter: "software engineer",
  allan: "software engineer",
  matt: "software engineer",
  dan: "software engineer",
  waseem: "software engineer",
};

const video_dept = {
  stass: "video producer",
  alex: "video producer",
};

const all_employees = { ...engineering_dept, ...video_dept };
/*{
  lane: 'grand magus',
  hunter: 'software engineer',
  allan: 'software engineer',
  matt: 'software engineer',
  dan: 'software engineer',
  waseem: 'software engineer',
  stass: 'video producer',
  alex: 'video producer'
}*/

const engineering_depts = {
  lane: "cringe youtuber",
  hunter: "software engineer",
};

const video_depts = {
  lane: "cringe youtuber",
  alex: "video producer",
};

const all_employeess = { ...engineering_dept, ... video_depts };
/*{
  lane: 'cringe youtuber',
  hunter: 'software engineer',
  alex: 'video producer'
}*/


// RETURN OBJECTS
/*
  In JavaScript, you can only return a single value from a function.
  So, when you want to return multiple values, you just return an object
  that contains those values.
*/
function doAllTheMaths(x, y) {
  const sum = x + y;
  const difference = x - y;
  const product = x * y;
  const quotient = x / y;
  return {
    sum,
    difference,
    product,
    quotient,
  };
}

const results = doAllTheMaths(10, 5);
console.log(results.sum); //15
console.log(results.difference); //5
console.log(results.product); //50
console.log(results.quotient); //2

//assignment
function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return {openRate, clickRate, conversionRate,};
};


// DESTRUCTURING
/*
  It's admittedly annoying to have to get the return values from an object
  by using the . operator. The destructuring assigment lets us unpack object
  properties easily.
*/

//so, instead of this:
const apple5 = {
  radius: 2,
  color: "red",
};
const radius3 = apple.radius;
const color3 = apple.color;

//we can do this:
const apple6 = {
  radius: 2,
  color: "red",
};
const { radius, color } = apple;

//example:
function getApple() {
  const apple = {
    radius: 2,
    color: "red",
  };
  return apple;
};

/*
  Destructuring also works in function parameters, which means that if you
  write a function that takes an object as an argument, you can unpack the
  object's properties in the function definition.
*/

//example:
function eatApple({ radius, color }) {
  console.log(`ate a ${color} apple with a radius of ${radius}`);
};

//assignment
function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return {
    openRate,
    clickRate,
    conversionRate,
  };
}

// don't touch above this line

const { openRate, clickRate, conversionRate, } =
  calculateCampaignMetrics(1000, 800, 200);

// don't touch below this line

console.log(`Open Rate:       ${openRate}`);
console.log(`Click Rate:      ${clickRate}`);
console.log(`Conversion Rate: ${conversionRate}`);


// NOT BOUND
/*
  Methods in JS are not bound by their object by default. So if you use a
  method as a "callback" function, you may run into issues with the this
  keyword.
*/
const user = {
  name: "Lane",
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

user.sayHi();
//Hi, my name is Lane

const sayHi = user.sayHi;
sayHi(); //TypeError: Cannot read properties of undefined (reading 'name')

/*
This happens a lot when passing a method as a callback function to
another function.
*/
const user = {
  firstName: "Lane",
  lastName: "Wagner",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function getGreeting(introduction, nameCallback) {
  return `${introduction}, ${nameCallback()}`;
}

console.log(user.getFullName()); //Lane Wagner
console.log(getGreeting("Hello", user.getFullName));
// TypeError: Cannot read properties of undefined (reading 'firstName')

/*
  If you want to use a method as a callback function, you'll need to bind
  it to the object using the bind method:
*/
const boundGetFullName = user.getFullName.bind(user);
console.log(getGreeting("Hello", boundGetFullName));
