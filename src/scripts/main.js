'use strict';

function game() {
  function getRandomNumber() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const generatedNumber = digits
      .sort((a, b) => Math.random() - 0.5)
      .slice(0, 4)
      .join('');

    return generatedNumber;
  }

  const secretNumber = getRandomNumber();

  function isValid(enteredNumber) {
    const justNumbers = /^[0123456789]{4}$/;

    if (!justNumbers.test(enteredNumber)) {
      return false;
    }

    for (let i = 0; i < enteredNumber.length; i++) {
      if (enteredNumber.lastIndexOf(enteredNumber[i])
       !== enteredNumber.indexOf(enteredNumber[i])) {
        return false;
      }
    }

    return true;
  }

  let message = 'Please, enter your number. Number should be 4 unique digits!';

  while (true) {
    const enteredNumber = prompt(message);

    if (enteredNumber === secretNumber) {
      alert('Creat! You won! You are the champion!');
      break;
    }

    if (enteredNumber === null) {
      alert('Game was finished. See you next time!');
      break;
    }

    if (!isValid(enteredNumber)) {
      alert('Number should be 4 unique digits! Please, try again.');
      continue;
    }

    let bulls = 0;
    let cows = 0;

    for (let j = 0; j < enteredNumber.length; j++) {
      const currentIndex = secretNumber.indexOf(enteredNumber[j]);

      if (currentIndex === j) {
        bulls++;
      } else if (currentIndex > -1) {
        cows++;
      }
    }

    message = `${enteredNumber} - ${bulls} bulls, ${cows} cows \n${message}`;
  }
}

game();
