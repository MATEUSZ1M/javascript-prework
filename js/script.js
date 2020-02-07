// funkcje
function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	}
	else if(argMoveId == 2){
		return 'papier'
	}
	else if(argMoveId == 3){
		return 'nożyce'
	}
	else{
		printMessage('Niez znam ruchu o id' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

// function displayResult(argComputerMove, argPlayerMove){
// 	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
// 	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
// 		printMessage('Ty wygrywasz!');
// 	}
// 	else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
// 		printMessage('Ty wygrywasz!');
// 	}
	
// 	else if( argComputerMove == argPlayerMove){
// 		printMessage('Remis!');
// 	}
	
// 	else {
// 	  printMessage('Tym razem przegrywasz');
// 	}
//   }

// wybierz swój ruch
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
	playerMove = 'kamień';
}

else if (playerInput == '2') {
	playerMove = 'papier';
}

else if (playerInput == '3') {
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// losuje ruch komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

// wynik dla:

if (playerMove == 'nieznany ruch'){
	printMessage('Podana przez Ciebie wartość jest nieprawidłowa!')
}

else if (computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Ty wygrywasz!');
}

else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Ty wygrywasz!');
}

else if (computerMove === playerMove) {
	printMessage('Remis!');
}
else{
	printMessage('Ja wygrywam!');
}