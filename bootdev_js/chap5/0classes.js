// CLASSES

/*
  Classes in JS are a template for creating objects. Classes are not
  necessary but useful all the same.
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const user = new User("Lane", 100);

/*
- the class declaration creates a new class
- the constructor method is called when a new class is create
- the new keyword calls the constructor method and creates a new instance
 of the class
*/

//assignment
class Message {
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
  }
}


// PRIVATE PROPERTIES

/*
  By default, all properties of a class are public. meaning they can be
  accessed and modified from outside the class.
*/

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
}

