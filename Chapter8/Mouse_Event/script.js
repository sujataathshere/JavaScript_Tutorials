// Nav bar event
let navBar = document.querySelector("#nav-bar");
navBar.onmouseover = () => {
    console.log("On nav bar");
};

// Button event
let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("Button was clicked");
};

// Content event
let content = document.querySelector(".content");
content.onmouseover = () => {
    console.log("Inside content");
}