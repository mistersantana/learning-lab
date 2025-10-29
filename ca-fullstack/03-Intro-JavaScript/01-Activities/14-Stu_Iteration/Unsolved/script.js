// 💻 Create an array of at least 5 items (customize this list)
let foods = ['steak', 'lasagna', 'burgers', 'chips', 'tacos'];

// 1) Log the array length
console.log(foods);

// 2) Use a classic for loop (include the item number)
for(let i = 0; i < foods.length; i++){
  console.log(`${foods[i]} is my favorite food right now.`);
}

// 3) Use a for...of loop (no index required)
for(let food of foods) {
  console.log(`This food is: ${food}`);
}
