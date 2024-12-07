## Loops
- Loops are used to execute a piece of code again & again

1. For Loop
```js
for(Initialization; Condition; Increment/Dcrement){
    // Some statement
}
```
2. While Loop
```js
Initialization;
while(Condition){
    // Some statement
    Increment/Dcrement;
    // Some statement
}
```
3. Do-While Loop
```js
Initialization;
Do{
    // Some statement
    Increment/Dcrement;
    // Some statement
}while(Condition);
```
4. For-Of Loop
- Used for strings & arrays
```js
for(let value of strVar){
    // Some statement
}
```
5. For-In Loop
- Used for arrays & Objects
```js
for(let key in strVar){
    // Some statement
}
```
## Strings
- String is a sequence of characters used to represent text
- Strings are immutable in javascript
```js
let str = "JavaScript";
```

## Template Literals
- A way to have embedded expressions in strings
```js
let str = `this is a template literal`;
```
- Values calculate at run times
```js
let specialString = `This is a template literal ${1+2+3}`;
console.log(specialString);
```
## String Interpolation
- To create strings by doing substitution of placeholders
```js
let obj = {
    item : "pen",
    price : 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
// OR
console.log("The cost of", obj.item, "is", obj.price, "rupees.");
```
## Escape characters
- Length of escape character is "ONE".
1. Next line "\n"
```js
console.log("Java\nScript");
```
2. Tab Space "\t"
```js
console.log("Java\tScript");
```
## String Methods
- These are built-in functions to manipulate a string
1. toUpperCase() - to convert in upper case
2. toLowerCase() - to convert in lower case
3. trim() - to remove white spaces
4. slice(start, end?) - to returns part of string
5. concat(str2) - to joins str2 with str1
6. replace(searchVal, newVal) - to replace single value
7. charAt(idx) - to search a single character