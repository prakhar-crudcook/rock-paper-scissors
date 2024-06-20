console.log(typeof localStorage.getItem('score'));
console.log(localStorage.getItem('score'))

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));

const updateScore = () => {
    document.querySelector('.score-display').innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

const updateLosses = () => {
    score.losses++;
    return "You Lose!";
}

const updateWins = () => {
    score.wins++;
    return "You Win!";
}

const updateTies = () => {
    score.ties++;
    return "It's a Tie!";
}

const updateResult = (playerMoveImage, computerMoveImage, result) => {
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.moves-display').innerHTML = `You <img src="${playerMoveImage}"> <img src="${computerMoveImage}"> Computer`;
    document.querySelector('.result-display').innerHTML = `${result}`;
}

if(savedScore) score = savedScore;
updateScore();

const makeMove= (playerMove) => {

    let computerMove;
    let computerMoveImage = "";
    let playerMoveImage = `./assets/${playerMove}.png`;
    let temp = Math.random();
    let result = "";

    if(temp <= 1 / 3){
        computerMove = 'rock'
    } else if(temp <= 2 / 3){
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    computerMoveImage = `./assets/${computerMove}.png`;

    // switch(playerMove){
    //     case 'rock':
    //         switch(computerMove) {
    //             case "rock":
    //                 result = updateTies();
    //                 break;

    //             case "paper":
    //                 result = updateLosses();
    //                 break;

    //             case "scissors":
    //                 result = updateWins();
    //                 break;

    //             default:
    //                 console.log("Error!");
    //         }

    //     case "paper":
    //         switch(computerMove) {
    //             case "rock":
    //                 result = updateWins();
    //                 break;

    //             case "paper":
    //                 result = updateTies();
    //                 break;

    //             case "scissors":
    //                 result = updateLosses();
    //                 break;
                
    //             default:
    //                 console.log("Error!");
    //         }

    //     case "scissors":
    //         switch(computerMove) {
    //             case "rock":
    //                 result = updateLosses();
    //                 break;

    //             case "paper":
    //                 result = updateWins();
    //                 break;

    //             case "scissors":
    //                 result = updateTies();
    //                 break;

    //             default:
    //                 console.log("Error!");
    //         }

    //     default:
    //         console.log("Please make a valid move.");

    // }


    switch(playerMove){
        case 'rock':
            if(computerMove === 'rock') {
                result = updateTies();
            } else if(computerMove === 'paper') {
                result = updateLosses();
            } else {
                result = updateWins();
            }
            break;

        case "paper":
            if(computerMove === 'rock') {
                result = updateWins();
            } else if(computerMove === 'paper') {
                result = updateTies();
            } else {
                result = updateLosses();
            }
            break;

        case "scissors":
            if(computerMove === 'rock') {
                result = updateLosses();
            } else if(computerMove === 'paper') {
                result = updateWins();
            } else {
                result = updateTies();
            }
            break;

        default:
            console.log("Please make a valid move.");
    }


    // if(playerMove === computerMove){
    //     result = updateTies();
    // } else if(playerMove === 'rock'){
    //     if(computerMove === 'paper'){
    //         result = updateLosses();
    //     } else {
    //         result = updateWins();
    //     }
    // } else if(playerMove === 'paper'){
    //     if(computerMove === 'rock'){
    //         result = updateWins();
    //     } else {
    //         result = updateLosses();
    //     }
    // } else{
    //     if(computerMove === 'rock'){
    //         result = updateLosses();
    //     } else {
    //         result = updateWins();
    //     }
    // }

    updateResult(playerMoveImage, computerMoveImage, result);
}

const resetScore = () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.moves-display').innerHTML = ``;
    document.querySelector('.result-display').innerHTML = ``;
}