let foodItems = ["Chocolate", "Apple", "Paneer", "Kurkure", "Samosa"];
console.log(foodItems);

// Push
foodItems.push("Laddu");
foodItems.push("Pizza");
foodItems.push("Bread Patis");
foodItems.push("Cold Cofee");
console.log(foodItems);

// Pop
let deletedItem = foodItems.pop();
console.log("Deleted", deletedItem);

// Tostring
console.log("Array in string form : ", foodItems.toString());

// Concat
let marvelHeroes = ["Thor", "Spiderman", "Ironman"];
let dcHeroes = ["Superman", "Batman"];
let indianHeroes = ["Shaktiman", "Krish"];

let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// Unshift
let animal = ["Cow", "Dog", "Horse", "Donkey", "Snake"];
console.log(animal);
animal.unshift("Bull");
console.log(animal);

// Shift
let deletedAnimal = animal.shift();
console.log("Deleted",deletedAnimal);

// Slice
let students = ["Mona", "Sona", "Harsha", "Rups", "Vish", "Renu"];
console.log(students);
console.log("Slice of array : ",students.slice(3,7));

// Splice
let marks = [10, 20, 30, 40, 50, 60, 70];
console.log(marks);
// Add element
marks.splice(2, 0, 80, 90);
console.log(marks);
// Delete element
marks.splice(5, 2);
console.log(marks);
// Replace element
marks.splice(4, 1, 100);
console.log(marks);