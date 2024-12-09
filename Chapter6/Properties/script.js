let firstElement = document.querySelector(".sweet-fruits");

/** Properties **/

// 1. Tagn name
console.log("Tag name :",firstElement.tagName);

// 2. innerText
let div = document.querySelector("div");
console.dir(div);
console.log("Inner Text :",div.innerText);
// div.innerText = "asdfghjk";

// 3. innerHTML
console.log("Inner HTML :",div.innerHTML);

// 4. textContent : show hidden text
let bigHeading = document.querySelector("h1");
console.log("Big Heading :",bigHeading);
console.log("Inner Text :",bigHeading.innerText);
console.log("Text Content :",bigHeading.textContent);