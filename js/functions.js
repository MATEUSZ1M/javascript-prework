let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score')

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    return '<p>Ty Wygrywasz!🍾</p>'
}


function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    return '<p>Tym razem Przegrywasz!💩</p>'
}

function remis() {
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    return '<p>Remis!👥</p>'
}


function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    }
    if (argMoveId == 2) {
        return 'papier'
    }
    if (argMoveId == 3) {
        return 'nożyce'
    }
}

function getResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == argPlayerMove) {
        return remis();
    }

    if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
        return win();
    }

    return lose();
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printMessage(getResult(argComputerMove, argPlayerMove));
}

function buttonClickedRock(){
     playGame(1)
  }

  function buttonClickedPaper(){
    playGame(2)
 }

 function buttonClickedScissors(){
    playGame(3)
 }

