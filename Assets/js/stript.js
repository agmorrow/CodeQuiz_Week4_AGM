
   //selecting all required elements
const info_box = document.querySelector(".infoBox");
const start_btn = document.querySelector(".buttons .startQuiz");
const questionsEl = document.getElementById("questions");
const timerEl = document.getElementById("timer");

let timeLeft = 75;
const stopTime = 0;
const subtractTime = 10;

const q1Answer1 = document.createElement("button");
const q1Answer2 = document.createElement("button");
const q1Answer3 = document.createElement("button");
const q1Answer4 = document.createElement("button");

const q2Answer1 = document.createElement("button");
const q2Answer2 = document.createElement("button");
const q2Answer3 = document.createElement("button");
const q2Answer4 = document.createElement("button");

const q3Answer1 = document.createElement("button");
const q3Answer2 = document.createElement("button");
const q3Answer3 = document.createElement("button");
const q3Answer4 = document.createElement("button");

const q4Answer1 = document.createElement("button");
const q4Answer2 = document.createElement("button");
const q4Answer3 = document.createElement("button");
const q4Answer4 = document.createElement("button");

const q5Answer1 = document.createElement("button");
const q5Answer2 = document.createElement("button");
const q5Answer3 = document.createElement("button");
const q5Answer4 = document.createElement("button");

info_box.classList.add("activeInfo"); //show info box

start_btn.addEventListener('click', function() {
    info_box.style.display = 'none';
    timer();
    questions1();
});

const timeInterval = setInterval(function(){});
const timer = function() {
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft --;
        }
    
    else if (timeLeft <= 0){
        endQuiz();
        rightOrWrongEl.remove();
        q1Answer1.remove();
        q1Answer2.remove();
        q1Answer3.remove();
        q1Answer4.remove();

        q2Answer1.remove();
        q2Answer2.remove();
        q2Answer3.remove();
        q2Answer4.remove();

        q3Answer1.remove();
        q3Answer2.remove();
        q3Answer3.remove();
        q3Answer4.remove();

        q4Answer1.remove();
        q4Answer2.remove();
        q4Answer3.remove();
        q4Answer4.remove();

        q5Answer1.remove();
        q5Answer2.remove();
        q5Answer3.remove();
        q5Answer4.remove();

        timerEl.textContent = 'Time: 0';   
    }      
}, 1000);
};
















