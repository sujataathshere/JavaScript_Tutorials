const tr = document.querySelector("tr");

tr.addEventListener("mouseover", () => {
    document.querySelector("#python").style.backgroundColor = "lightyellow";
})
tr.addEventListener("mouseover", () => {
    document.querySelector("#java").style.backgroundColor = "lightgreen";
})
tr.addEventListener("mouseover", () => {
    document.querySelector("#js").style.backgroundColor = "lightblue";
})

const dbtn = document.querySelector(".dotted-btn");

dbtn.addEventListener("mouseover", () => {
    document.querySelector(".button").style.backgroundColor = "black";
    document.querySelector(".button").style.color = "white";
}) 