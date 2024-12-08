let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumberArray = numberArray.filter( (num) => {
    return num%2 === 0;
})
console.log(evenNumberArray);