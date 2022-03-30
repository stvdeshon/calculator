const display = document.querySelector('#display');
const numpad = document.querySelectorAll('.numpad');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const negToggle = document.querySelector('#negative-toggle');
const decimal = document.querySelector('#decimal');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
let operandOne = '';
let operandTwo = '';
let operator = '';
let displayValue = '';


numpad.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        displayValue += e.target.textContent;
        display.textContent = displayValue
        if(operator === ''){
        operandOne += e.target.textContent;
        console.log(`operand one first pass is ${operandOne}`);
    } else if (operandOne !== '' || operator === '') {
        operandTwo += e.target.textContent;
        console.log(`operand one is ${operandOne} operand two is ${operandTwo}`);
    }
    if(displayValue.includes('.')) document.getElementById('decimal').disabled = true;
    if(!displayValue.includes('.')) document.getElementById('decimal').disabled = false;
    })
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if(operandOne === '') return;
        operator = e.target.textContent;
        operandTwo = '';
        displayValue = '';
        // if(display.text === operandTwo) {
        //     operandOne = operate(operator, operandOne, operandTwo);
        //     display.textContent = operandOne;
        // }
        // if(operandOne !== '' && operandTwo !== '') console.log(`the function says ${operate(operator, operandOne, operandTwo)}`);

    })
})


equal.addEventListener('click', function(e) {
    if(operandOne === '' || operandTwo === '') return;
    operandOne = operate(operator, operandOne, operandTwo);
    display.textContent = operandOne;
    console.log(`hi im ${operandOne} and im ${operator} and im${operandTwo}`);
})

//quasi-functional delete mechanic 
del.addEventListener('click', function(){
    // display.textContent = displayvalue;
    if(display.textContent === operandOne){
        operandOne = operandOne.slice(0, -1);
        display.textContent = operandOne;
    } else if(display.textContent === operandTwo) {
        operandTwo = operandTwo.slice(0, -1);
        display.textContent = operandTwo;
    }
})

//restores everything to default
function erase(){
    display.textContent = '';
    displayValue = '';
    operandOne = '';
    operandTwo = '';
    operator = '';
}

clear.addEventListener('click', erase);


function addition(num1, num2){
    return num1 + num2;
}

function subtraction(num1, num2){
    return num1 - num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function operate(operation, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operation === '+') return addition(num1, num2);
    if(operation === '-') return subtraction(num1, num2);
    if(operation === '*') return multiplication(num1, num2);
    if(operation === '/') return division(num1, num2);
}