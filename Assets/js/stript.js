const info_box = document.getElementById("infoBox");
const start_btn = document.getElementById("startQuiz");
const questionContainerEl = document.getElementById('question-container');
const questionsEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-button");
const timerEl = document.getElementById("timer");

let timeLeft = 75;
const stopTime = 0;
const subtractTen = 10;

let shuffleQuestions, currentQuestionIndex




info_box.classList.remove('hide')
start_btn.addEventListener('click', startQuiz)

function startQuiz() {
    timer()
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
const selectButton = e.target
const correct = selectButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var timeInterval = setInterval(function(){});
var timer = function(){
    timeInterval = setInterval(function(){
        if (timeLeft > 0){
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft --;
        }
        // else if (timeLeft <= 0){
        //     endQuiz();
        //     rightOrWrongEl.remove();
        //     q1Answer1.remove();
        //     q1Answer2.remove();
        //     q1Answer3.remove();
        //     q1Answer4.remove();

        //     q2Answer1.remove();
        //     q2Answer2.remove();
        //     q2Answer3.remove();
        //     q2Answer4.remove();

        //     q3Answer1.remove();
        //     q3Answer2.remove();
        //     q3Answer3.remove();
        //     q3Answer4.remove();

        //     q4Answer1.remove();
        //     q4Answer2.remove();
        //     q4Answer3.remove();
        //     q4Answer4.remove();

        //     q5Answer1.remove();
        //     q5Answer2.remove();
        //     q5Answer3.remove();
        //     q5Answer4.remove();

        //     timerEl.textContent = 'Time: 0';   
        // }      
    }, 1000);
};

var stopTimer = function() {
    clearInterval(timeInterval);
    timerEl.textContent = "Time: " + timeLeft;   
};

var subtractTenFromTimer = function() {
    clearInterval(timeInterval);
    timeLeft = timeLeft - subtractTen;
    timer(); 
};


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

