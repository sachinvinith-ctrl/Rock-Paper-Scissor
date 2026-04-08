function getComputerChoice() {
  let computerTurn =  Math.random()*100;
  if (computerTurn <= 33.33) {
  return "rock";
} else if (computerTurn <= 66.66) {
  return "paper";
} else if (computerTurn <= 99.99) {
  return "scissor";
} 
} // returns computer choice by string





let humanScore = 0;
let computerScore = 0; // initialize scores

function playGame(buttonSelection) {

let playerSelection = buttonSelection; // cpu and player selection gets assigned to a variable
let cpuSelection = getComputerChoice();
  
  function playRound(playerSelection, cpuSelection) {
  let humanPlay = playerSelection;
  humanPlay = humanPlay.toLowerCase();
  if (cpuSelection === "paper" && humanPlay === "rock") {
      
      const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection} \n\n`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You lose... computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
    
      ++computerScore;
    } else if (cpuSelection === "rock" && humanPlay === "paper") {


const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You Win! computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
      
      ++humanScore;
 }    else if (cpuSelection === "paper" && humanPlay === "scissor") {

const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You Win! computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
      
      ++humanScore;
}     else if (cpuSelection === "scissor" && humanPlay === "paper") {

const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You lose... computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);


const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);

      
      
      ++computerScore;
}    else if (cpuSelection === "rock" && humanPlay === "scissor") {

const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You lose... computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);

      
      
      ++computerScore;
}   else if (cpuSelection === "scissor" && humanPlay === "rock") {

const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);


const computerWon = document.createElement("div");
computerWon.textContent = `You Win! computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
      
      ++humanScore;
}   else { 
   
const playerDiv = document.createElement("div");
playerDiv.textContent = `You chose ${playerSelection}`;
const select = document.querySelector(".ul-list");
select.appendChild(playerDiv);

const computerDiv = document.createElement("div");
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const gameTie = document.createElement("div");
gameTie.textContent = "This round is a tie";
const computerList = document.querySelector(".ul-list");
computerList.appendChild(gameTie);


const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
           
}
  
} 

playRound(playerSelection, cpuSelection);

const scoreBoard = document.createElement("div");
scoreBoard.textContent = `User Score: ${humanScore}, Computer Score: ${computerScore}`
const selectBoard = document.querySelector(".ul-list");
selectBoard.appendChild(scoreBoard);

const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);


if (humanScore == 5) {
  const finalRound = document.createElement("div");
  const selectFinal = document.querySelector(".ul-list");  
  finalRound.textContent = `Yay..You won the game!`
  finalRound.style.color = "green";
  selectFinal.appendChild(finalRound);
  const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
  computerScore = 0;
  humanScore = 0;
} else if (computerScore == 5) {
   const finalRound = document.createElement("div");
   const selectFinal = document.querySelector(".ul-list");
   finalRound.textContent = `Darn..You lost this game`
   finalRound.style.color = "Red";
   selectFinal.appendChild(finalRound);
  const newLine = document.createElement("br");
const selectNewLine = document.querySelector(".ul-list")
selectNewLine.appendChild(newLine);
  computerScore = 0;
  humanScore = 0;
}

console.log(`User Score: ${humanScore}, Computer Score: ${computerScore}`);
}


const rockBtn = document.createElement("button");// Add buttons for choosing
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

const disorder = document.querySelector("ul");

disorder.appendChild(rockBtn)
disorder.appendChild(paperBtn)
disorder.appendChild(scissorBtn)

scissorBtn.textContent = "Scissor";
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";

rockBtn.addEventListener("click", () => playGame("rock"));// Action to do after a button is clicked
scissorBtn.addEventListener("click", () => playGame("scissor"))
paperBtn.addEventListener("click", () => playGame("paper"));





