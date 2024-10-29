let userWins = 0;
let computerWins = 0;
let totalMoves = 0;

const choices = ['papier', 'kamień', 'nożyce'];

function playRound(user) {
    const computer = choices[Math.floor(Math.random() * 3)];
    totalMoves++;

    if (user === computer) {
        displayResult("Remis!");
    } else if (
        (user === 'papier' && computer === 'kamień') ||
        (user === 'kamień' && computer === 'nożyce') ||
        (user === 'nożyce' && computer === 'papier')
    ) {
        userWins++;
        displayResult("Wygrałeś rundę!");
    } else {
        computerWins++;
        displayResult("Przegrałeś rundę!");
    }

    checkGameOver();
}

function checkGameOver() {
    if (userWins === 3) {
        displayFinalResult("Wygrałeś grę!");
    } else if (computer === 3) {
        displayFinalResult("Przegrałeś grę!");
    }
}

function displayResult(message) {
    document.getElementById('result').innerHTML = message;
    updateScore();
}

function displayFinalResult(message) {
    document.getElementById('result').innerHTML = message;
    updateScore();
    document.getElementById('newGame').classList.remove('hidden');
}

function updateScore() {
    document.getElementById('score').innerHTML = `Rundy: ${totalMoves}, Gracz: ${userWins}, Komputer: ${computerWins}`;
}


function displayResult(message) {
    document.getElementById('result').innerHTML = message;
    updateScore();
}


    document.getElementById('kamień').addEventListener('click', () => playRound('kamień'));
    document.getElementById('nożyce').addEventListener('click', () => playRound('nożyce'));
    document.getElementById('papier').addEventListener('click', () => playRound('papier'));
    document.getElementById('newGame').addEventListener('click', () => {
    userWins = 0;
    computerWins = 0;
    totalMoves = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = '';
    document.getElementById('newGame').classList.add('hidden');
});
