const answerMsg = document.getElementById('answerMsg');
const info_box = document.getElementById("infoBox");
const start_btn = document.getElementById("startQuiz");
const questionContainerEl = document.getElementById('question-container');
const questionsEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-button");
const timerEl = document.getElementById("timer");

// let timeLeft = 75;
// const subtractTen = 10;

let shuffleQuestions, currentQuestionIndex


info_box.classList.remove('hide')
start_btn.addEventListener('click', startQuiz)

function startQuiz() {
    info_box.classList.add('hide')
    start_btn.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
    // timer()
}

// const timeInterval = setInterval(function () {});
// let timer = function () {
//     timeInterval = setInterval(function () {
//         if (timeLeft > 0) {
//             timerEl.textContent = 'Time: ' + timeLeft;
//             timeLeft--;
//         }

//     }, 1000);
// };



// const subtractTenFromTimer = function () {
//     clearInterval(timeInterval);
//     timeLeft = timeLeft - subtractTen;
//     timer();
// };


function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

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
}

function checkQuestion(e) {
    if (e.target.value == "true") {
        answerMsg.textContent = "Correct!"
    } else {
        answerMsg.textContent = "Incorrect"
    }
    NextQuestion();
    
}

function nextQuestion() {
    const endOfQuizIndex = currentQuestionIndex;
    endOfQuizIndex++
    if (currentQuestionIndex < questions.length -1){
        currentQuestionIndex ++ }
        if ( endOfQuizIndex == questions.length ) {
        } 
    }


function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}



const questions = [{
    question: "Who was the boss at the Dunder Mifflin Scranton branch?",
    answers: [{
            text: "David Wallace",
            correct: false
        },
        {
            text: "Michael Scarn",
            correct: false
        },
        {
            text: "Michael Scott",
            correct: true
        },
        {
            text: "Jan Levinson",
            correct: false
        }
    ],

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

}]