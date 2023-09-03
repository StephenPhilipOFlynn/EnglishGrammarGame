const questions1 = [
  {
  question: "The cat ______ on the fence",
  answers: [
  { text: "sit", correct: false},
  { text: "sits", correct: true},
]
}]

const questions2 = [
  {
  question: "The dog has ______ my homework",
  answers: [
  { text: "eaten", correct: true},
  { text: "ate", correct: false},
]
}]

const questions3 = [
  {
  question: "______ of the cities will you visit?",
  answers: [
  { text: "Which", correct: true},
  { text: "When", correct: false},
]
}]








let questionIndex = 0;
let score = 0;

let correctAns = 7;

function onSubmit() {
  let ans = document.getElementById("answer").value;
  let resultP = document.getElementById("result");
  if (ans == correctAns) {
    resultP.innerHTML = "Correct";
    showQuestionTwo();
  } else {
    resultP.innerHTML = "Wrong, hard luck practise more to improve your English grammar!";
  }
}

function onNext() {
  const parentElement = document.getElementById("parent");
  let ques = parentElement.firstElementChild;
  correctAns = 10;
  ques.innerHTML =
    "What shirt did Diego Maradona wear for Argentina!";
  let inputBox = ques.nextElementSibling;
  inputBox.innerHTML = "";
  let submitButton = document.getElementById("btn1");
  let nextButton = submitButton.nextElementSibling;
  nextButton.innerHTML = "End";
  nextButton.onclick = () => {
    document.body.innerHTML = "You reached the end of the quiz congratulations";
  }
  let resP = nextButton.nextElementSibling;
  resP.innerHTML = "";
};

question1 = document.getElementById("sibling");


function startQuiz(){

}


function question1(){
question1.innerHTML = 

}

