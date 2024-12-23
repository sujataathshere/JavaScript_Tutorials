## Variables
1. var
- Variables can be re-declared & updated. 
- A global scope variable.
```js
    var fullName = "Tonyy Stark";
    var fullName = "Tonyy Stark"; // 2nd times fullName variable gets created
```
2. let
- Variable cannot be re-declared but can be updated.
- A block scope variable.
```js
    let fullName = "Tonyy Stark";
    fullName = "Sujata Athshere"; 
```
3. const
- Variable cannot be re-declared or updated.
- A block scope variable.
```js
    const PI = 3.14;
```
## Data Types
1. Primitive Data Types
- Number |String |Boolean |Undefined |Null |BigInt |Symbol
    1. Number
    - It is a double-precision 64-bit binary format IEEE 754 value.
    - It is capable of storing positive floating-point numbers as well as negative floating-point numbers.
    ```js
        let age = 25;
        let salary = 20000.500;
    ```
    2. String
    - JavaScript strings are immutable.
    ```js
        let fullName = "Sujata Athshere";   
    ```
    3. Boolean
    - It represents a logical entity & has 2 value, true/false
    - Used for conditional operations
    ```js
        let isFollow = true;   
    ```
    4. Undefine
    - Variable is declared bt havn't define the value
    - The absence of a value / Zero value
    - A variable declaration without initialization implicitly initializes the variable to undefined.
    ```js
        let salary;
    ```
    5. Null
    - Variable is declared bt initially define with null value
    ```js
        let salary = null;
    ```
    6. BigInt
    - You can store and operate on large integers
    - A BigInt is created by appending n to the end of an integer
    ```js
        let x = BigInt("123");
        console.log(x); // 123n
        console.log(typeof x); // bigint
    ```
    7. Symbol
    ```js
        let y = Symbol("Hello");
        console.log(y); //
        console.log(typeof y); // symbol
    ```
2. Non-Primitive Data Types
    1. Object : Arrays | Function
    - It is a collection of diff variables
    ```js
    const student = {
        fullName : "Aditya Chaula",
        age : 20,
        cgpa : 8.2,
        isPass : true,
    };
    console.log(student); // Display student information
    console.log(student["age"]); // To access the age value
    console.log(student.age); // To access the age value
    ```