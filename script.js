function getComputerChoice() {
  let computerChoice =  Math.random()*100;
  if (computerChoice <= 33.33) {
  console.log("rock");
} else if (computerChoice <= 66.66) {
  console.log("paper");
} else if (computerChoice <= 99.99) {
  console.log("scissor");
} 
console.log(computerChoice);
}

getComputerChoice();