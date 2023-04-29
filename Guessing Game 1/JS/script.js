//Loki is thinking of a number from 1 - 20...

// //Create a random number generator from 1 - 20.
let randomNumber = Math.trunc(Math.random() * 19 + 1);
console.log(randomNumber);
let score = 10;
const display = function (key) {
  document.querySelector(".message").textContent = key;
};

const cssBody = function (key) {
  document.querySelector("body").style.backgroundColor = key;
};

const triesHTML = function (key) {
  document.querySelector(".tries").textContent = key;
};
document.querySelector("#check").addEventListener("click", function () {
  let guess = Number(document.querySelector("#numberBox").value);

  // let scores = the amount of tries it take to guess the currect #.
  if (guess !== randomNumber) {
    if (score > 1) {
      score--;
      triesHTML(score);

      display(guess > randomNumber ? "Too High" : "Too Low");
    } else {
      display("You Lose");
      cssBody("red");
      triesHTML(0);
    }
  } else if (guess == randomNumber) {
    document.querySelector(".endGame").textContent = "You WIN!";
    cssBody("green");
    document.querySelector(".lokisNumber").textContent = randomNumber;
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 19 + 1);
  score = 10;
  triesHTML(score);
  console.log(randomNumber);
  document.querySelector(".lokisNumber").textContent = "?";
  cssBody("#222");
  display("Start Guessing...");
  document.querySelector(".endGame").textContent = "";
});
