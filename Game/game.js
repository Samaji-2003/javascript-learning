const choices = ['rock', 'paper', 'scissors'];

const player = document.getElementById('player');
const computer = document.getElementById('computer');
const displayResult = document.getElementById('result');

const playerScore = document.getElementById('player-score-value');
const computerScore = document.getElementById('computer-score-value');

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    displayResult.textContent = `${result}`;

    switch (result) {
        case 'You win!':
            displayResult.style.color = 'green';
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            break;
        case 'You lose!':
            displayResult.style.color = 'red';
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            break;
        case "It's a tie!":
            displayResult.style.color = 'black';
            break;
    }
}