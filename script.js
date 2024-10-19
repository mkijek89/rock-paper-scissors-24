function getRandom(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandom(1,3));

function getComputerChoice() {
    
    const choice = getRandom(1,3);

    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else if (choice == 3){
        return "scissors";
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
            { return "Human wins, " + humanSelection + " beats " + computerSelection + "!"; 
        } else if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "rock"))
        { return "Computer wins, " + computerSelection + " beats " + humanSelection + "!";
        }
        
    }

    let humanScore = 0;
    let computerScore = 0; 
     

    while ((humanScore < 5) && (computerScore < 5)) {
        
        const runda = playRound();
        
        if (runda == "Draw!") {
            console.log("Draw!");
         } else if (runda.includes("Computer")) {
            computerScore+=1;   
            console.log(runda)
            console.log("Human: " + humanScore + " Computer: " + computerScore);         
        } else if (runda.includes("Human")) {
            humanScore+=1;
            console.log(runda)
            console.log("Human: " + humanScore + " Computer: " + computerScore);
            
        }

    }
    
    
    
}


playGame();

