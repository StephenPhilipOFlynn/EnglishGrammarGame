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

const levels = [levelOne, levelTwo, levelThree, levelFour];
let currentLevel = 0;

const introText = document.getElementById("begin")
const ready = document.getElementById("ready")
const question1 = document.getElementById("sibling");

function startQuiz(){
  introText.style.display = "none";
  ready.style.display = "none";
  question1.innerHTML = "The cat ______ on the fence";
  };

ready.addEventListener("click", startQuiz);



function resetQuiz(){};



