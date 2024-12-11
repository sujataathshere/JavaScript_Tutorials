// Variables
const btn = document.querySelector("button");
const body = document.querySelector("body");
let currMode = "light";

// Initially screen_mode:light so button_bg_color:black
btn.style.backgroundColor = "black";
btn.style.color = "white";

// Event listener
btn.addEventListener("click", () => {
  if (currMode == "light") {
    // For screen
    body.style.backgroundColor = "black";
    currMode = "dark";
    // For button
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else {
    // For screen
    body.style.backgroundColor = "white";
    currMode = "light";
    // For button
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  }
});
