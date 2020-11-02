const userScore_span = document.querySelector('.user-score');
const compScore_span = document.querySelector('.comp-score');

const gameResult = document.querySelector('.result');

const rockHand_div = document.getElementById('r');
const paperHand_div = document.getElementById('p');
const scissorHand_div = document.getElementById('s');

let userScore = 0;
let comptScore = 0;

window.addEventListener('DOMContentLoaded', initGame);

function initGame(){
    rockHand_div.addEventListener('click', () => {
        game('r');
    })
    paperHand_div.addEventListener('click', () => {
        game('p');
    })
    scissorHand_div.addEventListener('click', () => {
        game('s');
    })
}


function game(userChoice){
    const computerChoice = randomChoice();

    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
        break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
        break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
        break;
    }

}

// WIN FUNCTION
function win(userChoice, computerChoice){
    userScore++;
    scoreBoardUpdate(userScore, comptScore);
    gameResult.textContent = `${updateToWord(userChoice)}(user) beats ${updateToWord(computerChoice)}(comp). You WIN!`;
    toggleClass(userChoice, 'win');
}

// LOSE FUNCTION
function lose(userChoice, computerChoice){
    comptScore++;
    scoreBoardUpdate(userScore, comptScore);
    gameResult.textContent = `${updateToWord(userChoice)}(user) lose to ${updateToWord(computerChoice)}(comp). You LOSE!`;
    toggleClass(userChoice, 'lose');
}

// DRAW FUNCTION
function draw(userChoice, computerChoice){
    scoreBoardUpdate(userScore, comptScore);
    gameResult.textContent = `${updateToWord(userChoice)}(user) equals ${updateToWord(computerChoice)}(comp). It's a draw!`;
    toggleClass(userChoice, 'draw');
}

// FUNCTION TO TOGGLE WIN / LOSE / DRAW CLASS
function toggleClass(userChoice, targetClass){
    document.getElementById(userChoice).classList.add(targetClass);
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove(targetClass);
    }, 500);
}

// FUNCTION TO ADD SCORE TO SCOREBOARD
function scoreBoardUpdate(userScore, comptScore){
    userScore_span.textContent = userScore;
    compScore_span.textContent = comptScore;
}

// FUNCTION TO UPDATE RESULT
function updateToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    if(letter === 's') return 'Scissor';
}

// GENERATE A RANDOM COMPUTER CHOICE
function randomChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
