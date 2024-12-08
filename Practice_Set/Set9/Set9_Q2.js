let n = prompt("Enter the count : ");

let arr = [];
for(let idx=0; idx<n; idx++){
    arr[idx] = idx+1;
}
console.log("Arrays :", arr);

// Sum of an array
const sum = arr.reduce( (result, current) => {
    return result + current;
})
console.log("Sum of an array : ", sum);

// Product of all the numbers
const factorial = arr.reduce( (result, current) => {
    return result * current;
})
console.log("Product of an array : ", factorial);