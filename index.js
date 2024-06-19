console.log(typeof localStorage.getItem('score'));
console.log(localStorage.getItem('score'))

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));

if(savedScore) score = savedScore;
updateScore();

function updateScore(){
    document.querySelector('.score-display').innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function updateResult(playerMoveImage, computerMoveImage, result){
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.moves-display').innerHTML = `You <img src="${playerMoveImage}"> <img src="${computerMoveImage}"> Computer`;
    document.querySelector('.result-display').innerHTML = `${result}`;
}

function makeMove(playerMove){

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

    if(playerMove === computerMove){
        score.ties++;
        result = "It's a Tie!";
        updateResult(playerMoveImage, computerMoveImage, result);
    } else if(playerMove === 'rock'){
        if(computerMove === 'paper'){
            score.losses++;
            result = "You Lose.";
            updateResult(playerMoveImage, computerMoveImage, result);
        } else {
            score.wins++;
            result = "You Win!";
            updateResult(playerMoveImage, computerMoveImage, result);
        }
    } else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            score.wins++;
            result = "You Win!";
            updateResult(playerMoveImage, computerMoveImage, result);
        } else {
            score.losses++;
            result = "You Lose.";
            updateResult(playerMoveImage, computerMoveImage, result);
        }
    } else{
        if(computerMove === 'rock'){
            score.losses++;
            result = "You Lose.";
            updateResult(playerMoveImage, computerMoveImage, result);
        } else {
            score.wins++;
            result = "You Win!";
            updateResult(playerMoveImage, computerMoveImage, result);
        }
    }
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.moves-display').innerHTML = ``;
    document.querySelector('.result-display').innerHTML = ``;
}