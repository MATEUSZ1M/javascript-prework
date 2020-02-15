
// wybierz swój ruch
{
    function playGame(playerInput) {
        let clear = clearMessages();

        console.log('Gracz wpisał: ' + playerInput);
        let argPlayerMove = getMoveName(playerInput);

        // losuje ruch komputera
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        let argComputerMove = getMoveName(randomNumber);

        let result = displayResult(argComputerMove, argPlayerMove);
        console.log(result);
    }

    let playRock = document.getElementById('play-rock');
    playRock.addEventListener('click', buttonClickedRock);

    let playPaper = document.getElementById('play-paper');
    playPaper.addEventListener('click', buttonClickedPaper);

    let playScissors = document.getElementById('play-scissors');
    playScissors.addEventListener('click', buttonClickedScissors);

}

