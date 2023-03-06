let score = 0;
let questionsAnswered = 1;
let progressBar = document.getElementById("progress-bar");
let progressText = document.getElementById("progress-text");
let currentQuestion = document.getElementById("current-question");
let totalQuestions = document.getElementById("total-questions");
let retakeButton = document.getElementById("retake-button");

let questions = [{
        'question': "Which superpower appeals to you the most?",
        "optionOne": "The ability to fly",
        "optionTwo": "Being invisible",
        "optionThree": "Controlling the weather",
        "optionFour": "Super strength",
        "answers": [
            ["The ability to fly", 4],
            ["Being invisible", 2],
            ["Controlling the weather", 1],
            ["Super strength", 3]
        ]
    },
    {
        'question': "What made you become a villain?",
        "optionOne": "I want justice",
        "optionTwo": "My parents were killed",
        "optionThree": "I was bullied at school",
        "optionFour": "Loneliness",
        "answers": [
            ["I want justice", 1],
            ["My parents were killed", 3],
            ["I was bullied at school", 4],
            ["Loneliness", 2]
        ]

    },
    {
        'question': "What is your deepest desire as a villain?",
        "optionOne": "To destroy anything that comes in my way",
        "optionTwo": "To start a revolution against society",
        "optionThree": "To get revenge on my nemesis",
        "optionFour": "To take over the world",
        "answers": [
            ["To destroy anything that comes in my way", 3],
            ["To start a revolution against society", 2],
            ["To get revenge on my nemesis", 4],
            ["To take over the world", 1]
        ]

    },
    {
        'question': "Which animal would you choose as your sidekick?",
        "optionOne": "A python",
        "optionTwo": "A rottweiler",
        "optionThree": "A raven",
        "optionFour": "A giant tarantula",
        "answers": [
            ["A python", 1],
            ["A rottweiler", 3],
            ["A raven", 2],
            ["A giant tarantula", 4]
        ]
    },
    {
        'question': "What is your biggest weakness?",
        "optionOne": "My fear of being left alone",
        "optionTwo": "My traumatic childhood",
        "optionThree": "The love of my life",
        "optionFour": "I will never reveal my weakness",
        "answers": [
            ["My fear of being left alone", 2],
            ["My traumatic childhood", 4],
            ["The love of my life", 3],
            ["I will never reveal my weakness", 1]
        ]
    },
    {
        'question': "Where is your secret hideout?",
        "optionOne": "Inside a cave",
        "optionTwo": "In an abandoned house",
        "optionThree": "In a luxurious mansion",
        "optionFour": "Deep in the ocean",
        "answers": [
            ["Inside a cave", 2],
            ["In an abandoned house", 4],
            ["In a luxurious mansion", 1],
            ["Deep in the ocean", 3]
        ]
    },
    {
        'question': "Your best friend betrays you. How do you deal with them?",
        "optionOne": "Wallow in your own self-pity",
        "optionTwo": "Destroy their reputation",
        "optionThree": "Act normal but secretly plot your revenge",
        "optionFour": "Go solo, you don't need anyone else",
        "answers": [
            ["Wallow in your own self-pity", 2],
            ["Destroy their reputation", 3],
            ["Act normal but secretly plot your revenge", 4],
            ["Go solo, you don't need anyone else", 1]
        ]
    },
    {
        'question': "Which weapons would you use against your enemies?",
        "optionOne": "Magic potions and spells",
        "optionTwo": "My own brute force and strength",
        "optionThree": "Disguises, deception and manipulation",
        "optionFour": "A sword",
        "answers": [
            ["Magic potions and spells", 1],
            ["My own brute force and strength", 3],
            ["Disguises, deception and manipulation", 2],
            ["A sword", 4]
        ]
    },
    {
        'question': "How would you work as a villain?",
        "optionOne": "Completely alone",
        "optionTwo": "With my sidekick, spirit animal",
        "optionThree": "With a team of minions",
        "optionFour": "Under the instructions of another villain",
        "answers": [
            ["Completely alone", 2],
            ["With my sidekick, spirit animal", 3],
            ["With a team of minions", 1],
            ["Under the instructions of another villain", 4]
        ]
    },
    {
        'question': "Which personality trait applies to you most?",
        "optionOne": "Aggressive",
        "optionTwo": "Greedy",
        "optionThree": "Narcissistic",
        "optionFour": "Jealous",
        "answers": [
            ["Aggressive", 3],
            ["Greedy", 1],
            ["Narcissistic", 2],
            ["Jealous", 4]
        ]
    }
];

