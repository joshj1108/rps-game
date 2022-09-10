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
const playerSelection = 'RoCK'
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

//function plays single round of RPS, comparing playerSelection() to computerSelection() and returns a result
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        return ("You win! Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return ("You lose, Paper beats Rock");
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return ("You win! Paper beats Rock");
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return ("You lose, Scissors beat Paper");
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return ("You win! Scissors beat Paper");
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return ("You lose, Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === computerSelection){
        return ("It\s a tie");
    } else {
        return ("You can't use that weapon, pick again");
    }
}

//output result of playRound() to console
console.log(playRound(playerSelection, computerSelection));

//function game() calls playRound() for five rounds/keeps score and reports winner/loser at end
