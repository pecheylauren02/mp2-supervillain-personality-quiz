let score = 0;

const QUESTIONS = [{
        'question': "Which superpower appeals to you the most?",
        "optionOne": "The ability to fly",
        "optionTwo": "Being invisible",
        "optionThree": "Controlling the weather",
        "optionFour": "Super strength",
        "The ability to fly": 1,
        "Being invisible": 2,
        "Controlling the weather": 3,
        "Super strength": 4

    },
    {
        'question': "What made you become a villain",
        "optionOne": "I want justice",
        "optionTwo": "My parents were killed",
        "optionThree": "I was bullied at school",
        "optionFour": "Loneliness",
        "I want justice": 1,
        "My parents were killed": 2,
        "I was bullied at school": 3,
        "Loneliness": 4

    },
    {
        'question': "What is your deepest desire as a villain?",
        "optionOne": "To destroy anything that comes in my way",
        "optionTwo": "To start a revolution against society",
        "optionThree": "To get revenge on my nemesis",
        "optionFour": "To take over the world",
        "To destroy anything that comes in my way": 1,
        "To start a revolution against society": 2,
        "To get revenge on my nemesis": 3,
        "To take over the world": 4

    },
    {
        'question': "Which animal would you choose as your sidekick?",
        "optionOne": "A python",
        "optionTwo": "A rottweiler",
        "optionThree": "A raven",
        "optionFour": "A giant tarantula",
        "A python": 1,
        "A rottweiler": 2,
        "A raven": 3,
        "A giant tarantula": 4 
    },
    {
        'question': "What is your biggest weakness?",
        "optionOne": "Arrogance",
        "optionTwo": "My past traumas",
        "optionThree": "Greed",
        "optionFour": "I do not believe in weakness",
        "Arrogance": 1,
        "My past traumas": 2,
        "Greed": 3,
        "I do not believe in weakness": 4
    },
    {
        'question': "Where is your secret hideout?",
        "optionOne": "Inside a cave",
        "optionTwo": "In an abandoned house",
        "optionThree": "In a luxurious mansion",
        "optionFour": "Deep in the ocean",
        "Inside a cave": 1,
        "In an abandoned house": 2,
        "In a luxurious mansion": 3,
        "Deep in the ocean": 4
    },
    {
        'question': "Your best friend betrays you. How do you deal with them?",
        "optionOne": "Wallow in your own self-pity",
        "optionTwo": "Destroy their reputation",
        "optionThree": "Act normal but secretly plot your revenge",
        "optionFour": "Go solo, you don't need anyone else",
        "Wallow in your own self-pity": 1,
        "Destroy their reputation": 2,
        "Act normal but secretly plot your revenge": 3,
        "Go solo, you don't need anyone else": 4
    },
    {
        'question': "What weapons would you use against your enemies?",
        "optionOne": "Magic potions and spells",
        "optionTwo": "My own brute force and strength",
        "optionThree": "Disguises, deception and manipulation",
        "optionFour": "A sword",
        "Magic potions and spells": 1,
        "My own brute force and strength": 2,
        "Disguises, deception and manipulation": 3,
        "A sword": 4
    },
    {
        'question': "How would you work as a villain?",
        "optionOne": "Completely alone",
        "optionTwo": "With my sidekick, spirit animal",
        "optionThree": "With a team of minions",
        "optionFour": "Under the instructions of another villain",
        "Completely alone": 1,
        "With my sidekick, spirit animal": 2,
        "With a team of minions": 3,
        "Under the instructions of another villain": 4
    },
    {
        'question': "What is your deepest desire as a villain?",
        "optionOne": "To destroy anything that comes in my way",
        "optionTwo": "To start a revolution against society",
        "optionThree": "To get revenge on my nemesis",
        "optionFour": "To take over the world",
        "To destroy anything that comes in my way": 1,
        "To start a revolution against society": 2,
        "To get revenge on my nemesis": 3,
        "To take over the world": 4
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

/*questionIndex = 1;*/
displayQuestion();

document.getElementById("optionOne").addEventListener('click', calculateScore);

document.getElementById("optionTwo").addEventListener('click', calculateScore);
document.getElementById("optionThree").addEventListener('click', calculateScore);
document.getElementById("optionFour").addEventListener('click', calculateScore);


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