const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
// Display final score
finalScore.innerText = "Your final score is " + mostRecentScore;
// Save initials to the most recent score
initials.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !initials.value;
});
// If no initials are typed, do nothing
saveScoreBtn.addEventListener('click', () => {
  if (initials === "") {
    return;
  }
  // Go to highscores page if submit button is selected
  window.location.assign('./highscores.html');
});

// Save the high score into local storage and save it with the initials 
saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('./end.html');
};