const form = document.getElementById('form');

const numberOfFirstLabel = document.getElementById('firstNumber');
const numberOfSecondLabel = document.getElementById('secondNumber');

const mathOperations = document.getElementsByName('mathOperation');
let mathOperationChecked = "";

const buttonResult = document.getElementById('buttonResult');
const resultLabel = document.getElementById('result');
const clearForm = document.getElementById('clear');

let resultOfOperation = 0;

function checkNumbers(input) {
  const regex = /^[+-]?\d+(\.)?\d*$/g;
  const isMatching = input.value.match(regex);
  if (isMatching) {
    return true;
  } else {
    return false;
  }
}

numberOfFirstLabel.addEventListener('click', () => {
  resultLabel.innerHTML = 'Результат: ';
});

numberOfSecondLabel.addEventListener('click', () => {
  resultLabel.innerHTML = 'Результат: ';
});

//restricton for enter: only numbers
numberOfFirstLabel.addEventListener('input', () => {
  if (checkNumbers(numberOfFirstLabel)) {
    if (buttonResult.hasAttribute('disabled')) {
      buttonResult.disabled = false;
    }
    numberOfSecondLabel.addEventListener('input', () => {
      if (checkNumbers(numberOfSecondLabel)) {
        if (buttonResult.hasAttribute('disabled')) {
          buttonResult.disabled = false;
        }
      } else {
        buttonResult.disabled = true;
      }
    });
  } else {
    buttonResult.disabled = true;
  }
  // numberOfFirstLabel.value = numberOfFirstLabel.value.replace(/\D/g, '');
});

function getResultOfMathOperation(operation) {
  const firstNumber = parseFloat(numberOfFirstLabel.value);
  const secondNumber = parseFloat(numberOfSecondLabel.value);

  if (firstNumber && secondNumber) {
    switch(operation) {
      case '+':
        resultOfOperation = firstNumber + secondNumber;
        return resultOfOperation;
      case '-':
        resultOfOperation = firstNumber - secondNumber;
        return resultOfOperation;
      case '*':
        resultOfOperation = firstNumber * secondNumber;
        return resultOfOperation;
      case '/':
        if(secondNumber !== 0) {
          resultOfOperation = firstNumber / secondNumber;
          resultOfOperation = resultOfOperation.toFixed(13);
        } else {
          resultOfOperation = 'Мы тут на 0 не делим (:';
        }
        return resultOfOperation;
      default:
        resultOfOperation = 'Выберите действие';
        return resultOfOperation;
    }
  } else {
    resultOfOperation = 'Оба поля должны быть заполнены корректными значениями';
  }

  return resultOfOperation;
}

buttonResult.addEventListener('click', () => {
  mathOperations.forEach(mathOperation => {
    if(mathOperation.checked) {
      mathOperationChecked = mathOperation.value;
      return;
    }
  });
  
  let finishResult = getResultOfMathOperation(mathOperationChecked);

  resultLabel.innerHTML = 'Результат: ' + finishResult;
});

clearForm.addEventListener('click', () => {
  form.reset();
  resultLabel.innerHTML = 'Результат: ' + 2;
});