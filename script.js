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

let computerChoice = getComputerChoice();

function getHumanChoice() {
  let humanTurn = prompt("Choose between rock, paper and scissor");
  return humanTurn;
}

let humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  let humanPlay = humanChoice.toLowerCase();
  if (computerChoice === "paper" && humanPlay === "rock") {
      console.log("You lose! Paper beats rock"); 
    } else if (computerChoice === "rock" && humanPlay === "paper") {
      console.log("You")
 }
  
}

