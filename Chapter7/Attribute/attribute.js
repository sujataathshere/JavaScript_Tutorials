/** Get Attributes **/

// div Attributes
let div = document.querySelector("div");
console.log("Div :",div);

let divId = div.getAttribute("id");
console.log("Div id :",divId);

let divName = div.getAttribute("name");
console.log("Div name :",divName);

// p Attributes
let p = document.querySelectorAll("p");
console.log("P :",p);

let pClass = p[0].getAttribute("class");
console.log("P class :",pClass);

// img Attributes
let img = document.querySelector("img");
console.log("Image :",img);

let iSource = img.getAttribute("src");
console.log("Image Source :",iSource);

let iAlternative = img.getAttribute("alt");
console.log("Image Alternative :",iAlternative);

/** Set Attributes **/
img.setAttribute("alt", "bg image");
iAlternative = img.getAttribute("alt");
console.log("Change alt name from Background image to :",iAlternative);