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
        { flag: "assets/img/Switzerland.png", options: ["Switzerland", "Singapore", "Malta"], answer: "Switzerland" }
    ],

    level2: [
        { flag: "assets/img/Egypt.png", options: ["Scotland", "Egypt", "Wales"], answer: "Egypt" },
        { flag: "assets/img/Greece.png", options: ["Scotland", "N. Ireland", "Greece"], answer: "Greece" },
        { flag: "assets/img/Italy.png", options: ["Italy", "N. Ireland", "Wales"], answer: "Italy" },
        { flag: "assets/img/Japan.png", options: ["Scotland", "Japan", "Wales"], answer: "Japan" },
        { flag: "assets/img/Vietnam.png", options: ["Vietnam", "N. Ireland", "Wales"], answer: "Vietnam" }
    ]
};

let currentQuestion = 0; // start at the first question
let currentLevel = 1;
let attemptsLeft = 2;

// start button event listener
start.addEventListener("click", startGame);

function startGame() {
    landingPage.classList.add("hidden"); // hide landing page
    gameContainer.classList.remove("hidden") // show game container

    // reset everything for a new game
    currentQuestion = 0;
    currentLevel = 1;
    attemptsLeft = 2;

    loadQuestion();
}
    

function loadQuestion() {
    let currentLevelQuestions = currentLevel === 1 ? questions.level1:questions.level2; // access questions

    if (currentQuestion >= currentLevelQuestions.length) {
        if (currentLevel === 1) {
            alert("Congrats! Level 1 is completed!");
            currentLevel = 2;
            currentQuestion = 0;
            attemptsLeft = 2; // reset attempts for level 2
            loadQuestion(); // load level 2 immediately
        } else {
            alert("Congratulations! You finished the game!");
            resetGame(); // reset game after completing level 2
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
            resetGame(); // restart when all attempts are used
        }
    }
}

function resetGame() {
    landingPage.classList.remove("hidden");
    gameContainer.classList.add("hidden");
}