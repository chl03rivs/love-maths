// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
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
    } else if(gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if(gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    //Fetches the user's answer from the input box
    let userAnswer = parseInt(document.getElementById('answer-box').value);

    //Checks the user's answer against the correct answer
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    
    if(isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Aww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/*Retrieves the operands and operator from the DOM and returns correct answer*/
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === '+'){
        return [operand1 + operand2, 'addition'];
    } else if(operator === 'x'){
        return [operand1 * operand2, 'multiply'];
    } else if(operator === '-'){
        return [operand1 - operand2, 'subtract'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {
    //Retrieves current score from DOM and increments it
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer() {
    //Retrieves incorrect answers' tally from DOM and increments it
    let oldScore = parseInt(document.getElementById('wrong').innerText);
    document.getElementById('wrong').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    //Fetch operation elements from the html doc
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    //Fetch operation elements from the html doc
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; //ensure that the answers won't be negative
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    //Fetch operation elements from the html doc
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}