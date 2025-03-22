'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore')
let turns = 20;

checkButton.addEventListener('click', function () {
  let guessValue = Number(guess.value);

  if (guessValue === secretNumber) {
    messageElement.textContent = '🥳 Correct Number!';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    if (Number(score.textContent) > Number(highscore.textContent) ) highscore.textContent = score.textContent
  } else if (guessValue > secretNumber) {
    messageElement.textContent = '📈 Too High';
    turns--;
    if (turns < 1) score.textContent = 0;
    else score.textContent = turns;
  } else if (guessValue < secretNumber) {
    messageElement.textContent = '📉 Too Low';
    turns--;
    if (turns < 1) score.textContent = 0;
    else score.textContent = turns;
  }

  if (!guessValue) messageElement.textContent = '⛔ Invalid Number';
  else if (guessValue <= 0) messageElement.textContent = '⛔ Invalid Number';
  else if (guessValue > 20) messageElement.textContent = '⛔ Invalid Number';

  console.log(guessValue);
});

resetButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  number.textContent = '?'
  messageElement.textContent = 'Start guessing...';
  score.textContent = '20';
  turns = 20;
  guess.value = '';

  console.log(secretNumber);
});
