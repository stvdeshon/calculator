const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.face');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const negToggle = document.querySelector('#negative-toggle');
const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
//the number string for the display
let number = '';
let inputOne = '';
let inputTwo = '';
let operatorSymbol = '';
let dot = false;

//find a way to call operator start

function addition(num1, num2){
    return number = num1 + num2;
}

function subtraction(num1, num2){
    return number = num1 - num2;
}

function multiplication(num1, num2){
    return number = num1 * num2;
}

function division(num1, num2){
    return number = num1 / num2;
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator === '+') return addition(num1, num2);
    if(operator === '-') return subtraction(num1, num2);
    if(operator === '*') return multiplication(num1, num2);
    if(operator === '/') return division(num1, num2);

    
}

// function callOperate(){
//     return operate(operatorSymbol, inputOne, inputTwo);
// }




//currently adds numbers to the display
numbers.forEach(function(item) {
    item.addEventListener('click', function(e) {    
        number += e.target.textContent;
        display.textContent = number;
  });
  console.log(operate());
})

operators.forEach(function(item) {
    item.addEventListener('click', function(e) {
        operatorSymbol = e.target.textContent;
        if(inputOne.length === 0 || inputTwo.length >= 1) {
            inputOne = number;
            inputTwo = '';
        }
        else if(inputOne.length >= 1 || inputTwo.length === 0){ 
            inputTwo = number;
            inputOne = '';
        } 
        number = '';
        display.textContent = number;        

        dot = false;
        console.log(operatorSymbol);
        console.log(operate());
        //put number into input1, if input1 has something, put number into input2, delete number both times
        
        if(inputTwo === '') return operate(operatorSymbol, inputOne, inputTwo);

    })
})

equal.addEventListener('click', operate);
equal.addEventListener('click', function(){
    // if(inputOne.length === 0 || inputTwo.length >= 1) {
    //     inputOne = number;
    //     inputTwo = '';
    // }
    // else if(inputOne.length >= 1 || inputTwo.length === 0){ 
    //     inputTwo = number;
    //     inputOne = '';
    // } 
    console.log(operate(operatorSymbol, inputOne, inputTwo));
    console.log('Im number' + number);
    console.log('im input one' + inputOne);
    console.log('im input two' + inputTwo);
    console.log(operatorSymbol);
    })


    // saved in case new version breaks
// operators.forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         number += e.target.textContent;
//         display.textContent = number;
//         operate(operatorSymbol, number, numberTwo);
//         dot = false;
//         console.log(number);
//     })
// })

decimal.addEventListener('click', function(e) {
    if(!dot){
    number += e.target.textContent;
    display.textContent = number;
    }
})

function decimalStop(){
    if(number.includes('.')) dot = true;
    if(!number.includes('.')) dot = false;
}

decimal.addEventListener('click', decimalStop);

//deletes the latest input
del.addEventListener('click', function(){
    if(number.length > 0) number = number.slice(0, -1);
    display.textContent = number;
})

//clears the display and returns toggles to default
function erase(){
    display.innerHTML = '';
    number = ''
    inputOne = '';
    inputTwo = '';
    dot = false;
    if(!dot) document.getElementById('decimal').disabled = false;
}

clear.addEventListener('click', erase);
