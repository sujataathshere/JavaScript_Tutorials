## Interview Questions

- How classes/objects works?
- What are the prototypes?
- method overriding ?
- How super keyword work?
- what is inheritence ?
- why extends keywords used for?

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
class Parent {
  // properties, methods, constr
}
class Child extends Parent {
  // properties, methods, constr
}
```

- If Child & Parent have same method, child's method will be used.[Method Overriding]

## Super Keyword

- Used to call the constructor of its parent class to access the parent's properties and methods.

```js
super(args); // calls parent's constructor
super.parentMethod(args);
```

## Error Handling

1. try

- used to handle runtime errors (exceptions) in your code
- If no errors occur, the catch block is skipped.

2. catch

- Executes when an error is thrown in the try block

```js
try {
  // Statement
} catch (err) {
  // handling error
}
```
