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
        return 'Remis!';
    }

    if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
        return 'Ty wygrywasz!';
    }

    return 'Tym razem przegrywasz!';
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

