## Functions
- Block of code that performs a specific task, can be invoked whenever needed
- Argument : While passing the value (passing Actual value)
- Parameter : Function variable (Catching the values)
- Function parameters like local variables of function having block scope
* In JS, We can pass the funtion as a parameter & also return 
```js
// Definition of a function
function msgFunction(msg){ // Parameter
    console.log(msg);
}
// Calling a function
msgFunction("I Love JavaScript"); // Argument
```
## Arrow Functions
- Compact way of writing a function
```js
// Without parameter
const printHello = () => {
    console.log("Hello");
}

// With parameter
const functionName = (param1,..) => {
    // Some Statement
}
```
## forEach Loop
- CallbackFunction : Here, it is a function to execute for each element in the array
- A callback is a function passed as an argument to another function.
- It has 3 parameter such as value, index, & array.
- It is only used for arrays not fo string
```js
array.forEach ( (value, index, array) => {
    console.log(value, index, array);
})
```
## Q. What is mean by Higher Order Function/Method ?
- Either take another function as parameter inside them or they return function as their output 
- Those function passed as an argument to another function.
- Those function return function as a value
- Eg. forEach Loop

## Some More Array Methods
1. map()
- Creates a new array with the results of some operatopn. The value its callback returns are used to form new array
```js
let arr = [1, 2, 3, 4, 5];
let newArray = arr.map( (val) => {
    return val*2;
});
// OUT-PUT : 2, 2, 6, 8, 10
```
2. filter()
- Creates a new array of elements that give true for a condition/filter.
- Eg. All even elements.
```js
let arr = [1, 2, 3, 4, 5];
let newArray = arr.filter( (val) => {
    return val%2 === 0;
})
// OUT-PUT : 2, 4
```
3. reduce()
- Performs some operations & reduces the array to a single value. It returns that single value.
```js

```