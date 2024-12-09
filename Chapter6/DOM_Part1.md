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
1. id 
- Used on single element
- It returns string that specifies the ID value.
- Incase id doesn't match, it returns null
- document.getElementById("myId")

2. class 
- Used on multiple elements
- It returns HTML Collections
- Incase class doesn't match, it returns empty HTML Collections with zero length
- document.getElementsByClassName("myClass")

3. tag 
- Using tagname we can access the elements.
- document.getElementByTagName("p")

## Query Selector 
- Its a better way to access the elements
- It returns a NodeList
<!-- Returns first element -->
- document.querySelector("myId / myClass / tag") 
<!-- Returns a NodeList -->
- document.querySelectorAll("myId / myClass / tag") 

## Properties
1. tagName :
2. innerText :
3. innerHTML :
4. textContent :

## DOM Tree
1. text Node
2. comment Node
3. element Node

### Properties
1. firstChild
2. lastChild
3. children