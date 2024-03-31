const _question = document.getElementById("question");
const _options = document.querySelector(".quiz-options");
const _checkBtn = document.getElementById("check-answer");
const _playAgainBtn = document.getElementById("play-again");
const _result = document.getElementById("result");
const _correctScore = document.getElementById("correct-score");
const _totalQuestion = document.getElementById("total-question");
const difficultyContainer = document.getElementById("difficulty-container");
const quizContainer = document.getElementById("quiz-container");
const difficultyEasyBtn = document.getElementById("difficulty-easy");
const difficultyMediumBtn = document.getElementById("difficulty-medium");
const difficultyHardBtn = document.getElementById("difficulty-hard");

var correctAnswers = [],
  correctScore = 0,
  totalQuestion = 10,
  currentQuestionIndex = 0;

var quizData;

difficultyEasyBtn.addEventListener("click", () => startQuiz("easy"));
difficultyMediumBtn.addEventListener("click", () => startQuiz("medium"));
difficultyHardBtn.addEventListener("click", () => startQuiz("hard"));

function startQuiz(difficulty) {
  quizContainer.style.display = "block";
  difficultyContainer.style.display = "none";
  loadQuestion(difficulty);
}

// Load question data from API (called only once)
async function loadQuestion(difficulty = "easy") {
  const APIUrl = `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${difficulty}&type=multiple`;
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  quizData = data.results;
  console.log(quizData);
  showQuestion();
}

// Event listeners for buttons
function eventListeners() {
  _checkBtn.addEventListener("click", checkAnswer);
  _playAgainBtn.addEventListener("click", restartQuiz);
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
});

// Display question and options
function showQuestion() {
  _checkBtn.disabled = false;
  _playAgainBtn.style.display = "none";
  if (currentQuestionIndex >= totalQuestion) {
    restartQuiz();
  }
  const data = quizData[currentQuestionIndex];
  correctAnswers.push(data.correct_answer);
  let incorrectAnswer = data.incorrect_answers;
  let optionsList = incorrectAnswer;
  optionsList.splice(
    Math.floor(Math.random() * incorrectAnswer.length), // Random position within incorrect answers
    1, // Remove 1 element (guarantees at least one incorrect answer is removed)
    data.correct_answer,
  );

  _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
  _options.innerHTML = `
        ${optionsList
          .map(
            (option, index) => `
              <li> ${index + 1}. <span>${option}</span> </li>
            `,
          )
          .join("")}
      `;
  console.log(data.correct_answer);
  selectOption();
}

// Handle option selection
function selectOption() {
  _options.querySelectorAll("li").forEach(function (option) {
    option.addEventListener("click", function () {
      if (_options.querySelector(".selected")) {
        const activeOption = _options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}

// Check answer and update score/result
function checkAnswer() {
  _checkBtn.disabled = true;
  let selectedAnswer = _options.querySelector(".selected span").textContent;
  if (selectedAnswer == correctAnswers[currentQuestionIndex]) {
    correctScore++;
    _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
  } else {
    _result.innerHTML = `<p><i class = "fas fa-time"></i>Incorrect Answer!</p>`;
  }
  checkCount();
}

function checkCount() {
  currentQuestionIndex++; // Move to the next question index

  // Check if all questions have been answered
  if (currentQuestionIndex >= totalQuestion) {
    _result.innerHTML += `<p>Your score is ${correctScore}.</p>`; // Display final score
    _playAgainBtn.style.display = "block"; // Show "Play Again" button
  } else {
    setCount();
    showQuestion(); // Display the next question
  }
}
function setCount() {
  _correctScore.textContent = correctScore; // Update displayed correct score
  _totalQuestion.textContent = totalQuestion; // Update displayed total question count
}

function restartQuiz() {
  correctScore = 0;
  currentQuestionIndex = 0;
  _playAgainBtn.style.display = "none";
  _checkBtn.style.display = "flex";
  _checkBtn.disabled = false;
  _result.innerHTML = "";
  quizContainer.style.display = "none";
  difficultyContainer.style.display = "flex";
  correctAnswers = [];
  setCount();
}
