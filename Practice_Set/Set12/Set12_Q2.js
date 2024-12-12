const btns = document.querySelectorAll(".dotted-btn");
let reached = false;
btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        if(reached){
            reached = false;
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        }else{
            reached = true;
            btn.style.color = "white";
            btn.style.backgroundColor = "black";
        }
    })
})
