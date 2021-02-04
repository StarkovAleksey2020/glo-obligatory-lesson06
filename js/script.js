'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
};

function game() {  
  let hiddenNumber = Math.ceil(Math.random() * 100);
  console.log('hiddenNumber: ', hiddenNumber);
  let numberOfAttempts = 10;
  let guessedNumber;
  
  let guessingResult = function guessingNumbers() {  
    if (numberOfAttempts === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        game();
      }
      return;
    } else if (numberOfAttempts > 0){
      guessedNumber = +prompt('Угадай число от 1 до 100');
    }
    if (guessedNumber === 0) {
      return alert('Игра окончена');
    }
    if (!isNumber(guessedNumber)) {
      alert('Введи число!');
      guessingNumbers();      
    }
    if (guessedNumber < hiddenNumber) {
      numberOfAttempts--;
      alert('Загаданное число больше, осталось попыток ' + numberOfAttempts);
      guessingNumbers();      
    } else if (guessedNumber > hiddenNumber) {
      numberOfAttempts--;
      alert('Загаданное число меньше, осталось попыток ' + numberOfAttempts);
      guessingNumbers();
    } else if (guessedNumber === hiddenNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        game();
      }
      return;
    }
  }
  guessingResult();
}

game();