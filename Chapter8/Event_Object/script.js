// Button event
let button = document.querySelector("button");
button.onclick = (evt) => {
    console.log("Button Object :",evt);
    console.log("Event type :",evt.type);
    console.log("Event target :",evt.target);
    console.log("Event occur on X/Y position :",evt.clientX,evt.clientY);
};

// div event
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("Div Object :",evt);
    console.log("Event type :",evt.type);
    console.log("Event target :",evt.target);
    console.log("Event occur on X/Y position :",evt.clientX,evt.clientY);
};