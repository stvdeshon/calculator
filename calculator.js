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

//still need to update to display to UI properly


numpad.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        // number += e.target.textContent;
        // display.textContent = number;

        //tries to prevent early use of operator to prevent bugs
        if(operandOne === '' && operator.length > 0) operator = '';

        //helps solve division by 0;
        if(operandOne === undefined) operandOne = '';

        //attempts to only allow input to operandOne on the condition the operator is empty
        if(operator.length === 0) {
            operandOne += e.target.textContent;
        }else if(operator.length > 0) operandTwo += e.target.textContent;
  });
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        // number += e.target.textContent;
        // display.textContent = number;
        operator = e.target.textContent;

        //helps solve division by 0
        if(operandOne === undefined) return;

        //tries to prevent early use of operator to prevent bugs
        if(operandOne.length === 0 && operator.length > 0) operator = '';

        //calls operate(), stores its return value in operandOne, and refreshes operandTwo
        //can add and subtract fine, can only multiply and divide first then breaks
        if(operandTwo.length > 0) {
            operandTwo = '';
            // operandOne = operate(operator, operandOne, operandTwo);
        }
    })
})




equal.addEventListener('click', function(e) {
    console.log(`hi im ${operandOne} and im ${operator} and im${operandTwo}`);
    // console.log(operate(operator, operandOne, operandTwo));
    operandOne = operate(operator, operandOne, operandTwo);

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
    // if(number.includes('.')){
    // dot = true;
    // }else if(!number.includes('.')){
    //     dot = false;
    // }
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
    display.innerHTML = '';
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
    if(num2 === 0) return undefined;
    if(operation === '+') return addition(num1, num2);
    if(operation === '-') return subtraction(num1, num2);
    if(operation === '*') return multiplication(num1, num2);
    if(operation === '/') return division(num1, num2);
}