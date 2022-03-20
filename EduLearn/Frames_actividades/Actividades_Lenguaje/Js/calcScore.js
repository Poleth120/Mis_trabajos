//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'black';
    } else {
        document.getElementById(e.id).style.background = 'limegreen';
    }
    setTimeout(nextQuestion, 400);
}