const info_box = document.getElementById("infoBox");
const start_btn = document.getElementById("startQuiz");
const questionContainerEl = document.getElementById('question-container');
const questionsEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-button");

let shuffleQuestions, currentQuestionIndex




info_box.classList.remove('hide')
start_btn.addEventListener('click', startQuiz)

function startQuiz() {
    info_box.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion() {
    resetState()
   showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionsEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
   while (answerButtonsEl.firstChild) {
       answerButtonsEl.removeChild(answerButtonsEl.firstChild)
   }
}

function selectAnswer(e) {

}

const questions = [
        {
            question: "Who was the boss at the Dunder Mifflin Scranton branch?",
            answers: [
                { text: "David Wallace", correct: false },
                { text: "Michael Scarn", correct: false },
                { text: "Michael Scott", correct: true },
                { text: "Jan Levinson", correct: false }
            ]
        }
    ]       






















