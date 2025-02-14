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
      flag: "assets/img/wales.png",
      options: ["Scotland", "N. Ireland", "Wales"],
      answer: "Wales",
    },
    {
      flag: "assets/img/uk.png",
      options: ["United Kingdom", "New Zealand", "Australia"],
      answer: "United Kingdom",
    },
    {
      flag: "assets/img/philippines.png",
      options: ["Czech Republic", "sint Maarten", "Philippines"],
      answer: "Philippines",
    },
    {
      flag: "assets/img/usa.webp",
      options: ["Malaysia", "United States of America", "England"],
      answer: "United States of America",
    },
    {
      flag: "assets/img/switzerland.png",
      options: ["Switzerland", "Singapore", "Malta"],
      answer: "Switzerland",
    },
  ],

  level2: [
    {
      flag: "assets/img/egypt.png",
      options: ["Scotland", "Egypt", "Wales"],
      answer: "Egypt",
    },
    {
      flag: "assets/img/greece.png",
      options: ["Scotland", "N. Ireland", "Greece"],
      answer: "Greece",
    },
    {
      flag: "assets/img/italy.png",
      options: ["Italy", "N. Ireland", "Wales"],
      answer: "Italy",
    },
    {
      flag: "assets/img/japan.png",
      options: ["Scotland", "Japan", "Wales"],
      answer: "Japan",
    },
    {
      flag: "assets/img/vietnam.png",
      options: ["Vietnam", "N. Ireland", "Wales"],
      answer: "Vietnam",
    },
  ],
};

let currentQuestion = 0; // start at the first question
let currentLevel = 1;
let attemptsLeft = 2;
let score = 0;
let timer;

// start button event listener
start.addEventListener("click", startGame);

// Modal
modalClose.addEventListener("click", () => {
  scoreModal.classList.add("hidden");
  resetGame();
});

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

  clearTimer(); // Ensure timer is cleared
  loadQuestion();
}

/**
 * Loads the current question's flag and answer choices.
 * Hides answer buttons until the flag is fully loaded.
 * If questions in current level are completed, it transitions to the next level or end the game.
 */
function loadQuestion() {
  clearTimer();
  let currentLevelQuestions =
    currentLevel === 1 ? questions.level1 : questions.level2; // access questions

  if (currentQuestion >= currentLevelQuestions.length) {
    if (currentLevel === 1) {
      showModal(
        "Congrats! Level 1 is completed!",
        "Click below to proceed to Level 2",
        true
      );
    } else {
      showModal(
        `Congratulations! You finished the game! Your final score is ${score}`,
        "",
        false,
        true
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

  // Start the timer for level 2
  if (currentLevel === 2) {
    let timeLeft = 60;
    timer = setInterval(() => {
      timeLeft--;
      feedback.textContent = `Time left: ${timeLeft}`;

      if (timeLeft <= 0) {
        clearTimer();
        showModal("Time's up!", `Your final score is ${score}`, false, true);
      }
    }, 1000);
  }
}

/**
 * Check if the selected answer is correct.
 * - If correct: moves to the next question after a short delay.
 * - If incorrect: decreases attempts and shos feedback.
 * - If no attempts remain: end the game.
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
      showModal(`Game over! Your final score is ${score}`, "", false, true);
    } else {
      // Show buttons again so the user can try another answer
      answerButtons.forEach((button) => (button.style.visibility = "visible"));
    }
  }
}

/**
 * This modal provide informational content such as score, message or notification.
 */
function showModal(
  title,
  message,
  isLevelComplete = false,
  isGameOver = false
) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  scoreModal.classList.remove("hidden");

  // Remove any old buttons inside the modal
  let oldButton = document.querySelector(".modal-content button");
  if (oldButton) oldButton.remove();

  let button = document.createElement("button");
  button.id = "modal-close";

  if (isLevelComplete) {
    button.textContent = "Level 2";
    button.addEventListener("click", () => {
      scoreModal.classList.add("hidden");
      currentLevel = 2;
      currentQuestion = 0;
      loadQuestion();
    });
  } else if (isGameOver) {
    button.textContent = "Start Again";
    button.addEventListener("click", () => {
      scoreModal.classList.add("hidden");
      resetGame();
    });
  }

  document.querySelector(".modal-content").appendChild(button);
}

/**
 * Resets the game to the initial state by showing the landing page
 * and hiding the game container.
 */
function resetGame() {
  landingPage.classList.remove("hidden");
  gameContainer.classList.add("hidden");
  clearTimer();
}

function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
