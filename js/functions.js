window.userScore = 0;
window.computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score')

const win = function () {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    console.log('Wynik Gracza ' + userScore);
    if (userScore >= 10) {
        return (alert('Ty wygrałeś. Wciśnij F5 aby kontynuować'))
    }
    return '<p>Ty Wygrywasz!🍾</p>'
}

const lose = function () {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    console.log('Wynik komputera ' + computerScore);
    if (computerScore >= 10) {
        return (alert('Komputer wygrał. Wciśnij F5 aby kontynuować'))
    }
    return '<p>Tym razem Przegrywasz!💩</p>'
}

const remis = function () {
    userScore++;
    console.log('Wynik Gracza ' + userScore);
    computerScore++;
    console.log('Wynik komputera ' + computerScore);
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    return '<p>Remis!👥</p>'
}

const printMessage = function (msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

const clearMessages = function () {
    document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (argMoveId) {
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

const getResult = function (argComputerMove, argPlayerMove) {
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

const  displayResult = function(argComputerMove, argPlayerMove) {
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printMessage(getResult(argComputerMove, argPlayerMove));
}

const buttonClickedRock = function () {
    playGame(1)
}

const buttonClickedPaper = function () {
    playGame(2)
}

const buttonClickedScissors = function () {
    playGame(3)
}
