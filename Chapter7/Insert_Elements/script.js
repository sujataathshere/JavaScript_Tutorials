// Create h1 element
let bigHeading = document.createElement("h1");
bigHeading.innerHTML = "<i>Seasonal Flowers</i>";

// Place heading element before div
document.querySelector("body").prepend(bigHeading);

// Create link element
let link = document.createElement("a");
link.innerText = "See more";
link.setAttribute("href", "#");

// place link element after div
let div = document.querySelector("div");
div.after(link);

// create p tag
let pHeading = document.createElement("p");
pHeading.innerText = "Summer Flowers";

div.prepend(pHeading);

let unList = document.createElement("ul");
 