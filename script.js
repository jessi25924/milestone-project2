const landingPage = document.getElementById("landing-page");
const gameContainer = document.getElementById("game-container");
const start = document.getElementById("start-button");
const flagImage = document.getElementById("flag-image");
const answerButtons = document.querySelectorAll(".answer-button");

const questions = {
    level1: [
        { flag: "assets/img/Wales.png", options: ["Scotland", "N. Ireland", "Wales"], answer: "Wales" },
        { flag: "assets/img/UK.png", options: ["United Kingdom", "New Zealand", "Australia"], answer: "United Kingdom" },
        { flag: "assets/img/Philippines.png", options: ["Czech Republic", "sint Maarten", "Philippines"], answer: "Philippines" },
        { flag: "assets/img/USA.webp", options: ["Malaysia", "United State of America", "England"], answer: "United State of America" },
        { flag: "assets/img/Switzerland.png", options: ["Switzerland", "Singapore", "Malta"], answer: "Malta" },
    ]
};

let currentQuestionIndex = 0; // start at the first question

// start button event listener
start.addEventListener('click', () => {
    landingPage.classList.add("hidden"); // hide landing page
    gameContainer.classList.remove("hidden") // show game container
    loadQuestion();
});

function loadQuestion() {
    let question = level1Questions[currentQuestionIndex]; // get the current question

    flagImage.src = question.flag; // set flag image

    // update the answer buttons
    optionButtons.forEach((btn, index) => {
        btn.textContent = question.options[index]; // set button text
        btn.onclick = () => checkAnswer(question.options[index], question.answer); // check the answer
    });
}
