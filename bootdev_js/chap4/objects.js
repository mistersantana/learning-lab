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
const radius = 2;
const color = "red";
const apple1 = {
  radius: radius,
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
const h = tournament.referee?.height; //h is undefined, no error


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

