// Declaring all global variables
let score = 0;
let progressBar = document.getElementById("progress-bar");
let progressText = document.getElementById("progress-text");
let progressIcon = document.getElementsByClassName("fa-fighter-jet");
let input = document.getElementById("name-submit");
let takeQuizButton = document.getElementById("take-quiz-btn");
let currentQuestionIndex = 0;
document.getElementById("footer-area").classList.remove("hide");

// Displays and updates progress bar
function updateProgress() {
    let questionIndex = currentQuestionIndex + 1;
    progressBar.style.width = (questionIndex / QUESTIONS.length * 100) + "%";
    progressText.innerHTML = `Question ${questionIndex} of ${QUESTIONS.length}`;
}

// Displays all questions and answers
function displayQuestion() {
    let question = QUESTIONS[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("optionOne").innerText = question.optionOne;
    document.getElementById("optionTwo").innerText = question.optionTwo;
    document.getElementById("optionThree").innerText = question.optionThree;
    document.getElementById("optionFour").innerText = question.optionFour;
}

showNextQuestion();

// Logs the users name in the console
function getUserName() {
    console.log(input.value);
}

takeQuizButton.addEventListener("click", getUserName);

// Initializes quiz
function initializeQuiz() {
    let startQuizButton = document.getElementById("take-quiz-btn");
    let retakeButton = document.getElementById("retake-button");
    startQuizButton.addEventListener("click", startQuiz);
    retakeButton.addEventListener("click", restartQuiz);
}

/**
 * Starts the quiz
 * Captures the name of the user
 * Hides the instructions, results and footer area
 * Displays the quiz area
 */

function startQuiz() {
    let username = document.getElementById("name-submit");
    let pattern = /^[a-zA-Z]+$/;
    if (username.value === "" || !pattern.test(username.value)) {
        document.getElementById("alert-div").classList.remove('hide');
    } else {
        document.getElementById('instructions-area').classList.add('hide');
        document.getElementById("alert-div").classList.add('hide');
        document.getElementById('quiz-area').classList.remove('hide');
        document.getElementById('result-area').classList.add('hide');
        document.getElementById('footer-area').classList.add('hide');
    }
    showNextQuestion();
}

function showNextQuestion() {
    console.log(currentQuestionIndex);
    displayQuestion();
    updateProgress();
}

// Event Listeners for when user clicks the answer option button
document.getElementById("optionOne").addEventListener('click', calculateScore);
document.getElementById("optionTwo").addEventListener('click', calculateScore);
document.getElementById("optionThree").addEventListener('click', calculateScore);
document.getElementById("optionFour").addEventListener('click', calculateScore);

// Calculates the users score after they click on each option
function calculateScore(event) {
    event.preventDefault();
    let answers = QUESTIONS[currentQuestionIndex].answers;
    let answerScore = '';
    let answerText = '';
    if (event.target.id.endsWith('One')) {
        answerText = answers[0][0];
        answerScore = answers[0][1];
    } else if (event.target.id.endsWith('Two')) {
        answerText = answers[1][0];
        answerScore = answers[1][1];
    } else if (event.target.id.endsWith('Three')) {
        answerText = answers[2][0];
        answerScore = answers[2][1];
    } else if (event.target.id.endsWith('Four')) {
        answerText = answers[3][0];
        answerScore = answers[3][1];
    } else {
        alert('Scores not calculated');
    }
    console.log(answerScore);
    console.log(answerText);
    score += answerScore;
    console.log(score);
    currentQuestionIndex++;
    if (currentQuestionIndex === 10) {
        displayResults();
    } else {
        showNextQuestion();
    }
}

/**
 * Displays one of eight possible results depending on the user's total score
 * Hides instructions, quiz and footer area
 */

function displayResults() {
    const results = [
        "resultOneDiv",
        "resultTwoDiv",
        "resultThreeDiv",
        "resultFourDiv",
        "resultFiveDiv",
        "resultSixDiv",
        "resultSevenDiv",
        "resultEightDiv"
    ];

    const rangeOfScores = [
        [10, 14],
        [15, 19],
        [20, 24],
        [25, 29],
        [30, 34],
        [35, 39],
        [40, 44]
    ];
    document.getElementById('quiz-area').classList.add('hide');
    document.getElementById('result-area').classList.remove('hide');
    document.getElementById('retake-quiz-area').classList.remove('hide');
    document.getElementById('footer-area').classList.remove('hide');

    for (let i = 0; i < rangeOfScores.length; i++) {
        if(score >= rangeOfScores[i][0] && score <= rangeOfScores[i][1]) {
            for (let j=0; j< results.length; j++) {
                if (i === j) {
                    document.getElementById(results[j]).classList.remove("hide");
                } else {
                    document.getElementById(results[j]).classList.add('hide');
                }
            }
        }
    }
}

// Restarts the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startQuiz();
}

addEventListener('DOMContentLoaded', initializeQuiz);