window.userScore = 0;
window.computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score')

win = () => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    console.log('Wynik Gracza ' + userScore);
    if (userScore >= 10) {
        return (alert('Ty wygrałeś. Wciśnij F5 aby kontynuować'))
    }
    return '<p>Ty Wygrywasz!🍾</p>'
}

lose = () => {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    console.log('Wynik komputera ' + computerScore);
    if (computerScore >= 10) {
        return (alert('Komputer wygrał. Wciśnij F5 aby kontynuować'))
    }
    return '<p>Tym razem Przegrywasz!💩</p>'
};

remis = () => {
    userScore++;
    console.log('Wynik Gracza ' + userScore);
    computerScore++;
    console.log('Wynik komputera ' + computerScore);
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    return '<p>Remis!👥</p>'
}

printMessage = (msg) => {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

clearMessages = () => {
    document.getElementById('messages').innerHTML = '';
}

getMoveName = (argMoveId) => {
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

getResult = (argComputerMove, argPlayerMove) => {
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

displayResult = (argComputerMove, argPlayerMove) => {
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printMessage(getResult(argComputerMove, argPlayerMove));
}

buttonClickedRock = () => {
    playGame(1)
}

buttonClickedPaper = () => {
    playGame(2)
}

buttonClickedScissors = () => {
    playGame(3)
}
