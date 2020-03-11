
// wybierz swój ruch
{
    const select = {
        scissors : 'play-scissors',
        paper: 'play-paper',
        rock: 'play-rock',
    };

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

    const playRock = document.getElementById(select.rock);
    playRock.addEventListener('click', buttonClickedRock);

    const playPaper = document.getElementById(select.paper);
    playPaper.addEventListener('click', buttonClickedPaper);

    const playScissors = document.getElementById(select.scissors);
    playScissors.addEventListener('click', buttonClickedScissors);

}

