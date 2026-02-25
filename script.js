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
  let humanPlay = humanChoice;
  humanPlay = humanPlay.toLowerCase();
  console.log(humanPlay)
  console.log(computerChoice)
  if (computerChoice === "paper" && humanPlay === "rock") {
      console.log("You lose! Paper beats rock"); 
    } else if (computerChoice === "rock" && humanPlay === "paper") {
      console.log("You Win! Paper beats rock");
 }    else if (computerChoice === "paper" && humanPlay === "scissor") {
      console.log("You Win! Scissor beats paper");
}     else if (computerChoice === "scissor" && humanPlay === "paper") {
      console.log("You Lose! Scissor beats paper");
}    else if (computerChoice === "rock" && humanPlay === "scissor") {
      console.log("You Lose! Rock beats Scissor"); 
}   else if (computerChoice === "scissor" && humanPlay === "rock") {
      console.log("You Win! Rock beats scissor");

}
}

playRound(computerChoice, humanChoice)