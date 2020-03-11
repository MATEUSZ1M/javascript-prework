
// wybierz swój ruch
{
    const rockSelector = 'play-rock',
        paperSelector = 'play-paper',
        scissorsSelector = 'play-scissors';
    function playGame(playerInput) {
        let clear = clearMessages();

        console.log('Gracz wpisał: ' + playerInput);
        const argPlayerMove = getMoveName(playerInput);

        // losuje ruch komputera
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);

        const result = displayResult(argComputerMove, argPlayerMove);
        console.log(result);
    }

    const playRock = document.getElementById(rockSelector);
    playRock.addEventListener('click', buttonClickedRock);

    const playPaper = document.getElementById(paperSelector);
    playPaper.addEventListener('click', buttonClickedPaper);

    const playScissors = document.getElementById(scissorsSelector);
    playScissors.addEventListener('click', buttonClickedScissors);

}

