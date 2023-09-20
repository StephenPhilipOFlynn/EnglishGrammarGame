const levelZero = [
  {
  question: "The dog ______ sleeping",
  answers: [
  { text: "am", correct: false},
  { text: "is", correct: true},
]
},
{
  question: "What time ______ it?",
  answers: [
  { text: "are", correct: false},
  { text: "is", correct: true},
]
},
{
  question: "We _____ talking for 2 hours.",
  answers: [
  { text: "was", correct: false},
  { text: "were", correct: true},
]
},
]

const levelOne = [
  {
  question: "The cat ______ on the fence",
  answers: [
  { text: "sit", correct: false},
  { text: "sits", correct: true},
]
},
{
  question: "She ate _____ apple",
  answers: [
  { text: "an", correct: true},
  { text: "a", correct: false},
]
},
]

const levelTwo = [
  {
  question: "What book is _______?",
  answers: [
  { text: "those", correct: false},
  { text: "that", correct: true},
]
},
{
  question: "The tv show was successful and  _____ them famous.",
  answers: [
  { text: "make", correct: false},
  { text: "made", correct: true},
]
}
]

const levelThree = [
  {
  question: "______ of these cities will you visit?",
  answers: [
  { text: "Which", correct: true},
  { text: "When", correct: false},
]
},
{
  question: "Lets go to _________ concert.",
  answers: [
  { text: "their", correct: true},
  { text: "there", correct: false},
]
},
{
  question: "She did really good _______.",
  answers: [
  { text: "well", correct: true},
  { text: "good", correct: false},
]
},
]

const levelFour = [
  {
  question: "The dog has ______ my homework",
  answers: [
  { text: "eaten", correct: true},
  { text: "ate", correct: false},
]
},
]

const levelFive = [
  {
  question: "He enjoys ________ the piano in his free time",
  answers: [
  { text: "to play", correct: false},
  { text: "playing", correct: true},
]
},
{
  question: "Have you ________ watching without me?",
  answers: [
  { text: "begun", correct: true},
  { text: "began", correct: false},
]
},
{
  question: "I had _____ all night to see her.",
  answers: [
  { text: "drove", correct: false},
  { text: "driven", correct: true},
]
},
]

const levelSix = [
  {
  question: "My sister Ruth is ________ so much progress with her Spanish.",
  answers: [
  { text: "making", correct: true},
  { text: "taking", correct: false},
]
}]

const levelSeven = [
  {
  question: "When she was a child, she ______ be happy all the time.",
  answers: [
  { text: "would", correct: false},
  { text: "used to", correct: true},
]
}]




const levels = [levelZero, levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven];
let currentLevel = 0;
let currentIndex = 0;
let currentQuestion;

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
  currentQuestion = levels[currentLevel][currentIndex];
  question1.innerHTML = currentQuestion.question;
  for (let i= 0; i < buttons.length; i++) {
    if (currentQuestion.answers[i]) {
      buttons[i].style.display = "block";
      buttons[i].textContent = currentQuestion.answers[i].text;
      buttons[i].addEventListener("click", () => chooseAnswer(i))
    } else {
      buttons[i].style.display = "none";
    }
  }
}

function chooseAnswer(i) {
  if (currentQuestion.answers[i].correct) {
    alert("Correct!");
    currentLevel++;
    currentIndex = 0;
    showQuestion()}
  else {
    alert("That's sadly incorrect!");
    startQuiz();
  }
};

ready.addEventListener("click", startQuiz);




function resetQuiz(){};



