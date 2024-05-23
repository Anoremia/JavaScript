const firstInput = document.querySelector('.calculator-first-input');
const secondInput = document.querySelector('.calculator-second-input');
const plusButton = document.querySelector('.calculator-plus');
const minusButton = document.querySelector('.calculator-minus');
const resultBlock = document.querySelector('.calculator-result');
const multButton = document.querySelector('.calculator-mult');
const divisionBlock = document.querySelector('.calculator-division');

function sum(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

function operation (func) {
    const firstInputValue = Number(firstInput.value);
    const secondInputValue = Number(secondInput.value);
    let result = func(firstInputValue,secondInputValue);
    resultBlock.innerHTML = result;

}

plusButton.addEventListener('click', () => operation(sum))
minusButton.addEventListener('click', () => operation(minus))
multButton.addEventListener('click', () => operation(mult))
divisionButton.addEventListener('click', () => operation(division))