const numberOfFirstLabel = document.getElementById('firstNumber');
const numberOfSecondLabel = document.getElementById('secondNumber');

const labels = document.getElementsByClassName('form__math-operation');

const buttonResult = document.getElementById('buttonResult');
const result = document.getElementById('result');

const mathOperations = document.getElementsByName('mathOperation');
let mathOperationChecked = "";



// const checked = document.querySelector('input[name="mathOperation"]:checked');

//restricton for enter: only numbers
numberOfFirstLabel.addEventListener('input', () => {
  numberOfFirstLabel.value = numberOfFirstLabel.value.replace(/\D/g, '');
});

function getResultOfMathOperation(operation) {
  const firstNumber = parseFloat(numberOfFirstLabel.value);
  const secondNumber = parseFloat(numberOfSecondLabel.value);
  let resultOfOperation = 0;

  switch(operation) {
    case '+':
      resultOfOperation = firstNumber + secondNumber;
      console.log('+');
      return resultOfOperation;
    case '-':
      resultOfOperation = firstNumber - secondNumber;
      console.log('-');
      return resultOfOperation;
    case '*':
      resultOfOperation = firstNumber * secondNumber;
      console.log('*');
      return resultOfOperation;
    case '/':
      resultOfOperation = firstNumber / secondNumber;
      console.log('/');
      return resultOfOperation;
  }
}

buttonResult.addEventListener('click', (e) => {
  getResultOfMathOperation();
  mathOperations.forEach(mathOperation => {
    if(mathOperation.checked) {
      mathOperationChecked = mathOperation.value;
      return;
    }
  });

  result.innerHTML = 'Результат: ' + getResultOfMathOperation(mathOperationChecked);


  // console.log('sign is ' + mathOperationChecked);
});