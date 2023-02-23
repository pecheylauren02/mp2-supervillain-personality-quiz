let score = 0;

const QUESTIONS = [{
        'question': "1. Which superpower appeals to you the most?",
        "optionOne": "The ability to fly",
        "optionTwo": "Being invisible",
        "optionThree": "Controlling the weather",
        "optionFour": "Super strength",
        "Answer 1": 1,
        "Answer 2": 2,
        "Answer 3": 3,
        "Answer 4": 4

    },
    {
        'question': "What made you become a villain",
        "optionOne": "I want justice",
        "optionTwo": "My parents were killed",
        "optionThree": "I was bullied at school",
        "optionFour": "Loneliness",
        "Answer 1": 1,
        "Answer 2": 2,
        "Answer 3": 3,
        "Answer 4": 4

    },
    {
        'question': "Question 3/10",
        "optionOne": "Answer 1",
        "optionTwo": "Answer 2",
        "optionThree": "Answer 3",
        "optionFour": "Answer 4",
        "Answer 1": 1,
        "Answer 2": 2,
        "Answer 3": 3,
        "Answer 4": 4

    },
];

let questionIndex = 0;

function displayQuestion() {
    let question = QUESTIONS[questionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("optionOne").innerText = question.optionOne;
    document.getElementById("optionTwo").innerText = question.optionTwo;
    document.getElementById("optionThree").innerText = question.optionThree;
    document.getElementById("optionFour").innerText = question.optionFour;
}

/**questionIndex = 1;**/
displayQuestion();

document.getElementById("optionOne").addEventListener('click', calculateScore);

document.getElementById("optionTwo").addEventListener('click', calculateScore);

function calculateScore(event) {
    console.log("clicked");
    let value = event.target.innerText;
    score += QUESTIONS[questionIndex][value];
    console.log(score);
}

/**
remove the hide class from result area
add text to final result
**/
function displayQuizResult() {
    document.getElementById("result-area").classList.remove("hide");
    document.getElementById("final-result").innerText = "Your Supervillain is..."

}

displayQuizResult();