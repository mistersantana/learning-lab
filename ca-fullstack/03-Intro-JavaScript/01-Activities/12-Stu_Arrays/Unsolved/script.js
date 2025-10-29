// WRITE YOUR CODE HERE

let favoriteMovies = [
  "The Matrix",
  "Pulp Fiction",
  "The Departed",
  "The Notebook"
]

console.log(favoriteMovies);

favoriteMovies[1] = "The Terminator";
console.log(`My second favorite movie is ${favoriteMovies[1]}.`);

console.log(`I have ${favoriteMovies.length} favorite movies.`);

favoriteMovies.pop();
console.log(`${favoriteMovies[-1]}`);

favoriteMovies.push("The Dark Knight");
console.log(`${favoriteMovies[-1]}`);

