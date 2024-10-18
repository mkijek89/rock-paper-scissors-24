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

function getHumanChoice() {
    let choice = prompt("Type: rock, paper or scissors").toLowerCase();
    return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("computer: " + computerSelection);
let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection){
        return "Draw!";
    } else if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "paper" && computerSelection == "rock") || (humanSelection == "scissors" && computerSelection == "paper"))
        { return "Human!"; 
    } else if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "rock"))
    { return "Computer! ";
    }
    
}

console.log(playRound(humanSelection, computerSelection));
// 3. compare choices and declare score

// 4. play the round
// 5. count score and end game when someone gets 5