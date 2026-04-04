const { createElement } = require("react");

function getComputerChoice() {
  let computerTurn =  Math.random()*100;
  if (computerTurn <= 33.33) {
  return "rock";
} else if (computerTurn <= 66.66) {
  return "paper";
} else if (computerTurn <= 99.99) {
  return "scissor";
} 
}

let computerChoice = getComputerChoice;

function getHumanChoice() {
  let humanTurn = prompt("Choose between rock, paper and scissor");
  return humanTurn;
}

let humanChoice = getHumanChoice;

let humanScore = 0;
let computerScore = 0;

function playGame() {
  
  function playRound(humanChoice, computerChoice) {
  let humanPlay = humanChoice;
  humanPlay = humanPlay.toLowerCase();
  if (computerChoice === "paper" && humanPlay === "rock") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You lose! Paper beats rock");
      alert(`Computer chose ${computerChoice}`);
      alert("Computer Wins!");
      ++computerScore;
    } else if (computerChoice === "rock" && humanPlay === "paper") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Paper beats rock");
      alert(`Computer chose ${computerChoice}`);
      alert("You Win!");
      ++humanScore;
 }    else if (computerChoice === "paper" && humanPlay === "scissor") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Scissor beats paper");
      alert(`Computer chose ${computerChoice}`);
      alert("You Win!");
      ++humanScore;
}     else if (computerChoice === "scissor" && humanPlay === "paper") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Scissor beats paper");
      alert(`Computer chose ${computerChoice}`);
      alert("Computer Wins!");
      ++computerScore;
}    else if (computerChoice === "rock" && humanPlay === "scissor") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Rock beats Scissor");
      alert(`Computer chose ${computerChoice}`);
      alert("Computer Wins!");
      ++computerScore;
}   else if (computerChoice === "scissor" && humanPlay === "rock") {
      console.log(`Computer chose ${computerChoice}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Rock beats scissor");
      alert(`Computer chose ${computerChoice}`);
      alert("You Win!");
      ++humanScore;
}   else { console.log(`Computer chose ${computerChoice}`)
           console.log(`You chose ${humanPlay}`);
           console.log("This round is tied");
           alert(`Computer chose ${computerChoice}`);
           alert("This round is a tie");
}
  
} 

playRound(humanChoice(), computerChoice());
console.log(`User Score: ${humanScore}, Computer Score: ${computerScore}`);
}

const scissorButton = document.createElement("button");
const paperButton = document.createElement("button");
const stoneButton = document.createElement("button");

scissorButton.textContent = "Scissors";
paperButton.textContent = "Paper";
stoneButton.textContent = "Stone";

console.log(humanScore, computerScore);


if (computerScore > humanScore) {
  console.log("Computer is the final winner!");
} else if (humanScore > computerScore) {
  console.log("You are the final winner!");
} else { console.log("This full game is tied");} 