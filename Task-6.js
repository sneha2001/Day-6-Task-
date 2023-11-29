//1.Class - Movie
//a) 
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const exampleMovie = new Movie("The Matrix", "Warner Bros.", "R");
console.log(exampleMovie.title); // Output: The Matrix
console.log(exampleMovie.studio); // Output: Warner Bros.
console.log(exampleMovie.rating); // Output: R
//b)
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie1 = new Movie("Inception", "Warner Bros");
console.log(movie1.title); // Output: Inception
console.log(movie1.studio); // Output: Warner Bros
console.log(movie1.rating); // Output: PG

var movie2 = new Movie("The Dark Knight", "Warner Bros", "PG-13");
console.log(movie2.title); // Output: The Dark Knight
console.log(movie2.studio); // Output: Warner Bros
console.log(movie2.rating); // Output: PG-13
//c)
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
function getPG(movies) {
  // Filter movies with a rating of "PG"
  const pgMovies = movies.filter(movie => movie.rating === "PG");
  
  return pgMovies;
}
// Example usage:
const movies = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "R"),
  new Movie("Movie3", "Studio3", "PG"),
  new Movie("Movie4", "Studio4", "PG-13"),
];

const pgMovies = getPG(movies);
console.log(pgMovies);
//D)
// Define the Movie class
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// Create an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Print or use the instance as needed
console.log(casinoRoyale);













//3. Person class to hold all details.
class person {
    constructor(name,age, gender,qualification, designation){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.designation = designation;
    }
    getname(){
        return `My name is ${this.name}`;
    }
    getage(){
        return `I am in my age of ${this.age}`;
    }
    getgender(){
        return `I identify as a ${this.gender}`;
    }
    getqualification(){
        return `I completed my ${this.qualification}`;
    }
    getdesignation(){
        return `I am ${this.designation}`;
    }
}
var p1 = new person("Sneha harigharun.", 22, "Female.", "Diploma in printing technology.", "Full stack developer.");
console.log(p1.getname(), p1.getage(), p1.getgender(), p1.getqualification(), p1.getdesignation());
