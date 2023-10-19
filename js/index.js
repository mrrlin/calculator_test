const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');

const mathOperations = document.getElementsByName('mathOperation');
let mathOperationChecked = "";

const buttonResult = document.getElementById('buttonResult');
const result = document.getElementById('result');

//restricton for enter: only numbers
firstNumber.addEventListener('input', () => {
  firstNumber.value = firstNumber.value.replace(/\D/g, '');
});

buttonResult.addEventListener('click', () => {
  //searching for the checked element
  mathOperations.forEach(mathOperation => {
    if(mathOperation.checked) {
      mathOperationChecked = mathOperation.value;
      console.log(mathOperation.value);
      return;
    }
  });
});