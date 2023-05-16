//your JS code here. If required.
var questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
  var quiz = document.getElementById("quiz");
  var question = questions[currentQuestion];
  var questionText = document.getElementById("question");
  var optionA = document.getElementById("a_text");
  var optionB = document.getElementById("b_text");
  var optionC = document.getElementById("c_text");
  var optionD = document.getElementById("d_text");

  questionText.textContent = question.question;
  optionA.textContent = question.a;
  optionB.textContent = question.b;
  optionC.textContent = question.c;
  optionD.textContent = question.d;
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return; // Do nothing if no option
is selected
}

var userAnswer = selectedOption.id;
var question = questions[currentQuestion];
if (userAnswer === question.correct) {
score++;
}

currentQuestion++;
selectedOption.checked = false;

if (currentQuestion < questions.length) {
displayQuestion();
} else {
showResult();
}
}

function showResult() {
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var scoreText = document.getElementById("score");

quiz.style.display = "none";
result.style.display = "block";
scoreText.textContent = "You scored " + score + " out of " + questions.length;
}

function reloadQuiz() {
currentQuestion = 0;
score = 0;
displayQuestion();
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");

quiz.style.display = "block";
result.style.display = "none";
}

var submitButton = document.getElementById("submit");
var reloadButton = document.getElementById("reload");

submitButton.addEventListener("click", checkAnswer);
reloadButton.addEventListener("click", reloadQuiz);

displayQuestion();

Save the HTML code in an HTML file (e.g., `index.html`), the CSS code in a separate CSS file (e.g., `styles.css`), and the JavaScript code in a separate JavaScript file (e.g., `script.js`). Make sure to place the CSS and JavaScript files in the same directory as the HTML file.
