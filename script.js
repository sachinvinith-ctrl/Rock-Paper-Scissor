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
computerDiv.textContent = `Computer chose ${cpuSelection}`;
const computer = document.querySelector(".ul-list");
computer.appendChild(computerDiv);

const computerWon = document.createElement("div");
computerWon.textContent = `You lose... computer selected ${cpuSelection}`;
const computerList = document.querySelector(".ul-list");
computerList.appendChild(computerWon);
      
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You lose! Paper beats rock");
    
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

      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Paper beats rock");
      
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

      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Scissor beats paper");
      
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

      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Scissor beats paper");
      
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

      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Rock beats Scissor");
      
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



      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Rock beats scissor");
      
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

console.log(`Computer chose ${cpuSelection}`)
           console.log(`You chose ${humanPlay}`);
           console.log("This round is tied");
           
}
  
} 

playRound(playerSelection, cpuSelection);


console.log(`User Score: ${humanScore}, Computer Score: ${computerScore}`);
}


const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

const disorder = document.querySelector("ul");

disorder.appendChild(rockBtn)
disorder.appendChild(paperBtn)
disorder.appendChild(scissorBtn)

scissorBtn.textContent = "Scissor";
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";

rockBtn.addEventListener("click", () => playGame("rock"));
scissorBtn.addEventListener("click", () => playGame("scissor"))
paperBtn.addEventListener("click", () => playGame("paper"));



if (computerScore > humanScore) {
  console.log("Computer is the final winner!");
} else if (humanScore > computerScore) {
  console.log("You are the final winner!");
} else { console.log("This full game is tied");} 

