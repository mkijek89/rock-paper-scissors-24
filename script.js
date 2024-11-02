const buttons = document.querySelectorAll(".buttons");
const results = document.querySelector("#result");
let playerScore = 0;
let computerScore = 0;

function getRandom(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    
    return Math.floor(Math.random()*(max-min+1))+min;
}

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

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true
    })
}


function playRound(value) {
        
    const computerSelection = getComputerChoice();
    const humanSelection = value;
    let result = "";
    
    
   
    if (humanSelection === computerSelection){
        result+= `Draw!`;
    } else if 
        ((humanSelection == "rock" && computerSelection == "scissors") || 
        (humanSelection == "paper" && computerSelection == "rock") || 
        (humanSelection == "scissors" && computerSelection == "paper"))
    {   playerScore++;
        result += `Human wins, ${humanSelection} beats ${computerSelection}!`; 
        if (playerScore == 5) {
            result += '<br>Congratulations! You won the game!'
            disableButtons()
            }

    } else if 
        ((humanSelection == "rock" && computerSelection == "paper") || 
        (humanSelection == "paper" && computerSelection == "scissors") || 
        (humanSelection == "scissors" && computerSelection == "rock"))
    {   computerScore++;
        result += `Computer wins, ${computerSelection} beats ${humanSelection}!`;
        if(computerScore == 5){
            result += '<br>Computer won the game!'
            disableButtons()  
        }
            
    } else 
    { result += "ERROR!"}
    results.innerHTML = `${result} The score is: Human ${playerScore} : Computer ${computerScore}`;
    return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

reload = document.getElementById('reload-game')
reload.addEventListener('click', () => location.reload())




