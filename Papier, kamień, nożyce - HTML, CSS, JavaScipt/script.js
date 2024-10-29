let userWins = 0;
let computerWins = 0;
let totalMoves = 0;

const choices = ['papier', 'kamień', 'nożyce'];

function playRound(userChoice) {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    totalMoves++;

    if (userChoice === computer) {
        displayResult("Remis!");
    } else if (
        (userChoice === 'papier' && computer === 'kamień') ||
        (userChoice === 'kamień' && computer === 'nożyce') ||
        (userChoice === 'nożyce' && computer === 'papier')
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
    document.getElementById('result').innerText = message;
    updateScore();
}

function displayFinalResult(message) {
    document.getElementById('result').innerText = message;
    updateScore();
    document.getElementById('newGame').classList.remove('hidden');
}

function updateScore() {
    document.getElementById('score').innerText = `Rundy: ${totalMoves}, Gracz: ${userWins}, Komputer: ${computerWins}`;
}

document.getElementById('papier').addEventListener('click', () => playRound('papier'));
document.getElementById('kamień').addEventListener('click', () => playRound('kamień'));
document.getElementById('nożyce').addEventListener('click', () => playRound('nożyce'));
document.getElementById('newGame').addEventListener('click', () => {
    userWins = 0;
    computerWins = 0;
    totalMoves = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = '';
    document.getElementById('newGame').classList.add('hidden');
});
