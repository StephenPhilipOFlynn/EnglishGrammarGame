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
{
  question: "I ______ an English student",
  answers: [
  { text: "are", correct: false},
  { text: "am", correct: true},
]
},
{
  question: "Some people ___ Ireland speak a different language called Gaelic.",
  answers: [
  { text: "on", correct: false},
  { text: "in", correct: true},
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
{
  question: "They _____ French. They're from Belgium",
  answers: [
  { text: "aren't", correct: true},
  { text: "isn't", correct: false},
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
},
{
  question: "They went to the park ____ Sunday.",
  answers: [
  { text: "at", correct: false},
  { text: "on", correct: true},
]
},
{
  question: "Look at ____ horses in the distance.",
  answers: [
  { text: "these", correct: false},
  { text: "those", correct: true},
]
},
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
{
  question: "How many children _______ got?",
  answers: [
  { text: "they have", correct: false},
  { text: "have they", correct: true},
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
{
  question: "We _____ to Australia when I was five",
  answers: [
  { text: "moves", correct: false},
  { text: "moved", correct: true},
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
{
  question: "She works as a teacher in ___ Africa.",
  answers: [
  { text: " ", correct: true},
  { text: "an", correct: false},
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
},
{
  question: "I am  ________ learn to dance.",
  answers: [
  { text: "going", correct: false},
  { text: "going to", correct: true},
]
},
{
  question: "What  ________ happen if she doesn't get here on time?",
  answers: [
  { text: "will", correct: true},
  { text: "going to", correct: false},
]
},
]


const levelSeven = [
  {
  question: "When she was a child, she ______ be happy all the time.",
  answers: [
  { text: "would", correct: false},
  { text: "used to", correct: true},
]
},
{
  question: "______ you like a tea?",
  answers: [
  { text: "Will", correct: false},
  { text: "Would", correct: true},
]
},
{
  question: "_____ Indian food?",
  answers: [
  { text: "Did she ever ate", correct: false},
  { text: "Has she ever eaten", correct: true},
]
},
]
const levelEight = [
{
  question: "Stephen _______ watching chess matches.",
  answers: [
  { text: "'s always loved", correct: true},
  { text: "'s always been loving", correct: false},
]
},
]




const levels = [levelZero, levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight];
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
  document.getElementById("parent").style.display = "block";
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
    currentLevel++;
    currentIndex = 0;
    showQuestion()}
  else {
    startQuiz();
  }
};

ready.addEventListener("click", startQuiz);




function resetQuiz(){};



