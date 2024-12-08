// Print the square of each value

let numArray = [3, 6, 9, 2, 5, 7];
console.log(numArray);

console.log("Square of numbers");
numArray.forEach( (num) => {
    console.log( num*num );
})

// Print the Cube of each value.
console.log("Cube of numbers");
let calCube = (num) => {
    console.log( num*num*num );
}
numArray.forEach(calCube);