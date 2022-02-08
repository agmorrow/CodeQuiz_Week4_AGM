const highScoresList = document.getElementById("highScoresList");
const clearHighScores = document.getElementById("clearScores");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

clearHighScores.addEventListener("click", () => {
    localStorage.clear();
    highScoresList.innerHTML = "";
});