let currentQuestionIndex = 0;
//let selectedAnswers = [];

//const questionElement = document.getElementById("question");
function updateProgress() {
    progressBar.style.width = (questionsAnswered / questions.length * 100) + "%";
    progressText.innerHTML = `Question ${questionsAnswered} of ${questions.length}`;
}

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("optionOne").innerText = question.optionOne;
    document.getElementById("optionTwo").innerText = question.optionTwo;
    document.getElementById("optionThree").innerText = question.optionThree;
    document.getElementById("optionFour").innerText = question.optionFour;
    updateProgress();
}

displayQuestion();

function startQuiz() {

    // Captures name of user
    let username = document.getElementById("name-submit");

    // Alert if no username is entered
    if (username.value === "") {
        alert(`Please enter your name first to take the quiz!`);
    } else {
        // Hide the instructions area
        document.getElementById('instructions-area').classList.add('hide');
        // Show the quiz area
        document.getElementById('quiz-area').classList.remove('hide');
        // Hide the results area
        document.getElementById('result-area').classList.add('hide');
        // Hide the footer area
        document.getElementById('footer-area').classList.add('hide');
    }
    console.log("PLAYING QUIZ");

}

function showNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    updateProgress();
}

// Event Listeners for when user clicks the buttons

document.getElementById("optionOne").addEventListener('click', calculateScore);
document.getElementById("optionTwo").addEventListener('click', calculateScore);
document.getElementById("optionThree").addEventListener('click', calculateScore);
document.getElementById("optionFour").addEventListener('click', calculateScore);


function calculateScore(event) {
    console.log("clicked");
    event.preventDefault();

    let value = event.target.innerText;
    let answers = questions[currentQuestionIndex]['answers'];

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
        console.log('Scores not calculated');
    }

    console.log(answerScore);
    console.log(answerText);

    score += answerScore;

    showNextQuestion();
    console.log(score);

    questionsAnswered++;

    if (questionsAnswered === 10) {
        displayResults();
        //restartQuiz();
    } else {
        console.log("Quiz not finished yet keep going");
        updateProgress();
    }

}

/* Results area */

function displayResults() {
    document.getElementById('quiz-area').classList.add('hide');
    document.getElementById('result-area').classList.remove('hide');
    document.getElementById('footer-area').classList.remove('hide');

    if (score >= 10 && score <= 14) {
        document.getElementById("resultOneDiv").classList.remove("hide");
        console.log("resultOne")
    } else if (score >= 15 && score <= 19) {
        document.getElementById("resultTwoDiv").classList.remove("hide");
        console.log("resultTwo")
    } else if (score >= 20 && score <= 24) {
        document.getElementById("resultThreeDiv").classList.remove("hide");
        console.log("resultThree")
    } else if (score >= 25 && score <= 29) {
        document.getElementById("resultFourDiv").classList.remove("hide");
        console.log("resultFour")
    } else if (score >= 30 && score <= 34) {
        document.getElementById("resultFiveDiv").classList.remove("hide");
        console.log("resultFive")
    } else if (score >= 35 && score <= 39) {
        document.getElementById("resultSixDiv").classList.remove("hide");
        console.log("resultSix")
    } else if (score >= 40 && score <= 44) {
        document.getElementById("resultSevenDiv").classList.remove("hide");
        console.log("resultSeven")
    } else {
        document.getElementById("resultEightDiv").classList.remove("hide");
        console.log("resultEight")
    }

}

function restartQuiz() {
    score = 0;
    questionsAnswered = 1;
    currentQuestionIndex = 1;
    document.getElementById('quiz-area').classList.remove('hide');
    document.getElementById('result-area').classList.add('hide');
    document.getElementById('footer-area').classList.add('hide');

}

retakeButton.addEventListener("click", restartQuiz);


  
