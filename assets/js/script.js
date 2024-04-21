// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        });
    }
    runGame('addition');
});
//Main game loop
function runGame(gameType) {
    //Creates random numbers (between 1 and 25)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}