const landingPage = document.getElementById("landing-page");
const gameContainer = document.getElementById("game-container");
const start = document.getElementById("start-button");
const flagImage = document.getElementById("flag-image");
const answerButtons = document.querySelectorAll(".answer-button");
const feedback = document.getElementById("feedback");
const scoreModal = document.getElementById("score-modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalClose = document.getElementById("modal-close");

const questions = {
  level1: [
    {
      flag: "assets/img/Wales.png",
      options: ["Scotland", "N. Ireland", "Wales"],
      answer: "Wales",
    },
    {
      flag: "assets/img/UK.png",
      options: ["United Kingdom", "New Zealand", "Australia"],
      answer: "United Kingdom",
    },
    {
      flag: "assets/img/Philippines.png",
      options: ["Czech Republic", "sint Maarten", "Philippines"],
      answer: "Philippines",
    },
    {
      flag: "assets/img/USA.webp",
      options: ["Malaysia", "United States of America", "England"],
      answer: "United States of America",
    },
    {
      flag: "assets/img/Switzerland.png",
      options: ["Switzerland", "Singapore", "Malta"],
      answer: "Switzerland",
    },
  ],

  level2: [
    {
      flag: "assets/img/Egypt.png",
      options: ["Scotland", "Egypt", "Wales"],
      answer: "Egypt",
    },
    {
      flag: "assets/img/Greece.png",
      options: ["Scotland", "N. Ireland", "Greece"],
      answer: "Greece",
    },
    {
      flag: "assets/img/Italy.png",
      options: ["Italy", "N. Ireland", "Wales"],
      answer: "Italy",
    },
    {
      flag: "assets/img/Japan.png",
      options: ["Scotland", "Japan", "Wales"],
      answer: "Japan",
    },
    {
      flag: "assets/img/Vietnam.png",
      options: ["Vietnam", "N. Ireland", "Wales"],
      answer: "Vietnam",
    },
  ],
};

// Modal
modalClose.addEventListener("click", () => {
  scoreModal.classList.add("hidden");
  resetGame();
});

let currentQuestion = 0; // start at the first question
let currentLevel = 1;
let attemptsLeft = 2;
let score = 0;

// start button event listener
start.addEventListener("click", startGame);

/**
 * Starts the game by hiding the landing page and showing the game container
 * Reset game variables and loads the first question.
 */
function startGame() {
  landingPage.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  // reset everything for a new game
  currentQuestion = 0;
  currentLevel = 1;
  attemptsLeft = 2;
  score = 0;

  loadQuestion();
}

/**
 * Loads the current question's flag and answer choices.
 * Hides answer buttons until the flag is fully loaded.
 * If questions in current level are completed, it transitions to the next level or end the game.
 */
function loadQuestion() {
  let currentLevelQuestions =
    currentLevel === 1 ? questions.level1 : questions.level2; // access questions

  if (currentQuestion >= currentLevelQuestions.length) {
    if (currentLevel === 1) {
      showModal("Congrats! Level 1 is completed!");
      currentLevel = 2;
      currentQuestion = 0;
      setTimeout(loadQuestion, 2000);
    } else {
      showModal(
        `Congratulations! You finished the game! Your final score is ${score}`
      );
    }
    return;
  }

  let question = currentLevelQuestions[currentQuestion]; // Retrieves the current question based on the current level

  // Reset attempts for each new question
  attemptsLeft = 2;

  // Hide answer buttons while the flag loads
  answerButtons.forEach((button) => (button.style.visibility = "hidden"));

  flagImage.src = question.flag; // Update flag image

  // When the flag is loaded, show the buttons again
  flagImage.onload = () => {
    answerButtons.forEach((button) => (button.style.visibility = "visible"));
  };

  // Update answer buttons
  answerButtons.forEach((button, index) => {
    button.textContent = question.options[index];
    button.onclick = () => checkAnswer(button.textContent, question.answer); // event listeners for each answer button
  });

  feedback.textContent = ""; // Clear previous feedback
}

/**
 * Check if the selected answer is correct.
 * - If correct: moves to the next question after a short delay.
 * - If incorrect: decreases attempts and shos feedback.
 * - If no attempts remain: end the game.
 *
 * @param {string} selected - the answer chosen by the player.
 * @param {string} correct - the correct answer for the current question.
 */
function checkAnswer(selected, correct) {
  // Hide answer buttons when an answer is selected
  answerButtons.forEach((button) => (button.style.visibility = "hidden"));

  if (selected === correct) {
    feedback.textContent = "Correct!";
    score += 1; // Increases score
    currentQuestion++; // next question
    setTimeout(loadQuestion, 1000);
  } else {
    attemptsLeft--; // reduce attempts
    feedback.textContent = `Wrong! Chances left: ${attemptsLeft}`;

    if (attemptsLeft <= 0) {
      showModal(`Game over! Your final score is ${score}`);
    } else {
      // Show buttons again so the user can try another answer
      answerButtons.forEach((button) => (button.style.visibility = "visible"));
    }
  }
}

/**
 * This modal provide informational content such as score, message or notification.
 */
function showModal(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  scoreModal.classList.remove("hidden");
}

/**
 * Resets the game to the initial state by showing the landing page
 * and hiding the game container.
 */
function resetGame() {
  landingPage.classList.remove("hidden");
  gameContainer.classList.add("hidden");
}
