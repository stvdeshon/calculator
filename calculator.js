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
let evaluated = false;


numpad.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    if(operator === ''){
        operandOne += e.target.textContent;
        console.log(`operand one first pass is ${operandOne}`);
    } else if (evaluated === true){
        operandTwo = '';
        operandOne = '';
        operandOne = e.target.textContent;
        console.log('this condition is firing');
    } else if (operandOne !== '' || operator === '') {
        operandTwo += e.target.textContent;
        console.log(`operand one is ${operandOne} operand two is ${operandTwo}`);
    } 
    console.log(`displayvalue is ${displayValue}`);
    if(displayValue.includes('.')) document.getElementById('decimal').disabled = true;
    })
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if(operandOne === '') return;
        operator = e.target.textContent;
        operandTwo = '';
        displayValue = '';
        evaluated = false;
        console.log(`displayvalue is ${displayValue}`);
        if(!displayValue.includes('.') && operator !== ''){
            document.getElementById('decimal').disabled = false;
            console.log('decimal condition is working at all')
       }
    })
})


equal.addEventListener('click', function(e) {
    if(operandOne === '' || operandTwo === '') return;
    operandOne = operate(operator, operandOne, operandTwo);
    display.textContent = operandOne;
    displayValue = '';
    console.log(`hi im ${operandOne} and im ${operator} and im${operandTwo}`);
    console.log(`displayvalue is ${displayValue}  operator is ${operator}`);
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
    evaluated = false;
    document.getElementById('decimal').disabled = false;
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
    evaluated = true;
    if(operation === '+') return addition(num1, num2);
    if(operation === '-') return subtraction(num1, num2);
    if(operation === '*') return multiplication(num1, num2);
    if(operation === '/') return division(num1, num2);
}