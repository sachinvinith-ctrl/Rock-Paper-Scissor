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

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper and scissor");
  return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  let humanPlay = humanChoice.toLowerCase();
  console.log("You lose! Paper beats rock");
}