//OBJECTS
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


//NO COLON
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


//UPDATING PROPERTIES
const apple4 = {
  name: "Apple",
  radius: 2,
  color: "red",
};

apple.numSeeds = 3; //new propery
apple.color = "green" //update property
// {"name":"Apple", "radius":2, "color":"green", "numSeeds":3,}

