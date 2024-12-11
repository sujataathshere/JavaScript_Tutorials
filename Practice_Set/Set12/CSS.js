// Variables
const modeBtn = document.querySelector("#mode");
const body = document.querySelector("body");
let currMode = "light";

// Event listener
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});
