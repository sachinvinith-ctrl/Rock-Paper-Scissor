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
  console.log(humanPlay)
  console.log(computerChoice)
  if (computerChoice === "paper" && humanPlay === "rock") {
      console.log("You lose! Paper beats rock");
      alert("Computer chose paper");
      ++computerScore;
    } else if (computerChoice === "rock" && humanPlay === "paper") {
      console.log("You Win! Paper beats rock");
      alert("Computer chose rock");
      ++humanScore;
 }    else if (computerChoice === "paper" && humanPlay === "scissor") {
      console.log("You Win! Scissor beats paper");
      alert("computer chose paper");
      ++humanScore;
}     else if (computerChoice === "scissor" && humanPlay === "paper") {
      console.log("You Lose! Scissor beats paper");
      alert("Computer chose scissor");
      ++computerScore;
}    else if (computerChoice === "rock" && humanPlay === "scissor") {
      console.log("You Lose! Rock beats Scissor");
      alert("Computer chose rock");
      ++computerScore;
}   else if (computerChoice === "scissor" && humanPlay === "rock") {
      console.log("You Win! Rock beats scissor");
      alert("Computer chose scissor");
      ++humanScore;
}   else { console.log("This round is tied");
           alert("Computer chose the same as you");
}
  
} 

playRound(humanChoice(), computerChoice());
console.log(humanScore, computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();

console.log(humanScore, computerScore);


if (computerScore > humanScore) {
  console.log("the computer wins")
} else if (humanScore > computerScore) {
  console.log("You win this game")
}
 else { console.log("This game is tied") } 