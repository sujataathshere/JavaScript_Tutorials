let divs = document.querySelectorAll(".box");

// To print the text value
for(let div of divs){
    console.log(div.innerText);
}

// To change the text value
let idx = 1;
for(let div of divs){
    div.innerText = `${idx} div`;
    idx++;
}
// divs[0].innerText = "1st div";
// divs[1].innerText = "2nd div";
// divs[2].innerText = "3rd div";