'use strict';
const score1El = document.querySelector('#score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
let rollingDice = document.querySelector('.btn--roll');
let currentScore1 = document.getElementById('current--0');
let currentScore2 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let score, active, currentScore, playing, activePlayer;
const init = function () {
  score = [0, 0];
  currentScore = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;
  activePlayer = 0;
  diceEl.classList.remove('hidden');
  playing = true;
  diceEl.classList.remove('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//when rolling a dice....
rollingDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    console.log('clicl');
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
newBtn.addEventListener('click', init);
