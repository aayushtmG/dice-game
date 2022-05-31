// getting element and assigning them to var
let score1 = document.querySelector("#cscore1");
let score2 = document.querySelector("#cscore2");
let player1Score = document.querySelector("#score1");
let player2Score = document.querySelector("#score2");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".roll");
const btnNew = document.querySelector(".new-game");
const btnHold = document.querySelector(".hold");
let player1Sec = document.querySelector("#player1");
let player2Sec = document.querySelector("#player2");

let currentScore = 0;

// Switching the palyer's turn
const switchPlayer = function () {
  if (player1Sec.classList.contains("active-player")) {
    player1Sec.classList.remove("active-player");
    player2Sec.classList.add("active-player");
  } else {
    player1Sec.classList.add("active-player");
    player2Sec.classList.remove("active-player");
  }
};

// assigning currentScore value to the player's current score
const playerScore = function () {
  if (player1Sec.classList.contains("active-player")) {
    score1.textContent = currentScore;
  } else {
    score2.textContent = currentScore;
  }
};
//roll dice functionality
btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;

  //changing dice image according to the value
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  // switching if dice is 1
  if (dice == 1) {
    currentScore = 0;
    playerScore();
    switchPlayer();
  } else {
    currentScore += dice;
  }
  playerScore();
});

btnHold.addEventListener("click", function () {
  if (player1Sec.classList.contains("active-player")) {
    player1Score.textContent = Number(player1Score.textContent) + currentScore;
  } else {
    player2Score.textContent = Number(player2Score.textContent) + currentScore;
  }
  currentScore = 0;
  playerScore();
  switchPlayer();
  win();
});

const win = function () {
  if (
    Number(player1Score.textContent) >= 20 &&
    Number(player1Score.textContent) > Number(player2Score.textContent)
  ) {
    player1Sec.style.backgroundColor = "#2F2F2F";
    player1Sec.style.color = "#c7365f";
    afterWin();
  } else if (
    Number(player2Score.textContent) >= 20 &&
    Number(player2Score.textContent) > Number(player1Score.textContent)
  ) {
    player2Sec.style.backgroundColor = "#2F2F2F";
    player2Sec.style.color = "#c7365f";
    afterWin();
  }
};

const afterWin = function () {
  diceEl.classList.add("hidden");
  btnRoll.setAttribute("disabled", "");
  btnHold.setAttribute("disabled", "");
};

btnNew.addEventListener("click", function () {
  window.location.reload();
});
