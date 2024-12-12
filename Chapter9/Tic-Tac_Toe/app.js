// Variables
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true; // player1:X And player2:O
let count = 0; // To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
console.log("Boxes :", boxes);

/** Functions **/
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pose1Val = boxes[pattern[0]].innerText;
    let pose2Val = boxes[pattern[1]].innerText;
    let pose3Val = boxes[pattern[2]].innerText;
    if (pose1Val != "" && pose2Val != "" && pose3Val != "") {
      if (pose1Val === pose2Val && pose2Val === pose3Val) {
        // After getting the winner disabled all the buttons
        showWinner(pose1Val);
        return true;
      }
    }
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
  //   boxes.forEach((box) => {
  //     if (!box.disabled) {
  //       box.disabled = true;
  //     }
  //   });
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
};

/** Event Listeners **/
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // playerO
      box.innerText = "O";
      box.style.color = "#3a86ff";
      turnO = false;
    } else {
      // playerX
      box.innerText = "X";
      box.style.color = "#ff006e";
      turnO = true;
    }
    // TO resolve the loop we have to disabled the button otherwise one more click change the btn value
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);