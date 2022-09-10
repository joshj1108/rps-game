//create function getComputerChoice()
function getComputerChoice(){
    //random return choice of (rock, paper, scissors)
    return getRandom(['rock', 'paper', 'scissors']) 
}
//function to randomly generate a choice from a given list
function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}



//player/computer selection variables
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

//function plays single round of RPS, comparing playerSelection() to computerSelection() and returns a result
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return ("You win! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return ("You lose, Paper beats Rock");
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return ("You win! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return ("You lose, Scissors beat Paper");
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return ("You win! Scissors beat Paper");
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return ("You lose, Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === computerSelection){
        return ("It\s a tie");
    } else {
        return ("You can't use that weapon, pick again");
    }
}

//output result of playRound() to console
//console.log(playRound(playerSelection, computerSelection))
let playerScore = 0;
let computerScore = 0;

//function game() calls playround() play 5 rounds/keep score/report winner at end
function game () {
       
    for (let i = 0; i < 5; i++){
            playRound(playerSelection, computerSelection)
        } 

        if (playerScore > computerScore){
            return "Congrats, you win!"
        } else {
            return "You lose, better luck next time"
        }
}

console.log(game());
console.log(computerScore);
console.log(playerScore);
