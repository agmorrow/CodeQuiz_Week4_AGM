//selecting all required elements
const info_box = document.querySelector(".instruction_box");
const continue_btn = info_box.querySelector(".buttons .startQuiz");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeText = document.querySelector(".timer .time_left_txt");
const timeEl = document.querySelector(".timer .countDown");


// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


const secondsLeft = 60;

function startTimer() {
    const timerInterval = setInterval(function() {
        secondsLeft--; 
        timeEl.textContent = secondsLeft + "seconds left!";

        if(secondsLeft == 0) { 
            clearInterval(timerInterval); 
            sendMessage();        
        }
    }, 1000);
}


// if startQuiz button clicked
start_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine);
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}


const questions = [
    { 
        question: "",
        options: [],
        answer: 0,
    }
]


// localStorage for high scores
// event.target for what the user actually clicks on








