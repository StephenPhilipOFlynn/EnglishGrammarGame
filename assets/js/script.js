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


const question1 = document.getElementById("sibling");


function startQuiz(){
  question1();
};


function question1(){
question1.innerHTML = levelOne.question;
};

function resetQuiz(){};

