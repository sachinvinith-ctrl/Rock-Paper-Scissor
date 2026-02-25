function getComputerChoice() {
  let computerChoice =  Math.random()*100;
  if (computerChoice <= 33.33) {
  return "rock";
} else if (computerChoice <= 66.66) {
  return "paper";
} else if (computerChoice <= 99.99) {
  return "scissor";
} 
}

getComputerChoice();

function getHumanChoice() {
  
}