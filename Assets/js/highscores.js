const highScoresList = document.getElementById("highScoresList");
const clearHighScores = document.getElementById("clearScores");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// Display the high scores to the page from local storage
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="highScore">${score.name} - ${score.score}</li>`;
  })
  .join("");
// Clear local storage if "Clear highscores" is selected
clearHighScores.addEventListener("click", () => {
  localStorage.clear();
  highScoresList.innerHTML = "";
});