// Variables
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Event Listeners
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Functions
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawGame = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "#081B31";
};
const genCompChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
};
const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("User choice :", userChoice);
  console.log("Comp choice :", compChoice);
  
  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // user : rock && comp : paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // user : paper && comp : rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // user : scissors && comp : rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
