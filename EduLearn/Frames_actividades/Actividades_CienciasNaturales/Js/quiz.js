//Question bank
var questionBank = [{
        question: 'De que esta compuesto el espacio?',
        option: ['Planetas', 'Lunas', 'Estrellas', 'Todas las anteriores'],
        answer: 'Todas las anteriores'
    },
    {
        question: 'El espacio esta compuesto de un solo sis. solar?',
        option: ['Si', 'No', 'Talvez', 'Ninguna'],
        answer: 'No'
    },
    {
        question: 'Cuantos planetas existen en el sis. solar?',
        option: ['8', '7', '4', '9'],
        answer: '8'
    },
    {
        question: 'La luna es un planeta?',
        option: ['Si', 'No', 'Talvez', 'Ninguna'],
        answer: 'No'
    },
    {
        question: 'La Tierra es redonda',
        option: ['Si', 'No', 'Talvez', 'Ninguna'],
        answer: 'No'
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