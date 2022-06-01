/* let normalSpeed = 80; 
let isFast = Number.parseInt(prompt("Enter current speed"));

isFast > normalSpeed ? document.write('<h1>You are too fast!</h1>'):document.write('<h1>You are slow.</h1>'); */

function add(num1, num2) {
    return num1 + num2
}
function subtraction(num1, num2) {
    return num1 - num2
}
function multiplication(num1, num2) {
    return num1 * num2
}
function division(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}


let num1Val = Number.parseInt(prompt('Enter the first number'));
let num2Val = Number.parseInt(prompt('Please enter the second number'));
let operatorVal = prompt(`Enter "add", "subtraction","multiplication", or "division"`);

calculator(num1Val, num2Val, operatorVal);
console.log(operatorVal);