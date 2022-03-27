const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.face');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const negToggle = document.querySelector('#negative-toggle');
const decimal = document.querySelector('#decimal');
// const add = document.querySelector('#add');
// const subtract = document.querySelector('#subtract');
// const multiply = document.querySelector('#multiply');
// const divide = document.querySelector('#divide');
// const equal = document.querySelector('#equal');
// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
// const four = document.querySelector('#four');
// const five = document.querySelector('#five');
// const six = document.querySelector('#six');
// const seven = document.querySelector('#seven');
// const eight = document.querySelector('#eight');
// const nine = document.querySelector('#nine');


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

let dot = false;

//the number string for the display
let number = '';

//currently adds numbers to the display
numbers.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        number += e.target.textContent;
        display.textContent = number;
  });
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        number += e.target.textContent;
        display.textContent = number;
    })
})

//the following two lines appear completely useless, for now
// if(dot) document.getElementById('decimal').disabled = true;
// if(!dot) document.getElementById('decimal').disabled = false;

// dot = false; must also come from the operators

decimal.addEventListener('click', function(e) {
    if(!dot){
    number += e.target.textContent;
    display.textContent = number;
    }
})

function decimalStop(){
    if(number.includes('.')){
    dot = true;
    }else if(!number.includes('.')){
        dot = false;
    }
}

decimal.addEventListener('click', decimalStop);

//deletes the latest input
del.addEventListener('click', function(){
    number = number.slice(0, -1);
    display.textContent = number;
})
console.log(number);
//clears the display and returns toggles to default
function erase(){
    display.innerHTML = '';
    number = ''
    dot = false;
    if(!dot) document.getElementById('decimal').disabled = false;
}

clear.addEventListener('click', erase);
