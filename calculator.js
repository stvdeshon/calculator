const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.face');
const operators = document.querySelectorAll('.operators');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const negToggle = document.querySelector('#negative-toggle');
const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
let dot = false;


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

function operate(operator, num1, num2){
    if(operator === '+') return addition(num1, num2);
    if(operator === '-') return subtraction(num1, num2);
    if(operator === '*') return multiplication(num1, num2);
    if(operator === '/') return division(num1, num2);
}

//the number string for the display
number = '';

//currently adds numbers to the display
numbers.forEach(function(item) {
    item.addEventListener('click', function(e) {
        number += e.target.textContent;
        display.textContent = number;
    });
});

//the variable that holds the operator strings
symbol = '';


//Right now these don't operate on the numbers
operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        symbol = e.target.textContent;
        display.textContent = symbol;
    })
})

//the following three functions display the decimal and toggle it 
function decimalStop(){
    dot = true;
}

decimal.addEventListener('click', function(e) {
    if(!dot){
    display.textContent += e.target.textContent;
    }
})
decimal.addEventListener('click', decimalStop);

//clears the display and returns toggles to default
function erase(){
    display.innerHTML = '';
    number = ''
    dot = false;
}

clear.addEventListener('click', erase);
