const buttonP1 = document.querySelector("#buttonP1");
const buttonP2 = document.querySelector("#buttonP2");
const reset = document.querySelector("#reset");
const scoreDisplayP1 = document.querySelector("#scoreP1");
const scoreDisplayP2 = document.querySelector("#scoreP2");
const scoreLimit = document.querySelector("#games");
const games = document.querySelector("#games");

let scoreP1 = 0;
let scoreP2 = 0;
let winningScore = 6;

buttonP1.addEventListener("click", function () {
  scoreP1++;
  scoreDisplayP1.innerText = scoreP1;
  checkWinner();
});

buttonP2.addEventListener("click", function () {
  scoreP2++;
  scoreDisplayP2.innerText = scoreP2;
  checkWinner();
});

reset.addEventListener("click", function () {
  resetScoreKeeper();
});

games.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetScoreKeeper();
});

function checkWinner() {
  if (scoreP1 === winningScore || scoreP2 === winningScore) {
    if (scoreP1 > scoreP2) {
      scoreDisplayP1.classList.add("has-text-success");
      scoreDisplayP2.classList.add("has-text-danger");
      buttonP1.disabled = true;
      buttonP2.disabled = true;
    } else if (scoreP2 > scoreP1) {
      scoreDisplayP1.classList.add("has-text-danger");
      scoreDisplayP2.classList.add("has-text-success");
      buttonP1.disabled = true;
      buttonP2.disabled = true;
    }
  }
}

function resetClasses(scoreDisplay) {
  scoreDisplay.classList.remove("has-text-success", "has-text-danger");
}

function resetScoreKeeper() {
  scoreP1 = 0;
  scoreP2 = 0;
  scoreDisplayP1.innerText = scoreP1;
  scoreDisplayP2.innerText = scoreP2;
  buttonP1.disabled = false;
  buttonP2.disabled = false;
  resetClasses(scoreDisplayP1);
  resetClasses(scoreDisplayP2);
}
