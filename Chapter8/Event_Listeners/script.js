// Variables
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// addEventListener on 1st button
btn1.addEventListener("click", (evt) => {
    console.log("button was clicked - handler1");
    console.log("Event type :",evt.type);
    console.log("Event target",evt.target);
});

// addEventListener on 2nd button
btn2.addEventListener("click", () => {
    console.log("Submitted - handler1");
});
const handler2 = () => {
    console.log("Submitted - handler2");
};
btn2.addEventListener("click", handler2);
btn2.addEventListener("click", () => {
    console.log("Submitted - handler3");
});

// removeEventListener on 2nd button
btn2.removeEventListener("click", handler2);