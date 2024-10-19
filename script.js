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
    } else if (getRandom(1,3) === 3){
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Type: rock, paper or scissors").toLowerCase();
    return choice;
}





function playGame(){
    
    
        
    
    function playRound() {
        
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        
        if (humanSelection === computerSelection){
            return "Draw!";
        } else if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "paper" && computerSelection == "rock") || (humanSelection == "scissors" && computerSelection == "paper"))
            { return "Human!"; 
        } else if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "rock"))
        { return "Computer!";
        }
        
    }
    
    
    let humanScore = 0;
    let computerScore = 0; 
     

    while ((humanScore < 5) && (computerScore < 5)) {
        
        const runda = playRound()
        if (runda == "Computer!") {
            computerScore+=1;   
            console.log("Human: " + humanScore + " Computer: " + computerScore);         
        } else if (runda == "Human!") {
            humanScore+=1;
            console.log("Human: " + humanScore + " Computer: " + computerScore);
            
        } else if (runda == "Draw!") {
           console.log("Draw!");
        }

    }
    
    
    
}


playGame();


// 5. count score and end game when someone gets 5