const p1 = {
  score: 0,
  button: document.querySelector("#buttonP1"),
  scoreDisplay: document.querySelector("#scoreP1"),
  modal: document.querySelector("#modalP1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#buttonP2"),
  scoreDisplay: document.querySelector("#scoreP2"),
  modal: document.querySelector("#modalP2"),
};

const reset = document.querySelector("#reset");
const gamesSelector = document.querySelector("#games");
const modal = document.querySelector("#modal");
const modalP2 = document.querySelector("#modalP2");

let winningScore = parseInt(gamesSelector.value);
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    player.scoreDisplay.innerText = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.scoreDisplay.classList.add("has-text-success");
      opponent.scoreDisplay.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.modal.classList.remove("is-hidden");
      modal.classList.add("is-active");
    }
  }
}

function resetPlayers(players) {
  for (player of players) {
    player.score = 0;
    player.scoreDisplay.innerText = 0;
    player.button.disabled = false;
    player.scoreDisplay.classList.remove("has-text-success", "has-text-danger");
    player.modal.classList.add("is-hidden");
  }

  isGameOver = false;
}

gamesSelector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetPlayers([p1, p2]);
});

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

reset.addEventListener("click", function () {
  resetPlayers([p1, p2]);
  modal.classList.remove("is-active");
});

modal.addEventListener("click", function () {
  modal.classList.remove("is-active");
});
