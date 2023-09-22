// array of questions, with nine levels of difficulty

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
{
  question: "I like to go to Paris _______ the summer.",
  answers: [
  { text: "in", correct: true},
  { text: "on", correct: false},
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
{
  question: "We _____ talking for 2 hours.",
  answers: [
  { text: "was", correct: false},
  { text: "were", correct: true},
]
},
{
  question: "I want to make an omelette, _______ eggs do we have?",
  answers: [
  { text: "how many", correct: true},
  { text: "how much", correct: false},
]
},
{
  question: "I get _____ every morning at 8am.",
  answers: [
  { text: "out", correct: false},
  { text: "up", correct: true},
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
{
  question: "Look at ____ trousers on sale.",
  answers: [
  { text: "this", correct: false},
  { text: "these", correct: true},
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
{
  question: "I don't like Colombian coffee, it is _______ strong for me.",
  answers: [
  { text: "too", correct: true},
  { text: "such", correct: false},
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
{
  question: "I wanted to go to the cinema but I couldn't. I _____ studying for the test we had on Monday.",
  answers: [
  { text: "was", correct: true},
  { text: "been", correct: false},
]
},
{
  question: "The music video was expensive to make, it ______ twenty million dollars.",
  answers: [
  { text: "cost", correct: false},
  { text: "costs", correct: true},
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
{
  question: "I went to ___ bed early yesterday.",
  answers: [
  { text: "the", correct: false},
  { text: " ", correct: true},
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
{
  question: "He ______________ there for two years before he decided to resign.",
  answers: [
  { text: "had been worked", correct: false},
  { text: "had been working", correct: true},
]
},
{
  question: "At one time it ___________ the earth was the center of the universe.",
  answers: [
  { text: "was being believed", correct: false},
  { text: "was believed", correct: true},
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
{
  question: "They have not finished interviews yet, but they ____________ all candidates by next Friday",
  answers: [
  { text: "would see", correct: false},
  { text: "will have seen", correct: true},
]
},
{
  question: "You ___________ bothered making pasta, they've decided to head out.",
  answers: [
  { text: "needn't have", correct: true},
  { text: "didn't have to", correct: false},
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
{
  question: "The meeting finished late. Isabel told me she _____ been given the wrong directions.",
  answers: [
  { text: "had", correct: true},
  { text: "has", correct: false},
]
},
{
  question: "Da Vinci's lost painting, to think it was lost for years and _________.",
  answers: [
  { text: "has been restoring", correct: false},
  { text: "had to be restored", correct: true},
]
},
{
  question: "I am not surprised your stomach is sore. I did say you __________ eaten that fish last night.",
  answers: [
  { text: "mustn't have", correct: false},
  { text: "shouldn't have", correct: true},
]
},
]

const levels = [levelZero, levelOne, levelTwo, levelThree, levelFour, 
                levelFive, levelSix, levelSeven, levelEight];
let currentLevel = 0;
let currentIndex = 0;
let correctAnswers = 0;
let currentQuestion;

const introText = document.getElementById("begin");
const ready = document.getElementById("ready");
const question1 = document.getElementById("sibling");
const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");

/* If user wishes to start quiz. Randomise question order, 
and call first question, and display questions box */

function startQuiz(){
  introText.style.display = "none";
  ready.style.display = "none";
  document.getElementById("parent").style.display = "block";
  shuffleQuestions();
  showQuestion();
  };

function shuffleQuestions() {
  /* iterate through each level keeping same order of levels */
  for (let i = 0; i < levels.length; i++) {
  /* fisher-yates algorithm to randomise question chosen within each array */
  let r = Math.floor(Math.random() * levels[i].length);
  for (let j = 0; j < levels[i].length; j++) {
    let temp = levels[i][j];
    levels[i][j] = levels[i][r];
    levels[i][r] = temp;
  }
}}

// Display question and populate answer buttons with possible answers

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

/* If answer correct go to next array, 
and add one point to correct answers */

function chooseAnswer(i) {
  if (currentQuestion.answers[i].correct) {
    currentLevel++;
    currentIndex = 0;
    result.innerHTML = `You've scored ${correctAnswers} correct answers!`;
    showQuestion()}
  else {
    startQuiz();
  }
};

// Start quiz on click of yes button

ready.addEventListener("click", startQuiz);





