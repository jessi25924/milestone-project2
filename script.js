const landingPage = document.getElementById("landing-page");
const gameContainer = document.getElementById("game-container");
const start = document.getElementById("start-button");
const flagImage = document.getElementById("flag-image");
const answerButtons = document.querySelectorAll(".answer-button");
const feedback = document.getElementById("feedback");

const questions = {
    level1: [
        { flag: "assets/img/Wales.png", options: ["Scotland", "N. Ireland", "Wales"], answer: "Wales" },
        { flag: "assets/img/UK.png", options: ["United Kingdom", "New Zealand", "Australia"], answer: "United Kingdom" },
        { flag: "assets/img/Philippines.png", options: ["Czech Republic", "sint Maarten", "Philippines"], answer: "Philippines" },
        { flag: "assets/img/USA.webp", options: ["Malaysia", "United State of America", "England"], answer: "United State of America" },
        { flag: "assets/img/Switzerland.png", options: ["Switzerland", "Singapore", "Malta"], answer: "Switzerland" },
    ]
    level2: [
        
    ]
};

let currentQuestion = 0; // start at the first question
let currentLevel = 1;
let attemptsLeft = 2;

// start button event listener
start.addEventListener('click', () => {
    landingPage.classList.add("hidden"); // hide landing page
    gameContainer.classList.remove("hidden") // show game container
    loadQuestion();
});

function loadQuestion() {
    let currentLevelQuestions = questions.level1; // access level 1 questions

    if (currentQuestion >= currentLevelQuestions.length) {
        if (currentLevel === 1) {
            alert("Congrats! Level 1 is completed!");
            currentLevel = 2;
            currentQuestion = 0;
        } else {
            alert("You won!");
        }
        return;
    }

    let question = currentLevelQuestions[currentQuestion];

    flagImage.src = question.flag; // update flag image

    // update answer buttons
    answerButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.onclick = () => checkAnswer(button.textContent, question.answer); // event listeners for each answer button
    });

    feedback.textContent = ""; // clear previous feedback
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        feedback.textContent = "Correct!";
        currentQuestion++; // next question
        setTimeout(loadQuestion, 1000);
    } else {
        attemptsLeft--; // reduce attempts
        feedback.textContent = `Wrong! Chances left: ${attemptsLeft}`;

        if (attemptsLeft <= 0) {
            alert("Game over! Try again!");
        }
    }
}
