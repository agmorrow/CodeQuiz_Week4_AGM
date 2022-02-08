const answerMsg = document.getElementById('answerMsg');
const info_box = document.getElementById("infoBox");
const start_btn = document.getElementById("startQuiz");
const questionContainerEl = document.getElementById('question-container');
const questionsEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answerButton");
let score = 0;
const timerEl = document.getElementById("timer");

let secondsLeft = 60;

let shuffleQuestions, currentQuestionIndex

const questions = [{
    question: "Which is not a branch of Dunder Mifflin?",
    answers: [{
        text: "Buffalo",
        correct: false
      },
      {
        text: "Nashua",
        correct: false
      },
      {
        text: "Princeton",
        correct: true
      },
      {
        text: "Albany",
        correct: false
      }
    ],
  },
  {
    question: "What company did Michael start after he quit Dunder Mifflin?",
    answers: [{
        text: "Paper R Us",
        correct: false
      },
      {
        text: "Michael Scott Paper Company",
        correct: true
      },
      {
        text: "Office Depot",
        correct: false
      },
      {
        text: "Prince Family Paper Company",
        correct: false
      }
    ]
  },
  {
    question: 'In the episode "Back From Vacation," Michael returns to the office from a trip to Jamaica with:',
    answers: [{
        text: "Beads in his hair",
        correct: true
      },
      {
        text: "A new haircut",
        correct: false
      },
      {
        text: "Dreadlocks",
        correct: false
      },
      {
        text: "None of the above",
        correct: false
      }
    ]
  },
  {
    question: "Whose birthday does the office celebrate when there are rumors that the company is downsizing?",
    answers: [{
        text: "Kelly",
        correct: false
      },
      {
        text: "Meredith",
        correct: true
      },
      {
        text: "Phyllis",
        correct: false
      },
      {
        text: "Angela",
        correct: false
      }
    ]
  },
  {
    question: "Who did Michael run over with his car?",
    answers: [{
        text: "Kelly",
        correct: false
      },
      {
        text: "Pam",
        correct: false
      },
      {
        text: "Ryan",
        correct: false
      },
      {
        text: "Meredith",
        correct: true
      }
    ]
  },
  {
    question: "Who beats Michael's pushup challenge by doing 26 pushups at the office?",
    answers: [{
        text: "Jim",
        correct: false
      },
      {
        text: "Oscar",
        correct: false
      },
      {
        text: "Stanley",
        correct: true
      },
      {
        text: "Meredith",
        correct: false
      }
    ]
  },
  {
    question: "In Season 1, what type of training workshop does Michael lead?",
    answers: [{
        text: "Safety training",
        correct: false
      },
      {
        text: "Sensitivity training",
        correct: true
      },
      {
        text: "Managerial training",
        correct: false
      },
      {
        text: "Sales training",
        correct: false
      }
    ]
  },
  {
    question: "What new purchase is Michael excited to show off at his dinner party?",
    answers: [{
        text: "Foosball table",
        correct: false
      },
      {
        text: "Record player",
        correct: false
      },
      {
        text: "Mini fridge",
        correct: false
      },
      {
        text: "Plasma TV",
        correct: true
      }
    ]
  },
  {
    question: "What is Gabe's middle name?",
    answers: [{
        text: "Sam",
        correct: false
      },
      {
        text: "Susan",
        correct: true
      },
      {
        text: "Seth",
        correct: false
      },
      {
        text: "Sharon",
        correct: false
      }
    ]
  },
  {
    question: "What is the name of Toby's True Crime Podcast?",
    answers: [{
        text: "Stolen Innocence: The Scranton Strangler",
        correct: false
      },
      {
        text: "My Name is George",
        correct: false
      },
      {
        text: "Toby Tells All",
        correct: false
      },
      {
        text: "The Flenderson Files",
        correct: true
      }
    ]
  },
  {
    question: "What is Ben Franklin's real name?",
    answers: [{
        text: "Pete",
        correct: false
      },
      {
        text: "Larry",
        correct: false
      },
      {
        text: "Gorden",
        correct: true
      },
      {
        text: "Philip",
        correct: false
      }
    ]
  },
  {
    question: "What is the trick to Kevin's chili?",
    answers: [{
        text: "Undercook the onions",
        correct: true
      },
      {
        text: "Use three kinds of tomatoes",
        correct: false
      },
      {
        text: "Cook for two extra hours",
        correct: false
      },
      {
        text: "Ground turkey",
        correct: false
      }
    ]
  },
  {
    question: "How many bottles of vodka does Michael buy for the Christmas party?",
    answers: [{
        text: "20",
        correct: false
      },
      {
        text: "10",
        correct: false
      },
      {
        text: "15",
        correct: true
      },
      {
        text: "8",
        correct: false
      }
    ]
  },
  {
    question: "What does Michael buy Ryan for secrete santa?",
    answers: [{
        text: "Oven Mit",
        correct: false
      },
      {
        text: "Video Ipod",
        correct: true
      },
      {
        text: "Tea pot",
        correct: false
      },
      {
        text: "Old shirt",
        correct: false
      }
    ]
  },
  {
    question: "What does Michael have written on his forehead during the diversity day training?",
    answers: [{
        text: "Black",
        correct: false
      },
      {
        text: "Italian",
        correct: false
      },
      {
        text: "Martin Luther King Jr.",
        correct: true
      },
      {
        text: "Bob Marley",
        correct: false
      }
    ]
  }
];
// Set timer function
function setTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;
    // If seconds left goes to zero or below zero, end game and collect score
    if (secondsLeft <= 0) {
      localStorage.setItem('mostRecentScore', score);
      return window.location.assign('./end.html');
    }
  }, 1000);
}
// Show directions when the page loads
info_box.classList.remove('hide');
// When the start button is clicked, set the timer and start quiz
start_btn.addEventListener('click', () => {
  score = 0;
  setTime();
  startQuiz();
});
// Hide directions and start quiz
function startQuiz() {
  info_box.classList.add('hide')
  start_btn.classList.add('hide')
  // Shuffle through random questions
  shuffleQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}
// Set the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex])
}
// Show the next question
function showQuestion(questions) {
  questionsEl.innerText = questions.question;
  questions.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.value = answer.correct
    button.addEventListener("click", checkQuestion)
    button.classList.add('btn')
    answerButtonsEl.appendChild(button)
  })
};

const points = 5;
// If the correct answer is selected, add points and display "Correct!"
function checkQuestion(e) {
  if (e.target.value == "true") {
    answerMsg.textContent = "Correct!"
    incrementScore(points);
    // If the wrong answer is selected, display "Wrong! and deduct 10 seconds"
  } else {
    answerMsg.textContent = "Wrong!"
    secondsLeft -= 10;
  }
  // Set timeout function
  setTimeout(function () {
    answerMsg.textContent = ""
    nextQuestion();
    setNextQuestion();
  }, 1000)
}
// Increment score function
incrementScore = (num) => {
  score += num;
};
// Go to next question and save score to local storage
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++
    if (currentQuestionIndex === 10) {
      localStorage.setItem('mostRecentScore', score);
      return window.location.assign('./end.html');
    }

  }
};
// Reset the questions after answered
function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
  }
};