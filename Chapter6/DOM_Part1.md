## Window Object
- The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
- It is a global object with lots of properties & methods.

## Q. What is window object?
## Q. How window object gets available?
## Q. How window object gets generate?
## Q. Who generates the window object?

## Q. What is DOM?
- When a web page is loaded, the browser creates a Document Object Model(DOM) of the page
- Using JS we can dynamically do the change in the websites through DOM 
* We write a script tage just before the body tag, to load the body object in browser
```js
window.document; // print all html code
console.dir(window.document); // print document object

console.dir(document.head); // print all head object
console.log(document.head); // print all head code
```
* window -> document -> html -> head, body -> (meta, title, link, etc), (div, script, etc)

## DOM Manipulation
1. id : document.getElementById("myId")
2. class : document.getElementByClassName("myClass")
3. tag : document.getElementByTagName("p")