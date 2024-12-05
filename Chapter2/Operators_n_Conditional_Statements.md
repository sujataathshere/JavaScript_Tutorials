## Comments
- Part of code which is not executed
```js
// This is a single line comment
/* This is a muti-line comment */ 
```

## Operators
- Used to perform some operation on data

## Binary Operators
1. Arithmetic Operators (+, - , *, /)
```js
let a = 5;
let b = 2;

console.log(a+b); // 7
console.log(a-b); // 3
console.log(a*b); // 10
console.log(a/b); // 2.5
```
2. Modulus
```js
console.log(a%b); // 1
```
3. Exponentiation
```js
console.log(a**b); // 5^2 = 25
```
## Unary Operators
1. Pre Increment
```js
console.log(++a); // 5->6
```
2. Post Increment
```js
console.log(a++); // 5->5
```
3. Pre Decrement
```js
console.log(--b); // 2->1
```
4. Post Decrement
```js
console.log(b--); // 2->2
```
## Assignment operators
- An assignment operator assigns a value to its left operand based on the value of its right operand.
```js
let a = 5;
let b = 2;

console.log("a += a : ",a += a); // 10
console.log("b *= b : ",b *= b); // 4
console.log("a -= a : ",a -= a); // 0
console.log("b /= b : ",b /= b); // 1
```
## Comparison operators
- A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
1. Equal to == : Check only values
2. Not equal to != : Check only values
3. Equal to & type === : Check values & data types also
4. Not equal to & type !== : Check values & data types also
5. Greater than >
6. Less than <
7. Greater than equal to >=
8. Less than equal to <=
```js
let a = 5;
let b = "5";

console.log(5 == "5", a==b);
console.log(5 != "5", a!=b);
console.log(5 === "5", a===b);
console.log(5 !== "5", a!==b);
```
## Logical operators
- Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. 
1. Logical AND &&
2. Logical OR ||
3. Logical NOT !
```js
let a = 5;
let b = 6;

console.log(5&&6, a&&b);
console.log(5||6, a||b);
console.log(!false, !(a>b));
```
## Conditional Statements
1. If Statement
- To implement some condition in the code
```js
if(condition){
    // Some Statement
}
```
2. If-Else Statement