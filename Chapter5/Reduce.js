// Print the sum of an array
let numberArray = [1, 2, 3, 4, 5];
console.log("Array :", numberArray);

const sum = numberArray.reduce((result, current) => {
  return result + current;
});
console.log("Sum of an array", sum);

// Find the largest element from an array
let numArray = [5, 6, 2, 8, 3];
console.log("Array :", numArray);

const maxNum = numArray.reduce( (prev, curr) => {
    let max = prev > curr ? prev : curr;
    return max;
})
console.log("Largest element :", maxNum);