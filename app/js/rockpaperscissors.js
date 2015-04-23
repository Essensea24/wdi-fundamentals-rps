function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}



function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}




function getPlayerMove(move) {
	if (move ===null) {
	return getInput();
	} else {
	return move;
    }
}




function getComputerMove(move) {
	if (move === null) {
	return randomPlay();
	}else {
	return move;
    }
}


  
function getWinner(playerMove,computerMove) {
	var winner;
	
    if ((playerMove=='rock') && (computerMove=='paper')) {
     	winner = 'computer';
     } else if ((playerMove=='rock') && (computerMove=='scissors')){
     	winner = 'player';
     } else if ((playerMove=='paper') && (computerMove=='rock')) {
     	winner = 'player';
     } else if ((playerMove=='paper') && (computerMove=='scissors')) {
     	winner = 'computer';
     }else if ((playerMove=='scissors') && (computerMove=='paper')) {
     	winner = 'player';
     } else if ((getInput=='scissors') && (computerMove=='rock')) {
     	winner = 'computer';
     } else {
     	winner = 'tie';
     }
     return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
  	 
    var playerWins = 0;
    var computerWins = 0;
    
    
    while (playerWins < 5 && computerWins < 5) {
        var player = getInput();
        var computer = randomPlay();
        var result = getWinner(player,computer)


        if (result == 'player') {
        	playerWins +=1;
        	
        } else if (result == 'computer') {
            computerWins +=1;
        }
        console.log(result)
    }
     
    console.log('player: ' + playerWins, 'computer: ' + computerWins)
    console.log('Player chose ' + player + ' computer chose ' + computer)
}

playToFive();

