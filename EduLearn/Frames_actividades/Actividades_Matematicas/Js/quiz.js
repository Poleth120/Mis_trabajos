//Question bank
var questionBank = [{
        question: 'Dividir 77,5 entre 25',
        option: ['3,1', '4,1', '2,1', 'Ninguna'],
        answer: '3,1'
    },
    {
        question: 'Dividir 89,1 entre 5',
        option: ['16,8', '17,8', '18,8', 'Ninguna'],
        answer: '17,8'
    },
    {
        question: 'Dividir 10,5 entre 25',
        option: ['0,6', '0,5','0,4', 'Ninguna'],
        answer: '0,4'
    },
    {
        question: 'Dividir 31,5 entre 4',
        option: ['7,8', '7,9', '8', 'Ninguna'],
        answer: '7,9'
    },
    {
        question: 'Dividir 52 entre 6,6',
        option: ['7,8', '7,9', '8', 'Ninguna'],
        answer: '7,9'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Pregunta" + ' ' + (i + 1) + ' ' + 'de' + ' ' + questionBank.length;
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();