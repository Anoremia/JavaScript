const numberBtns = document.querySelectorAll('.calc-btn');
const operationBtns = document.querySelectorAll('.calc-operation-btn');
const displayBlock = document.querySelector('.calc-display');

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        displayBlock.innerHTML = displayBlock.innerHTML + numberBtns[i].innerHTML;
    })
}

for (let i = 0; i < operationBtns.length - 1; i++) {
    operationBtns[i].addEventListener('click', function() {
        displayBlock.innerHTML = displayBlock.innerHTML + operationBtns[i].innerHTML;
    })
}

operationBtns[operationBtns.length - 1].addEventListener('click', function() {
    const result = eval(displayBlock.innerHTML);
    displayBlock.innerHTML = result;
})