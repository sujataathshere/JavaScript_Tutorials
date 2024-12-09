// To access 1st matching elements through class
let firstElement = document.querySelector(".myClass");
console.dir(firstElement);

// To access all elements through tagname
let allElements = document.querySelectorAll("p");
console.dir(allElements);


/** DOM Tree **/
// To access body childrens
let divChildrens = document.querySelector("div").children;
console.log("Div Childrens :",divChildrens);

// It returns text node
let divLastChild = document.querySelector("div").lastChild;
