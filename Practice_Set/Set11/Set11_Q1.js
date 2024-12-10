let btn = document.createElement("button");
btn.innerText = "click me";
// It gets add as a inline styling
btn.style.backgroundColor = "red";
btn.style.color = "white";

// prepend() : Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
document.querySelector("body").prepend(btn);