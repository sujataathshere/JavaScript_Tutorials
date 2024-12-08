## Functions
- Block of code that performs a specific task, can be invoked whenever needed
- Argument : While passing the value (passing Actual value)
- Parameter : Function variable (Catching the values)
- Function parameters like local variables of function having block scope
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