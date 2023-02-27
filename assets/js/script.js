
let score = 0;

const QUESTIONS = [{
        'question': "Which superpower appeals to you the most?",
        "optionOne": "The ability to fly",
        "optionTwo": "Being invisible",
        "optionThree": "Controlling the weather",
        "optionFour": "Super strength",
        "answers": [
            ["The ability to fly", 1],
            ["Being invisible", 2],
            ["Controlling the weather", 3],
            ["Super strength", 4],
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
            ["My parents were killed", 2],
            ["I was bullied at school", 3],
            ["Loneliness", 4],
        ]

    },
    {
        'question': "What is your deepest desire as a villain?",
        "optionOne": "To destroy anything that comes in my way",
        "optionTwo": "To start a revolution against society",
        "optionThree": "To get revenge on my nemesis",
        "optionFour": "To take over the world",
        "answers": [
            ["To destroy anything that comes in my way", 1],
            ["To start a revolution against society", 2],
            ["To get revenge on my nemesis", 3],
            ["To take over the world", 4],
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
            ["A rottweiler", 2],
            ["A raven", 3],
            ["A giant tarantula", 4],
        ]
    },
    {
        'question': "What is your biggest weakness?",
        "optionOne": "My fear of being left alone",
        "optionTwo": "My traumatic childhood",
        "optionThree": "The love of my life",
        "optionFour": "I will never reveal my weakness",
        "answers": [
            ["My fear of being left alone", 1],
            ["My traumatic childhood", 2],
            ["The love of my life", 3],
            ["I will never reveal my weakness", 4],
        ]
    },
    {
        'question': "Where is your secret hideout?",
        "optionOne": "Inside a cave",
        "optionTwo": "In an abandoned house",
        "optionThree": "In a luxurious mansion",
        "optionFour": "Deep in the ocean",
        "answers": [
            ["Inside a cave", 1],
            ["In an abandoned house", 2],
            ["In a luxurious mansion", 3],
            ["Deep in the ocean", 4],
        ]
    },
    {
        'question': "Your best friend betrays you. How do you deal with them?",
        "optionOne": "Wallow in your own self-pity",
        "optionTwo": "Destroy their reputation",
        "optionThree": "Act normal but secretly plot your revenge",
        "optionFour": "Go solo, you don't need anyone else",
        "answers": [
            ["Wallow in your own self-pity", 1],
            ["Destroy their reputation", 2],
            ["Act normal but secretly plot your revenge", 3],
            ["Go solo, you don't need anyone else", 4],
        ]
    },
    {
        'question': "What weapons would you use against your enemies?",
        "optionOne": "Magic potions and spells",
        "optionTwo": "My own brute force and strength",
        "optionThree": "Disguises, deception and manipulation",
        "optionFour": "A sword",
        "answers": [
            ["Magic potions and spells", 1],
            ["My own brute force and strength", 2],
            ["Disguises, deception and manipulation", 3],
            ["A sword", 4],
        ]
    },
    {
        'question': "How would you work as a villain?",
        "optionOne": "Completely alone",
        "optionTwo": "With my sidekick, spirit animal",
        "optionThree": "With a team of minions",
        "optionFour": "Under the instructions of another villain",
        "answers": [
            ["Completely alone", 1],
            ["With my sidekick, spirit animal", 2],
            ["With a team of minions", 3],
            ["Under the instructions of another villain", 4],
        ]
    },
    {
        'question': "What is your deepest desire as a villain?",
        "optionOne": "To destroy anything that comes in my way",
        "optionTwo": "To start a revolution against society",
        "optionThree": "To get revenge on my nemesis",
        "optionFour": "To take over the world",
        "answers": [
            ["To destroy anything that comes in my way", 1],
            ["To start a revolution against society", 2],
            ["To get revenge on my nemesis", 3],
            ["To take over the world", 4],
        ]
    },
    {
        'question': "Which personality trait applies to you most?",
        "optionOne": "Aggressive",
        "optionTwo": "Greedy",
        "optionThree": "Narcissistic",
        "optionFour": "Jealous",
        "answers": [
            ["Aggressive", 1],
            ["Greedy", 2],
            ["Narcissistic", 3],
            ["TJealous", 4],
        ]
    }
];

let currentQuestionIndex = 0;
// let selectedAnswers = [];

const questionElement = document.getElementById("question");

function displayQuestion() {
    let question = QUESTIONS[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("optionOne").innerText = question.optionOne;
    document.getElementById("optionTwo").innerText = question.optionTwo;
    document.getElementById("optionThree").innerText = question.optionThree;
    document.getElementById("optionFour").innerText = question.optionFour;
} 

displayQuestion();

function showNextQuestion() {
    displayQuestion();
    currentQuestionIndex++;
}

document.getElementById("optionOne").addEventListener('click', calculateScore);
document.getElementById("optionTwo").addEventListener('click', calculateScore);
document.getElementById("optionThree").addEventListener('click', calculateScore);
document.getElementById("optionFour").addEventListener('click', calculateScore);


function calculateScore(event) {
    // console.log("clicked"); previous code

    let value = event.target.innerText;

    let answers = QUESTIONS[currentQuestionIndex]['answers'];

    let answerScore = '';
    let answerText = '';

    if (event.target.id.endsWith('One')) {
        answerText = answers[0][0];
        answerScore = answers[0][1]
    } 
    
    else if (event.target.id.endsWith('Two')) {
        answerText = answers[1][0];
        answerScore = answers[1][1];
    } 

    else if (event.target.id.endsWith('Three')) {
        answerText = answers[2][0];
        answerScore = answers[2][1]
    }
    else if (event.target.id.endsWith('Four')) {
        answerText = answers[3][0];
        answerScore = answers[3][1];
    } else {
        console.log(answerScore);
        console.log(answerText);
    }
    
    score += answerScore;

    showNextQuestion();
    // score += QUESTIONS[questionIndex][value]; previous code, ignore for now
   // console.log(score); previous code, ignore for now
}

/**
remove the hide class from result area
add text to final result
**/
function displayQuizResult() {
    document.getElementById("result-area").classList.remove("hide");
    document.getElementById("final-result").innerText = "";
    document.getElementsByClassName("resultOne");
}
     
    //This should work but check why it is not working

    /*if (score < 19) {
        document.getElementById("final-result").innerText = "Scar";
        document.getElementsByClassName("resultOne");
    } else if (score < 29) {
        document.getElementById("final-result").innerText = "Green Goblin";
        document.getElementsByClassName("resultTwo");
    } else if (score < 39) {
        document.getElementById("final-result").innerText = "It";
        document.getElementsByClassName("resultThree");
    } else if (score < 49) {
        document.getElementById("final-result").innerText = "Joker";
        document.getElementsByClassName("resultFour");
    } */


displayQuizResult();