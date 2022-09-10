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
const playerSelection = 'rock'
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

//function plays single round of RPS, comparing playerSelection() to computerSelection() and returns a result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return ("You win! Rock beats Scissors");
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return ("You lose, Paper beats Rock");
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return ("You win! Paper beats Rock");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return ("You lose, Scissors beat Paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return ("You win! Scissors beat Paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return ("You lose, Rock beats Scissors");
    } else if (playerSelection === computerSelection){
        return ("It\s a tie");
    } else {
        return ("You can't use that weapon, pick again");
    }
}

//output result of playRound() to console
console.log(playRound(playerSelection, computerSelection));
