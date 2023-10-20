const form = document.getElementById('form');

const numberOfFirstLabel = document.getElementById('firstNumber');
const numberOfSecondLabel = document.getElementById('secondNumber');

const mathOperations = document.getElementsByName('mathOperation');
let mathOperationChecked = "";

const buttonResult = document.getElementById('buttonResult');
const result = document.getElementById('result');
const clearForm = document.getElementById('clear');

//restricton for enter: only numbers
numberOfFirstLabel.addEventListener('input', () => {
  numberOfFirstLabel.value = numberOfFirstLabel.value.replace(/[^0-9]|-/g, '');
});

function getResultOfMathOperation(operation) {
  const firstNumber = parseFloat(numberOfFirstLabel.value);
  const secondNumber = parseFloat(numberOfSecondLabel.value);
  let resultOfOperation = 0;

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
        } else {
          resultOfOperation = 'Мы тут на 0 не делим (:';
        }
        return resultOfOperation;
      default:
        resultOfOperation = 'Выберите действие';
        return resultOfOperation;
    }
  } else {
    resultOfOperation = 'Оба поля должны быть заполнены';
    return resultOfOperation;
  }
}

buttonResult.addEventListener('click', () => {
  getResultOfMathOperation();
  mathOperations.forEach(mathOperation => {
    if(mathOperation.checked) {
      mathOperationChecked = mathOperation.value;
      return;
    }
  });

  result.innerHTML = 'Результат: ' + getResultOfMathOperation(mathOperationChecked);
});

clearForm.addEventListener('click', () => form.reset());