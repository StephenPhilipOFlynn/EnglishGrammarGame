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
  question: "The dog has ______ my homework",
  answers: [
  { text: "eaten", correct: true},
  { text: "ate", correct: false},
]
}]

const levelThree = [
  {
  question: "______ of the cities will you visit?",
  answers: [
  { text: "Which", correct: true},
  { text: "When", correct: false},
]
}]

const introText = document.getElementById("begin")
const ready = document.getElementById("ready")
const question1 = document.getElementById("sibling");

function startQuiz(){
  question1.innerHTML = "The cat ______ on the fence";
  };

ready.addEventListener("click", startQuiz);



function resetQuiz(){};



