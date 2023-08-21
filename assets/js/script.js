let correctAns = 7;

function onSubmit() {
  let ans = document.getElementById("answer").value;
  let resultP = document.getElementById("result");
  if (ans == correctAns) {
    resultP.innerHTML = "Correct";
  } else {
    resultP.innerHTML = "Wrong";
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