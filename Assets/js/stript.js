const info_box = document.getElementById("infoBox");
const start_btn = document.getElementById("startQuiz");
const questionContainerEl = document.getElementById('question-container');
const questionsEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-button");

let shuffleQuestions, currentQuestionIndex

// const timerEl = document.getElementById("timer");

// let timeLeft = 75;
// const stopTime = 0;
// const subtractTime = 10;

//






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
   showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionsEl.innerText = question.question
}

function selectAnswer(){

}

const questions = [
        {
            question: "Who was the boss at the Dunder Mifflin Scranton branch?",
            choices: ["David Wallace", "Michael Scarn", "Michael Scott", "Jan Levinson"],
            answer: 3
        }
    ];











// const timeInterval = setInterval(function(){});
// const timer = function() {
//     timeInterval = setInterval(function() {
//         if (timeLeft > 0) {
//             timerEl.textContent = 'Time: ' + timeLeft;
//             timeLeft --;
//         }
    
//     else if (timeLeft <= 0){
//         endQuiz();
     

//         timerEl.textContent = 'Time: 0';   
//     }      
// }, 1000);
// };

// const stopTimer = function() {
//     clearInterval(timeInterval);
//     timerEl.textContent = "Time: " + timeLeft;
// };

// const subtractFromTimer = function() {
//     clearInterval(timeInterval);
//     timeLeft = timeLeft - subtractTime;
//     timer();
// }












