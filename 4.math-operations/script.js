// Реалізувати функцію, яка виконуватиме математичні операції (+ - * /)з введеними користувачем числами.

let numFirst = prompt("enter first number");
while (!numFirst || isNaN(numFirst)) {
    numFirst = prompt("enter first number", numFirst);
}
numFirst = +numFirst;

let numSecond = prompt("enter second number");
while (!numSecond || isNaN(numSecond)) {
    numSecond = prompt("enter second number", numSecond);
}
numSecond = +numSecond;

let operation = prompt("Enter operation type, select one of the options +  -  *  /");

const isOperation = (userChois) =>
    userChois === "+" || userChois === "-" || userChois === "/" || userChois === "*";

while (!isOperation(operation)) {
    operation = prompt("Enter operation type, select one of the options +  -  *  /", operation);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

function calc(operator) {
    switch (operator) {
        case "+":
            return `${numFirst} + ${numSecond} = ${add(numFirst, numSecond)}`;
        case "-":
            return `${numFirst} - ${numSecond} = ${subtract(numFirst, numSecond)}`;
        case "/":
            return `${numFirst} / ${numSecond} = ${divide(numFirst, numSecond)}`;
        case "*":
            return `${numFirst} * ${numSecond} = ${multiply(numFirst, numSecond)}`;
        default:
            return "oops, something went wrong";
    }
}
console.log(calc(operation));
