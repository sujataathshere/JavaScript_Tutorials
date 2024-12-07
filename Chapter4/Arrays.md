## Arrays
- It is a collections of items
- Values stored in a linear fashion
- In array we can directly change the values bt in string we can not change directly
- Arrays are mutable
```js
// Array Creation
let heroes = ["Ironman", "Hulk","Batman", "Shaktiman", "Antman"];

// Array Indices
let firstHero = heros[0];
let secondHero = heros[2];

// Iterate the arrays
let cities = ["Delhi", "Pune", "Mumbai", "Banglore", "Chennai", "Hydrabad", "Gurgaon"];
for(let city of cities){
    console.log(city);
}
```
## Array Methods
1. push() - to add item at the end
2. pop() - to delete item from end & return
3. toString() - to converts array to string
4. concat() - to joins multiple arrays & returns result
5. unshift() - to add at the start
6. shift() - to delete from start & return
7. slice() 
- to returns a piece of the array
- Sometimes it is used for array copy
8. splice() 
- to change original array(add, remove, replace)
- used to add, delete, replace the element
- it acts likes slice() method, when we pass single idx. eg. arr.splice(4) - from 4th idx it will delete the remaining array