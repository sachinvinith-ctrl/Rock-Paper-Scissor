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


function getHumanChoice() {
  let humanTurn = prompt("Choose between rock, paper and scissor");
  return humanTurn;
}

// returns human choice by string.



let humanScore = 0;
let computerScore = 0; // initialize scores

function playGame(buttonSelection) {

let playerSelection = buttonSelection; // cpu and player selection results to a variable
let cpuSelection = getComputerChoice();
  
  function playRound(playerSelection, cpuSelection) {
  let humanPlay = playerSelection;
  humanPlay = humanPlay.toLowerCase();
  if (cpuSelection === "paper" && humanPlay === "rock") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You lose! Paper beats rock");
      alert(`Computer chose ${cpuSelection}`);
      alert("Computer Wins!");
      ++computerScore;
    } else if (cpuSelection === "rock" && humanPlay === "paper") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Paper beats rock");
      alert(`Computer chose ${cpuSelection}`);
      alert("You Win!");
      ++humanScore;
 }    else if (cpuSelection === "paper" && humanPlay === "scissor") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Scissor beats paper");
      alert(`Computer chose ${cpuSelection}`);
      alert("You Win!");
      ++humanScore;
}     else if (cpuSelection === "scissor" && humanPlay === "paper") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Scissor beats paper");
      alert(`Computer chose ${cpuSelection}`);
      alert("Computer Wins!");
      ++computerScore;
}    else if (cpuSelection === "rock" && humanPlay === "scissor") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Lose! Rock beats Scissor");
      alert(`Computer chose ${cpuSelection}`);
      alert("Computer Wins!");
      ++computerScore;
}   else if (cpuSelection === "scissor" && humanPlay === "rock") {
      console.log(`Computer chose ${cpuSelection}`);
      console.log(`You chose ${humanPlay}`);
      console.log("You Win! Rock beats scissor");
      alert(`Computer chose ${cpuSelection}`);
      alert("You Win!");
      ++humanScore;
}   else { console.log(`Computer chose ${cpuSelection}`)
           console.log(`You chose ${humanPlay}`);
           console.log("This round is tied");
           alert(`Computer chose ${cpuSelection}`);
           alert("This round is a tie");
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