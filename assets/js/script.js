const levelOne = [
  {
  question: "The cat ______ on the fence",
  answers: [
  { text: "sit", correct: false},
  { text: "sits", correct: true},
]
}]

const levelTwo = [
  {
  question: "What book is _______?",
  answers: [
  { text: "those", correct: false},
  { text: "that", correct: true},
]
}]

const levelThree = [
  {
  question: "______ of these cities will you visit?",
  answers: [
  { text: "Which", correct: true},
  { text: "When", correct: false},
]
}]

const levelFour = [
  {
  question: "The dog has ______ my homework",
  answers: [
  { text: "eaten", correct: true},
  { text: "ate", correct: false},
]
}]

const levelFive = [
  {
  question: "He enjoys ________ the piano in his free time",
  answers: [
  { text: "to play", correct: false},
  { text: "playing", correct: true},
]
}]

const levelSix =[
  {
  question: "My sister Ruth is ________ so much progress with her Spanish",
  answers: [
  { text: "making", correct: true},
  { text: "taking", correct: false},
]
}]




const levels = [levelOne, levelTwo, levelThree, levelFour];
let currentLevel = 0;
let currentIndex = 0;

const introText = document.getElementById("begin")
const ready = document.getElementById("ready")
const question1 = document.getElementById("sibling");
const buttons = document.querySelectorAll(".button");

function startQuiz(){
  introText.style.display = "none";
  ready.style.display = "none";
  showQuestion();
  };

function showQuestion() {
  const currentQuestion = levels[currentLevel][currentIndex];
  question1.innerHTML = currentQuestion.question;
  for (let i= 0; i < buttons.length; i++) {
    if (currentQuestion.answers[i]) {
      buttons[i].style.display = "block";
      buttons[i].textContent = currentQuestion.answers[i].text;
    } else {
      buttons[i].style.display = "none";
    }
  }
}

ready.addEventListener("click", startQuiz);




function resetQuiz(){};



