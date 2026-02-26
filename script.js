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
  
 
  function playRound(computerChoice, humanChoice) {
  let humanPlay = humanChoice;
  humanPlay = humanPlay.toLowerCase();
  console.log(humanPlay)
  console.log(computerChoice)
  if (computerChoice === "paper" && humanPlay === "rock") {
      console.log("You lose! Paper beats rock");
      ++computerScore;
    } else if (computerChoice === "rock" && humanPlay === "paper") {
      console.log("You Win! Paper beats rock");
      ++humanScore;
 }    else if (computerChoice === "paper" && humanPlay === "scissor") {
      console.log("You Win! Scissor beats paper");
      ++humanScore;
}     else if (computerChoice === "scissor" && humanPlay === "paper") {
      console.log("You Lose! Scissor beats paper");
      ++computerScore;
}    else if (computerChoice === "rock" && humanPlay === "scissor") {
      console.log("You Lose! Rock beats Scissor"); 
      ++computerScore;
}   else if (computerChoice === "scissor" && humanPlay === "rock") {
      console.log("You Win! Rock beats scissor");
      ++humanScore;
}   else { console.log("This round is tied");
    
}
  
} 

playRound(humanChoice(), computerChoice());
}

playGame();
playGame();
playGame();

console.log(computerScore, humanScore);


if (computerScore > humanScore) {
  console.log("the computer wins")
} else if (humanScore > computerScore) {
  console.log("You win this game")
}
 else { console.log("This game is tied") } 