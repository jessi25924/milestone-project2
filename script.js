const landingPage = document.getElementById("landing-page");
const gameContainer = document.getElementById("game-container");
const start = document.getElementById("start-button");

start.addEventListener('click', () => {
    landingPage.classList.add("hidden");
    gameContainer.classList.remove("hidden")
});
