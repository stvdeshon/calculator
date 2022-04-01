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
let input = '';

/* The following boolean allows clean user input if they use the numpad after
calculation by preventing them from appending their new input to the previous result. */
let evaluated = false;


numpad.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        input += e.target.textContent;
        display.textContent = input;
    if(operator === ''){
        operandOne += e.target.textContent;
    } else if (evaluated === true){
        operandTwo = '';
        operandOne = '';
        operandOne = e.target.textContent;
    } else if (operandOne !== '' || operator === '') {
        operandTwo += e.target.textContent;
    } 
    //toggles decimal input
    if(input.includes('.')) document.getElementById('decimal').disabled = true;
    })
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if(operandOne === '') return;
        //the following allows continuous input and calculation via operators
        if(operandOne !== '' && operandTwo !== '' && evaluated === false) {
            operandOne = operate(operator, operandOne, operandTwo);
            operator = e.target.textContent;
            display.textContent = operandOne;
            console.log('misfire here')
        }
        operator = e.target.textContent;
        operandTwo = '';
        input = '';
        evaluated = false;
        //toggles decimal input
        if(!input.includes('.') && operator !== ''){
            document.getElementById('decimal').disabled = false;
       }
    })
})


equal.addEventListener('click', function(e) {
    if(operandOne === '' || operandTwo === '') return;
    operandOne = operate(operator, operandOne, operandTwo);
    display.textContent = operandOne;
    input = '';
})

del.addEventListener('click', function(){
    if(display.textContent === operandOne){
        operandOne = operandOne.slice(0, -1);
        input = operandOne;
        display.textContent = operandOne;
    } else if(display.textContent === operandTwo) {
        operandTwo = operandTwo.slice(0, -1);
        input = operandTwo;
        display.textContent = operandTwo;
    }
    if(!input.includes('.')) document.getElementById('decimal').disabled = false;
})

//Toggles the +/- button
negToggle.addEventListener('click', function(e) {
    const neg = '-';
    if(display.textContent === operandOne && !operandOne.includes('-')){
        operandOne = neg.concat(operandOne);
        input = operandOne;
        display.textContent = operandOne;
    } else if(display.textContent === operandOne && operandOne.includes('-')){
        operandOne = operandOne.substring(1);
        input = operandOne;
        display.textContent = operandOne;
    } else if(display.textContent === operandTwo && !operandTwo.includes('-')) {
        operandTwo = neg.concat(operandTwo);
        input = operandTwo;
        display.textContent = operandTwo;
    } else if(display.textContent === operandTwo && operandTwo.includes('-')) {
        operandTwo = operandTwo.substring(1);
        input = operandTwo;
        display.textContent = operandTwo;
    }
})

function erase(){
    display.textContent = '';
    input = '';
    operandOne = '';
    operandTwo = '';
    operator = '';
    evaluated = false;
    document.getElementById('decimal').disabled = false;
}

clear.addEventListener('click', erase);

function addition(num1, num2){
    const round = num1 + num2;
    return Math.round((round + Number.EPSILON) * 100) / 100;
}

function subtraction(num1, num2){
    const round = num1 - num2;
    return Math.round((round + Number.EPSILON) * 100) / 100;
}

function multiplication(num1, num2){
    const round = num1 * num2;
    return Math.round((round + Number.EPSILON) * 100) / 100;
}

function division(num1, num2){
    const round = num1 / num2;
    return Math.round((round + Number.EPSILON) * 100) / 100;
}

function operate(operation, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    evaluated = true;
    if(operation === '+') return addition(num1, num2);
    if(operation === '-') return subtraction(num1, num2);
    if(operation === '×') return multiplication(num1, num2);
    if(operation === '÷' && num2 === 0) return 'ERROR';
    if(operation === '÷') return division(num1, num2);
}