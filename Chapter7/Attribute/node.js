/** Style **/

let divNode = document.querySelector("div");
divNode.style.backgroundColor = "skyblue";

let pNode = document.getElementsByClassName("para");
console.log("P tage node :",pNode);
pNode[0].style.color = "lightgreen";
pNode[1].style.fontFamily = "Courier New";

let spanNode = document.getElementById("sp");
console.log("Span tag node :",spanNode);
spanNode.style.backgroundColor = "yellow";
spanNode.style.color = "red";
spanNode.style.fontSize = "18px";