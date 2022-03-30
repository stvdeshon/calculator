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
let dot = false;
let operandOne = '';
let operandTwo = '';
let operator = '';
let displayValue = '';


numpad.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        displayValue += e.target.textContent;
        display.textContent = displayValue
        if(operandOne === '' || operator === ''){
        operandOne += e.target.textContent;
        console.log(`operand one first pass is ${operandOne}`);
    } else if (operandOne !== '' && operator !== '') {
        operandTwo += e.target.textContent;
        console.log(`operand one is ${operandOne} operand two is ${operandTwo}`);
    }
    })
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        operator = e.target.textContent;
        displayValue = '';
        if(operandOne !== '' && operandTwo !== '') {
            operandOne = operate(operator, operandOne, operandTwo);
            display.textContent = operandOne;
        }
        if(operandOne !== '' && operandTwo !== '') console.log(`the function says ${operate(operator, operandOne, operandTwo)}`);

        
    })
})




equal.addEventListener('click', function(e) {
    operandOne = operate(operator, operandOne, operandTwo);
    display.textContent = operandOne;
    console.log(`hi im ${operandOne} and im ${operator} and im${operandTwo}`);
})

// decimal.addEventListener('click', function(e) {
//     // if(!dot){
//     // number += e.target.textContent;
//     // display.textContent = number;
//     // }
//     if(operator.length === 0 && !operandOne.includes('.')) {
//         operandOne += e.target.textContent;
//     }else if(operator.length > 0 && !operandTwo.includes('.')) operandTwo += e.target.textContent;
// })

function decimalStop(){
    if(display.textContent.includes('.')){
    dot = true;
    }else if(!display.textContent.includes('.')){
        dot = false;
    }
    //attempts to only allow input to operandOne on the condition the operator is empty
    

}
decimal.addEventListener('click', decimalStop);

//quasi-functional delete mechanic 
del.addEventListener('click', function(){
    // display.textContent = displayvalue;
    console.log(`hi im ${operandOne} and im ${operator} and im${operandTwo}`);
    if(operator.length === 0) {
        operandOne = operandOne.slice(0, 1);
    }else if(operator.length > 0) operandTwo = operandTwo.slice(0, -1);
})

//restores everything to default
function erase(){
    display.textContent = '';
    displayValue = '';
    operandOne = '';
    operandTwo = '';
    operator = '';
    dot = false;
    if(!dot) document.getElementById('decimal').disabled = false;
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