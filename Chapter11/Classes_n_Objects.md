## How classes/objects works?
## What are the prototypes?

## Prototypes 
- A javaScript object is an entity having state & behavior (properties and method).
- JS objects have a special property called prototype.
- We can set prototype using _ _ proto_ _
- If object & prototype have same method, object's method will be used.

## classes
- Class is a program-code template for creating objects.
- Those objects will have some state(variables) & some behaviour(functions) inside it.
```JS
class MyClass{
    constructor(){...}
    myMethod(){...}
}
let myObj = new MyClass();
```
## Constructor
- It is a method automatically invoked by new
- Used to initializes object

## Inheritance
- Inheritance is passing down properties & methods from parent class to child class.
```js
class Parent{

}
class Child extends Parent{

}
```
- If Child & Parent have same method, child's method will be used.[Method Overriding]