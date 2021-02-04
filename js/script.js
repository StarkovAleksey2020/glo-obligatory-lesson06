'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
};

function game() {  
  let hiddenNumber = Math.ceil(Math.random() * 100);
  
  let guessingResult = function guessingNumbers() {  
    let guessedNumber = +prompt('Угадай число от 1 до 100');
    if (guessedNumber === 0) {
      return alert('Игра окончена');
    }
    if (!isNumber(guessedNumber)) {
      alert('Введи число!');
      guessingNumbers();      
    }
    if (guessedNumber < hiddenNumber) {
      alert('Загаданное число больше');
      guessingNumbers();      
    } else if (guessedNumber > hiddenNumber) {
      alert('Загаданное число меньше');
      guessingNumbers();
    } else if (guessedNumber === hiddenNumber) {
      return alert('Поздравляю, Вы угадали!!!');
    }
  }
  guessingResult();
}

game();