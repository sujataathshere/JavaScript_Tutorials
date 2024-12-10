console.log("********* Query Selectors *********");

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

// It returns all divs/node list
let div = document.querySelectorAll(".myClass");
console.log("firstElementChild :",div[1].firstElementChild);
console.log("div :",div[1].lastChild);