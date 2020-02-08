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
    printMessage('Niez znam ruchu o id' + argMoveId + '.');
    return 'nieznany ruch';
}


function getResult(argComputerMove, argPlayerMove) {
    if (computerMove == playerMove) {
        return 'Remis!';
    }

    if (playerMove == 'nieznany ruch') {
        return 'Wprowadź liczbę 1, 2, lub 3.';
    }

    if (
        (computerMove == 'kamień' && playerMove == 'papier') ||
        (computerMove == 'nożyce' && playerMove == 'kamień')
    ) {
        return 'Ty wygrywasz!';
    }

    return 'Ja wygrywam!';

}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printMessage(getResult(argComputerMove, argPlayerMove));
}

