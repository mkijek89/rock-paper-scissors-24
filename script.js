
// 1. get computer choice with Math.random

function getRandom(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getComputerChoice() {
    if (getRandom(1,3) === 1) {
        return "rock";
    } else if (getRandom(1,3) === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}
// 2. get human choice from input

let humanChoice = prompt("type: rock, paper or scissors");
console.log(humanChoice);
let computerChoice = getComputerChoice();
console.log(computerChoice);


// 3. compare choices and declare score
// 4. play the round
// 5. count score and end game when someone gets 5